import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { DATADATA_API_TOKEN, DATADATA_WEB_COMPONENTS_URL } from "@site/src/config";
import { forwardRef, useEffect, useLayoutEffect, useState, type HTMLAttributes, type PropsWithChildren } from "react";

export type DatadataEmbeddedViewerProps = HTMLAttributes<HTMLElement> &
  PropsWithChildren<{
    region: "cn" | "global";
    queryId: string;
  }>;

export const DatadataEmbeddedViewer = forwardRef<HTMLElement, DatadataEmbeddedViewerProps>((props, ref) => {
  const { region, queryId, children, ...htmlProps } = props;

  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  const [hostElement, setHostElement] = useState<HTMLElement>(null);

  useLayoutEffect(() => {
    loadDatadataComponents();
  }, []);

  useEffect(() => {
    if (typeof ref === "function") {
      ref(hostElement);
    } else if (ref) {
      ref.current = hostElement;
    }
  }, [hostElement, ref]);

  return (
    <datadata-embedded-viewer
      {...htmlProps}
      ref={setHostElement}
      language={currentLocale}
      api-token={DATADATA_API_TOKEN}
      query-id={queryId}
    >
      {children}
    </datadata-embedded-viewer>
  );
});

DatadataEmbeddedViewer.displayName = "DatadataEmbeddedViewer";

async function loadDatadataComponents() {
  await eval(`import("${DATADATA_WEB_COMPONENTS_URL}");`);
}

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "datadata-embedded-viewer": any;
      }
    }
  }
}
