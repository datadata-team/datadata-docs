---
title: Rolling
sidebar_position: 5
---

## Methods

### `min`

Returns the minimum value within each rolling window.

```py
dataframe.Rolling.min(skipna=True, numeric_only=False) # "skipna" indicates whether to ignore missing values, default "True". "numeric_only" indicates whether to compute only numeric columns, default "False".

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1)
return r1.min() # With window size 3, returns the minimum within each rolling window; min_periods=1 means when window is not fully satisfied, returns the minimum among available elements
```

### `max`

Returns the maximum value within each rolling window.

```py
dataframe.Rolling.max(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1)
return r1.max()
```

### `sum`

Returns the sum within each rolling window.

```py
dataframe.Rolling.sum(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1)
return r1.sum()
```

### `std`

Returns the standard deviation within each rolling window.

```py
dataframe.Rolling.std(skipna=True, numeric_only=False, ddof=n) # "ddof" stands for Delta Degrees of Freedom. "n" is the degrees of freedom adjustment value, specifically the value subtracted from the sample size. By default, ddof=1, which computes the sample standard deviation. Set ddof=0 for population standard deviation.

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1)
return r1.std()
```

### `var`

Returns the variance within each rolling window.

```py
dataframe.Rolling.var(skipna=True, numeric_only=False, ddof=n)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1)
return r1.var()
```

### `mean`

Returns the mean within each rolling window.

```py
dataframe.Rolling.mean(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1)
return r1.mean()
```

### `median`

Returns the median within each rolling window.

```py
dataframe.Rolling.median(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1)
return r1.median()
```

### `apply`

Applies a function to the data within each rolling window.

```py
dataframe.Rolling.apply()

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
r1 = d1["age"].rolling(window=3, min_periods=1)
def cal_mean(x):
  d = DataFrame(x)
  return d["column_0"].mean()
return r1.apply(cal_mean)
```
