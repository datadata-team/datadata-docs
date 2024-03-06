import { isNil, toString } from "lodash-es";
import type { ReactNode } from "react";

export type APIParamProps = {
  name: string;
  type: string;
  required?: boolean;
  description?: ReactNode;
  defaultValue?: string | number | boolean;
};

export function APIParam(props: APIParamProps) {
  const { name, type, required, description, defaultValue } = props;

  return (
    <div>
      <h3 className="flex gap-2 items-center">
        <span>{name}</span>
        <span className="text-xs bg-lime-500 text-white font-normal rounded-md px-1.5 py-0.5">{type}</span>
        {required && (
          <span className="text-xs bg-orange-400 text-white font-normal rounded-md px-1.5 py-0.5">required</span>
        )}
        {!isNil(defaultValue) && (
          <span className="text-xs bg-blue-400 text-white font-normal rounded-md px-1.5 py-0.5">
            default: {toString(defaultValue)}
          </span>
        )}
      </h3>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}
