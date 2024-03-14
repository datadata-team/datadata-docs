import sdk, { type EmbedOptions } from "@stackblitz/sdk";
import { useEffect, useState, type HTMLAttributes } from "react";

export type StackblitzProps = HTMLAttributes<HTMLElement> & {
  projectId: string;
  embedOptions?: EmbedOptions;
};

export function Stackblitz(props: StackblitzProps) {
  const { projectId, embedOptions, ...htmlProps } = props;

  const [element, setElement] = useState<HTMLElement>(null);

  useEffect(() => {
    if (!element) {
      return;
    }
    sdk.embedProjectId(element, projectId, embedOptions).then((vm) => {
      console.log({ vm });
    });
  }, [element, embedOptions, projectId]);

  return (
    <div {...htmlProps}>
      <div ref={setElement}></div>
    </div>
  );
}
