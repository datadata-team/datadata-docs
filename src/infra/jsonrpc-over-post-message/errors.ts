export class JsonRpcError<Data = any> {
  constructor(
    public readonly code: number, //
    public readonly message: string,
    public readonly data?: Data,
  ) {}
}

export const errors = {
  // builtin errors
  parseError(message?: string, data?: any) {
    return new JsonRpcError(-32700, message || "parse error", data);
  },
  invalidRequest(message?: string, data?: any) {
    return new JsonRpcError(-32600, message || "invalid request", data);
  },
  methodNotFound(method: string) {
    return new JsonRpcError(-32601, "method not found", { method });
  },
  invalidParams(message?: string, data?: any) {
    return new JsonRpcError(-32602, message || "invalid params", data);
  },
  internalError(message?: string, data?: any) {
    return new JsonRpcError(-32603, message || "internal error", data);
  },

  // custom errors
  requestTimeout(method: string, timeout: number) {
    return new JsonRpcError(-32000, "request timeout", { method, timeout });
  },
  methodNameConflict(method: string) {
    return new JsonRpcError(-32609, "method name conflict", { method });
  },
};
