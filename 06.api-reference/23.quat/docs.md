---
title: 'Quaternion'
taxonomy:
    category:
        - docs
---



| Properties      | Type   | Description |
| --------------- | ------ | ----------- |
| Quat.objectName | string |             |

| Methods                                  |
| ---------------------------------------- |
| Quat.angle(glm::quat)                    |
| Quat.angleAxis(float,glm::vec3)          |
| Quat.axis(glm::quat)                     |
| Quat.conjugate(glm::quat)                |
| Quat.dot(glm::quat,glm::quat)            |
| Quat.equal(glm::quat,glm::quat)          |
| Quat.fromPitchYawRollDegrees(float,float,float) |
| Quat.fromPitchYawRollRadians(float,float,float) |
| Quat.fromVec3Degrees(glm::vec3)          |
| Quat.fromVec3Radians(glm::vec3)          |
| Quat.getForward(glm::quat)               |
| Quat.getFront(glm::quat)                 |
| Quat.getRight(glm::quat)                 |
| Quat.getUp(glm::quat)                    |
| Quat.inverse(glm::quat)                  |
| Quat.lookAt(glm::vec3,glm::vec3,glm::vec3) |
| Quat.lookAtSimple(glm::vec3,glm::vec3)   |
| Quat.mix(glm::quat,glm::quat,float)      |
| Quat.multiply(glm::quat,glm::quat)       |
| Quat.normalize(glm::quat)                |
| Quat.objectNameChanged(QString)          |
| Quat.print(QString,glm::quat)            |
| Quat.rotationBetween(glm::vec3,glm::vec3) |
| Quat.safeEulerAngles(glm::quat)          |
| Quat.slerp(glm::quat,glm::quat,float)    |
| Quat.squad(glm::quat,glm::quat,glm::quat,glm::quat,float) |

| Events                   |
| ------------------------ |
| Quat.destroyed()         |
| Quat.destroyed(QObject*) |



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