---
title: 'Entities'
taxonomy:
    category:
        - docs
---

* [**Properties**](#properties)

* [**Methods**](#methods)

* [**Events**](#events)

* [**Callbacks**](#callbacks)

  ​



##Properties <a id="properties"></a>
| Properties                   | Type   | Description |
| ---------------------------- | ------ | ----------- |
| Entities.costMultiplier      | number |             |
| Entities.currentAvatarEnergy | number |             |
| Entities.keyboardFocusEntity | object |             |
| Entities.objectName          | string |             |


##Methods <a id="methods"></a>
| Methods                                  |
| ---------------------------------------- |
| [Entities.addAction(QString,QUuid,QVariantMap)](#m1) |
| [Entities.addEntity(EntityItemProperties)](#m2) |
| Entities.addEntity(EntityItemProperties,bool) |
| Entities.addModelEntity(QString,QString,QString,bool,glm::vec3,glm::vec3) |
| Entities.addingEntity(EntityItemID)      |
| [Entities.appendPoint(QUuid,glm::vec3)](#m3) |
| [Entities.callEntityMethod(QUuid,QString)](#m4) |
| Entities.callEntityMethod(QUuid,QString,QStringList) |
| [Entities.canAdjustLocks()](#m5)         |
| Entities.canAdjustLocksChanged(bool)     |
| [Entities.canRez()](#m6)                 |
| Entities.canRezChanged(bool)             |
| [Entities.canRezTmp()](#m7)              |
| Entities.canRezTmpChanged(bool)          |
| Entities.canWriteAssets()                |
| Entities.canWriteAssetsChanged(bool)     |
| Entities.debitEnergySource(float)        |
| [Entities.deleteAction(QUuid,QUuid)](#m8) |
| [Entities.deleteEntity(QUuid)](#m9)      |
| Entities.dumpTree()                      |
| [Entities.editEntity(QUuid,EntityItemProperties)](#m10) |
| Entities.emitScriptEvent(EntityItemID,QVariant) |
| Entities.enterEntity(EntityItemID)       |
| [Entities.findClosestEntity(glm::vec3,float)](#m11) |
| [Entities.findEntities(glm::vec3,float)](#m12) |
| [Entities.findEntitiesInBox(glm::vec3,glm::vec3)](#m13) |
| Entities.findEntitiesInFrustum(QVariantMap) |
| [Entities.findRayIntersection(PickRay)](#m14) |
| Entities.findRayIntersection(PickRay,bool) |
| Entities.findRayIntersection(PickRay,bool,QScriptValue) |
| Entities.findRayIntersection(PickRay,bool,QScriptValue,QScriptValue) |
| Entities.findRayIntersection(PickRay,bool,QScriptValue,QScriptValue,bool) |
| Entities.findRayIntersection(PickRay,bool,QScriptValue,QScriptValue,bool,bool) |
| [Entities.findRayIntersectionBlocking(PickRay)](#m15) |
| Entities.findRayIntersectionBlocking(PickRay,bool) |
| Entities.findRayIntersectionBlocking(PickRay,bool,QScriptValue) |
| Entities.findRayIntersectionBlocking(PickRay,bool,QScriptValue,QScriptValue) |
| Entities.getAbsoluteJointRotationInObjectFrame(QUuid,int) |
| Entities.getAbsoluteJointTranslationInObjectFrame(QUuid,int) |
| [Entities.getActionArguments(QUuid,QUuid)](#m16) |
| [Entities.getActionIDs(QUuid)](#m17)     |
| Entities.getChildrenIDs(QUuid)           |
| Entities.getChildrenIDsOfJoint(QUuid,int) |
| [Entities.getDrawZoneBoundaries()](#m18) |
| Entities.getEntityLocalTransform(QUuid)  |
| [Entities.getEntityProperties(QUuid)](#m19) |
| Entities.getEntityProperties(QUuid,EntityPropertyFlags) |
| Entities.getEntityTransform(QUuid)       |
| Entities.getJointIndex(QUuid,QString)    |
| Entities.getJointNames(QUuid)            |
| Entities.getKeyboardFocusEntity()        |
| [Entities.getLifetimeBPS()](#m20)        |
| [Entities.getLifetimeBPSQueued()](#m21)  |
| [Entities.getLifetimeBytesQueued()](#m22) |
| [Entities.getLifetimeBytesSent()](#m23)  |
| [Entities.getLifetimeInSeconds()](#m24)  |
| [Entities.getLifetimeInUsecs()](#m25)    |
| [Entities.getLifetimePPS()](#m26)        |
| [Entities.getLifetimePPSQueued()](#m27)  |
| [Entities.getLifetimePacketsQueued()](#m28) |
| [Entities.getLifetimePacketsSent()](#m29) |
| [Entities.getLightsArePickable()](#m30)  |
| Entities.getLocalJointRotation(QUuid,int) |
| Entities.getLocalJointTranslation(QUuid,int) |
| Entities.getMeshes(QUuid,QScriptValue)   |
| [Entities.getPacketsPerSecond()](#m31)   |
| Entities.getServerScriptStatus(QUuid,QScriptValue) |
| Entities.getWebViewRoot(QUuid)           |
| [Entities.getZonesArePickable()](#m32)   |
| [Entities.hasPacketsToSend()](#m33)      |
| Entities.isChildOfParent(QUuid,QUuid)    |
| [Entites.LocalCoordstoVoxelCoords()](#m34) |
| Entities.leaveEntity(EntityItemID)       |
| [PacketsToSendCount()](#m35)             |
| Entities.queryPropertyMetadata(QUuid,QScriptValue,QScriptValue) |
| Entities.queryPropertyMetadata(QUuid,QScriptValue,QScriptValue,QScriptValue) |
| Entities.reloadServerScripts(QUuid)      |
| Entities.sendClickDownOnEntity(QUuid,PointerEvent) |
| Entities.sendClickReleaseOnEntity(QUuid,PointerEvent) |
| Entities.sendHoldingClickOnEntity(QUuid,PointerEvent) |
| Entities.sendHoverEnterEntity(QUuid,PointerEvent) |
| Entities.sendHoverLeaveEntity(QUuid,PointerEvent) |
| Entities.sendHoverOverEntity(QUuid,PointerEvent) |
| Entities.sendMouseMoveOnEntity(QUuid,PointerEvent) |
| Entities.sendMousePressOnEntity(QUuid,PointerEvent) |
| Entities.sendMouseReleaseOnEntity(QUuid,PointerEvent) |
| [Entities.ServersExist()](#m36)          |
| Entities.setAbsoluteJointRotationInObjectFrame(QUuid,int,glm::quat) |
| Entities.setAbsoluteJointTranslationInObjectFrame(QUuid,int,glm::vec3) |
| [Entities.setAllPoints(QUuid,QVector<glm::vec3>)](#m37) |
| [Entities.setAllVoxels(QUuid,int)](#m38) |
| [Entities.setDrawZoneBoundaries(bool)](#m39) |
| Entities.setKeyboardFocusEntity(QUuid)   |
| [Entities.setLightsArePickable(bool)](#m40) |
| Entities.setLocalJointRotation(QUuid,int,glm::quat) |
| Entities.setLocalJointRotations(QUuid,QVector<glm::quat>) |
| Entities.setLocalJointTranslation(QUuid,int,glm::vec3) |
| Entities.setLocalJointTranslations(QUuid,QVector<glm::vec3>) |
| Entities.setLocalJointsData(QUuid,QVector<glm::quat>,QVector<glm::vec3>) |
| [Entities.setPacketsPerSecond(int)](#m41) |
| [Entities.setVoxel(QUuid,glm::vec3,int)](#m42) |
| Entities.setVoxelCapsule(QUuid,glm::vec3,glm::vec3,float,int) |
| [Entities.SetVoxelsInCuboid()](#m43)     |
| [Entities.SetVoxelSphere()](#m44)        |
| [Entities.SetZonesArePickable()](#m45)   |
| [Entities.UpdateAction()](#m46)          |
| [Entities.VoxelCoordsToLocalCoords()](#m47) |
| [Entities.VoxelCoordsToWorldCoords()](#m48) |
| [Entities.WorldCoordsToVoxelCoords()](#m49) |

##Events <a id="events"></a>
| Events                                   |
| ---------------------------------------- |
| Entities.AABoxIntersectsCapsule(glm::vec3,glm::vec3,glm::vec3,glm::vec3,float) |
| [Entities.AddingEntity()](#e1)           |
| [Entities.CanAdjustLocksChanged()](#e2)  |
| [Entities.CanRezChanged()](#e3)          |
| [Entities.CanRezTmpChanged()](#e4)       |
| [Entities.clearingEntities()](#e5)       |
| [Entities.deletingEntity(EntityItemID)](#e6) |
| Entities.localCoordsToVoxelCoords(QUuid,glm::vec3) |
| Entities.packetsToSendCount()            |
| Entities.objectNameChanged(QString)      |
| Entities.wantsHandControllerPointerEvents(QUuid) |
| Entities.webEventReceived(EntityItemID,QVariant) |
| Entities.serversExist()                  |


##Callbacks <a id="callbacks"></a>
| Callbacks                      |
| ------------------------------ |
| [ClickDownOnEntity()](#c1)     |
| [ClickReleaseOnEntity()](#c2)  |
| [CollisionWithEntity()](#c3)   |
| [EnterEntity()](#c4)           |
| [HoldingClickOnEntity()](#c5)  |
| [HoverEnterEntity()](#c6)      |
| [HoverLeaveEntity()](#c7)      |
| [HoverOverEntity()](#c8)       |
| [LeaveEntity()](#c9)           |
| [MouseMoveOnEntity()](#c10)    |
| [MousePressOnEntity()](#c11)   |
| [MouseReleaseOnEntity()](#c12) |

## EntityItem Properties

An entity's appearance (color, size, position etc.) and behavior (animation, collision, interaction, etc.) are defined by the entity's properties specified in `EntityItemProperties`.

`EntityItemProperties` is a JSON object composed of multiple properties. While an entity can have any number of properties, it must include, at minimum, the [type](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties) property. The `type` property determines which other properties the entity can have. As there are a fair number of properties that are common across all entity types (including the `type` property), the [common entity properties](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties) are covered first. The properties specific to each entity type are covered in [entity properties by type](https://wiki.highfidelity.com/wiki/EntityItemProperties#Entity_Properties_by_Type).

### Common Properties

This section contains the properties common to all entity types.

| Property            | Type                | Default Value                            | Description                              |
| ------------------- | ------------------- | ---------------------------------------- | ---------------------------------------- |
| `type`              | string              | No default. An entity type must be specified when adding an entity. | The `type` property defines the type of entity and determines which properties the entity can have. All entities must have a type. Possible types are: "Box", "Light", "Line", "Model", "ParticleEffect", "PolyLine", "PolyVox", "Sphere", "Text", "Web", and "Zone".: The `type` property **cannot** be edited using [editEntity()](https://wiki.highfidelity.com/wiki/EditEntity\(\)). |
| `name`              | string              | ""                                       | The `name` property is a non-unique 'name' of the entity. It can be any valid string. |
| `id`                | EntityItemID        | string                                   | The `id` property is unique string that used to distinguish entities from each other |
| `parentID`          | EntityItemID        | string                                   | The `parentID` property is the current entities parent `EntityItemID`. |
| `locked`            | boolean             | FALSE                                    | The `locked` property determines if the entity's properties can be edited or if the entity can be deleted using [deleteEntity()](https://wiki.highfidelity.com/wiki/DeleteEntity\(\)). If set to `true`, the entity is locked and cannot be changed or deleted. : The `locked` property can only be changed by users who have permission to [adjust locks](https://wiki.highfidelity.com/wiki/CanAdjustLocks\(\)). |
| `visible`           | boolean             | TRUE                                     | The `visible` property determines whether or not the entity is rendered. |
| `userData`          | object              | {}                                       | The `userData` field stores any arbitrary JSON data and can be used as a shared database for the entity it is attached to. This can be used in many ways, for example, keeping track of a lightbulb's on/off state, or whether a door is open or closed. |
| `href`              | string              | ""                                       | The `href` property takes a string indicating the location the user will be taken to when the user clicks on the entity. This property uses the same resolution mechanism as the address bar in Interface, which means you can use absolute and relative paths or place names to specify the location. Note: Interactivity with motion controllers (hydra etc.) may not work at this time. |
| `description`       | string              | ""                                       | The `description` property is a text description of the location stored in the `href` property. It can be any valid string. |
| `position`          | object / vec3       | {x: 0.0, y: 0.0, z: 0.0}                 | The `position` property is a JavaScript object which takes `x`, `y`, and `z` name-value pairs specifying the position of this entity in the domain. An entity placed outside of the domain bounds will not be created. |
| `registrationPoint` | object / vec3       | {x: 0.5, y: 0.5, z: 0.5}                 | The `registrationPoint` property is a JavaScript object which takes `x`, `y`, and `z` name-value pairs and specifies the position the entity will be rotated around. |
| `dimensions`        | object / vec3       | {x: 0.1, y: 0.1, z: 0.1}                 | The `dimensions` property is a JavaScript object which takes `x`, `y`, and `z` name-value pairs and scales the object appropriately, while also creating a bounding box around the entity with those dimensions.The bounding box defines the collision hull if collisions are enabled. |
| `rotation`          | object / quaternion | {x: 0.0, y: 0.0, z: 0.0,w: 1.0}          | The `rotation` property is a JavaScript object which takes `x`, `y`, `z`, and `w` name-value pairs specifying the rotation of the entity. |
| `velocity`          | object / vec3       | {x: 0, y: 0, z: 0}                       | The `velocity` property is a JavaScript object which takes `x`, `y`, and `z` name-value pairs and represents the velocity vector in meters/second. |
| `damping`           | float               | 0.39                                     | The `damping` property slows down a moving object over time. A higher damping value will slow down the object more quickly. The range for damping is between 0 and 1. |
| `angularVelocity`   | object / vec3       | {x: 0, y: 0, z: 0}                       | The `angularVelocity` property is a JavaScript object which takes `x`, `y`, and `z` name-value pairs and refers to the velocity of the entity about an axis. |
| `angularDamping`    | float               | 0.39                                     | The `angularDamping` property slows down a moving object over time. A higher damping value will slow down the object more quickly. The range for damping is between 0 and 1. |
| `restitution`       | float               | 0.5                                      | The `restitution` property specifies the “bounciness” of a physics object when it collides against another object. A higher restitution means more bounciness. Keep in mind that this property is only meaningful in the context of another entity against which this entity will be colliding. So, for example, if you create a ball with a restitution of 1, and drop it on a floor with a low restitution, that ball would not bounce back nearly as high a ball dropping against a floor with a much higher restitution.(hifi://fantasia/1000,999.625,990/0,0,0,1) |
| `friction`          | float               | 0.5                                      | The `friction` property is similar to damping in that it slows down an object over time, but unlike damping, which works on objects through any medium, friction applies only to objects moving across a surface, such as a ground plane.use cases:: 0.1 - Hockey rink: 0.9 - sand paper(hifi://fantasia/1000,999.625,1000/0,0,0,1) |
| `gravity`           | object / vec3       | {x: 0, y: 0, z: 0}                       | The `gravity` property is a JavaScript object which takes `x`, `y`, and `z` name-value pairs representing the strength and direction of the associated entity's gravity. This property will only affect the entity if another property, `dynamic`, is set to `true`. Set gravity to {x: 0, y: -9.8, z: 0} to simulate earth gravity. : Due to the way the physics system currently works, an entity must be assigned a small velocity (~0.01m/s) in conjunction with gravity in order for gravity to be effective.(hifi://fantasia/1000,999.625,980/0,0,0,1) |
| `acceleration`      | object / vec3       | {x: 0, y: 0, z: 0}                       | The `acceleration` property is a JavaScript object which takes `x`, `y`, and `z` name-value pairs representing the acceleration vector. Units: meters/second^2 |
| `density`           | float               | 1000                                     | The `density` property relates to the collision volume - larger density entities will cause smaller density entities to be pushed on contact if collisions are set. For the `density` property, the default value of 1000 represents the density of water. The minimum value of 100 represents the density of balsa wood and the max value of 10000 represents the density of silver.: kg/m^3 |
| `collisionless`     | boolean             | FALSE                                    | The `collisionless` property, if set to `true` specifies that collisions should be ignored. |
| `dynamic`           | boolean             | FALSE                                    | The `dynamic` property, if set to `true` specifies that this entity will be moved by a heavier or equally dense object upon collision, such as billiard balls. |
| `collisionSoundURL` | string              | ""                                       | The `collisionSoundURL` property specifies the sound to play when this entity experiences a collision. You can provide a mono or stereo 16-bit WAV file running at either 24 Khz or 48 Khz. The latter is downsampled by the audio mixer, so all audio effectively plays back at a 24 Khz sample rate. 48 Khz RAW files are also supported. |
| `lifetime`          | float               | -1 (Meaning entity will live forever)    | The `lifetime` property accepts a number which specifies how long, in seconds, the entity lives for in the domain. After this time has passed, the entity will be automatically deleted.: seconds |
| `script`            | string              | ""                                       | The `script` property accepts a URL to an entity script file, and attaches the script to the entity. |

### Examples

To create an entity of type "Sphere" using all default values, use:

```
// Add a sphere
var Ent = Entities.addEntity({
  type: "Sphere"
});
```

To create a sphere specifying a radius of 1 using the `dimensions` property, use:

```
Entities.addEntity({
  type: "Sphere",
  dimensions: {x: 1, y: 1, z: 1}
})
```

### Entity Properties by Type

The sections below cover the properties specific to an entity type. 

#### Box

Box entities are used to create basic cube shaped entities.

In addition to the [common properties](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties), Box entities have the following property:

| Property | Type   | Default                           | Description                              |
| -------- | ------ | --------------------------------- | ---------------------------------------- |
| `color`  | object | {red: 255, green: 255, blue: 255} | The `color` property is a JavaScript object which takes `red`, `green`, and `blue` name-value pairs and sets the color of the entity appropriately. The range of each color component is between 0 and 255. |

#### Light

The Light entity works like a ball or a beam of light and can be used to add local lighting effects and spotlights to an area or spot.

In addition to the [common properties](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties), Light entities have the following properties:

| Property      | Type    | Default Value                    | Description                              |
| ------------- | ------- | -------------------------------- | ---------------------------------------- |
| `isSpotlight` | boolean | FALSE                            | Setting `isSpotlight` to `true` changes the light from a point light, which emanates in all directions equally, to a spotlight, which shoots light in a particular direction, determined by the entity's `rotation` property. |
| `intensity`   | float   | 1.0                              | The `intensity` property is the brightness of the light- a higher intensity corresponds with a brighter light.(hifi://fantasia/1000,999.614,920/0,0,0,1) |
| `exponent`    | float   | 0.0                              | The `exponent` property affects the softness of the beam, when the light is set to spotlight mode. |
| `cutoff`      | float   |                                  | The `cutoff` property determines the radius of the spotlight. A higher cutoff value corresponds with a larger spotlight radius.(hifi://fantasia/1000,999.613,910/0,0,0,1) |
| `color`       | object  | {red: 150, green: 150,blue: 150} | The `color` property is a JavaScript object which takes `red`, `green`, and `blue` name-value pairs and sets the color of the entity appropriately. The range of each color component is between 0 and 255. |

#### Line

Line entities accept a property which is an array of points from which the line is drawn through. This entity can be used to create simple straight lines, by providing a simple two-pointed array, or more complicated, curvy, and dynamic lines.

In addition to the [common properties](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties), Line entities have the following properties:

| Property     | Type   | Default Value                     | Description                              |
| ------------ | ------ | --------------------------------- | ---------------------------------------- |
| `linePoints` | array  | []                                | The `linePoints` property specifies the array of points that determines how the line is drawn. These points are local to the specified position of the entity.: All of your points must fall within the bounding box set by the dimensions property. |
| `lineWidth`  | float  | 2.0                               | The `lineWidth` property specifies the width of the line.: [glLineWidth](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glLineWidth.xhtml) |
| `color`      | object | {red: 255, green: 255, blue: 255} | The `color` property is a JavaScript object which takes `red`, `green`, and `blue` name-value pairs and sets the color of the entity appropriately. The range of each color component is between 0 and 255. |

##### Examples

This code creates a simple, straight line in front of the avatar's position.

```
var pos = Vec3.sum(MyAvatar.position, Vec3.multiply(3, Quat.getFront(Camera.getOrientation())));

var testLine = Entities.addEntity({
    type: "Line",
    position: pos,
    color: {red: 200, green: 50, blue: 200},
    dimensions: {x: 5, y: 5, z: 5},
    linePoints: [{
      x: 0,
      y: 0,
      z: 0
      }, {
      x: 1,
      y: 1,
      z: -2
      }]
    });
```

[hifi://fantasia/1000,999.625,950/0,0,0,1 Check it out] in world!

Here's an example of a dynamic line composed of 10 points, whose first and last points are oscillating up and down: [hifi://highfidelity/1000,999.625,940/0,0,0,1 Dynamic Line]

#### Model

Model entities allow you to add complex shapes such as trees, houses, cars, aliens, etc. Basically anything you can create as an FBX or OBJ model can be added to your domain as a Model entity. Model entities can include animation.

In addition to the [common properties](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties), Model entities have the following properties:

| Property           | Type   | Default Value | Description                              |
| ------------------ | ------ | ------------- | ---------------------------------------- |
| `modelURL`         | string | ""            | The `modelURL` property specifies the URL of the model. Currently, the model must be in FBX or OBJ format. |
| `shapeType`        | string | "none"        | The `shapeType` property creates the tightest possible bounding box around the entity of specified shape. The bounding box defines the collision hull if collisions are enabled. Possible shapes are: "none", "box", "sphere", "ellipsoid", "plane", "compound", "capsule-x", "capsule-y", "capsule-z", "cylinder-x", "cylinder-y", "cylinder-z". |
| `compoundShapeURL` | string | ""            | The `compoundShapeURL` sets the URL of the compound shape that will be used if the `shapeType` property is set to `compound`. |
| `animation`        | object | ""            | The `animation` property is a JSON object composed of multiple properties, each of which is detailed in the section below. |

##### Animation Properties

The `animation` property is a JSON object composed of multiple properties, each of which is detailed below.

| Property             | Type    | Default Value | Description                              |
| -------------------- | ------- | ------------- | ---------------------------------------- |
| `url`                | string  | ""            | The `url` property species the URL for the animation. |
| `running`            | boolean | FALSE         | The `running` property determines whether or not the animation is playing. |
| `fps`                | float   | 30.0          | The `fps` property determines the frames per second at which the animation is played.: frames/second |
| `firstFrame`         | float   | 0.0           | The `firstFrame` property specifies the first frame of the animation to play from. |
| `lastFrame`          | float   | 100000.0      | The `lastFrame` property specifies the final frame of the animation to play to.the animation is less than this many frames, the animation will automatically stop unless looping is enabled. |
| `loop`               | boolean | FALSE         | The `loop` property specifies whether or not the animation will automatically loop. |
| `startAutomatically` | boolean | FALSE         | If `startAutomatically` is set to `true`, the entity will begin animating immediately upon creation. |

##### Example

The example below adds an animated dragon flapping its wings. The position has been set near to the avatar's position so that it will be easy to see after it has been created.

```
// set a position where the new entity can easily be seen by the avatar
var pos = Vec3.sum(MyAvatar.position, Vec3.multiply(3, Quat.getFront(Camera.getOrientation())));

// create the animation settings
var animationSettings = {
        url: "http://public.highfidelity.io/cozza13/club/dragon/flying.fbx",
       running: true,
       fps: 10,
       firstFrame: 10,
       lastFrame: 20,
       loop: true
    }

// create the model entity properties
var modelProperties = {
    type: "Model",
    position: pos,
    dimensions: { x: 0.5,  y: 0.5, z: 0.5 },
    modelURL: "http://public.highfidelity.io/cozza13/club/dragon/dragon.fbx",
    animation: animationSettings
};

// add the dragon entity.
var dragon = Entities.addEntity(modelProperties);
```

#### ParticleEffect

In addition to the [common properties](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties), ParticleEffect entities have the following properties:

| Property                           | Type                                     | Default Value                            | Description                              |
| ---------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `isEmitting`                       | boolean                                  | TRUE                                     | The `isEmitting` property returns `true` if particles are being emitted. |
| `color`                            | object                                   | {red: 255, green: 255, blue: 255}        | The `color` property is a JavaScript object which takes `red`, `green`, and `blue` name-value pairs and sets the color of the entity appropriately. The range of each color component is between 0 and 255. |
| `colorStart`                       | The `colorStart` property is a JavaScript object which takes `red`, `green`, and `blue` name-value pairs and specifies the starting color of the particles. | object                                   | {red: 255, green: 255, blue: 255}        |
| `colorSpread`                      | object                                   | {red: 0, green: 0, blue: 0}              | The `colorSpread` property is a JavaScript object which takes `red`, `green`, and `blue` name-value pairs and specifies the color range of the particles, offset from the base color. |
| `colorFinish`                      | object                                   | The `colorFinish` property is a JavaScript object which takes `red`, `green`, and `blue` name-value pairs and specifies the ending color of the particles. | {red: 255, green: 255, blue: 255}        |
| `alpha`                            | float                                    | 1.0                                      | The `alpha` property specifies the alpha value of the particles. |
| `alphaSpread`                      | float                                    | 0.0                                      | The `alphaSpread` property specifies the alpha range of the particles, offset from the base alpha setting. |
| `alphaStart` and `alphaFinish`     | float                                    | 1.0                                      | The`alphaStart` and `alphaFinish`properties specifies the start and end alpha values of the particles. |
| `polarStart` and `polarFinish`     | float                                    | 0.0                                      | The `polarStart` and `polarFinish` properties specify "latitudes" at which to emit particles.:0.0, 0.0 emits a straight line of particles in the direction the sphere is oriented.0.0, PI/2 emits a hemisphere.0.1, 0.2, emits a conical ring./2, PI/2 emits a ring around the "equator". |
| `azimuthStart` and `azimuthFinish` | float                                    | Azimuth Start: -PiEnd: Pi                | The `azimuthStart` and `azimuthFinish` properties specify the "longitudes" to emit.: -PI/2, PI/2 combined with polarStart, polarFinish = PI/2, PI/2 emits half a ring |
| `emitSpeed`                        | float                                    | 5.0                                      | The `emitSpeed` property specifies the speed at which particles are emitted. |
| `speedSpread`                      | float                                    | 1.0                                      | The `speedSpread` property specifies the range of speed at which particles will move, offset from the given `emitSpeed`value. : If the `emitSpeed` is 1.0 and the `speedSpread` is .1, then particles will spawn with a speed from -0.9 to 1.1. |
| `emitAcceleration`                 | object / vec3                            | {x: 0, y: -9.8 z: 0}                     | The `emitAcceleration` specifies the acceleration at which the particles are emitted, in meters/second. : meters/second |
| `accelerationSpread`               | object / vec3                            | {x: 0, y: 0, z: 0}                       | The `accelerationSpread` specifies an offset range for the acceleration of the particles - each particle will be assigned the base acceleration with a random offset within that range. |
| `emitRate`                         | object                                   | 15                                       | The `emitRate` specifies the number of particles spawned per second. |
| `particleRadius`                   | float                                    | 0.025                                    | The `particleRadius` specifies the radius of the particles in meters. |
| `textures`                         | string                                   | ""                                       | The `textures` property takes a string representing one texture, and maps that texture to each particle. Textures can be in JPG or PNG format. Use the latter if you'd like to use a transparent texture. |
| `emitOrientation`                  | object                                   | (-PI_OVER_TWO, X_AXIS) // vertical       |                                          |
| `emitDimensions`                   | object / vec3                            | {x: 0.0, y: 0.0, z: 0.0}                 |                                          |
| `emitRadiusStart`                  | float                                    | 1.0                                      |                                          |
| `radiusSpread`                     | float                                    | 0.0                                      |                                          |
| `radiusStart` and `radiusFinish`   | float                                    | 0.0                                      |                                          |
| `additiveBlending`                 | boolean                                  | FALSE                                    |                                          |
| `maxParticles`                     | int                                      | 1000                                     |                                          |
| `lifespan`                         | float                                    | 3.0                                      |                                          |

##### Example

This example creates a particle effect that looks like a ball of green smoke:

```
var verticalOrientation = Quat.fromPitchYawRollDegrees(-90.0, 0.0, 0.0),
    particles,
    pos = Vec3.sum(MyAvatar.position, Vec3.multiply(4.0, \t Quat.getFront(Camera.getOrientation())));


// Add particle effect.
particles = Entities.addEntity({
            type: "ParticleEffect",
            position: pos,
            emitOrientation: verticalOrientation,
            particleRadius: 0.04,
            radiusSpread: 2.0,
            emitRate: 10,
            emitSpeed: 1.0,
            speedSpread: 0.0,
            emitAcceleration: { x: 0.0, y: -0.3, z: 0.0 },
            accelerationSpread: { x: 0.0, y: 0.0, z: 0.0 },
            textures: "https://hifi-public.s3.amazonaws.com/alan/Particles/Particle-Sprite-Smoke-1.png",
            color: { red: 0, green: 255, blue: 0 },
            lifespan: 5.0,
            visible: true,
            locked: false,
            isEmitting: true,
            lifetime: 3600  // 1 hour; just in case
        });
```

#### PolyLine

PolyLines are triangle strips with a texture. Some possible uses are to do 3D and 2D painting or to create trails on a plane.

In addition to the [common properties](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties), PolyLine entities have the following properties:

| Property     | Type   | Default Value                     | Description                              |
| ------------ | ------ | --------------------------------- | ---------------------------------------- |
| linePoints   | array  | []                                | The `linePoints` property specifies the array of points that determines how the line is drawn. These points are local to the specified position of the entity.: All of your points must fall within the bounding box set by the dimensions property. |
| normals      | array  | []                                | The `normals` property is an array of Vec3s specifying the normal at the corresponding point in the line. |
| lineWidths   | float  | 0.1                               | The `lineWidth` property specifies the width of the line.: [glLineWidth](https://www.opengl.org/sdk/docs/man3/xhtml/glLineWidth.xml) |
| strokeWidths | float  | 0.1                               | The `strokeWidths` property specifies the width of the line in meters. |
| color        | object | {red: 255, green: 255, blue: 255} | The `color` property is a JavaScript object which takes `red`, `green`, and `blue` name-value pairs and sets the color of the entity appropriately. The range of each color component is between 0 and 255. |
| textures     | string | ""                                | The `textures` property takes a string representing the URL of a texture, and maps that texture to the line.can be in JPG or PNG format. Use the latter if you'd like to use a transparent texture. |

#### PolyVox

PolyVox is an entity type which allows you to create voxels.

In addition to the [common properties](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties), PolyVox entities have the following properties:

| Property                                 | Type                                     | Default                                  | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `voxelVolumeSize`                        | object                                   | {x: 32, y: 32, z: 32}                    | The `voxelVolumeSize` property controls the number of voxels along each axis of the entity bounding-box. example, a value of {x: 2, y: 2, z: 2} would cause the PolyVox entity to have 8 voxels total. A value of {x: 4, y: 1, z: 4} would cause a flat rectangle of 16 voxels. The in-world size of the voxels is affected by this property as well as the dimensions on the entity. If the "x" element of `voxelVolumeSize` is 2 and the "x" dimension on the entity is 10, each voxel will be of size 5 along their "x" axis. Because of this, individual voxels can be rectangular (though all the voxels in a given PolyVox entity will be the same shape). The default is {x: 32, y: 32, z: 32}. None of the elements of the vector-value can be larger than 128. |
| `voxelSurfaceStyle`                      | string                                   | "edged cubic"                            | The `voxelSurfaceStyle` property takes a string indicating the voxel surface style. Valid options are: "cubic", "edged cubic", "marching cubes", and "edged marching cubes". |
| `xTextureURL``yTextureURL``zTextureURL`  | string                                   | ""                                       | The `xTextureURL`, `yTextureURL`, and `zTextureURL` properties each take a string representing the URL of a texture, and maps that texture to surfaces which are perpendicular to the axis suggested by the name.can be in JPG or PNG format. Use the latter if you'd like to use a transparent texture. |
| `xNNeighborID``yNNeighborID``zNNeighborID``xPNeighborID``yPNeighborID``zPNeighborID` | [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID) | These properties each take an [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID) representing the neighboring PolyVox entities indicated by the name. Neighboring entities should all be of the same size and be flush up against the entity being defined. If the neighbor entity IDs are set and the surface extraction style is set to "marching-cubes" (but not "edged-marching-cubes"!), then the edges will be knit together such that the neighbouring PolyVox entities will appear to create one mesh.`xNNeighborID`, `yNNeighborID`, and `zNNeighborID` properties are the IDs of the negative-neighbor PolyVox entities. The `xPNeighborID`, `yPNeighborID`, and `zPNeighborID` properties are the IDs of the positive-neighbor PolyVox entities. | null                                     |
| `voxelData`                              | object                                   | null                                     | The `voxelData` property is used when storing the entity to a models.svo file and when transmitting changes over the network. It's a compressed dump of a QByteArray which holds information on which voxels have which values. In svo json files, it's additionally base-64 encoded.property is difficult to manipulate directly and won't typically be used when scripting. |

*Note: There is a nebulous limit on how large/complex the shape made by a PolyVox entity can be. This is due to current limits in the HighFidelity networking protocol - a property has to fit in a datagram packet in its entirety (though the properties for a given entity can be spread across multiple packets). As large PolyVox entities get more complex, the size of the compressed data in voxelData grows. If a change is made to the voxel values and the resulting compressed data blob is too large to transmit, the change has to be rejected. A different change may still be allowed -- it depends on how the data gets compressed. A large PolyVox can have a lot of voxels, if they are in some regular compressible shape. A work-around is to use multiple entities butted up against each other. This looks fine for edged-cubic, but bad for either of the marching-cube extractors. xNNeighborID and similar properties are used to make neighbouring marching-cube entities play nicely with each other along their edges.*

PolyVox entites are a wrapper around the library from [Volumes of Fun](http://www.volumesoffun.com/) and as the wrapper is thin enough in places, if you plan on working with PolyVox entities in High Fidelity, reading the [original documentation](http://www.volumesoffun.com/polyvox-documentation/) would be worthwhile.

#### Sphere

Sphere entities are used to create sphere shaped entities.

In addition to the [common properties](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties), sphere entities have the following property:

| Property | Type   | Default Value                     | Description                              |
| -------- | ------ | --------------------------------- | ---------------------------------------- |
| `color`  | object | {red: 255, green: 255, blue: 255} | The `color` property is a JavaScript object which takes `red`, `green`, and `blue` name-value pairs and sets the color of the entity appropriately. The range of each color component is between 0 and 255. |

#### Text

The Text entity displays text against a flat plane, similar to a whiteboard or blackboard.

In addition to the [common properties](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties), Text entities have the following properties:

| Property          | Type    | Default Value                     | Description                              |
| ----------------- | ------- | --------------------------------- | ---------------------------------------- |
| `text`            | string  | ""                                | The `text` property specifies the text string to display. |
| `lineHeight`      | float   | 0.1                               | The `lineHeight` property specifies the height of the line of text. |
| `textColor`       | object  | {red: 255, green: 255, blue: 255} | The `textColor` property is a JavaScript object which takes `red`, `green`, and `blue` name-value pairs and specifies the text color.range of each color component is between 0 and 255. |
| `backgroundColor` | object  | {red: 0, green: 0, blue: 0}       | The `backgroundColor` property is a JavaScript object which takes `red`, `green`, and `blue` name-value pairs and specifies the color of the plane the text appears on. The range of each color component is between 0 and 255. |
| `faceCamera`      | boolean | FALSE                             | If `faceCamera` is set to `true`, the text entity will always face the camera. This is also known as billboarding. |

#### Web

Web entities display a web page with a specified URL on a plane.

In addition to the [common properties](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties), Web entities have the following property:

| Property    | Type   | Default Value | Description                              |
| ----------- | ------ | ------------- | ---------------------------------------- |
| `sourceUrl` | string | ""            | The `sourceUrl` property specifies the URL of the web page to display. |

#### Zone

A Zone entity is a 3-dimensional area that allows you to create a custom lighting environment.

In addition to the [common properties](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties), Zone entities have the following properties:

| Property           | Type          | Default Value                            | Description                              |
| ------------------ | ------------- | ---------------------------------------- | ---------------------------------------- |
| `shapeType`        | string        | "box"                                    | The `shapeType` property sets the shape of the zone. Possible shapes are: "box", "sphere", or "compound".set to "box", the zone's shape is the same as its bounding box. If set to "sphere", the zone's shape will be a stretched sphere. If set to "compound", the zone's shape will be the convex mesh specified by the `compoundShapeURL` property. All shapes will be stretched to fit the zone dimensions. |
| `compoundShapeURL` | string        | ""                                       | The `compoundShapeURL` sets the URL of the compound shape that will be used if the `shapeType` property is set to `compound`. |
| `color`            | object        | {red: 255, green: 255, blue: 255}        | The `color` property is a JavaScript object which takes `red`, `green`, and `blue` name-value pairs and specifies the color of the key light. |
| `intensity`        | float         | 1                                        | The `intensity` property sets the intensity of the key light. |
| `direction`        | object / vec3 | {x: 0.0, y: -1.0, z: 0.0f }              | The `direction` property sets the vector direction of the key light. |
| `ambientIntensity` | float         | 0.5                                      |                                          |
| `ambientUrl`       | string        | ""                                       |                                          |
| `sunModelEnabled`  | boolean       | FALSE                                    |                                          |
| `stageLatitude`    | float         | 37.777                                   | The `stageLatitude` property sets the latitude of the sun model. |
| `stageLongitude`   | float         | 122.407                                  | The `stageLongitude` property sets the longitude of the sun model. |
| `stageAltitude`    | float         | The `stageAltitude` property sets the altitude of the sun model. | 0.03                                     |
| `automaticHourDay` | boolean       | FALSE                                    |                                          |
| `stageDay`         | int           | 60                                       | The `stageDay` property sets the calendar day of the sun model. |
| `stageHour`        | float         | 12.0                                     | The `stageHour` property sets the time of the sun model. |
| `backgroundMode`   | string        | ""                                       | Other options are: "Skybox" and "Atmosphere". |





## Callbacks

## clickDownOnEntity()<a id="c1"></a>

The `clickDownOnEntity()` event is sent when you begin clicking the mouse button while the cursor is pointing to an entity.


### Event

`clickDownOnEntity(entityItemID, mouseEvent)`

### Arguments

**entityItemID: EntityItemID **: The ID of the entity clicked on

**mouseEvent: MouseEvent**: A JavaScript mouse event

### Examples

This is an example of an entity script which when [assigned](https://docs.highfidelity.com/docs/attaching-a-script-to-an-entity) to a non-model entity like a box or sphere, will change the color of the entity when you click on it.

```
(function(){ 
    var clicked = false;
    this.clickDownOnEntity = function(entityID, mouseEvent) { 
        if (clicked){
            Entities.editEntity(entityID, { color: { red: 0, green: 255, blue: 255} });
            clicked = false;
        }else{
            Entities.editEntity(entityID, { color: { red: 255, green: 255, blue: 0} });
            clicked = true;    
        }
    }; 
})
```



## clickReleaseOnEntity()<a id="c2"></a>

The `clickReleaseOnEntity()` event is sent when you release the mouse button after previously clicking it while the cursor is pointing to an entity.

Note: The entity that you initially clicked on will get this event even if you are no longer pointing at that entity.

### Event

`clickReleaseOnEntity(entityItemID, mouseEvent)`

### Arguments

**entityItemID: EntityItemID **: The ID of the entity pointed at the time of the initial click

**mouseEvent: MouseEvent**: A JavaScript mouse event

### Examples

This is an example of an entity script which when [assigned](https://docs.highfidelity.com/docs/attaching-a-script-to-an-entity) to a non-model entity such as a box or sphere, will change the color of the entity to red when you click down on it (`clickDownOnEntity()`) and then change it to blue when you release the mouse button (`clickReleaseOnEntity()`).

```
(function(){ 
    this.clickDownOnEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: 255, green: 0, blue: 0} });
        }
    this.clickReleaseOnEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: 0, green: 0, blue: 255} });
        }
})
```



## collisionWithEntity()<a id="c3"></a>

The `collisionWithEntity()` event is sent when an entity collides with another entity. Note: This callback only occurs on the client that is the simulation owner.



### Event

`collisionWithEntity(EntityItemID,EntityItemID,Collision)`

### Arguments

**entityID: EntityItemID**: The entity item IDs of the entities colliding

**Collision: Collision**: Collision data

### Examples

This is an example of an entity script which when [assigned](https://docs.highfidelity.com/docs/attaching-a-script-to-an-entity) to a non-model entity such as a box or sphere, will change the color of the entity when it collides with another entity.

Note: For this script to work, the entity's `collisionless` property must be set to `false`.

```
(function(){ 
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.collisionWithEntity = function(myID, otherID, collisionInfo) { 
        Entities.editEntity(myID, { color: { red: getRandomInt(128,255), 
                                            green: getRandomInt(128,255), 
                                            blue: getRandomInt(128,255)} });
    }; 
})
```



## enterEntity() <a id="c4"></a>

The `enterEntity()` event is sent when an avatar's center (i.e., hips) enters the bounds of an entity.


### Event

`enterEntity(EntityItemID)`

### Arguments

**entityID: EntityItemID**: The entity item ID of the entity

### Examples

This is an example of an entity script which when [assigned](https://docs.highfidelity.com/docs/attaching-a-script-to-an-entity) to a non-model entity such as a box, will cause the entity to change color and spin when the avatar enters the entity's bounds. The entity will continue to spin while the avatar is within the entity's bounds. If the avatar exits the bounds, the entity will change color again and slow down to stop spinning.

Note: To allow the avatar to enter the entity's bounds either make sure **Enable avatar collisions** is not selected or make sure the entity has its `ignoreForCollisions` [property](https://wiki.highfidelity.com/wiki/EntityItemProperties) set to `true`.

```
(function(){
    function change(entityID) {
        Entities.editEntity(entityID, { angularDamping: 0});
        Entities.editEntity(entityID, { angularVelocity: { x: 0, y: 60, z: 0} });
        Entities.editEntity(entityID, { color: { red: 255, green: 100, blue: 220} });
    }
    this.enterEntity = function(entityID) {
        print("enterEntity("+entityID.id+")");
        change(entityID);
    };
    this.leaveEntity = function(entityID) {
        print("leaveEntity("+entityID.id+")");
        Entities.editEntity(entityID, { angularDamping: 0.5});
        Entities.editEntity(entityID, { color: { red: 255, green: 190, blue: 20} });
    };
})
```



## holdingClickOnEntity() <a id="c5"></a>

The `holdingClickOnEntity()` event is sent when you continue to hold the mouse button down after previously clicking it while the cursor is pointing to an entity.

Note: The entity that you initially clicked on will continue to get this event even if you are no longer pointing at that entity.



### Event

`holdingClickOnEntity(entityItemID, mouseEvent)`

### Arguments

**entityItemID: [doc:entityitemid EntityItemID] **: The ID of the entity pointed at when the mouse button was first pressed down

**mouseEvent: MouseEvent**: A JavaScript mouse event

### Examples

This is an example of an entity script which when [assigned](https://docs.highfidelity.com/docs/attaching-a-script-to-an-entity) to a non-model entity such as a box or sphere, will change the color of the entity to random colors as you keep the mouse cursor pressed down.

```
(function(){ 
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    this.holdingClickOnEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: getRandomInt(128,255),
                                                green: getRandomInt(128,255),
                                                blue: getRandomInt(128,255)} });
        }
})
```



## hoverEnterEntity() <a id="c6"></a>

The `hoverEnterEntity()` event is sent when you move the mouse cursor so that it begins to point at an entity.




### Event

`hoverEnterEntity(entityItemID, mouseEvent)`

### Arguments

**entityItemID: EntityItemID**: The ID of the entity pointed at

**mouseEvent: MouseEvent**: A JavaScript mouse event

### Examples

This is an example of an entity script which when [assigned](https://docs.highfidelity.com/docs/attaching-a-script-to-an-entity) to a non-model entity such as a box or sphere, will change the color of the entity when you move the mouse over the entity (`hoverEnterEntity`) and when you move the mouse cursor so that it no longer points at the entity (`hoverLeaveEntity`).

```
(function(){ 
    this.hoverEnterEntity = function(entityID, mouseEvent) { 
            Entities.editEntity(entityID, { color: { red: 255, green: 0, blue: 0} });
        }
    this.hoverLeaveEntity = function(entityID, mouseEvent) { 
            Entities.editEntity(entityID, { color: { red: 0, green: 0, blue: 255} });
        }
})
```



## hoverLeaveEntity() <a id="c7"></a>

The `hoverLeaveEntity()` event is sent when you move the mouse cursor so that it no longer points at an entity that you previously started pointing to.

### Event

`hoverLeaveEntity(entityItemID, mouseEvent)`

### Arguments

**entityItemID: EntityItemID**: The ID of the entity pointed at

**mouseEvent: MouseEvent**: A JavaScript mouse event

### Examples

This is an example of an entity script which when [assigned](https://docs.highfidelity.com/docs/attaching-a-script-to-an-entity) to a non-model entity such as a box or sphere, will change the color of the entity when you move the mouse over the entity (`hoverEnterEntity()`) and when you move the mouse cursor so that it no longer points at the entity (`hoverLeaveEntity()`).

```
(function(){ 
    this.hoverEnterEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: 255, green: 0, blue: 0} });
        }
    this.hoverLeaveEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: 0, green: 0, blue: 255} });
        }
})
```



## hoverOverEntity() <a id="c8"></a>

The `hoverOverEntity()` event is sent when you move the mouse cursor so that it continues to be pointed at an entity that you previously started pointing to.



### Event

`hoverOverEntity(entityItemID, mouseEvent)`

### Arguments

**entityItemID: EntityItemID**: The ID of the entity pointed at

**mouseEvent: MouseEvent**: A JavaScript mouse event

### Examples

This is an example of an entity script which when [assigned](https://docs.highfidelity.com/docs/attaching-a-script-to-an-entity) to a non-model entity such as a box or sphere, will change the color of the entity when you move the mouse cursor as it points at the entity.

```
(function(){ 
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    this.hoverLeaveEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: getRandomInt(128,255),
                                                green: getRandomInt(128,255),
                                                blue: getRandomInt(128,255)} });
        }
})
```



## leaveEntity() <a id="c9"></a>

The `leaveEntity()` event is sent when an avatar's center (i.e., hips) leaves the bounds of an entity.

### Event

`leaveEntity(EntityItemID)`

### Arguments

**entityID: EntityItemID**: The entity item ID of the entity

### Examples

This is an example of an entity script which when [assigned](https://docs.highfidelity.com/docs/attaching-a-script-to-an-entity) to a non-model entity such as a box, will cause the entity to change color and spin when the avatar enters the entity's bounds. The entity will continue to spin while the avatar is within the entity's bounds. If the avatar exits the bounds, the entity will change color again and slow down to stop spinning.

Note: To allow the avatar to enter the entity's bounds either make sure **Enable avatar collisions** is not selected or make sure the entity has its `collisionless` [property](https://wiki.highfidelity.com/wiki/EntityItemProperties) set to `true`.

```
(function(){
    function change(entityID) {
        Entities.editEntity(entityID, { angularDamping: 0});
        Entities.editEntity(entityID, { angularVelocity: { x: 0, y: 60, z: 0} });
        Entities.editEntity(entityID, { color: { red: 255, green: 100, blue: 220} });
    }
    this.enterEntity = function(entityID) {
        print("enterEntity("+entityID.id+")");
        change(entityID);
    };
    this.leaveEntity = function(entityID) {
        print("leaveEntity("+entityID.id+")");
        Entities.editEntity(entityID, { angularDamping: 0.5});
        Entities.editEntity(entityID, { color: { red: 255, green: 190, blue: 20} });
    };
})
```



## mouseMoveOnEntity() <a id="c10"></a>

The `mouseMoveOnEntity()` event is sent when you move the mouse and the cursor is pointing at an entity.

### Event

`mouseMoveOnEntity(entityItemID, mouseEvent)`

### Arguments

**entityItemID: EntityItemID**: The ID of the entity pointed at

**mouseEvent: MouseEvent**: A JavaScript mouse event

### Examples

This is an example of an entity script which when [assigned](https://docs.highfidelity.com/docs/attaching-a-script-to-an-entity) to a non-model entity such as a box or sphere, will change the color of the entity when you move the mouse while over the entity (`mouseMoveOnEntity()`), when you click down on the entity (`mousePressOnEntity()`), and when you release the mouse button (`mouseReleaseOnEntity()`) after clicking down.

```
(function(){ 
    this.mouseMoveOnEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: 255, green: 0, blue: 0} });
        }
    this.mousePressOnEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: 0, green: 255, blue: 0} });
        }
    this.mouseReleaseOnEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: 0, green: 0, blue: 255} });
        }
})
```



## mousePressOnEntity() <a id="c11"></a>

The `mousePressOnEntity()` event is sent when you press the mouse button down and the cursor is pointing at an entity.

### Event

`mousePressOnEntity(entityItemID, mouseEvent)`

### Arguments

**entityItemID: EntityItemID**: The ID of the entity pointed at

**mouseEvent: MouseEvent**: A JavaScript mouse event

### Examples

This is an example of an entity script which when [assigned](https://docs.highfidelity.com/docs/attaching-a-script-to-an-entity) to a non-model entity such as a box or sphere, will change the color of the entity when you move the mouse while over the entity (`mouseMoveOnEntity()`), when you click down on the entity (`mousePressOnEntity()`), and when you release the mouse button (`mouseReleaseOnEntity()`) after clicking down.

```
(function(){
   this.mouseMoveOnEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: 255, green: 0, blue: 0} });
        }
    this.mousePressOnEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: 0, green: 255, blue: 0} });
        }
    this.mouseReleaseOnEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: 0, green: 0, blue: 255} });
        }
})
```



## mouseReleaseOnEntity() <a id="c12"></a>

The `mouseReleaseOnEntity()` event is sent when you release the mouse button and the cursor is pointing at an entity.

### Event

`mouseReleaseOnEntity(entityItemID, mouseEvent)`

## Arguments

**entityItemID: EntityItemID**: The ID of the entity pointed at

**mouseEvent: MouseEvent**: A JavaScript mouse event

### Examples

This is an example of an entity script which when [assigned](https://docs.highfidelity.com/docs/attaching-a-script-to-an-entity) to a non-model entity such as a box or sphere, will change the color of the entity when you move the mouse while over the entity (`mouseMoveOnEntity()`), when you click down on the entity (`mousePressOnEntity()`), and when you release the mouse button (`mouseReleaseOnEntity()`) after clicking down.

```
(function(){ 
    this.mouseMoveOnEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: 255, green: 0, blue: 0} });
        }
    this.mousePressOnEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: 0, green: 255, blue: 0} });
        }
    this.mouseReleaseOnEntity = function(entityID, mouseEvent) { 
        Entities.editEntity(entityID, { color: { red: 0, green: 0, blue: 255} });
        }
})
```



## Events

## addingEntity() <a id="e1"></a>

The `addingEntity()` event is sent when an entity has been added to the domain.

### Event

`addingEntity(entityID)`

### Arguments

**entityID: EntityItemID**: The entity item ID of the entity added

### Examples

This example listens for `addingEntity()` events and prints a line to the debug log for each event received.

```
Entities.addingEntity.connect(function(entityID){
  print ("Entity added.");
});
```



## canAdjustLocksChanged() <a id="e2"></a>

The `canAdjustLocksChanged()` event is sent if the permissions for adjusting locks has changed for the domain.

### Event

`canAdjustLocksChanged(bool)`

### Arguments

**bool:bool**:

### Examples

This example prints a notice to the debug log when lock permissions have been changed.

```
 Entities.canAdjustLocksChanged.connect(function(canAdjustLocks){
  print ("Lock permission have changed.");
});
```



## canRezChanged() <a id="e3"></a>

The `canRezChanged()` event is sent if the permissions for creating entities has changed for the domain.

### Event

`canRezChanged(bool)`

### Arguments

**bool:bool**

### Examples

This example prints a notice to the debug log when a permissions for adding entities has been changed.

```
 Entities.canRezChanged.connect(function(canRez){
  print ("Permissions for adding entities changed.");
});
```




##canRezTmpChanged() <a id="e4"></a>

In the [domain server permission settings](https://wiki.highfidelity.com/wiki/Server_Settings), you can specify which users can add new entities. Users can be granted permission to add permanent entities and entities with a finite lifetime (**Rez**) or they can be granted permission to create only entities with a finite lifetime (**Rez Temporary**).

The `canRezTmpChanged()` event is sent if the **Rez Temporary** permissions have been changed for the domain.

### Event

`canRezTmpChanged(bool)`

### Arguments

**bool:bool**

### Examples

This example prints a notice to the debug log when **Rez Temporary** permissions have been changed.

```
 Entities.canRezTmpChanged.connect(function(canRezTmp){
  print ("Rez Temporary permissions have been changed.");
});
```








## clearingEntities() <a id="e5"></a>

The `clearingEntities()` event is sent when you disconnect from a server and all known entities are cleared. This happens, for example, if the server shuts down or if you disconnect from one server to connect to a new server.


### Event

`clearingEntities()`

### Arguments

This event takes no parameters.

### Examples

This example prints "Entities cleared." to the debug log when you log out of one domain and log into another.

```
Entities.clearingEntities.connect(function(){
  print("Entities cleared.");
});
```




## deletingEntity() <a id="e6"></a>

The `deletingEntity()` event is sent when an entity has been deleted from the domain.

### Event

`deletingEntity(entityID)`

### Arguments

**entityID: EntityItemID**: The entity item ID of the entity deleted

### Examples

This example listens for `deletingEntity()` events and prints a line to the debug log for each event received.

```
Entities.deletingEntity.connect(function(entityID){
  print ("Entity deleted.");
});
```





## addAction()<a id="m1"></a>

Entities can have *actions* associated with them. An action is a callback registered with the physics engine that is called every physics simulation step.

Actions allow you to add behaviors to entities of the following types: "offset", "spring", "hold" or "travel-oriented". An offset action will keep an entity a specified distance away from a specified point, a spring action will pull an entity toward a point as if that entity were connected to that point by a spring, and a hold action will cause an entity to stick to an avatar's hand.

Depending on the action's type, it will have various arguments that help define the action's behavior. The action arguments are specified as a JSON object of [ActionArguments](https://wiki.highfidelity.com/wiki/ActionArguments).

`addAction()` is used to add a new action to an entity. `addAction()` returns the [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID) of the new action.

### Function

`addAction(actionTypeString, entityID, arguments) // Returns EntityItemID`

### Arguments

**actionTypeString: string**: Specifies the action type and can be "offset", "spring", "hold" or "travel-oriented".

**entityID: EntityItemID **: The ID of the entity to add the action to

**arguments: ActionArguments **: A JSON object of action arguments. Depending on the action's type, it will have various arguments.

### Returns

**EntityItemID**: The ID of the new action

### Examples

An spring action pulls an entity toward a point as if that entity were connected to that point by a spring. In this example, a sphere is created in a location close to the avatar. A spring action is then added to the sphere. If the sphere is moved from its original position, perhaps by clicking and dragging it with the mouse and then letting go, it will spring back to the original position.

```
// create and add a sphere
var pos = Vec3.sum(MyAvatar.position,Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "Sphere",
  position: pos,
  dimensions: {x:1, y:1, z:1},
  color: {red: 0 ,green:255, blue:0},
  gravity:{x:0.0, y:-3.0, z:0.0},
  damping: 0.2,
  collisionsWillMove: true
};
var Ent = Entities.addEntity(properties);

// add a "spring" action to the sphere
var newAction = Entities.addAction("spring", Ent, 
    {targetPosition: pos,
     linearTimeScale: 0.1
     });
```



## addEntity()<a id="m2"></a>

`addEntity()` is used to add new entities to your environment. `addEntity()` takes [EntityItemProperties](https://wiki.highfidelity.com/wiki/EntityItemProperties) as an argument and adds a new entity using the included properties.


### Function

`addEntity(properties) // Returns EntityItemID`

### Arguments

**properties: EntityItemProperties**: A JSON of entity properties. Entity properties must contain, at minimum, the `type` property.

### Returns

**EntityItemID**: The [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID) of the newly created entity

### Examples

Here is an example of adding an entity of type "sphere". While additional properties do not need to be specified, this example includes the `position` property to make sure that the entity appears in a location where it can be seen. To create a sphere and add it directly in front of the avatar's position, use:

```
// Create the sphere properties
var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "Sphere",
  position: pos
};

// Add the sphere
var Ent = Entities.addEntity(properties);
print("Entity added.");

```

Entities can have many [properties](https://wiki.highfidelity.com/wiki/EntityItemProperties) beyond `type` and `position`. For something a little more interesting, here is an example of adding an entity of type "model" using the bubble wand model available from hifi-public.s3.amazonaws.com.

```
// get the model and position
var wandModel = "http://hifi-public.s3.amazonaws.com/james/bubblewand/models/wand/wand.fbx";

var pos = Vec3.sum(MyAvatar.position, Vec3.multiply(3, Quat.getFront(Camera.getOrientation())));

// create the entity properties
var properties = {
    type: "Model",
    modelURL: wandModel,
    position: pos,
    dimensions: {
      x: 0.1,
      y: 1,
      z: 0.1
      },
    // must be enabled to be grabbable in the physics engine
    collisionsWillMove: true,
    shapeType: 'box'
    };

// add the wand 
var wand = Entities.addEntity(properties);
print("Entity added.");

```

![img](https://wiki.highfidelity.com/images/4/4e/Wand_entity.png)

 

If you have **Avatar > Enable avatar collision** enabled in Interface, when your avatar collides with the wand, the wand should bounce and float away from you.



## appendPoint()<a id="m3"></a>


`appendPoint()` appends a point to a Line or PolyLine entity's `linePoints` [property](https://wiki.highfidelity.com/wiki/EntityItemProperties).


### Function

`appendPoint (entityID, point) // Returns bool`

### Arguments

**entityID:EntityItemID**: The entityID of the Line or PolyLine entity to be modified

**point:vec3**: The point to append to the entity's `linePoints` [property](https://wiki.highfidelity.com/wiki/EntityItemProperties). Point coordinates are local to the position of the entity and must fall within the bounding-box set by the entity's `dimensions` property.

### Returns

**bool**: Returns `true` upon success

### Examples

This example creates a two point Line entity near the avatar's position. It then uses `appendPoint()` to add a third point to the line.

```
// creates a two point Line entity near the avatar's position
var pos = Vec3.sum(MyAvatar.position, Vec3.multiply(3, Quat.getFront(Camera.getOrientation())));

var testLine = Entities.addEntity({
    type: "Line",
    position: pos,
    color: {red: 255, green: 0, blue: 0},
    dimensions: {x: 10, y: 10, z: 10},
    linePoints: [{x: 0, y: 0, z: 0}, {x: 1, y: 1,z: -2}]
});

//  add a third point to the line
var test = Entities.appendPoint(testLine, {x:2, y:2, z:-3});
```





## callEntityMethod()<a id="m4"></a>


The `script` [property](https://wiki.highfidelity.com/wiki/EntityItemProperties) accepts a script or URL to a script file and attaches the script to the entity.

`callEntityMethod()` is used to call a method of an entity's script from another script. This method executes in the entity script engine.

Note:If the entity does not have an entity script or the method does not exist, this call will have no effect.


### Function

`callEntityMethod(entityID, method, params)`

### Arguments

**entityID: EntityItemID**: The `EntityItemID` for the entity where the script is attached

**method: string**: The method to be called

**params: string[]**: An array of parameter strings

### Examples

For this example there are two scripts, `paramsEnity.js` and `createParamsEntity.js`. `paramsEnity.js` is the script attached to the entity containing the method (`testParams()`) that will be called by the second script. `testParams()` parses the parameters passed to it to see if the parameters are JSON parameters.

```
// paramsEnity.js

(function() {
    function ParamsEntity() {
        return;
    }
    ParamsEntity.prototype = {
        preload: function(entityID) {
            print('entity loaded')
            this.entityID = entityID;
        },
        testParams: function(myID, paramsArray) {

            paramsArray.forEach(function(param) {
                var p;
                try {
                    p = JSON.parse(param);
                    print(\"it's a json param\")
                    print('json param property:' + p.thing);
                } catch (err) {
                    print('not a json param')
                    p = param;
                    print('param is:' + p);
                }
            });
        }
    }
    return new ParamsEntity();
});

```

The second script, `createParamsEntity.js`, creates a box entity with the first script attached. It then creates a set of parameters and uses `callEntityMethod()` to call the `testParams()` method in the script attached to the entity to test the parameters.

```
//  createParamsEntity.js
var PARAMS_SCRIPT_URL = Script.resolvePath('paramsEntity.js');

// Create a box entity with the paramsEntity.js script attached
var testEntity = Entities.addEntity({
    name: 'paramsTestEntity',
    dimensions: {
        x: 1,
        y: 1,
        z: 1
    },
    type: 'Box',
    position: {
        x: 0,
        y: 0,
        z: 0
    },
    visible: false,
    script: PARAMS_SCRIPT_URL
});

// Create some test parameters
var subData1 = ['apple', 'banana', 'orange'];
var subData2 = {
    thing: 1,
    otherThing: 2
};
var data = [subData1, JSON.stringify(subData2), 'third'];

// Use callEntityMethod to call the testParams method
Script.setTimeout(function() {
    print('sending data to entity')
    Entities.callEntityMethod(testEntity, 'testParams', data);
}, 1500)
```





## canAdjustLocks()<a id="m5"></a>

Locked entities cannot be edited or deleted. Entities are locked if the entity's `locked` [property](https://wiki.highfidelity.com/wiki/EntityItemProperties) is set to `true`. Before a locked entity can be changed or deleted, its `locked` property must be set to `false`; however, the `locked` property can only be changed by users who have been specified as **Allowed Editors** in the domain server permission settings.

`canAdjustLocks()` is used to determine if the domain server will allow the node or avatar to make changes to the entity's `locked` property.

### Function

`canAdjustLocks() // Returns bool`

### Arguments

This function has no parameters.

### Returns

**bool**: Returns `true` if the domain server will allow the node or avatar to make changes to the entity's `locked` property

### Examples

Using Stack Manager, you can specify users as **Allowed Editors** in the domain server permission settings. Users specified as allowed editors can edit locked entities. Note: If the **Allowed Editors** field is blank, anybody can edit locked entities.

To check if a user has permission to make changes before making changes, use the following:

```
if (!Entities.canAdjustLocks()) {
    Window.alert("You do not have permission to make changes.");
} else {
   // You have permission to make changes. Unlock the entity. 
    Entities.editEntity(entityID, {locked: false});
   // Make any other changes you want!
}
```





## canRez()<a id="m6"></a>

By default, all users can add (rez) entities. However; the domain server can be configured to specify that only certain users can add new entities.

`canRez()` is used to determine if the domain server will allow this node or avatar to add new entities.


### Function

`canRez() // Returns bool`

### Arguments

This function has no parameters.

### Returns

**bool**: Returns `true` if the domain server will allow this node or avatar to add new entities.

### Examples

Using Stack Manager, you can specify users as **Allowed Editors** in the domain server permission settings. Only users specified as allowed editors can edit entities; however, anyone can still add entities. To specify that only allowed editors can add entities, set the **Only Editors Can Create Entities** toggle to **ON**.

To check if a node or avatar has permission to add entities, use the following:

```
if (!Entities.canRez()) {
    Window.alert("You do not have permission to add entities.");
 } else {
  // Add entities here.
}
```





## canRezTmp()<a id="m7"></a>


In the [domain server permission settings](https://wiki.highfidelity.com/wiki/Server_Settings), you can specify which users can add new entities. Users can be granted permission to add permanent entities and entities with a finite lifetime (**Rez**) or they can be granted permission to create only entities with a finite lifetime (**Rez Temporary**).

`canRezTemp()` is used to determine if this node or avatar has been granted **Rez Temporary** permission.

### Function

`canRezTmp() // Returns bool`

### Arguments

This function has no parameters.

### Returns

**bool**: Returns `true` if the domain server will allow this node or avatar to add new entities with a finite lifetime

### Examples

To check if a node or avatar has permission to add entities with a finite lifetime, use the following:

```
if (!Entities.canRezTmp()) {
    Window.alert("You do not have permission to add temporary entities.");
 } else {
  // Add entities here.
}
```





## deleteAction()<a id="m8"></a>

`deleteAction()` removes an action from an entity.

### Function

`deleteAction(entityID, actionID)`

### Arguments

**entityID: EntityItemID**: The ID of the entity associated with the action to be deleted

**actionID: EntityItemID**: The ID of the action to be deleted

### Examples

This example finds the closest entity within 100.0 units from the avatar's position, gets the action IDs associated with the found entity, and then deletes all actions from the found entity.

```
// find the closest entity within 100.0 units from MyAvatar's position
var Ent = Entities.findClosestEntity(MyAvatar.position, 100.0);

// get the actionIDs associated with the found entity
var actionIDs = Entities.getActionIDs(Ent);

// delete all actions associtated with the entity
for (i = 0; i < actionIDs.length; i++) { 
   Entities.deleteAction(Ent, actionIDs[i]);
};
```





## deleteEntity()<a id="m9"></a>

`deleteEntity()` deletes entities from your environment.

### Function

`deleteEntity(entityID)`

### Arguments

**entityID: EntityItemID**: The `EntityItemID` of the entity to be deleted

### Examples

To create a white sphere directly in front of the avatar and then immediately delete it, use:

```
// create and add a white sphere
var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "Sphere",
  position: pos,
  color: {red:200,green:200,blue:200}
};
var Ent = Entities.addEntity(properties);

// delete the sphere you just added
Entities.deleteEntity(Ent);
```





## editEntity()<a id="m10"></a>

`editEntity()` is used to edit the properties of an entity in your environment. `editEntity()` takes the [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID) of the entity you want to edit and [EntityItemProperties](https://wiki.highfidelity.com/wiki/EntityItemProperties) as arguments and updates only the included properties of the given entity.

If the input `entityItemID` is for an unknown entity, this function will have no effect.

### Function

`editEntity(entityID, properties)`

### Arguments

**entityID: EntityItemID**: The `EntityItemID` of the entity to be edited

**properties: EntityItemProperties**: The `EntityItemProperties` that will be replacing the target entity's properties

### Examples

The example script below creates and adds a white sphere directly in front of the avatar. It then uses `editEntity()` to change the sphere's color.

```
// create a white sphere
var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "Sphere",
  position: pos,
  color: {red:200,green:200,blue:200}
};

// newProperties changes only the color field
var newProperties = {
  color: {red:0,green:200,blue:200}
};

// add the sphere
var Ent = Entities.addEntity(properties);
print("New entity color:");
print(JSON.stringify(Entities.getEntityProperties(Ent).color));

// edit the sphere
Entities.editEntity(Ent, newProperties);
print("Entity color changed to:");
print(JSON.stringify(Entities.getEntityProperties(Ent).color));
```





## findClosestEntity()<a id="m11"></a>

`findClosestEntity()` finds the closest entity to the specified center point, within a specified radius. If an entity is found, the function returns the [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID) of that entity.

Note: If the script engine context does not have access to entities, this function will not find any entities.

### Function

`findClosestEntity(center, radius) // Returns EntityItemID`

### Arguments

**center: vec3**: The center of the search sphere

**radius: number**: The radius of the search sphere

### Returns

**EntityItemID**: The ID of the found entity

### Examples
To find the closest entity within 100.0 units from the avatar's position, use:

```
var foundEntity = Entities.findClosestEntity(MyAvatar.position, 100.0);
```





## findEntities()<a id="m12"></a>

`findEntities()` finds all entities within a search sphere specified by a center point and radius. `findEntities()` returns an array containing the [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID)'s of all found entities.

Note: If the script engine context does not have access to entities, this function will not find any entities.

### Function

`findEntities(center, radius) // Returns EntityItemID[]`

### Arguments

**center: vec3**: The center position of the search sphere

**radius: number**: The radius of the search sphere

### Returns

**EntityItemID[]**: An array containing the [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID)'s of all found entities

### Examples

To find all entities within 100.0 units from the avatar's position, use:

```
var foundEntitiesArray = Entities.findEntities(MyAvatar.position, 100.0);
```





## findEntitiesInBox()<a id="m13"></a>

`findEntitiesInBox()` finds all entities within the box defined by the specified corner and dimensions. This function returns an array containing the [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID)'s of all found entities.

*Note: If the script engine context does not have access to entities, this function will not find any entities.*

### Function

`findEntitiesInBox(corner, dimensions) // Returns EntityItemID[]`

### Arguments

**corner:vec3**: The corner of the search box

**dimensions:vec3**: The dimensions of the search box

### Returns

**EntityItemID[ ]**: An array containing the [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID)'s of all found entities

#### Examples

To find all of the entities within a 10x10x10 search box with a corner at the avatar's position, use:

```
var boxBounds = {x: 10.0, y: 10.0, z: 10.0};
var e = Entities.findEntitiesInBox(MyAvatar.position, boxBounds);

```

To visualize the search box created in this example, first assume that the avatar is located at 0,0,0. In the coordinate system, + y is up, -z is forward, and +x is right. This means that the search box extends on the x axis from 0 to 10, on the y axis from 0 to 10, and on the z axis from 0 to -10.





## findRayIntersection()<a id="m14"></a>

Ray casting is a technique used to find the location of objects in a 3D world. Ray casting finds objects by calculating a mathematical ray from a specified origin and in a specified direction and then determining which object or objects the ray has hit. Ray casting can be used to find visible entities in the domain.

To find entities using ray casting, use `findRayIntersection()`. This function takes a ray of type `PickRay` and returns information about the first entity the ray has hit in a [RayToEntityIntersectionResult](https://wiki.highfidelity.com/wiki/RayToEntityIntersectionResult) JavaScript object.

Note: Light entities and zone entities, even if visible, are ignored and won't be found unless they have been set as "pickable" (see [setLightsArePickable()](https://wiki.highfidelity.com/wiki/SetLightsArePickable()) and [setZonesArePickable()](https://wiki.highfidelity.com/wiki/SetZonesArePickable())). In addition, `findRayIntersection()` does not lock the entity tree while the ray casting operation is in progress, and, therefore results may not be accurate. For more accurate results, use [findRayIntersectionBlocking()](https://wiki.highfidelity.com/wiki/FindRayIntersectionBlocking()).


### Function

`findRayIntersection(ray, precisionPicking) // Returns RayToEntityIntersectionResult`

### Arguments

**ray: PickRay**: An instance of the [PickRay](https://github.com/highfidelity/hifi/blob/d14820d3ef4328c73e0a9ca271b53e769c87aedb/libraries/shared/src/RegisteredMetaTypes.h) registered meta type: `{vec3 origin, vec3 direction}`. It is used to create a ray from a specified origin point `origin` in a specified direction `direction`.

**precisionPicking: bool**: If `true`, returns the exact position of where the ray hit. If `false`, returns the position of the object the ray hit.

### Returns

**RayToEntityIntersectionResult**

### Examples

The example below creates a ray going straight up from the avatar's position. If the ray intersects with an entity, the entity's ID is printed to the debug log.

```
// create a PickRay
var pickRay = {
    origin: MyAvatar.position,
    direction: Quat.getUp(MyAvatar.rotation)
    }

// find the ray intersection result using precision picking
var intersection = Entities.findRayIntersection(pickRay, true);

// check if the ray intersected with an enitity
if (intersection.intersects) {
    // print the ID of the entity to the debug log
    print(intersection.entityID);
    }
```





## findRayIntersectionBlocking()<a id="m15"></a>

Ray casting is a technique used to find the location of objects in a 3D world. Ray casting finds objects by calculating a mathematical ray from a specified origin and in a specified direction and then determining which object or objects the ray has hit. Ray casting can be used to find visible entities in the domain.

To find visible entities using ray casting, use `findRayIntersectionBlocking()`. This function takes a ray of type `PickRay` and returns information about the first entity the ray has hit in a [RayToEntityIntersectionResult](https://wiki.highfidelity.com/wiki/RayToEntityIntersectionResult) JavaScript object.

`findRayIntersectionBlocking()` locks the entity tree while the ray casting operation is in progress which allows for more accurate results (as opposed to [findRayIntersection()](https://wiki.highfidelity.com/wiki/FindRayIntersection())).

Note: Light entities and zone entities, even if visible, are ignored and won't be found unless they have been set as "pickable" (see [setLightsArePickable()](https://wiki.highfidelity.com/wiki/SetLightsArePickable()) and [setZonesArePickable()](https://wiki.highfidelity.com/wiki/SetZonesArePickable())).



### Function

`findRayIntersectionBlocking(ray, precisionPicking) // Returns RayToEntityIntersectionResult`

### Arguments

**ray: PickRay**: An instance of the [PickRay](https://github.com/highfidelity/hifi/blob/d14820d3ef4328c73e0a9ca271b53e769c87aedb/libraries/shared/src/RegisteredMetaTypes.h) registered meta type: `{vec3 origin, vec3 direction}`. It is used to create a ray from a specified origin point `origin` in a specified direction `direction`.

**precisionPicking: bool**: If `true`, returns the exact position of where the ray hit. If `false`, returns the position of the object the ray hit.

### Returns

**RayToEntityIntersectionResult**

### Examples

The example below creates a ray going straight up from the avatar's position. If the ray intersects with an entity, the entity's ID is printed to the debug log.

```
// create a PickRay
var pickRay = {
    origin: MyAvatar.position,
    direction: Quat.getUp(MyAvatar.rotation)
    }

// find the ray intersection result using precision picking
var intersection = Entities.findRayIntersectionBlocking(pickRay, true);

// check if the ray intersected with an enitity
if (intersection.intersects) {
    // print the ID of the entity to the debug log
    print(intersection.entityID);
    }
```


## getActionArguments()<a id="m16"></a>

`getActionArguments()` gets the current [ActionArguments](https://wiki.highfidelity.com/wiki/ActionArguments) for a specified action. `getActionArguments()` takes, as arguments, the [EntityItemIDs](https://wiki.highfidelity.com/wiki/EntityItemID) of an entity and the associated action and returns a JSON object of [ActionArguments](https://wiki.highfidelity.com/wiki/ActionArguments).


### Function

`getActionArguments(entityID, actionID) // Returns a JSON object`

### Arguments

**entityID: EntityItemID**: The ID of the entity associated with the action to be inspected

**actionID: EntityItemID**: The ID of the action being inspected

### Returns

**object**: a JSON object of [ActionArguments](https://wiki.highfidelity.com/wiki/ActionArguments)

### Examples
This example finds the closest entity to the avatar and gets all action IDs for the found entity. Then, for each action ID, it gets the action arguments and prints the action ID and action type to the debug log.

```
// find the closest entity within 100 units to the avatar
var Ent = Entities.findClosestEntity(MyAvatar.position, 100.0);

//get the action IDs for the found entity
var actionIDs = Entities.getActionIDs(Ent);
 
for (i = 0; i < actionIDs.length; i++) {
  // get the action arguments 
  var temp = Entities.getActionArguments(Ent, actionIDs[i]);
  // print out the ID and the action type to the debug log
  print ( "ID: " + actionIDs[i] + "
  Type: " + temp.type +"
");
};
```


## getActionIDs()<a id="m17"></a>


`getActionIDs()` is used to retrieve the IDs of actions associated with a particular entity. `getActionIDs()` takes an [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID) as the argument and returns an array of `EntityItemID`s.

### Function

`getActionIDs(entityID) // Returns EntityItemID[]`

### Arguments

**entityID: EntityItemID**: The entity item ID of the entity being probed for action IDs

### Returns

**EntityItemID[ ]**: An array of the [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID)'s of the found actions

### Examples

The following example finds the closest entity within 100.0 units from the avatar's position and then gets the action IDs associated with the found entity.

```
//  find the closest entity within 100.0 units from MyAvatar's position
var Ent = Entities.findClosestEntity(MyAvatar.position, 100.0);

// get the actionIDs associated with the found entity
var actionIDs = Entities.getActionIDs(Ent);
```


## getDrawZoneBoundaries()<a id="m18"></a>

When in edit mode, if zone entity boundaries are drawn, the boundaries of the zone are visible. By default, zone boundaries are not drawn. This setting is global and applies to all zone entities in the environment.

`getDrawZoneBoundaries()` returns `true` if zone boundaries will be drawn.

>>>>> This setting is also configurable in Interface: **View > Show Zones in Edit Mode**.

### Function

`getDrawZoneBoundaries() // Returns bool`

### Arguments

This function has no parameters.

### Returns

**bool**: Returns `true` if zone boundaries will be drawn

### Examples

You can toggle the visibility of zone boundaries in Interface using **View > Show Zones in Edit Mode**. To test if zone boundaries will be drawn and print the answer to the debug log, use:

```
if (Entities.getDrawZoneBoundaries()){
  print("Zone boundaries are drawn.");
}else{
  print("Zone boundaries are not drawn.");
};
```


## getEntityProperties()<a id="m19"></a>

`getEntityProperties()` gets the current [properties](https://wiki.highfidelity.com/wiki/EntityItemProperties) for the specified entity. `getEntityProperties()` takes an [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID) as an argument and returns [EntityItemProperties](https://wiki.highfidelity.com/wiki/EntityItemProperties). To just get specific [properties](https://wiki.highfidelity.com/wiki/EntityItemProperties), use the optional `desiredProperties` argument. This argument takes an array of property name strings.

Note: If the script engine context does not have access to entities, this function will not return results.

### Function

`getEntityProperties(entityID, desiredProperties) // Returns EntityItemProperties`

### Arguments

**entityID: EntityItemID**: The `EntityItemID` of the target entity

**properties: string[]**: An array of strings used to specify the properties to return. If this parameter is not included, all properties are returned.

### Returns

**EntityItemProperties**

### Examples

If you want to create a new entity that is an exact copy of an entity that already exists in your environment, you can use `getEntityProperties()` to get the properties of the entity you want to copy and then pass those properties in when creating the new entity. For example, to create a white sphere directly in front of your avatar and then create a second duplicate white sphere in the same location, use:

```
// create and add a white sphere
var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "Sphere",
  position: pos,
  color: {red:200,green:200,blue:200}
};
var Ent = Entities.addEntity(properties);

// create a second entity that is a copy of the first by passing in the first entity's properties 
var copyEnt = Entities.addEntity(Entities.getEntityProperties(Ent));

```

To only get the "position" and "rotation" properties of the sphere you created, use:

```
var twoProperties = Entities.getEntityProperties(Ent, ["position", "rotation"]);
```



## getLifetimeBPS()<a id="m20"></a>

You can get network packet and bit rate information to/from the client/server.

`getLifetimeBPS()` gets the overall bytes per second (BPS) send rate for the total running time of the client.

### Function

`getLifetimeBPS() // Returns float`

### Arguments

This function has no parameters.

### Returns

**float**: The overall bytes per second (BPS) send rate for the total running time of the client

### Examples

This example simply prints the lifetime BPS send rate to the debug log.

```
print("Lifetime BPS: " + Entities.getLifetimeBPS());
```


## getLifetimeBPSQueued()<a id="m21"></a>

You can get network packet and bit rate information to/from the client/server.

`getLifetimeBPSQueued()` gets the bytes per second (BPS) queued rate for the total running time of the client.


### Function

`getLifetimeBPSQueued() // Returns a float`

### Arguments

This function has no parameters.

### Returns

**float**: The bytes per second (BPS) queued rate for the total running time of the client

### Examples

This example simply prints the lifetime BPS queued rate to the debug log.

```
print("Lifetime BPS queued: " + Entities.getLifetimeBPSQueued());
```



## getLifetimeBytesQueued()<a id="m22"></a>


You can get network packet and bit rate information to/from the client/server.

`getLifetimeBytesQueued()` gets the total bytes queued by this client over its lifetime.


### Function

`getLifetimeBytesQueued() // Returns an int`

### Arguments

This function has no parameters.

### Returns

**int**: the total bytes queued by this client over its lifetime

### Examples

This example simply prints the total bytes queued to the debug log.

```
print("Total bytes queued:" + Entities.getLifetimeBytesQueued());
```


## getLifetimeBytesSent()<a id="m23"></a>

You can get network packet and bit rate information to/from the client/server.

`getLifetimeBytesSent()` gets the total bytes sent by this client over its lifetime.

### Function

`getLifetimeBytesSent() // Returns an int`

### Arguments

This function has no parameters.

### Returns

**int**: The total bytes sent by this client over its lifetime

### Examples

This example simply prints the total bytes sent to the debug log.

```
print("Total bytes sent:" + Entities.getLifetimeBytesSent());
```


## getLifetimeInSeconds()<a id="m24"></a>


You can get network packet and bit rate information to/from the client/server.

`getLifetimeInSeconds()` gets the lifetime of the client from the time the first packet was sent to now in seconds.

### Function

`getLifetimeInSeconds() // Returns a float`

### Arguments

This function has no parameters.

### Returns

**float**: The lifetime of the client from the time the first packet was sent to now in seconds

### Examples

This example simply prints the lifetime of the client to the debug log.

```
print("Client Lifetime:" + Entities.getLifetimeInSeconds());
```


## getLifetimeInUsecs()<a id="m25"></a>



You can get network packet and bit rate information to/from the client/server.

`getLifetimeInUsecs()` gets the lifetime of the client from the time the first packet was sent to now in microseconds.

### Function

`getLifetimeInUsecs() // Returns an int`

### Arguments

This function has no parameters.

### Returns

**int**: The lifetime of the client from the time the first packet was sent to now in microseconds

### Examples

This example simply prints the lifetime of the client to the debug log.

```
print("Client Lifetime: " + Entities.getLifetimeInUsecs());
```


## getLifetimePPS()<a id="m26"></a>

You can get network packet and bit rate information to/from the client/server.

`getLifetimePPS()` gets the packets per second send rate of the client over its lifetime.

### Function

`getLifetimePPS() // Returns a float`

### Arguments

This function has no parameters.

### Returns

**float**: The packets per second send rate of the client over its lifetime

### Examples

This example simply prints the packets per second send rate to the debug log.

```
print("PPS: " + Entities.getLifetimeBytesQueued());
```





## getLifetimePPSQueued()<a id="m27"></a>


You can get network packet and bit rate information to/from the client/server.

`getLifetimePPSQueued()` gets the packets per second queued rate of the client over its lifetime.

### Function

`getLifetimePPSQueued() // Returns a float`

### Arguments

This function has no parameters.

### Returns

**float**: The packets per second queued rate of the client over its lifetime

### Examples

This example simply prints the packets per second queued rate to the debug log.

```
print("PPS queued:" + Entities.getLifetimePPSQueued());
```


## getLifetimePacketsQueued()<a id="m28"></a>

You can get network packet and bit rate information to/from the client/server.

`getLifetimePacketsQueued()` gets the total packets queued by this client over its lifetime.

### Function

`getLifetimePacketsQueued() // Returns an int`

### Arguments
This function has no parameters.

### Returns

**int**: The total packets queued by this client over its lifetime

### Examples

This example simply prints the total packets queued to the debug log.

```
print("Total packets queued:" + Entities.getLifetimePacketsQueued());
```


## getLifetimePacketsSent()<a id="m29"></a>

You can get network packet and bit rate information to/from the client/server.

`getLifetimePacketsSent()` gets the total packets sent by this client over its lifetime.

### Function

`getLifetimePacketsSent() // Returns an int`

### Arguments

This function has no parameters.

### Returns

**int**: The total packets sent by this client over its lifetime

### Examples

This example simply prints the total packets sent to the debug log.

```
print("Total packets sent:" + Entities.getLifetimePacketsSent());
```


## getLightsArePickable()<a id="m30"></a>

If an entity can be "picked," it can be returned as a ray intersection result (see [findRayIntersection()](https://wiki.highfidelity.com/wiki/FindRayIntersection())). By default, light entities cannot be picked; however, this setting is configurable in Interface ( **Edit > Allow Selecting of Lights**). This setting is global and applies to all light entities in the environment.

`getLightsArePickable()` returns `true` if light entities can be picked.

### Function

`getLightsArePickable() // Returns bool`

### Arguments

This function has no parameters.

### Returns

**bool**: Returns `true` if light entities can be picked

### Examples

You can toggle the ability to pick light entities in Interface using **Edit > Allow Selecting of Lights**. To test if light entities can be picked, use:

```
if (Entities.getLightsArePickable()){
  print("You can pick lights.");
}else{
  print("You cannot pick lights.");
};
```



## getPacketsPerSecond()<a id="m31"></a>

You can get network packet and bit rate information to/from the client/server.

`getPacketsPerSecond()` gets the maximum number of packets that can be sent per second.

### Function

`getPacketsPerSecond() // Returns an int`

### Arguments

This function has no parameters.

### Returns
**int**: The maximum number of packets that can be sent per second

### Examples
This example simply prints the maximum number of packets that can be sent per second to the debug log.

```
print("Max PPS:" + Entities.getPacketsPerSecond());
```





## getZonesArePickable()<a id="m32"></a>

If an entity can be "picked," it can be returned as a ray intersection result (see [findRayIntersection()](https://wiki.highfidelity.com/wiki/FindRayIntersection())). By default, zone entities cannot be picked. This setting is global and applies to all zone entities in the environment.

`getZonesArePickable()` returns `true` if zone entities can be picked.

### Function

`getZonesArePickable() // Returns bool`

### Arguments

This function has no parameters.

### Returns

**bool**: Returns `true` if zone entities can be picked

### Examples

To test if zone entities can be picked, use:

```
if (Entities.getZonesArePickable()){
  print("You can pick zones.");
}else{
  print("You cannot pick zones.");
};
```





## hasPacketsToSend()<a id="m33"></a>

You can get network packet and bit rate information to/from the client/server.

`hasPacketsToSend()` is used to check if there are packets waiting in the send queue to be sent.

### Function

`hasPacketsToSend() // Returns a bool`

### Arguments

This function has no parameters.

### Returns
**bool**: Returns `true` if there are packets waiting in the send queue to be sent

### Examples

This example simply prints `true` to the debug log if there are packets waiting in the send queue to be sent.

```
print("Has packets to send:" + Entities.hasPacketsToSend());
```


## localCoordsToVoxelCoords()<a id="m34"></a>

`localCoordsToVoxelCoords()` converts the specified local coordinates in the reference frame of the specified PolyVox entity to voxel coordinates of the same entity.

Note: Local coordinates have the same scale as world coordinates.

### Function

`localCoordsToVoxelCoords(entityID, localCoords) // Returns vec3`

### Arguments

**entityID: EntityItemID**: The PolyVox entity that is the frame of reference for the specified local coordinates and the returned voxel coordinates

**localCoords: vec3**: The local coordinates to be converted to voxel coordinates

### Returns

**vec3**: The voxel coordinates

### Examples

This example creates a PolyVox entity just in front of the avatar. It then uses `localCoordsToVoxelCoords()` to get the local coordinates of the voxel position of 1,1,1 for the newly created entity.

```
// Create entity properties
var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "PolyVox",
  position: pos
};

// Add the new PolyVox entity
var Ent = Entities.addEntity(properties);

// Get the local coordinates of the voxel at position 1,1,1
var voxelCoords = Entities.localCoordsToVoxelCoords(Ent, {x:1, y:1, z:1});
```


## packetsToSendCount()<a id="m35"></a>


You can get network packet and bit rate information to/from the client/server.

`packetsToSendCount()` gets the number of packets in the send queue waiting to be sent.

### Function

`packetsToSendCount() // Returns an int`

### Arguments

This function has no parameters.

### Returns

**int**: The number of packets in the send queue waiting to be sent.

### Examples

This example simply prints the number of packets in the send queue waiting to be sent to the debug log.

```
print("Number of packets:" + Entities.packetsToSendCount());
```



## serversExist()<a id="m36"></a>

`serversExist()` is used to check if an entity server to send to exists.

### Function

`serversExist() // Returns a bool`

### Arguments

This function has no parameters.

### Returns

**bool**: Returns `true` if an entity server to send to exists

### Examples

This example simply prints `true` to the debug log if an entity server to send to exists.

```
print("Server exists:" + Entities.serversExist());
```





## setAllPoints()<a id="m37"></a>

`setAllPoints()` sets the `linePoints` [property](https://wiki.highfidelity.com/wiki/EntityItemProperties#Line) of a Line or PolyLine entity to the specified array of points.

### Function

`setAllPoints(entityID, points) // Returns bool`

### Arguments

**entityID:EntityItemID**: The entityID of the Line or PolyLine entity to be modified

**points: vec3[]**: The array of points to set the entity's `linePoints` [property](https://wiki.highfidelity.com/wiki/EntityItemProperties#Line) property to. Point coordinates are local to the position of the entity and must fall within the bounding-box set by the entity's `dimensions` property.

### Returns

**bool**: Returns `true` upon success

### Examples

This example creates a two point Line entity near the avatar's position. It then uses `setAllPoints()` to change the `linePoints` property to a new array of points.

```
// creates a two point Line entity near the avatar's position
var pos = Vec3.sum(MyAvatar.position, Vec3.multiply(3, Quat.getFront(Camera.getOrientation())));

var testLine = Entities.addEntity({
    type: "Line",
    position: pos,
    color: {red: 255, green: 0, blue: 0},
    dimensions: {x: 10, y: 10, z: 10},
    linePoints: [{x: 0, y: 0, z: 0}, {x: 1, y: 1,z: -2}]
});

//  change the linePoints to a new set of points 
var test = Entities.setAllPoints(testLine, 
                               [{x: 1, y: 1, z: 1}, {x: 2, y: 2,z: -3}]);
```



## setAllVoxels()<a id="m38"></a>

`setAllVoxels()` sets the value of all voxels in a specified PolyVox entity.

### Function

`setAllVoxels(entityID, value) // Returns bool`

### Arguments

**entityID: EntityItemID**: The entityID of the PolyVox entity where the voxel values will be set

**value: number**: The value the voxels will be set to. Values should be in the range of 0 to 255. Currently, a value of 0 is "off" and a value of 1 through 255 is "on".

### Returns

**bool**: Returns `true` if the voxel values were changed

### Examples

This example adds a PolyVox entity in a position close to the avatar where it is easy to see. Then, for that entity, it sets the value of all voxels in the entity to 255 ("on").

```
// Create a PolyVox entity in a position in front of the avatar where it will easily be seen.
var pos = Vec3.sum(MyAvatar.position,Quat.getFront(MyAvatar.orientation)); 
var tex = "http://public.highfidelity.io/cozza13/tuscany/Concrete2.jpg" 
var properties = {
  type: "PolyVox",
  position: pos,
  xTextureURL: tex,
  yTextureURL: tex, 
  zTextureURL: tex 
};
var Ent = Entities.addEntity(properties);

// Set the value of all voxels in the entity to 255.
var test = Entities.setAllVoxels(Ent, 255);

```

The resulting entity looks like this:

![img](https://wiki.highfidelity.com/images/f/f4/Voxelall.png)

A PolyVox entity where all voxels have a value of 255 ("on").





## setDrawZoneBoundaries()<a id="m39"></a>

When in edit mode, if zone entity boundaries are drawn, the boundaries of the zone are visible. By default, zone boundaries are not drawn. This setting is global and applies to all zone entities in the environment.

`setDrawZoneBoundaries()` is used to toggle the draw zone boundaries setting. When set to `true`, zone boundaries will be drawn.

>>>>> This setting is also configurable in Interface:  **View > Show Zones in Edit Mode**.

### Function

`setDrawZoneBoundaries(value)`

### Arguments

**value: bool**: `true` indicates zone boundaries will be drawn (be visible) when in edit mode

### Examples

To enable draw zone boundaries, use:

```
Entities.setDrawZoneBoundaries (true);
```


## setLightsArePickable()<a id="m40"></a>

If an entity can be "picked," it can be returned as a ray intersection result (see [findRayIntersection()](https://wiki.highfidelity.com/wiki/FindRayIntersection())). By default, light entities cannot be picked. This setting is global and applies to all light entities in the environment. `setLightsArePickable()` is used to toggle the ability to pick light entities.

>>>>> This setting is also configurable in Interface: **Edit > Allow Selecting of Lights**.

### Function

`setLightsArePickable(value)`

### Arguments

**value: bool**: `true` will allow picking of light entities and `false` will disable picking of light entities

### Examples

To enable picking of light entities, use:

```
Entities.setLightsArePickable(true);
```


## setPacketsPerSecond() <a id="m41"></a>

`setPacketsPerSecond()` sets the maximum number of packets that can be sent per second.

### Function

`setPacketsPerSecond(packetsPerSecond)`

### Arguments

**packetsPerSecond:int**: The maximum number of packets that can be sent per second

### Examples

This examples sets the maximum number of packets that can be sent per second to 40000.

```
Entities.setPacketsPerSecond(40000);
```



## setVoxel() <a id="m42"></a>

`setVoxel()` sets the value of a specific voxel within a specified PolyVox entity.

### Function

`setVoxel(entityID, position, value) // Returns bool`

### Arguments

**entityID: EntityItemID**: The entityID of the PolyVox entity where the specified voxel's value will be set

**position: vec3**: The voxel position of the voxel whose value will be set

**value: number**: The value the voxel will be set to. Values should be in the range of 0 to 255. Currently, a value of 0 is "off" and a value of 1 through 255 is "on".

### Returns

**bool**: Returns `true` if the voxel value was changed

### Examples

This example creates a PolyVox entity close to the avatar's position where it can easily be seen. It then sets the voxel value to 255 ("on") for the voxel at position 5, 5, 5.

```
// Add a PolyVox entity in position close to the avatar so it is easy to see.
var pos = Vec3.sum(MyAvatar.position,Quat.getFront(MyAvatar.orientation)); 
var tex = "http://public.highfidelity.io/cozza13/tuscany/Concrete2.jpg"; 
var properties = {
  type: "PolyVox",
  position: pos,
  xTextureURL: tex,
  yTextureURL: tex, 
  zTextureURL: tex 
};
var Ent = Entities.addEntity(properties);

// Set the value for the voxel at 5,5,5.
var test = Entities.setVoxel(Ent, {x:5, y:5, z:5}, 255);

```

The resulting entity looks like this:

![img](https://wiki.highfidelity.com/images/3/3f/Voxeloneset.png)

A PolyVox entity where only the voxel at position 5, 5, 5 has a value of 255 ("on").





## setVoxelsInCuboid() <a id="m43"></a>

`setVoxelsInCuboid()` sets the value of all voxels in a specified PolyVox entity within the specified rectangular volume.

### Function

`setVoxelsInCuboid(entityID, lowPosition, cuboidSize, value) // Returns bool`

### Arguments

**entityID: EntityItemID**: The entityID of the PolyVox entity where the specified voxel values will be set

**lowPosition: vec3**: The voxel position of the lower left corner of the rectangular volume specified by `cuboidSize`

**cuboidSize: vec3**: The dimensions of the rectangular volume

**value: number**: The value the voxels will be set to. Values should be in the range of 0 to 255. Currently, a value of 0 is "off" and a value of 1 through 255 is "on".

### Returns

**bool**: Returns `true` if the voxel values were changed

### Examples

This example creates a PolyVox entity close to the avatar's position where it can easily be seen. It then sets the voxel values to 255 ("on") for the voxels within a 10x10x10 cube with the lower corner at position 0, 0, 0.

```
// Add a PolyVox entity in position close to the avatar so it is easy to see.
var pos = Vec3.sum(MyAvatar.position,Quat.getFront(MyAvatar.orientation)); 
var tex = "http://public.highfidelity.io/cozza13/tuscany/Concrete2.jpg"; 
var properties = {
  type: "PolyVox",
  position: pos,
  xTextureURL: tex,
  yTextureURL: tex, 
  zTextureURL: tex 
};
var Ent = Entities.addEntity(properties);

// Set the value for the voxel for a 5x5x5 cubeoid with the lower corner at position 0,0,0. 
var test = Entities.setVoxelsInCuboid(Ent, {x:0, y:0, z:0}, {x:10, y:10, z:10}, 255);

```

The resulting entity looks like this:

![img](https://wiki.highfidelity.com/images/2/24/Voxelcubes.png)

A PolyVox entity where all voxels with in a 10x10x10 cube with lower corner at position 0, 0, 0 have a value of 255 ("on").



## setVoxelSphere() <a id="m44"></a>

`setVoxelSphere()` sets the value of all voxels in a specified PolyVox entity within a radius of the indicated point.

### Function

`setVoxelSphere(entityID, center, radius, value) // Returns bool`

### Arguments

**entityID: EntityItemID**: The entityID of the PolyVox entity where the specified voxel values will be set

**center: vec3**: The center point of the sphere in word-space coordinates

**radius: number**: The radius of the sphere

**value: number**: The value the voxels will be set to. Values should be in the range of 0 to 255. Currently, a value of 0 is "off" and a value of 1 through 255 is "on".

### Returns

**bool**: Returns `true` if the voxel values were changed

### Examples

This example adds a PolyVox entity in a position close to the avatar where it is easy to see. Then, for that entity, it sets the value of the voxels in a sphere of radius 0.5 centered at the entity's position to 255 ("on").

```
// Add a PolyVox entity in position close to the avatar so it is easy to see.
var pos = Vec3.sum(MyAvatar.position,Quat.getFront(MyAvatar.orientation)); 
var tex = "http://public.highfidelity.io/cozza13/tuscany/Concrete2.jpg"; 
var properties = {
  type: "PolyVox",
  position: pos,
  xTextureURL: tex,
  yTextureURL: tex, 
  zTextureURL: tex 
};
var Ent = Entities.addEntity(properties);

// Set the value for the voxels within a sphere of radius .05 units.
var test = Entities.setVoxelSphere(Ent, pos, 0.05, 255);

```

The resulting entity looks like this:

![img](https://wiki.highfidelity.com/images/5/58/Voxelsphere.png)

A PolyVox entity where all voxels in a sphere of radius 0.5 centered at the entity's position have a value of 255 ("on").



## setZonesArePickable() <a id="m45"></a>

If an entity can be "picked," it can be returned as a ray intersection result (see [findRayIntersection()](https://wiki.highfidelity.com/wiki/FindRayIntersection())). By default, zone entities cannot be picked. This setting is global and applies to all zone entities in the environment. `setZonesArePickable()` is used to toggle the ability to pick zone entities.

### Function

`setZonesArePickable(value)`

#### Arguments

**value: bool**: `true` will allow picking of zone entities and `false` will disable picking of zone entities

### Examples

To enable picking of zone entities, use:

```
Entities.setZonesArePickable(true);
```





## updateAction() <a id="m46"></a>

`updateAction()` takes the [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID) of the entity associated with the action you want to update, the [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID) of the specific action you want to update, and a JSON of [ActionArguments](https://wiki.highfidelity.com/wiki/ActionArguments) as arguments and updates only the included arguments of the given action.

### Function

`updateAction(entityID, actionID, arguments) // Returns bool`

### Arguments

**entityID: EntityItemID**: The ID of the entity associated with the action to be updated

**actionID: EntityItemID**: The ID of the action to be updated

**arguments: ActionArguments**: A JSON object of the action arguments. Depending on the action's type, it will have various arguments.

### Returns

**bool**: Returns `true` if changes were made

### Examples

In this example, a sphere is created in a location close to the avatar. A spring action is then added to the sphere. Using `updateAction()`, the spring action is updated to change the `linearTimeScale` argument which represents how many seconds it takes for the entity to finish moving.

```
// create and add a sphere
var pos = Vec3.sum(MyAvatar.position,Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "Sphere",
  position: pos,
  dimensions: {x:1, y:1, z:1},
  color: {red: 0 ,green:255, blue:0},
  gravity:{x:0.0, y:-3.0, z:0.0},
  damping: 0.2,
  collisionsWillMove: true
};
var Ent = Entities.addEntity(properties);

// add a "spring" action to the sphere
var newAction = Entities.addAction("spring", Ent, 
      {targetPosition: pos,
       linearTimeScale: 0.1
       });

//Update the linearTimeScale property for the new action
var temp = Entities.updateAction(Ent, newAction, {linearTimeScale: 0.2});
```





## voxelCoordsToLocalCoords() <a id="m47"></a>

`voxelCoordsToLocalCoords()` converts the specified voxel coordinates in the reference frame of the specified PolyVox entity to local coordinates in the entity's frame of reference.

>>>>> Local coordinates have the same scale as world coordinates.


### Function

`voxelCoordsToLocalCoords(entityID, voxelCoords) // Returns vec3`

### Arguments

**entityID: EntityItemID**: The PolyVox entity that is the frame of reference for the specified voxel coordinates and the returned local coordinates

**voxelCoords: vec3**: The voxel coordinates to be converted to local coordinates

### Returns

**vec3**: Coordinates in local-space

### Examples

This example creates a PolyVox entity just in front of the avatar. It then uses `voxelCoordsToLocalCoords()` to get the voxel coordinates of the local position of 1,1,1 for the newly created entity.

```
// Create entity properties
var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "PolyVox",
  position: pos
};

// Add the new PolyVox entity
var Ent = Entities.addEntity(properties);

// Get the voxel coordinates of the local position 1, 1, 1
var localCoords = Entities.voxelCoordsToLocalCoords(Ent, {x:1, y:1, z:1});
```





## voxelCoordsToWorldCoords() <a id="m48"></a>

`voxelCoordsToWorldCoords()` converts the specified voxel coordinates in the reference frame of the specified PolyVox entity to world coordinates.

Note: An individual voxel is centered on its world-space coordinates (rather than having some corner of the voxel being coincident with the world-space coordinate).

### Function

`voxelCoordsToWorldCoords(entityID, voxelCoords) // Returns vec3`

### Arguments

**entityID: EntityItemID**: The entity ID of the PolyVox entity that is the reference frame for the specified voxel coordinates

**voxelCoords: vec3**: The voxel coordinates to be converted to world coordinates

### Returns

**vec3**: coordinates in world-space

### Examples

This example gets the world coordinates for the voxel origin point for a newly created Polyvox entity.

```
// Create the entity properties
var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "PolyVox",
  position: pos
};

// Add the new PolyVox entity
var Ent = Entities.addEntity(properties);

// Get the world coordinates for the voxel origin point
var worldCoords = Entities.voxelCoordsToWorldCoords(Ent, {x:0, y:0, z:0});
```





## worldCoordsToVoxelCoords() <a id="m49"></a>

`worldCoordsToVoxelCoords()` converts the specified world coordinates to voxel coordinates in the reference frame of the specified PolyVox entity.

Note: This function may return voxel coordinates that are outside of the defined voxel space. If you [set the voxel value](https://wiki.highfidelity.com/wiki/SetVoxel()) to 255 ("on") for a voxel outside of the defined voxel space, you won't see any change.



### Function

`worldCoordsToVoxelCoords(entityID, worldCoords) // Returns vec3`

### Arguments

**entityID: EntityItemID**: The PolyVox entity that is the reference frame for the returned voxel coordinates

**worldCoords: vec3**: The world coordinates to be converted to voxel coordinates

### Returns

**vec3**: The voxel coordinates

### Examples

In this example, a PolyVox entity is created just in front of the avatar. It then gets the voxel coordinates for the avatar's position.

```
// Create entity properties
var pos = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));  
var properties = {
  type: "PolyVox",
  position: pos
};

// Add the new PolyVox entity
var Ent = Entities.addEntity(properties);

// Get the current voxel coordinates of the avatar
var AvatarPositionInVoxelCoords = Entities.worldCoordsToVoxelCoords(Ent, MyAvatar.position);
```
