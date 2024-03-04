import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  DATADATA_API_TOKEN,
  DATADATA_API_TOKEN_GLOBAL,
  DATADATA_WEB_COMPONENTS_URL,
  DATADATA_WEB_COMPONENTS_URL_GLOBAL,
} from "@site/src/constants";
import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";

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

  const apiToken = useMemo(() => {
    return region === "global" ? DATADATA_API_TOKEN_GLOBAL : DATADATA_API_TOKEN;
  }, [region]);

  useLayoutEffect(() => {
    // import(/* webpackIgnore: true */ "https://www.datadata.cn/web-components/embedded-editor/index.mjs");
    loadDatadataComponents(region);
  }, [region]);

  useEffect(() => {
    if (typeof ref === "function") {
      ref(hostElement);
    } else if (ref) {
      ref.current = hostElement;
    }
  }, [hostElement]);

  return (
    <datadata-embedded-viewer
      {...htmlProps}
      ref={setHostElement}
      language={currentLocale}
      api-token={apiToken}
      query-id={queryId}
    >
      {children}
    </datadata-embedded-viewer>
  );
});

async function loadDatadataComponents(region: "cn" | "global") {
  const url = region === "global" ? DATADATA_WEB_COMPONENTS_URL_GLOBAL : DATADATA_WEB_COMPONENTS_URL;
  await eval(`import("${url}");`);
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
