---
title: 'Create an Avatar with Flow'
taxonomy:
    category: docs
---
## Overview

##### [**Flow**](https://hifi-content.s3.amazonaws.com/luis/flowFiles/flow.js) is a script that simulates physics on avatars' hair, clothes, and body parts.
##### [**Flow App**](https://hifi-content.s3.amazonaws.com/luis/flowFiles/flowApp.js) is an interface application for visually debugging and configuring **Flow.** 
##### **Flow** will only animate avatars that contain **Flow Threads**.
##### A **Flow Thread** is a set of threads with at least one joint that comply with the following rules:
1.  The first joint is connected to an existing avatar joint (“Hips” for example).
2.  Every “Flow Joint” should be named **flow\_[TYPE]\_[INDEX]**.
    * **TYPE** defines a group of joints that share a common physics setup and **INDEX** is an integer. For example, if the thread is used to simulate a skirt, all the “skirt” joints should be named flow_skirt_01, flow_skirt_02, etc.
3. Added support for SIM joints (Mikomiko avatar) with names **sim[TYPE][INDEX]**
![Flow Thread](flowthread.png)
## Display Panel
##### This panel helps visually debug your Flow script. 
![Display Panel](displaypanel.png)
* **Avatar**: Displays/Hides the avatar mesh.
* **Collisions**: Activates/Deactivates collisions.
* **Debug**: Displays/Hides the debug shapes.
* **Solid**: Solid/Wireframe display for debug shapes.

## Joints Panel
##### This panel manages all motion related to joints. 
![Joints Panel](jointspanel.png)
- **Radius**: Segments and knots thickness (collisions).
- **Gravity**: Y-value of the gravity vector.
- **Stiffness**: Amount of stiffness for every thread.
- **Damping**: Amount of joint oscillation.
- **Inertia**: Rotational inertia multiplier.
- **Delta**: Delta time for every integration step.

## Collisions Panel
##### This panel manages collision spheres.
Every collision sphere is positioned using an existing avatar joint and offset.
![Collisions Panel](collisionpanel.png)
- **Radius**: Collision sphere radius.
- **Offset**: Y-value of the offset vector along the joint.

*The maximum amount of collisions is defined by the global COLLISION_SHAPES_LIMIT = 4.*

## JSON Panel
##### This panel displays the output data structure with the final configuration for the current setup. 
![JSON Panel](jsonpanel.png)
This data can be copied and pasted into the [**Flow**](https://hifi-content.s3.amazonaws.com/luis/flowFiles/flow.js) script between the lines:
```javascript
// CUSTOM DATA STARTS HERE
 
Erase existing code and paste new code here

// CUSTOM DATA ENDS HERE
```
The modified **Flow** script will be able to run independently loading the new configuration.

## Avatars
[This is a list of avatars](https://hifi-content.s3.amazonaws.com/jimi/avatar/Mannequin/hairTest/mannequinHairTest8.fst) rigged appropriately to use with **Flow**.


