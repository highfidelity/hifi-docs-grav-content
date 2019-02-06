# **Customizing Avatar Animations**

By default, avatars in High Fidelity will use the built in standard set of animations.  However these animations are generic and masculine, which doesn't always fit the character of some avatars, such as dainty ballerinas or cartoon foxes.  It is possible to modify the avatar animations by inserting new animations to replace existing ones.  Also, advanced technical animators can adjust the animation state machine and the interpolation and blend parameters, for truly unique avatars.

This document does detail how to create animations in the proper format, However here are some guidelines.

- Animations must have the High Fidelity standard joint names
- Animations must have the High Fidelity standard joint orientations (y down the bone)
- Keyframes must have keyframes for every joint at the uniform interval of 30 frames per second.

See this [document](https://docs.highfidelity.com/create-and-explore/avatars/avatar-standards) for more information about our avatar standards.

This document lists several ways to modify the avatar animations, from the easiest but least flexible, to the hardest but most flexible approach. 

## Override Animation (Script)

The script call [MyAvatar.overrideAnimation](https://docs.highfidelity.com/api-reference/myavatar#m35) can be used to play any animation on the current avatar.  It will smoothly interpolate from whatever pose the avatar is currently in into the start frame of the provided animation.

If the animation is hosted remotely, you can use [AnimationCache.prefetch](https://docs.highfidelity.com/api-reference/animation-cache) to ensure that the animation is in-memory before playback.  Otherwise you might see a few frames of t-pose as the animation is downloaded from the remote source.

This animation will take complete control over all the avatars joints.  Inverse Kinematics of the hands and head for HMD users will be disabled.

[MyAvatar.restoreAnimation](https://docs.highfidelity.com/api-reference/myavatar#m39) can be used to stop the override animation and restore the avatar to its normal set of animations.

## Override Role Animation (Script)

The default animation state machine has a list of specific animations or **Roles** that can be overridden.  The MyAvatar.getAnimationRoles()script call can be used to get the list of roles for the current avatar.   Each one of these roles can be replaced by a custom animation via the [MyAvatar.overrideRoleAnimation](https://docs.highfidelity.com/api-reference/myavatar#overrideroleanimation) call.

Here is the current list of roles followed by a brief description.

- **rightHandGraspOpen** - When hand controller trigger is not squeezed.
- **rightHandGraspClosed** - When hand controller trigger is fully squeezed.
- **rightIndexPointOpen** - Point gesture.
- **rightIndexPointClosed** - Point gesture with trigger squeezed.
- **rightThumbRaiseOpen** - Thumbs up gesture.
- **rightThumbRaiseClosed** - Thumbs up gesture with trigger squeezed.
- **rightIndexPointAndThumbRaiseOpen** - Simultaneous thumbs up and point gesture.
- **rightIndexPointAndThumbRaiseClosed** - Simultaneous thumbs up and point gesture, with trigger squeezed.
- **leftHandGraspOpen** - When hand controller trigger is not squeezed.
- **leftHandGraspClosed** - When hand controller trigger is fully squeezed.
- **leftIndexPointOpen** - Point gesture.
- **leftIndexPointClosed** - Point gesture with trigger squeezed.
- **leftThumbRaiseOpen** - Thumbs up gesture.
- **leftThumbRaiseClosed** - Thumbs up gesture with trigger squeezed.
- **leftIndexPointAndThumbRaiseOpen** - Simultaneous thumbs up and point gesture.
- **leftIndexPointAndThumbRaiseClosed** - Simultaneous thumbs up and point gesture, with trigger squeezed
- **idleStand** - Standing still, not talking.
- **idleTalk** - Standing still, but avatar is talking.
- **walkFwdShort** - walking forward at 0.5 m/s
- **walkFwdNormal** - walking forward at 1.5 m/s
- **walkFwdRun** - walking forward at 4.5 m/s
- **idleToWalkFwd** - short transition from standing idle to walking forward.
- **walkBwdShort** - walking backward at 0.6 m/s
- **walkBwdNormal** - walking backward at 1.45 m/s
- **turnLeft** - standing turning in place animation
- **turnRight** - standing turning in place animation
- **strafeLeftShort** - sidestep at 0.2 m/s
- **strafeLeftNormal** - sidestep at 0.65 m/s
- **strafeRightShort** - sidestep at 0.2 m/s
- **strafeRightNormal** - sidestep at 0.65 m/s
- **fly** - flying idle
- **takeoffStand** - standing jump takeoff
- **takeoffRun** - running jump takeoff
- **inAirStandPreApex** - standing jump in air on the way upward towards the jump apex.
- **inAirStandApex** - standing jump in air at apex of the jump.
- **inAirStandPostApex** - standing jump in air on the downward arc of the jump.
- **inAirRunPreApex** - running jump in air on the way upward towards the jump apex.
- **inAirRunApex**- running jump in air at apex of the jump.
- **inAirRunPostApex** - running jump in air on the downward arc of the jump.
- **landStandImpact** - standing land
- **landStand** - standing land
- **landRun** - running land

The standard animation FBX files for these roles can be found in the High Fidelity source code repository on [github](https://github.com/highfidelity/hifi/tree/master/interface/resources/avatar/animations).

## Custom Animation Graph JSON

When wearing an avatar in High Fidelity, the animation system must blend and layer a series of animations from FBX files as well as perform Inverse Kinematics on the joints to best match the head and hand sensors.  The way these animations are blended is not hard coded, but rather a data file specifies exactly which animations to play and how they are blended.  It also determines the order of operations, such that operations like Inverse Kinematics occur after the rest of the body has been animated by traditional means.  By default, every avatar uses the same Animation Graph file.  However, advanced users and content creators can specify their own Anim Graph definition file.

This file is in the JSON file and it contains a hierarchical tree of nodes similar to Natural Motion's [Morpheme](http://www.naturalmotion.com/middleware/morpheme) or Unity's [Mecanim](https://docs.unity3d.com/462/Documentation/Manual/MecanimAnimationSystem.html).

The specific contents of this file are not completely documented, but there is some info [here](https://highfidelity.atlassian.net/wiki/spaces/AT/pages/316702727/Avatar+Animations+with+the+AnimNode+System). However, one of the simplest changes a content creator can perform is to substitute the FBX urls with their own custom animations.

For reference here is the current default [avatar-animation.json](https://github.com/highfidelity/hifi/blob/master/interface/resources/avatar/avatar-animation.json) file.

In the Settings > Avatar dialog the Avatar animation JSON field can be used to change the animation graph of the current avatar.

![img](https://lh3.googleusercontent.com/931CngYzTpHtxTVOwHmf8WiunUSLA1ZbqJxyaPnZLHEmsZ6csCvR3KFc2rUFJ-o5vixXA0asNQC3VuuFk09XTQ1j-jYV38L80aPmCdgkLH6r0-EpAwR16vk0xi4WGcKgLxWD8YsQ)

Secondly, a animGraphUrl entry can be added to a specific avatar's FST file.  For example:

​    animGraphUrl =[ https://s3.amazonaws.com/hifi-public/tony/scoot-animation.json](https://s3.amazonaws.com/hifi-public/tony/scoot-animation.json)

The above scoot-animation.json file replaces the idle and walk animations with a sitting pose.  It is intended to show an example of replacing some but not all of an avatar's default animations.

Here is an example of the Matthew avatar which uses this technique to change the animGraphUrl.  <https://s3.amazonaws.com/hifi-public/tony/matthew-scoot.fst>

[![img](https://lh5.googleusercontent.com/9muKjNDJgW1ZNwDzlBE6K9NXYoHSA0MRGecG9hXhkKEqUVxb1OhXAXug5sQNoA1S45aYCbMKgR1frWoL8ANahYtRW06e5D9bJghAoPiFcqxdxQjlqCCXuK_95JVRzBQo3eIhlVtQ)](https://s3.amazonaws.com/hifi-public/tony/matthew-scoot.fst)



# **Avatar Animations with the AnimNode System**

## Overview

The movement of an avatar is determined by a complex blend of procedural animation, pre-recorded animation clips and inverse kinematics.  This blend is calculated every frame to ensure that the avatar body follows physics and controller input as rapidly as possible.  It must handle animation for desktop users, HMD users and users wearing a full set of Vive trackers.  Therefore, it must be configured on the fly as sensors are added and removed from the system.  Also, it should be open to extensions so unique animations and avatar configurations are possible.

To solve the above problems, we've created the AnimNode system.

The AnimNode system is a graph of nodes.  Some nodes are output only, such as pre-recorded animation clips.  Other nodes produce output by processing nodes below it in the graph and blending the results together.  By manipulating the node hierarchy, certain animation actions will occur before or after other animation actions.  Also, the node parameters can be dynamically changed at runtime.  This flexibility is necessary for the High Fidelity Avatar System to achieve good visual results.

This definition of an AnimNode graph is stored in a JSON file, and is loaded during Avatar initialization.  We provide a default avatar-animation.json, however, this graph can be overridden on a per avatar basis, via the animGraphUrl field in the FST file.

## Context

The AnimNode system sits in between high level avatar code, such as MyAvatar and Rig and the rendering engine.  The result of the AnimNode evaluation is sent directly to the renderer.

The high level avatar code, controls the AnimNode system through a key-value map called the AnimVarientMap also known as animVars.  Each key is a string, and each value is a basic type, such as a float or vector.

By dynamically changing the animVars, the avatar code controls the animation system.

## Key Concept

The AnimNode system operates like an expression parse tree.  Programming language interpreters such as Python parse text expressions and represent them internally with a tree data structure.   For example the following expression: 4 + 3 * 7 - (5 / (3 + 4)) + 6, can be represented by the following parse tree.

![img](https://lh4.googleusercontent.com/k1kvMu_zpskBb2fQaSxFvBQvvwhiXnY3k2vUKLyXQGiDR10z8rMstXIUwMnSgXBSDoMQbEhKD-GtCR85RD1cqR1xC4f-5df0S8VnZMhAqdGDn4nHFIiek4YGxsyn8JP3GRPyqpGq)

This parse tree can then be evaluated at runtime to compute the actual value. In this tree, the leaf nodes are values and interior nodes are operations that combine two or more subtrees and produce a new value.  The tree is evaluated recursively in depth first order until there is a single value remaining, which should be the result of the entire expression: 30.2957142. 

In the expression case, the output value of each node is a floating point number, and operations can be implemented simply by evaluating each subtree then combining them with an arithmetic operation, such as addition or multiplication.

The AnimNode system works on a similar concept.  Except the value of each node contains all of the avatar's joint translations and rotations.  Leaf nodes can be static avatar poses, such as the t-pose or can be a single frame of an animation clip.  Interior nodes can perform operations such as blending between two or more subtrees, or combining the upper body of one animation with the lower body of another.

## AnimNode Interface

The main interface that every type of animation node must implement is the following:

const AnimPoseVec& evaluate(const AnimVariantMap& animVars,                            const AnimContext& context,                            float dt,                            Triggers& triggersOut);

### **Node Output**

AnimPoseVec is defined as a std::vector<AnimPose>, this vector should contain one AnimPose structure (position, rotation, scale) for every joint in the avatar.

### **Node Input**

AnimVariantMap is essentially a read-only std::map<QString, AnimVariant>, where each AnimVariant can be any basic type such as: bool, int, float, vec3, quaternion or string.

AnimContext is just a read-only structure of debugFlags and useful transforms.

dt is the amount of time in seconds elapsed since the last time this AnimNode graph was evaluated.

Triggers is a std::vector<QString>, it is only used to communicate when animations have ended or have looped, which might be important to the higher level avatar code.

## Node Types

Here is a brief overview of each type of node currently in use.

### **AnimDefaultPose**

The most basic node possible, returns the Default Pose of the avatar.

### **AnimClip**

This node holds a single FBX animation file.  Each time the animation is evaluated the internal time is incremented by dt.

The following variables can be specified in the JSON definition file.  All of them except url can be changed in real time using animVars.

- **url** - (string) A url to an FBX file.
- **startFrame** - (float) Starting frame of the animation.  (one frame is 1/30th of a second)
- **endFrame** - (float) End frame of the animation.
- **timeScale** - (float) Used to speed up or slow down the playback speed.
- **loopFlag** - (float) When set the animation loop from the end back to the beginning of the animation.
- **mirrorFlag** - (float) When set the rotations and translations of each joint will be mirrored and swapped to the other side of the avatar's body.

### **AnimStateMachine**

This is the main mechanism for playing and switching animations.  At any given time the state machine is evaluating/playing only one of its children animations.  When directed to by an animVar trigger it will change from one child animation to another.  This transition is smoothed using interpolation so it doesn't pop.  How this interpolation is done can be specified in the JSON definition file.

#### **States and Transitions**

Each child node should be associated with a state.  A state contains the following fields:

- **id** - (string) Name of the child node associated with this state.

- **interpTarget** - (float) When the state machine transitions into this state, this is the frame which will begin playing after the interpolation is completed.

- **interpDuration** - (float) When the state machine transitions into this state, this is how long the interpolation will take, in frames. 

- **interpType** - (string) Several ways to interpolate between the states.  Example:  "interpType": "snapshotPrev",

  

- - USAGE:  optionally put this flag in the animation.json state description above the "transitions" section.
  - **SnapshotBoth**: Stores two snapshots, the previous animation before interpolation begins and the target state at the interTarget frame. Then during the interpolation period the two snapshots are interpolated to produce smooth motion between them
  - **SnapshotPrev:** Stores a snapshot of the previous animation before interpolation begins. However the target state is evaluated dynamically. During the interpolation period the previous snapshot is interpolated with the target pose to produce smooth motion between them. This mode is useful for interping into a blended animation where the actual blend factor is not known at the start of the interp or is might change dramatically during the interp.

- **transitions** - When in this state, this list of transitions is checked every frame.  If the "var" condition evaluates to true then the state machine will begin to interpolate to the destination state.

- - **var** - (string) if the given animVar is true, 
  - **state** - (string) destination state to interpolate to.

### **AnimBlendLinear**

This node can be used to dynamically blend between its two or more children.

- **alpha** - (float) number between (0, n - 1) where n is the number of children.  When alpha is equal to the child index, the node will return that child unaltered.  When alpha is between two child indexes it will blend between the children.  For example: if a node has two children.  0 will output the first child unaltered. 0.25, will blend between the two children 3/4ths of the first child and 1/4th of the second.

### **AnimBlendLinearMove**

Synced linear blend between two AnimNodes, where the playback speed of he animation is timeScaled to match movement speed.  This is typically used for walk cycle animations. Each child animation is associated with a characteristic speed.  This defines the speed of that animation when played at the normal playback rate, 30 frames per second.  The user also specifies a desired speed. This desired speed is used to timescale the animation to achieve the desired movement velocity.

Blending is determined by the alpha parameter.  If the number of children is 2, then the alpha parameters should be between 0 and 1. The first animation will have a (1 - alpha) factor, and the second will have factor of alpha.

- **alpha** (float) - blending parameter
- **desiredSpeed** (float) - desired movement speed.
- **characteristicSpeeds** (float[]) - the speed of each child animation.

NOTE: future work should automatically compute the alpha based on the desiredSpeed, but currently they both must be set.

### **AnimOverlay**

Overlay nodes are used combine two child animations in a more flexible way then AnimBlendLinear.  In addition to a single alpha crossfade value, there is also a BoneSet value, which essentially a per bone mask.  One common use case is to layer two animations together such that one part of the avatar body is animated using one animation and the rest of the body is animiated with another animation.  For example: the upper body is pointing, but the lower body is running, to create a pointing while running animation.

NOTE: overlay nodes use a specialized interface that allows the first child of the overlay to observe the values of the second child.  This is used mainly by the AnimInverseKinematics node so it can combine IK with animation.

const AnimPoseVec& overlay(const AnimVariantMap& animVars,                           const AnimContext& context,                           float dt,                           Triggers& triggersOut,                           const AnimPoseVec& underPoses)

Note: In hindsight this interface should probably be removed, and the AnimInverseKinematics node should just have a single child.

### **AnimManipulator**

When used in combination with an AnimOverlay node (as the first child).  It can be used to procedurally manipulate (rotate, translate) a set of joints.  For example: rotating the eyes to look at an object.

It contains a list of jointVars which contain the following fields

- **jointName** (string) - name of joint to manipulate

- **rotationType** (int) - One of the below values:

- **translationType** (int) - One of the below values:

- - Absolute (0) - The rotation is specified as a quaternion in Rig space not relative to its parent joint.
  - Relative (1) - The rotation is specified as a quaternion relative to the parent joint rotation.
  - UnderPose (2) - The rotation is unchanged from the underpose.  (i.e. the second child underneath the Anim Overlay)
  - Default (3) - The rotation is unchanged from the avatar's default pose. a.k.a. t-pose.

- **rotationVar** (string) - The animVar identifier used to control the rotation dynamically.

- **translationVar** (string) - The animVar identifier used to control the translation dynamically.

### **AnimInverseKinematics**

This is more completely documented here [The High Fidelity Inverse Kinematics System](https://highfidelity.atlassian.net/wiki/spaces/AT/pages/197722166/The+High+Fidelity+Inverse+Kinematics+System)

## Default AnimNode Graph

This is a graphical representation of the current graph used for High Fidelity.

![img](https://lh6.googleusercontent.com/gcM5el5X2_IYiGxu_JCDQMu7tRhO0Ij-iTubsR_s02wO_pDRA8RLA9ZjYA8WXssXCEuAyi-DYlOMoUq-I2wBqizuQvVFcsQo8LPrT90vZ17d81IEzbyc_PY8zNgpeIOu7NMN3uui)

It is quite large, but the major sections are detailed below:

### **User Anim StateMachine**

At the root of the graph is a AnimStateMachine node.  This is used to implement the [MyAvatar.overrideAnimation()](https://docs.highfidelity.com/api-reference/namespaces/myavatar#.overrideAnimation) JavaScript API.  When a user calls overrideAnimation, we load up the second node, which is an AnimClip node, with the desired animation.  Then we trigger a state change from the first state/child to the second.  By setting the "userAnimA" animVar to true.  The avatar should not pop during this change, due to the interpolation that occurs during the transition.  Similarly, [MyAvatar.restoreAnimation()](https://docs.highfidelity.com/api-reference/namespaces/myavatar#.restoreAnimation) will switch back to the first state/child.

### **IK Overlay**

Next down the chain, there is an AnimOverlay node that blends an AnimInverseKinematics node with the rest of the graph.  You'll notice that because IK is lower in the graph then the User AnimStateMachine.  This is why IK is not performed when playing user animations.  Also the alpha parameter of this AnimOverlay node can be used to enable or disable IK, in fact this is how the "Developer > Avatar > Enable Inverse Kinematics" menu is implemented by setting the "ikOverlayAlpha" to 0 or 1.

### **Hand Overlays**

Further down the graph, we have the hand AnimOverlay nodes.  These are used to bring in hand animations.  By default the avatars hands should animate normally, but when a hand controller is enabled we want to transition into hand poses that are driven by the hand controller.  The "rightHandOverlayAlpha" and "leftHandOverlayAlpha" anim vars are used to blend in these hand animations.

### **Hand StateMachines**

When using the Oculus Touch hand controller we can detect pointing or thumbs up gestures.  We use an AnimStateMachine to implement these gestures.  Also, when the hand controller trigger is pulled we want the avatar fingers to curl in reaction.  We use an AnimLinearBlend node to implement the grasping animation.  If you look at the [squeezeHands.js](https://github.com/highfidelity/hifi/blob/master/scripts/system/controllers/squeezeHands.js), you can see exactly how we set animVars from JavaScript that directly drive the hand AnimStateMachine and AnimLinearBlend nodes for the hands.

### **Main StateMachine**

The main AnimStateMachine has 16 states.  The transitions are triggered by C++ code, specifically [Rig::computeMotionAnimationState](https://github.com/highfidelity/hifi/blob/master/libraries/animation/src/Rig.cpp#L644), based on the velocity and other parameters from the physics CharacterController.  We use animVars such as "isMovingForward", "isMovingRight" and "isTurningLeft" to drive the transitions between these animations.

### **Move Blends**

Underneath the main StateMachine are several AnimBlendLinearMove nodes.  The most complex of which is the walkFwd node, which has three AnimClip children.  These are three walk cycle animations, walk slow, walk fast and running.  The C++ code analyzes the current speed of the avatar physics body and properly sets the animVars which control the alpha and desiredSpeed parameter of this node.  When it is tuned properly the system will smoothly blend between these walk cycles to minimize foot sliding and result in realistic walk and run animations, even when accelerating and decelerating.