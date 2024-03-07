import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { useCallback, useEffect, useState } from "react";

function Content() {
  const [iframe, setIframe] = useState<HTMLIFrameElement | null>(null);

  const { colorMode } = useColorMode();

  const triggerColorModeChange = useCallback(() => {
    iframe?.contentWindow.postMessage({ type: "color-mode", value: colorMode });
  }, [colorMode, iframe]);

  const handleOnload = useCallback(() => {
    triggerColorModeChange();
  }, [triggerColorModeChange]);

  useEffect(() => {
    triggerColorModeChange();
  }, [triggerColorModeChange, colorMode]);

  return (
    <iframe
      ref={setIframe}
      sandbox="allow-scripts allow-same-origin"
      src={useBaseUrl("api-viewer.html")}
      className="flex-1 h-full w-full"
      onLoad={handleOnload}
    ></iframe>
  );
}

export default function RestAPI() {
  return (
    <Layout title="Rest API" noFooter={true}>
      <Content />
    </Layout>
  );
}

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "elements-api": any;
      }
    }
  }
}
