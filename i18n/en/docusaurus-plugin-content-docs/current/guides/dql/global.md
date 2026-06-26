---
title: Global Functions
sidebar_position: 1
---

## Global Functions

### `query`

Execute an SQL query.

```python
query(sql, *args)
```

| name | type    | description                      |
| ---- | ------- | -------------------------------- |
| sql  | string  | SQL string                       |
| args | ...args | SQL parameters for interpolation |

### `fetch`

The `fetch` function executes HTTP requests using different HTTP methods (such as `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, etc.) to access a specified URL. Users can pass request headers, body, and timeout, and receive the response status code, headers, and body.

```python
fetch(url: str, method=Literal["GET", "PUT", "POST", "HEAD", "DELETE"], headers: Dict[str, str]=None, body: Any=None, timeout: int=30)
```

### Parameters:

1. **`url` (str)**
   - The target URL of the request.
   - **Example**: `"https://api.example.com/data"`

2. **`method` (Literal["GET", "PUT", "POST", "HEAD", "DELETE", "PATCH"])**
   - HTTP method, defaults to `GET`.
   - Supported methods: `GET`, `POST`, `PUT`, `PATCH`, `HEAD`, and `DELETE`.

3. **`headers` (Dict[str, str], optional)**
   - HTTP request headers in dictionary format. Set to `None` if not needed.
   - **Example**: `{"Content-Type": "application/json", "Authorization": "Bearer token"}`

4. **`body` (Any, optional)**
   - HTTP request body, typically used with `POST`, `PUT`, and `PATCH` requests. Defaults to `None`.
   - **Example**:
     - JSON string: `{"name": "John", "age": 30}`
     - Plain text: `"Hello World"`

5. **`timeout` (int, optional)**
   - Request timeout in milliseconds, defaults to 30 (i.e., 30 seconds).

### Return Value:

Returns a dictionary containing:

- **`status` (int):** HTTP response status code, e.g., `200` for success, `404` for not found.
- **`headers` (dict):** HTTP response headers.
- **`body` (str | None):** HTTP response body content. `None` if no body.

### `Series`

Create a Series. A Series represents a single data column.

```python
Series([], dtype='string', name='string')
```

| name  | type   | description |
| ----- | ------ | ----------- |
| data  | list   | Data list   |
| dtype | string | Data type   |
| name  | string | Column name |

### `DataFrame` (alias `table`)

Create a DataFrame. A DataFrame represents a data table.

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

| name    | type       | description          |
| ------- | ---------- | -------------------- |
| data    | list\|dict | Data                 |
| columns | list       | Specify column names |

### `Timestamp`

Timestamp is used to represent time, date, timestamp, and similar types.

```python
Timestamp('11:12:13')
```

## Global Modules

- math
- time
- json
- assert
