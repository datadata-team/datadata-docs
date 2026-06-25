import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type { PluginOptions as SearchLocalPluginOptions } from "@easyops-cn/docusaurus-search-local";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { themes as prismThemes } from "prism-react-renderer";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { EnumChangefreq } from "sitemap";

const baseUrl = process.env.BASE_URL || "/datadata-docs";

const config: Config = {
  title: "DataData Docs",
  tagline: "DataData is a platform for data analysis and visualization",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },
  url: "https://datadata-team.github.io",
  baseUrl: `${baseUrl}/`,
  organizationName: "datadata-team",
  projectName: "datadata-docs",
  onBrokenLinks: "warn",
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["en", "zh-Hans"],
  },
  themes: [
    "@docusaurus/theme-mermaid",
    "docusaurus-theme-openapi-docs",
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
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
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
      "docusaurus-plugin-openapi-docs",
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          petstore: {
            specPath: "assets/petstore.yaml",
            outputDir: "docs/api/petstore",
            maskCredentials: false,
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // https://docusaurus.io/docs/api/themes/configuration#navbar
    navbar: {
      // title: "Datadata Docs",
      logo: {
        alt: "DataData Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          label: "指南",
          position: "left",
          sidebarId: "guidesSidebar",
        },
        {
          type: "docSidebar",
          label: "API",
          position: "left",
          sidebarId: "apiSidebar",
        },
        {
          to: "/blog",
          label: "博客",
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
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "合作伙伴",
          items: [
            // {
            //   label: "优宽量化",
            //   href: "https://www.youquant.com",
            // },
            {
              label: "发明者量化",
              href: "https://www.fmz.com",
            },
          ],
        },
        // {
        //   title: "SDK",
        //   items: [
        //     {
        //       label: "Go SDK",
        //       href: "https://github.com/datadata-team/datadata-sdk-go",
        //     },
        //     {
        //       label: "JavaScript SDK",
        //       href: "https://github.com/datadata-team/datadata-sdk-javascript",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              to: "/blog",
              label: "Blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/datadata-team",
            },
            {
              label: "Datadata Platform",
              href: "https://www.datadata.com",
            },
          ],
        },
      ],
      copyright: `Copyright © 2023-${new Date().getFullYear()} Datadata. Built with <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

export default config;
