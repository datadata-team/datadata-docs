import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Fragment, type PropsWithChildren } from "react";

export default function Root({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <Head>
        <link rel="preload" href={useBaseUrl("/lib/stoplight-elements/styles.min.css")} as="style" />
        <link rel="preload" href={useBaseUrl("/lib/stoplight-elements/web-components.min.js")} as="script" />
      </Head>
      {children}
    </Fragment>
  );
}
