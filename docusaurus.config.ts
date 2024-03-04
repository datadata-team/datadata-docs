import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type { PluginOptions as SearchLocalPluginOptions } from "@easyops-cn/docusaurus-search-local";
import { themes as prismThemes } from "prism-react-renderer";
import { EnumChangefreq } from "sitemap";

const config: Config = {
  title: "Datadata Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.svg",
  url: "https://hungtcs.github.io",
  baseUrl: "/datadata-docs/",
  // organizationName: "facebook",
  projectName: "datadata-docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    locales: ["zh-CN", "en-US"],
    defaultLocale: "zh-CN",
  },
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      } satisfies SearchLocalPluginOptions,
    ],
    [
      "plugin-image-zoom",
      {
        selector: ".markdown img",
        options: {
          margin: 24,
          background: "#0000009C",
          // scrollOffset: 0,
          // template: "#image-zoom-template",
          container: "#image-zoom-container",
          // template: "#zoom-template",
        },
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          editUrl: "https://github.com/hungtcs/datadata-docs/tree/master/",
          sidebarPath: "./sidebars-docs.ts",
          routeBasePath: "docs",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          priority: 0.5,
          filename: "sitemap.xml",
          changefreq: EnumChangefreq.WEEKLY,
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "my-plugin",
        injectHtmlTags(args) {
          return {
            postBodyTags: [
              // {
              //   tagName: "template",
              //   innerHTML: `<div><div id="image-zoom-container"></div></div>`,
              //   attributes: {
              //     id: "image-zoom-template",
              //     // style: "position: fixed; insert: 0px;",
              //   },
              // },
              {
                tagName: "div",
                innerHTML: ``,
                attributes: {
                  id: "image-zoom-container",
                  // style: "position: fixed; insert: 0px;",
                },
              },
            ],
          };
        },
      };
    },
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "api",
        editUrl: "https://github.com/hungtcs/datadata-docs/tree/master/",
        sidebarPath: "./sidebars-api.ts",
        routeBasePath: "api",
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      } satisfies DocsOptions,
    ],
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "Datadata Logo",
        src: "img/logo.svg",
        style: { height: "24px", verticalAlign: "middle" },
        srcDark: "img/logo.dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          label: "Docs",
          position: "left",
          sidebarId: "docs",
        },
        {
          type: "docSidebar",
          label: "API Reference",
          position: "left",
          sidebarId: "api",
          docsPluginId: "api",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          type: "search",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Datadata, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["json", "bash"],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // imageZoom: {
    //   selector: ".markdown img",
    //   options: {
    //     margin: 24,
    //     background: "#0000009C",
    //     // scrollOffset: 0,
    //     // template: "#image-zoom-template",
    //     container: "#image-zoom-container",
    //     // template: "#zoom-template",
    //   },
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
