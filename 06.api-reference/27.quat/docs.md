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
| [Quat.angle(glm::quat)](#m1)             |
| [Quat.angleAxis(float,glm::vec3)](#m2)   |
| [Quat.axis(glm::quat)](#m3)              |
| [Quat.conjugate(glm::quat)](#m4)         |
| [Quat.dot(glm::quat,glm::quat)](#m5)     |
| [Quat.equal(glm::quat,glm::quat)](#m6)   |
| [Quat.fromPitchYawRollDegrees(float,float,float)](#m7) |
| [Quat.fromPitchYawRollRadians(float,float,float)](#m8) |
| [Quat.fromVec3Degrees(glm::vec3)](#m9)   |
| [Quat.fromVec3Radians(glm::vec3)](#m10)  |
| [Quat.getForward(glm::quat)] (#m25)               |
| [Quat.getFront(glm::quat)](#m11)         |
| [Quat.getRight(glm::quat)](#m12)         |
| [Quat.getUp(glm::quat)](#m13)            |
| [Quat.inverse(glm::quat)](#m14)          |
| [Quat.lookAt(glm::vec3,glm::vec3,glm::vec3)](#m15) |
| [Quat.lookAtSimple(glm::vec3,glm::vec3)](#m16) |
| [Quat.mix(glm::quat,glm::quat,float)](#m17) |
| [Quat.multiply(glm::quat,glm::quat)](#m18) |
| [Quat.normalize(glm::quat)](#m19)        |
| Quat.objectNameChanged(QString)          |
| [Quat.print(QString,glm::quat)](#m20)    |
| [Quat.rotationBetween(glm::vec3,glm::vec3)](#m21) |
| [Quat.safeEulerAngles(glm::quat)](#m22)  |
| [Quat.slerp(glm::quat,glm::quat,float)](#m23) |
| [Quat.squad(glm::quat,glm::quat,glm::quat,glm::quat,float)](#m24) |



## Quat.angle()<a id="m1"></a>

Compute the angle of rotation.

### Function

`Quat.angle(q)`

### Arguments

**q: quat**: the rotation.

### Returns

**angle: float**: The angle of the rotation `q` in radians.

### Examples

```
var angle = Quat.angle(rotation);
```



## Quat.angleAxis()<a id="m2"></a>

Compute the quaternion that corresponds to a rotation of an `angle` (degrees) about some normalized `axis`.


### Function

`Quat.angleAxis(angle, axis)`

### Arguments

**angle: float**: the angle of rotation (degrees).

**axis: vec3**: the normalized axis of rotation.

### Returns

**q: quat**: The rotation obtained when rotating by `angle` radians about normalized `axis`.

### Examples

```
var angle = 90; // quarter turn
var axis = { x: 1, y: 0, z: 0};
var rotation = Quat.angleAxis(angle, axis);
```



## Quat.axis()<a id="m3"></a>

Compute the normalized axis of rotation.

### Function

`Quat.axis(q)`

### Arguments

**q: quat**: the rotation.

### Returns

**axis: vec3**: The normalized axis of the rotation `q`.

### Examples

```
var axis = Quat.axis(rotation);
```



## Quat.conjugate()<a id="m4"></a>

Compute the conjugate (inverse) quaternion.

### Function

`Quat.conjugate(q)`

### Arguments

**q: quat**: the rotation to conjugate.

### Returns

**conjugateQ: quat**: The conjugate (inverse) rotation corresponding to **q** such that **q \* conjugateQ = identity**.

### Examples

```
var inverseRotation = Quat.conjugate(rotation);
```



## Quat.dot()<a id="m5"></a>

Compute the dot product between two quaternions. This is a measure of how "close" two rotations are to each other.

Note: a zero dot product value means the rotations are completely orthogonal to each other. The closer they are to each other the more non-zero the value is (either positive or negative). Identical rotations will have a dot product of +/- 1.

### Function

`dot(q1, q2)`

### Arguments

**q1: quat**: the first quaternion.

**q2: quat**: the second quaternion.

### Returns

**d: float**: The inner product between two rotations.

### Examples

```
var d = Quat.dot(q1, q2);

if (Math.abs(d) > 0.999999) {
  // the rotations are close enough to be considered identical
}
```



## Quat.equal()<a id="m6"></a>

Compare equality of two quaternions.

Note: this method is of dubious usefulness since it only returns `true` for exactly equal quaternions, not for nearly equal rotations and sometimes not even for exactly equal rotations (because the negative quaternion corresponds to the exact same rotation). A more useful way to compare two rotations is to use `Quat.dot()`.

### Function

`Quat.equal(q1, q2)`

### Arguments

**q1: quat**: the first quaternion

**q2: quat**: the second quaternion

### Returns

**b: Bool**: `true` if the quaternions are exactly equal.

### Examples

```
var same = Quat.equals(q1, q2);

```

Should print:

`rotation = 0 , 0.707107 , 0 , 0.707107`



## Quat.fromPitchYawRollDegrees()<a id="m7"></a>

Compute a rotation using three angles: pitch, yaw, roll.

### Function

`Quat.fromPitchYawRollDegrees(pitch, yaw, roll)`

### Arguments

**pitch: float**: angle of rotation about local xAxis (left) followed by...

**yaw: float**: angle of rotation about local yAxis (up) followed by...

**roll: float**: angle of rotation about local zAxis (forward).

Note: the units of angle are **degrees**.

### Returns

**q: quat**: The rotation produced by rotating successively by **pitch** (about local xAxis), **yaw** (about subsequent local yAxis), and **roll** (about subsequent local zAxis).

### Examples

```
var rotation = Quat.fromPitchYawRollDegrees(pitch, yaw, roll);
```



## Quat.fromPitchYawRollRadians()<a id="m8"></a>

Compute a rotation using three angles: pitch, yaw, roll.

### Function

`Quat.fromPitchYawRollRadians(pitch, yaw, roll)`

### Arguments

**pitch: float**: angle of rotation about local xAxis (left) followed by...

**yaw: float**: angle of rotation about local yAxis (up) followed by...

**roll: float**: angle of rotation about local zAxis (forward).

Note: the units of angle are **radians**.

### Returns

**q: quat**: The rotation produced by rotating successively by **pitch** (about local xAxis), **yaw** (about subsequent local yAxis), and **roll** (about subsequent local zAxis).

### Examples

```
var rotation = Quat.fromPitchYawRollDegrees(pitch, yaw, roll);
```



## Quat.fromVec3Degrees()<a id="m9"></a>

Compute a rotation using three angles (pitch, yaw, roll) packed into a single **Vec3** argument.

### Function

`Quat.fromVec3Degrees(angles)`

### Arguments

**angles: vec3**: three angles (x: pitch, y: yaw, z: roll) stored in the components of a [vec3](https://wiki.highfidelity.com/wiki/Vec3_API).

Note: the angles units are in **degrees**.

### Returns

**q: quat**: The rotation produced by rotating successively by **pitch** (about local xAxis), **yaw** (about subsequent local yAxis), and **roll** (about subsequent local zAxis).

### Examples

```
var angles = {x: pitch, y: yaw, z: roll};
var rotation = Quat.fromVec3Degrees(angles);
```



## Quat.fromVec3Radians()<a id="m10"></a>

Compute a rotation using three angles (pitch, yaw, roll) packed into a single **Vec3** argument.

### Function

`Quat.fromVec3Radians()`

### Arguments

**angles: vec3**: three angles (x: pitch, y: yaw, z: roll) stored in the components of a [vec3](https://wiki.highfidelity.com/wiki/Vec3_API).

Note: the units of angle are **radians**.

### Returns

**q: quat**: The rotation produced by rotating successively by **pitch** (about local xAxis), **yaw** (about subsequent local yAxis), and **roll** (about subsequent local zAxis).

### Examples

```
\\var angles = {x: pitch, y: yaw, z: roll};
var rotation = Quat.fromVec3Radians(angles);
```

## Quat.getForward()<a id="m25"></a>

Compute the rotated forward direction (zAxis).

### Function

`Quat.getForward(q)`

### Arguments

**q: quat**: the rotation.

### Returns

**forward: vec3**: The local forward direction (zAxis) after being rotated.

### Examples

```
var forward = Quat.getForward(rotation);
```


## Quat.getFront()<a id="m11"></a>

Compute the rotated forward direction (zAxis). This method calls Quat.getForward(). 

### Function

`Quat.getFront(q)`

### Arguments

**q: quat**: the rotation.

### Returns

**forward: vec3**: The local forward direction (zAxis) after being rotated.

### Examples

```
var forward = Quat.getFront(rotation);
```



## Quat.getRight()<a id="m12"></a>

Compute the rotated right direction (negative xAxis).

### Function

`Quat.getRight(q)`

### Arguments

**q: quat**: the rotation.

### Returns

**right: vec3**: The local right direction (negative xAxis) after being rotated.

### Examples

```
var right = Quat.getRight(rotation);
```



## Quat.getUp()<a id="m13"></a>

Compute the rotated up direction (yAxis).

### Function

`Quat.getUp(q)`

### Arguments

**q: quat**: the rotation.

### Returns

**up: vec3**: The local up direction (yAxis) after being rotated.

### Examples

```
var up = Quat.getUp(rotation);
```



## Quat.inverse()<a id="m14"></a>

Compute the inverse (conjugate) quaternion.

### Function

`Quat.inverse(q)`

### Arguments

**q: quat**: the rotation to invert.

### Returns

**inverseQ: quat**: The inverse (conjugate) rotation corresponding to **q** such that **q \* inverseQ = identity**.

### Examples

```
var inverseRotation = Quat.inverse(rotation);
```



## Quat.lookAt()<a id="m15"></a>

Compute the rotation that will orient a camera at a known location to look straight at another point.

*Note: the camera's local forward direction is assumed to be the zAxis, and its local up direction is the yAxis. The orientation will be computed such that there is zero roll about its forward direction.*

### Function

`lookAt(eye, center, up)`

### Arguments

**eye: vec3**: the location of the camera

**center: vec3**: the point where the camera is looking

**up: vec3**: the vertical direction

### Returns

**q: quat**: The rotation of the camera.

### Examples

If we know where we are, the location of the thing we're looking at, and the world's up direction then `lookAt()` will compute our orientation for us.

```
// suppose we have a laser turret that we want to point at a
// known target location
var eye = laser.position;
var center = target.position;
var up = zAxis; // world-frame's up

// Quat.lookAt() will compute the orientation we want
var orientation = Quat.lookAt(eye, center, up);
```



## Quat.lookAtSimple()<a id="m16"></a>

Compute the rotation that will orient a camera at a known location to look straight at another point, assuming that the world'd up direction is the yAxis.

Note: the camera's local forward direction is assumed to be its zAxis, and its local up direction is its yAxis. The orientation will be computed such that there is zero roll about its forward direction.

### Function

`Quat.lookAt(eye, center, up)`

### Arguments

**eye: vec3**: the location of the camera

**center: vec3**: the point where the camera is looking

### Returns

**q: quat**: The rotation of the camera.

### Examples

If we know where we are and the location of the thing we're looking at then `lookAtSimple()` will compute our orientation for us.

```
// suppose we have a laser turret that we want to point at a
// known target location
var eye = laser.position;
var center = target.position;

// Quat.lookAtSimple() will compute the orientation we want:
var orientation = Quat.lookAtSimple(eye, center);
```



## Quat.mix()<a id="m17"></a>

Compute the interpolation (slerp) between two rotations. Uses spherical linear interpolation (slerp) if the rotations are far enough apart, otherwise uses linear interpolation (lerp).

### Function

`Quat.mix(q1, q2, factor)`

### Arguments

**q1: quat**: the beginning rotation.

**q2: quat**: the ending rotation.

**factor: float**: the mixture coefficient in the range [0, 1]

### Returns

**q3: quat**: The spherically interpolated rotation between beginning and ending rotations, unless the two rotations are very close to each other in which case it uses linear interpolation (lerp). A `factor` value of 0 gives `q1` and a value of 1 gives `q2`.

### Examples

This example shows how to use `Quat.mix()` to animate a rotation between one rotation and another.

```
// to animate between one rotation and another:
var dt = amountOfTimeThatHasPassed;
var mixFactor = amountOfTimeThatHasPassed / TIME_TO_COMPLETE;
if (mixFactor) > 1) {
  mixFactor = 1;
}
var newRotation = Quat.mix(startRotation, endRotation, mixFactor);
```



## Quat.multiply()<a id="m18"></a>

Multiply two rotations together to get their unnormalized product.

### Function

`Quat.multiply(q2, q1)`

### Arguments

**q2: quat**: second rotation from the left

**q1: quat**: first rotation from the left

### Returns

**q3: quat**: The unnormalized product of the two rotations `q2 * q1`

### Examples

Two rotations can be combined by multiplying them together.

```
// create two quarter turn rotations about distinct axes
// then multiply them together to get a third rotation
// equivalent to applying first one and then the other
var angle = 0.5 * Math.PI; // radians equivalent to 90 degrees
var xAxis = { x: 1, y: 0, z: 0 };
var yAxis = { x: 0, y: 1, z: 0 };

// first rotation is a positive right-angle turn about xAxis
var turnAboutX = Quat::angleAxis(angle, xAxis);

// second rotation is a positive right-angle turn about yAxis
var turnAboutY = Quat::angleAxis(angle, yAxis);

var firstAboutXThenY = Quat.multiply(turnAboutY, turnAboutX);
```



## Quat.normalize()<a id="m19"></a>

Compute the normalized quaternion.

### Function

`Quat.normalize(q)`

### Arguments

**q: quat**: the quaternion to normalize

### Returns

**normalizedQuat: quat**: The quaternion **q** normalized such that its length is equal to 1.

### Examples

This example shows a loop that increments a rotation around one full turn. Since the rotation is used to compute its next value each iteration it must be normalized, otherwise numerical error may be compounded.

```
var rotation = {x: 0, y: 0, z: 0, w: 1}; // identity rotation

// increment rotation one full turn
var numLoops = 100;
var smallAngle = 2 * Math.pi / numLoops;
var axis = {x: 1, y: 2, z: 3};
var smallRotation = Quat.angleAxis(smallAngle, axis);
for (var i = 0; i < numLoops; ++i) {
  rotation = Quat.multiply(smallRotation, rotation);
  rotation = Quat.normalize(rotation);
}

// we expect some numerical error after one full turn
// but it should be small when rotation is re-normalized
var testVector = {x: 2, y: -3, z: -1};
var rotatedVector = Vec3.multiplyQbyV(rotation, testVector);
var error = Vec3.sub(testVector, rotatedVector);

Vec3.print(error, \"error = \");
```



## Quat.print()<a id="m20"></a>

Print the component values of a quaternion.

### Function

`Quat.print(message, q)`

### Arguments

**message: String**: preceding message string.

**q: quat**: the rotation.

### Returns

No return value.

### Examples

```
var angle = 90;  // axisAngle takes DEGREES!
var axis = {x: 0, y: 1, z: 0};
var rotation = Quat.axisAngle(angle, axis);
Quat.print(rotation, \"rotation =\");

```

Should print:

`rotation = 0 , 0.707107 , 0 , 0.707107`



## Quat.rotationBetween()<a id="m21"></a>

Compute the shortest rotation that would swing one vector to align with another.

### Function

`rotationBetween(v1, v2)`

### Arguments

**v1: vec3**: the first vector

**v2: vec3**: the second vector

Note: the arguments do not need to be normalized, however the return value may be nonsense if either of the arguments has zero length.

### Returns

**q: quat**: The shortest rotation that would swing **v1** to align with **v2**

### Examples

Sometimes we know where something is pointing and where we want it to point, but we don't know the incremental rotation that would get it there. `rotationBetween()` is a utility that makes this easy.

```
// suppose we know an object's rotation and non-zero velocity
var rotation = properties.rotation;
var velocity = properties.velocity;

// and suppose the object's local forward direction points
// parallel to its local yAxis and that we want to rotate the
// object to align its forward axis to be parallel to its 
// velocity...

// we can compute its forward axis in the world-frame like so
var yAxis = {x: 0, y: 1, z: 0};
var forward = Vec3.multiplyQbyV(rotation, yAxis);

// we use angleBetween() to compute the delta rotation that brings
// the forward direction parallel to the velocity
var deltaRotation = Quat.angleBetween(forward, velocity);

// we can now compute the final rotation of the object
var finalRotation = Quat.multiply(deltaRotation, rotation);
```



## Quat.safeEulerAngles()<a id="m22"></a>

Compute the pitch, yaw, and roll angles (in degrees) that correspond to a rotation.

The **safe** in the name signifies that the angle results will not be garbage even when the rotation is particularly difficult to decompose.

### Function

`Quat.safeEulerAngles(q)`

### Arguments

**q: quat**: the rotation to decompose into pitch, yaw, and roll.

### Returns

**angles: vec3**: The pitch, yaw, and roll angles (in degrees) stored in a **Vec3** that correspond to the rotation.

### Examples

```
var angles = Quat.safeEulerAngles(rotation);

var pitch = angles.x;
var yaw = angles.y;
var roll = angles.z;
```



## Quat.slerp()<a id="m23"></a>

Compute the normalized spherical linear interpolation (slerp) between two rotations.

### Function

`Quat.slerp(q1, q2, factor)`

### Arguments

**q1: quat**: the beginning rotation.

**q2: quat**: the ending rotation.

**factor: float**: the mixture coefficient in the range [0, 1]

### Returns

**q3: quat**: The spherically interpolated rotation between beginning and ending rotations. A `factor` value of 0 gives `q1` and a value of 1 gives `q2`.

### Examples

This example shows how to use `Quat.slerp()` to animate a rotation between one rotation and another.

```
// to animate between one rotation and another:
var dt = amountOfTimeThatHasPassed;
var mixFactor = amountOfTimeThatHasPassed / TIME_TO_COMPLETE;
if (mixFactor) > 1) {
  mixFactor = 1;
}
var newRotation = Quat.slerp(startRotation, endRotation, mixFactor);
```



## Quat.squad()<a id="m24"></a>

Compute a B-spline smoothed normalized spherical linear interpolation (slerp) between two rotations. Useful for animating through a series of rotation waypoints.

### Function

`Quat.squad(q1, q2, q3, q4, factor)`

### Arguments

**q1: quat**: the rotation previous to beginning rotation.

**q2: quat**: the beginning rotation.

**q3: quat**: the ending rotation.

**q4: quat**: the rotation after ending rotation.

**factor: float**: the mixture coefficient in the range [0, 1]

### Returns

**q5: quat**: The smoothed spherically interpolated rotation between beginning and ending rotations. A `factor` value of 0 gives `q2` and a value of 1 gives `q3`. # Examples

```
// TODO: write this example
```
