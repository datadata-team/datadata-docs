import clsx from "clsx";
import { useCallback, useState, type HTMLAttributes, type ReactNode } from "react";

export type CollapseProps = HTMLAttributes<HTMLElement> & {
  panels: Array<{
    key: string;
    name: string;
    extra?: ReactNode;
    content?: ReactNode;
  }>;
  defaultExpandedKeys?: Array<string>;
};

export function Collapse(props: CollapseProps) {
  const { panels, className, defaultExpandedKeys, ...htmlProps } = props;

  const [expandedKeys, setExpandedKeys] = useState<string[]>(defaultExpandedKeys ?? []);

  const handleHeaderClick = useCallback((key: string) => {
    setExpandedKeys((keys) => {
      if (keys.includes(key)) {
        return keys.filter((k) => k !== key);
      }
      return [...keys, key];
    });
  }, []);

  return (
    <div {...htmlProps} className={clsx(className)}>
      {panels.map((panel, index) => {
        const last = index === panels.length - 1;
        const expanded = expandedKeys.includes(panel.key);
        return (
          <section
            key={panel.key}
            className={clsx("border border-solid rounded-md", {
              "mb-4": !last,
            })}
          >
            <header
              className={clsx("flex h-[42px] items-center px-4 cursor-pointer bg-[#0000001a] rounded-t-md", {
                "rounded-b-md": !expanded,
              })}
              onClick={() => handleHeaderClick(panel.key)}
            >
              <h4 className="m-0">{panel.name}</h4>
              {panel.extra && <div>{panel.extra}</div>}
            </header>
            <main
              className={clsx("p-4", {
                hidden: !expanded,
              })}
            >
              {panel.content}
            </main>
          </section>
        );
      })}
    </div>
  );
}
