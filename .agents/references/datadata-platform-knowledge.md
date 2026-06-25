# Datadata Platform Knowledge Base

> This document captures comprehensive knowledge about the Datadata platform,
> gathered from the public website (datadata.com), the in-app Studio interface,
> and the documented AI Skills. Use it as a persistent reference so that
> future sessions do not need to rediscover this context.
>
> Last updated: 2026-06-25

## Platform Identity

**Datadata** is an AI-driven data platform. Its tagline is "让数据分析精准高效"
(Make data analysis precise and efficient). It is built around four layers:
a data query engine, a visualization/BI workspace (Studio), a content community,
and an AI integration layer (Skills + MCP).

The platform defaults to Chinese (zh-Hans). The root domain is
`https://www.datadata.com/`.

## Product Modules

### 1. Discover (发现) — Community Feed

A social content feed for data analysis. Users share queries, dashboards,
articles, and datasources. Sorted by Trending / Latest / Following.
Supports tagging, likes, comments, creator profiles.
URL: `https://www.datadata.com/discover`

**Community character**: Heavy quant-finance tilt — gold futures (Au99.99),
crypto tick data (Binance/OKX), futures markets, strategy articles.

### 2. Explore (探索) — Content Directory

Five browseable tabs:

- Articles (文章)
- Dashboards (面板)
- Queries (查询)
- Datasources (数据源)
- Creators (创作者)

Filtered by recency, tags, and text search.
URL: `https://www.datadata.com/explore`

### 3. Studio (工作区) — Core Workspace

URL base: `https://www.datadata.com/studio`

**Navigation** (left sidebar):

- Home (首页) — workspace hub with recent items
- Queries (查询) — SQL / DQL query management
  - Editor has AI Copilot panel (query explanation, improvement suggestions)
  - Supports SQL and DQL modes
  - Visibility: public / private
  - Tags supported
  - Query list supports folder hierarchy
- Query Schedules (定时查询) — cron-like scheduled query execution
- Dashboards (面板) — compose queries into visual monitoring panels
- Folders (文件夹) — unified resource tree across queries/dashboards/datasources
- Datasources (数据源) — database connection and file management

**Global top bar**:

- Global search (⌘K)
- Create menu: New Query / Dashboard / Datasource / Write Article
- AI Skills link
- Quota & Credits button
- Docs link
- Quick links: Home, Writing (Insights), Studio, AI Skills

**Datasource types supported**:

- MySQL, Postgres, DuckDB, ClickHouse, CSV, Excel, JSON, Parquet

**Three ways to create a datasource**:

- Connect external database
- Upload data file (CSV/Excel/JSON/Parquet)
- Create a Data Space (DuckDB-based managed storage)

**Security note on connecting databases**:
"为保护您的数据库，请严格遵守最小权限原则。仅为查询场景创建只读账户。"
(Principle of least privilege — read-only accounts for query scenarios only.)

### 4. Insights (数据洞察) — Analysis Content Platform

A blogging / deep-dive analysis platform within Datadata.
Has its own draft system, article management, comments and likes.
Supports Markdown/article content with tags.
Published articles appear in Discover and Explore feeds.
URL: `https://www.datadata.com/insights`

### 5. AI Skills — AI Integration Layer

URL: `https://www.datadata.com/ai-skills`

Three skill packages installable via:
`npx skills add datadata-team/datadata-skills`

**datadata-api** (CLI)

- Run ad-hoc SQL queries
- Check datasource metadata, list/describe tables
- Download results as NDJSON or CSV
- Data Spaces table management (create, insert, delete)
- Trigger async schema scans
- Auto-authentication via device flow (90-day cached token)

**datadata-dql** (Scripting Language)

- Based on Starlark (a subset/derivative of Python/Bazel's Starlark)
- DataFrame/Series operations
- SQL queries via `query()` returning DataFrames
- HTTP requests via `fetch()`
- 2D Canvas drawing
- JSON, time, math built-in modules

**datadata-mcp** (MCP Server)

- Standard Model Context Protocol endpoint
- Endpoint: `https://www.datadata.com/api/mcp/v1`
- Two auth methods: OAuth 2.0 (recommended) or API Key
- Tools: search datasources, metadata queries, SQL/DQL execution,
  Data Spaces management, schema scanning, metadata enhancement (table/column comments)
- Compatible with Claude Desktop, VS Code, Cursor

**MCP Server authentication details**:

- OAuth 2.0: browser redirect for authorization
- API Key: `export DATADATA_API_KEY="ak_..."`
- Auto-device-auth fallback for CLI usage

## Account & Settings

URL base: `https://www.datadata.com/settings`

### Settings Sections

1. **Profile** (公开资料) — avatar, banner, name, bio, website, company, location, social links
2. **Appearance** (外观) — light/dark/system theme
3. **Account** (账号设置) — account management
4. **Security** (密码和身份验证) — password and 2FA
5. **Authorized Apps** (已授权应用) — OAuth-authorized third-party apps
6. **API Keys** — API key management
7. **Usage/Quotas** (配额) — storage and query quotas

### API Key Permissions

Full list of available permissions (7 total in current API):

| Permission ID              | Purpose (Chinese) |
| -------------------------- | ----------------- |
| `queries:execute`          | 执行查询          |
| `queries:execute-adhoc`    | 执行临时查询      |
| `executions:get`           | 获取执行结果      |
| `datasources:read`         | 读取数据源信息    |
| `datasources:scan`         | 扫描数据源结构    |
| `datasources:replace-file` | 替换数据源文件    |
| `data-spaces:write`        | Data Spaces Write |

Additional permissions referenced elsewhere (may be older or newer):

- `executions:get-list` — 获取执行记录列表
- `datasources:enhance-metadata` — 设置表和列的注释
- `data-spaces:read` — 读取数据空间数据
- `data-spaces:delete` — 删除数据空间中的表
- `settings:billing:read` — 读取账单信息

API Keys have optional expiration dates (or "never expire").

### Quotas (配额)

Accessible from top banner "查看积分与配额" or `/settings/usage`:

- **Storage**: 1 GB total (current usage ~955 KB)
  - Breakdown: execution results, uploaded datasource files, data spaces
- **Queries**: 1,000 per day (current usage ~1/day)
- **Resource counts**: queries, dashboards, datasources

### Known OAUth-Authorized Apps

- picoclaw-mcp (MCP client, no special permissions)
- Codex (this agent) — full datasource + query + data-spaces permissions
- Claude Code (datadata) — same permission set
- Claude — same permission set
- Datadata Feedbacks — only `profile` permission

## Query Editor (AI Copilot)

The new query page (`/studio/queries/new`) includes:

- Data source selector (bound, popular, my datasources)
- SQL / DQL mode toggle
- Editor toolbar buttons
- **AI Copilot** panel (right side):
  - Chat-based assistant that understands the query context
  - Suggested prompts:
    - "介绍一下你自己"
    - "当前 Query 的数据源有哪些分析价值？"
    - "我的这个 SQL 写的怎么样？"
  - Also promotes: "💡 安装 Datadata Skills，让 AI 智能体具备 Datadata 能力"

## Query Engines

- **DuckDB**: Primary engine, supports cross-datasource JOIN queries
- **ClickHouse**: High-performance time-series engine

## Data Spaces

DuckDB-based managed storage. Users can:

- Create tables
- Bulk insert data
- Delete tables
- Query across data spaces using DuckDB's cross-source JOIN capability

## Community Data Ecosystem

Public datasets shared by the community include:

- **Crypto Tick** (Binance spot/perpetual, OKX spot/perpetual — depth + trades)
- **Au99.99** (Shanghai Gold Exchange daily OHLC)
- **Futures data** (Chinese futures markets)
- Various user-uploaded datasets (Customers, JSON test data, etc.)

## Technology Stack (Observations)

- **Frontend**: React-based SPA (server-rendered with data fetching)
- **Search**: Global command palette (⌘K)
- **Theme**: Light/dark/system with CSS variables
- **Charts**: Multiple chart types (line, K-line, heatmap, etc.)
- **API**: RESTful JSON API with API Key or OAuth authentication
- **Query engine**: DuckDB + ClickHouse
- **Scripting**: DQL (Starlark-based)
- **Docs site**: Docusaurus (this repo) — `datadata-team.github.io/datadata-docs/`
- **GitHub org**: `https://github.com/datadata-team`
- **Skills registry**: `https://www.skills.sh/datadata-team/datadata-skills`
- **Partner**: 发明者量化 (FMZ) — `https://www.fmz.com`

## Key URLs Summary

| Resource                   | URL                                                   |
| -------------------------- | ----------------------------------------------------- |
| Platform                   | <https://www.datadata.com>                            |
| Discover                   | <https://www.datadata.com/discover>                   |
| Explore                    | <https://www.datadata.com/explore>                    |
| Studio                     | <https://www.datadata.com/studio>                     |
| AI Skills                  | <https://www.datadata.com/ai-skills>                  |
| Insights                   | <https://www.datadata.com/insights>                   |
| Settings                   | <https://www.datadata.com/settings>                   |
| Settings - API Keys        | <https://www.datadata.com/settings/api-keys>          |
| Settings - Quotas          | <https://www.datadata.com/settings/usage>             |
| Settings - Authorized Apps | <https://www.datadata.com/settings/authorized-apps>   |
| Docs (live)                | <https://datadata-team.github.io/datadata-docs/>      |
| MCP Endpoint               | <https://www.datadata.com/api/mcp/v1>                 |
| GitHub                     | <https://github.com/datadata-team>                    |
| Skills.sh                  | <https://www.skills.sh/datadata-team/datadata-skills> |
| Feedback                   | <https://www.datadata.com/feedback>                   |
| Privacy Policy             | <https://www.datadata.com/privacy-policy>             |
| Terms of Service           | <https://www.datadata.com/terms-of-service>           |
