import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { DATADATA_API_TOKEN, DATADATA_WEB_COMPONENTS_URL } from "@site/src/config";
import clsx from "clsx";
import { forwardRef, useEffect, useLayoutEffect, useState, type HTMLAttributes, type PropsWithChildren } from "react";

export type DatadataEmbeddedViewerProps = HTMLAttributes<HTMLElement> &
  PropsWithChildren<{
    queryId: string;
    bordered?: boolean;
  }>;

export const DatadataEmbeddedViewer = forwardRef<HTMLElement, DatadataEmbeddedViewerProps>((props, ref) => {
  const { queryId, children, bordered, ...htmlProps } = props;

  const { colorMode } = useColorMode();
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
      class={clsx("mb-4", htmlProps.className, {
        "border-none": !bordered,
        "border border-solid border-gray-200 dark:border-gray-800": bordered,
      })}
      theme={colorMode}
      query-id={queryId}
      language={currentLocale}
      api-token={DATADATA_API_TOKEN}
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
