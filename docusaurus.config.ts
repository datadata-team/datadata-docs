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
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "api",
        sidebarPath: "./sidebars-api.ts",
        routeBasePath: "api",
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
          label: "API",
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
          type: "dropdown",
          label: "Demos",
          position: "left",
          items: [
            {
              to: "/echarts-demo",
              label: "ECharts Demo",
            },
          ],
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
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
