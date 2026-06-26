---
title: Series
sidebar_position: 2
---

In DQL (Data Query Language), Series is a one-dimensional, labeled data structure and is one of the fundamental components of DataFrame.

In DQL, a Series can be created by selecting a single column from a DataFrame. Once created, you can perform various operations on a Series just like with a DataFrame, such as indexing, slicing, filtering, etc.

In summary, Series is an important data structure in DQL for representing one-dimensional data, providing a simple and flexible way to process and analyze data for individual features or attributes.

## Creation Methods

```py
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"] # Select the 'age' column
return type(s1) # Returns 'dataframe.Series'
```

## Properties

### `name`

Returns the Series name: `Type string`

```py
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500]})
s1 = d1["age"]
return s1.name # Returns Series name: 'age'
```

### `size`

Returns the Series size: `Type int`

```py
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.size # Returns Series size: 5
```

### `dtype`

Returns the Series data type.

```py
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.dtype # Returns Series data type: 'int'
```

## Methods

### `rename`

Renames the Series.

```py
Series.rename("new_name")

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
s2 = s1.rename("newage")
return s2.name # Returns renamed Series name: 'newage'
```

### `items`

Returns a key-value iterator for the Series.

```py
Series.items()

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.items() # Returns 'dataframe.SeriesItems'
```

### `to_list`

Converts the Series to a list.

```py
Series.to_list()

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return type(s1.to_list()) # Returns 'list'
```

### `append`

Appends a value to the Series.

```py
Series.append(value)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
s1.append(6)
return s1.size # Returns Series size after appending: 6
```

### `ffill`

Forward fill missing values.

```py
Series.ffill(inplace=False) # "inplace" indicates whether to update the original Series, default is False

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, None, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
s1.ffill(inplace = True) # Update original Series
return s1 # Returns forward-filled Series: [1, 1, 2, 3, 3]
```

### `bfill`

Backward fill missing values.

```py
Series.bfill(inplace=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, None, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
s1.bfill(inplace = True) # Update original Series
return s1 # Returns backward-filled Series: [1, 2, 2, 3, None]
```

### `fillna`

Fill missing values with a specified value.

```py
Series.fillna(n, inplace=False) # Fill missing values with value "n"

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, None, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
s1.fillna(0, inplace = True) # Replace nulls with 0
return s1 # Returns Series after filling with 0: [1, 0, 2, 3, 0]
```

### `max`

Returns the maximum value in the Series.

```py
Series.max(skipna=True, numeric_only=False) # "skipna" indicates whether to ignore missing values, default "True". "numeric_only" indicates whether to compute only numeric columns, default "False".

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.max(skipna=True) # Returns maximum after removing missing values
```

### `min`

Returns the minimum value in the Series.

```py
Series.min(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.min(skipna=True, numeric_only=False) # Returns Series minimum: 1
```

### `sum`

Returns the sum of the Series.

```py
Series.sum(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.sum() # Returns Series sum: 7
```

### `std`

Returns the standard deviation of the Series.

```py
Series.std(skipna=True, numeric_only=False, ddof=n) # "ddof" stands for Delta Degrees of Freedom. "n" is the degrees of freedom adjustment value, specifically the value subtracted from the sample size. By default, ddof=1, which computes the sample standard deviation. Set ddof=0 for population standard deviation.

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.std() # Returns Series standard deviation: 0.9574271077563381
```

### `var`

Returns the variance of the Series.

```py
Series.var(skipna=True, numeric_only=False, ddof=n)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.var() # Returns Series variance: 0.9166666666666666
```

### `mean`

Returns the mean of the Series.

```py
Series.mean(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.mean(skipna=True, numeric_only=False) # Returns Series mean: 1.75
```

### `abs`

Returns the absolute values of the Series.

```py
Series.abs(skipna=True, numeric_only=False) # Computing with non-numeric columns will return an error

# Example
d1 = DataFrame({"count": [12, 13, -13, 15] })
return d1['count'].abs(numeric_only=True)   # Returns [12, 13, 13, 15]
```

### `round`

Returns the Series values rounded to the specified number of decimal places.

```py
Series.round(decimals=0) # "decimals" specifies decimal places, default 0

# Example
d1 = DataFrame({"count": [12, 13.6, 13.1, 15] })
return d1['count'].round() # Returns [12, 14, 13, 15]
```

### `diff`

Returns the difference of the specified order for the Series.

```py
Series.diff(periods=n) # "n" is the difference order, default 1

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.diff(1) # Returns [-, 0, 1, 1, 0]
```

### `cumprod`

Returns the cumulative product of the Series.

```py
Series.cumprod(skipna=True)

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, None], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.cumprod() # Returns [1, 1, 2, 6, -]
```

### `pct_change`

Returns the percentage change of the Series.

```py
Series.pct_change(periods=1) # "periods" is the offset period, default 1. Returns error with non-numeric columns.

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.pct_change(1) # Returns [-, 0, 1, 0.5, 0]
```

### `map`

Maps the values in the Series through a function.

```py
Series.map()

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.map(lambda x: x * 2) # Returns [2, 2, 4, 6, 6]
```

### `apply`

Applies a function to each element in the Series.

```py
Series.apply()

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.apply(lambda x: x * 2) # Returns [2, 2, 4, 6, 6]
```

### `filter`

Filters the elements in the Series based on a given function.

```py
Series.filter()

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.filter(lambda x: x == 1) # Returns rows where value is 1
```

### `reduce`

Performs cumulative computation on the elements in the Series.

```py
Series.reduce()

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.reduce(lambda acc, x: acc + x, 0) # Returns cumulative sum: 10
```

### `rolling`

Returns a rolling window object `dataframe.Rolling` based on the specified parameters.

```py
Series.rolling(window=n1, min_periods=n2) # "window" is the sliding window size, "min_periods" is the minimum computation range

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "age": [1, 1, 2, 3, 3], "count": [1, 2, 3, 4, 5], "price": [100, 200, 300, 400, 500] })
s1 = d1["age"]
return s1.rolling(window=4, min_periods=2) # Returns "dataframe.Rolling" property object
```

When time series data is involved, you can use the `rolling` method for sliding window calculations. You can specify a sliding period, e.g., seconds (`s`), minutes (`m`), hours (`h`), and add a `timeline` parameter as the time series index.

```py
Series.rolling(period, timeline) # "period" is the sliding time period, "timeline" is the time series index

# Example
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
return r1# Returns "dataframe.Rolling" property object
```

### `resample`

Resamples the Series at the specified frequency and returns a resampling object `dataframe.Resampler`.

```py
Series.resample(period, timeline) # Takes two parameters: the first is the sampling interval, the second is the time index

# Example
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
r1 = d1["price"].resample('5s', timeline=d1["timeline"])
return r1
```
