import type { APIEndpoint } from "@site/src/components/api-form/api-define";

export default {
  url: "/api/v1/charts",
  method: "get",
  headers: [
    {
      name: "x-datadata-api-token",
      type: "string",
      required: true,
      description: "API Token for the service",
    },
  ],
  queryParams: [
    {
      name: "limit",
      type: "number",
      required: false,
      description: "设置查询结果数量限制，用于分页",
    },
    {
      name: "offset",
      type: "number",
      required: false,
      description: "设置查询结果偏移，用于分页",
    },
    {
      name: "sort",
      type: "string",
      required: false,
      description:
        "指定结果排序方式，可选的值有 name、created_at、updated_at，格式是 <字段名:(asc|desc)>，如 name:asc、name:desc等。",
    },
    {
      name: "keyword",
      type: "string",
      required: false,
      description: "用于过滤结果集，对 Chart 名称进行过滤",
    },
    {
      name: "tag",
      type: "string",
      isArray: true,
      description: "通过标签过滤，数组类型，过滤包含指定所有标签的数据",
    },
    {
      name: "archived",
      type: "boolean",
      required: false,
      description: "是否包括已归档的数据",
      defaultValue: false,
    },
  ],
  description: "分页获取您创建的 Charts 列表。",
} satisfies APIEndpoint;
