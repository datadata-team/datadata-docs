import * as echarts from "echarts";
import { type EChartsOption, type EChartsType } from "echarts";
import ResizeObserver from "rc-resize-observer";
import { forwardRef, useCallback, useEffect, useMemo, useRef, useState, type HTMLAttributes } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

export interface ReactEChartsOptions extends Omit<HTMLAttributes<HTMLDivElement>, "ref" | "children"> {
  theme?: string;
  options?: EChartsOption;
  language?: string;
  onChartError?: (err: unknown) => void;
}

export const ReactECharts = forwardRef<EChartsType | null, ReactEChartsOptions>((props, ref) => {
  const { options, theme, language, onChartError, ...divProps } = props;

  const [instance, setInstance] = useState<EChartsType | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const locale = useMemo(() => (language === "en-US" ? "EN" : "ZH"), [language]);

  const handleResize = useCallback(() => {
    if (instance && !instance.isDisposed()) {
      instance.resize();
    }
  }, [instance]);

  // 创建实例
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const instance = echarts.init(containerRef.current, theme, { locale: locale });
    setInstance(instance);

    return () => {
      instance.dispose();
      setInstance(null);
    };
  }, [theme, locale]);

  // 设置 Chart 配置
  useEffect(() => {
    if (!instance || instance.isDisposed()) {
      return;
    }
    try {
      if (options) {
        instance.setOption(options, true);
        instance.resize();
      } else {
        instance.clear();
      }
    } catch (err) {
      onChartError?.(err);
    }
  }, [instance, onChartError, options]);

  // 设置 Ref
  useEffect(() => {
    if (typeof ref === "function") {
      ref(instance);
    } else if (ref) {
      ref.current = instance;
    }
  }, [instance, ref]);

  return (
    <ResizeObserver onResize={handleResize}>
      <div {...divProps} className={clsx(styles.wrapper, divProps.className)} ref={containerRef} />
    </ResizeObserver>
  );
});
