import { DATADATA_BASE_URL_CN, DATADATA_BASE_URL_DEV } from "@site/src/config";
import { production } from "@site/src/utils";
import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import { HTTPSnippet, type HarRequest } from "httpsnippet";
import { useMemo } from "react";

export type HttpSnippetsProps = {
  token?: string;
  request: Pick<HarRequest, "method" | "url"> & Partial<HarRequest>;
};

export function HttpSnippets(props: HttpSnippetsProps) {
  const { token, request } = props;

  const baseURL = useMemo(() => {
    return production ? DATADATA_BASE_URL_CN : DATADATA_BASE_URL_DEV;
  }, []);

  const snippet = useMemo(() => {
    if (!/^https?:\/\//.test(request.url)) {
      request.url = `${baseURL}${request.url}`;
    }
    request.method = request.method.toUpperCase();
    request.headers = [
      ...(request.headers ?? []),
      {
        name: "x-datadata-api-token",
        value: token ?? "<your-token>",
        comment: "datadata api token",
      },
    ];
    return new HTTPSnippet(request as any);
  }, [token, request, baseURL]);

  return (
    <Tabs groupId="http-snippet" queryString={true}>
      <TabItem value="curl" label="Curl">
        <CodeBlock language="shell" showLineNumbers={true}>
          {snippet.convert("shell")}
        </CodeBlock>
      </TabItem>
      <TabItem value="go" label="Go">
        <CodeBlock language="go" showLineNumbers={true}>
          {snippet.convert("go")}
        </CodeBlock>
      </TabItem>
      <TabItem value="node" label="Node">
        <CodeBlock language="javascript" showLineNumbers={true}>
          {snippet.convert("node", "fetch")}
        </CodeBlock>
      </TabItem>
      <TabItem value="python" label="Python">
        <CodeBlock language="python" showLineNumbers={true}>
          {snippet.convert("python")}
        </CodeBlock>
      </TabItem>
      <TabItem value="java" label="Java">
        <CodeBlock language="java" showLineNumbers={true}>
          {snippet.convert("java", "okhttp")}
        </CodeBlock>
      </TabItem>
      <TabItem value="php" label="Php">
        <CodeBlock language="php" showLineNumbers={true}>
          {snippet.convert("php")}
        </CodeBlock>
      </TabItem>
      <TabItem value="http" label="Http">
        <CodeBlock language="http" showLineNumbers={true}>
          {snippet.convert("http", "http1.1")}
        </CodeBlock>
      </TabItem>
    </Tabs>
  );
}
