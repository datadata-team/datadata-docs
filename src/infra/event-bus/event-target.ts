import { useEffect, useRef } from "react";
import type { EventName } from "./interfaces";

const eventTarget = new EventTarget();

export function useEvent(eventName: EventName<never>, fn: () => void): void;
export function useEvent<T>(eventName: EventName<T>, fn: (payload: T) => void): void;
export function useEvent<T>(eventName: EventName<T>, fn: (payload: T) => void): void {
  const callbackRef = useRef(fn);

  useEffect(() => {
    callbackRef.current = fn;
  }, [fn]);

  useEffect(() => {
    const callback = (event: Event) => {
      if (!(event instanceof CustomEvent)) {
        console.warn(`event is not a CustomEvent`);
        return;
      }
      const customerEvent = event as CustomEvent;
      callbackRef.current?.(customerEvent.detail);
    };
    eventTarget.addEventListener(eventName, callback);
    return () => {
      eventTarget.removeEventListener(eventName, callback);
    };
  }, [eventName]);
}

export function emitEvent(eventName: EventName<never>): void;
export function emitEvent<T>(eventName: EventName<T>, detail: T extends never ? undefined : T): void;
export function emitEvent<T = never>(eventName: EventName<T>, detail?: T): void {
  eventTarget.dispatchEvent(new CustomEvent(eventName, { detail }));
}
