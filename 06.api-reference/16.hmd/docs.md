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

| Events                         |
| ------------------------------ |
| HMD.IPDScaleChanged()          |
| HMD.destroyed(QObject*)        |
| HMD.destroyed()                |
| HMD.mountedChanged()           |
| HMD.objectNameChanged(QString) |