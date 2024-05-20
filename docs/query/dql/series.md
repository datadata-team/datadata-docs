
---
title: Series
sidebar_position: 2
---


在 DQL（Data Query Language）中，Series 是一个一维的、带有标签的数据结构，它是 DataFrame 的基本组成部分之一。

在 DQL 中，Series 可以从 DataFrame 中选择单列进行创建。一旦创建了 Series，您可以像处理 DataFrame 一样对其进行各种操作，例如索引、切片、过滤等。

总之，Series 是 DQL 中用于表示一维数据的重要数据结构，它提供了一种简单而灵活的方式来处理和分析单个特征或属性的数据。

## 创建方法

```py
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"] # 选定'age'列
return type(s1) # 返回'dataframe.Series'
```

## 属性

### name

返回Series名称：`Type string`

```py
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500]})
s1 = d1["age"]
return s1.name #返回Series名称：'age'
```


### size

返回Series大小：`Type int`

```py
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.size #返回Series大小：5
```


### dtype

返回Series数据类型

```py
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.dtype #返回Series数据类型：'int'
```

## 方法

### rename

重命名 Series。

```py
Series.rename("new_name")

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
s2 = s1.rename("newage")
return s2.name #返回Series重命名名称：'newage'
```

### items

返回 Series 的键值对迭代器。

```py
Series.items()

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.items() #返回'dataframe.SeriesItems'
```

### to_list

将 Series 转换为列表。

```py
Series.to_list()

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return type(s1.to_list()) #返回'list'
```

### append

向 Series 添加一个值。

```py
Series.append(value)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
s1.append(6)
return s1.size #返回增添后Series大小：6
```

### ffill

向前填充缺失值。

```py
Series.ffill(inplace=False) #"inplace"代表是否更新原始 Series ，默认是 False

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, None, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
s1.ffill(inplace = True) #更新原始Series
return s1 #返回向前替换后的Series: [1, 1, 2, 3, 5]
```

### bfill

向后填充缺失值。

```py
Series.bfill(inplace=False)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, None, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
s1.bfill(inplace = True) #更新原始Series
return s1 #返回向后替换后的Series: [1, 2, 2, 3, None]
```

### fillna

使用设定值填充缺失值。

```py
Series.fillna(n, inplace=False) #使用"n"值填充缺失值

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, None, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
s1.fillna(0, inplace = True) #使用0替换空值
return s1 #返回0值替换后的Series: [1, 0, 2, 3, 0]
```

### max

返回 Series 中的最大值。

```py
Series.max(skipna=True, numeric_only=False) #包含参数"skipna"，代表是否忽略缺失值，默认为"True"；参数"numeric_only"，代表是否只计算数值列，默认为"False"。

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.max(skipna=True) #返回去除缺失值后的最大值
```

### min

返回 Series 中的最小值。

```py
Series.min(skipna=True, numeric_only=False)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.min(skipna=True，numeric_only=False) #返回Series最小值: 1
```

### sum

返回 Series 中的总和。

```py
Series.sum(skipna=True, numeric_only=False)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.sum() #返回Series总和: 7
```

### std

返回 Series 中的标准差。

```py
Series.std(skipna=True, numeric_only=False, ddof=n) #参数"ddof"，表示用于标准差计算的自由度调整（Delta Degrees of Freedom）。n代表自由度调整数值，具体指从样本数量中减去的数值。默认情况下，ddof=1，表示计算样本标准差。如果需要计算总体标准差，可以将ddof设置为0。

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.std() #返回Series标准差: 0.9574271077563381
```

### var

返回 Series 中的方差。

```py
Series.var(skipna=True, numeric_only=False, ddof=n)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.var() #返回Series方差: 0.9166666666666666
```

### mean

返回 Series 中的平均值。

```py
Series.mean(skipna=True, numeric_only=False)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.mean(skipna=True, numeric_only=False) #返回Series均值: 1.75
```

### diff

返回 Series 中的一阶差分。

```py
Series.diff(period=n) #"n"代表差分级数，默认为1

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.diff(1) # 返回[-, 0, 1, 1, 0]
```

### cumprod

返回 Series 中的累积乘积。

```py
Series.cumprod(skipna=True)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.cumprod() # 返回[1, 1, 2, 6, -]
```

### pct_change

返回 Series 中的百分比变化。

```py
Series.pct_change(periods=1) #包含参数"periods"，代表偏移周期，默认值为1；当包含非数值列时，返回错误。

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.pct_change(1)# 返回[-, 0, 1, 0.5, 0]
```

### map

将 Series 中的值映射到另一个函数。

```py
Series.map()

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.map(lambda x: x * 2)# 返回[2, 2, 4, 6, 6]
```

### apply

将函数应用到 Series 中的每个元素。

```py
Series.apply()

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.apply(lambda x: x * 2)# 返回[2, 2, 4, 6, 6]
```

### filter

根据给定的函数过滤 Series 中的元素。

```py
Series.filter()

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.filter(lambda x: x == 1)# 返回数值为1的行
```

### reduce

对 Series 中的元素进行累积计算。

```py
Series.reduce() 

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.reduce(lambda acc, x: acc + x, 0) #返回累加值10
```

### rolling

根据设定参数，返回滚动窗口对象`dataframe.Rolling`。滚动窗口对象包含方法请查阅[]()。

```py
Series.rolling(window=n1, min_periods=n2) # "windows"代表滑动窗口大小，“min_period”代表最小计算范围

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.rolling(window=4, min_periods=2) # 返回"dataframe.Rolling"属性对象
```

当包含时间序列时，可以使用 `rolling` 方法来进行滑动窗口计算。你可以指定具体的滑动周期，例如秒 (`s`)、分钟 (`m`)、小时 (`h`)，并添加 `timeline` 参数作为时间序列的索引。

```py
Series.rolling(period, timeline) # "period"代表滑动时间周期，“timeline”代表时间序列索引

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
s1 = d1["count"]
r1 = s1.rolling('3s', timeline=d1["timeline"])
return r1# 返回"dataframe.Rolling"属性对象
```

### resample

根据设定频率，重新采样 Series，返回重采样对象`dataframe.Resampler`。滚动窗口对象包含方法请查阅[]()。

```py
Series.resample(period, timeline) #包含两个参数，第一个代表采样间隔，第二个代表时间索引

# 示范
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
s1 = d1["price"]
r1 = s1.resample('5s', timeline=d1["timeline"])
return r1 # 返回"dataframe.Resampler"属性对象
```

### sort_values

对 Series 进行排序。

```py
Series.sort_values(ascending=False, na_position="First") #包含"ascending"参数代表“是否上升排列”，默认为"True"，下降排列为"False"；"na_position"表示缺失值位置，可选择"First"或者"Last"

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [2, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.sort_values(ascending=False) #降序排列，返回[3, 2, 1, 1, 1]
```
