import Translate from "@docusaurus/Translate";
import { useColorMode } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import type { EChartsOption } from "echarts";
import { ReactECharts } from "../../components/echarts-demo/react-echarts";

const option: EChartsOption = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};

function EChartsDemo() {
  const { colorMode } = useColorMode();

  return (
    <article>
      <p>
        <Translate id="demos.echarts.description">这是 ECharts 测试页面</Translate>
      </p>

      <ReactECharts theme={colorMode} options={option} style={{ height: 400, width: "100%" }} />
    </article>
  );
}

export default function Page() {
  return (
    <Layout>
      <main className="container margin-vert--lg">
        <EChartsDemo />
      </main>
    </Layout>
  );
}
