
---
title: Rolling
sidebar_position: 5
---

## 方法

### min

返回各个滚动窗口内的最小值。

```py
dataframe.Rolling.min(skipna=True, numeric_only=False) #包含参数"skipna"，代表是否忽略缺失值，默认为"True"；参数"numeric_only"，代表是否只计算数值列，默认为"False"。

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1) 
return r1.min() #以3为滑动周期，返回各个滑动周期内的最小值；设置最小周期为1，当不满足周期数目，返回当前周期数目内的最小值
```

### max

返回各个滚动窗口中的最大值。

```py
dataframe.Rolling.max(skipna=True, numeric_only=False)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1) 
return r1.max()
```

### sum

返回各个滚动窗口中的总和。

```py
dataframe.Rolling.sum(skipna=True, numeric_only=False)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1) 
return r1.sum()
```

### std

返回各个滚动窗口中的标准差。

```py
dataframe.Rolling.std(skipna=True, numeric_only=False, ddof=n) #参数"ddof"，表示用于标准差计算的自由度调整（Delta Degrees of Freedom）。n代表自由度调整数值，具体指从样本数量中减去的数值。默认情况下，ddof=1，表示计算样本标准差。如果需要计算总体标准差，可以将ddof设置为0。

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1) 
return r1.std()
```

### var

返回各个滚动窗口中的方差。

```py
dataframe.Rolling.var(skipna=True, numeric_only=False, ddof=n)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1) 
return r1.var()
```

### mean

返回各个滚动窗口中的平均值。

```py
dataframe.Rolling.mean(skipna=True, numeric_only=False)

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1) 
return r1.mean()
```

### apply

将函数应用到各个滚动窗口中的数据。

```py
dataframe.Rolling.apply()

# 示范
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1) 
def cal_mean(x):
  d = DataFrame(x)
  return d["column_0"].mean()
return r1.apply(cal_mean)
```
