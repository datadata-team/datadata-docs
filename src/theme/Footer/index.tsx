import type { WrapperProps } from "@docusaurus/types";
import { useIsInsideIframe } from "@site/src/hooks";
import Footer from "@theme-original/Footer";
import type FooterType from "@theme/Footer";
import { Fragment, type ReactNode } from "react";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  const isInsideIframe = useIsInsideIframe();

  if (isInsideIframe) {
    return null;
  }
  return (
    <Fragment>
      <Footer {...props} />
    </Fragment>
  );
}
