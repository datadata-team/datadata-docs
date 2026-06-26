---
title: DataFrameGroupBy
sidebar_position: 8
---

## Methods

### `min`

Computes the minimum value for each group and returns a DataFrame.

```python
DataFrameGroupBy.min(skipna=True, numeric_only=False) # "skipna" indicates whether to ignore missing values, default "True". "numeric_only" indicates whether to compute only numeric columns, default "False".

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.min() # Returns a DataFrame composed of the minimum values of other columns grouped by "name"
```

### `max`

Computes the maximum value for each group and returns a DataFrame.

```python
DataFrameGroupBy.max(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.max() # Returns a DataFrame composed of the maximum values of other columns grouped by "name"
```

### `sum`

Computes the sum for each group and returns a DataFrame.

```python
DataFrameGroupBy.sum(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.sum() # Returns a DataFrame composed of the sums of other columns grouped by "name"
```

### `std`

Computes the standard deviation for each group and returns a DataFrame.

```python
DataFrameGroupBy.std(skipna=True, numeric_only=False, ddof=n) # "ddof" stands for Delta Degrees of Freedom. "n" is the degrees of freedom adjustment value, specifically the value subtracted from the sample size. By default, ddof=1, which computes the sample standard deviation. Set ddof=0 for population standard deviation.

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.std() # Returns a DataFrame composed of the standard deviations of other columns grouped by "name"
```

### `var`

Computes the variance for each group and returns a DataFrame.

```python
DataFrameGroupBy.var(skipna=True, numeric_only=False, ddof=n)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.var() # Returns a DataFrame composed of the variances of other columns grouped by "name"
```

### `mean`

Computes the mean for each group and returns a DataFrame.

```python
DataFrameGroupBy.mean(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.mean() # Returns a DataFrame composed of the means of other columns grouped by "name"
```

### `diff`

Computes the difference of the specified order for each group and returns a DataFrame.

```python
DataFrameGroupBy.diff(periods = n) # "n" is the difference order, default 1

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.diff(1) # Returns a DataFrame composed of the first-order differences of other columns grouped by "name"
```

### `cumprod`

Computes the cumulative product for each group and returns a DataFrame.

```python
DataFrameGroupBy.cumprod(skipna=True)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.cumprod(skipna=True) # Returns a DataFrame composed of the cumulative products of other columns grouped by "name"
```

### `pct_change`

Computes the percentage change for each group and returns a DataFrame.

```python
DataFrameGroupBy.pct_change(periods=1) # "periods" is the offset period, default 1. Returns error with non-numeric columns.

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.pct_change(1) # Returns a DataFrame composed of the percentage changes of other columns grouped by "name"
```

### `agg`

Applies multiple aggregation functions to each group and returns a DataFrame.

```python
DataFrameGroupBy.agg()

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
def my_sum(s):
  return s.sum()
d2 = g1.agg(my_sum)
return d2  # Returns a DataFrame with aggregated results for each group grouped by "name"
```

### `apply`

Applies a custom function to each group and returns a DataFrame.

```python
DataFrameGroupBy.apply()

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
def my_mean(x):
  res = x[0]
  res["age"] = x["age"].mean()
  res["count"] = x["count"].mean()
  return res
d2 = g1.apply(my_mean)
return d2 # Returns a DataFrame transformed by the custom function "my_mean" for each group
```

### `transform`

Transforms the grouped data using a specified function and returns a DataFrame with the same size as the original.

```python
DataFrameGroupBy.transform()

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1.transform("mean") # Returns a DataFrame transformed by the specified function (mean) for each group
```
