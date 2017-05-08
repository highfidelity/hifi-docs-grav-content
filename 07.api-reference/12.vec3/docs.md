---
title: 'Vec3'
taxonomy:
    category:
        - docs
---

The Vec3 API provides a set of methods to manipulate 3-dimensional vectors as well as some useful constants.

High Fidelity uses a right-handed Cartesian coordinate system similar to the one used by OpenGL:

[![Opengl-coordinate-system.jpg](https://wiki.highfidelity.com/images/0/03/Opengl-coordinate-system.jpg)](https://wiki.highfidelity.com/wiki/File:Opengl-coordinate-system.jpg)

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