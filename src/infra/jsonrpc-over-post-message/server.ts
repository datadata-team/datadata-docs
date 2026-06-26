import { errors, JsonRpcError } from "./errors";
import type { Adapter, JsonRpcRequest, JsonRpcResponse, MethodHandler, ParamsType, ServerOptions } from "./interfaces";

export class Server {
  private adapter: Adapter;
  private options: ServerOptions;
  private methods = new Map<string, MethodHandler>();

  constructor(adapter: Adapter, options: ServerOptions = {}) {
    this.adapter = adapter;
    this.options = options;
    this.handleMessage = this.handleMessage.bind(this);
    this.adapter.addMessageEventListener(this.handleMessage);
  }

  public register<P extends any[], R>(method: string, handler: MethodHandler<P, R>) {
    if (this.methods.has(method) && !this.options.enableMethodOverride) {
      throw errors.methodNameConflict(method);
    }
    this.methods.set(method, handler);
  }

  public destroy() {
    this.adapter.removeMessageEventListener(this.handleMessage);
  }

  private async handleMessage(event: MessageEvent) {
    const request = this.getRequestFromMessageEvent(event);
    if (!request) {
      return;
    }
    const { id, method, params } = request;
    if (!id) {
      try {
        await this.executeMethod(method, params);
      } catch (err) {
        console.error(err);
      }
      return;
    }

    let response: JsonRpcResponse;
    try {
      const result = await this.executeMethod(method, params);
      response = {
        jsonrpc: "2.0",
        id: id,
        result: result,
      };
    } catch (err) {
      response = {
        jsonrpc: "2.0",
        id: id,
      };
      if (err instanceof JsonRpcError) {
        response.error = err;
      } else if (err instanceof Error) {
        response.error = {
          code: -32000,
          message: err.message,
        };
      } else if (typeof err === "object" && err !== null && typeof (err as any).code === "number") {
        response.error = err as JsonRpcError;
      } else {
        response.error = errors.internalError();
      }
    }
    if (id) {
      this.adapter.postMessage(response);
    }
  }

  private async executeMethod(methodName: string, params?: ParamsType) {
    const method = this.methods.get(methodName);
    if (!method) {
      throw errors.methodNotFound(methodName);
    }
    if (Array.isArray(params)) {
      return await method.apply(this, params);
    } else {
      return await method.call(this, params);
    }
  }

  private getRequestFromMessageEvent(event: MessageEvent): JsonRpcRequest | null {
    const { data } = event;
    if (typeof data !== "object" || data.jsonrpc !== "2.0" || !data.method) {
      return null;
    }
    return data as JsonRpcRequest;
  }
}
