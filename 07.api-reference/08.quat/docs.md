---
title: 'Quat'
taxonomy:
    category:
        - docs
---

# Quat.angle()

Compute the angle of rotation.

## Function

`Quat.angle(q)`

## Arguments

**q: quat**: the rotation.

## Returns

**angle: float**: The angle of the rotation `q` in radians.

## Examples

```
var angle = Quat.angle(rotation);
```



# Quat.angleAxis()

Compute the quaternion that corresponds to a rotation of an `angle` (radians) about some normalized `axis`.



## Function

`Quat.angleAxis(angle, axis)`

## Arguments

**angle: float**: the angle of rotation (degrees).

**axis: vec3**: the normalized axis of rotation.

## Returns

**q: quat**: The rotation obtained when rotating by `angle` radians about normalized `axis`.

## Examples

```
var angle = 90; // quarter turn
var axis = { x: 1, y: 0, z: 0};
var rotation = Quat.angleAxis(angle, axis);
```