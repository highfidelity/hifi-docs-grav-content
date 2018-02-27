---
title: 'Vec3'
taxonomy:
    category:
        - docs
---

| Properties      | Type   | Description |
| --------------- | ------ | ----------- |
|`Vec3.FLOAT_MAX`|number||
|`Vec3.FLOAT_MIN`|number||
|`Vec3.FRONT`|number||
|`Vec3.HALF`|number||
|`Vec3.ONE`|number||
|`Vec3.RIGHT`|number||
|`Vec3.TWO`|number||
|`Vec3.UNIT_NEG_X`|number||
|`Vec3.UNIT_NEG_Y`|number||
|`Vec3.UNIT_NEG_Z`|number||
|`Vec3.UNIT_X`|number||
|`Vec3.UNIT_XY`|number||
|`Vec3.UNIT_XYZ`|number||
|`Vec3.UNIT_XZ`|number||
|`Vec3.UNIT_Y`|number||
|`Vec3.UNIT_YZ`|number||
|`Vec3.UNIT_Z`|number||
|`Vec3.UP`|number||
|`Vec3.ZERO`|number||


| Methods                                  |
| ---------------------------------------- |
|[`Vec3.cross(glm::vec3,glm::vec3)`](#m1)|
|[`Vec3.distance(glm::vec3,glm::vec3)`](#m2)|
|[`Vec3.dot(glm::vec3,glm::vec3)`](#m3)|
|[`Vec3.equal(glm::vec3,glm::vec3)`](#m4)|
|[`Vec3.fromPolar(float,float)`](#m5)|
|[`Vec3.fromPolar(glm::vec3)`](#m5)|
|`Vec3.getAngle(glm::vec3,glm::vec3)`|
|[`Vec3.length(glm::vec3)`](#m6)|
|[`Vec3.mix(glm::vec3,glm::vec3,float)`](#m7)|
|[`Vec3.multiply(float,glm::vec3)`](#m8)|
|[`Vec3.multiply(glm::vec3,float)`](#m8)|
|[`Vec3.multiplyQbyV(glm::quat,glm::vec3)`](#m9)|
|[`Vec3.multiplyVbyV(glm::vec3,glm::vec3)`](#m10)|
|[`Vec3.normalize(glm::vec3)`](#m11)|
|[`Vec3.orientedAngle(glm::vec3,glm::vec3,glm::vec3)`](#m12)|
|[`Vec3.print(String,glm::vec3)`](#m13)|
|[`Vec3.reflect(glm::vec3,glm::vec3)`](#m14)|
|[`Vec3.subtract(glm::vec3,glm::vec3)`](#m15)|
|[`Vec3.sum(glm::vec3,glm::vec3)`](#m16)|
|[`Vec3.toPolar(glm::vec3)`](#m17)|
|[`Vec3.withinEpsilon(glm::vec3,glm::vec3,float)`](#m18)|


The Vec3 API provides a set of methods to manipulate 3-dimensional vectors as well as some useful constants.

High Fidelity uses a right-handed Cartesian coordinate system similar to the one used by OpenGL:

![](opengl-coord-system.jpg)

In this frame of reference, the Y axis represents the UP direction and the -Z axis represent the FRONT direction. Constants follow below:

```
UNIT_X = { x: 1, y: 0, z: 0 }
Unit vector along the X axis
UNIT_Y = { x: 0, y: 1, z: 0 }
Unit vector along the Y axis
UNIT_Z = { x: 0, y: 0, z: 1 }
Unit vector along the Z axis

UNIT_NEG_X = { x: -1, y: 0, z: 0 }
Unit vector along the -X axis
UNIT_NEG_Y = { x: 0, y: -1, z: 0 }
Unit vector along the -Y axis
UNIT_NEG_Z = { x: 0, y: 0, z: -1 }
Unit vector along the -Z axis

RIGHT = UNIT_X
Unit vector going right
UP = UNIT_Y
Unit vector going up
FRONT = UNIT_NEG_Z
Unit vector going forward

UNIT_XY = Vec3.normalize(Vec3.sum(UNIT_X, UNIT_Y))
Unit vector collinear with UNIT_X + UNIT_Y
UNIT_XZ = Vec3.normalize(Vec3.sum(UNIT_X, UNIT_Z))
Unit vector collinear with UNIT_X + UNIT_Z
UNIT_YZ = Vec3.normalize(Vec3.sum(UNIT_Y, UNIT_Z))
Unit vector collinear with UNIT_Y + UNIT_Z
UNIT_XYZ = Vec3.normalize(Vec3.sum(UNIT_X, Vec3.sum(UNIT_Y, UNIT_Z)))
Unit vector collinear with UNIT_X + UNIT_Y + UNIT_Z

FLOAT_MAX = { x: MAX, y: MAX, z: MAX }
Vector with all values at the maximum single precision floating point value supported by the platform
FLOAT_MIN = { x: MIN, y: MIN, z: MIN }
Vector with all values at the minimum single precision floating point value supported by the platform

ZERO = { x: 0, y: 0, z: 0 }
Vector with all values at 0
ONE = { x: 1, y: 1, z: 1 }
Vector with all values at 1
TWO = { x: 2, y: 2, z: 2 }
Vector with all values at 2
HALF = { x: 0.5, y: 0.5, z: 0.5 }
Vector with all values at 0.5
```




## Vec3.cross()<a id="m1"></a>

Compute the vector cross product.

### Function

`cross (a, b)`

### Arguments

`a`: [vec3](https://wiki.highfidelity.com/wiki/Vec3_API): first vector

`b`: [vec3](https://wiki.highfidelity.com/wiki/Vec3_API): second vector

### Returns

`c`: [vec3](https://wiki.highfidelity.com/wiki/Vec3_API): vector cross product of vectors `a` and `b`

### Examples

```
var c = Vec3.cross(a, b);
```



## Vec3.distance()<a id="m2"></a>

Compute the distance between two points.

### Function

`distance(a, b)`

### Arguments

**a: Vec3**: the first point

**b: Vec3**: the second point

### Returns

The distance between points `a` and `b`.

### Examples

```
var d = Vec3.distance(a, b);
```


## Vec3.dot()<a id="m3"></a>

Compute the scalar dot product of two vectors.

### Function

`dot(a, b)`

### Arguments

`a`: [vec3](https://wiki.highfidelity.com/wiki/Vec3_API): first vector

`b`: [vec3](https://wiki.highfidelity.com/wiki/Vec3_API): second vector

### Returns

`d`: float: scalar dot product of vectors `a` and `b`

### Examples

```
var d = Vec3.dot(a, b);
```


## Vec3.equal()<a id="m4"></a>

Compare two vectors for exact equality.

Note: this method is of dubious usefulness since it only returns `true` for exactly equal vectors, not when nearly equal. A more useful way to compare two vectors is to measure the length of their difference, or use `Vec3.withinEpsilon()`.

### Function

`equal(a, b)`

### Arguments

**a: Vec3**: first vector

**b: Vec3**: second vector

### Returns

**b: Bool**: `true` if vectors `a` and `b` are exactly equal.

### Examples

```
var same = Vec3.equal(a, b);
```


## Vec3.fromPolar()<a id="m5"></a>

Convert from spherical (elevation, azimuth, radius) coordinates to Cartesian (x, y, z).

### Function

`Vec3.fromPolar(s)`

`Vec3.fromPolar(elevation, azimuth)`

### Arguments

One argument:

**s: Vec3**: the vector in spherical coordinates (elevation, azimuth, radius)

Two arguments (radius is assumed to be 1.0):

**elevation: float**: angle from reference plane, positive toward vertical (yAxis)

**azimuth: float**: angle about yAxis, starting at zAxis and going counter clockwise (as per righ-hand-rule).

### Returns

One argument:

**v: Vec3**: the vector in Cartesian coordinates (x, y, z)

Two arguments:

**v: Vec3**: normalized vector in Cartesian coordinates (x, y, z)

### Examples

```
var cartesian = Vec3.fromPolar(spherical);

// or...

var cartesian = Vec3.fromPolar(elevation, azimuth);
```


## Vec3.length()<a id="m6"></a>

Compute the length of a vector.

### Function

`length(v)`

### Arguments

**v: Vec3**: the vector

### Returns

The length of the vector.

### Examples

```
var length = Vec3.length(a);
```



## Vec3.mix()<a id="m7"></a>

Compute the linear interpolation between two vectors.

### Function

`mix(a, b, factor)`

### Arguments

**a: Vec3**: the starting vector

**b: Vec3**: the ending vector

**factor: float**: the mix factor in the range [0, 1]

### Returns

**c: Vec3**: the linear combination between `a` and `b`: `c = (1-factor) * a + factor * b`

### Examples

```
var c = Vec3.mix(a, b, 0.75); // three quarters to b from a
```


## Vec3.multiply()<a id="m8"></a>

Scalar multiplication of a vector.

### Function

`multiply(f, v)`

`multiply(v, f)`

### Arguments

**f: float**: scalar multiple

**v: Vec3**: vector

Note: the order of the two arguments does not matter.

### Returns

**v2: Vec3**: scaled vector

### Examples

```
var scaledV = Vec3.multiply(f, v);
```



## Vec3.multiplyQbyV()<a id="m9"></a>

Rotate a vector.

### Function

`multiplyQbyV(q, v)`

### Arguments

**q: Quat**: the rotation

**v: Vec3**: the vector to be rotated

### Returns

**v2: Vec3**: rotated vector

### Examples

```
var rotatedVector = Vec3.multiplyQbyV(rotation, vector);
```


## Vec3.multiplyVbyV()<a id="m10"></a>

Component-wise multiplication of two vectors.

### Function

`multiplyVbyV(a, b)`

### Arguments

**a: Vec3**: first vector

**b: Vec3**: second vector

### Returns

**ab: Vec3**: component-wise product `{x: a.x * b.x, y: a.y * b.y, z: a.z * b.z}`

### Examples

```
var ab = Vec3.multiplyVbyV(a, b);
```


## Vec3.normalize()<a id="m11"></a>

Compute the normalized vector.

### Function

`normalize(v)`

### Arguments

**v: Vec3**: the vector

### Returns

**n: Vec3**: The normalized vector.

### Examples

```
var n = Vec3.normalize(v);
```


## Vec3.orientedAngle()<a id="m12"></a>

Compute the oriented angle (about a normalized reference axis) between two normalized vectors.

### Function

`Vec3.orientedAngle(a, b, r)`

### Arguments

**a: Vec3**: the first normalized vector

**b: Vec3**: the second normalized vector

**r: Vec3**: the normalized reference axis

### Returns

**angle: float**: the shortest angle between the two normalized directions if one were rotated about the reference axis to get to the other.

### Examples

```
var angle = Vec3.orientedAngle(a, b, r);
```



## Vec3.print()<a id="m13"></a>

Print a message and the components of a vector.

### Function

`print(message, v)`

### Arguments

**message: String**: the message to print before the vector components

**v: Vec3**: the vector

### Returns

No return value.

### Examples

```
var v = {x: 1, y: 2, z: 3};
Vec3.print("v =", v);

```

Should print:

`v = 1 , 2 , 3`



## Vec3.reflect()<a id="m14"></a>

Compute the reflected vector from a plane with a given normal.

### Function

`Vec3.reflect(v, n)`

### Arguments

`v`: [vec3](https://wiki.highfidelity.com/wiki/Vec3_API): incident vector to be reflected

`n`: [vec3](https://wiki.highfidelity.com/wiki/Vec3_API): normal of mirror plane

### Returns

`r`: [vec3](https://wiki.highfidelity.com/wiki/Vec3_API): reflection of incident vector `r = v - 2.0 * dot(v, n) * n`

### Examples

```
var reflectedVector = Vec3.reflect(vector, normal);
```



## Vec3.subtract()<a id="m15"></a>

Subtract one vector from another.

### Function

`subtract(a, b)`

### Arguments

**a: Vec3**: first vector

**b: Vec3**: second vector

### Returns

**c: Vec3**: difference between vectors `c = a - b`

### Examples

```
var c = Vec3.subtract(a, b); // c = a - b
```



## Vec3.sum()<a id="m16"></a>

Add two vectors.

### Function

`sum(a, b)`

### Arguments

**a: Vec3**: first vector

**b: Vec3**: second vector

### Returns

**c: Vec3**: sum of vectors `c = a + b`

### Examples

```
var c = Vec3.sum(a, b); // c = a + b
```


## Vec3.toPolar()<a id="m17"></a>

Convert from Cartesian (x, y, z) coordinates into spherical (elevation, azimuth, radius).

### Function

`Vec3.toPolar(v)`

### Arguments

**v: Vec3**: the vector in Cartesian coordinates (x, y, z)

### Returns

**s: Vec3**: the vector in spherical coordinates (elevation, azimuth, radius)

### Examples

```
var spherical = Vec3.toPolar(cartesian);
```


## Vec3.withinEpsilon()<a id="m18"></a>

Check to see if two vectors are closer to each other than some threshold.

### Function

`withinEpsilon(a, b, epsilon)`

### Arguments

**a: Vec3**: first vector

**b: Vec3**: second vector

**epsilon: float**: the minimum error threshold

### Returns

**b: Bool**: `true` if vectors `a` and `b` closer together than `epsilon`

### Examples

```
var epsilon = 1.0e-3; // one millimeter
var closeEnough = Vec3.withinEpsilon(a, b, epsilon);
```