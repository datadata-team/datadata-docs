---
title: 矩形树图
sidebar_position: 2.8
---

矩形树图（Tree Map）是一种数据可视化图表类型，用于以矩形的形式展示层级数据结构，并根据数据的大小来确定矩形的大小。
树图通常用于呈现多层次的数据结构，其中每个矩形代表一个数据项，而矩形的大小和位置反映了该数据项在整体数据中的相对大小和层级结构。

树图通常包含以下要素：

- 矩形（Rectangle）：树图的主要组成部分，每个矩形代表一个数据项或节点。矩形的大小和位置反映了该数据项在整体数据中的相对大小和层级结构。通常，矩形的面积或宽度与数据的大小成比例。
- 层级结构（Hierarchy）：树图以层级结构的形式展示数据，其中每个矩形可以有一个或多个子矩形，代表其下属的子节点或子数据项。层级结构通常通过矩形的嵌套来表示。
- 颜色（Color）：树图通常使用不同的颜色来区分不同的数据类别或子层级，以增强视觉效果和理解。
- 标签（Label）：通常，树图的每个矩形会有一个标签，用于标识该数据项的名称或其他重要信息。标签通常显示在矩形内部或旁边。

树图适用于呈现层级数据结构的相对大小和层级关系，特别适用于展示复杂数据的分层结构，例如文件目录结构、组织机构、产品销售数据等。
它能够直观地显示数据的相对大小和层级关系，帮助观察者更好地理解数据的结构和组织。

## 使用方式


1. **标题字段**：包含一级/二级/三级标题字段选择，用于树状图区块划分。
2. **数值字段**：表示不同区块需求属性数值大小。 



### 数据示例

```py
info = query("select product_name, contract_size from public.product_info where futures_type = '期货'")
data = query("select * from derive.f_daily_quotes where day = '2024-12-16'")

product_list = list(info['product_name'])
seldata = data[data['product_name'].apply(lambda x : x in product_list)]

mergedata = data.merge(info, 'inner', 'product_name')

mergedata['market_value'] = mergedata['settlement_price'] * mergedata['open_interest'] * mergedata['contract_size']/100000000

groupdata = mergedata.groupby('product_name').sum(numeric_only = True)

return groupdata
```


## 树状图设置

### 显示设置

1. **矩形树图设置**：设置展示等级，最小可见数量，和父级标签显示。
2. **面包屑设置**：进行面包屑相关属性设置。  


### 图例

![树状图](./tree.png)
