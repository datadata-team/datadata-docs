---
title: Json 模块
sidebar_position: 300
---

```py
data = {
  "name": "John",
}

# 序列化字典
json.dumps(data)

# 序列化并美化缩紧
json.dumps(data, indent=4)

# 解析 JSON 字符串
json.loads('{"name": "John"}')
```

## `json.dumps(x, *, indent)`

用于将对象序列化（即转换）为 JSON 格式的字符串。

```py
data = {
    "name": "Alice",
    "age": 30,
    "languages": ["English", "French"]
}

# 使用缩进格式化 JSON 字符串
formatted_json = json.dumps(data, indent=4)
print(formatted_json)
```

```txt
{
  "age": 30,
  "languages": [
    "English",
    "French"
  ],
  "name": "Alice"
}
```

## `json.loads(x, default)`

用于将 JSON 格式的字符串解析为对应的数据结构（如字典、列表等），并在解析失败时返回一个默认值。

```py
json_string = '{"name": "Alice", "age": 30}'

# 正常解析 JSON 字符串
result = json.loads(json_string, default={"name": "Unknown", "age": 0})
print(result)  # 输出: {'name': 'Alice', 'age': 30}

# 当解析失败时返回默认值
invalid_json_string = '{"name": "Alice", "age": 30'  # 缺少关闭大括号

result = json.loads(invalid_json_string, default={"name": "Unknown", "age": 0})
print(result)  # 输出: {'name': 'Unknown', 'age': 0}
```

## `json.indent(str, *, prefix="", indent="\t")`

用于格式化 JSON 字符串，并在每行前添加一个前缀和指定的缩进方式。
这种方法可用于美化或调整 JSON 输出格式，使其更具可读性，特别是在需要对齐不同层级的数据时。

```py
input_json = '{"name": "Alice", "age": 30, "languages": ["English", "French"]}'

formatted_json = json.indent(input_json, prefix=">> ", indent="  ")
print(formatted_json)
```

输出：

```txt
{
>>   "name": "Alice",
>>   "age": 30,
>>   "languages": [
>>     "English",
>>     "French"
>>   ]
>> }
```
