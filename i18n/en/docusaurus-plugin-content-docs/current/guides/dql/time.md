# Time Module

The `time` module provides functions for handling time. This is a global module that can be used directly in DQL.

## Properties

### `time.altzone`

**Type**: `int`

Returns the offset in seconds of the local DST timezone, west of Greenwich. Returns negative if the region is east of Greenwich (e.g., Western Europe, including the UK). Only valid for regions where DST is enabled.

```py
time.altzone  # Example
# Example output: -3600 (indicates offset of -1 hour)
```

### `time.timezone`

**Type**: `int`

Returns the offset in seconds of the local (non-DST) timezone, west of UTC (negative for most of Western Europe, positive for the US, zero for the UK).

```py
time.timezone  # Example
# Example output: -3600 (indicates offset of -1 hour)
```

### `time.tzname`

**Type**: `tuple[str, str]`

A pair of strings representing the local timezone names with and without DST respectively.

```py
time.tzname  # Example
# Example output: ('CST', 'CDT')  # CST: Standard Time, CDT: Daylight Time
```

## Time Class

The **`Time` class** provides a structured time object with read-only attributes to access specific time information.

### Attribute Descriptions

- **`tm_year`**: Current year, e.g., 2024.
- **`tm_mon`**: Current month (1-12).
- **`tm_mday`**: Current day of month (1-31).
- **`tm_hour`**: Hour (0-23).
- **`tm_min`**: Minute (0-59).
- **`tm_sec`**: Seconds (0-61, supports leap seconds).
- **`tm_wday`**: Day of week (0-6, 0 = Monday).
- **`tm_yday`**: Day of year (1-366).
- **`tm_isdst`**: Whether DST is in effect (1 = yes, 0 = no, -1 = unknown).

### Usage Example

Use with objects returned by `time.localtime()` or `time.gmtime()` to access these attributes:

```py
t = time.localtime()  # Returns current local time as time.struct_time object
print(t.tm_year)  # Prints current year
print(t.tm_mon)   # Prints current month
print(t.tm_mday)  # Prints current day
print(t.tm_hour)  # Prints current hour
print(t.tm_min)   # Prints current minute
print(t.tm_sec)   # Prints current second
print(t.tm_wday)  # Prints day of week
print(t.tm_yday)  # Prints day of year
print(t.tm_isdst) # Prints whether DST is in effect
```

## Methods

### `time.asctime`

**Parameters**: `t: time.struct_time` (optional)  
**Returns**: `str`

Returns a readable time string in the format `"Tue Dec 11 18:07:14 2008"`.

```py
t = time.localtime()  # Get current local time
print(time.asctime(t))  # Example
# Example output: 'Tue Dec 11 18:07:14 2008'
```

### `time.ctime`

**Parameters**: `seconds: float | None` (optional)  
**Returns**: `str`

Equivalent to `asctime(localtime(secs))`. When no argument is passed, equivalent to `asctime()`.

```py
print(time.ctime(1693205707.00))  # Pass timestamp
# Example output: 'Wed Aug 28 14:35:07 2024'

print(time.ctime())  # No argument, prints current time
# Example output: 'Mon Aug 28 12:00:00 2024'
```

### `time.gmtime`

**Parameters**: `seconds: float | None` (optional)  
**Returns**: `time.struct_time`

Accepts a timestamp and returns the time object in Greenwich Mean Time (UTC).

```py
t = time.gmtime(1693205707.00)  # Pass timestamp
print(t)
# Example output: time.struct_time(tm_year=2024, tm_mon=8, tm_mday=28, ...)
```

### `time.localtime`

**Parameters**: `seconds: float | None` (optional)  
**Returns**: `time.struct_time`

Accepts a timestamp and returns the local time object.

```py
t = time.localtime(1693205707.00)  # Pass timestamp
print(t)
# Example output: time.struct_time(tm_year=2024, tm_mon=8, tm_mday=28, ...)
```

### `time.mktime`

**Parameters**: `t: time.struct_time`  
**Returns**: `float`

Accepts a time object and returns the timestamp.

```py
t = time.localtime()  # Get local time object
timestamp = time.mktime(t)  # Convert to timestamp
print(timestamp)
# Example output: 1693205707.0
```

### `time.strftime`

**Parameters**:

- `format: str`
- `t: time.struct_time` (optional, defaults to current local time)  
  **Returns**: `str`

Accepts a time object and returns a formatted time string.

```py
formatted_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
print(formatted_time)
# Example output: '2024-08-28 14:35:07'
```

### `time.strptime`

**Parameters**:

- `data_string: str`
- `format: str = "%a %b %d %H:%M:%S %Y"`  
  **Returns**: `time.struct_time`

Parses a time string into a time object according to the specified format.

```py
t = time.strptime("2024-08-28 14:35:07", "%Y-%m-%d %H:%M:%S")
print(t)
# Example output: time.struct_time(tm_year=2024, tm_mon=8, tm_mday=28, ...)
```

### `time.time`

**Parameters**: none  
**Returns**: `float`

Returns the current time as a timestamp.

```py
timestamp = time.time()
print(timestamp)
# Example output: 1693205707.0
```
