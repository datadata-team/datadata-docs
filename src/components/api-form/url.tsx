import classed from "@classed-elements/react";
import { Button } from "flowbite-react";
import { Fragment, useMemo } from "react";
import { HTTPMethod } from "./http-method";

const Wrapper = classed.div`font-mono flex gap-2 border rounded-md p-2 border-gray-300 items-center`;
const Parts = classed.span`flex gap-1 flex-1 items-center`;

export type URLBarProps = {
  url: string;
  method: string;
};

export function URLBar(props: URLBarProps) {
  const { method, url: urlString } = props;

  const url = useMemo(() => new URL(urlString), [urlString]);

  const urlParts = useMemo(() => {
    const pathname = url.pathname;
    const parts = pathname.split("/");

    return parts.map((part, index) => {
      const last = index === parts.length - 1;
      return (
        <Fragment key={index}>
          <span>{part}</span>
          {!last && <span className=" text-gray-500">/</span>}
        </Fragment>
      );
    });
  }, []);

  return (
    <Wrapper>
      <HTTPMethod>{method}</HTTPMethod>
      <Parts>{urlParts}</Parts>
      <Button size="sm">Send</Button>
    </Wrapper>
  );
}
