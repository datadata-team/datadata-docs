import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

function Content() {
  const { colorMode } = useColorMode();

  const [iframe, setIframe] = useState<HTMLIFrameElement | null>(null);
  const [loading, setLoading] = useState(true);

  const triggerColorModeChange = useCallback(() => {
    iframe?.contentWindow.postMessage({ type: "color-mode", value: colorMode });
  }, [colorMode, iframe]);

  const handleOnload = useCallback(() => {
    triggerColorModeChange();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [triggerColorModeChange]);

  useEffect(() => {
    triggerColorModeChange();
  }, [triggerColorModeChange, colorMode]);

  return (
    <div className="relative flex flex-col flex-1 h-full w-full">
      <iframe
        ref={setIframe}
        src={useBaseUrl("/openapi/api-viewer.html")}
        onLoad={handleOnload}
        className="flex-1 w-full"
      ></iframe>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center text-[56px] bg-white dark:bg-black opacity-45">
          <AiOutlineLoading className="animate-spin" />
        </div>
      )}
    </div>
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
