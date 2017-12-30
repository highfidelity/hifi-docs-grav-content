---
title: 'Quaternion'
taxonomy:
    category:
        - docs
---

The Quaternion API provides facilities for generating and manipulating quaternions. Quaternions should be used in preference to Euler angles wherever possible because quaternions don't suffer from the problem of gimbal lock.

- **[Properties](#prop)**
- **[Methods](#methods)**


| Properties      | Type   | Description |
| --------------- | ------ | ----------- |
|IDENTITY|Quat|The identity rotation, i.e., no rotation.|


| Methods                                  |
| ---------------------------------------- |
| [`Quat.angle(glm::quat)`](#m1)             |
| [`Quat.angleAxis(float,glm::vec3)`](#m2)   |
| [`Quat.axis(glm::quat)`](#m3)              |
| [`Quat.cancelOutRoll`](#m4)
| [`Quat.cancelOutRollandPitch`](#m5)
| [`Quat.conjugate(glm::quat)`](#m6)         |
| [`Quat.dot(glm::quat,glm::quat)`](#m7)     |
| [`Quat.equal(glm::quat,glm::quat)`](#m8)   |
| [`Quat.fromPitchYawRollDegrees(float,float,float)`](#m9) |
| [`Quat.fromPitchYawRollRadians(float,float,float)`](#m10) |
| [`Quat.fromVec3Degrees(glm::vec3)`](#m11)   |
| [`Quat.fromVec3Radians(glm::vec3)`](#m12)  |
| [`Quat.getForward(glm::quat)`](#m13)               |
| [`Quat.getFront(glm::quat)`](#m14)         |
| [`Quat.getRight(glm::quat)`](#m15)         |
| [`Quat.getUp(glm::quat)`](#m16)            |
| [`Quat.inverse(glm::quat)`](#m17)          |
| [`Quat.lookAt(glm::vec3,glm::vec3,glm::vec3)`](#m18) |
| [`Quat.lookAtSimple(glm::vec3,glm::vec3)`](#m19) |
| [`Quat.mix(glm::quat,glm::quat,float)`](#m20) |
| [`Quat.multiply(glm::quat,glm::quat)`](#m21) |
| [`Quat.normalize(glm::quat)`](#m22)        |
| [`Quat.print(QString,glm::quat)`](#m23)    |
| [`Quat.rotationBetween(glm::vec3,glm::vec3)`](#m24) |
| [`Quat.safeEulerAngles(glm::quat)`](#m25)  |
| [`Quat.slerp(glm::quat,glm::quat,float)`](#m26) |
| [`Quat.squad(glm::quat,glm::quat,glm::quat,glm::quat,float)`](#m27) |


## Properties <a id="prop"></a>

## Methods <a id="methods"></a>

### `angle(q)`<a id="m1"></a>

Computes the angle of rotation of a quaternion.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|q|Quat|The quaternion|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|The rotation angle for q.|number|The angle of the rotation `q` in radians|


**Examples**
*Get the rotation angle of a quaternion.*

```
var forward = Quat.getForward(Camera.orientation);
var rotation = Quat.angleAxis(90, forward);
var angle = Quat.angle(rotation);
print("Angle: " + angle * 180 / Math.PI);  // 90 degrees.
```



### `angleAxis(angle, axis)`<a id="m2"></a>

Computes the quaternion that corresponds to a rotation of an `angle` (degrees) about some normalized `axis`.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|angle|number|The angle of rotation in degrees|
|axis|Vec3|The normalized axis to rotate about|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|q|Quat|The quaternion that is the rotation of the angle (in degrees) about the axis.|


**Examples**

```
var angle = 90; // quarter turn
var axis = { x: 1, y: 0, z: 0};
var rotation = Quat.angleAxis(angle, axis);
```

```
var rotation = Quat.angleAxis(90, Quat.getForward(Camera.orientation));
```


### `axis(q)`<a id="m3"></a>

Computes a quaternion's normalized axis of rotation.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|q|Quat|The quaternion|

**Returns**
|Value|Type|Description|
|----|----|-----------|
|`axis`|Vec3|The normalized rotation axis for q|

**Examples**
*Get the rotation axis of a quaternion.*
```
var axis = Quat.axis(rotation);
```

```
var forward = Quat.getForward(Camera.orientation);
var rotation = Quat.angleAxis(90, forward);
var axis = Quat.axis(rotation);
print("Forward: " + JSON.stringify(forward));
print("Axis: " + JSON.stringify(axis)); // Same value as forward.
```


### `cancelOutRoll(orientation)`<a id="m4"></a>

Cancels out the roll component of a quaternion so that its horizontal axis is level. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|orientation|Quat|A quaternion representing an orientation.|

**Returns**
|Value|Type|Description|
|----|----|-----------|
|`orientation `|Quat|Orientation with its roll canceled out.|

**Examples**
*The following example depicts two ways of calculating a camera orientation that points in the direction of a given quaternion but keeps the camera's horizontal axis level.*
```
var quaternion = Quat.fromPitchYawRollDegrees(10, 20, 30);

var noRoll = Quat.cancelOutRoll(quaternion);
Quat.print("", noRoll, true); // dvec3(-1.033004, 22.245996, -0.000000)

var front = Quat.getFront(quaternion);
var lookAt = Quat.lookAtSimple(Vec3.ZERO, front);
Quat.print("", lookAt, true); // dvec3(-1.033004, 22.245996, -0.000000)
```


### `cancelOutRollAndPitch(orientation)`<a id="m5"></a>

Cancels out the roll and pitch component of a quaternion so that its completely horizontal with a yaw pointing in the given quaternion's direction.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|orientation|Quat|A quaternion representing an orientation.|

**Returns**
|Value|Type|Description|
|----|----|-----------|
|`orientation `|Quat|Orientation with its roll and pitch canceled out.|

**Examples**
*The following example depicts two ways of calculating a camera orientation in the x-z plane with a yaw pointing in the direction of a given quaternion.*
```
var quaternion = Quat.fromPitchYawRollDegrees(10, 20, 30);

var noRollOrPitch = Quat.cancelOutRollAndPitch(quaternion);
Quat.print("", noRollOrPitch, true); // dvec3(0.000000, 22.245995, 0.000000)

var front = Quat.getFront(quaternion);
var lookAt = Quat.lookAtSimple(Vec3.ZERO, { x: front.x, y: 0, z: front.z });
Quat.print("", lookAt, true); // dvec3(0.000000, 22.245996, 0.000000)
```


### `conjugate(q)`<a id="m6"></a>

Computes the conjugate of a quaternion. For a unit quaternion, its conjugate is the same as its Quat.inverse. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|q| Quat| The quaterion to conjugate.|

**Returns**
|Value|Type|Description|
|----|----|-----------|
|conjugate q| Quat| The conjugate of q.|

**Examples**
*A unit quaternion multiplied by its conjugate is a zero rotation.*
```
var quaternion = Quat.fromPitchYawRollDegrees(10, 20, 30);
Quat.print("quaternion", quaternion, true); // dvec3(10.000000, 20.000004, 30.000004)
var conjugate = Quat.conjugate(quaternion);
Quat.print("conjugate", conjugate, true); // dvec3(1.116056, -22.242186, -28.451778)
var identity = Quat.multiply(conjugate, quaternion);
Quat.print("identity", identity, true); // dvec3(0.000000, 0.000000, 0.000000)
```


### `dot(q1, q2)`<a id="m7"></a>

Computes the dot product between two quaternions. This is a measure of how "close" two quaternions are to each other. A zero dot product value means the rotations are completely orthogonal to each other. The closer they are to each other the more non-zero the value is (either positive or negative). Identical rotations will have a dot product of +/- 1.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|q1| Quat| The first quaterion|
|q2| Quat| The second quaterion|


**Returns**

|Value|Type|Description|
|----|----|-----------|
|d| number| The dot product of q1 and q2.|

**Examples**
*Testing unit quaternions for equality.*
```
var q1 = Quat.fromPitchYawRollDegrees(0, 0, 0);
var q2 = Quat.fromPitchYawRollDegrees(0, 0, 0);
print(Quat.equal(q1, q2)); // true
var q3 = Quat.fromPitchYawRollDegrees(0, 0, 359.95);
print(Quat.equal(q1, q3)); // false

var dot = Quat.dot(q1, q3);
print(dot); // -0.9999999403953552
var equal = Math.abs(1 - Math.abs(dot)) < 0.000001;
print(equal); // true

```



### `equal(q1, q2)`<a id="m8"></a>

Tests whether two quaternions are equal. The quaternions must be exactly equal in order for true to be returned; it is often better to use Quat.dot and test for closeness to +/-1. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|q1| Quat| The first quaterion|
|q2| Quat| The second quaterion|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|`true`| boolean| The quaternions are exactly equal.|
|`false`| boolean| The quaternions are not equal.|

**Examples**
*Testing unit quaternions for equality.*
```
var q1 = Quat.fromPitchYawRollDegrees(0, 0, 0);
var q2 = Quat.fromPitchYawRollDegrees(0, 0, 0);
print(Quat.equal(q1, q2)); // true
var q3 = Quat.fromPitchYawRollDegrees(0, 0, 359.95);
print(Quat.equal(q1, q3)); // false

var dot = Quat.dot(q1, q3);
print(dot); // -0.9999999403953552
var equal = Math.abs(1 - Math.abs(dot)) < 0.000001;
print(equal); // true

```


### `fromPitchYawRollDegrees(pitch, yaw, roll)`<a id="m9"></a>

Computes a quaternion using pitch, yaw, and roll values in degrees.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|pitch|number|The pitch angle in degrees(about the local x axis).|
|yaw|number|The yaw angle in degrees(about the local y axis).|
|roll|number|The roll angle in degrees(about the local z axis).|

**Returns**

|Values|Type|Description|
|----|----|-----------|
|q|Quat|A quaternion created using the pitch, yaw, and roll Euler angles.|

**Examples**
*Create a rotation of 180 degrees about the y axis.*
```
var rotation = Quat.fromPitchYawRollDgrees(0, 180, 0 );
```



### `fromPitchYawRollRadians(pitch, yaw, roll)`<a id="m10"></a>

Computes a quaternion using pitch, yaw, and roll values in radians.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|pitch|number|The pitch angle in degrees(about the local x axis).|
|yaw|number|The yaw angle in degrees(about the local y axis).|
|roll|number|The roll angle in degrees(about the local z axis).|

**Returns**

|Values|Type|Description|
|----|----|-----------|
|q|Quat|A quaternion created using the pitch, yaw, and roll Euler angles.|

**Examples**
*Create a rotation of 180 degrees about the y axis.*
```
var rotation = Quat.fromPitchYawRollRadians(0, Math.PI, 0);
``` 


### `fromVec3Degrees(vector)`<a id="m11"></a>

Computes a quaternion from a Vec3 of Euler angles in degrees.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|vector|Vec3|A vector of three Euler angles in degrees, the angles being the rotations about the x, y, and z axes.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|q|Quat|A quaternion created from the Euler angles in vector. |


**Examples**
*Zero out pitch and roll from an orientation.*

```
var eulerAngles = Quat.safeEulerAngles(orientation);
eulerAngles.x = 0;
eulerAngles.z = 0;
var newOrientation = Quat.fromVec3Degrees(eulerAngles);
```



### `fromVec3Radians()`<a id="m12"></a>

Computes a quaternion from a Vec3 of Euler angles in radians.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|vector|Vec3|A vector of three Euler angles in radians, the angles being the rotations about the x, y, and z axes.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|q|Quat|A quaternion created from the Euler angles in vector. |


**Examples**
*Create a rotation of 180 degrees about the y axis.*

```
var rotation = Quat.fromVec3Radians({ x: 0, y: Math.PI, z: 0 });
```


### `getForward(orientation)`<a id="m13"></a>

Gets the "forward" direction that the camera would face if its orientation was set to the quaternion value. This is similar to Quat.getFront. The High Fidelity camera has axes x = right, y = up, -z = forward. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|orientation|Quat| The quaternion|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|forward|Vec3|The negative z-axis rotated by the orientation.|

**Examples**
*Demonstrate that the "forward" vector is for the negative z-axis.*

```
var forward = Quat.getForward(Quat.IDENTITY);
print(JSON.stringify(forward)); // {"x":0,"y":0,"z":-1}
```


### `getFront(orientation)`<a id="m14"></a>

Gets the "front" direction that the camera would face if its orientation was set to the quaternion value. This is similar to Quat.getForward. The High Fidelity camera has axes x = right, y = up, -z = forward. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|orientation|Quat| The quaternion|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|front|Vec3|The negative z-axis rotated by the orientation.|

**Examples**

```
var forward = Quat.getFront(rotation);
```



### `getRight(orientation)`<a id="m15"></a>

Gets the direction to the "right" if the camera has its orientation set to the quaternion value. The High Fidelity camera has axes x = right, y = up, -z = forward. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|orientation|Quat| The quaternion|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|right|Vec3|The x-axis rotated by orientation. |

**Examples**

```
var right = Quat.getRight(rotation);
```



### `getUp(orientation)`<a id="m16"></a>

Get the "upwards" direction that the camera would have if its orientation was set to the quaternion value. The High Fidelity camera has axes x = right, y = up, -z = forward. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|orientation|Quat| The quaternion|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|up|Vec3|The y-axis rotated by orientation.|

**Examples**

```
var up = Quat.getUp(rotation);
```



### `inverse(q)`<a id="m17"></a>

Calculates the inverse of a quaternion. For a unit quaternion, its inverse is the same as its Quat.conjugate. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|q|Quat|The quaternion|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|inverseq|Quat|The inverse of the quaternion q|

**Examples**
*A quaternion multiplied by its inverse is a zero rotation.*
```
var quaternion = Quat.fromPitchYawRollDegrees(10, 20, 30);
Quat.print("quaternion", quaternion, true); // dvec3(10.000000, 20.000004, 30.000004)
var inverse = Quat.invserse(quaternion);
Quat.print("inverse", inverse, true); // dvec3(1.116056, -22.242186, -28.451778)
var identity = Quat.multiply(inverse, quaternion);
Quat.print("identity", identity, true); // dvec3(0.000000, 0.000000, 0.000000)

```



### `lookAt(eye, target, up)`<a id="m18"></a>

Computes a camera orientation that will orient it at a known location to look straight at another point using an eye position, point of interest, and the "up" direction. The camera's negative z-axis is the forward direction. The result has zero roll about its forward direction with respect to the given "up" direction. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|eye|Vec3|The eye position (location of the camera).|
|target|Vec3|The point to look at.|
|up|Vec3|The vertical direction.|

**Returns**
|Value|Type|Description|
|----|----|-----------|
|q|Quat|A quaternion that orients the negative z-axis to point along the eye-to-target vector and the x-axis to be the cross product of the eye-to-target and up vectors. |

**Examples**

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

*Rotate your view in independent mode to look at the world origin upside down.*
```
Camera.mode = "independent";
Camera.orientation = Quat.lookAt(Camera.position, Vec3.ZERO, Vec3.UNIT_NEG_Y);
```


### `lookAtSimple(eye, target)`<a id="m19"></a>

Computes the rotation that will orient a camera at a known location (eye position) to look straight at another point (target), assuming that the world's up direction is the yAxis. The result has zero roll about its forward direction. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|eye|Vec3|The eye position (location of the camera).|
|target|Vec3|The point to look at.|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|q|Quat|A quaternion that orients the negative z-axis to point along the eye-to-target vector and the x-axis to be the cross product of the eye-to-target and an "up" vector. The "up" vector is the y-axis unless the eye-to-target vector is nearly aligned with it (i.e., looking near vertically up or down), in which case the x-axis is used as the "up" vector. |

**Examples**

If we know where we are and the location of the thing we're looking at then `lookAtSimple()` will compute our orientation for us.

```
// suppose we have a laser turret that we want to point at a
// known target location
var eye = laser.position;
var center = target.position;

// Quat.lookAtSimple() will compute the orientation we want:
var orientation = Quat.lookAtSimple(eye, center);
```

*Rotate your view in independent mode to look at the world origin.*
```
Camera.mode = "independent";
Camera.orientation = Quat.lookAtSimple(Camera.position, Vec3.ZERO);
```


### `mix(q1, q2, alpha)`<a id="m20"></a>

Computes a spherical linear interpolation between two rotations, safely handling two rotations that are very similar. See also, [Quat.slerp](#m26). 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|q1|Quat|The beginning rotation.|
|q2|Quat|The ending rotation.|
|alpha|number|The mixture coefficient between `0.0` and `1.0`. Specifies the proportion of q2's value to return in favor of q1's value. A value of `0.0` returns q1's value; `1.0` returns q2s's value.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|q3|Quat|the spherical linear interpolation between rotations q1 and q2.|

**Examples**

*Animate between one rotation and another.*

```
var dt = amountOfTimeThatHasPassed;
var mixFactor = amountOfTimeThatHasPassed / TIME_TO_COMPLETE;
if (mixFactor > 1) {
    mixFactor = 1;
}
var newRotation = Quat.mix(startRotation, endRotation, mixFactor);
```



### `multiply(q2, q1)`<a id="m21"></a>

Multiplies two quaternions.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|q1|Quat|The first quaternion.|
|q2|Quat|The second quaternion.|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|q3|Quat|q1 multiplied with q2.|

**Examples**

*Two rotations can be combined by multiplying them together.*

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

*Calculate the orientation of your avatar's right hand in world coordinates.*
```
var handController = Controller.Standard.RightHand;
var handPose = Controller.getPoseValue(handController);
if (handPose.valid) {
    var handOrientation = Quat.multiply(MyAvatar.orientation, handPose.rotation);
}
```


### `normalize(q)`<a id="m19"></a>

Computes the normalized quaternion.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|q|Quat|The quaternion to normalize.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|normalizedq|Quat|The quaternion normalized such that its length is equal to 1. |

**Examples**

*This example shows a loop that increments a rotation around one full turn. Since the rotation is used to compute its next value each iteration it must be normalized, otherwise numerical error may be compounded.*

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

*Normalize a repeated delta rotation so that maths rounding errors don't accumulate.*
```
var deltaRotation = Quat.fromPitchYawRollDegrees(0, 0.1, 0);
var currentRotation = Quat.ZERO;
while (Quat.safeEulerAngles(currentRotation).y < 180) {
    currentRotation = Quat.multiply(deltaRotation, currentRotation);
    currentRotation = Quat.normalize(currentRotation);
    // Use currentRotatation for something.
}
```


### `print(label, q, asDegrees)`<a id="m23"></a>

Prints to the program log a text label followed by a quaternion's pitch, yaw, and roll Euler angles. 

**Parameters**

|Name|Type|Attributes|Default|Description|
|----|----|-----------|
|label|string |||The label to print.|
|q|Quat|||The quaternion to print.|
|asDegrees|boolean|optional|false|If true the angle values are printed in degrees, otherwise they are printed in radians.|

**Returns**

No return value.

**Examples**
*Two ways of printing a label plus a quaternion's Euler angles.*
```
var quaternion = Quat.fromPitchYawRollDegrees(0, 45, 0);

// Quaternion: dvec3(0.000000, 45.000004, 0.000000)
Quat.print("Quaternion:", quaternion,  true);

// Quaternion: {"x":0,"y":45.000003814697266,"z":0}
print("Quaternion: " + JSON.stringify(Quat.safeEulerAngles(quaternion)));
```


### `rotationBetween(v1, v2)`<a id="m24"></a>

Computes the shortest rotation that would swing one vector to align with another.


**Parameters**

|Name|Type|Description|
|----|----|-----------|
|v1|Vec3|The first vector.|
|v2|Vec3|The second vector.|

The arguments do not need to be normalized, however the return value may be nonsense if either of the arguments has zero length.

**Returns**

|Value|Type|Description|
|----|----|-----------|
|q|Quat|The shortest rotation that would swing v1 to align with v2|



**Examples**

*Sometimes, you know where something is pointing and where you want it to point, but you don't know the incremental rotation that would get it there. `rotationBetween()` is a utility that makes this easy.*

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

// we use rotationBetween() to compute the delta rotation that brings
// the forward direction parallel to the velocity
var deltaRotation = Quat.rotationBetween(forward, velocity);

// we can now compute the final rotation of the object
var finalRotation = Quat.multiply(deltaRotation, rotation);
```

*Apply a change in velocity to an entity and rotate it to face the direction it's travelling.*
```
var newVelocity = Vec3.sum(entityVelocity, deltaVelocity);
var properties = { velocity: newVelocity };
if (Vec3.length(newVelocity) > 0.001) {
    properties.rotation = Quat.rotationBetween(entityVelocity, newVelocity);
}
Entities.editEntity(entityID, properties);
entityVelocity = newVelocity;
```



### `safeEulerAngles(orientation)`<a id="m25"></a>

Calculates the Euler angles for the quaternion, in degrees. (The "safe" in the name signifies that the angle results will not be bad values even when the rotation is particularly difficult to decompose with pitches around +/-90 degrees.) 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|orientation|Quat|A quaternion representing an orientation.|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|angles|vec3|The Vec3 of Euler angles for the orientation, in degrees, the angles being the rotations about the x, y, and z axes. |

**Examples**

```
var angles = Quat.safeEulerAngles(rotation);

var pitch = angles.x;
var yaw = angles.y;
var roll = angles.z;
```

*Report the camera yaw.*
```
var eulerAngles = Quat.safeEulerAngles(Camera.orientation);
print("Camera yaw: " + eulerAngles.y);
```



### `slerp(q1, q2, factor)`<a id="m26"></a>

Compute the normalized spherical linear interpolation (slerp) between two rotations.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|q1|Quat|Initial rotation.|
|q2|Quat|Final rotation.|
|alpha|number|The mixture coefficient between `0.0` and `1.0`. Specifies the proportion of q2's value to return in favor of q1's value. A value of `0.0` returns q1's value; `1.0` returns q2's value.|


**Returns**
|Value|Type|Description|
|----|----|-----------|
|q3|Quat|A spherical linear interpolation between rotations q1 and q2.|

**Examples**

*This example shows how to use `Quat.slerp()` to animate a rotation between one rotation and another.*

```
// to animate between one rotation and another:
var dt = amountOfTimeThatHasPassed;
var mixFactor = amountOfTimeThatHasPassed / TIME_TO_COMPLETE;
if (mixFactor) > 1) {
  mixFactor = 1;
}
var newRotation = Quat.slerp(startRotation, endRotation, mixFactor);
```



### `squad(q1, q2, s1, s2, alpha) `<a id="m27"></a>

Compute a spherical quadrangle interpolation between two rotations along a path oriented toward two other rotations. Equivalent to:`Quat.slerp(Quat.slerp(q1, q2, alpha), Quat.slerp(s1, s2, alpha), 2 * alpha * (1.0 - alpha)). `


**Parameters**

|Name|Type|Description|
|----|----|-----------|
|q1|Quat|Initial rotation.|
|q2|Quat|Final rotation.|
|s1|Quat|First control point.|
|s2|Quat|Second control point.|
|alpha|number|The mixture coefficient between 0.0 and 1.0. A value of 0.0 returns q1's value; 1.0 returns q2s's value.|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|q3|Quat|A spherical quadrangle interpolation between rotations q1 and q2 using control points s1 and s2. |
