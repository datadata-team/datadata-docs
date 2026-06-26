import { useEffect, useRef, type RefObject } from "react";
import type { EventName } from "./interfaces";

const handles = new Map<string, RefObject<(payload: any) => any>>();

export function useLocalRpcHandler<T>(eventName: EventName<T>, fn: (payload: T) => void | Promise<void>): void;
export function useLocalRpcHandler<T, R>(eventName: EventName<T, R>, fn: (payload: T) => R | Promise<R>): void;
export function useLocalRpcHandler<T, R>(eventName: EventName<T, R>, fn: (payload: T) => R | Promise<R>): void {
  const handlerRef = useRef(fn);

  useEffect(() => {
    handlerRef.current = fn;
  }, [fn]);

  useEffect(() => {
    if (handles.has(eventName)) {
      throw new Error(`local rpc handler already exists: ${eventName}`);
    }
    handles.set(eventName, handlerRef);
    return () => {
      handles.delete(eventName);
    };
  }, [eventName]);
}

export async function localRpcCall(eventName: EventName<never>): Promise<void>;
export async function localRpcCall<T>(eventName: EventName<T>, params: T): Promise<void>;
export async function localRpcCall<T, R>(eventName: EventName<T, R>, params: T): Promise<R>;
export async function localRpcCall<T, R>(eventName: EventName<T, R>, params?: T): Promise<R> {
  const handler = handles.get(eventName);
  if (!handler) {
    throw new Error(`local rpc handler not found: ${eventName}`);
  }
  return await handler.current(params);
}
