---
title: Series
sidebar_position: 2
---

## 属性

### name

Type string

Series 名称

### size

Type int

Series 大小

### dtype

Series 数据类型

## 方法

### rename

```py
s.rename("new_name")
```

### items

返回 items 迭代器

```py
s.items()
```

### to_list

```py
s.to_list()
```

### append

```py
s.append(value)
```

### ffill

```py
s.ffill(inplace=False)
```

### bfill

```py
s.bfill(inplace=False)
```

### fillna

```py
s.bfill(0, inplace=False)
```

### max

```py
s.max(skipna=False)
```

### min

```py
s.min(skipna=False)
```

### sum

```py
s.sum(skipna=False)
```

### std

```py
s.std(skipna=False, ddof=1)
```

### var

```py
s.var(skipna=False, ddof=1)
```

### mean

```py
s.mean()
```

### diff

```py
s.diff()
```

### cumprod

```py
s.cumprod()
```

### pct_change

```py
s.pct_change()
```

### map

```py
s.map()
```

### apply

```py
s.apply()
```

### filter

```py
s.filter()
```

### reduce

```py
s.reduce()
```

### rolling

```py
s.rolling()
```

### resample

```py
s.resample()
```

### sort_values

```py
s.sort_values()
```
