import { HttpSnippets } from "@site/src/components/http-snippets";
import Layout from "@theme/Layout";

export default function Test() {
  return (
    <Layout>
      <HttpSnippets
        request={{
          method: "get",
          url: "http://localhost:3000/datadata-docs/test",
        }}
      />
    </Layout>
  );
}
