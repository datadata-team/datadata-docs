import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import { type Options as PluginIdealImageOptions } from "@docusaurus/plugin-ideal-image";
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type { PluginOptions as SearchLocalPluginOptions } from "@easyops-cn/docusaurus-search-local";
import { themes as prismThemes } from "prism-react-renderer";
import { EnumChangefreq } from "sitemap";
import webpack from "webpack";

const config: Config = {
  title: "Datadata Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.svg",
  url: "https://datadata-team.github.io",
  baseUrl: "/datadata-docs/",
  organizationName: "datadata-team",
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
    async function webpackOverridePlugin(context, options) {
      return {
        name: "webpack-override",
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.m?js$/,
                  resolve: {
                    fullySpecified: false,
                  },
                },
              ],
            },
            plugins: [
              new webpack.ProvidePlugin({
                process: "process/browser",
              }),
            ],
            resolve: {
              fallback: {
                // path: require.resolve("path-browserify"),
                querystring: require.resolve("querystring-es3"),
              },
            },
          };
        },
      };
    },
    async function tailwindPlugin() {
      return {
        name: "tailwind",
        configurePostCss(options) {
          options.plugins = [require("postcss-import"), require("tailwindcss"), require("autoprefixer")];
          return options;
        },
      };
    },
    "docusaurus-plugin-image-zoom",
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        disableInDev: true,
      } satisfies PluginIdealImageOptions,
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "development",
        path: "development",
        editUrl: "https://github.com/hungtcs/datadata-docs/tree/master/",
        sidebarPath: "./sidebars-development.ts",
        routeBasePath: "development",
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
          to: "/docs",
          label: "Docs",
          position: "left",
          activeBasePath: "/docs/",
        },
        {
          to: "/development",
          label: "Development",
          position: "left",
          activeBasePath: "/development/",
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
          title: "Sites",
          items: [
            {
              label: "发明者量化",
              href: "https://www.fmz.cn/",
            },
            {
              label: "Datadata Platform",
              href: "https://www.datadata.cn",
            },
          ],
        },
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
              to: "/blog",
              label: "Blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/datadata-team",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Datadata, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["php", "json", "bash", "java", "http"],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    zoom: {
      selector: ".markdown img",
      config: {
        margin: 24,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
