---
title: Math Module
sidebar_position: 100
---

The `math` module provides mathematical functions. This is a global module that can be used directly in DQL.

```python
a = 3.1415
b = math.floor(a)
print(b) # 3
```

## Methods

### `ceil(x): int`

Returns the smallest integer greater than or equal to $x$.

```python
a = 3.14
b = math.ceil(a)
print(b)  # Output: 4
```

### `copysign(x, y)`

Returns a value with the magnitude of $x$ and the sign of $y$.

```python
x = 5.0
y = -3.0
result = math.copysign(x, y)
print(result)  # Output: -5.0
```

### `fabs(x)`

Returns the absolute value of x as a float.

```python
a = -7.5
b = math.fabs(a)
print(b)  # Output: 7.5
```

### `floor(x)`

Returns the floor of x, i.e., the largest integer less than or equal to x.

```python
a = 3.14
b = math.floor(a)
print(b)  # Output: 3
```

### `mod(x, y)`

Returns the floating-point remainder of `x/y`. The magnitude of the result is less than y, and its sign matches x.

```python
x = 10.5
y = 3
result = math.fmod(x, y)
print(result)  # Output: 1.5
```

### `pow(x, y)`

Returns `x**y`, i.e., y raised to the power of x.

```python
x = 2
y = 3
result = math.pow(x, y)
print(result)  # Output: 8.0
```

### `remainder(x, y)`

Returns the IEEE 754 floating-point remainder of `x/y`.

```python
x = 7
y = 2
result = math.remainder(x, y)
print(result)  # Output: 1.0
```

### `round(x)`

Returns the nearest integer to x, rounding half away from zero.

```python
a = 3.6
b = round(a)
print(b)  # Output: 4
```

### `exp(x)`

Returns e raised to the power of x, where `e = 2.718281…` is the base of natural logarithms.

```python
x = 2
result = math.exp(x)
print(result)  # Output: 7.38905609893065
```

### `sqrt(x)`

Returns the square root of x.

```python
x = 16
result = math.sqrt(x)
print(result)  # Output: 4.0
```

### `acos(x)`

Returns the arc cosine of x in radians.

```python
x = 0.5
result = math.acos(x)
print(result)  # Output: 1.0471975511965979
```

### `asin(x)`

Returns the arc sine of x in radians.

```python
x = 0.5
result = math.asin(x)
print(result)  # Output: 0.5235987755982989
```

### `atan(x)`

Returns the arc tangent of x in radians.

```python
x = 1
result = math.atan(x)
print(result)  # Output: 0.7853981633974483
```

### `atan2(y, x)`

Returns $atan(y / x)$ in radians.

```python
y = 1
x = 1
result = math.atan2(y, x)
print(result)  # Output: 0.7853981633974483
```

### `cos(x)`

Returns the cosine of x in radians.

```python
x = math.pi / 3
result = math.cos(x)
print(result)  # Output: 0.5
```

### `hypot(x, y)`

Returns the Euclidean norm $\sqrt{x*x + y*y}$.

```python
x = 3
y = 4
result = math.hypot(x, y)
print(result)  # Output: 5.0
```

### `sin(x)`

Returns the sine of $x$ in radians.

```python
x = math.pi / 2
result = math.sin(x)
print(result)  # Output: 1.0
```

### `tan(x)`

Returns the tangent of $x$ in radians.

```python
x = math.pi / 4
result = math.tan(x)
print(result)  # Output: 0.9999999999999999 (≈ 1)
```

### `degrees(x)`

Converts angle $x$ from radians to degrees.

```python
x = math.pi
result = math.degrees(x)
print(result)  # Output: 180.0
```

### `radians(x)`

Converts angle $x$ from degrees to radians.

```python
x = 180
result = math.radians(x)
print(result)  # Output: 3.141592653589793
```

### `acosh(x)`

Returns the inverse hyperbolic cosine of $x$.

```python
x = 10
result = math.acosh(x)
print(result)  # Output: 2.993222846126381
```

### `asinh(x)`

Returns the inverse hyperbolic sine of $x$.

```python
x = 10
result = math.asinh(x)
print(result)  # Output: 2.99822295029797
```

### `atanh(x)`

Returns the inverse hyperbolic tangent of $x$.

```python
x = 0.5
result = math.atanh(x)
print(result)  # Output: 0.5493061443340548
```

### `cosh(x)`

Returns the hyperbolic cosine of $x$.
