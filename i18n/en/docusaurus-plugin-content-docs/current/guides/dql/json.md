---
title: Json Module
sidebar_position: 300
---

```py
data = {
  "name": "John",
}

# Serialize a dict
json.dumps(data)

# Serialize with pretty-print indentation
json.dumps(data, indent=4)

# Parse a JSON string
json.loads('{"name": "John"}')
```

## Methods

### `json.dumps(x, *, indent)`

Used to serialize (convert) an object into a JSON-formatted string.

```py
data = {
    "name": "Alice",
    "age": 30,
    "languages": ["English", "French"]
}

# Format JSON string with indentation
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

### `json.loads(x, default)`

Used to parse a JSON-formatted string into a corresponding data structure (such as dict, list, etc.), and return a default value when parsing fails.

```py
json_string = '{"name": "Alice", "age": 30}'

# Normal JSON parsing
result = json.loads(json_string, default={"name": "Unknown", "age": 0})
print(result)  # Output: {'name': 'Alice', 'age': 30}

# Return default value when parsing fails
invalid_json_string = '{"name": "Alice", "age": 30'  # Missing closing brace

result = json.loads(invalid_json_string, default={"name": "Unknown", "age": 0})
print(result)  # Output: {'name': 'Unknown', 'age': 0}
```

### `json.indent(str, *, prefix="", indent="\t")`

Used to format a JSON string, adding a prefix before each line and using the specified indentation.
This method can be used to beautify or adjust JSON output format for better readability, especially when aligning data at different levels.

```py
input_json = '{"name": "Alice", "age": 30, "languages": ["English", "French"]}'

formatted_json = json.indent(input_json, prefix=">> ", indent="  ")
print(formatted_json)
```

Output:

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
