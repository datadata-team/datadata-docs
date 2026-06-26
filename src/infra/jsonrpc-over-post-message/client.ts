import { JSONRPC_2_0 } from "./constants";
import { errors } from "./errors";
import type {
  Adapter,
  ClientOptions,
  JsonRpcNotification,
  JsonRpcRequest,
  JsonRpcResponse,
  ParamsType,
  PendingRequest,
} from "./interfaces";
import { Sequence } from "./sequence";

export class Client {
  private readonly adapter: Adapter;
  private readonly options: ClientOptions;
  private readonly sequence = new Sequence();
  private readonly pendingRequests = new Map<string, PendingRequest>();

  constructor(adapter: Adapter, options?: ClientOptions) {
    this.adapter = adapter;
    this.options = options ?? { timeout: 3000 };
    this.handleMessage = this.handleMessage.bind(this);
    this.adapter.addMessageEventListener(this.handleMessage);
  }

  public async call<T = any>(method: string, params?: ParamsType, options?: Partial<ClientOptions>): Promise<T> {
    const timeout = options?.timeout ?? this.options.timeout;
    const id = `${this.sequence.next()}`;
    const request: JsonRpcRequest = {
      jsonrpc: JSONRPC_2_0,
      id: id,
      method: method,
      params: params,
    };
    return new Promise<T>((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pendingRequests.delete(id);
        reject(errors.requestTimeout(method, timeout));
      }, timeout);
      this.pendingRequests.set(id, { resolve, reject, timer });
      this.adapter.postMessage(request);
    });
  }

  public notify(method: string, params?: ParamsType) {
    const notification: JsonRpcNotification = {
      jsonrpc: JSONRPC_2_0,
      method: method,
      params: params,
    };
    this.adapter.postMessage(notification);
  }

  public destroy() {
    this.adapter.removeMessageEventListener(this.handleMessage);
  }

  private handleMessage(event: MessageEvent) {
    const request = this.getResponseFromMessageEvent(event);
    if (!request) {
      return;
    }
    const { id, result, error } = request;
    const pendingRequest = this.pendingRequests.get(id);
    if (!pendingRequest) {
      return;
    }
    this.pendingRequests.delete(id);
    clearTimeout(pendingRequest.timer);
    if (error) {
      pendingRequest.reject(error);
    } else {
      pendingRequest.resolve(result);
    }
  }

  private getResponseFromMessageEvent(event: MessageEvent): JsonRpcResponse | null {
    const { data } = event;
    if (typeof data !== "object" || data.jsonrpc !== JSONRPC_2_0) {
      return null;
    }
    return data as JsonRpcResponse;
  }
}
