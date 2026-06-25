---
title: DataFrame
sidebar_position: 3
---

在 DQL（Data Query Language）中，DataFrame 是一个二维的、带有标签的数据结构，可以存储和处理不同类型的数据。它类似于关系型数据库中的表格，其中每一列可以是不同的数据类型。DataFrame 通常由行和列组成，每一行表示数据集中的一个样本，而每一列则表示一个特征或属性。

在 DQL 中，DataFrame 可以通过各种方式创建，包括从文件中读取数据、从数据库中查询数据、从其他数据结构转换而来等。一旦创建了 DataFrame，您可以使用各种操作对其进行处理，例如过滤、排序、分组、合并等，以便进行数据分析和处理。

总之，DataFrame 在 DQL 中是一种非常重要且常用的数据结构，它提供了灵活而强大的功能，使得数据处理和分析变得更加方便和高效。

## 创建方法

### 查询创建

```py
d1 = query("select * from klines.future_15m limit 100")
return d1
```

### 通过字典创建

```py
dict = {"name": ["js", "go"], "count": [1, 2]}
d = DataFrame(dict)
return d
```

### 通过字典列表创建

```py
dictList = [{ "name": "js", "count": 1 }, { "name": "go", "count": 2 }]
d = DataFrame(dictList)
return d
```

### 通过列表创建

```py
d = DataFrame([["js", 1],["go",2]], columns=["name","count"])
return d
```

## 属性

### `columns`

返回列名列表：`Type list`

```py
d = DataFrame([["js", 1],["go",2]], columns=["name","count"])
return d.columns #返回列名列表：["name","count"]
```

### `shape`

返回 DataFrame 形状（长度乘以宽度）：`Type (int, int)`

```py
d = DataFrame([["js", 1],["go",2]], columns=["name","count"])
return d.shape #返回DataFrame形状：(2, 2)
```

### `empty`

查询 DataFrame 是否为空：`Type bool`

```py
d = DataFrame(columns=["name","count"])
return d.empty #空的 DataFrame ，返回"True"
```

### `has_more`

`query` 返回的数据并非都是完整的数据（最多支持 10000 行），可使用该属性进行判断指示是否还有更多的内容可供处理或迭代：`Type bool`

```py
data = query("select * from klines.future_15m")
return data.has_more #存在更多内容，返回"True"
```

## 方法

### `head`

返回 DataFrame 的前几行。

```py
df.head(n) # "n"代表返回行数，默认值为5

# 示范
d = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])
return d.head() #返回前五行数据
```

### `tail`

返回 DataFrame 的后几行。

```py
df.tail(n) # "n"代表返回行数，默认值为5

# 示范
d = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])
return d.tail() #返回后五行数据
```

### `rename`

重命名 DataFrame 的列。

```py
df.rename()

# 示范
d = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])
d2 = d.rename({ "name": "language" })
return d2.columns #返回重命名后列名：["language", "count"]
```

### `items`

返回 items 列对象，包括具体列名和列数据。

```py
df.items()

# 示范
d = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])
return d.items() #返回对象"dataframe.DataFrameItems"
```

### `iterrows`

返回 items 行对象，包括具体行和行数据。

```py
df.iterrows()

# 示范
d = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])
return d.iterrows() #返回对象"dataframe.DataFrameRows"
```

### `to_list`

将 DataFrame 转换为列表。

```py
df.to_list()

# 示范
d = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])
return d.to_list() #返回列List
```

### `append`

增加一行数据附加到原始 DataFrame。

```py
df.append()

# 示范
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
d1.append({ "name": "c", "count": 16 })
return d1  #返回新增加行后的DataFrame
```

### `ffill`

向前填充缺失值。

```py
df.ffill(inplace = False) # "inplace"代表是否更新，默认值是"False"

# 示范
d1 = DataFrame({ "name": ["js", "go", None, "python"], "count": [12, None, 14, 15] })
return d1.ffill() #缺失值填充为前一个不为空的数值
```

### `bfill`

向后填充缺失值。

```py
df.bfill(inplace = False)

# 示范
d1 = DataFrame({ "name": ["js", "go", None, "python"], "count": [12, None, 14, 15] })
return d1.ffill() #缺失值填充为后一个不为空的数值
```

### `fillna`

使用固定数值填充缺失值。

```py
df.fillna(n, inplace = False) #使用"n"值填充缺失值

# 示范
d1 = DataFrame({ "name": ["js", "go", None, "python"], "count": [12, None, 14, 15] })
return d1.fillna(0) #填充缺失值为0
```

### `apply`

对 DataFrame 的每一列应用函数。

```py
df.apply()

# 示范
d1 = DataFrame({"count": [12, 13, 14, 15]})
return d1.apply(lambda x: x * 2) #返回[24, 26, 28, 30]
```

### `rolling`

根据设定参数，返回滚动窗口对象`dataframe.Rolling`。

```py
df.rolling(window=n1, min_periods=n2) # "windows"代表滑动窗口大小，“min_period”代表最小计算范围

# 示范
d1 = DataFrame({"count": [12, 13, 14, 15]})
return d1.rolling(window=3, min_periods=1)
```

当包含时间序列时，可以使用 `rolling` 方法来进行滑动窗口计算。可以指定具体的滑动周期，例如秒 (`s`)、分钟 (`m`)、小时 (`h`)，并添加 `timeline` 参数作为时间序列的索引。

```py
df.rolling(period, timeline) # "period"代表滑动时间周期，“timeline”代表时间序列索引

# 示范
d1 = DataFrame({
  "count": [4, 6, 1, 4, 7, 1, 5, 8, 2, 9],
  "age": [3, 2, 8, 2, 0, 8, 4, 1, 3, 5],
  "timeline": [
    Timestamp('2013-01-01 09:00:00'),
    Timestamp('2013-01-01 09:00:01'),
    Timestamp('2013-01-01 09:00:02'),
    Timestamp('2013-01-01 09:00:03'),
    Timestamp('2013-01-01 09:00:04'),
    Timestamp('2013-01-01 09:00:05'),
    Timestamp('2013-01-01 09:00:06'),
    Timestamp('2013-01-01 09:00:07'),
    Timestamp('2013-01-01 09:00:08'),
    Timestamp('2013-01-01 09:00:12'),
  ],
})
r1 = d1[["count","age"]].rolling('3s', timeline=d1["timeline"])
return r1# 返回"dataframe.Rolling"属性对象
```

### `groupby`

按照指定条件分组 DataFrame，返回`dataframe.DataFrameGroupBy`对象。

```py
df.groupby()

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1
```

### `resample`

重新采样时间序列数据。返回重采样对象`dataframe.Resampler`。

```py
df.resample() #包含两个参数，第一个代表采样间隔，第二个代表时间索引

d1 = DataFrame({
  "timeline": [
    Timestamp('2013-01-01 08:59:51'),
    Timestamp('2013-01-01 08:59:52'),
    Timestamp('2013-01-01 08:59:53'),
    Timestamp('2013-01-01 08:59:54'),
    Timestamp('2013-01-01 09:00:55'),
    Timestamp('2013-01-01 09:00:56'),
    Timestamp('2013-01-01 09:00:57'),
    Timestamp('2013-01-01 09:00:58'),
    Timestamp('2013-01-01 09:00:59'),
    Timestamp('2013-01-01 09:01:00'),
  ],
  "price": [
    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,
  ]
})
r1 = d1[["price"]].resample('5s', timeline=d1["timeline"])
return r1
```

### `sort_values`

按照指定列的值排序 DataFrame。

```py
df.sort_values(['col1'...],  ascending=False na_position="First") # "第一个参数用于指定 DataFrame 按照哪些列进行排序。您可以传递一个列名的字符串或一个列名的列表作为参数。如果传递了多个列名，DataFrame 将按照这些列的顺序进行排序，即首先按照第一个列名排序，然后在第一个列名相同时按照第二个列名排序，以此类推；"ascending"代表是否上升排序，默认为"True"；"na_position"表示缺失值位置，可选择"First"或者"Last"

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
d1 = d1.sort_values(by=['name', 'count'])
return d1 #返回按照'name'和'count'列排序后的结果
```

### `pivot`

通过重塑数据表，将指定列的值旋转至新的索引列和列中，具体包括以下三个参数：

- `index`：用于指定新 DataFrame 的行索引的列。可以是一个列名的字符串。
- `columns`：用于指定新 DataFrame 的列索引的列。可以是一个列名的字符串。
- `values`：用于指定填充新 DataFrame 的值的列。可以是一个列名的字符串。

**注**: 当数据中存在重复项时，直接使用 pivot 方法会报错，需要先使用 groupby 方法对数据进行分组并进行聚合操作（如求平均值、总和等），然后再使用 pivot 进行数据重塑。

```py
df.pivot(index='...', columns='...', values='...')

# 示范
data = {
  'date': ['2024-05-01', '2024-05-01', '2024-05-01', '2024-05-01'],
  'city': ['Beijing', 'Shanghai', 'Beijing', 'Shanghai'],
  'temperature': [25, 20, 26, 21]
}
d1 = DataFrame(data)

# 直接调用 pivot 方法会报错，因为数据中存在重复项
assert.fails(lambda: d1.pivot(index='date', columns='city', values='temperature'), 'there are duplicates in the data, please groupby first')

# 需要先使用 groupby 方法对数据进行分组
d2 = d1.groupby(['date', 'city']).mean()

# 然后再进行 pivot 操作
d3 = d2.pivot(index='date', columns='city', values='temperature')

# 检查列名是否符合预期
assert.eq(d3.columns, ["temperature_Beijing", "temperature_Shanghai"])
```

### `concat`

用于将多个数据对象沿指定轴合并在一起。具体包括以下参数：

- `objs`：用于指定需要合并的对象，可以是 Series 或 DataFrame 的列表或字典。
- `axis`：用于指定合并的轴。默认为 `0`（按行合并）。如果设置为 `1`，则按列合并。
- `join`：用于指定合并的方式。可以是 `"outer"`（默认）表示并集，即合并所有列或行；或者 `"inner"` 表示交集，即只合并那些在所有数据中都存在的列或行。

```py
concat([d1, d2], axis = 0/1, join = "outer"/"inner")

# 示范
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
# 默认 outer
d3 = concat([d1, d2])
assert.eq(d3.shape, (8, 4))
assert.eq(list(d3["count"]), [None, None, None, None, 4, 3, 2, 1])
# inner
d3 = concat([d1, d2], join="inner")
assert.eq(d3.shape, (8, 3))
assert.eq(d3.columns, ["year", "month", "price"])

# 合并 DataFrame 和 Series
s1 = Series(["a", "b", "c"], name="s1")
d3 = concat([d1, d2, s1])
assert.eq(d3.shape, (11, 5))
assert.eq(d3.columns, ["year", "month", "price", "count", "s1"])
assert.eq(list(d3['s1']), [None, None, None, None, None, None, None, None, "a", "b", "c"])

d3 = concat([d1, d2, s1], join="inner")
assert.eq(d3.shape, (0, 0))
assert.eq(d3.empty, True)
```

### `drop_duplicates`

返回 DataFrame 中的唯一行，去除重复行。

```py
DataFrame.drop_duplicates()

# 示范
data = DataFrame({
  "year": [2022, 2022, 2023, 2024],
  "month": [2, 2, 2, 2],
  "price": [2, 2, 3, 3],
})

return data.drop_duplicates()
# 返回
#    year  month  price
# 0  2022      2      2
# 2  2023      2      3
# 3  2024      2      3
```

### `min`

返回每一列的最小值。

```py
df.min(skipna=True，numeric_only=False) #包含参数"skipna"，代表是否忽略缺失值，默认为"True"；参数"numeric_only"，代表是否只计算数值列，默认为"False"。

# 示范
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.min(numeric_only=True) #返回 count 列最小值：12
```

### `max`

返回每一列的最大值。

```py
df.max(skipna=True，numeric_only=False)

# 示范
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.max(numeric_only=True) #返回 count 列最大值：15
```

### `std`

返回每一列的标准差。

```py
df.std(skipna=True, numeric_only=False, ddof=n) #参数"ddof"，表示用于标准差计算的自由度调整（Delta Degrees of Freedom）。n代表自由度调整数值，具体指从样本数量中减去的数值。默认情况下，ddof=1，表示计算样本标准差。如果需要计算总体标准差，可以将ddof设置为0。

# 示范
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.std(numeric_only=True) #返回 count 列标准差：1.2909944487358056
```

### `var`

返回每一列的方差。

```py
df.var(skipna=True, numeric_only=False, ddof=n)

# 示范
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.var(numeric_only=True) #返回 count 列方差：1.6666666666666667
```

### `sum`

返回每一列的总和。

```py
df.sum(skipna=True，numeric_only=False)

# 示范
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.sum(numeric_only=True)  #返回"count"列总和54
```

### `mean`

返回每一列的平均值。

```py
df.mean(skipna=True，numeric_only=False) #当存在非数值列，进行计算会返回错误

# 示范
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.mean(numeric_only=True)   #返回13.5
```

### `median`

返回每一列的中位数。

```py
df.median(skipna=True，numeric_only=False) #当存在非数值列，进行计算会返回错误

# 示范
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.median(numeric_only=True)   #返回13.5
```

### `mode`

返回每一列的众数。

```py
df.mode(skipna=True，numeric_only=False) #当存在非数值列，进行计算会返回错误

# 示范
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 13, 15] })
return d1.mode(numeric_only=True)   #返回13
```

### `abs`

返回每一列的绝对值。

```py
df.abs(skipna=True，numeric_only=False) #当存在非数值列，进行计算会返回错误

# 示范
d1 = DataFrame({"count": [12, 13, -13, 15] })
return d1.abs(numeric_only=True)   #返回[12, 13, 13, 15]
```

### `round`

返回每一列的指定保留小数点位的值。

```py
Series.round(decimals=0) #decimals代表保留小数，默认为0

# 示范
d1 = DataFrame({"count": [12, 13.6, 13.1, 15] })
return d1.round() #返回[12, 13, 13, 15]
```

### `diff`

返回每一列的设定阶数差分值。

```py
df.diff(period=n) #返回每一列的`n`级差分阶数，默认为1；当包含非数值列时，返回错误。

# 示范
d1 = DataFrame({"count": [12, 13, 14, 15] })
return d1.diff(1)  #返回count列一阶差分：[-, 1, 1, 1]
```

### `cumprod`

返回每一列的累积乘积。

```py
df.cumprod(skipna=True) #当包含非数值列时，返回错误。

# 示范
d1 = DataFrame({ "count": [12, 13, 14, 15] })
return d1.cumprod() #返回count列累积乘积：[12, 156, 2184, 32760]
```

### `pct_change`

返回每一列的百分比变化。

```py
df.pct_change(periods=1) #包含参数"periods"，代表偏移周期，默认值为1；当包含非数值列时，返回错误。

# 示范
d1 = DataFrame({"count": [12, 13, 14, 15] })
return d1.pct_change()  #返回count列偏移周期为1的百分比变化：[-, 0.08333333333333333, 0.07692307692307693, 0.07142857142857142]
```

### `count`

返回 DataFrame 各自列中非空值(None)的个数。

```py
df.count()

# 示范
data = DataFrame({
  "year": [2021, 2022, 2023, 2024],
  "month": [2, 2, None, 2],
  "price": [2, 2, 3, 3],
})

return data.count() # 返回各自列有效值的个数：4，3，4
```

### `throw`

返回主动提出错误结果。

```py
throw()

# 示范
condition = '数据缺失'
if condition == '数据缺失':
    throw('数据缺失错误')
```

