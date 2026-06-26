import { useColorMode } from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { Client, createIframeServerAdapter, Server } from "@site/src/infra/jsonrpc-over-post-message";
import { useEffect, useRef } from "react";

export function EmbedService() {
  const serverRef = useRef<Server>(null);
  const clientRef = useRef<Client>(null);
  const { setColorMode } = useColorMode();
  const { toggle, shown } = useNavbarMobileSidebar();

  useEffect(() => {
    const server = new Server(createIframeServerAdapter("*"));
    serverRef.current = server;
    const client = new Client({
      postMessage(message: unknown) {
        window.parent?.postMessage(message, "*");
      },
      addMessageEventListener(listener: (event: MessageEvent) => void) {
        window.addEventListener("message", listener);
      },
      removeMessageEventListener(listener: (event: MessageEvent) => void) {
        window.removeEventListener("message", listener);
      },
    });
    clientRef.current = client;

    server.register("open-external", () => {
      window.open(window.location.href, "_blank");
    });
    server.register("color-mode-change", ({ colorMode }) => {
      setTimeout(() => {
        setColorMode(colorMode);
      }, 300);
    });
    server.register("toggle-mobile-sidebar", () => {
      toggle();
    });

    //
    client
      .call("get-color-mode")
      .then((params) => {
        params.colorMode && setColorMode(params.colorMode);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      server.destroy();
      client.destroy();
    };
  }, []);

  return null;
}
