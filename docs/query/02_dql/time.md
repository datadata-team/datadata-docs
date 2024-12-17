
# Time 模块

`time` 模块提供了一些用于处理时间的函数。这是一个全局模块，可以直接在 DQL 中使用。


## 属性

### `time.altzone`  
**类型**: `int`  

返回格林威治西部的夏令时地区的偏移秒数。如果该地区在格林威治东部会返回负值（如西欧，包括英国）。仅对夏令时启用地区有效。  

```py
time.altzone  # 示例
# 输出示例: -3600（表示偏移 -1 小时）
```



### `time.timezone`  
**类型**: `int`  

返回当地（非夏令时）时区的偏移量，以 UTC 以西的秒为单位（西欧大部分地区为负数，美国为正数，英国为零）。  

```py
time.timezone  # 示例
# 输出示例: -3600（表示偏移 -1 小时）
```



### `time.tzname`  
**类型**: `tuple[str, str]`  

包含一对字符串，分别表示带夏令时和不带夏令时的本地时区名称。  

```py
time.tzname  # 示例
# 输出示例: ('CST', 'CDT')  # CST: 标准时间, CDT: 夏令时
```



## 时间类

**`Time` 类** 提供了一个结构化的时间对象，定义了一些只读属性来访问具体的时间信息。


### 属性说明  
- **`tm_year`**: 当前的年份，例如 2024。  
- **`tm_mon`**: 当前的月份（1-12）。  
- **`tm_mday`**: 当前的日期（1-31）。  
- **`tm_hour`**: 小时（0-23）。  
- **`tm_min`**: 分钟（0-59）。  
- **`tm_sec`**: 秒数（0-61，支持闰秒）。  
- **`tm_wday`**: 星期几（0-6，0 表示周一）。  
- **`tm_yday`**: 一年中的第几天（1-366）。  
- **`tm_isdst`**: 是否处于夏令时（1 表示是，0 表示否，-1 表示未知）。  

### 使用示例  
结合 `time.localtime()` 或 `time.gmtime()` 返回的对象，访问这些属性：  

```py
t = time.localtime()  # 返回当前本地时间的 time.struct_time 对象
print(t.tm_year)  # 输出当前年份
print(t.tm_mon)   # 输出当前月份
print(t.tm_mday)  # 输出当前日期
print(t.tm_hour)  # 输出当前小时
print(t.tm_min)   # 输出当前分钟
print(t.tm_sec)   # 输出当前秒数
print(t.tm_wday)  # 输出星期几
print(t.tm_yday)  # 输出一年中的第几天
print(t.tm_isdst) # 输出是否处于夏令时
```



## 方法

### `time.asctime`  
**参数**: `t: time.struct_time`（可选）  
**返回值**: `str`  

返回一个可读的时间字符串，格式为 `"Tue Dec 11 18:07:14 2008"`。  

```py
t = time.localtime()  # 获取当前本地时间
print(time.asctime(t))  # 示例
# 输出示例: 'Tue Dec 11 18:07:14 2008'
```



### `time.ctime`  
**参数**: `seconds: float | None`（可选）  
**返回值**: `str`  

作用相当于 `asctime(localtime(secs))`，未传参时等同于 `asctime()`。  

```py
print(time.ctime(1693205707.00))  # 传入时间戳
# 输出示例: 'Wed Aug 28 14:35:07 2024'

print(time.ctime())  # 不传参，输出当前时间
# 输出示例: 'Mon Aug 28 12:00:00 2024'
```



### `time.gmtime`  
**参数**: `seconds: float | None`（可选）  
**返回值**: `time.struct_time`  

接收时间戳并返回格林威治标准时间（UTC）下的时间对象。  

```py
t = time.gmtime(1693205707.00)  # 输入时间戳
print(t)
# 输出示例: time.struct_time(tm_year=2024, tm_mon=8, tm_mday=28, ...)
```



### `time.localtime`  
**参数**: `seconds: float | None`（可选）  
**返回值**: `time.struct_time`  

接收时间戳并返回本地时间对象。  

```py
t = time.localtime(1693205707.00)  # 输入时间戳
print(t)
# 输出示例: time.struct_time(tm_year=2024, tm_mon=8, tm_mday=28, ...)
```



### `time.mktime`  
**参数**: `t: time.struct_time`  
**返回值**: `float`  

接受时间对象并返回时间戳。  

```py
t = time.localtime()  # 获取本地时间对象
timestamp = time.mktime(t)  # 转换为时间戳
print(timestamp)
# 输出示例: 1693205707.0
```



### `time.strftime`  
**参数**:  
- `format: str`  
- `t: time.struct_time`（可选，默认为当前本地时间）  
**返回值**: `str`  

接收时间对象并返回格式化后的时间字符串。  

```py
formatted_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
print(formatted_time)
# 输出示例: '2024-08-28 14:35:07'
```


### `time.strptime`  
**参数**:  
- `data_string: str`  
- `format: str = "%a %b %d %H:%M:%S %Y"`  
**返回值**: `time.struct_time`  

根据指定格式将时间字符串解析为时间对象。  

```py
t = time.strptime("2024-08-28 14:35:07", "%Y-%m-%d %H:%M:%S")
print(t)
# 输出示例: time.struct_time(tm_year=2024, tm_mon=8, tm_mday=28, ...)
```



### `time.time`  
**参数**: 无  
**返回值**: `float`  

返回当前时间的时间戳。  

```py
  timestamp = time.time()
  print(timestamp)
# 输出示例: 1693205707.0
```
