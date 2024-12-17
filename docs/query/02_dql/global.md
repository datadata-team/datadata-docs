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

### `fetch`

`fetch` 函数用于执行 HTTP 请求，通过不同的 HTTP 方法（如 `GET`、`POST`、`PUT`、`PATCH`、`DELETE` 等）访问指定的 URL。用户可以通过参数传入请求头、请求体和超时时间，并获取响应的状态码、响应头和响应体。



#### 参数说明：

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



#### 返回值：

返回一个字典，包含以下内容：  
- **`status` (int):** HTTP 响应状态码，例如 `200` 表示请求成功，`404` 表示资源未找到。  
- **`headers` (dict):** HTTP 响应头。  
- **`body` (str | None):** HTTP 响应体的内容。如果没有响应体，则为 `None`。



#### 示例代码

##### 示例 1: 执行 GET 请求

```python
response = fetch(
    url="https://jsonplaceholder.typicode.com/posts/1",
    method="GET"
)
print("Status Code:", response["status"])
print("Headers:", response["headers"])
print("Body:", response["body"])
```

**输出示例:**
```
Status Code: 200
Headers: {'Content-Type': 'application/json; charset=utf-8', ...}
Body: {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum..."
}
```



##### 示例 2: 执行 POST 请求，发送 JSON 数据

```python
response = fetch(
    url="https://jsonplaceholder.typicode.com/posts",
    method="POST",
    headers={"Content-Type": "application/json"},
    body='{"title": "foo", "body": "bar", "userId": 1}'
)
print("Status Code:", response["status"])
print("Body:", response["body"])
```

**输出示例:**
```
Status Code: 201
Body: {
  "title": "foo",
  "body": "bar",
  "userId": 1,
  "id": 101
}
```



##### 示例 3: 执行 PUT 请求，更新数据

```python
response = fetch(
    url="https://jsonplaceholder.typicode.com/posts/1",
    method="PUT",
    headers={"Content-Type": "application/json"},
    body='{"id": 1, "title": "updated title", "body": "updated body", "userId": 1}'
)
print("Status Code:", response["status"])
print("Body:", response["body"])
```

**输出示例:**
```
Status Code: 200
Body: {
  "id": 1,
  "title": "updated title",
  "body": "updated body",
  "userId": 1
}
```



##### 示例 4: 执行 PATCH 请求，部分更新数据

```python
response = fetch(
    url="https://jsonplaceholder.typicode.com/posts/1",
    method="PATCH",
    headers={"Content-Type": "application/json"},
    body='{"title": "patched title"}'
)
print("Status Code:", response["status"])
print("Body:", response["body"])
```

**输出示例:**
```
Status Code: 200
Body: {
  "id": 1,
  "title": "patched title",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum...",
  "userId": 1
}
```



##### 示例 5: 执行 DELETE 请求

```python
response = fetch(
    url="https://jsonplaceholder.typicode.com/posts/1",
    method="DELETE"
)
print("Status Code:", response["status"])
print("Body:", response["body"])
```

**输出示例:**
```
Status Code: 200
Body: {}
```



##### 示例 6: 使用请求头发送 GET 请求

```python
response = fetch(
    url="https://echo.free.beeceptor.com",
    method="GET",
    headers={"X-Custom-Header": "fetch test"}
)
print("Status Code:", response["status"])
print("Body:", response["body"])
```



##### 示例 7: POST 请求发送纯文本内容

```python
response = fetch(
    url="https://echo.free.beeceptor.com",
    method="POST",
    headers={"Content-Type": "text/plain"},
    body="This is a plain text body."
)
print("Status Code:", response["status"])
print("Body:", response["body"])
```



#### 使用场景

1. **数据获取**：通过 `GET` 方法从 API 或网页获取数据。  
2. **数据提交**：通过 `POST` 或 `PUT` 方法向服务器提交数据。  
3. **部分更新**：使用 `PATCH` 请求修改资源的部分内容。  
4. **删除资源**：使用 `DELETE` 方法删除指定资源。  
5. **测试接口**：用于测试不同类型的 HTTP 请求和响应数据。  



#### 注意事项

1. **URL 格式**：确保目标 URL 正确，带有正确的协议（如 `https://`）。  
2. **请求头**：设置适当的 `Content-Type` 确保服务器正确解析请求体。  
3. **超时时间**：合理设置超时时间，防止请求长时间挂起。  
4. **HTTP 方法**：使用正确的 HTTP 方法，例如 `GET` 读取数据，`POST` 创建数据，`PUT` 替换数据，`PATCH` 更新数据，`DELETE` 删除数据。

## 全局模块

- math
- time
- json
- assert
