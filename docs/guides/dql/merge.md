---
title: Merge
sidebar_position: 9
---

## 方法

### `merge`

类似于 SQL 的 JOIN 操作，将两个数据框合并。

```python
DataFrame.merge(right, how='inner', on=None, left_on=None, right_on=None, suffixes=('_x', '_y'))
```

#### 参数

- **right**: 右侧数据框。
- **how**: 合并的方式。支持以下值：
  - `inner`: 内连接，返回两个数据框的交集。
  - `outer`: 外连接，返回两个数据框的并集。
  - `left`: 左连接，返回左侧数据框的所有行。
  - `right`: 右连接，返回右侧数据框的所有行。
  - `cross`: 笛卡尔积，返回所有组合。
- **on**: 列名，用于连接的键。如果 `left_on` 和 `right_on` 也设置了，将忽略此参数。
- **left_on**: 左侧数据框中用于连接的键。
- **right_on**: 右侧数据框中用于连接的键。
- **suffixes**: 合并后的列名后缀。默认为 `('_x', '_y')`。

#### 不兼容的细节

1. 合并后的 DataFrame 列顺序可能与 Pandas 不一致。（但数据行顺序一致）
2. 不支持 `sort` 参数。



### 使用示例

以下示例展示了如何使用 `merge` 方法来合并两个数据框，并演示了各种合并方式（`inner`、`left`、`right`、`outer`、`cross`）。

#### 示例数据框

```python
# 示例数据框
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



#### `inner` 合并

`inner` 合并只保留两个数据框中共有的行。

```python
# inner 合并示例
d3 = d1.merge(d2, on=["year", "month"])
print(d3)
```

**输出结果：**

```
   year  month  price_x  count  price_y
0  2021      1        1      3        2
1  2022      2        2      2        3
2  2023      3        3      1        4
```



#### `left` 合并

`left` 合并保留左侧数据框中的所有行。

```python
# 修改 d2 示例数据框
d2 = DataFrame({
  "year": [2024, 2021, 2022, 2023, 2023],
  "month": [5, 1, 2, 3, 3],
  "count": [4, 3, 2, 1, 1],
  "price": [1, 2, 3, 4, 4],
})

# left 合并示例
d3 = d1.merge(d2, how="left", on=["year", "month"])
print(d3)
```

**输出结果：**

```
   year  month  price_x  count  price_y
0  2021      1        1    3.0      2.0
1  2022      2        2    2.0      3.0
2  2023      3        3    1.0      4.0
3  2023      3        3    1.0      4.0
4  2024      4        4    NaN      NaN
```



#### `right` 合并

`right` 合并保留右侧数据框中的所有行。

```python
# right 合并示例
d3 = d1.merge(d2, how="right", on=["year", "month"])
print(d3)
```

**输出结果：**

```
   year  month  price_x  count  price_y
0  2024      5      NaN      4        1
1  2021      1      1.0      3        2
2  2022      2      2.0      2        3
3  2023      3      3.0      1        4
4  2023      3      3.0      1        4
```


#### `outer` 合并

`outer` 合并返回两个数据框的并集。

```python
# outer 合并示例
d3 = d1.merge(d2, how="outer", on=["year", "month"])
print(d3)
```

**输出结果：**

```
   year  month  price_x  count  price_y
0  2021      1      1.0    3.0      2.0
1  2022      2      2.0    2.0      3.0
2  2023      3      3.0    1.0      4.0
3  2023      3      3.0    1.0      4.0
4  2024      4      4.0    NaN      NaN
5  2024      5      NaN    4.0      1.0
```


#### `cross` 合并

`cross` 合并返回两个数据框的笛卡尔积。

```python
# cross 合并示例
d3 = d1.merge(d2, how="cross")
print(d3)
```

**输出结果：**

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



以上代码展示了 `merge` 方法的各种合并方式及其输出结果。
