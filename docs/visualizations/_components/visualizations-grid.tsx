import Link from "@docusaurus/Link";
import AreaIcon from "../_assets/icons/area.svg";
import BarIcon from "../_assets/icons/bar.svg";
import CalendarIcon from "../_assets/icons/calendar.svg";
import FunnelIcon from "../_assets/icons/funnel.svg";
import GaugeIcon from "../_assets/icons/gauge.svg";
import HeatmapIcon from "../_assets/icons/heatmap.svg";
import KlinechartsIcon from "../_assets/icons/klinecharts.svg";
import LineIcon from "../_assets/icons/line.svg";
import MapIcon from "../_assets/icons/map.svg";
import MarkdownIcon from "../_assets/icons/markdown.svg";
import NumberIcon from "../_assets/icons/number.svg";
import PieIcon from "../_assets/icons/pie.svg";
import RelationIcon from "../_assets/icons/relation.svg";
import RowIcon from "../_assets/icons/row.svg";
import SankeyIcon from "../_assets/icons/sankey.svg";
import ScatterIcon from "../_assets/icons/scatter.svg";
import SunburstIcon from "../_assets/icons/sunburst.svg";
import TableIcon from "../_assets/icons/table.svg";
import TreeMapIcon from "../_assets/icons/tree-map.svg";

const visualizations = [
  {
    id: "1-1-table",
    name: "表格",
    icon: TableIcon,
    description:
      "表格是一种常见的数据展示方式，通常用于以结构化的形式呈现数据，使得观察者能够直观地比较、分析和理解数据。",
  },
  {
    id: "1-2-number",
    name: "数值卡片",
    icon: NumberIcon,
    description:
      "数值卡片是一种简洁而直观的数据展示方式，通常用于突出显示重要的数值指标或关键性数据，以便观察者能够快速了解数据的当前状态。",
  },
  {
    id: "2-1-bar",
    name: "柱状图",
    icon: BarIcon,
    description:
      "柱状图（也称为条形图）是一种常见的数据可视化图表类型，通常用于展示数据的分布、比较不同类别之间的数量或频率，并突出显示各类别之间的差异。",
  },
  {
    id: "2-2-line",
    name: "折线图",
    icon: LineIcon,
    description: "折线图是一种常见的数据可视化图表类型，用于展示数据随着时间、类别或其他变量的变化趋势。",
  },
  {
    id: "2-3-area",
    name: "面积图",
    icon: AreaIcon,
    description:
      "面积图是一种数据可视化图表类型，类似于折线图，但在折线下方填充了颜色，形成了一个封闭的区域，用于强调数据的累积或总量，并展示数据的变化趋势。",
  },
  {
    id: "2-4-row",
    name: "横向柱状图",
    icon: RowIcon,
    description: "横向柱状图是柱状图的一种变体，其中柱子的方向是水平的而不是垂直的。",
  },
  {
    id: "2-5-pie",
    name: "饼图",
    icon: PieIcon,
    description: "饼图（Pie Chart）是一种常见的数据可视化图表类型，用于展示各个部分占总体的比例关系。",
  },
  {
    id: "2-6-calendar",
    name: "日历图",
    icon: CalendarIcon,
    description: "日历图（Calendar Chart）是一种数据可视化图表类型，用于展示时间序列数据在日历形式上的分布情况。",
  },
  {
    id: "2-7-gauge",
    name: "仪表盘",
    icon: GaugeIcon,
    description: "仪表盘图（Gauge Chart）是一种用于展示单一数值在预设范围内的相对位置的图表类型。",
  },
  {
    id: "2-8-tree-map",
    name: "矩形树图",
    icon: TreeMapIcon,
    description:
      "矩形树图（Tree Map）是一种数据可视化图表类型，用于以矩形的形式展示层级数据结构，并根据数据的大小来确定矩形的大小。",
  },
  {
    id: "2-9-heatmap",
    name: "热力图",
    icon: HeatmapIcon,
    description: "热力图（Heatmap）是一种数据可视化图表类型，用于以颜色的变化来展示数据的密度分布或相关性。",
  },
  {
    id: "2-10-sankey",
    name: "桑基图",
    icon: SankeyIcon,
    description: "桑基图（Sankey Diagram）是一种流程图，用于可视化复杂系统中的能量、资源或资金等流动的路径和量级。",
  },
  {
    id: "2-11-scatter",
    name: "散点图",
    icon: ScatterIcon,
    description: "散点图（Scatter Plot）是一种常用的数据可视化图表类型，用于展示两个变量之间的关系或趋势。",
  },
  {
    id: "2-12-funnel",
    name: "漏斗图",
    icon: FunnelIcon,
    description: "漏斗图（Funnel Chart）是一种数据可视化图表类型，用于展示数据在不同阶段之间的流动或转化过程。",
  },
  {
    id: "2-13-sunburst",
    name: "旭日图",
    icon: SunburstIcon,
    description: "旭日图（Sunburst Chart）是一种用于展示层次数据结构的环形图表类型。",
  },
  {
    id: "3-1-klinecharts",
    name: "K 线图",
    icon: KlinechartsIcon,
    description:
      "K 线图（K-Line Chart）是一种用于展示金融市场交易数据的图表类型，常用于展示股票、期货、外汇等金融资产的价格变动情况。",
  },
  {
    id: "4-1-relation",
    name: "关系图",
    icon: RelationIcon,
    description:
      "关系图（Network Graph）是一种用于可视化网络结构的图表类型，通常用于展示节点（或顶点）之间的关系和连接。",
  },
  {
    id: "5-1-map",
    name: "地理位置坐标",
    icon: MapIcon,
    description: "地理位置坐标图是一种用于显示地理位置坐标的图表类型，通常用于标记地球表面上特定地点的经纬度坐标。",
  },
  {
    id: "6-1-markdown",
    name: "Markdown",
    icon: MarkdownIcon,
    description: "Markdown 是一种轻量级标记语言，通常用于撰写文档、笔记、博客文章等。",
  },
];

export default function VisualizationsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {visualizations.map((visualization) => {
        return (
          <Link
            to={`/docs/visualizations/${visualization.id}`}
            key={visualization.id}
            className="border border-solid border-gray-300 p-4 rounded-md cursor-pointer hover:no-underline hover:bg-gray-50"
          >
            <div className="flex gap-3 items-center">
              <visualization.icon className="h-[42px]" />
              <h3 className="m-0">{visualization.name}</h3>
            </div>
            <div className="text-gray-600 mt-2">{visualization.description}</div>
          </Link>
        );
      })}
    </div>
  );
}
