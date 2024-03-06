export type APIEndpointParam = {
  name: string;
  type: "string";
  description?: string;
};

export type APIEndpointHeader = {
  name: string;
  type: "string";
  required?: boolean;
  description?: string;
  defaultValue?: string | number | boolean;
};
export type APIEndpointQueryParam = {
  name: string;
  type: "string" | "number" | "boolean";
  isArray?: boolean;
  required?: boolean;
  description?: string;
  defaultValue?: string | number | boolean;
};

export type APIEndpoint = {
  url: string;
  method: string;
  description?: string;
  body?:
    | {
        type: "application/json";
      }
    | {
        type: "multipart/form-data";
      };
  params?: Array<APIEndpointParam>;
  headers?: Array<APIEndpointHeader>;
  queryParams?: Array<APIEndpointQueryParam>;
};
