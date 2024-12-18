---
title: 饼图
sidebar_position: 2.5
---

饼图（Pie Chart）是一种常见的数据可视化图表类型，用于展示各个部分占总体的比例关系。
饼图通常呈圆形，被分成若干个扇形，每个扇形的面积大小表示对应部分所占比例的大小。

饼图通常包含以下要素：

- 扇形（Slice）：饼图的主要组成部分，每个扇形代表了数据的一个部分或类别。扇形的大小（通常由扇形的角度或面积表示）反映了对应部分在总体中所占的比例。
- 标签（Label）：每个扇形通常配有标签，用于标识该部分的名称或数值比例。标签可以放置在扇形内部、外部或连接线上，以便观察者能够清晰地识别各个部分。
- 图例（Legend）：如果饼图包含多个部分或类别，通常会提供一个图例，用于解释各个部分的含义或名称。

饼图适用于展示部分与整体的比例关系，特别适用于展示数据的相对分布或比例情况。
它能够直观地呈现数据的占比情况，帮助观察者快速理解各个部分的重要性或贡献程度。

## 使用方式


1. **维度字段**：用于表示饼图中各个分类字段。
2. **衡量标准字段**：表示饼图中各个维度的数值大小。 



### 数据示例

```py
data = query("select * from derive.f_daily_quotes where day = '2024-12-17' ")
info = query("select product_name, contract_size from public.product_info where futures_type = '期货'")

mergeda = data.merge(info,'left','product_name')
mergeda['volume_value'] = mergeda['settlement_price'] * mergeda['contract_size'] * mergeda['volume']
groupda = mergeda.groupby('product_name').sum(numeric_only=True)
groupda = groupda.sort_values('volume_value')
return groupda
```


## 饼图设置

### 显示设置

1. **标签**：设置标签位置。
1. **扇形**：设置扇形水平和垂直位置角度。  
2. **图例**：设置图例各个属性设置。



### 图例

![扇形图](./pie.png)
