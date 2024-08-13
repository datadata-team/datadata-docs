---
title: SeriesGroupBy
sidebar_position: 7
---

## 方法

### min

返回分组后各组最小值。

```python
SeriesGroupBy.min(skipna=True，numeric_only=False) #包含参数"skipna"，代表是否忽略缺失值，默认为"True"；参数"numeric_only"，代表是否只计算数值列，默认为"False"。

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.min() #返回分组后各组最小值：[1, 3, 4]
```

### max

返回分组后各组最大值。

```python
SeriesGroupBy.max(skipna=True，numeric_only=False)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.max() #返回分组后各组最大值：[2, 3, 5]
```

### sum

返回分组后各组总和。

```python
SeriesGroupBy.sum(skipna=True，numeric_only=False)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.sum() #返回分组后各组总和：[3, 3, 9]
```

### std

返回分组后各组标准差。

```python
SeriesGroupBy.std(skipna=True, numeric_only=False, ddof=n) #参数ddof表示用于标准差计算的自由度调整（Delta Degrees of Freedom）。n代表自由度调整数值，具体指从样本数量中减去的数值。默认情况下，ddof=1，表示计算样本标准差。如果需要计算总体标准差，可以将ddof设置为0。

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.std()  #返回分组后各组标准差：[1, 0.7071067811865476]
```

### var

返回分组后的方差。

```python
SeriesGroupBy.var(skipna=True, numeric_only=False, ddof=n)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.var()  #返回分组后各组方差：[1, 0.5]
```

### mean

返回分组各组平均值。

```python
SeriesGroupBy.mean(skipna=True，numeric_only=False)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.mean()  #返回分组后各组均值：[2, 4.5]
```

### diff

返回分组后各组设定阶数差分值。

```python
SeriesGroupBy.diff(periods = n) # "n"代表差分阶数，默认为1

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.diff()  #返回分组后差分值：[-, 1, 1, -, 1]
```

### cumprod

返回分组后的累积乘积。

```python
SeriesGroupBy.cumprod(skipna=True)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.cumprod()  #返回分组后累积乘积值：[1, 2, 6, 4, 20]
```

### pct_change

返回分组后的百分比变化。

```python
SeriesGroupBy.pct_change(periods=1) #包含参数"periods"，代表偏移周期，默认值为1；当包含非数值列时，返回错误。

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.pct_change()  #返回分组后百分比变化：[-, 1, 0.5, -, 0.25]
```

### apply

将函数应用到分组后的数据。

```python
SeriesGroupBy.apply()

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.apply(lambda x: x * 2) #返回分组后函数运算后值：[2, 4, 6, 8, 10]
```

### transform

对分组后的数据进行设定函数转换。

```python
SeriesGroupBy.transform()

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.transform("mean")  #返回分组后设定函数（均值）转换后值：[2, 2, 2, 4.5, 4.5]
```
