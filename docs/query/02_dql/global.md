---
title: 全局函数
sidebar_position: 1
---

## 全局函数

### `query`

执行 SQL 查询

```python
query(sql, *args)
```

| name | type    | description             |
| ---- | ------- | ----------------------- |
| sql  | string  | SQL 字符串              |
| args | ...args | SQL 参数，用于 SQL 插值 |

### `Series`

创建一个 Series，Series 表示一个数据列

```python
Series([], dtype='string', name='string')
```

| name  | type   | description |
| ----- | ------ | ----------- |
| data  | list   | 数据列表    |
| dtype | string | 数据类型    |
| name  | string | 数据列名称  |

### `DataFrame` (alias `table`)

创建 DataFrame ，DataFrame 表示一个数据表格。

```python
DataFrame([
  { "name": "a" },
  { "name": "b" },
  { "name": "c" },
])
DataFrame({"name": ["a", "b", "c"]})

# use alias name
table({"name": ["a", "b", "c"]})
```

| name    | type       | description |
| ------- | ---------- | ----------- |
| data    | list\|dict | 数据        |
| columns | list       | 执行列名称  |

### `Timestamp`

Timestamp 用于表示时间、日期、时间戳等类型。

```python
Timestamp('11:12:13')
```

## 全局模块

- math
- time
- json
- assert
