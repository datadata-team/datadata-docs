import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/openapi/datadata-api",
    },
    {
      type: "category",
      label: "MCP",
      items: [
        {
          type: "doc",
          id: "api/openapi/mcp-server-endpoint",
          label: "MCP server endpoint",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "api/openapi/get-current-session",
          label: "Get current session",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Datasources",
      items: [
        {
          type: "doc",
          id: "api/openapi/get-datasource-info",
          label: "Get datasource info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openapi/list-tables-in-datasource",
          label: "List tables in datasource",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openapi/describe-table-in-datasource",
          label: "Describe table in datasource",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openapi/scan-datasource-schema",
          label: "Scan datasource schema",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openapi/replace-datasource-file",
          label: "Replace datasource file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openapi/comment-on-table",
          label: "Comment on table",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Data Spaces",
      items: [
        {
          type: "doc",
          id: "api/openapi/create-table-in-data-space",
          label: "Create table in data space",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openapi/describe-table-in-data-space",
          label: "Describe table in data space",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openapi/drop-table-from-data-space",
          label: "Drop table from data space",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openapi/insert-rows-into-data-space-table",
          label: "Insert rows into data space table",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Queries",
      items: [
        {
          type: "doc",
          id: "api/openapi/execute-adhoc-query",
          label: "Execute adhoc query",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openapi/execute-a-saved-query",
          label: "Execute a saved query",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Executions",
      items: [
        {
          type: "doc",
          id: "api/openapi/get-execution-detail",
          label: "Get execution detail",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
