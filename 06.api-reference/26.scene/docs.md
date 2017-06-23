---
title: 'Account'
taxonomy:
    category:
        - docs
---

| Properties                            | Type    | Description |
| ------------------------------------- | ------- | ----------- |
| Scene.objectName                      | string  |             |
| Scene.shouldRenderAvatars             | boolean |             |
| Scene.shouldRenderEntities            | boolean |             |
| Scene.stage.backgroundMode            | string  |             |
| Scene.stage.keyLight.ambientIntensity | number  |             |
| Scene.stage.keyLight.color.x          | number  |             |
| Scene.stage.keyLight.direction.x      | number  |             |
| Scene.stage.keyLight.intensity        | number  |             |
| Scene.stage.keyLight.objectName       | string  |             |
| Scene.stage.location.altitude         | number  |             |
| Scene.stage.location.latitude         | number  |             |
| Scene.stage.location.longitude        | number  |             |
| Scene.stage.location.objectName       | string  |             |
| Scene.stage.objectName                | string  |             |
| Scene.stage.time.day                  | number  |             |
| Scene.stage.sunModel                  | boolean |             |
| Scene.stage.time.hour                 | number  |             |
| Scene.stage.time.objectName           | string  |             |

| Methods                                  |
| ---------------------------------------- |
| Scene.stage.deleteLater()                |
| Scene.stage.keyLight.deleteLater()       |
| Scene.stage.location.deleteLater()       |
| Scene.stage.setOrientation(glm::quat)    |
| Scene.stage.setLocation(float,float,float) |
| Scene.stage.time.deleteLater()           |

| Events                                   |
| ---------------------------------------- |
| Scene.destroyed()                        |
| Scene.destroyed(QObject*)                |
| Scene.objectNameChanged(QString)         |
| Scene.shouldRenderAvatarsChanged(bool)   |
| Scene.shouldRenderEntitiesChanged(bool)  |
| Scene.stage.destroyed()                  |
| Scene.stage.destroyed(QObject*)          |
| Scene.stage.keyLight.destroyed()         |
| Scene.stage.keyLight.destroyed(QObject*) |
| Scene.stage.keyLight.objectNameChanged(QString) |
| Scene.stage.location.destroyed()         |
| Scene.stage.location.destroyed(QObject*) |
| Scene.stage.location.objectNameChanged(QString) |
| Scene.stage.objectNameChanged(QString)   |
| Scene.stage.time.destroyed()             |
| Scene.stage.time.destroyed(QObject*)     |
| Scene.stage.time.objectNameChanged(QString) |