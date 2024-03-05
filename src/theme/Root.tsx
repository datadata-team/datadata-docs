import { Fragment, type PropsWithChildren } from "react";

export default function Root({ children }: PropsWithChildren) {
  return <Fragment>{children}</Fragment>;
}
