---
title: 'Camera'
taxonomy:
    category:
        - docs
---

## Overview

In High Fidelity there is a single camera that provides the main view for the user. This camera can be controlled via scripting using the Camera API. (There is also a mini mirror-view camera, but it is not exposed to the scripting interface.) This document covers the [Camera Properties](https://wiki.highfidelity.com/wiki/Camera_API_Overview#Camera_Properties) and [Camera Modes](https://wiki.highfidelity.com/wiki/Camera_API_Overview#Camera_Modes) and provides a brief overview of how to [script camera movement](https://wiki.highfidelity.com/wiki/Camera_API_Overview#Scripting_Camera_Movement).

### Methods

| Method           | Description                              |
| ---------------- | ---------------------------------------- |
| `computePickRay` | Compute a {PickRay} based on the current camera configuration and the position x,y on the screen. |
| `keepLookingAt`  | Set the camera to continue looking at position `position`. Only works while in `independent` camera mode. |
| `lookAt`         | Set the camera to look at position `position`. Only works while in `independent` camera mode. |
| `stopLookingAt`  | Stops the camera from continually looking at a position that was set with `keepLookingAt` |

### Properties

| `position`     | Vec3     | The position of the camera.              |
| -------------- | -------- | ---------------------------------------- |
| `orientation`  | Quat     | The orientation of the camera.           |
| `mode`         | string   | The current camera mode.                 |
| `cameraEntity` | EntityID | The position and rotation properties of the entity specified by this ID are then used as the camera's position and orientation. Only works when mode is "entity". |
| `frustum`      | Object   | The frustum of the camera.               |

### Camera Modes

Camera modes affect the relative position of the camera to your avatar as well as the default controls for camera movement. The camera can be in one of the following modes:

| Mode                 | String         | Description                              |
| -------------------- | -------------- | ---------------------------------------- |
| **First Person**     | "first person" | The camera is positioned such that you have the same view as the avatar and the camera moves and rotates with the avatar. |
| **Third Person**     | "third person" | The camera is positioned such that you have a view from just behind the avatar. The camera moves and rotates with the avatar. |
| **Mirror**           | "mirror"       | The camera is positioned such that you are looking directly at the avatar. The camera moves and rotates with the avatar. |
| **Independent Mode** | "independent"  | The camera's position and rotation don't change when using the default avatar controls but can be set via scripting to any position or rotation of your choosing. |
| **Entity Mode**      | "entity"       | The camera's position and rotation are set to be the same as the entity's, effectively letting you follow it. |

### Changing the Camera Mode

The camera mode can be changed by:

- Setting the mode property, for example `Camera.mode = "first person"`.
- Using the [setModeString()](https://wiki.highfidelity.com/wiki/SetModeString()) function.
- Selecting **View** from the Interface menus, and then the mode you want to use: **First Person**, **Third Person**, **Mirror**, **Independent Mode** or **Entity Mode**.

### Scripting Camera Movement

For the camera movement to be scripted, the camera must be set to **Independent Mode** or **Entity Mode**.

If the camera is in **Independent Mode**, you can set the camera's position and orientation to that of your choosing by:

- Setting the position and orientation properties directly, for example: `Camera.position = { x: 0, y: 4, z: 0 }`
- Using the [setOrientation()](https://wiki.highfidelity.com/wiki/SetOrientation()) and [setPosition()](https://wiki.highfidelity.com/wiki/SetPosition()) functions to set the orientation and position.
- Using [lookAt()](https://wiki.highfidelity.com/wiki/LookAt()) or [keepLookingAt()](https://wiki.highfidelity.com/wiki/KeepLookingAt()) to specify a point the camera should focus on. You can set the camera to look at a particular point using [lookAt()](https://wiki.highfidelity.com/wiki/LookAt()) or to continuously look at a particular point using [keepLookingAt()](https://wiki.highfidelity.com/wiki/KeepLookingAt()). If you have used [keepLookingAt()](https://wiki.highfidelity.com/wiki/KeepLookingAt()), to stop the camera from pointing at the specified point, use [stopLooking()](https://wiki.highfidelity.com/wiki/StopLooking()).

If the camera is in **Entity Mode**, you can set the camera's position and orientation to that of a specified entity by:

- Setting the `cameraEntity` property to an entity ID. You can use `setCameraEntity()` to set the `cameraEntity` property to a specified [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID). The position and rotation properties of the entity specified by that ID are then used as the camera's position and orientation. For example you could use this to jump between particular viewpoints in a scene by placing an entity in the scene at each viewpoint, and then using a script to change the viewpoint by setting the `cameraEntity` to the ID of the entity at each viewpoint. You can use [getCameraEntity()](https://wiki.highfidelity.com/wiki/GetCameraEntity()) to get the current value of the `cameraEntity` property.



## Camera Events

# modeUpdated()

In Interface the camera view can be set to a number of different modes by selecting **View** and then the mode you want to use: **First Person**, **Third Person**, **Mirror**, **Independent Mode** or **Enity Mode**. The camera mode can also be changed via script using [setModeString()](https://wiki.highfidelity.com/wiki/SetModeString()).

The `modeUpdated` event is sent when the camera viewing mode has been changed.

## Event

`modeUpdated(mode)`

## Arguments

**mode:string**: The string representing the mode the camera has been set to. This can be "first person", "third person", "mirror", "independent", or "entity"

## Examples

This example prints a line to the debug log each time the camera mode changes.

```
Camera.modeUpdated.connect(function(mode){
  print ("Camera mode has changed to: " + mode);
});

```

With this script running, if you are currently in a mode other then third person and then select **View > Third Person**, you would see the following output in the debug log:

```
Camera mode has changed to: third person
```



## Camera Methods

# Camera.lookAt()

In Interface, the camera view can be set to a number of different modes ("first person", "third person", "mirror", "independent", or "entity"). These modes affect the relative position of the camera to your avatar as well as the default controls for camera movement. In "independent" mode the camera's position and rotation don't change when using the default avatar controls but can be set via scripting to any position or rotation of your choosing.

When in "independent" mode, `lookAt()` can be used to rotate the camera so that it is pointed at a specified location.

To change the camera mode to "independent" mode via script, use [setModeString()](https://wiki.highfidelity.com/wiki/SetModeString()) and specify "independent". To change it via Interface, select **View** and then select **Independent Mode**.

## Function

`lookAt(position)`

## Arguments

**position:vec3**: The position to point the camera towards

## Examples

In this example, when the user clicks on an entity, the camera is switched to independent mode using [setModeString()](https://wiki.highfidelity.com/wiki/SetModeString()) and `lookAt` is used to rotate the camera so that it is pointed towards the entity clicked on.

```
function mousePressEvent(event){

  var pickRay = Camera.computePickRay(event.x, event.y);
  var intersection = Entities.findRayIntersection(pickRay);
    if (intersection.intersects) {
      // switch to independent mode
       Camera.mode = "independent";

      // tell the camera to fix it's look at on 
      // position of the entity clicked on
      Camera.lookAt(intersection.properties.position);
   }
}

Controller.mousePressEvent.connect(mousePressEvent);

```



# computePickRay()

Ray casting is a technique used to find the location of objects in a 3D world. Ray casting finds objects by calculating a mathematical ray from a specified origin and in a specified direction and then determining which object or objects the ray has hit. Ray casting can be used to find visible entities in the domain. Both [findRayIntersection()](https://wiki.highfidelity.com/wiki/FindRayIntersection()) and [findRayIntersectionBlocking()](https://wiki.highfidelity.com/wiki/FindRayIntersectionBlocking()) take as input a ray of type [PickRay](https://github.com/highfidelity/hifi/blob/d14820d3ef4328c73e0a9ca271b53e769c87aedb/libraries/shared/src/RegisteredMetaTypes.h).

`computePickRay()` is used to get a ray of type `PickRay`.

## Function

`computePickRay(x, y) // Returns a PickRay`

## Arguments

**x : float**: The x coordinate position on the window used for the `PickRay` origin

**y : float**: The y coordinate position on the window of the `PickRay` origin

## Returns

**ray: PickRay**: An instance of the [PickRay](https://github.com/highfidelity/hifi/blob/d14820d3ef4328c73e0a9ca271b53e769c87aedb/libraries/shared/src/RegisteredMetaTypes.h) registered meta type

## Examples

This example listens for a mouse press event, and when it occurs uses the event's x and y coordinates (the position of the cursor in the window) to compute a `PickRay` using `computePickRay`. (Note: If you are using an HMD (Oculus Rift, etc.), the x and y positions are the cursor position relative to the overlay, but they can have values greater than the overlay width and height or less than 0, indicating the mouse is somewhere outside the overlay. When in HMD mode the overlay has a virtual screen size of 3960x1188 and wraps around the viewer to take up 3/4 of a circle.)

The script then uses [findRayIntersection()](https://wiki.highfidelity.com/wiki/FindRayIntersection()) to see if the ray intersects with an entity. `findRayIntersection()` returns a [RayToEntityIntersectionResult](https://wiki.highfidelity.com/wiki/RayToEntityIntersectionResult) whose `intersects` property is `true` if the ray intersected with an entity. If the ray intersected with an entity, the script prints a message to the debug log.

```
function mousePressEvent(event) {
    var pickRay = Camera.computePickRay(event.x, event.y);
    var intersection = Entities.findRayIntersection(pickRay);
        if (intersection.intersects) {
          print ("You clicked on an entity of type: " + intersection.properties.type);     
        }
};
Controller.mousePressEvent.connect(mousePressEvent);

```

You should see output similar to the following:

```
You clicked on an entity of type: Box
You clicked on an entity of type: Model
You clicked on an entity of type: PolyVox
```



# getCameraEntity()

If the camera is in **Entity Mode**, the camera uses the position and orientation values of the entity specified in the `Camera.cameraEntity` property.

`getCameraEntity()` is used to get the current value of the `cameraEntity` property.

## Function

`getCameraEntity() // Returns an entity ID string`

## Returns

**EntityID: string**: The unique ID of an entity.

## Examples

This example first sets the camera to "entity" mode so that the camera will use the position and orientation values of a specified entity. It then prints the current value of the `cameraEntity` property to the debug log. By default, this value will be `null`. The example then finds the closest entity to the avatar and prints its entity ID to the debug log. Finally, it sets the`cameraEntity` property to the ID of the found entity and prints the updated `cameraEntity` value to the debug log.

```
//Set the camera to entity mode
Camera.setModeString("entity");

// Print the ID of the current camera entity 
print("CameraEntity: " + Camera.getCameraEntity());

// Find the closest entity to the avatar and print the found entity ID
var foundEntity = Entities.findClosestEntity(MyAvatar.position, 100.0);
print ("EntityID: "  + JSON.stringify(foundEntity));

// Set the camera entity to the found entity and then
// print the ID of the current camera entity 
Camera.setCameraEntity(foundEntity);
print("CameraEntity: " + Camera.getCameraEntity());

```

You should see the camera viewpoint change to match that of the nearest entity and you should see output similar to the following:

```
CameraEntity: null
EntityID: "{c5272962-571e-4897-bfd6-a6e0fcfccf1b}"
CameraEntity: {c5272962-571e-4897-bfd6-a6e0fcfccf1b}

```



# getModeString()

In Interface the camera view can be set to a number of different modes by selecting **View** and then the mode you want to use: **First Person**, **Third Person**, **Mirror**, **Independent Mode** or **Enity Mode**. These modes affect the relative position of the camera to your avatar as well as the default controls for camera movement. For example, in **First Person** mode the camera is positioned such that you have the same view as the avatar and the camera moves and rotates with the avatar, while in **Independent Mode** the camera's position and rotation don't change when using the default avatar controls but can be set via scripting to any position or rotation of your choosing.

`getModeString()` is used to get the current view mode setting.

## Function

`getModeString() // Returns a string`

## Arguments

This function has no parameters.

## Returns

**mode: string**: The string representing the mode the camera is in. This can be "first person", "third person", "mirror", "independent", or "entity"

## Examples

This example prints the current mode to the debug log.

```
var mode = Camera.getModeString();
print("Camera mode: " + mode);

```

You should see a result similar to the following:

```
Camera mode: first person
```



# getOrientation()

`getOrientation` gets the current orientation of the camera.

## Function

`getOrientation() // Returns a Quat`

## Arguments

This function has no parameters.

## Returns

**orientation: Quat**: The current orientation of the camera

## Examples

This example gets the current camera orientation and prints it to the debug log.

```
var cameraOrientation = Camera.getOrientation();
print (JSON.stringify(cameraOrientation));

```

You should see output similar to the following:

```
{"x": -0.32453254, "y": 0.3545245, "z":0.52452452, "w":0.952523523}
```



# getPosition()

`getPosition()` gets the current position of the camera.

## Function

`getPosition() // Returns a Vec3`

## Arguments

This function has no parameters.

## Returns

**position: Vec3**: The current position of the camera in world coordinates

## Examples

This example gets the current camera position and prints it to the debug log.

```
var cameraPosition = Camera.getPosition();
print (JSON.stringify(cameraPosition));

```

You should see output similar to the following:

```
{"x": 2.32453254, "y": 0.1242142, "z":-0.8333764}
```



# keepLookingAt()

In Interface, the camera view can be set to a number of different modes ("first person", "third person", "mirror", "independent", or "entity"). These modes affect the relative position of the camera to your avatar as well as the default controls for camera movement. In "independent" mode the camera's position and rotation don't change when using the default avatar controls but can be set via scripting to any position or rotation of your choosing.

When in "independent" mode, `keepLookingAt()` can be used to rotate the camera so that it continues to point at a specified location even as the camera's position is changed. To stop the camera rotation, use [stopLooking()](https://wiki.highfidelity.com/wiki/StopLooking()).

To change the camera mode to "independent" mode via script, use [setModeString()](https://wiki.highfidelity.com/wiki/SetModeString()) and specify "independent". To change it via Interface, select **View** and then select **Independent Mode**.

## Function

`keepLookingAt(position)`

## Arguments

**position:vec3**: The position to point the camera towards

## Examples

An excellent example of `keepLookingAt()` can be found in [lookAtExample.js](https://github.com/highfidelity/hifi/blob/master/script-archive/example/avatarcontrol/lookAtExample.js). In that example, you can click on an entity and the camera will rotate to point at the entity's position. You can then press the arrow keys to change the camera's position and you will see that the camera continues to point at the entity.

The [full example is on github](https://github.com/highfidelity/hifi/blob/master/script-archive/example/avatarcontrol/lookAtExample.js). Below are lines 73 - 77 and show the camera mode set to independent, and the camera set to look at the intersection point.

```
// switch to independent mode
Camera.mode = "independent";

// tell the camera to fix it's look at on the point we clicked
Camera.keepLookingAt(intersection.intersection);
```



# setCameraEntity()

If the camera is in **Entity Mode**, you can set the camera's position and orientation to that of a specified entity by setting the `Camera.cameraEntity` property to an entity ID. For example, you could jump between particular viewpoints in a virtual world by placing an entity at each viewpoint, and then using a script to set the `cameraEntity` property to the ID of the entity at each viewpoint.

`setCameraEntity()` is used to set the `cameraEntity` property to a specified entity ID.

To change the camera mode to "entity" mode via script use [setModeString()](https://wiki.highfidelity.com/wiki/SetModeString()) and specify "entity". To change it via Interface, select **View** and then select **Entity Mode**.

## Function

`setCameraEntity(entityID)`

## Arguments

**[doc:entityitemid EntityID]: string**: The unique ID of a an entity

## Examples

This example first sets the camera to "entity" mode so that the camera will use the position and orientation values of a specified entity. It then prints the current value of the `cameraEntity` property to the debug log. By default, this value will be `null`. The example then finds the closest entity to the avatar and prints its entity ID to the debug log. Finally, it sets the`cameraEntity` property to the ID of the found entity and prints the updated `cameraEntity` value to the debug log.

```
//Set the camera to entity mode
Camera.setModeString("entity");

// Print the ID of the current camera entity 
print("CameraEntity: " + Camera.getCameraEntity());

// Find the closest entity to the avatar and print the found entity ID
var foundEntity = Entities.findClosestEntity(MyAvatar.position, 100.0);
print ("EntityID: "  + JSON.stringify(foundEntity));

// Set the camera entity to the found entity and then
// print the ID of the current camera entity 
Camera.setCameraEntity(foundEntity);
print("CameraEntity: " + Camera.getCameraEntity());

```

You should see output similar to the following:

```
CameraEntity: null
EntityID: "{c5272962-571e-4897-bfd6-a6e0fcfccf1b}"
CameraEntity: {c5272962-571e-4897-bfd6-a6e0fcfccf1b}
```



# setModeString()

In Interface the camera view can be set to a number of different modes ("first person", "third person", "mirror", "independent", or "entity"). These modes affect the relative position of the camera to your avatar as well as the the default controls for camera movement.

`setModeString()` is used to set the camera mode.

## Function

`setModeString(mode)`

## Arguments

**mode:string**: The string representing the mode you want to set the camera to. This can be "first person", "third person", "mirror", "independent", or "entity"

## Examples

The following example will set the camera mode to third person view.

```
Camera.setModeString("third person");

```

In third person mode you should have a view from directly behind your avatar, as in the image below.

[![Thirdpersonmode.png](https://wiki.highfidelity.com/images/thumb/c/c0/Thirdpersonmode.png/500px-Thirdpersonmode.png)](https://wiki.highfidelity.com/wiki/File:Thirdpersonmode.png)





# setOrientation()

In Interface, the camera view can be set to a number of different modes ("first person", "third person", "mirror", "independent", or "entity"). These modes affect the relative position of the camera to your avatar as well as the default controls for camera movement. In *independent" mode the camera's position and rotation don't change when using the default avatar controls but can be set via scripting to any position or rotation of your choosing.*

When the camera is in "independent" mode, `setOrientation()` can be used to set the rotation of the camera.

To change the camera mode to "independent" mode via script use [setModeString()](https://wiki.highfidelity.com/wiki/SetModeString()) and specify "independent". To change it via Interface, select **View** and then select **Independent Mode**.

## Function

`setOrientation(orientation)`

## Arguments

**orientation: quat**: The new orientation to set the camera to

## Examples

This example sets the camera orientation. Because, `setOrientation()` can only be used when the camera is in "independent" mode, the script sets the camera mode before setting the orientation.

```
// Set the camera to "independent" mode
Camera.setModeString("independent");

// Set the camera orientation
Camera.setOrientation({x:0, y:0, z:0, w:1});
```





# setPosition()

In Interface, the camera view can be set to a number of different modes ("first person", "third person", "mirror", "independent", or "entity"). These modes affect the relative position of the camera to your avatar as well as the default controls for camera movement. In "independent" mode the camera's position and rotation don't change when using the default avatar controls but can be set via scripting to any position or rotation of your choosing.

When the camera is "independent" mode, `setPosition()` can be used to set the current position of the camera.

To change the camera mode to "independent" mode via script use [setModeString()](https://wiki.highfidelity.com/wiki/SetModeString()) and specify "independent". To change it via Interface, select **View** and then select **Independent Mode**.

## Function

`setPosition(position)`

## Arguments

**position: vec3**: The new position of the camera in world coordinates.

## Examples

This example sets the position of the camera to the origin point. Because `setPosition()` can only be used when the camera is in "independent" mode, the script sets the camera mode before setting the position.

```
// Set the camera to "independent" mode
Camera.setModeString("independent");

// Set the camera position
Camera.setPosition({x:0, y:0, z:0});
```



# stopLooking()

If you used [keepLookingAt()](https://wiki.highfidelity.com/wiki/KeepLookingAt()) to rotate the camera so that it continues to point at a specified location even as the camera's position changes, to stop camera rotation, use **stopLooking()**.

## Function

or Event `stopLooking()`

## Arguments

This function has no parameters.

## Examples

An excellent example of `stopLooking()` can be found in [lookAtExample.js](https://github.com/highfidelity/hifi/blob/master/script-archive/example/avatarcontrol/lookAtExample.js). In that example, you can click on an entity and the camera will rotate to point at the entity's position. You can then press the arrow keys to change the camera's position and you will see that the camera continues to point at the entity. Click again and it will stop looking at that point.

The [full example is on github](https://github.com/highfidelity/hifi/blob/master/script-archive/example/avatarcontrol/lookAtExample.js). Below are lines 22 - 29 and they show where `Camera.stopLooking` is used.

```
function cancelLookAt() {
    if (lookingAtSomething) {
        lookingAtSomething = false;
        Camera.stopLooking();
        Camera.mode = oldMode;
        releaseMovementKeys();
    }
}
```

