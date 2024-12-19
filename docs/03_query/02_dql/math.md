---
title: Math 模块
sidebar_position: 100
---

`math` 模块提供了数学相关的函数。这是一个全局模块，可以直接在 DQL 中使用。

```python
a = 3.1415
b = math.floor(a)
print(b) # 3
```

## 方法

### `ceil(x): int`

返回大于或等于 $x$ 的最小整数。

```python
a = 3.14
b = math.ceil(a)
print(b)  # 输出: 4
```



### `copysign(x, y)`

返回一个具有 $x$ 的大小和 $y$ 的符号的值。

```python
x = 5.0
y = -3.0
result = math.copysign(x, y)
print(result)  # 输出: -5.0
```



### `fabs(x)`

以浮点形式返回 x 的绝对值。

```python
a = -7.5
b = math.fabs(a)
print(b)  # 输出: 7.5
```



### `floor(x)`

返回 x 的下取整，即小于或等于 x 的最大整数。

```python
a = 3.14
b = math.floor(a)
print(b)  # 输出: 3
```



### `mod(x, y)`

返回 `x/y` 的浮点余数。结果的大小小于 y，符号与 x 一致。

```python
x = 10.5
y = 3
result = math.fmod(x, y)
print(result)  # 输出: 1.5
```



### `pow(x, y)`

返回 `x**y`，即 y 以 x 为底的指数。

```python
x = 2
y = 3
result = math.pow(x, y)
print(result)  # 输出: 8.0
```



### `remainder(x, y)`

返回 `x/y` 的 IEEE 754 浮点余数。

```python
x = 7
y = 2
result = math.remainder(x, y)
print(result)  # 输出: 1.0
```



### `round(x)`

返回最接近 x 的整数，四舍五入。

```python
a = 3.6
b = round(a)
print(b)  # 输出: 4
```



### `exp(x)`

返回 e 的 x 次方，其中 `e = 2.718281…` 是自然对数的底数。

```python
x = 2
result = math.exp(x)
print(result)  # 输出: 7.38905609893065
```



### `sqrt(x)`

返回 x 的平方根。

```python
x = 16
result = math.sqrt(x)
print(result)  # 输出: 4.0
```



### `acos(x)`

返回 x 的弧余弦值，单位为弧度。

```python
x = 0.5
result = math.acos(x)
print(result)  # 输出: 1.0471975511965979
```



### `asin(x)`

返回 x 的反正弦值，单位为弧度。

```python
x = 0.5
result = math.asin(x)
print(result)  # 输出: 0.5235987755982989
```



### `atan(x)`

返回 x 的反正切值，单位为弧度。

```python
x = 1
result = math.atan(x)
print(result)  # 输出: 0.7853981633974483
```



### `atan2(y, x)`

返回 $atan(y / x)$，单位为弧度。

```python
y = 1
x = 1
result = math.atan2(y, x)
print(result)  # 输出: 0.7853981633974483
```



### `cos(x)`

返回 x 的余弦值，单位为弧度。

```python
x = math.pi / 3
result = math.cos(x)
print(result)  # 输出: 0.5
```



### `hypot(x, y)`

返回欧几里得范数 $\sqrt{x*x + y*y}$。

```python
x = 3
y = 4
result = math.hypot(x, y)
print(result)  # 输出: 5.0
```



### `sin(x)`

返回 $x$ 的正弦值，单位为弧度。

```python
x = math.pi / 2
result = math.sin(x)
print(result)  # 输出: 1.0
```



### `tan(x)`

返回 $x$ 的正切值，单位为弧度。

```python
x = math.pi / 4
result = math.tan(x)
print(result)  # 输出: 0.9999999999999999 (近似 1)
```



### `degrees(x)`

将角度 $x$ 从弧度转换为度。

```python
x = math.pi
result = math.degrees(x)
print(result)  # 输出: 180.0
```



### `radians(x)`

将角度 $x$ 从度转换为弧度。

```python
x = 180
result = math.radians(x)
print(result)  # 输出: 3.141592653589793
```



### `acosh(x)`

返回 $x$ 的反双曲余弦值。

```python
x = 10
result = math.acosh(x)
print(result)  # 输出: 2.993222846126381
```



### `asinh(x)`

返回 $x$ 的反双曲正弦值。

```python
x = 10
result = math.asinh(x)
print(result)  # 输出: 2.99822295029797
```



### `atanh(x)`

返回 $x$ 的反双曲正切值。

```python
x = 0.5
result = math.atanh(x)
print(result)  # 输出: 0.5493061443340548
```



### `cosh(x)`

返回 $x$ 的双曲余弦值。

```python
x = 2
result = math.cosh(x)
print(result)  # 输出: 3.7621956910836314
```



### `sinh(x)`

返回 $x$ 的双曲正弦值。

```python
x = 2
result = math.sinh(x)
print(result)  # 输出: 3.626860407847019
```



### `tanh(x)`

返回 $x$ 的双曲正切值。

```python
x = 2
result = math.tanh(x)
print(result)  # 输出: 0.9640275800758169
```



### `log(x, base)`

以给定基数返回 $x$ 的对数，默认为自然对数。

```python
x = 8
base = 2
result = math.log(x, base)
print(result)  # 输出: 3.0
```



### `gamma(x)`

返回 $x$ 的伽马函数。

```python
x = 5
result = math.gamma(x)
print(result)  # 输出: 24.0
```
