---
title: 'HMD'
taxonomy:
    category:
        - docs
---

| Properties         | Type    | Description |
| ------------------ | ------- | ----------- |
| HMD.active         | boolean |             |
| HMD.eyeHeight      | number  |             |
| HMD.homeButtonID   | string  |             |
| HMD.ipd            | number  |             |
| HMD.ipdScale       | number  |             |
| HMD.mounted        | boolean |             |
| HMD.objectName     | string  |             |
| HMD.orientation.w  | number  |             |
| HMD.playerHeight   | number  |             |
| HMD.position.x     | number  |             |
| HMD.showTablet     | boolean |             |
| HMD.tabletID       | string  |             |
| HMD.tabletScreenID | string  |             |

| Methods                                  |
| ---------------------------------------- |
| HMD.calculateRayUICollisionPoint(glm::vec3,glm::vec3) |
| HMD.closeTablet()                        |
| HMD.centerUI()                           |
| HMD.disableExtraLaser()                  |
| HMD.disableHandLasers(int)               |
| HMD.displayModeChanged(bool)             |
| HMD.getHUDLookAtPosition3D               |
| HMD.getHUDLookAtPosition2D               |
| HMD.isSubdeviceContainingNameAvailable(QString) |
| HMD.isHMDAvailable()                     |
| HMD.isHMDAvailable(QString)              |
| HMD.isHandControllerAvailable()          |
| HMD.isHandControllerAvailable(QString)   |
| HMD.isKeyboardVisible()                  |
| HMD.openTablet()                         |
| HMD.overlayFromWorldPoint(glm::vec3)     |
| HMD.overlayToSpherical(glm::vec2)        |
| HMD.preferredAudioInput()                |
| HMD.preferredAudioOutput()               |
| HMD.requestHideHandControllers()         |
| HMD.requestShowHandControllers()         |
| HMD.setExtraLaser(glm::vec3,bool,glm::vec4,glm::vec3) |
| HMD.setHandLasers(int,bool,glm::vec4,glm::vec3) |
| HMD.shouldShowHandControllers()          |
| HMD.shouldShowHandControllersChanged()   |
| HMD.sphericalToOverlay(glm::vec2)        |
| HMD.suppressKeyboard()                   |
| HMD.unsuppressKeyboard()                 |
| HMD.worldPointFromOverlay(glm::vec2)     |



## Properties

**HMD.active**:

True if the interface is in HMD mode. False if the interface is not in HMD mode

## function isHMDAvailable ()

Returns **True **- If HMD available; **False ** if no HMD is available

## function isHandControllerAvailable ()

Returns **True **- If hand controller is available; **False **, if hand controller is not available

## function isHMDMode ()

Returns **True** If the interface is in HMD mode;**False**, if the interface is not in HMD mode

## function centerUI ()

Rotate the overlay UI sphere so that it is centered about the current HMD position and orientation

## function setHandLasers (hands, enabled, color, direction)

Set the color and direction of a laser for a given hand

**parameters**:

```
 hand - int - index of the hand you wish to change.

```

```
 enabled - bool - enable or disable the laser for the given hand.

```

```
 color - vec4 - color that will be set for the hand laser.

```

```
 direction - vec3 - the direction the hand laser point to.

```

## function disableHandLasers(hands)

Disable lasers for the given hands

**parameters**

```
  hands - int - the index of the hand you want to disable the lasers

```

## function setExtraLaser (worldStart, enabled, color, direction)

Set the color and direction of an extra laser at a specified location

**parameters**:

```
 worldStart - vec3 - Set the location of the new laser in world.

```

```
 enabled - bool - Enable or disable the laser.

```

```
 color - vec4 - Color that will be set for the laser.

```

```
 direction - vec3 - The direction the laser will point to.

```

## function disableExtraLaser ()

If an extra laser was created disable it.