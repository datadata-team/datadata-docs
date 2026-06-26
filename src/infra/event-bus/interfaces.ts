export type EventName<T, R = never> = string & { detail: T; result: R };

export function defineEvent(type: string): EventName<never>;
export function defineEvent<T>(type: string): EventName<T>;
export function defineEvent<T, R>(type: string): EventName<T, R>;
export function defineEvent<T = never, R = never>(type: string): EventName<T, R> {
  return type as EventName<T, R>;
}
