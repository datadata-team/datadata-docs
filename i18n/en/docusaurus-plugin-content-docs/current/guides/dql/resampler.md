---
title: Resampler
sidebar_position: 6
---

## Methods

### `min`

Returns the minimum value after resampling.

```py
dataframe.Resampler.min(skipna=True, numeric_only=False) # "skipna" indicates whether to ignore missing values, default "True". "numeric_only" indicates whether to compute only numeric columns, default "False".

# Example
d1 = DataFrame({
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
    Timestamp('2013-01-01 09:00:09'),
  ],
  "price": [
    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,
  ]
})
r1 = d1[["price"]].resample('5s', timeline=d1["timeline"])
return r1.min() # With 5-second sampling period, returns the minimum within each sampling period
```

### `max`

Returns the maximum value after resampling.

```py
dataframe.Resampler.max(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({
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
    Timestamp('2013-01-01 09:00:09'),
  ],
  "price": [
    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,
  ]
})
r1 = d1[["price"]].resample('5s', timeline=d1["timeline"])
return r1.max()
```

### `sum`

Returns the sum after resampling.

```py
dataframe.Resampler.sum(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({
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
    Timestamp('2013-01-01 09:00:09'),
  ],
  "price": [
    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,
  ]
})
r1 = d1[["price"]].resample('5s', timeline=d1["timeline"])
return r1.sum()
```

### `std`

Returns the standard deviation after resampling.

```py
dataframe.Resampler.std(skipna=True, numeric_only=False, ddof=n) # "ddof" stands for Delta Degrees of Freedom. "n" is the degrees of freedom adjustment value, specifically the value subtracted from the sample size. By default, ddof=1, which computes the sample standard deviation. Set ddof=0 for population standard deviation.

# Example
d1 = DataFrame({
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
    Timestamp('2013-01-01 09:00:09'),
  ],
  "price": [
    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,
  ]
})
r1 = d1[["price"]].resample('5s', timeline=d1["timeline"])
return r1.std()
```

### `var`

Returns the variance after resampling.

```py
dataframe.Resampler.var(skipna=True, numeric_only=False, ddof=n)

# Example
d1 = DataFrame({
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
    Timestamp('2013-01-01 09:00:09'),
  ],
  "price": [
    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,
  ]
})
r1 = d1[["price"]].resample('5s', timeline=d1["timeline"])
return r1.var()
```

### `mean`

Returns the mean after resampling.

```py
dataframe.Resampler.mean(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({
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
    Timestamp('2013-01-01 09:00:09'),
  ],
  "price": [
    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,
  ]
})
r1 = d1[["price"]].resample('5s', timeline=d1["timeline"])
return r1.mean()
```

### `apply`

Applies a function to the resampled data.

```py
dataframe.Resampler.apply()

# Example
d1 = DataFrame({
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
    Timestamp('2013-01-01 09:00:09'),
  ],
  "price": [
    4, 6, 1, 4, 7, 1, 5, 8, 2, 9,
  ]
})
r1 = d1[["price"]].resample('5s', timeline=d1["timeline"])
return r1.apply(lambda x: x * 2)
```
