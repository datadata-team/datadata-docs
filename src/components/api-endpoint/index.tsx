import { copyText } from "@site/src/utils";
import clsx from "clsx";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { AiFillCheckCircle, AiOutlineCopy } from "react-icons/ai";

export type APIEndpointProps = {
  url: string;
  method?: string;
};

export function APIEndpoint(props: APIEndpointProps) {
  const { url, method } = props;

  const [copied, setCopied] = useState(false);

  const urlParts = useMemo(() => {
    const parts = url.split("/");
    return parts.map((part, index) => {
      const last = index === parts.length - 1;
      const isParam = part.startsWith(":");

      if (isParam) {
        part = `{${part.slice(1)}}`;
      }

      return (
        <Fragment key={index}>
          <span
            className={clsx({
              "text-blue-500": isParam,
            })}
          >
            {part}
          </span>
          {!last && <span className="text-gray-500">/</span>}
        </Fragment>
      );
    });
  }, [url]);

  const handleCopy = useCallback(() => {
    copyText(url);
    setCopied(true);
  }, [url]);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timer = setTimeout(() => {
      setCopied(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  return (
    <div className="flex gap-2 font-mono items-center border border-solid p-2 rounded-md mb-4">
      <div
        className={clsx(" px-2 leading-[32px] rounded-md uppercase font-bold", {
          "text-blue-500": method === "get",
          "text-green-500": method === "put",
          "text-yellow-500": method === "post",
          "text-red-500": method === "delete",
        })}
      >
        {method ?? "get"}
      </div>
      <div className="flex-1 flex items-center gap-0.5 font-medium">{urlParts}</div>
      <button
        onClick={handleCopy}
        className={clsx("flex items-center justify-center cursor-pointer border-none bg-transparent text-[24px] p-1", {
          "text-green-500": copied,
        })}
      >
        {copied ? <AiFillCheckCircle /> : <AiOutlineCopy />}
      </button>
    </div>
  );
}
