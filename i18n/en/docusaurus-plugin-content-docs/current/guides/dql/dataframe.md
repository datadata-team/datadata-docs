---
title: DataFrame
sidebar_position: 3
---

In DQL (Data Query Language), DataFrame is a two-dimensional, labeled data structure that can store and process different types of data. It is similar to a table in a relational database, where each column can be a different data type. A DataFrame is typically composed of rows and columns — each row represents a sample in the dataset, and each column represents a feature or attribute.

In DQL, DataFrames can be created in various ways, including reading data from files, querying data from databases, converting from other data structures, etc. Once created, you can perform various operations on the DataFrame, such as filtering, sorting, grouping, merging, etc., for data analysis and processing.

In summary, DataFrame is a very important and commonly used data structure in DQL, providing flexible and powerful functionality that makes data processing and analysis more convenient and efficient.

## Creation Methods

### Create from Query

```py
d1 = query("select * from klines.future_15m limit 100")
return d1
```

### Create from Dict

```py
dict = {"name": ["js", "go"], "count": [1, 2]}
d = DataFrame(dict)
return d
```

### Create from List of Dicts

```py
dictList = [{ "name": "js", "count": 1 }, { "name": "go", "count": 2 }]
d = DataFrame(dictList)
return d
```

### Create from List

```py
d = DataFrame([["js", 1],["go",2]], columns=["name","count"])
return d
```

## Properties

### `columns`

Returns the list of column names: `Type list`

```py
d = DataFrame([["js", 1],["go",2]], columns=["name","count"])
return d.columns # Returns column name list: ["name","count"]
```

### `shape`

Returns the DataFrame shape (length × width): `Type (int, int)`

```py
d = DataFrame([["js", 1],["go",2]], columns=["name","count"])
return d.shape # Returns DataFrame shape: (2, 2)
```

### `empty`

Checks whether the DataFrame is empty: `Type bool`

```py
d = DataFrame(columns=["name","count"])
return d.empty # Empty DataFrame, returns "True"
```

### `has_more`

Data returned by `query` may not be complete (max 10000 rows). Use this property to check whether there is more content to process or iterate over: `Type bool`

```py
data = query("select * from klines.future_15m")
return data.has_more # More content exists, returns "True"
```

## Methods

### `head`

Returns the first few rows of the DataFrame.

```py
df.head(n) # "n" is the number of rows to return, default is 5

# Example
d = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])
return d.head() # Returns first five rows
```

### `tail`

Returns the last few rows of the DataFrame.

```py
df.tail(n) # "n" is the number of rows to return, default is 5

# Example
d = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])
return d.tail() # Returns last five rows
```

### `rename`

Renames columns of the DataFrame.

```py
df.rename()

# Example
d = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])
d2 = d.rename({ "name": "language" })
return d2.columns # Returns renamed columns: ["language", "count"]
```

### `items`

Returns an items column object, including column names and column data.

```py
df.items()

# Example
d = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])
return d.items() # Returns object "dataframe.DataFrameItems"
```

### `iterrows`

Returns an items row object, including rows and row data.

```py
df.iterrows()

# Example
d = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])
return d.iterrows() # Returns object "dataframe.DataFrameRows"
```

### `to_list`

Converts the DataFrame to a list.

```py
df.to_list()

# Example
d = DataFrame([["js", 1],["go",2],["c",3],["c++",4],["c#",5],["py",6]], columns=["name","count"])
return d.to_list() # Returns column List
```

### `append`

Appends a row of data to the original DataFrame.

```py
df.append()

# Example
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
d1.append({ "name": "c", "count": 16 })
return d1  # Returns DataFrame with the new row appended
```

### `ffill`

Forward fill missing values.

```py
df.ffill(inplace = False) # "inplace" indicates whether to update in place, default is "False"

# Example
d1 = DataFrame({ "name": ["js", "go", None, "python"], "count": [12, None, 14, 15] })
return d1.ffill() # Missing values filled with the previous non-null value
```

### `bfill`

Backward fill missing values.

```py
df.bfill(inplace = False)

# Example
d1 = DataFrame({ "name": ["js", "go", None, "python"], "count": [12, None, 14, 15] })
return d1.bfill() # Missing values filled with the next non-null value
```

### `fillna`

Fill missing values with a fixed value.

```py
df.fillna(n, inplace = False) # Fill missing values with value "n"

# Example
d1 = DataFrame({ "name": ["js", "go", None, "python"], "count": [12, None, 14, 15] })
return d1.fillna(0) # Fill missing values with 0
```

### `apply`

Apply a function to each column of the DataFrame.

```py
df.apply()

# Example
d1 = DataFrame({"count": [12, 13, 14, 15]})
return d1.apply(lambda x: x * 2) # Returns [24, 26, 28, 30]
```

### `rolling`

Returns a rolling window object `dataframe.Rolling` based on the specified parameters.

```py
df.rolling(window=n1, min_periods=n2) # "window" is the sliding window size, "min_periods" is the minimum computation range

# Example
d1 = DataFrame({"count": [12, 13, 14, 15]})
return d1.rolling(window=3, min_periods=1)
```

When time series data is involved, you can use the `rolling` method for sliding window calculations. You can specify a sliding period, e.g., seconds (`s`), minutes (`m`), hours (`h`), and add a `timeline` parameter as the time series index.

```py
df.rolling(period, timeline) # "period" is the sliding time period, "timeline" is the time series index

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
r1 = d1[["count","age"]].rolling('3s', timeline=d1["timeline"])
return r1# Returns "dataframe.Rolling" property object
```

### `groupby`

Groups the DataFrame by specified criteria and returns a `dataframe.DataFrameGroupBy` object.

```py
df.groupby()

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
g1 = d1.groupby(["name"])
return g1
```

### `resample`

Resamples time series data. Returns a resampling object `dataframe.Resampler`.

```py
df.resample() # Takes two parameters: the first is the sampling interval, the second is the time index

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

Sorts the DataFrame by the values in specified columns.

```py
df.sort_values(['col1'...],  ascending=False na_position="First") # The first parameter specifies which columns to sort the DataFrame by. You can pass a column name string or a list of column names. If multiple column names are passed, the DataFrame will be sorted in the order of these columns, i.e., first by the first column, then by the second when the first is equal, and so on. "ascending" indicates ascending sort, default is "True". "na_position" indicates the position of missing values, options: "First" or "Last"

# Example
d1 = DataFrame({ "name": ["js", "js", "js", "go", "go"], "count": [1, 2, 3, 4, 5], "age": [1, 1, 2, 3, 3] })
d1 = d1.sort_values(by=['name', 'count'])
return d1 # Returns the result sorted by 'name' and 'count' columns
```

### `pivot`

Reshapes the data table by pivoting specified column values into new index and column labels. Takes three parameters:

- `index`: The column used for the new DataFrame's row index. Can be a column name string.
- `columns`: The column used for the new DataFrame's column index. Can be a column name string.
- `values`: The column used to fill the new DataFrame's values. Can be a column name string.

**Note**: When there are duplicates in the data, directly using the pivot method will raise an error. You need to first use `groupby` to group and aggregate the data (e.g., mean, sum), then use `pivot` for reshaping.

```py
df.pivot(index='...', columns='...', values='...')

# Example
data = {
  'date': ['2024-05-01', '2024-05-01', '2024-05-01', '2024-05-01'],
  'city': ['Beijing', 'Shanghai', 'Beijing', 'Shanghai'],
  'temperature': [25, 20, 26, 21]
}
d1 = DataFrame(data)

# Directly calling pivot will error because of duplicates
assert.fails(lambda: d1.pivot(index='date', columns='city', values='temperature'), 'there are duplicates in the data, please groupby first')

# Need to groupby first
d2 = d1.groupby(['date', 'city']).mean()

# Then pivot
d3 = d2.pivot(index='date', columns='city', values='temperature')

# Check that column names match expectations
assert.eq(d3.columns, ["temperature_Beijing", "temperature_Shanghai"])
```

### `concat`

Used to concatenate multiple data objects along a specified axis. Takes the following parameters:

- `objs`: The objects to merge, which can be a list or dict of Series or DataFrames.
- `axis`: The axis to concatenate along. Defaults to `0` (row-wise). Set to `1` for column-wise.
- `join`: The merge mode. `"outer"` (default) for union — merges all columns or rows; `"inner"` for intersection — only merges columns or rows that exist in all data objects.

```py
concat([d1, d2], axis = 0/1, join = "outer"/"inner")

# Example
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
# Default outer
d3 = concat([d1, d2])
assert.eq(d3.shape, (8, 4))
assert.eq(list(d3["count"]), [None, None, None, None, 4, 3, 2, 1])
# inner
d3 = concat([d1, d2], join="inner")
assert.eq(d3.shape, (8, 3))
assert.eq(d3.columns, ["year", "month", "price"])

# Merge DataFrame and Series
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

Returns unique rows in the DataFrame, removing duplicate rows.

```py
DataFrame.drop_duplicates()

# Example
data = DataFrame({
  "year": [2022, 2022, 2023, 2024],
  "month": [2, 2, 2, 2],
  "price": [2, 2, 3, 3],
})

return data.drop_duplicates()
# Returns
#    year  month  price
# 0  2022      2      2
# 2  2023      2      3
# 3  2024      2      3
```

### `min`

Returns the minimum value of each column.

```py
df.min(skipna=True, numeric_only=False) # "skipna" indicates whether to ignore missing values, default "True". "numeric_only" indicates whether to compute only numeric columns, default "False".

# Example
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.min(numeric_only=True) # Returns count column minimum: 12
```

### `max`

Returns the maximum value of each column.

```py
df.max(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.max(numeric_only=True) # Returns count column maximum: 15
```

### `std`

Returns the standard deviation of each column.

```py
df.std(skipna=True, numeric_only=False, ddof=n) # "ddof" stands for Delta Degrees of Freedom. "n" is the degrees of freedom adjustment value, specifically the value subtracted from the sample size. By default, ddof=1, which computes the sample standard deviation. Set ddof=0 for population standard deviation.

# Example
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.std(numeric_only=True) # Returns count column standard deviation: 1.2909944487358056
```

### `var`

Returns the variance of each column.

```py
df.var(skipna=True, numeric_only=False, ddof=n)

# Example
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.var(numeric_only=True) # Returns count column variance: 1.6666666666666667
```

### `sum`

Returns the sum of each column.

```py
df.sum(skipna=True, numeric_only=False)

# Example
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.sum(numeric_only=True)  # Returns "count" column sum: 54
```

### `mean`

Returns the mean of each column.

```py
df.mean(skipna=True, numeric_only=False) # Computing with non-numeric columns will return an error

# Example
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.mean(numeric_only=True)   # Returns 13.5
```

### `median`

Returns the median of each column.

```py
df.median(skipna=True, numeric_only=False) # Computing with non-numeric columns will return an error

# Example
d1 = DataFrame({ "name": ["js", "go", "rust", "python"], "count": [12, 13, 14, 15] })
return d1.median(numeric_only=True)   # Returns 13.5
```

### `mode`

Returns the mode of each column.

```py
df.mode(skipna=True, numeric_only=False) # Computing with non-numeric columns will return an error
```
