---
title: Merge
sidebar_position: 9
---

## Methods

### `merge`

Similar to SQL JOIN, merges two DataFrames together.

```python
DataFrame.merge(right, how='inner', on=None, left_on=None, right_on=None, suffixes=('_x', '_y'))
```

#### Parameters

- **right**: The right DataFrame.
- **how**: The merge method. Supported values:
  - `inner`: Inner join, returns the intersection of both DataFrames.
  - `outer`: Outer join, returns the union of both DataFrames.
  - `left`: Left join, returns all rows from the left DataFrame.
  - `right`: Right join, returns all rows from the right DataFrame.
  - `cross`: Cartesian product, returns all combinations.
- **on**: Column name(s) to use as join keys. Ignored if `left_on` and `right_on` are also set.
- **left_on**: Key(s) from the left DataFrame to use for joining.
- **right_on**: Key(s) from the right DataFrame to use for joining.
- **suffixes**: Suffixes for overlapping column names after merging. Defaults to `('_x', '_y')`.

#### Incompatible Details

1. The column order of the merged DataFrame may differ from Pandas. (But data row order is consistent.)
2. The `sort` parameter is not supported.

### Usage Examples

The following examples demonstrate how to use the `merge` method to merge two DataFrames, showing various merge modes (`inner`, `left`, `right`, `outer`, `cross`).

#### Sample DataFrames

```python
# Sample DataFrames
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
```

#### `inner` Merge

`inner` merge keeps only rows that exist in both DataFrames.

```python
# inner merge example
d3 = d1.merge(d2, on=["year", "month"])
print(d3)
```

**Output:**

```
   year  month  price_x  count  price_y
0  2021      1        1      3        2
1  2022      2        2      2        3
2  2023      3        3      1        4
```

#### `left` Merge

`left` merge keeps all rows from the left DataFrame.

```python
# Modify d2 sample DataFrame
d2 = DataFrame({
  "year": [2024, 2021, 2022, 2023, 2023],
  "month": [5, 1, 2, 3, 3],
  "count": [4, 3, 2, 1, 1],
  "price": [1, 2, 3, 4, 4],
})

# left merge example
d3 = d1.merge(d2, how="left", on=["year", "month"])
print(d3)
```

**Output:**

```
   year  month  price_x  count  price_y
0  2021      1        1    3.0      2.0
1  2022      2        2    2.0      3.0
2  2023      3        3    1.0      4.0
3  2023      3        3    1.0      4.0
4  2024      4        4    NaN      NaN
```

#### `right` Merge

`right` merge keeps all rows from the right DataFrame.

```python
# right merge example
d3 = d1.merge(d2, how="right", on=["year", "month"])
print(d3)
```

**Output:**

```
   year  month  price_x  count  price_y
0  2024      5      NaN      4        1
1  2021      1      1.0      3        2
2  2022      2      2.0      2        3
3  2023      3      3.0      1        4
4  2023      3      3.0      1        4
```

#### `outer` Merge

`outer` merge returns the union of both DataFrames.

```python
# outer merge example
d3 = d1.merge(d2, how="outer", on=["year", "month"])
print(d3)
```

**Output:**

```
   year  month  price_x  count  price_y
0  2021      1      1.0    3.0      2.0
1  2022      2      2.0    2.0      3.0
2  2023      3      3.0    1.0      4.0
3  2023      3      3.0    1.0      4.0
4  2024      4      4.0    NaN      NaN
5  2024      5      NaN    4.0      1.0
```

#### `cross` Merge

`cross` merge returns the Cartesian product of both DataFrames.

```python
# cross merge example
d3 = d1.merge(d2, how="cross")
print(d3)
```

**Output:**

```
    year_x  month_x  price_x  year_y  month_y  count  price_y
0     2021        1        1    2024        5      4        1
1     2021        1        1    2021        1      3        2
2     2021        1        1    2022        2      2        3
3     2021        1        1    2023        3      1        4
4     2022        2        2    2024        5      4        1
5     2022        2        2    2021        1      3        2
6     2022        2        2    2022        2      2        3
7     2022        2        2    2023        3      1        4
8     2023        3        3    2024        5      4        1
9     2023        3        3    2021        1      3        2
10    2023        3        3    2022        2      2        3
11    2023        3        3    2023        3      1        4
12    2024        4        4    2024        5      4        1
13    2024        4        4    2021        1      3        2
14    2024        4        4    2022        2      2        3
15    2024        4        4    2023        3      1        4
```

The above code demonstrates the various merge modes of the `merge` method and their output results.
