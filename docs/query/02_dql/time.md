---
title: Time 模块
sidebar_position: 200
---

`time` 模块提供了一些用于处理时间的函数。这是一个全局模块，可以直接在 DQL 中使用。

## 属性

### `time.altzone: int`

返回格林威治西部的夏令时地区的偏移秒数。如果该地区在格林威治东部会返回负值（如西欧，包括英国）。对夏令时启用地区才能使用。

### `time.timezone: int`

当地（非夏令时）时区的偏移量，以 UTC 以西的秒为单位（西欧大部分地区为负数，美国为正数，英国为零）。

### `time.tzname: tuple[str, str]`

属性 time.tzname 包含一对根据情况的不同而不同的字符串，分别是带夏令时的本地时区名称，和不带的。

## 方法

### `time.asctime(t: Time = ..., /) -> str`

接受时间对象并返回一个可读的形式为"Tue Dec 11 18:07:14 2008"（2008 年 12 月 11 日 周二 18 时 07 分 14 秒）的 24 个字符的字符串。

### `def ctime(seconds: float | None = None, /) -> str`

作用相当于 `asctime(localtime(secs))`，未给参数相当于 `asctime()`

### `def gmtime(seconds: float | None = None, /) -> Time`

接收时间戳（1970 纪元后经过的浮点秒数）并返回格林威治天文时间下的时间 t。

### `def localtime(seconds: float | None = None, /) -> Time`

接收时间戳（1970 纪元后经过的浮点秒数）并返回当地时间下的时间 t。

### `def mktime(t: Time, /) -> float`

接受时间元组并返回时间戳（1970 纪元后经过的浮点秒数）。

### `def strftime(format: str, t: Time = ..., /) -> str`

接收以时间元组，并返回以可读字符串表示的当地时间，格式由 fmt 决定。

### `def strptime(data_string: str, format: str = "%a %b %d %H:%M:%S %Y", /) -> Time`

根据 fmt 的格式把一个时间字符串解析为时间对象。

### `def time() -> float`

返回当前时间的时间戳（1970 纪元后经过的浮点秒数）。
