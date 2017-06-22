---
title: 'Avatar'
taxonomy:
    category:
        - docs
---

Your avatar is your in-world representation of you. The MyAvatar API is used to manipulate the avatar. For example, using the MyAvatar API you can customize the avatar's appearance, run custom avatar animations, change the avatar's position within the domain, or manage the avatar's collisions with other objects. The sections below provide an overview of using the MyAvatar API for these common use cases followed by a brief look at the functions available not covered by the common use cases.

Note: All avatars must be built to specified [standards](https://wiki.highfidelity.com/wiki/Create_avatars). These standards cover skeletal rigging, textures, etc, and it is highly recommended that you review these standards before attempting to script the avatar.

### Changing the Avatar's Appearance

You can change your avatar's appearance by changing the head and body models used, attaching additional models to the avatar, or changing the avatar's size.

### Setting the Avatar's Head and Body Model Properties

The avatar's head and body are separate components.

### Attaching Models to the Avatar

One way to customize your avatar is to attach models to it. For example, you can give your avatar a hat to wear, a guitar to hold, or a surfboard to stand on. You can attach models using [attach()](https://wiki.highfidelity.com/wiki/Attach()) and you can detach models one at a time using [detachOne()](https://wiki.highfidelity.com/wiki/DetachOne()) or detach all models using [detachAll()](https://wiki.highfidelity.com/wiki/DetachAll()).

Note: Attached models are models only. They are not [entities](https://wiki.highfidelity.com/wiki/EntityItemProperties) and can not be manipulated using the entities API, nor can you use `attach()` to attach an entity (such as a sphere or a box) to the avatar.

### Changing the Avatar's Size

Another way to customize your avatar is to change the avatar's scale. The API provides functions for increasing and decreasing the avatar's size ([increaseSize()](https://wiki.highfidelity.com/wiki/IncreaseSize()) and [decreaseSize()](https://wiki.highfidelity.com/wiki/DecreaseSize())) and for resetting the avatar's scale back to one ( [resetSize()](https://wiki.highfidelity.com/wiki/ResetSize())).

### Animating the Avatar

Avatars are animated by default. This animation is driven by animation clips and procedural data. Each avatar has an avatar-animation.json file that defines which animations are used and how they are blended together with procedural data (such as look at vectors, hand sensors etc.). If an avatar-animation.json file is not specified for an avatar, a default avatar-animation.json file is used.

You can override the default animations with your own pre-built animations or by using real-time data from an input device to drive live animation. It is also possible to specify a new set of default animations (including blend rules).

### Animating the Avatar using Pre-built Animations

Animations specified in the avatar-animation.json file are played by default. The animations specified in the avatar-animation.json file are known as animation roles. Animation roles map to easily understandable actions that the avatar can perform, such as "idleStand", "idleTalk", "walkFwd", etc.

When playing a custom animation, you can override all default animation or you can override just the animation for a specific animation role.

- To override all motion from the default animation system including inverse kinematics for hand and head controllers, use [overrideAnimation()](https://wiki.highfidelity.com/wiki/OverrideAnimation()).
- To override only the default animation for a specific animation role, use [overrideRoleAnimation()](https://wiki.highfidelity.com/wiki/OverrideRoleAnimation()).

Note: When using pre-built animation data, it’s critical that the joint orientation of the source animation and target rig are equivalent, since the animation data applies absolute values onto the joints. If the orientations are different, the avatar will move in unpredictable ways. For more information about avatar joint orientation standards, see the *General Rigging Concepts* section in [Creating Avatars](https://wiki.highfidelity.com/wiki/Create_avatars).

You can restore the default animation by using [restoreAnimation()](https://wiki.highfidelity.com/wiki/RestoreAnimation()) or [restoreRoleAnimation()](https://wiki.highfidelity.com/wiki/RestoreRoleAnimation()).

### Animating the Avatar using Real-time Animation Data

The avatar is driven by an FK skeletal rig. Joints are the building blocks of skeletons and are their points of articulation. Each joint can have one or more child joints. A standard rig has a minimum number of 15 joints and can support up to 65 joints. Interface uses the same joint naming convention and hierarchy as [Mixamo](https://www.mixamo.com/) and [Mixamo's Fuse](https://www.mixamo.com/fuse) avatar creator.

You can manipulating the avatar's joints to force the avatar into a specific pose. This allows you to create real-time animation driven by an input device like the mouse/keyboard or a motion capture device. When driving real-time animation, you can specify the starting T-Pose of the character and allow all incoming animation data to be applied to the joints relative to the starting position.

[getJointNames()](https://wiki.highfidelity.com/wiki/GetJointNames()) is used to get the names of all joints used by MyAvatar. Using the joint name, you can get all data for a specified joint's position (both world position using [getJointPosition()](https://wiki.highfidelity.com/wiki/GetJointPosition()) and the joint's position relative to the specified joint's parent joint using [getJointTranslation()](https://wiki.highfidelity.com/wiki/GetJointTranslation())) and rotation using [getJointRotation()](https://wiki.highfidelity.com/wiki/GetJointRotation()). You can also find out if the data you have for a joint is valid ([isJointDataValid()](https://wiki.highfidelity.com/wiki/IsJointDataValid())).

To set joint data directly, use [setJointData()](https://wiki.highfidelity.com/wiki/SetJointData()), [setJointRotation()](https://wiki.highfidelity.com/wiki/SetJointRotation()), [setJointRotations()](https://wiki.highfidelity.com/wiki/SetJointRotations()), [setJointTranslation()](https://wiki.highfidelity.com/wiki/SetJointTranslation()), and [setJointTranslation()](https://wiki.highfidelity.com/wiki/SetJointTranslation()).

Note: Setting joint data completely overrides/replaces the inverse kinematics only for the specified joint. So for example, if you were to procedurally manipulate the finger joints, the avatar's hand and head would still do inverse kinematics properly. However, as soon as you start to manipulate joints that are in the inverse kinematics chain, the inverse kinematics might not function as you would expect. For example, if you use `setJointRotation` to bend the elbow, the hand inverse kinematics position won't end up in the right place.

### Specifying a New Set of Default Animations

When creating an avatar avatar-animation.json can specified or if an avatar does not specify an avatar-animation.json, a default avatar-animation.json file is used.

You can specify a new avatar-animation.json file using `setAnimGraphUrl`.

### Moving the Avatar

### Moving to a Specified Location (Teleporting)

You can move your avatar to a specified position (and orientation) using [goToLocation()](https://wiki.highfidelity.com/wiki/GoToLocation()).

### Moving the Avatar

There are two ways to move the avatar: the "default motor" and the "scripted motor". The default motor is the one driven by pressing the arrow keys. It has a target velocity of 2.5 m/sec when walking and its target velocity ramps up to 30 m/sec when flying. This motor can be controlled by script by generating key-press events (See [Controller API](https://wiki.highfidelity.com/wiki/Controller_API)).

The second motor is the "scripted motor". Its velocity vector and timescale can be set using MyAvatar properties:

- `motorVelocity`: The target velocity of the motor. It can be anything with length less than 500 (defaults to 0,0,0).
- `motorTimescale`: The approximate time it takes for the motor to ramp up to its target velocity. It can be set to anything between 0.005 and infinity. It defaults to 1.0e6, meaning it is disabled. Note that the motor is effectively useless at timescales larger than a few tens of seconds anyway -- a motor that takes 30 seconds to get moving will probably be defeated by the friction of the physics simulation.
- `motorReferenceFrame`: The frame of meaning for the velocity. It can be "camera" (default), "avatar", or"world".

For example, the code for a scripted motor would look something like this:

```
    // set the velocity to be 10 m/sec along Z-axis in the world-frame
    MyAvatar.motorReferenceFrame = "world";
    MyAvatar.motorVelocity = {x: 0, y: 0, z: 10};
    MyAvatar.motorTimescale = 1.0;

    // brake the avatar to a stop
    MyAvatar.motorVelocity = {x: 0, y: 0, z: 0}; // target velocity is zero
    MyAvatar.motorTimescale = 0.01; // get there in very little time

    // disable motor
    MyAvatar.motorTimescale  = 1000000;
```

The two motors can operate at the same time, so they can "fight" for control of the avatar. The default motor has some automatic braking logic that kicks in when the control keys are no longer pressed but that logic is disabled if the scripted motor is in effect. This means that setting the scripted motor's timescale to 500k seconds (instead of 1M) may disable the default motor's brake effect, which would cause the avatar to drift instead of brake.

You can disable the "default motor" so it does not fight with the scripted motor by using the menu options:

- **Developer > Avatar > [X] Enable Default Motor**
- **Developer > Avatar > [X] Enable Scripted Motor**

At this time, toggling these options cannot be done by script.

### Managing Avatar Collisions

`characterControllerEnabled` property is used to manage avatar collisions. If `characterControllerEnabled` is enabled, the avatar has collisions. If it is disabled, it does not.

### Other Common Use Cases

The above sections cover the most common use cases, this section covers additional functions available.

### Eye Position

You can get the point directly between the avatar's eyes using [getEyePosition()](https://wiki.highfidelity.com/wiki/GetEyePosition()). Using this point and ray casting you can easily determine which objects are currently being looked at (a technique that comes in handy when creating look-based interactions in VR).

### Knowing Who You Are Looking At

You can get the position of the avatar that you are currently looking at by using [getTargetAvatarPosition()](https://wiki.highfidelity.com/wiki/GetTargetAvatarPosition()).

### References

Check the High Fidelity source for more information and examples:

- [C++](https://github.com/highfidelity/hifi/)
- [JavaScript Examples](https://github.com/highfidelity/hifi/tree/master/examples)

