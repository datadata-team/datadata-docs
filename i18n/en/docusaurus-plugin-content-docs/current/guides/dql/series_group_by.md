---
title: SeriesGroupBy
sidebar_position: 7
---

## Methods

### `min`

Returns the minimum value for each group after grouping.

```python
SeriesGroupBy.min(skipna=True, numeric_only=False) # "skipna" indicates whether to ignore missing values, default "True". "numeric_only" indicates whether to compute only numeric columns, default "False".

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.min() # Returns group minimums: [1, 3, 4]
```

### `max`

Returns the maximum value for each group after grouping.

```python
SeriesGroupBy.max(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.max() # Returns group maximums: [2, 3, 5]
```

### `sum`

Returns the sum for each group after grouping.

```python
SeriesGroupBy.sum(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.sum() # Returns group sums: [3, 3, 9]
```

### `std`

Returns the standard deviation for each group after grouping.

```python
SeriesGroupBy.std(skipna=True, numeric_only=False, ddof=n) # "ddof" stands for Delta Degrees of Freedom. "n" is the degrees of freedom adjustment value, specifically the value subtracted from the sample size. By default, ddof=1, which computes the sample standard deviation. Set ddof=0 for population standard deviation.

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.std()  # Returns group standard deviations: [1, 0.7071067811865476]
```

### `var`

Returns the variance for each group after grouping.

```python
SeriesGroupBy.var(skipna=True, numeric_only=False, ddof=n)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.var()  # Returns group variances: [1, 0.5]
```

### `mean`

Returns the mean for each group after grouping.

```python
SeriesGroupBy.mean(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.mean()  # Returns group means: [2, 4.5]
```

### `diff`

Returns the difference of the specified order for each group after grouping.

```python
SeriesGroupBy.diff(periods = n) # "n" is the difference order, default 1

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.diff()  # Returns group differences: [-, 1, 1, -, 1]
```

### `cumprod`

Returns the cumulative product for each group after grouping.

```python
SeriesGroupBy.cumprod(skipna=True)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.cumprod()  # Returns group cumulative products: [1, 2, 6, 4, 20]
```

### `pct_change`

Returns the percentage change for each group after grouping.

```python
SeriesGroupBy.pct_change(periods=1) # "periods" is the offset period, default 1. Returns error with non-numeric columns.

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.pct_change()  # Returns group percentage changes: [-, 1, 0.5, -, 0.25]
```

### `apply`

Applies a function to the grouped data.

```python
SeriesGroupBy.apply()

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.apply(lambda x: x * 2) # Returns group function results: [2, 4, 6, 8, 10]
```

### `transform`

Transforms the grouped data using a specified function.

```python
SeriesGroupBy.transform()

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 1, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
g1 = d1.groupby(["name", "age"])
s1 = g1["count"]
return s1.transform("mean")  # Returns group transformed values (mean): [2, 2, 2, 4.5, 4.5]
```
