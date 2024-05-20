
---
title: DataFrameGroupBy
sidebar_position: 8
---

### 方法

### min

根据分组计算每个分组的最小值，返回 DataFrame 格式。

```python
DataFrameGroupBy.min(skipna=True, numeric_only=False) #包含参数"skipna"，代表是否忽略缺失值，默认为"True"；参数"numeric_only"，代表是否只计算数值列，默认为"False"。

#示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.min() #返回根据"name"分组后，其他各组最小值组成的 DataFrame
```

### max

根据分组计算每个分组的最小值，返回 DataFrame 格式。

```python
DataFrameGroupBy.max(skipna=True, numeric_only=False)

#示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.max() #返回根据"name"分组后，其他各组最大值组成的 DataFrame
```

### sum

根据分组计算每个分组值的总和，返回 DataFrame 格式。

```python
DataFrameGroupBy.sum(skipna=True, numeric_only=False)

#示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.sum() #返回根据"name"分组后，其他各组总和组成的 DataFrame
```

### std

根据分组计算每个分组值的标准差，返回 DataFrame 格式。

```python
DataFrameGroupBy.std(skipna=True, numeric_only=False, ddof=n) #参数ddof表示用于标准差计算的自由度调整（Delta Degrees of Freedom）。n代表自由度调整数值，具体指从样本数量中减去的数值。默认情况下，ddof=1，表示计算样本标准差。如果需要计算总体标准差，可以将ddof设置为0。

#示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.std() #返回根据"name"分组后，其他各组标准差组成的 DataFrame
```

### var

用于计算每个分组的方差，返回 DataFrame 格式。

```python
DataFrameGroupBy.var(skipna=True, numeric_only=False, ddof=n)

#示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.var() #返回根据"name"分组后，其他各组方差组成的 DataFrame
```

### mean

用于计算每个分组的均值，返回 DataFrame 格式。

```python
DataFrameGroupBy.mean(skipna=True, numeric_only=False)

#示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.mean() #返回根据"name"分组后，其他各组均值组成的 DataFrame
```

### diff

用于计算每个分组设定阶数差分值，返回 DataFrame 格式。

```python
DataFrameGroupBy.diff(periods = n) # "n"代表差分级数，默认为1

#示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.diff(1) #返回根据"name"分组后，其他各组二阶差分后组成的 DataFrame
```

### cumprod

用于计算每个分组的累积乘积，返回 DataFrame 格式。

```python
DataFrameGroupBy.cumprod(skipna=True)

#示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.cumprod(skipna=True) #返回根据"name"分组后，其他各组累积乘积后组成的 DataFrame
```

### pct_change

用于计算每个分组的百分比变化，返回 DataFrame 格式。

```python
DataFrameGroupBy.pct_change(periods=1) #包含参数"periods"，代表偏移周期，默认值为1；当包含非数值列时，返回错误。

#示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.pct_change(1) #返回根据"name"分组后，其他各组百分比变化组成的 DataFrame
```

### agg

用于对每个分组应用多个聚合函数，返回 DataFrame 格式。

```python
DataFrameGroupBy.agg()

#示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
def my_sum(s):
  return s.sum()
d2 = g1.agg(my_sum)
return d2  #返回根据"name"分组后，其他各组汇总计算后的 DataFrame
```

### apply

用于对每个分组应用自定义函数，返回 DataFrame 格式。

```python
DataFrameGroupBy.apply()

#示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
def my_mean(x):
  res = x[0]
  res["age"] = x["age"].mean()
  res["count"] = x["count"].mean()
  return res
d2 = g1.apply(my_mean)
return d2 #返回分组后设定函数（"my_mean"）转换后的 DataFrame
```

### transform

对分组后的数据进行设定函数转换，返回 DataFrame 大小和原始一致。

```python
DataFrameGroupBy.transform()

#示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.transform("mean") #返回分组后设定函数（均值）转换后的 DataFrame
```
