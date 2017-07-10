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
| MyAvatar.addAnimationStateHandler(QScriptValue,QScriptValue) |
| MyAvatar.addThrust(glm::vec3)            |
| MyAvatar.attach(QString)                 |
| MyAvatar.attach(QString,QString)         |
| MyAvatar.attach(QString,QString,glm::vec3) |
| MyAvatar.attach(QString,QString,glm::vec3,glm::quat) |
| MyAvatar.attach(QString,QString,glm::vec3,glm::quat,float) |
| MyAvatar.attach(QString,QString,glm::vec3,glm::quat,float,bool) |
| MyAvatar.attach(QString,QString,glm::vec3,glm::quat,float,bool,bool) |
| MyAvatar.attach(QString,QString,glm::vec3,glm::quat,float,bool,bool,bool) |
| MyAvatar.centerBody()                    |
| MyAvatar.clearAvatarEntity(QUuid)        |
| MyAvatar.clearIKJointLimitHistory()      |
| MyAvatar.clearJointData(QString)         |
| MyAvatar.clearJointData(int)             |
| MyAvatar.clearJointsData()               |
| MyAvatar.clearPinOnJoint(int)            |
| MyAvatar.clearScaleRestriction()         |
| MyAvatar.decreaseSize()                  |
| MyAvatar.detachAll(QString)              |
| MyAvatar.detachAll(QString,QString)      |
| MyAvatar.detachOne(QString)              |
| MyAvatar.detachOne(QString,QString)      |
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
| MyAvatar.getAnimationRoles()             |
| MyAvatar.getAttachmentData()             |
| MyAvatar.getAttachmentsVariant()         |
| MyAvatar.getAvatarEntityData()           |
| MyAvatar.getCharacterControllerEnabled() |
| MyAvatar.getClearOverlayWhenMoving()     |
| MyAvatar.getControllerLeftHandMatrix()   |
| MyAvatar.getControllerRightHandMatrix()  |
| MyAvatar.getDataRate()                   |
| MyAvatar.getDataRate(QString)            |
| MyAvatar.getDefaultEyePosition()         |
| MyAvatar.getDefaultJointRotation(int)    |
| MyAvatar.getDefaultJointTranslation(int) |
| MyAvatar.getEnableMeshVisible()          |
| MyAvatar.getEyePosition()                |
| MyAvatar.getFullAvatarModelName()        |
| MyAvatar.getFullAvatarURLFromPreferences() |
| MyAvatar.getHMDLeanRecenterEnabled()     |
| MyAvatar.getHandState()                  |
| MyAvatar.getHeadDeltaPitch()             |
| MyAvatar.getHeadFinalPitch()             |
| MyAvatar.getHeadFinalRoll()              |
| MyAvatar.getHeadFinalYaw()               |
| MyAvatar.getHeadPosition()               |
| MyAvatar.getIKErrorOnLastSolve()         |
| MyAvatar.getJointIndex(QString)          |
| MyAvatar.getJointNames()                 |
| MyAvatar.getJointPosition(QString)       |
| MyAvatar.getJointPosition(int)           |
| MyAvatar.getJointRotation(QString)       |
| MyAvatar.getJointRotation(int)           |
| MyAvatar.getJointRotations()             |
| MyAvatar.getJointTranslation(QString)    |
| MyAvatar.getJointTranslation(int)        |
| MyAvatar.getLeftHandPose()               |
| MyAvatar.getLeftHandPosition()           |
| MyAvatar.getLeftHandTipPose()            |
| MyAvatar.getLeftHandTipPosition()        |
| MyAvatar.getLeftPalmPosition()           |
| MyAvatar.getLeftPalmRotation()           |
| MyAvatar.getNeckPosition()               |
| MyAvatar.getOrientationForAudio()        |
| MyAvatar.getOrientationVar()             |
| MyAvatar.getParentID()                   |
| MyAvatar.getParentJointIndex()           |
| MyAvatar.getPositionForAudio()           |
| MyAvatar.getRawDriveKey(DriveKeys)       |
| MyAvatar.getRightHandPose()              |
| MyAvatar.getRightHandPosition()          |
| MyAvatar.getRightHandTipPose()           |
| MyAvatar.getRightHandTipPosition()       |
| MyAvatar.getRightPalmPosition()          |
| MyAvatar.getRightPalmRotation()          |
| MyAvatar.getSensorToWorldMatrix()        |
| MyAvatar.getSimulationRate()             |
| MyAvatar.getSimulationRate(QString)      |
| MyAvatar.getSkeleton()                   |
| MyAvatar.getSkeletonOffset()             |
| MyAvatar.getSnapTurn()                   |
| MyAvatar.getTargetAvatarPosition()       |
| MyAvatar.getTargetScale()                |
| MyAvatar.getThrust()                     |
| MyAvatar.getTrackedHeadPosition()        |
| MyAvatar.getUpdateRate()                 |
| MyAvatar.getUpdateRate(QString)          |
| MyAvatar.goToLocation(QVariant)          |
| MyAvatar.goToLocation(glm::vec3)         |
| MyAvatar.goToLocation(glm::vec3,bool)    |
| MyAvatar.goToLocation(glm::vec3,bool,glm::quat) |
| MyAvatar.goToLocation(glm::vec3,bool,glm::quat,bool) |
| MyAvatar.increaseSize()                  |
| MyAvatar.isAway                          |
| MyAvatar.isDriveKeyDisabled(DriveKeys)   |
| MyAvatar.isJointDataValid(QString)       |
| MyAvatar.isJointDataValid(int)           |
| MyAvatar.newCollisionSoundURL(QUrl)      |
| MyAvatar.overrideAnimation(QString,float,bool,float,float) |
| MyAvatar.overrideRoleAnimation(QString,QString,float,bool,float,float) |
| MyAvatar.pinJoint(int,glm::vec3,glm::quat) |
| MyAvatar.removeAnimationStateHandler(QScriptValue) |
| MyAvatar.resetLastSent()                 |
| MyAvatar.resetSensorsAndBody()           |
| MyAvatar.resetSize()                     |
| MyAvatar.restoreAnimation()              |
| MyAvatar.restoreRoleAnimation(QString)   |
| MyAvatar.restrictScaleFromDomainSettings(QJsonObject) |
| MyAvatar.sendAvatarDataPacket()          |
| MyAvatar.sendIdentityPacket()            |
| MyAvatar.sensorToWorldMatrix.r0c0        |
| MyAvatar.setAbsoluteJointRotationInObjectFrame(int,glm::quat) |
| MyAvatar.setAbsoluteJointTranslationInObjectFrame(int,glm::vec3) |
| MyAvatar.setAnimGraphOverrideUrl(QUrl)   |
| MyAvatar.setAnimGraphUrl(QUrl)           |
| MyAvatar.setAttachmentData(QVector<AttachmentData>) |
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
| MyAvatar.setEnableMeshVisible(bool)      |
| MyAvatar.setHMDLeanRecenterEnabled(bool) |
| MyAvatar.setHandState(char)              |
| MyAvatar.setJointData(QString,glm::quat,glm::vec3) |
| MyAvatar.setJointData(int,glm::quat,glm::vec3) |
| MyAvatar.setJointMappingsFromNetworkReply() |
| MyAvatar.setJointRotation(QString,glm::quat) |
| MyAvatar.setJointRotation(int,glm::quat) |
| MyAvatar.setJointRotations(QVector<glm::quat>) |
| MyAvatar.setJointTranslation(QString,glm::vec3) |
| MyAvatar.setJointTranslation(int,glm::vec3) |
| MyAvatar.setJointTranslations(QVector<glm::vec3>) |
| MyAvatar.setModelURLFinished(bool)       |
| MyAvatar.setOrientationVar(QVariant)     |
| MyAvatar.setParentID(QUuid)              |
| MyAvatar.setParentJointIndex(ushort)     |
| MyAvatar.setRawJointData(QVector<JointData>) |
| MyAvatar.setSessionUUID(QUuid)           |
| MyAvatar.setSkeletonOffset(glm::vec3)    |
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



# MyAvatar.collisionWithEntity()<a id="e1"></a>

The `collisionWithEntity()` event is sent when the avatar collides with an entity.

## Event

`collisionWithEntity(collision)`

## Arguments

**collision: Collision**: Collision data

## Examples

This example prints a line to the debug line each time the avatar collides with an entity.

```
MyAvatar.collisionWithEntity.connect(function(collision){
  print ("The avatar collided with an entity.");
});
```



# addAnimationStateHandler()

## Function or Event

`addAnimationStateHandler(QScriptValue,QScriptValue) // Return value`

## Arguments

**QScriptValue:class**: description

**QScriptValue:class**: description

## Returns

**name:class**: description

## Examples

*Stand-alone (or close as possible) examples showcasing the function*

```
addAnimationStateHandler(QScriptValue,QScriptValue);
```



# attach()

Your avatar is your in-world representation of you. One way to customize your avatar is to attach models to it. For example, you can give your avatar a hat to wear, a guitar to hold, or a surfboard to stand on.

The `attach()` function is used to attach models to your avatar.

Note: Attached models are models only. They are not [entities](https://wiki.highfidelity.com/wiki/EntityItemProperties) and can not be manipulated using the entities API, nor can you use `attach` to attach an entity (such as a sphere or a box) to the avatar.



## Function

`attach(modelURL, jointName, translation, rotation, scale, isSoft)`

## Arguments

**modelURL:string**: The URL to the model you want to attach. Models can be .FBX or .OBJ format.

**jointName:string**: The joint name for the part of MyAvatar where the object will be attached. For the list of joint names, use [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames()).

**translation: object**: A JavaScript object which takes x, y, and z name-value pairs specifying the translation of the attached object relative to the named joint position

**rotation: object**: A JavaScript object which takes x, y, z, and w name-value pairs specifying the rotation of the attached object

**scale: float**: The scale of the object to be attached

**isSoft: bool**: If the model has a skeleton, set this to `true` so that the bones of the attached model's skeleton will be rotated to fit the current avatar's pose. `isSoft` is used, for example, to have clothing that moves with the avatar. When `true`, the `translation`,`rotation` and `scale` parameters are ignored.

## Examples

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





# clearJointData()

Joints are the building blocks of skeletons and are their points of articulation. You can manipulate the avatar's joints to force the avatar into a specific pose by setting the joint data, for example, by using [setJointData()](https://wiki.highfidelity.com/wiki/SetJointData()). Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics.

`clearJointData()` is used restore all motion from the default animation system including inverse kinematics for a specified joint.



## Function

`clearJointData(jointName)` `clearJointData(jointIndex)`

## Arguments

**jointName:string**: The joint name whose data will be cleared. For the list of joint names, use [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames()).

**jointIndex:int**: The index of the joint whose data will be cleared. The joint index of a specific joint is its position in the array returned by [getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames()). When looping over joints in a for loop, using the jointIndex is slightly faster than looking the joint up by name.

## Examples

In this example, [setJointTranslation()](https://wiki.highfidelity.com/wiki/SetJointTranslation()) is used to set the position of the "Neck" joint to a new position of 0, 25, 0.

```
var newTranslation = {x: 0, y: 25, z: 0}
MyAvatar.setJointTranslation("Neck", newTranslation);

```

After running the above example, the avatar's head appears to be about 25 centimeters above where it was. Depending on the avatar you are using, you would either see a gap between the head and body or you would see the neck stretched.

To return the neck joint to it's default position, you would use `clearJointData()` and specify the "Neck" joint as in the example below.

```
MyAvatar.clearJointData("Neck");
```



# clearJointsData()



Joints are the building blocks of skeletons and are their points of articulation. You can manipulating the avatar's joints to force the avatar into a specific pose by setting the joint data. For example, you can use [setJointData()](https://wiki.highfidelity.com/wiki/SetJointData()) to set the rotation and translation of a specified joint. Setting joint data completely overrides/replaces all motion from the default animation system including inverse kinematics for the specified joint.

`clearJointsData()` is used restore all motion from the default animation system including inverse kinematics for all joints.



## Function

`clearJointsData()`

## Arguments

This function has no parameters.

## Examples

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