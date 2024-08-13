---
title: Merge
sidebar_position: 9
---

## 方法

### merge

类似于 SQL 的 `JOIN` 操作，将两个数据框合并。

```py
DataFrame.merge(right, how='inner', on=None, left_on=None, right_on=None, suffixes=('_x', '_y'))
```

#### 参数

- `right`: 右侧数据框。
- `how`: 合并的方式。支持以下值：
  - `inner`: 内连接，返回两个数据框的交集。
  - `outer`: 外连接，返回两个数据框的并集。
  - `left`: 左连接，返回左侧数据框的所有行。
  - `right`: 右连接，返回右侧数据框的所有行。
  - `cross`: 笛卡尔积，返回所有组合。
- `on`: 列名，用于连接的键。如果 `left_on` 和 `right_on` 也设置了，将忽略此参数。
- `left_on`: 左侧数据框中用于连接的键。
- `right_on`: 右侧数据框中用于连接的键。
- `suffixes`: 合并后的列名后缀。默认为 `('_x', '_y')`。

#### 不兼容的细节

1. 合并后的 DataFrame 列顺序可能与 Pandas 不一致。（但数据行顺序一致）
2. 不支持 `sort` 参数。

### 使用示例

以下示例展示了如何使用 `merge` 方法来合并两个数据框，并演示了各种合并方式（`inner`、`left`、`right`、`outer`、`cross`）。

#### 校验参数格式

首先，演示了不同情况下的参数校验。在下面的代码示例中，我们创建了两个数据框 `d1` 和 `d2`，并使用 `assert.fails` 测试了 `merge` 函数在各种无效参数组合下是否抛出预期的错误。每个 `assert.fails` 语句后面都附有注释，解释了该测试的具体情况和期望的错误信息。

```py
# 示例数据框
d1 = DataFrame({
  "year": [2021, 2022, 2023, 2024],
  "month": [1, 2, 3, 4],
  "price": [1, 2, 3, 4],
})

d2 = DataFrame({
  "year": [2024, 2021, 2022, 2023],
  "month": [5, 1, 2, 3],
  "count": [4, 3, 2, 1],
  "price": [1, 2, 3, 4],
})

# 参数校验示例
assert.fails(lambda: d1.merge(d2), 'must pass argument "on" OR "left_on" and "right_on"')  # 测试未提供 'on' 或 'left_on' 和 'right_on' 时是否抛出错误
assert.fails(lambda: d1.merge(d2, right_on="year_A"), 'must pass argument "on" OR "left_on" and "right_on"')  # 测试仅提供 'right_on' 时是否抛出错误
assert.fails(lambda: d1.merge(d2, left_on=None, right_on="year_A"), 'must pass argument "on" OR "left_on" and "right_on"')  # 测试 'left_on' 为 None 时是否抛出错误
assert.fails(lambda: d1.merge(d2, left_on='year'), 'must pass argument "on" OR "left_on" and "right_on"')  # 测试仅提供 'left_on' 时是否抛出错误
assert.fails(lambda: d1.merge(d2, left_on=['year'], right_on="year"), '"left_on" and "right_on" must be same type')  # 测试 'left_on' 和 'right_on' 类型不同时是否抛出错误
assert.fails(lambda: d1.merge(d2, left_on="year", right_on=["year"]), '"left_on" and "right_on" must be same type')  # 测试 'left_on' 和 'right_on' 类型不同时是否抛出错误
assert.fails(lambda: d1.merge(d2, left_on=["year", "month"], right_on=["year"]), '"left_on" and "right_on" must be same length')  # 测试 'left_on' 和 'right_on' 长度不同时是否抛出错误
assert.fails(lambda: d1.merge(d2, left_on=["year"], right_on=["year", "month"]), '"left_on" and "right_on" must be same length')  # 测试 'left_on' 和 'right_on' 长度不同时是否抛出错误
assert.fails(lambda: d1.merge(d2, how="cross", on=["year"]), 'can not pass argument "on", "left_on" or "right_on" when "how" is "cross')  # 测试在 'how' 为 'cross' 时传递 'on' 参数是否抛出错误
assert.fails(lambda: d1.merge(d2, how="cross", left_on=["year"], right_on=["year"]), 'can not pass argument "on", "left_on" or "right_on" when "how" is "cross')  # 测试在 'how' 为 'cross' 时传递 'left_on' 和 'right_on' 参数是否抛出错误

```

#### inner 合并

`inner` 合并只保留两个数据框中共有的行。

```py
# inner 合并示例
d3 = d1.merge(d2, on=["year", "month"])
return d3

# 验证结果
assert.eq(d3.shape, (3, 5))
assert.eq(list(d3.columns), ["year", "month", "price_x", "count", "price_y"])
assert.eq(list(d3["year"]), [2021, 2022, 2023])
assert.eq(list(d3["month"]), [1, 2, 3])
assert.eq(list(d3["price_x"]), [1, 2, 3])
assert.eq(list(d3["count"]), [3, 2, 1])
assert.eq(list(d3["price_y"]), [2, 3, 4])
```

#### left 合并

`left` 合并保留左侧数据框中的所有行。

```py
# 修改 d2 示例数据框
d2 = DataFrame({
  "year": [2024, 2021, 2022, 2023, 2023],
  "month": [5, 1, 2, 3, 3],
  "count": [4, 3, 2, 1, 1],
  "price": [1, 2, 3, 4, 4],
})

# left 合并示例
d3 = d1.merge(d2, how="left", on=["year", "month"])
return d3

# 验证结果
assert.eq(d3.shape, (5, 5))
assert.eq(list(d3.columns), ["year", "month", "price_x", "count", "price_y"])
assert.eq(list(d3["year"]), [2021, 2022, 2023, 2023, 2024])
assert.eq(list(d3["month"]), [1, 2, 3, 3, 4])
assert.eq(list(d3["price_x"]), [1, 2, 3, 3, 4])
assert.eq(list(d3["count"]), [3.0, 2.0, 1.0, 1.0, None])
assert.eq(list(d3["price_y"]), [2.0, 3.0, 4.0, 4.0, None])
```

#### right 合并

`right` 合并保留右侧数据框中的所有行。

```py
# right 合并示例
d3 = d1.merge(d2, how="right", on=["year", "month"])
return d3

# 验证结果
assert.eq(d3.shape, (5, 5))
assert.eq(list(d3.columns), ["year", "month", "count", "price_y", "price_x"])
assert.eq(list(d3["year"]), [2024, 2021, 2022, 2023, 2023])
assert.eq(list(d3["month"]), [5, 1, 2, 3, 3])
assert.eq(list(d3["price_x"]), [None, 1.0, 2.0, 3.0, 3.0])
assert.eq(list(d3["count"]), [4, 3, 2, 1, 1])
assert.eq(list(d3["price_y"]), [1, 2, 3, 4, 4])
```

#### outer 合并

`outer` 合并返回两个数据框的并集。

```py
# outer 合并示例
d3 = d1.merge(d2, how="outer", on=["year", "month"])
return d3

# 验证结果
assert.eq(d3.shape, (6, 5))
assert.eq(list(d3.columns), ['year', 'month', 'price_x', 'count', 'price_y'])
assert.eq(list(d3["year"]), [2021, 2022, 2023, 2023, 2024, 2024])
assert.eq(list(d3["month"]), [1, 2, 3, 3, 4, 5])
assert.eq(list(d3["price_x"]), [1.0, 2.0, 3.0, 3.0, 4.0, None])
assert.eq(list(d3["count"]), [3.0, 2.0, 1.0, 1.0, None, 4.0])
assert.eq(list(d3["price_y"]), [2.0, 3.0, 4.0, 4.0, None, 1.0])
```

#### cross 合并

`cross` 合并返回两个数据框的笛卡尔积。

```py
# cross 合并示例
d3 = d1.merge(d2, how="cross")
return d3

# 验证结果
assert.eq(d3.shape, (20, 7))
assert.eq(list(d3.columns), ['year_x', 'month_x', 'price_x', 'year_y', 'month_y', 'count', 'price_y'])
assert.eq(list(d3["year_x"]), [2021, 2022, 2023, 2024, 2021, 2022, 2023, 2024, 2021, 2022, 2023, 2024, 2021, 2022, 2023, 2024, 2021, 2022, 2023, 2024])
assert.eq(list(d3["month_x"]), [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4])
assert.eq(list(d3["price_x"]), [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4])
assert.eq(list(d3["year_y"]), [2024, 2024, 2024, 2024, 2021, 2021, 2021, 2021, 2022, 2022, 2022, 2022, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023])
assert.eq(list(d3["month_y"]), [5, 5, 5, 5, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3])
assert.eq(list(d3["count"]), [4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1])
assert.eq(list(d3["price_y"]), [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4])
```
