# CONTRIBUTING to [datadata-docs]

欢迎您贡献到 [datadata-docs]！在开始之前，请阅读本文档以了解我们的贡献指南。

## 如何贡献

1. 首先，确保您已经创建了一个 GitHub 账户。
2. 在我们的仓库中找到您想贡献的部分。
3. Fork 这个仓库并将其克隆到本地。
4. 创建一个新的分支：`git checkout -b 新分支名`
5. 在您的分支上进行更改并提交：`git commit -am '描述您的更改'`
6. 推送到您的分支：`git push origin 新分支名`
7. 提交 Pull Request。

## 开发流程

1. 安装依赖：`pnpm install`
2. 启动开发服务器：`pnpm run dev`

### 目录结构

```shell
.
├── api                                 # API 文档目录，MD 和 MDX 文件
├── blog                                # 博客文档目录，MD 和 MDX 文件
├── CONTRIBUTING.md                     # 本文件
├── docs                                # Docs 文档目录，MD 和 MDX 文件
├── docusaurus.config.ts                # docusaurus 配置文件
├── i18n                                # 国际化目录
├── sidebars-api.ts                     # API 文档侧边栏配置
├── sidebars.ts                         # Docs 文档侧边栏配置
├── src                                 # 代码目录
│  ├── components                       # 项目公共组件
│  ├── css                              # 项目全局样式
│  └── pages                            # 自定义页面
└── static                              # 静态文件
```

### MDX 编写说明

#### MDX 如何引用公共组件？

您可以导入在其他文件中定义的自己的组件或通过 pnpm 安装的第三方组件。

```tsx
<!-- Docusaurus theme component -->
import TOCInline from '@theme/TOCInline';

<!-- External component -->
import Button from '@mui/material/Button';

<!-- Custom component -->
import BrowserWindow from '@site/src/components/BrowserWindow';
```

`@site` 别名指向网站目录，通常是 `docusaurus.config.ts` 文件所在的目录。
使用别名而不是相对路径（'../../src/components/BrowserWindow'）可以在移动文件时，
或在文档版本化和翻译时，省去更新导入路径的麻烦。

#### 参考资料

1. Docusaurus 官方文档 <https://docusaurus.io/docs/markdown-features/react>
2. MDX 中文网 <https://www.mdxjs.cn/>

## 构建项目

要构建项目，请按照以下步骤进行操作：

1. 安装依赖：`pnpm install`
2. 运行构建：`pnpm run build`
3. 运行测试：`pnpm preview`

## 提交指南

确保您的提交满足以下要求：

- 提交的代码符合项目的代码规范。
- 提交的描述清晰明了，说明了您的更改内容。

感谢您对 [datadata-docs] 的贡献！

[datadata-docs]: https://github.com/hungtcs/datadata-docs
