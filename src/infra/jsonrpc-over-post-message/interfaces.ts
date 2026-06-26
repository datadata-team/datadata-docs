import type { JSONRPC_2_0 } from "./constants";

export type ClientOptions = {
  /**
   * @default 3000
   */
  timeout: number;
};

export type CallOptions = Pick<ClientOptions, "timeout">;

export type ServerOptions = {
  /**
   * 开启后，可以重复注册以覆盖已注册的方法
   * @default false
   */
  enableMethodOverride?: boolean;
};

export type PendingRequest<T = any> = {
  timer: ReturnType<typeof setTimeout>;
  reject: (reason?: any) => void;
  resolve: (value: T | PromiseLike<T>) => void;
};

export type ParamsType = any[] | Record<string, any>;

export type MethodHandler<P extends ParamsType = any[], R = any> = P extends any[]
  ? (...params: any[]) => R | Promise<R>
  : (params: P) => R | Promise<R>;

export interface JsonRpcRequest {
  jsonrpc: typeof JSONRPC_2_0;
  id?: string;
  method: string;
  params?: ParamsType;
}

export interface JsonRpcResponse {
  jsonrpc: typeof JSONRPC_2_0;
  id: string;
  error?: JsonRpcError;
  result?: any;
}

export interface JsonRpcError {
  code: number;
  message: string;
  data?: any;
}

export interface JsonRpcNotification {
  jsonrpc: typeof JSONRPC_2_0;
  method: string;
  params?: ParamsType;
}

export interface Adapter {
  postMessage(message: unknown): void;
  addMessageEventListener(listener: (event: MessageEvent) => void): void;
  removeMessageEventListener(listener: (event: MessageEvent) => void): void;
}
