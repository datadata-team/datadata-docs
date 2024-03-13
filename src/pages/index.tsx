import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Page() {
  return <Redirect to={useBaseUrl("/docs/get-started/welcome")} />;
}
