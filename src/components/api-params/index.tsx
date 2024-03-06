import CodeBlock from "@theme/CodeBlock";
import { useMemo, type ReactNode } from "react";
import { APIParam } from "./api-param";

export type APIParamsProps = {
  type?: string;
  title: ReactNode;
  extra?: ReactNode;
  code?: string;
  params?: any[];
};

export function APIParams(props: APIParamsProps) {
  const { type, title, extra, code, params } = props;

  const content = useMemo(() => {
    if (params && params.length > 0) {
      return params.map((param) => {
        return <APIParam key={param.name} {...param} />;
      });
    }
    if (code) {
      return (
        <CodeBlock language="typescript" showLineNumbers={true}>
          {code}
        </CodeBlock>
      );
    }
    return null;
  }, [code, params]);

  if (content) {
    return (
      <div>
        <header>
          <h2 className="flex gap-1 items-center">
            {title}
            {type && (
              <span className="text-xs bg-lime-500 text-white font-normal rounded-md px-1.5 py-0.5">{type}</span>
            )}
          </h2>
          {extra && <div>{extra}</div>}
        </header>
        <main>{content}</main>
      </div>
    );
  }

  return null;
}
