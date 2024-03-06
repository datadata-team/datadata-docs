export default {
  url: "/api/v1/charts/:id",
  method: "get",
  headers: [
    {
      name: "x-datadata-api-token",
      type: "string",
      required: true,
      description: "API Token for the service",
    },
  ],
  params: [
    {
      name: "id",
      type: "string",
      required: true,
      description: "Chart ID",
    },
  ],
  description: "根据 Chart ID 获取指定 Chart。",
};
