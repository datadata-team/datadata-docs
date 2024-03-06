import requestBodyCode from "!!raw-loader!./_request-body.ts";

export default {
  url: "/api/v1/charts",
  method: "post",
  headers: [
    {
      name: "x-datadata-api-token",
      type: "string",
      required: true,
      description: "API Token for the service",
    },
  ],
  body: {
    type: "application/json",
    code: requestBodyCode,
  },
  description: "根据 Chart ID 获取指定 Chart。",
};
