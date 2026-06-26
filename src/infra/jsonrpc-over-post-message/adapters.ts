import type { Adapter } from "./interfaces";

export function createIframeClientAdapter(targetOrigin: string): Adapter {
  return {
    postMessage(message) {
      window.parent.postMessage(message, targetOrigin);
    },
    addMessageEventListener(listener) {
      window.addEventListener("message", listener);
    },
    removeMessageEventListener(listener) {
      window.removeEventListener("message", listener);
    },
  };
}

export function createIframeServerAdapter(targetOrigin: string): Adapter {
  return {
    postMessage(message) {
      window.parent.postMessage(message, targetOrigin);
    },
    addMessageEventListener(listener) {
      window.addEventListener("message", listener);
    },
    removeMessageEventListener(listener) {
      window.removeEventListener("message", listener);
    },
  };
}
