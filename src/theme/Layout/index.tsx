import type { WrapperProps } from "@docusaurus/types";
import { useIsInsideIframe } from "@site/src/hooks";
import { EmbedService } from "@site/src/infra/embed";
import Layout from "@theme-original/Layout";
import type LayoutType from "@theme/Layout";
import { Fragment, type ReactNode } from "react";

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const { children, ...rest } = props;
  const isInsideIframe = useIsInsideIframe();

  return (
    <Fragment>
      <Layout {...rest}>
        {children}
        {isInsideIframe && <EmbedService />}
      </Layout>
    </Fragment>
  );
}
