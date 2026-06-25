import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./index.module.css";

const docSections = [
  {
    icon: "&#x1F4CA;",
    title: "数据查询",
    desc: "使用标准 SQL 或 DQL 脚本探索和分析数据，支持跨数据源关联查询。",
    link: "/docs/guides/intro",
    linkText: "查看查询指南",
  },
  {
    icon: "&#x1F4CB;",
    title: "可视化面板",
    desc: "将查询结果组合到仪表盘中，使用十余种专业图表类型进行可视化监控。",
    link: "/docs/guides/intro",
    linkText: "创建面板",
  },
  {
    icon: "&#x1F916;",
    title: "AI Skills",
    desc: "通过 MCP、CLI 或 DQL 脚本让 AI agent 与 Datadata 直接交互。",
    link: "/docs/guides/intro",
    linkText: "接入 AI Skills",
  },
  {
    icon: "&#x1F50C;",
    title: "数据源管理",
    desc: "连接外部数据库、上传数据文件或创建数据空间，统一管理数据资产。",
    link: "/docs/guides/intro",
    linkText: "配置数据源",
  },
  {
    icon: "&#x1F4DD;",
    title: "API 参考",
    desc: "完整的 API 接口文档，支持 RESTful 调用和 OAuth 2.0 / API Key 认证。",
    link: "/docs/api/api-key",
    linkText: "查看 API 文档",
  },
  {
    icon: "&#x1F30D;",
    title: "社区与洞察",
    desc: "发布数据分析文章、分享查询与数据源，与社区共同探索数据价值。",
    link: "https://www.datadata.com/insights",
    linkText: "前往社区",
  },
];

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <span className={styles.heroEyebrow}>DataData 文档</span>
          <h1 className={styles.heroTitle}>
            让数据分析
            <br />
            <span className={styles.heroTitleAccent}>精准高效</span>
          </h1>
          <p className={styles.heroSubtitle}>
            从数据查询到可视化洞察，从 AI 集成到社区分享
            <br />
            一站式文档，帮助你快速上手 Datadata 平台。
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.heroBtnPrimary} to="/docs/guides/intro">
              快速开始
            </Link>
            <Link className={styles.heroBtnSecondary} to="/docs/api/api-key">
              查看 API 文档
            </Link>
            <Link className={styles.heroBtnGhost} to="https://www.datadata.com">
              访问主站 &rarr;
            </Link>
          </div>
        </div>
        <div className={styles.heroCode}>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.codeDot} style={{ background: "#ef4444" }} />
              <span className={styles.codeDot} style={{ background: "#eab308" }} />
              <span className={styles.codeDot} style={{ background: "#22c55e" }} />
              <span className={styles.codeLang}>query.dql</span>
            </div>
            <pre className={styles.codeBody}>
              <code>{`-- 最近 30 天期货品种涨跌幅排行
SELECT
  symbol,
  name,
  ROUND((close - open)
    / open * 100, 2) AS change_pct
FROM futures_daily
WHERE trade_date >= CURRENT_DATE - 30
ORDER BY change_pct DESC
LIMIT 20;`}</code>
            </pre>
          </div>
        </div>
      </div>
    </header>
  );
}

function DocSection({ icon, title, desc, link, linkText }: (typeof docSections)[number]) {
  return (
    <Link className={styles.docCard} to={link}>
      <div className={styles.docCardIcon}>
        <span dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className={styles.docCardBody}>
        <h3 className={styles.docCardTitle}>{title}</h3>
        <p className={styles.docCardDesc}>{desc}</p>
        <span className={styles.docCardLink}>{linkText}</span>
      </div>
    </Link>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="DataData 文档中心 — 查询、可视化、AI 集成一站式数据平台的使用指南与 API 参考。"
    >
      <div className="homepage-main-wrapper">
        <HeroSection />

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>探索文档</h2>
              <p className={styles.sectionDesc}>根据你的需求选择对应模块，快速找到所需内容。</p>
            </div>
            <div className={styles.docGrid}>
              {docSections.map((item, idx) => (
                <DocSection key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className={styles.sectionInner}>
            <div className={styles.aiCallout}>
              <div className={styles.aiCalloutContent}>
                <h2 className={styles.aiCalloutTitle}>AI 原生集成</h2>
                <p className={styles.aiCalloutDesc}>
                  Datadata 提供标准的 MCP（Model Context Protocol）端点，支持 Claude Desktop、VS Code、Cursor 等 AI
                  客户端直接连接。还提供 CLI 工具和 DQL 脚本语言，让 AI agent 能够通过自然语言与平台交互。
                </p>
                <div className={styles.aiCalloutMeta}>
                  <span>MCP 端点</span>
                  <code className={styles.aiCode}>https://www.datadata.com/api/mcp/v1</code>
                </div>
                <div className={styles.aiCalloutActions}>
                  <Link className={styles.calloutSecondary} to="https://www.datadata.com/ai-skills">
                    了解 AI Skills
                  </Link>
                  <Link className={styles.calloutGhost} to="https://www.skills.sh/datadata-team/datadata-skills">
                    安装 Skills
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.partners}>
              <p className={styles.partnersLabel}>合作伙伴</p>
              <div className={styles.partnerLogos}>
                <a href="https://www.fmz.com" target="_blank" rel="noopener noreferrer" className={styles.partnerLogo}>
                  发明者量化
                </a>
              </div>
              <div className={styles.bottomCta}>
                <p className={styles.bottomCtaText}>准备好开始探索数据了吗？</p>
                <Link className={styles.heroBtnPrimary} to="/docs/guides/intro">
                  浏览文档
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
