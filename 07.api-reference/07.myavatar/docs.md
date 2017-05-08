---
title: 'MyAvatar'
taxonomy:
    category:
        - docs
---

# MyAvatar.collisionWithEntity()

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