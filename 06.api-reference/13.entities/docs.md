---
title: 'Entities'
taxonomy:
    category:
        - docs
---

* [**Properties**](#properties)
* [**Methods**](#methods)
* [**Events**](#events)



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
| [ServersExist()](#m36)                   |
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
| [SetVoxelsInCuboid()](#m43)              |
| [SetVoxelSphere()](#m44)                 |
| [SetZonesArePickable()](#m45)            |
| [UpdateAction()](#m46)                   |
| [VoxelCoordsToLocalCoords()](#m47)       |
| [VoxelCoordsToWorldCoords()](#m48)       |
| [WorldCoordsToVoxelCoords()](#m49)       |

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


##Callbacks
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

## EntityItemProperties

An entity's appearance (color, size, position etc.) and behavior (animation, collision, interaction, etc.) are defined by the entity's properties specified in `EntityItemProperties`.

`EntityItemProperties` is a JSON object composed of multiple properties. While an entity can have any number of properties, it must include, at minimum, the [type](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties) property. The `type` property determines which other properties the entity can have. As there are a fair number of properties that are common across all entity types (including the `type` property), the [common entity properties](https://wiki.highfidelity.com/wiki/EntityItemProperties#Common_Properties) are covered first. The properties specific to each entity type are covered in [entity properties by type](https://wiki.highfidelity.com/wiki/EntityItemProperties#Entity_Properties_by_Type).

### Common Properties

This section contains the properties common to all entity types.

| Property            | Type                | Default Value                            | Description                              |
| ------------------- | ------------------- | ---------------------------------------- | ---------------------------------------- |
| `type`              | string              | No default. An entity type must be specified when adding an entity. | The `type` property defines the type of entity and determines which properties the entity can have. All entities must have a type. Possible types are: "Box", "Light", "Line", "Model", "ParticleEffect", "PolyLine", "PolyVox", "Sphere", "Text", "Web", and "Zone".: The `type` property **cannot** be edited using [editEntity()](https://wiki.highfidelity.com/wiki/EditEntity()). |
| `name`              | string              | ""                                       | The `name` property is a non-unique 'name' of the entity. It can be any valid string. |
| `id`                | EntityItemID        | string                                   | The `id` property is unique string that used to distinguish entities from each other |
| `parentID`          | EntityItemID        | string                                   | The `parentID` property is the current entities parent `EntityItemID`. |
| `locked`            | boolean             | FALSE                                    | The `locked` property determines if the entity's properties can be edited or if the entity can be deleted using [deleteEntity()](https://wiki.highfidelity.com/wiki/DeleteEntity()). If set to `true`, the entity is locked and cannot be changed or deleted. : The `locked` property can only be changed by users who have permission to [adjust locks](https://wiki.highfidelity.com/wiki/CanAdjustLocks()). |
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