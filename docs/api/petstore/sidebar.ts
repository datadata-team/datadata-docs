import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/petstore/sample-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/petstore/returns-a-list-of-users",
          label: "Returns a list of users.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
