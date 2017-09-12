---
title: 'MyAvatar'
taxonomy:
    category:
        - docs
---

| Properties                               | Type         | Description                              |
| ---------------------------------------- | ------------ | ---------------------------------------- |
| MyAvatar.angularVelocity                 | number       |                                          |
| MyAvatar.audioAverageLoudness            | number       |                                          |
| MyAvatar.audioListenerMode               | number       |                                          |
| MyAvatar.audioListenerModeCamera         | number       |                                          |
| MyAvatar.audioListenerModeCustom         | number       |                                          |
| MyAvatar.audioListenerModeHead           | number       |                                          |
| MyAvatar.audioLoudness                   | number       |                                          |
| MyAvatar.bodyPitch                       | float        | bodyPitch is a float referring to the degree about an axis running from shoulder to shoulder of MyAvatar. Pitch is sometimes called 'elevation'. |
| MyAvatar.bodyRoll                        | float        | bodyRoll is a float referring to the degree about an axis running from the chest to the back of the avatar. Roll is sometimes called 'bank'. |
| MyAvatar.bodyYaw                         | float        | bodyYaw is a float referring to the degree left or right about an axis running from the head to the feet of MyAvatar. Yaw is sometimes called 'heading' |
| MyAvatar.characterControllerEnabled      | boolean      |                                          |
| MyAvatar.collisionSoundURL               | string       | The collisionSoundURL property specifies the sound to play when the avatar experiences a collision. You can provide a mono or stereo 16-bit WAV file running at either 24 Khz or 48 Khz. The latter is downsampled by the audio mixer, so all audio effectively plays back at a 24 Khz sample rate. 48 Khz RAW files are also supported. |
| MyAvatar.controllerLeftHandMatrix        | number       |                                          |
| MyAvatar.customListenOrientation         | w, x, y, z   |                                          |
| MyAvatar.customListenPosition            | x, y, z      |                                          |
| MyAvatar.displayName                     | string       |                                          |
| MyAvatar.faceModelURL                    | string       | faceModelURL, a string, returns the URL of MyAvatar head's .fst file. An .fst file is just a text file containing information about the model, its textures, blendshape mappings, and skeleton mappings. |
| MyAvatar.energy                          | number       |                                          |
| MyAvatar.handPosition                    | x, y, z      |                                          |
| MyAvatar.headOrientation                 | w, x, y, z   | headOrientation, a quaternion, represents the rotation of MyAvatar's head relative to a coordinate system. |
| MyAvatar.headPitch                       | float        | headPitch is a float referring to the degree about an axis running from ear to ear of MyAvatar's head. Pitch is sometimes called 'elevation'. |
| MyAvatar.headRoll                        | number       | headRoll is a float referring to the degree about an axis running from the nose to the back of MyAvatar's head. Roll is sometimes called 'bank'. |
| MyAvatar.headYaw                         | number       | headYaw is the degree left or right about an axis running from the base to the crown of MyAvatar's head. Yaw is sometimes called 'heading'. |
| MyAvatar.hmdLeanRecenterEnabled          | boolean      | An array of strings, jointNames displays the list of joints making up MyAvatar. To get the list of names, use getJointNames(). |
| MyAvatar.jointNames                      | string array |                                          |
| MyAvatar.leftHandPose.angularVelocity    | x, y, z      |                                          |
| MyAvatar.leftHandPose.rotation           | w, x, y, z   |                                          |
| MyAvatar.leftHandPose.translation        | x, y, z      |                                          |
| MyAvatar.leftHandPose.valid              | boolean      |                                          |
| MyAvatar.leftHandPose.velocity           | x, y, z      |                                          |
| MyAvatar.leftHandPosition                | x, y, z      |                                          |
| MyAvatar.leftHandTipPose.angularVelocity | x, y, z      |                                          |
| MyAvatar.leftHandTipPose.rotation        | w, x, y, z   |                                          |
| MyAvatar.leftHandTipPose.translation     | x, y, z      |                                          |
| MyAvatar.leftHandTipPose.valid           | boolean      |                                          |
| MyAvatar.leftHandTipPose.velocity        | x, y, z      |                                          |
| MyAvatar.leftHandTipPosition             | x, y, z      |                                          |
| MyAvatar.motorReferenceFrame             | string       |                                          |
| MyAvatar.motorTimescale                  | number       |                                          |
| MyAvatar.motorVelocity                   | x, y, z      |                                          |
| MyAvatar.objectName                      | string       |                                          |
| MyAvatar.orientation                     | w, x, y, z   |                                          |
| MyAvatar.position                        | x, y, z      |                                          |
| MyAvatar.rightHandPose.angularVelocity   | x, y, z      |                                          |
| MyAvatar.rightHandPose.rotation          | w, x, y, z   |                                          |
| MyAvatar.rightHandPose.translation       | x, y, z      |                                          |
| MyAvatar.rightHandPose.valid             | boolean      |                                          |
| MyAvatar.rightHandPose.velocity          | x, y, z      |                                          |
| MyAvatar.rightHandPosition               | x, y, z      |                                          |
| MyAvatar.rightHandTipPose.angularVelocity | x, y, z      |                                          |
| MyAvatar.rightHandTipPose.rotation       | w, x, y, z   |                                          |
| MyAvatar.rightHandTipPose.translation    | x, y, z      |                                          |
| MyAvatar.rightHandTipPose.valid          | boolean      |                                          |
| MyAvatar.rightHandTipPose.velocity       | x, y, z      |                                          |
| MyAvatar.rightHandTipPosition            | x, y, z      |                                          |
| MyAvatar.scale                           | number       |                                          |
| MyAvatar.sessionUUID                     | string       |                                          |
| MyAvatar.sessionDisplayName              | string       |                                          |
| MyAvatar.shouldRenderLocally             | boolean      |                                          |
| MyAvatar.skeletonModelURL                | string       |                                          |
| MyAvatar.skeletonOffset                  | x, y, z      |                                          |
| MyAvatar.velocity                        | x, y, z      |                                          |

| Methods                                  |
| ---------------------------------------- |
| [MyAvatar.addAnimationStateHandler(QScriptValue,QScriptValue)](#m1) |
| MyAvatar.addThrust(glm::vec3)            |
| [MyAvatar.attach(QString)](#m2)          |
| [MyAvatar.attach(QString,QString)](#m2)  |
| [MyAvatar.attach(QString,QString,glm::vec3)](#m2) |
| [MyAvatar.attach(QString,QString,glm::vec3,glm::quat](#m2) ) |
| [MyAvatar.attach(QString,QString,glm::vec3,glm::quat,float)](#m2) |
| [MyAvatar.attach(QString,QString,glm::vec3,glm::quat,float,bool)](#m2) |
| [MyAvatar.attach(QString,QString,glm::vec3,glm::quat,float,bool,bool)](#m2) |
| [MyAvatar.attach(QString,QString,glm::vec3,glm::quat,float,bool,bool,bool)](#m2) |
| MyAvatar.centerBody()                    |
| MyAvatar.clearAvatarEntity(QUuid)        |
| MyAvatar.clearIKJointLimitHistory()      |
| [MyAvatar.clearJointData(QString)](#m3)  |
| [MyAvatar.clearJointData(int)](#m3)      |
| [MyAvatar.clearJointsData()](#m4)        |
| MyAvatar.clearPinOnJoint(int)            |
| MyAvatar.clearScaleRestriction()         |
| [MyAvatar.decreaseSize()](#m5)           |
| [MyAvatar.detachAll(QString)](#m6)       |
| [MyAvatar.detachAll(QString,QString)](#m6) |
| [MyAvatar.detachOne(QString)](#m7)       |
| [MyAvatar.detachOne(QString,QString)](#m7) |
| MyAvatar.disableDriveKey(DriveKeys)      |
| MyAvatar.displayName                     |
| MyAvatar.displayNameChanged()            |
| MyAvatar.enableDriveKey(DriveKeys)       |
| MyAvatar.getAbsoluteDefaultJointRotationInObjectFrame(int) |
| MyAvatar.getAbsoluteDefaultJointTranslationInObjectFrame(int) |
| MyAvatar.getAbsoluteJointRotationInObjectFrame(int) |
| MyAvatar.getAbsoluteJointTranslationInObjectFrame(int) |
| MyAvatar.getAcceleration()               |
| MyAvatar.getAnimGraphOverrideUrl()       |
| MyAvatar.getAnimGraphUrl()               |
| [MyAvatar.getAnimationRoles()](#m8)      |
| [MyAvatar.getAttachmentData()](#m9)      |
| MyAvatar.getAttachmentsVariant()         |
| MyAvatar.getAvatarEntityData()           |
| MyAvatar.getCharacterControllerEnabled() |
| MyAvatar.getClearOverlayWhenMoving()     |
| MyAvatar.getControllerLeftHandMatrix()   |
| MyAvatar.getControllerRightHandMatrix()  |
| MyAvatar.getDataRate()                   |
| MyAvatar.getDataRate(QString)            |
| [MyAvatar.getDefaultEyePosition()](#m10) |
| MyAvatar.getDefaultJointRotation(int)    |
| MyAvatar.getDefaultJointTranslation(int) |
| [MyAvatar.getEnableMeshVisible()](#m11)  |
| [MyAvatar.getEyePosition()](#m12)        |
| [MyAvatar.getFullAvatarModelName()](#m13) |
| [MyAvatar.getFullAvatarURLFromPreferences()](#m14) |
| MyAvatar.getHMDLeanRecenterEnabled()     |
| MyAvatar.getHandState()                  |
| MyAvatar.getHeadDeltaPitch()             |
| MyAvatar.getHeadFinalPitch()             |
| MyAvatar.getHeadFinalRoll()              |
| MyAvatar.getHeadFinalYaw()               |
| [MyAvatar.getHeadPosition()](#m15)       |
| MyAvatar.getIKErrorOnLastSolve()         |
| [MyAvatar.getJointIndex(QString)](#m16)  |
| [MyAvatar.getJointNames()](#m17)         |
| [MyAvatar.getJointPosition(QString)](#m18) |
| [MyAvatar.getJointPosition(int)](#m18)   |
| [MyAvatar.getJointRotation(QString)](#m19) |
| [MyAvatar.getJointRotation(int)](#m19)   |
| [MyAvatar.getJointRotations()](#m20)     |
| [MyAvatar.getJointTranslation(QString)](#m21) |
| [MyAvatar.getJointTranslation(int)](#m21) |
| [MyAvatar.getLeftHandPose](#m22)         |
| [MyAvatar.getLeftHandPosition()](#m23)   |
| MyAvatar.getLeftHandTipPose()            |
| MyAvatar.getLeftHandTipPosition()        |
| [MyAvatar.getLeftPalmPosition()](#m24)   |
| [MyAvatar.getLeftPalmRotation()](#m25    |
| [MyAvatar.getNeckPosition()](#m26)       |
| MyAvatar.getOrientationForAudio()        |
| MyAvatar.getOrientationVar()             |
| MyAvatar.getParentID()                   |
| MyAvatar.getParentJointIndex()           |
| MyAvatar.getPositionForAudio()           |
| MyAvatar.getRawDriveKey(DriveKeys)       |
| [MyAvatar.getRightHandPose()](#m27)      |
| [MyAvatar.getRightHandPosition()](#m28)  |
| MyAvatar.getRightHandTipPose()           |
| MyAvatar.getRightHandTipPosition()       |
| [MyAvatar.getRightPalmPosition()](#m29)  |
| [MyAvatar.getRightPalmRotation()](#m30)  |
| MyAvatar.getSensorToWorldMatrix()        |
| MyAvatar.getSimulationRate()             |
| MyAvatar.getSimulationRate(QString)      |
| MyAvatar.getSkeleton()                   |
| [MyAvatar.getSkeletonOffset()](#m31)     |
| MyAvatar.getSnapTurn()                   |
| [MyAvatar.getTargetAvatarPosition()](#m32) |
| MyAvatar.getTargetScale()                |
| MyAvatar.getThrust()                     |
| MyAvatar.getTrackedHeadPosition()        |
| MyAvatar.getUpdateRate()                 |
| MyAvatar.getUpdateRate(QString)          |
| [MyAvatar.goToLocation(QVariant)](#m33)  |
| [MyAvatar.goToLocation(glm::vec3)](#m33) |
| [MyAvatar.goToLocation(glm::vec3,bool)](#m33) |
| [MyAvatar.goToLocation(glm::vec3,bool,glm::quat)](#m33) |
| [MyAvatar.goToLocation(glm::vec3,bool,glm::quat,bool)](#m33) |
| [MyAvatar.increaseSize()](#m34)          |
| MyAvatar.isAway                          |
| MyAvatar.isDriveKeyDisabled(DriveKeys)   |
| MyAvatar.isJointDataValid(QString)       |
| MyAvatar.isJointDataValid(int)           |
| MyAvatar.newCollisionSoundURL(QUrl)      |
| [MyAvatar.overrideAnimation(QString,float,bool,float,float)](#m35) |
| [MyAvatar.overrideRoleAnimation(QString,QString,float,bool,float,float)](#m36) |
| MyAvatar.pinJoint(int,glm::vec3,glm::quat) |
| [MyAvatar.PrefetchAnimation()](#m37)     |
| MyAvatar.removeAnimationStateHandler(QScriptValue) |
| MyAvatar.resetLastSent()                 |
| MyAvatar.resetSensorsAndBody()           |
| [MyAvatar.resetSize()](#m38)             |
| [MyAvatar.restoreAnimation()](#m39)      |
| [MyAvatar.restoreRoleAnimation(QString)](#m40) |
| MyAvatar.restrictScaleFromDomainSettings(QJsonObject) |
| MyAvatar.sendAvatarDataPacket()          |
| MyAvatar.sendIdentityPacket()            |
| MyAvatar.sensorToWorldMatrix.r0c0        |
| MyAvatar.setAbsoluteJointRotationInObjectFrame(int,glm::quat) |
| MyAvatar.setAbsoluteJointTranslationInObjectFrame(int,glm::vec3) |
| MyAvatar.setAnimGraphOverrideUrl(QUrl)   |
| MyAvatar.setAnimGraphUrl(QUrl)           |
| [MyAvatar.setAttachmentData(QVector<AttachmentData>)](#m41) |
| MyAvatar.setAttachmentsVariant(QVariantList) |
| MyAvatar.setAvatarEntityData(AvatarEntityMap) |
| MyAvatar.setBlendshape(QString,float)    |
| MyAvatar.setCharacterControllerEnabled(bool) |
| MyAvatar.setClearOverlayWhenMoving(bool) |
| MyAvatar.setEnableDebugDrawAnimPose(bool) |
| MyAvatar.setEnableDebugDrawDefaultPose(bool) |
| MyAvatar.setEnableDebugDrawHandControllers(bool) |
| MyAvatar.setEnableDebugDrawIKTargets(bool) |
| MyAvatar.setEnableDebugDrawPosition(bool) |
| MyAvatar.setEnableDebugDrawSensorToWorldMatrix(bool) |
| MyAvatar.setEnableInverseKinematics(bool) |
| [MyAvatar.setEnableMeshVisible(bool)](#m42) |
| MyAvatar.setHMDLeanRecenterEnabled(bool) |
| MyAvatar.setHandState(char)              |
| [MyAvatar.setJointData(QString,glm::quat,glm::vec3)](#m43) |
| [MyAvatar.setJointData(int,glm::quat,glm::vec3)](#m43) |
| MyAvatar.setJointMappingsFromNetworkReply() |
| [MyAvatar.setJointRotation(QString,glm::quat)](#m44) |
| [MyAvatar.setJointRotation(int,glm::quat)](#m44) |
| [MyAvatar.setJointRotations(QVector<glm::quat>)](#m45) |
| [MyAvatar.setJointTranslation(QString,glm::vec3)](#m46) |
| [MyAvatar.setJointTranslation(int,glm::vec3)](#m46) |
| MyAvatar.setJointTranslations(QVector<glm::vec3>) |
| MyAvatar.setModelURLFinished(bool)       |
| MyAvatar.setOrientationVar(QVariant)     |
| MyAvatar.setParentID(QUuid)              |
| MyAvatar.setParentJointIndex(ushort)     |
| MyAvatar.setRawJointData(QVector<JointData>) |
| MyAvatar.setSessionUUID(QUuid)           |
| [MyAvatar.setSkeletonOffset(glm::vec3)](#m47) |
| MyAvatar.setSnapTurn(bool)               |
| MyAvatar.setThrust(glm::vec3)            |
| MyAvatar.setUseAnimPreAndPostRotations(bool) |
| MyAvatar.updateAvatarEntity(QUuid,QByteArray) |
| MyAvatar.updateMotionBehaviorFromMenu()  |
| MyAvatar.useAdvancedMovementControls     |
| MyAvatar.useFullAvatarURL(QUrl)          |
| MyAvatar.useFullAvatarURL(QUrl,QString)  |

| Events                                   |
| ---------------------------------------- |
| MyAvatar.audioListenerModeChanged()      |
| [MyAvatar.collisionWithEntity(Collision)](#e1) |
| MyAvatar.destroyed()                     |
| MyAvatar.destroyed(QObject*)             |
| MyAvatar.energyChanged(float)            |
| MyAvatar.objectNameChanged(QString)      |
| MyAvatar.onLoadComplete()                |
| MyAvatar.positionGoneTo()                |
| MyAvatar.transformChanged()              |
| MyAvatar.wentActive()                    |
| MyAvatar.wentAway()                      |
| MyAvatar.skeletonChanged()               |


## MyAvatar.collisionWithEntity()<a id="e1"></a>

The `collisionWithEntity()` event is sent when the avatar collides with an entity.

### Event

`collisionWithEntity(collision)`

### Arguments

**collision: Collision**: Collision data

### Examples

This example prints a line to the debug line each time the avatar collides with an entity.

```
MyAvatar.collisionWithEntity.connect(function(collision){
  print ("The avatar collided with an entity.");
});
```



## addAnimationStateHandler()<a id="m1"></a>

### Function or Event

`addAnimationStateHandler(QScriptValue,QScriptValue) // Return value`

### Arguments

**QScriptValue:class**: description

**QScriptValue:class**: description

### Returns

**name:class**: description

### Examples

*Stand-alone (or close as possible) examples showcasing the function*

```
addAnimationStateHandler(QScriptValue,QScriptValue);
```



## attach()<a id="m2"></a>

Your avatar is your in-world representation of you. One way to customize your avatar is to attach models to it. For example, you can give your avatar a hat to wear, a guitar to hold, or a surfboard to stand on.

The `attach()` function is used to attach models to your avatar.

Note: Attached models are models only. They are not [entities](https://wiki.highfidelity.com/wiki/EntityItemProperties) and can not be manipulated using the entities API, nor can you use `attach` to attach an entity (such as a sphere or a box) to the avatar.

### Function

`attach(modelURL, jointName, translation, rotation, scale, isSoft)`

### Arguments

**modelURL:string**: The URL to the model you want to attach. Models can be .FBX or .OBJ format.

**jointName:string**: The joint name for the part of MyAvatar where the object will be attached. For the list of joint names, use [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

**translation: object**: A JavaScript object which takes x, y, and z name-value pairs specifying the translation of the attached object relative to the named joint position

**rotation: object**: A JavaScript object which takes x, y, z, and w name-value pairs specifying the rotation of the attached object

**scale: float**: The scale of the object to be attached

**isSoft: bool**: If the model has a skeleton, set this to `true` so that the bones of the attached model's skeleton will be rotated to fit the current avatar's pose. `isSoft` is used, for example, to have clothing that moves with the avatar. When `true`, the `translation`,`rotation` and `scale` parameters are ignored.

### Examples

This example attaches a cowboy hat to your avatar's head.

```
var attachment = {
    modelURL: "https://s3.amazonaws.com/hifi-public/tony/cowboy-hat.fbx",
    jointName: "Head",
    translation: {"x": 0, "y": 0.25, "z": 0},
    rotation: {"x": 0, "y": 0, "z": 0, "w": 1},
    scale: 1,
    isSoft: false
};

 MyAvatar.attach(attachment.modelURL,
                 attachment.jointName,
                 attachment.translation,
                 attachment.rotation,
                 attachment.scale,
                 attachment.isSoft);
```





## clearJointData()<a id="m3"></a>

Joints are the building blocks of skeletons and are their points of articulation. You can manipulate the avatar's joints to force the avatar into a specific pose by setting the joint data, for example, by using [setJointData()](https://wiki.highfidelity.com/wiki/SetJointData\(\)). Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics.

`clearJointData()` is used restore all motion from the default animation system including inverse kinematics for a specified joint.

### Function

`clearJointData(jointName)` `clearJointData(jointIndex)`

### Arguments

**jointName:string**: The joint name whose data will be cleared. For the list of joint names, use [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

**jointIndex:int**: The index of the joint whose data will be cleared. The joint index of a specific joint is its position in the array returned by [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)). When looping over joints in a for loop, using the jointIndex is slightly faster than looking the joint up by name.

### Examples

In this example, [setJointTranslation()](https://wiki.highfidelity.com/wiki/SetJointTranslation\(\)) is used to set the position of the "Neck" joint to a new position of 0, 25, 0.

```
var newTranslation = {x: 0, y: 25, z: 0}
MyAvatar.setJointTranslation("Neck", newTranslation);

```

After running the above example, the avatar's head appears to be about 25 centimeters above where it was. Depending on the avatar you are using, you would either see a gap between the head and body or you would see the neck stretched.

To return the neck joint to it's default position, you would use `clearJointData()` and specify the "Neck" joint as in the example below.

```
MyAvatar.clearJointData("Neck");
```

## clearJointsData()<a id="m4"></a>

Joints are the building blocks of skeletons and are their points of articulation. You can manipulating the avatar's joints to force the avatar into a specific pose by setting the joint data. For example, you can use [setJointData()](https://wiki.highfidelity.com/wiki/SetJointData\(\)) to set the rotation and translation of a specified joint. Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics for the specified joint.

`clearJointsData()` is used restore all motion from the default animation system including inverse kinematics for all joints.

### Function

`clearJointsData()`

### Arguments

This function has no parameters.

### Examples

If for example, you set all avatar joints to their default rotation and translation and put the avatar into it's default T-Pose, as in the example below:

```
var i, l = MyAvatar.getJointNames().length;
var rot, trans;
for (i = 0; i &lt; l; i++) {
    rot = MyAvatar.getDefaultJointRotation(i);
    trans = MyAvatar.getDefaultJointTranslation(i);
    MyAvatar.setJointData(i, rot, trans);
}

```

To restore all motion from the default animation system including inverse kinematics for all joints, use `clearJointsData()`.

```
MyAvatar.clearJointsData();
```




## decreaseSize()<a id="m5"></a>

The avatar's default scale is one.

The `decreaseSize()` function decreases the avatar's scale by five percent down to a minimum scale of 0.25.

### Function

`decreaseSize()`

### Arguments

This function has no parameters.

### Examples

This example starts by resetting the avatar's scale to one. Then, the avatar's scale is decreased by five percent each time `decreaseSize()` is called.

```
MyAvatar.resetSize();

for (var i = 0; i < 5; i++){
    MyAvatar.decreaseSize();
    print ("Shrinking by 5 percent");
}
```


## detachAll()<a id="m6"></a>

Your avatar is your in-world representation of you. One way to customize your avatar is to attach models to it. For example, you can give your avatar a hat to wear, a guitar to hold, or a surfboard to stand on.

If you have more than one of the same model attached, `detachAll()` removes all of the specified models.

### Function

`detachAll(modelURL, jointName)`

### Arguments

**modelURL:string**: The URL to the model you want to detach

**jointName:string**: The joint name for the part of MyAvatar where the models are attached. For the list of joint names, use [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

### Examples

For example, if the avatar is wearing three of the same hat, two on its head and one on its hand, you can use `detachAll()` to remove all three hats or you can use `detachAll()` to remove only the hats from a specified joint.

![](3-hats.png)

To remove all three hats, use `detachAll()` without specifying a joint name, as in the example below:

```
var hatURL = "https://s3.amazonaws.com/hifi-public/tony/cowboy-hat.fbx";

MyAvatar.detachAll(hatURL);

```

To remove all hats from the avatar's head, but not the hat on the avatar's hand, use `detachAll()` and specify "Head" as the joint name.

```
var hatURL = "https://s3.amazonaws.com/hifi-public/tony/cowboy-hat.fbx";

MyAvatar.detachAll(hatURL, "Head");
```



## detachOne()<a id="m7"></a>

Your avatar is your in-world representation of you. One way to customize your avatar is to attach models to it. For example, you can give your avatar a hat to wear, a guitar to hold, or a surfboard to stand on.

If you have more than one of the same model attached, `detachOne()` is used to remove only one of the models.

### Function

`detachOne(modelURL, jointName)`

### Arguments

**modelURL:string**: The URL to the model you want to detach

**jointName:string**: The joint name for the part of MyAvatar where the model is attached. For the list of joint names, use [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

### Examples

For this example, the avatar is wearing three of the same hat, two on its head and one on its hand.

![](3-hats.png)

 

```
detachOne()
```

 

```
var hatURL = "https://s3.amazonaws.com/hifi-public/tony/cowboy-hat.fbx";

MyAvatar.detachOne(hatURL, "Head");

```

If you simply want to remove the last hat attached (be it one of the two on the avatar's head or the one on its hand), use `detachOne()` without specifying a joint name:

```
var hatURL = "https://s3.amazonaws.com/hifi-public/tony/cowboy-hat.fbx";

MyAvatar.detachOne(hatURL);
```


## getAnimationRoles()<a id="m8"></a>

Each avatar has an avatar-animation.json file that defines which animations are used and how they are blended together with procedural data (such as look at vectors, hand sensors etc.). Each animation specified in the avatar-animation.json file is known as an animation role. Animation roles map to easily understandable actions that the avatar can perform, such as "idleStand", "idleTalk", or "walkFwd."

`getAnimationRoles()` is used to get the list of animation roles defined in the avatar-animation.json.

### Function

`getAnimationRoles() // Returns an array of strings`

### Arguments

This function has no parameters.

### Returns

**animationRoles:string[]**: A JavaScript array of strings representing the joints in MyAvatar

### Examples

This example prints the list of animation roles defined in the avatar's avatar-animation.json file to the debug log.

```
var roles = MyAvatar.getAnimationRoles();
print("Animation Roles:");
for (var i = 0; i < roles.length; i++) {
    print(roles[i]);
}
```


## getAttachmentData()<a id="m9"></a>

Your avatar is your in-world representation of you. One way to customize your avatar is to attach models to it. For example, you can give your avatar a hat to wear, a guitar to hold, or a surfboard to stand on.

`getAttachmentData()` is used to get information about all models currently attached to the avatar.

### Function

`getAttachmentData() // Returns an array of objects`

### Arguments

This function has no parameters.

### Returns

**attachments: objects[]**: An array of the objects attached to the avatar.

### Examples

This example gets all objects currently attached to the avatar and prints the object model URL to the debug log.

```
var attachments = MyAvatar.getaAttachmentData();

for (var i = 0; i < attachments.length; i++) {
    print (attachments[i].modelURL);
}

```

If, for example, you had attached a cowboy hat to your avatar as in the example used in [doc:attach attach()], you would see output like the following:

```
https://s3.amazonaws.com/hifi-public/tony/cowboy-hat.fbx
```



## getDefaultEyePosition()<a id="m10"></a>

`getDefaultEyePosition()` is used to get the avatar's default eye position. The default eye position refers to the point directly between the avatar's eyes when the avatar is standing upright and looking straight ahead. This is a reference position, therefore it does not change as the avatar's head position changes.

### Function

`getDefaultEyePosition() // Returns a vec3`

### Arguments

This function has no parameters.

### Returns

**position: vec3**: The default position in world coordinates of the point directly between the avatar's eyes

### Examples

This example gets the default eye position and prints it to the debug log.

```
var defaultEyePosition = MyAvatar.getDefaultEyePosition();
print (JSON.stringify(defaultEyePosition));
```



## getEnableMeshVisible()<a id="m11"></a>

You can toggle the visibility of the avatar mesh using [setEnableMeshVisible()](https://wiki.highfidelity.com/wiki/SetEnableMeshVisible\(\)).

`getEnableMeshVisible()` returns `true` is the avatar mesh is visible (rendered).

### Function

`getEnableMeshVisible() // Returns a bool`

### Arguments

This function has no parameters.

### Returns

**isVisible:bool**: `true` is the avatar mesh is visible (rendered), `false` if it is not

### Examples

You can use `getEnableMeshVisible()` to see if you avatar's mesh is visible to others.

```
print(MyAvatar.getEnableMeshVisible());

```

If the mesh is visible, this example will print `true` to the debug log.



## getEyePosition()<a id="m12"></a>

`getEyePosition()` is used to get the current position of the point directly between the avatar's eyes.

### Function

`getEyePosition() // Returns a Vec3`

### Arguments

This function has no parameters.

### Returns

**position:vec3**: The current position in world coordinates of the point directly between the avatar's eyes

### Examples

This example gets the current eye position and prints it to the debug log.

```
var eyePosition = MyAvatar.getEyePosition();
print (JSON.stringify(eyePosition));
```



## getFullAvatarModelName()<a id="m13"></a>

`getFullAvatarModelName()` is used to get the full avatar model name for the current avatar model.

### Function

`getFullAvatarModelName() // Returns a string`

### Arguments

This function has no parameters.

### Returns

**FullAvatarModelName:string**: The full name of the current avatar model

### Examples

The following example prints the full avatar model name to the debug log.

```
print (MyAvatar.getFullAvatarModelName());

```

For example, if you are wearing the simple robot avatar, you would see the following output:

```
simple_robot
```



## getFullAvatarURLFromPreferences()<a id="m14"></a>

`getFullAvatarURLFromPreferences()` is used to get the complete URL for the current avatar.

### Function

`getFullAvatarURLFromPreferences() // Returns string`

### Arguments

This function has no parameters.

### Returns

**avatarURL:string**: The complete URL for the current avatar

### Examples

The following example prints the full avatar model URL to the debug log.

```
print(MyAvatar.getFullAvatarURLFromPreferences());

```

For example, if you are wearing the simple robot avatar, you would see the following output:

```
https://hifi-metaverse.s3-us-west-1.amazonaws.com/marketplace/contents/1b7e1e7c-6c0b-4f20-9cd0-1d5ccedae620/v1/bb64e937acf86447f6829767e958073c.fst
```



## getHeadPosition()<a id="m15"></a>

`getHeadPosition()` is used to get the current position of the avatar's "Head" joint.

### Function

`getHeadPosition() // Returns a Vec3`

### Arguments

This function has no parameters.

### Returns

**position:vec3**: The current position of the avatar's "Head" joint in world-space coordinates

### Examples

This example prints the current position of the avatar's "Head" joint to the debug log.

```
print (JSON.stringify(MyAvatar.getHeadPosition()));

```

You should see output similar to the following:

```
{"x":0.015093114227056503,"y":0.19851160049438477,"z":3.9309639930725098}
```



## getJointIndex()<a id="m16"></a>

Joints are the building blocks of skeletons and are their points of articulation.

`getJointIndex()` is used to get the index value for a specified joint.

The joint index value of a joint is its position in the array returned by [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

### Function

`getJointIndex(jointName) // Returns an int`

### Arguments

**jointName:string**: The joint name whose data will be set. For the list of joint names, use [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

### Returns

**jointIndex:int**: The position of the specified joint in the array returned by [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\))

### Examples

The example gets the index value for the "LeftArm" joint and prints it to the debug log.

```
var leftArmIndex = MyAvatar.getJointIndex("LeftArm");
print ("The left Arm index: " + leftArmIndex);
```



## getJointNames()<a id="m17"></a>

Joints are the building blocks of skeletons and are their points of articulation. Each joint can have one or more child joints. A standard rig has a minimum number of 15 joints and can support up to 65 joints.

`getJointNames()` is used to get the names of all joints used by MyAvatar.

Note: Interface uses the same joint naming convention and hierarchy as [Mixamo](https://www.mixamo.com/) and [Mixamo's Fuse](https://www.mixamo.com/fuse) avatar creator.

### Function

`getJointNames() // Returns an array of strings`

### Arguments

This function has no parameters.

### Returns

**jointNames:string[]**: A JavaScript array of strings representing the joints in MyAvatar

### Examples

This example gets the list of joint names and prints them to the debug log.

```
var jointList = MyAvatar.getJointNames(); 
print (JSON.stringify(jointList));

```

You should see output similar to the following:

```
["Hips","RightUpLeg","RightLeg","RightFoot","RightToeBase","RightToe_End","LeftUpLeg","LeftLeg","LeftFoot","LeftToeBase","LeftToe_End","Spine","Spine1","Spine2","RightShoulder","RightArm","RightForeArm","RightHand","RightHandPinky1","RightHandPinky2","RightHandPinky3","RightHandPinky4","RightHandRing1","RightHandRing2","RightHandRing3","RightHandRing4","RightHandMiddle1","RightHandMiddle2","RightHandMiddle3","RightHandMiddle4","RightHandIndex1","RightHandIndex2","RightHandIndex3","RightHandIndex4","RightHandThumb1","RightHandThumb2","RightHandThumb3","RightHandThumb4","LeftShoulder","LeftArm","LeftForeArm","LeftHand","LeftHandPinky1","LeftHandPinky2","LeftHandPinky3","LeftHandPinky4","LeftHandRing1","LeftHandRing2","LeftHandRing3","LeftHandRing4","LeftHandMiddle1","LeftHandMiddle2","LeftHandMiddle3","LeftHandMiddle4","LeftHandIndex1","LeftHandIndex2","LeftHandIndex3","LeftHandIndex4","LeftHandThumb1","LeftHandThumb2","LeftHandThumb3","LeftHandThumb4","Neck","Head","RightEye","LeftEye","HeadTop_End","face","Neutral1","tongue2","tongue1","teeth","teeth_B","teeth_T","lashes","lash_RB","lash_RT","lash_LB","lash_LT","brow","brow_R_neut","brow_L_neut","hair1","eye_L","pupil_L1","eyeWhite_L1","eye_L_blak","eye_R","pupil_R1","eyeWhite_R1","eye_R_blak","clothes","shoe_L","shoe_R","pants","shirt"]
```



## getJointPosition()<a id="m18"></a>

Joints are the building blocks of skeletons and are their points of articulation.

`getJointPosition()` is used to get a specified joint's current position in world coordinates.

### Function

`getJointPosition(jointName) // Returns a Vec3`

`getJointPosition(jointIndex) // Returns a Vec3`

### Arguments

**jointName:string**: The joint name whose rotation will be retrieved. For the list of joint names, use [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

**jointIndex:int**: The index of the joint whose rotation will be retrieved. The joint index of a specific joint is its position in the array returned by [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)). When looping over joints in a for loop, using the jointIndex is slightly faster than looking the joint up by name.

### Returns

**position: vec3**: The current position in world coordinates of the specified joint

### Examples

This example gets the current position of the avatar's "Hips" and prints it to the debug log.

```
var jointPosition = MyAvatar.getJointPosition("Hips");
print ("Hips position: " + JSON.stringify(jointPosition));
```



## getJointRotation()<a id="m19"></a>

Joints are the building blocks of skeletons and are their points of articulation.

`getJointRotation()` is used to get a specified joint's rotation. The rotation returned is relative to the specified joint's parent joint. For more information on the joint hierarchy used, see [avatar standards](https://wiki.highfidelity.com/wiki/Create_avatars).

### Function

`getJointRotation(jointName) // Returns a Quat`

`getJointRotation(jointIndex) // Returns a Quat`

### Arguments

**jointName:string**: The joint name whose rotation will be retrieved. For the list of joint names, use [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

**jointIndex:int**: The index of the joint whose rotation will be retrieved. The joint index of a specific joint is its position in the array returned by [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)). When looping over joints in a for loop, using the jointIndex is slightly faster than looking the joint up by name.

### Returns

**rotation: quat**: The current joint rotation. The rotation returned is relative to the specified joint's parent joint.

### Examples

This example gets the current rotation of the avatar's "Hips" and prints it to the debug line.

```
var jointRotation = MyAvatar.getJointRotation("Hips");
print ("Hips rotation: " + JSON.stringify(jointRotation));
```



## getJointRotations()<a id="m20"></a>

Joints are the building blocks of skeletons and are their points of articulation.

`getJointRotations()` is used to get the rotation values for all joints in MyAvatar. Each rotation value is relative to the joint's parent joint.

Note: For information about avatar joint standards, see the *General Rigging Concepts* section in [Creating Avatars](https://wiki.highfidelity.com/wiki/Create_avatars).

### Function

`getJointRotations() // Return an array of joint rotations`

### Arguments

This function has no parameters.

### Returns

**jointRotations:quat[]**: An array of the rotation values for all joints in MyAvatar. Each rotation value is relative to the joint's parent joint. The values returned are in the same order as the array returned by [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

### Examples

This example gets all joint rotations and prints them to the debug line.

```
var jointRotations = MyAvatar.getJointRotations(); 
print (JSON.stringify(jointRotations));
```



## getJointTranslation()<a id="m21"></a>

Joints are the building blocks of skeletons and are their points of articulation.

`getJointTranslation()` is used to get a specified joint's current position relative to the specified joint's parent joint. For more information on the joint hierarchy used, see [avatar standards](https://wiki.highfidelity.com/wiki/Create_avatars).

### Function

`getJointTranslation(jointName) // Return Vec3`

`getJointTranslation(jointIndex) // Return Vec3`

### Arguments

**jointName:string**: The joint name whose rotation will be retrieved. For the list of joint names, use [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

**jointIndex:int**: The index of the joint whose rotation will be retrieved. The joint index of a specific joint is its position in the array returned by [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)). When looping over joints in a for loop, using the jointIndex is slightly faster than looking the joint up by name.

### Returns

**translation:vec3**: The current position of the specified joint. The position coordinates are relative to the specified joint's parent joint and are in centimeters.

### Examples

This example gets the current positions of the avatar's "Spine" and the spine's parent joint, "Hips", and then prints them to the debug log.

```
var spine = MyAvatar.getJointTranslation("Spine");
var hips = MyAvatar.getJointTranslation("Hips");

print ("Spine: " + JSON.stringify(spine));
print ("Hips: " + JSON.stringify(hips));
```



## getLeftHandPose()<a id="m22"></a>

If the avatar's left hand is controlled by a hand controller (Hydra, Vive), `getLeftHandPose()` is used to get the *pose* of the left hand. A pose is an object containing the current position, rotation, velocity, and angular velocity of the hand. The avatar's hand joint is a point near the avatar's wrist.

Note: At this time, the Leap isn't part of the hand controller input system (instead, it manipulates the avatar's joints for hand animation). If you are using the Leap, the return value for `valid` will be `false` and any pose values returned will not be meaningful.

### Function

`getLeftHandPose() // Returns a pose`

### Arguments

This function has no parameters.

### Returns

**pose:object**: A JavaScript object composed of the following:

- **translation: vec3**: The position of the hand in avatar space
- **rotation: vec3**: The rotation of the hand in avatar space
- **velocity: vec3**: The speed and direction that the hand is moving in avatar space
- **angularVelocity: vec3**: A vector that represents the speed of rotation of the hand in avatar space. The length of the vector is in radians per second, and the direction of the vector is the axis of rotation.
- **valid: bool**: If `false` the left hand is not being controlled by a hand controller and the above fields will not be meaningful.

### Examples

The following example prints the current pose of the left hand to the debug log.

```
print (JSON.stringify(MyAvatar.getLeftHandPose()));

```

If the left hand is currently controlled by a hand controller, you would see output similar to the following:

```
{"translation":{"x":0.17432305216789246,"y":-0.8278711438179016,"z":-0.0002234606072306633},"rotation":{"x":0.7437118887901306,"y":-0.11524366587400436,"z":0.6438397169113159,"w":-0.13813744485378265},"velocity":{"x":0,"y":0,"z":0},"angularVelocity":{"x":0,"y":0,"z":0},"valid":true}
```

If the left hand is not currently controlled by a hand controller, you would see output similar to the following:

```
{"translation":{"x":0,"y":0,"z":0},"rotation":{"x":0,"y":0,"z":0,"w":1},"velocity":{"x":0,"y":0,"z":0},"angularVelocity":{"x":0,"y":0,"z":0},"valid":false}
```



## getLeftHandPosition()<a id="m23"></a>

If the left hand is currently controlled by a hand controller (Hydra, Vive), `getLeftHandPosition()` is used to get the position of the left hand in avatar space. The avatar's hand joint is a point near the avatar's wrist.

Note: At this time, the Leap isn't part of the hand controller input system (instead, it manipulates the avatar's joints for hand animation). If you are using the Leap, the position value returned here will not be meaningful.


### Function

`getLeftHandPosition() // Returns a Vec3`

### Arguments

This function has no parameters.

### Returns

**position: vec3**: The current position in avatar space

### Examples

The following example prints the current position of the left hand to the debug log.

```
print (JSON.stringify(MyAvatar.getLeftHandPosition()));

```

If the left hand is currently controlled by a hand controller, you would see output similar to the following:

```
{"x":0.17432305216789246,"y":-0.8278711438179016,"z":-0.0002234606072306633}

```

If the left hand is not currently controlled by a hand controller, you would see output similar to the following:

```
{"x":0,"y":0,"z":0}
```



## getLeftPalmPosition()<a id="m24"></a>

`getLeftPalmPosition()` is used to get the position of the left palm (the avatar's "LeftHandMiddle1" joint) in world space.

### Function

`getLeftPalmPosition() // Returns a Vec3`

### Arguments

This function has no parameters.

### Returns

**position: vec3**: The current position in world space

### Examples

The following example prints the current position of the left palm to the debug log.

```
print (JSON.stringify(MyAvatar.getLeftPalmPosition()));

```

You should see output similar to the following:

```
{"x":-0.16140203177928925,"y":-0.7839933037757874,"z":3.1614937782287598}
```



## getLeftPalmRotation()<a id="m25"></a>

`getLeftPalmRotation()` is used to get the rotation of the left palm (the avatar's "LeftHandMiddle1" joint).

### Function

`getLeftPalmRotation() // Returns a Quat`

### Arguments

This function has no parameters.

### Returns

**rotation: quat**: The current rotation of the left palm in world space

### Examples

The following example prints the current rotation of the left palm to the debug log.

```
print (JSON.stringify(MyAvatar.getLeftPalmRotation()));

```

You should see output similar to the following:

```
{"x":0.7437118887901306,"y":-0.11524366587400436,"z":0.6438397169113159,"w":-0.13813744485378265}
```



## getNeckPosition()<a id="m26"></a>

`getNeckPosition()` is used to get the current position of the avatar's "Neck" joint.

### Function

`getNeckPosition() // Returns a Vec3`

### Arguments

This function has no parameters.

### Returns

**position:vec3**: The current position of the avatar's "Neck" joint in world-space coordinates

### Examples

This example prints the current position of the avatar's neck to the debug log.

```
print (JSON.stringify(MyAvatar.getNeckPosition()));

```

You should see output similar to the following:

```
{"x":0.015093114227056503,"y":0.19851160049438477,"z":3.9309639930725098}
```



## getRightHandPose()<a id="m27"></a>

If the avatar's right hand is controlled by a hand controller (Hydra, Vive), `getRightHandPose()` is used to get the *pose* of the right hand. A pose is an object containing the current position, rotation, velocity, and angular velocity of the hand. The avatar's hand joint is a point near the avatar's wrist.

Note: At this time, the Leap isn't part of the hand controller input system (instead, it manipulates the avatar's joints for hand animation). If you are using the Leap, the return value for `valid` will be `false` and any pose values returned will not be meaningful.

### Function

`getRightHandPose() // Returns pose`

### Arguments

This function has no parameters.

### Returns

**pose:object**: A JavaScript object composed of the following:

- **translation: vec3**: The position of the hand in avatar space
- **rotation: vec3**: The rotation of the hand in avatar space
- **velocity: vec3**: The speed and direction that the hand is moving in avatar space
- **angularVelocity: vec3**: A vector that represents the speed of rotation of the hand in avatar space. The length of the vector is in radians per second, and the direction of the vector is the axis of rotation.
- **valid: bool**: If `false` the right hand is not being controlled by a hand controller and the above fields will not be meaningful.

### Examples

The following example prints the current pose of the right hand to the debug log.

```
print (JSON.stringify(MyAvatar.getRightHandPose()));

```

If the right hand is currently controlled by a hand controller, you would see output similar to the following:

```
{"translation":{"x":0.17432305216789246,"y":-0.8278711438179016,"z":-0.0002234606072306633},"rotation":{"x":0.7437118887901306,"y":-0.11524366587400436,"z":0.6438397169113159,"w":-0.13813744485378265}, "velocity":{"x":0,"y":0,"z":0},"angularVelocity":{"x":0,"y":0,"z":0},"valid":true}
```

If the right hand is not currently controlled by a hand controller, you would see output similar to the following:

```
{"translation":{"x":0,"y":0,"z":0},"rotation":{"x":0,"y":0,"z":0,"w":1},"velocity":{"x":0,"y":0,"z":0},"angularVelocity":{"x":0,"y":0,"z":0},"valid":false}
```



## getRightHandPosition()<a id="m28"></a>

If the avatar's right hand is controlled by a hand controller (Hydra, Vive), `getRightHandPosition()` is used to get the position of the right hand in avatar space. The avatar's hand joint is a point near the avatar's wrist.

Note: At this time, the Leap isn't part of the hand controller input system (instead, it manipulates the avatar's joints for hand animation). If you are using the Leap, the return value for the position here will not be meaningful.

### Function

`getRightHandPosition() // Returns a Vec3`

### Arguments

This function has no parameters.

### Returns

**position: vec3**: The current position in avatar space

### Examples

The following example prints the current position of the right hand to the debug log.

```
print (JSON.stringify(MyAvatar.getRightHandPosition()));

```

If the right hand is currently controlled by a hand controller, you would see output similar to the following:

```
{"x":0.17432305216789246,"y":-0.8278711438179016,"z":-0.0002234606072306633}
```

Note: If the right hand is not currently controlled by a hand controller, you would see output similar to the following:

```
{"x":0,"y":0,"z":0}
```



## getRightPalmPosition()<a id="m29"></a>

`getRightPalmPosition()` is used to get the position of the right palm (the avatar's "RightHandMiddle1" joint) in world space.

### Function

`getRightPalmPosition() // Returns a Vec3`

### Arguments

This function has no parameters.

### Returns

**position: vec3**: The current position in world space

### Examples

The following example prints the current position of the right palm to the debug log.

```
print (JSON.stringify(MyAvatar.getRightPalmPosition()));

```

You should see output similar to the following:

```
{"x":0.17432305216789246,"y":-0.8278711438179016,"z":-0.0002234606072306633}
```



## getRightPalmRotation()<a id="m30"></a>

`getRightPalmRotation()` is used to get the rotation of the right palm (the avatar's "RightHandMiddle1" joint).


### Function

`getRightPalmRotation() // Returns a Quat`

### Arguments

This function has no parameters.

### Returns

**rotation: quat**: The current rotation of the right palm in world space

### Examples

The following example prints the current rotation of the right palm to the debug log.

```
print (JSON.stringify(MyAvatar.getRightPalmRotation()));

```

You should see output similar to the following:

```
{"x":0.5869807600975037,"y":0.11561637371778488,"z":-0.7939552068710327,"w":-0.10826735943555832}
```



## getSkeletonOffset()<a id="m31"></a>

The `skeletonOffset` property specifies a position offset for the rendering of the avatar model. For example, a model that appears to be raised off the ground slightly would have a `skeletonOffset` of {x: 0, y: 0.1: z: 0}.

`getSkeletonOffset()` is used to get the current `skeletonOffset`.

### Function

`getSkeletonOffset() // Returns a vec3`

### Arguments

This function has no parameters.

### Returns

**SkeletonOffset:vec3**: The position to offset the rendering of the model

### Examples

This example prints the current `skeletonOffset` to the debug log:

```
print (JSON.stringify(MyAvatar.getSkeletonOffset());

```

You should see output similar to the following:

```
{x: 0, y: 0.1: z: 0}
```



## getTargetAvatarPosition()<a id="m32"></a>

`getTargetAvatarPosition()` is used to get the position of the avatar that you are currently looking at.

### Function

`getTargetAvatarPosition() // Returns a Vec3`

### Arguments

This function has no parameters.

### Returns

**position:Vec3**: A JavaScript object with x, y, and z name-value pairs specifying the position of the avatar that you are currently looking at

### Examples

This examples gets the target avatar's position and prints it to the debug log.

```
var targetAvatarPosition = getTargetAvatarPosition();
print (JSON.stringify(targetAvatarPosition);
```




## goToLocation()<a id="m33"></a>

What happens if the position specified falls outside the domain?

The `goToLocation()` function is used to move the avatar to a new position and orientation within the domain.

### Function

`goToLocation(newPosition, hasOrientationChange, newOrientation, shouldFaceLocation)`

### Arguments

**newPosition:vec3**: World coordinates specifying the new position for the avatar

**hasOrientationChange:bool**: Set to `true` if you want to specify an orientation change for the avatar

**newOrientation:quat4**: The new orientation of the avatar

**shouldFaceLocation:bool**: Set to `true` to change the avatar's orientation so that the avatar faces the new location

### Examples

To move the avatar to the domain origin point (0, 0, 0) and change the avatar's orientation so that the avatar faces the new location, use:

```
MyAvatar.goToLocation({x: 0, y: 0, z: 0}, true, true);

```

To move the avatar to the domain origin point (0, 0, 0) and change the avatar's orientation to a specified orientation, use:

```
MyAvatar.goToLocation({x: 0, y: 0, z: 0}, true, {x: 0, y: 0, z: 0, w:0});

```

To move the avatar to the domain origin point (0, 0, 0) without changing the avatar's orientation, use:

```
MyAvatar.goToLocation({x: 0, y: 0, z: 0});
```



## increaseSize()<a id="m34"></a>

The avatar's default scale is set to one.

The `increaseSize()` function increases the avatar's scale by five percent up to a maximum scale of 1000.

### Function

`increaseSize()`

### Arguments

This function has no parameters.

### Examples

This example starts by resetting the avatar's scale to one. Then, the avatar's scale is increased by five percent each time `increaseSize()` is called.

```
MyAvatar.resetSize();

for (var i = 0; i &lt; 5; i++){
    MyAvatar.increaseSize();
    print ("Growing by 5 percent");
}
```



## overrideAnimation()<a id="m35"></a>

The avatar animation system includes a set of default animations along with rules for how those animations are blended together with procedural data (such as look at vectors, hand sensors etc.).

`overrideAnimation()` is used to completely override all motion from the default animation system (including inverse kinematics for hand and head controllers) and play a specified animation.

Note: When using pre-built animation data, it’s critical that the joint orientation of the source animation and target rig are equivalent, since the animation data applies absolute values onto the joints. If the orientations are different, the avatar will move in unpredictable ways. For more information about avatar joint orientation standards, see the *General Rigging Concepts* section in [Creating Avatars](https://wiki.highfidelity.com/wiki/Create_avatars).

### Function

`overrideAnimation(animURL, playbackRate, loopFlag, startFrame, endFrame)`

### Arguments

**animURL:string**: The URL to the animation file. Animation files need to be .FBX format, but only need to contain the avatar skeleton and animation data.

**playbackRate:float**: The frames per second (FPS) rate for the animation playback. 30 FPS is normal speed.

**loopFlag:bool**: Set to `true` if the animation should loop

**startFrame:float**: The frame the animation should start at

**endFrame:float**: The frame the animation should end at

### Examples

This example plays an animation on the avatar that completely overrides all default avatar animations. When run, this animation causes the avatar to clap its hands.

```
// An animation of the avatar clapping its hands while standing
var ANIM_URL = "https://s3.amazonaws.com/hifi-public/animations/ClapAnimations/ClapHands_Standing.fbx";

MyAvatar.overrideAnimation(ANIM_URL, 30, true, 0, 53);

```

To end the animation and restore the default animations, use [doc:restoreanimation restoreAnimation()].



## overrideRoleAnimation()<a id="m36"></a>

Each avatar has an avatar-animation.json file that defines a set of animation roles. Animation roles map to easily understandable actions that the avatar can perform, such as "idleStand", "idleTalk", or "walkFwd". To get the full list of roles, use [getAnimationRoles()](https://wiki.highfidelity.com/wiki/GetAnimationRoles\(\)). For each role, the avatar-animation.json defines when the animation is used, the animation clip (.FBX) used, and how animations are blended together with procedural data (such as look at vectors, hand sensors etc.).

`overrideRoleAnimation()` is used to change the animation clip (.FBX) associated with a specified animation role.

Note: When using pre-built animation data, it’s critical that the joint orientation of the source animation and target rig are equivalent, since the animation data applies absolute values onto the joints. If the orientations are different, the avatar will move in unpredictable ways. For more information about avatar joint orientation standards, see the *General Rigging Concepts* section in [Creating Avatars](https://docs.highfidelity.com/docs/creating-avatars-1).

Note: Hand roles only affect the hand. Other 'main' roles, like 'idleStand', 'idleTalk', 'takeoffStand' are full body.

### Function

`overrideRoleAnimation(animRole, animURL, playbackRate, loopFlag, startFrame, endFrame)`

### Arguments

**animRole:string**: The animation role to override

**animURL:string**: The URL to the animation file. Animation files need to be .FBX format, but only need to contain the avatar skeleton and animation data.

**playbackRate:float**: The frames per second (FPS) rate for the animation playback. 30 FPS is normal speed.

**loopFlag:bool**: Set to `true` if the animation should loop

**startFrame:float**: The frame the animation should start at

**endFrame:float**: The frame the animation should end at

### Examples

The default avatar-animation.json defines an "idleStand" animation role. This role specifies that when the avatar is not moving, an animation clip of the avatar idling with hands hanging at its side will be used. It also specifies that when the avatar moves, the animation will smoothly blend to the walking animation used by the "walkFwd" animation role.

In this example, the "idleStand" role animation clip has been replaced with a clapping animation clip. Now instead of standing with its arms hanging at its sides when it is not moving, the avatar will stand and clap its hands. Note that just as it did before, as soon as the avatar starts to move, the animation will smoothly blend into the walk animation used by the "walkFwd" animation role.

```
// An animation of the avatar clapping its hands while standing
var ANIM_URL = "https://s3.amazonaws.com/hifi-public/animations/ClapAnimations/ClapHands_Standing.fbx";

MyAvatar.overrideRoleAnimation("idleStand", ANIM_URL, 30, true, 0, 53);

```

To restore the default animation, use [restoreRoleAnimation()](https://wiki.highfidelity.com/wiki/RestoreRoleAnimation\(\)).



## prefetchAnimation()<a id="m37"></a>

By default when you override an animation, it will download the .FBX from the specified URL on demand which might take a few seconds. If you know in advance which animations you need, to help ensure smooth animation when playing an animation for the first time, you can prefetch the animation files.

`prefetchAnimation()` is used to prefetch an animation file from a specified URL.

### Function or Event

`prefetchAnimation(animURL)`

### Arguments

**animURL:string**: The URL to the animation file. Animation files need to be .FBX format, but only need to contain the avatar skeleton and animation data.

### Examples

This example prefetches the "ClapHands_Standing.fbx" animation file.

```
var ANIM_URL = "https://s3.amazonaws.com/hifi-public/animations/ClapAnimations/ClapHands_Standing.fbx";

MyAvatar.prefetchAnimation(ANIM_URL);
```



## resetSize()<a id="m38"></a>

The avatar's default scale is set to one. You can increase or decrease the avatar's size using [increaseSize()](https://wiki.highfidelity.com/wiki/IncreaseSize()) or [decreaseSize()](https://wiki.highfidelity.com/wiki/DecreaseSize\(\)).

The `resetSize()` function is used to reset the avatar's scale back to the default scale of one.

### Function

`resetSize()`

### Arguments

This function has no parameters.

### Examples

To reset the avatar's scale back to the default scale of one, simply call `resetSize()`.

```
MyAvatar.resetSize();
```



## restoreAnimation()<a id="m39"></a>

The avatar animation system includes a set of default animations along with rules for how those animations are blended together with procedural data (such as look at vectors, hand sensors etc.). Playing your own custom animations will override the default animations.

`restoreAnimation()` is used to restore all motion from the default animation system including inverse kinematics for hand and head controllers. If you aren't currently playing an override animation, this function will have no effect.

### Function

`restoreAnimation()`

### Arguments

This function has no parameters.

### Examples

If for example, you played an animation on the avatar that completely overrides all default avatar animations using [overrideAnimation()](https://wiki.highfidelity.com/wiki/OverrideAnimation\(\)), such as the following:

```
// An animation of the avatar clapping its hands while standing
var ANIM_URL = "https://s3.amazonaws.com/hifi-public/animations/ClapAnimations/ClapHands_Standing.fbx";

MyAvatar.overrideAnimation(ANIM_URL, 30, true, 0, 53);

```

To end the animation and restore the default animation, you would use `restoreAnimation()`:

```
MyAvatar.restoreAnimation();
```



## restoreRoleAnimation()<a id="m40"></a>

Each avatar has an avatar-animation.json file that defines a set of animation roles. Animation roles map to easily understandable actions that the avatar can perform, such as "idleStand", "idleTalk", or "walkFwd". To get the full list of roles, use [getAnimationRoles()](https://wiki.highfidelity.com/wiki/GetAnimationRoles\(\)). For each role, the avatar-animation.json defines when the animation is used, the animation clip (.FBX) used, and how animations are blended together with procedural data (such as look at vectors, hand sensors etc.). You can change the animation clip (.FBX) associated with a specified animation role using [overrideRoleAnimation()](https://wiki.highfidelity.com/wiki/OverrideRoleAnimation\(\)).

`restoreRoleAnimation()` is used to restore a specified animation role's default animation clip. If you have not specified an override animation for the specified role, this function will have no effect.

### Function

`restoreRoleAnimation(animRole)`

### Arguments

**animRole:string**: The animation role clip to restore

### Examples

For example, if you override the "idleStand" role with a clapping animation, the avatar will clap its hands when it is not moving.

```
// An animation of the avatar clapping its hands while standing
var ANIM_URL = "https://s3.amazonaws.com/hifi-public/animations/ClapAnimations/ClapHands_Standing.fbx";

MyAvatar.overrideRoleAnimation("idleStand", ANIM_URL, 30, true, 0, 53);

```

To restore the animation role's default animation clip (the avatar idling with hands hanging at its side), use `restoreRoleAnimation()`.

```
restoreRoleAnimation("idleStand");
```



## setAttachmentData()<a id="m41"></a>

Your avatar is your in-world representation of you. One way to customize your avatar is to attach models to it. For example, you can give your avatar a hat to wear, a guitar to hold, or a surfboard to stand on. Information about all of the models attached to your avatar can be retrieved using [getAttachmentData()](https://wiki.highfidelity.com/wiki/GetAttachmentData\(\)) which returns an array of attachment data.

If you retrieved an attachment data array and then made changes to that array, you can use `setAttachmentData()` to set the avatar's attachment data to the updated array. You can also remove all attachments by using `setAttachmentData()` to set the attachment data to `null`.

### Function

`setAttachmentData(AttachmentData)`

### Arguments

**AttachmentData: object[] **: An array of of attached objects as returned by `getAttachmentData()`

### Examples

If, for example, your avatar is wearing a hat (as in the example for [[attach()])], you can remove the hat by getting your avatar's attachment data array, searching for the hat modelURL, removing that item and then using `setAttachmentData()` to update the avatar's attachments.

```
var hatURL = "https://s3.amazonaws.com/hifi-public/tony/cowboy-hat.fbx";

var attachments = MyAvatar.getAttachmentData();

for (var i = 0; i < attachments.length; i++) {
    if (attachments[i].modelURL === hatURL) {
        attachments.splice(i, 1);
        MyAvatar.setAttachmentData(attachments);
        break;
}

```

You can also remove all attachments by using `setAttachmentData()` to set the attachment data to `null` as in the example below:

```
MyAvatar.setAttachmentData(null);
```



## setEnableMeshVisible()<a id="m42"></a>

`setEnableMeshVisible()` is used to toggle the visibility of the avatar mesh.

### Function

`setEnableMeshVisible(isVisible)`

### Arguments

**isVisible:bool**: Set to `true` if the avatar mesh should be visible (rendered), `false` if it it should not

### Examples

For example, to set the avatar mesh to invisible, you would use the following:

```
MyAvatar.setEnableMeshVisible(false);
```



## setJointData()<a id="m43"></a>

Joints are the building blocks of skeletons and are their points of articulation.

`setJointData()` is used to set a specified joint's rotation and position. The values for the new rotation and position are relative to the specified joint's parent joint. The units for the position coordinates are centimeters.

Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.

Note: For information about avatar joint standards, see the *General Rigging Concepts* section in [Creating Avatars](https://wiki.highfidelity.com/wiki/Create_avatars).

### Function

`setJointData(jointName, rotation, translation)`

`setJointData(jointIndex, rotation, translation)`

### Arguments

**jointName:string**: The joint name whose data will be set. For the list of joint names, use [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

**jointIndex:int**: The index of the joint whose data will be set. The joint index of a specific joint is its position in the array returned by [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)). When looping over joints in a for loop, using the jointIndex is slightly faster than looking the joint up by name.

**rotation:quat**: The new rotation. The rotation specified is relative to the specified joint's parent joint.

**translation: vec3**: The new position. The position coordinates specified are relative to the specified joint's parent joint and are in centimeters.

### Examples

This example sets all avatar joints to their default rotation and position.

```
var i, l = MyAvatar.getJointNames().length;
var rot, trans;
for (i = 0; i < l; i++) {
    rot = MyAvatar.getDefaultJointRotation(i);
    trans = MyAvatar.getDefaultJointTranslation(i);
    MyAvatar.setJointData(i, rot, trans);
}

```

After running the above example, your avatar should be in the default T-Pose and all motion from the default animation system will no longer be in effect.

![](t-pose.png)

To restore all motion from the default animation system including inverse kinematics for all joints, use [clearJointsData()](https://wiki.highfidelity.com/wiki/ClearJointsData\(\)).



## setJointRotation()<a id="m44"></a>

Joints are the building blocks of skeletons and are their points of articulation.

`setJointRotation()` is used to set a specified joint's rotation. The value for the new rotation is relative to the specified joint's parent joint.

Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.

Note: For information about avatar joint standards, see the *General Rigging Concepts* section in [Creating Avatars](https://wiki.highfidelity.com/wiki/Create_avatars).

### Function

`setJointRotation(jointName, rotation)` `setJointRotation(jointIndex, rotation)`

### Arguments

**jointName:string**: The joint name whose rotation will be set. For the list of joint names, use [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

**jointIndex:int**: The index of the joint whose rotation will be set. The joint index of a specific joint is its position in the array returned by [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)). When looping over joints in a for loop, using the jointIndex is slightly faster than looking the joint up by name.

**rotation:quat**: The new rotation. The rotation specified is relative to the specified joint's parent joint.

### Examples

This example first sets the avatar to T-Pose. Setting all of the joint data directly completely overrides all motion from the default animation system including inverse kinematics. It then uses `setJointRotation()` to change the rotation of the avatar's left arm.

```
// Set the avatar to T-Pose and completely override/replace all motion from the // default animation system including inverse kinematics
var i, l = MyAvatar.getJointNames().length;
var rot, trans;
for (i = 0; i < l; i++) {
    rot = MyAvatar.getDefaultJointRotation(i);
    trans = MyAvatar.getDefaultJointTranslation(i);
    MyAvatar.setJointData(i, rot, trans);
}

// Change the rotation of the avatar's left arm
var newArmRotation = {x: 0.47,  y: 0.22, z: -0.02, w:0.87};
MyAvatar.setJointRotation("LeftArm", newArmRotation);

```

![](armpose.png)

To restore all motion from the default animation system including inverse kinematics for all joints, use [clearJointsData()](https://wiki.highfidelity.com/wiki/ClearJointsData\(\)).



## setJointRotations()<a id="m45"></a>

Joints are the building blocks of skeletons and are their points of articulation.

`setJointRotations()` is used to set the rotation for all MyAvatar joints. This function takes an array containing the rotation values for all joints in MyAvatar. The rotation values are in the same order as the array returned by [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)) and each joint's rotation value is relative to the joint's parent joint.

Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.

Note: For information about avatar joint standards, see the *General Rigging Concepts* section in [Creating Avatars](https://wiki.highfidelity.com/wiki/Create_avatars).

### Function

`setJointRotations(jointRotations)`

### Arguments

**jointRotations:quat[]**: An array of the rotation values for all joints in MyAvatar. Each rotation value is relative to the joint's parent joint. The joint values are in the same order as the array returned by [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

### Examples

This example first sets the avatar to T-Pose. Setting all joint data directly completely overrides all motion from the default animation system including inverse kinematics. It then uses `getJointRotations` to get the rotation values for all joints. The array is then updated to change the rotation value for the left arm. `setJointRotations` is then used to set all joint rotations to the values in the updated array.

```
// Set the avatar to T-Pose and completely override/replace all motion from the // default animation system including inverse kinematics
var i, l = MyAvatar.getJointNames().length;
var rot, trans;
for (i = 0; i < l; i++) {
    rot = MyAvatar.getDefaultJointRotation(i);
    trans = MyAvatar.getDefaultJointTranslation(i);
    MyAvatar.setJointData(i, rot, trans);
}

// Get all rotations 
var jointRotations = MyAvatar.getJointRotations(); 

//Update the rotation value in the array for the left arm
jointRotations[MyAvatar.getJointIndex("LeftArm")] = {x: 0.47,  y: 0.22, z: -0.02, w:0.87};

//Update all joint rotations 
MyAvatar.setJointRotations(jointRotations);

```

![](armpose.png)

To restore all motion from the default animation system including inverse kinematics for all joints, use [clearJointsData()](https://wiki.highfidelity.com/wiki/ClearJointsData\(\)).



## setJointTranslation()<a id="m46"></a>

Joints are the building blocks of skeletons and are their points of articulation.

`setJointTranslation()` is used to set a specified joint's position. The value for the new position is relative to the specified joint's parent joint and the units for the position coordinates are centimeters.

Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics, but just for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints in the inverse kinematics chain, the inverse kinematics might not function as you expect. For example, if you set the rotation of the elbow, the hand inverse kinematics position won't end up in the right place.

Note: For information about avatar joint standards, see the *General Rigging Concepts* section in [Creating Avatars](https://wiki.highfidelity.com/wiki/Create_avatars).

### Function

`setJointTranslation(jointName, translation)` `setJointTranslation(jointIndex, translation)`

### Arguments

**jointName:string**: The joint name whose position will be set. For the list of joint names, use [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)).

**jointIndex:int**: The index of the joint whose position will be set. The joint index of a specific joint is its position in the array returned by [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames\(\)). When looping over joints in a for loop, using the jointIndex is slightly faster than looking the joint up by name.

**translation: vec3**: The new position. The position coordinates specified are relative to the specified joint's parent joint and are in centimeters.

### Examples

This example sets the position of the "Neck" joint to a new position of 0, 25, 0.

```
var newTranslation = {x: 0, y: 25, z: 0}
MyAvatar.setJointTranslation("Neck", newTranslation);

```

After running the example, the avatar's head should appear to be about 25 centimeters above where it was. Depending on the avatar you are using, you will either see a gap between the head and body or you will see the neck stretched as in the image below.

![](stretched-neck.png)

To restore the default translation, use [doc:clearjointsdata clearJointsData()].



## setSkeletonOffset()<a id="m47"></a>

The `skeletonOffset` property specifies a position offset for the rendering of the avatar model. For example, a model that appears to be raised off the ground slightly would have a `skeletonOffset` of {x: 0, y: 0.1: z: 0}.

`setSkeletonOffset()` is used to set the `skeletonOffset`.

### Function

`setSkeletonOffset(offsetPosition)`

### Arguments

**offsetPosition:vec3**: The position to offset the model rendering

### Examples

For example if you wanted to raise the model off the ground slightly, you could set the `skeletonOffset` to {x: 0, y: 0.1: z: 0}.

```
MyAvatar.setSkeletonOffset({x: 0, y: 0.1: z: 0});
```
