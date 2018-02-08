---
title: 'Scene'
taxonomy:
    category:
        - docs
---

| Properties                            | Type    | Description |
| ------------------------------------- | ------- | ----------- |
|`Scene.shouldRenderAvatars`|boolean||
|`Scene.shouldRenderEntities`|boolean||
|`Scene.stage.backgroundMode`|string||
|`Scene.stage.keyLight.ambientIntensity`|number||
|`Scene.stage.keyLight.color`|number||
|`Scene.stage.keyLight.direction`|number||
|`Scene.stage.keyLight.intensity`|number||
|`Scene.stage.location.altitude`|number||
|`Scene.stage.location.latitude`|number||
|`Scene.stage.location.longitude`|number||
|`Scene.stage.location.objectName`|string||
|`Scene.stage.time.day`|number||
|`Scene.stage.sunModel`|boolean||
|`Scene.stage.time.hour`|number||

| Methods                                  |
| ---------------------------------------- |
|`Scene.stage.deleteLater()`|
|`Scene.stage.keyLight.deleteLater()`|
|`Scene.stage.location.deleteLater()`|
|`Scene.stage.setOrientation(glm::quat)`|
|`Scene.stage.setLocation(float,float,float)`|
|`Scene.stage.time.deleteLater()`|

| Events                                   |
| ---------------------------------------- |
|`Scene.shouldRenderAvatarsChanged(bool)`|
|`Scene.shouldRenderEntitiesChanged(bool)`|