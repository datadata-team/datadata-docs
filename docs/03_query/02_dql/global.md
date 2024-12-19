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


### `fetch`

`fetch` 函数用于执行 HTTP 请求，通过不同的 HTTP 方法（如 `GET`、`POST`、`PUT`、`PATCH`、`DELETE` 等）访问指定的 URL。用户可以通过参数传入请求头、请求体和超时时间，并获取响应的状态码、响应头和响应体。


```python
fetch(url: str, method=Literal["GET", "PUT", "POST", "HEAD", "DELETE"], headers: Dict[str, str]=None, body: Any=None, timeout: int=3000)
```

### 参数说明：

1. **`url` (str)**  
   - 请求的目标 URL。  
   - **示例**: `"https://api.example.com/data"`

2. **`method` (Literal["GET", "PUT", "POST", "HEAD", "DELETE", "PATCH"])**  
   - HTTP 方法，默认为 `GET`。  
   - 支持的 HTTP 方法包括：`GET`、`POST`、`PUT`、`PATCH`、`HEAD` 和 `DELETE`。

3. **`headers` (Dict[str, str], 可选)**  
   - HTTP 请求头，格式为字典。如果没有特殊要求，可以设置为 `None`。  
   - **示例**: `{"Content-Type": "application/json", "Authorization": "Bearer token"}`

4. **`body` (Any, 可选)**  
   - HTTP 请求的请求体，通常在 `POST`、`PUT` 和 `PATCH` 请求中使用。默认为 `None`。  
   - **示例**:  
     - JSON 字符串: `{"name": "John", "age": 30}`  
     - 普通文本: `"Hello World"`

5. **`timeout` (int, 可选)**  
   - 请求的超时时间（单位：毫秒），默认为 3000（即 3 秒）。



### 返回值：

返回一个字典，包含以下内容：  
- **`status` (int):** HTTP 响应状态码，例如 `200` 表示请求成功，`404` 表示资源未找到。  
- **`headers` (dict):** HTTP 响应头。  
- **`body` (str | None):** HTTP 响应体的内容。如果没有响应体，则为 `None`。

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
