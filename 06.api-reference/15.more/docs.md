# Account API

*This article is a stub. You can help by expanding it.* *This article needs an introduction.*

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/Account_API#)] 

- [1Functions](https://wiki.highfidelity.com/wiki/Account_API#Functions)
- [2Signals](https://wiki.highfidelity.com/wiki/Account_API#Signals)
- [3signal balanceChanged (newBalance: float)](https://wiki.highfidelity.com/wiki/Account_API#signal_balanceChanged_.28newBalance:_float.29)
- [4function getInstance (): Account](https://wiki.highfidelity.com/wiki/Account_API#function_getInstance_.28.29:_Account)
- [5function getBalance (): float](https://wiki.highfidelity.com/wiki/Account_API#function_getBalance_.28.29:_float)
- [6function isLoggedIn (): bool](https://wiki.highfidelity.com/wiki/Account_API#function_isLoggedIn_.28.29:_bool)
- [7function updateBalance ()](https://wiki.highfidelity.com/wiki/Account_API#function_updateBalance_.28.29)

### Functions[[edit](https://wiki.highfidelity.com/index.php?title=Account_API&action=edit&section=1)]

function **Account.getInstance** (): Account

function **Account.getBalance** (): float

function **Account.isLoggedIn** (): bool

function **Account.updateBalance** ()

### Signals[[edit](https://wiki.highfidelity.com/index.php?title=Account_API&action=edit&section=2)]

signal **Account.getInstance** (): Account

signal **Account.getBalance** (): float

signal **Account.isLoggedIn** (): bool

signal **Account.updateBalance** ()

## signal balanceChanged (newBalance: float)[[edit](https://wiki.highfidelity.com/index.php?title=Account_API&action=edit&section=3)]


## function getInstance (): Account[[edit](https://wiki.highfidelity.com/index.php?title=Account_API&action=edit&section=4)]


## function getBalance (): float[[edit](https://wiki.highfidelity.com/index.php?title=Account_API&action=edit&section=5)]


## function isLoggedIn (): bool[[edit](https://wiki.highfidelity.com/index.php?title=Account_API&action=edit&section=6)]


## function updateBalance ()[[edit](https://wiki.highfidelity.com/index.php?title=Account_API&action=edit&section=7)]

# ActionArguments

| **Entities API**                         |
| ---------------------------------------- |
| ▼ [Entities](https://wiki.highfidelity.com/wiki/Category:Entities)► [Entities callbacks](https://wiki.highfidelity.com/wiki/Category:Entities_callbacks)► [Entities events](https://wiki.highfidelity.com/wiki/Category:Entities_events)► [Entities methods](https://wiki.highfidelity.com/wiki/Category:Entities_methods)► [Entities objects](https://wiki.highfidelity.com/wiki/Category:Entities_objects)  [EntityItemProperties](https://wiki.highfidelity.com/wiki/EntityItemProperties) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

`ActionArguments` is a JSON object composed of the various arguments that define an action's behavior. An action's type determines which arguments it can have and the arguments for each type are in the sections below:

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/ActionArguments#)] 

- [1hold](https://wiki.highfidelity.com/wiki/ActionArguments#hold)
- [2offset](https://wiki.highfidelity.com/wiki/ActionArguments#offset)
- [3spring](https://wiki.highfidelity.com/wiki/ActionArguments#spring)
- [4travel-oriented](https://wiki.highfidelity.com/wiki/ActionArguments#travel-oriented)
- [5hinge](https://wiki.highfidelity.com/wiki/ActionArguments#hinge)
- [6far-grab](https://wiki.highfidelity.com/wiki/ActionArguments#far-grab)
- [7slider](https://wiki.highfidelity.com/wiki/ActionArguments#slider)
- [8ball-socket](https://wiki.highfidelity.com/wiki/ActionArguments#ball-socket)
- [9cone-twist](https://wiki.highfidelity.com/wiki/ActionArguments#cone-twist)

## hold[[edit](https://wiki.highfidelity.com/index.php?title=ActionArguments&action=edit&section=1)]

An action of type `hold` will cause an entity to stick to an avatar's hand.

| Property               | Type  | Default Value     | Description                              |
| ---------------------- | ----- | ----------------- | ---------------------------------------- |
| `relativePosition`     | Vec3  | {x: 0, y:0, z: 0} | This argument specifies the linear offset from the holding hand. |
| `relativeRotation`     | Quat  | {x: 0, y:0, z: 0} | This argument specifies the rotational offset from the holding hand. |
| `timeScale`            | Float | No default        | This argument controls how how quickly the entity moves and is rotated. |
| `hand`                 | float | "right"           | The argument controls which hand the entity is held in. It can be "left" or "right". |
| `kinematic`            | bool  | FALSE             | If `true`, the entity is kept with the hand in a kinematic way, that is, it is repeatedly snapped to the right place. If `false`, a spring action is used to move the object. In this case, the `targetPosition` of the spring is continually updated to be the position of the hand. |
| `kinematicSetVelocity` | bool  | FALSE             | If `kinematic` is `true` and this property is `true`, the entity's velocity will be faked. This means that, even though the entity isn't having physics simulation done on it, the velocity is set by measuring its changes in position over time. |

## offset[[edit](https://wiki.highfidelity.com/index.php?title=ActionArguments&action=edit&section=2)]

An action of type `offset` will keep the entity a certain distance from a specified point.

| Property            | Type  | Default Value     | Description                              |
| ------------------- | ----- | ----------------- | ---------------------------------------- |
| `pointToOffsetFrom` | vec3  | {x: 0, y:0, z: 0} | This argument specifies the point the entity will be kept the specified distance from. |
| `linearDistance`    | float | No default        | This argument specifies how far to keep the entity from the point specified by `pointToOffsetFrom`. |
| `linearTimeScale`   | float | No default        | This argument controls how "stiff" the spring that moves the entity is. It represents how many seconds it takes for the entity to finish moving. While no default is specified, a good value is 0.1. |

## spring[[edit](https://wiki.highfidelity.com/index.php?title=ActionArguments&action=edit&section=3)]

An action of type `spring` will pull an entity toward a point as if that entity were connected to that point by a spring. The spring is critically damped, so the object wont oscillate around the target position - it will just slide right up to it and stop.

| Property           | Type  | Default Value     | Description                              |
| ------------------ | ----- | ----------------- | ---------------------------------------- |
| `linearTimeScale`  | float | No default        | This argument controls how "stiff" the spring that moves the object is. It represents how many seconds it takes for the entity to finish moving. A good value is 0.1. |
| `angularTimeScale` | float | No default        | This argument controls how how quickly the object will be rotated. Small numbers mean a faster spin. |
| `targetPosition`   | Vec3  | {x: 0, y:0, z: 0} | This argument specifies the point to pull the object to. |
| `targetRotation`   | Vec3  | {x: 0, y:0, z: 0} | This argument specifies the rotation the object will be in after the spring finishes pulling it. |

## travel-oriented[[edit](https://wiki.highfidelity.com/index.php?title=ActionArguments&action=edit&section=4)]

An action of type `travel-oriented` will rotate an entity so that the entity-relative `forward` vector will be pointed in the direction of travel. This is useful for arrows.

| Property           | Type   | Default Value     | Description                              |
| ------------------ | ------ | ----------------- | ---------------------------------------- |
| `forward`          | Vec3   | {x: 0, y:0, z: 0} | This argument controls (Incomplete)      |
| `angularTimeScale` | float  | No default        | This argument controls how how quickly the object will be rotated. Small numbers mean a faster spin. |
| `tag`              | string | No default        | This argument tags the object (Incomplete) |
| `ttl`              | float  | No default        | This argument specifies the lifespan of the object. |

## hinge[[edit](https://wiki.highfidelity.com/index.php?title=ActionArguments&action=edit&section=5)]

A `hinge` constraint keeps one or two entities positioned as if they were attached to a hinge.

| Property               | Type   | Default Value      | Description                              |
| ---------------------- | ------ | ------------------ | ---------------------------------------- |
| `pivot`                | Vec3   | {x: 0, y: 0, z: 0} | entity-local position of the hinge       |
| `axis`                 | Vec3   | {x: 0, y: 0, z: 0} | entity-local alignment of the hinge      |
| `otherEntityID`        | UUID   | null               | optional ID of entity on other side of hinge |
| `otherPivot`           | Vec3   | null               | location of hinge in other entity's frame |
| `otherAxis`            | Vec3   | null               | orientation of hinge in other entity's frame |
| `low`                  | float  | -2PI               | lower limit on angular rotation          |
| `high`                 | float  | 2PI                | upper limit on angular rotation          |
| `softness`             | float  | 0.9                | rusty vs well-oiled, 0 to 1              |
| `biasFactor`           | float  | 0.3                | related to the relaxed position of the hinge |
| `relaxationFactor`     | float  | 1.0                | related to force applied near limits of hinge rotation |
| `motorVelocity`        | float  | 0.0                | target angular velocity of hinge         |
| `motorTarget`          | float  | 0.0                | angle toward which the motor should drive the hinge |
| `motorTargetTimeScale` | float  | 0.0                | how quickly to drive the hinge toward motorTarget |
| `maxImpulse`           | float  | 1.0                | maximum impulse for hinge motor          |
| `angle`                | float  | 0.0                | read-only current angle of hinge         |
| `tag`                  | string | No default         | This argument tags the object (Incomplete) |
| `ttl`                  | float  | No default         | This argument specifies the lifespan of the constraint. |

## far-grab[[edit](https://wiki.highfidelity.com/index.php?title=ActionArguments&action=edit&section=6)]

A `far-grab`(incomplete).

| Property | Type | Default Value | Description  |
| -------- | ---- | ------------- | ------------ |
| ``       |      |               | (incomplete) |

## slider[[edit](https://wiki.highfidelity.com/index.php?title=ActionArguments&action=edit&section=7)]

A `slider`(incomplete).

| Property     | Type  | Default Value      | Description                          |
| ------------ | ----- | ------------------ | ------------------------------------ |
| `point`      | Vec3  | {x: 0, y: 0, z: 0} | (incomplete)                         |
| `axis`       | Vec3  | {x: 0, y: 0, z: 0} | entity-local alignment of the slider |
| `linearLow`  | float | 0.0                | (incomplete)                         |
| `linearHigh` | float | 0.0                | (incomplete)                         |

## ball-socket[[edit](https://wiki.highfidelity.com/index.php?title=ActionArguments&action=edit&section=8)]

A `ball-socket`(incomplete).

| Property        | Type   | Default Value      | Description                              |
| --------------- | ------ | ------------------ | ---------------------------------------- |
| `pivot`         | Vec3   | {x: 0, y: 0, z: 0} | entity-local position of the ball-socket |
| `otherEntityID` | UUID   | null               | optional ID of entity on other side of ball-socket |
| `otherPivot`    | Vec3   | null               | location of ball-socket in other entity's frame |
| `tag`           | string | No default         | This argument tags the object (Incomplete) |
| `ttl`           | float  | No default         | This argument specifies the lifespan of the constraint. |

## cone-twist[[edit](https://wiki.highfidelity.com/index.php?title=ActionArguments&action=edit&section=9)]

A `cone-twist` constraint keeps (incomplete).

| Property        | Type   | Default Value      | Description                              |
| --------------- | ------ | ------------------ | ---------------------------------------- |
| `pivot`         | Vec3   | {x: 0, y: 0, z: 0} | entity-local position of the cone-twist  |
| `axis`          | Vec3   | {x: 0, y: 0, z: 0} | entity-local alignment of the cone-twist |
| `otherEntityID` | UUID   | null               | optional ID of entity on other side of cone-twist |
| `otherPivot`    | Vec3   | null               | location of cone-twist in other entity's frame |
| `otherAxis`     | Vec3   | null               | orientation of cone-twist in other entity's frame |
| `swingSpan1`    |        | null               | (Incomplete)                             |
| `swingSpan2`    |        | null               | (Incomplete)                             |
| `twistSpan`     |        | null               | (Incomplete)                             |
| `tag`           | string | No default         | This argument tags the object (Incomplete) |
| `ttl`           | float  | No default         | This argument specifies the lifespan of the constraint. |

# addAction()

| **Entities API**                         |
| ---------------------------------------- |
| ▼ [Entities](https://wiki.highfidelity.com/wiki/Category:Entities)► [Entities callbacks](https://wiki.highfidelity.com/wiki/Category:Entities_callbacks)► [Entities events](https://wiki.highfidelity.com/wiki/Category:Entities_events)► [Entities methods](https://wiki.highfidelity.com/wiki/Category:Entities_methods)► [Entities objects](https://wiki.highfidelity.com/wiki/Category:Entities_objects)  [EntityItemProperties](https://wiki.highfidelity.com/wiki/EntityItemProperties) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

Entities can have *actions* associated with them. An action is a callback registered with the physics engine that is called every physics simulation step.

Actions allow you to add behaviors to entities of the following types: "offset", "spring", "hold" or "travel-oriented". An offset action will keep an entity a specified distance away from a specified point, a spring action will pull an entity toward a point as if that entity were connected to that point by a spring, and a hold action will cause an entity to stick to an avatar's hand.

Depending on the action's type, it will have various arguments that help define the action's behavior. The action arguments are specified as a JSON object of [ActionArguments](https://wiki.highfidelity.com/wiki/ActionArguments).

`addAction()` is used to add a new action to an entity. `addAction()` returns the [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID) of the new action.

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/AddAction()#)] 

- [1Function](https://wiki.highfidelity.com/wiki/AddAction()#Function)
- [2Arguments](https://wiki.highfidelity.com/wiki/AddAction()#Arguments)
- [3Returns](https://wiki.highfidelity.com/wiki/AddAction()#Returns)
- [4Examples](https://wiki.highfidelity.com/wiki/AddAction()#Examples)
- [5References](https://wiki.highfidelity.com/wiki/AddAction()#References)

## Function[[edit](https://wiki.highfidelity.com/index.php?title=AddAction()&action=edit&section=1)]

`addAction(actionTypeString, entityID, arguments) // Returns EntityItemID`

## Arguments[[edit](https://wiki.highfidelity.com/index.php?title=AddAction()&action=edit&section=2)]

**actionTypeString: string**: Specifies the action type and can be "offset", "spring", "hold" or "travel-oriented".

**entityID: EntityItemID **: The ID of the entity to add the action to

**arguments: ActionArguments **: A JSON object of action arguments. Depending on the action's type, it will have various arguments.

## Returns[[edit](https://wiki.highfidelity.com/index.php?title=AddAction()&action=edit&section=3)]

**EntityItemID**: The ID of the new action

## Examples[[edit](https://wiki.highfidelity.com/index.php?title=AddAction()&action=edit&section=4)]

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

## References[[edit](https://wiki.highfidelity.com/index.php?title=AddAction()&action=edit&section=5)]

Check the High Fidelity source for more information and examples:

- [C++ where the Entities code lives](https://github.com/highfidelity/hifi/tree/269e3d7f23b1a695d00dedcc89b101433107e11e/libraries/entities/src)
- [JavaScript Examples](https://github.com/highfidelity/hifi/tree/stable/scripts)

# addAnimationStateHandler()

*This article is a stub. You can help by expanding it.*

| **MyAvatar API**                         |
| ---------------------------------------- |
| ▼ [MyAvatar](https://wiki.highfidelity.com/wiki/Category:MyAvatar)► [MyAvatar events](https://wiki.highfidelity.com/wiki/Category:MyAvatar_events)► [MyAvatar methods](https://wiki.highfidelity.com/wiki/Category:MyAvatar_methods)► [MyAvatar objects](https://wiki.highfidelity.com/wiki/Category:MyAvatar_objects)  [Avatar API Overview](https://wiki.highfidelity.com/wiki/Avatar_API_Overview) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

*This article needs an introduction. What does the function do?*

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/AddAnimationStateHandler()#)] 

- [1Function or Event](https://wiki.highfidelity.com/wiki/AddAnimationStateHandler()#Function_or_Event)
- [2Arguments](https://wiki.highfidelity.com/wiki/AddAnimationStateHandler()#Arguments)
- [3Returns](https://wiki.highfidelity.com/wiki/AddAnimationStateHandler()#Returns)
- [4Examples](https://wiki.highfidelity.com/wiki/AddAnimationStateHandler()#Examples)
- [5References](https://wiki.highfidelity.com/wiki/AddAnimationStateHandler()#References)

## Function or Event[[edit](https://wiki.highfidelity.com/index.php?title=AddAnimationStateHandler()&action=edit&section=1)]

`addAnimationStateHandler(QScriptValue,QScriptValue) // Return value`

## Arguments[[edit](https://wiki.highfidelity.com/index.php?title=AddAnimationStateHandler()&action=edit&section=2)]

**QScriptValue:class**: description

**QScriptValue:class**: description

## Returns[[edit](https://wiki.highfidelity.com/index.php?title=AddAnimationStateHandler()&action=edit&section=3)]

**name:class**: description

## Examples[[edit](https://wiki.highfidelity.com/index.php?title=AddAnimationStateHandler()&action=edit&section=4)]

*Stand-alone (or close as possible) examples showcasing the function*

```
addAnimationStateHandler(QScriptValue,QScriptValue);

```

## References[[edit](https://wiki.highfidelity.com/index.php?title=AddAnimationStateHandler()&action=edit&section=5)]

Check the High Fidelity source for more information and examples:

- [C++](https://github.com/highfidelity/hifi/)
- [JavaScript Examples](https://github.com/highfidelity/hifi/tree/master/examples)

# addEntity()

| **Entities API**                         |
| ---------------------------------------- |
| ▼ [Entities](https://wiki.highfidelity.com/wiki/Category:Entities)► [Entities callbacks](https://wiki.highfidelity.com/wiki/Category:Entities_callbacks)► [Entities events](https://wiki.highfidelity.com/wiki/Category:Entities_events)► [Entities methods](https://wiki.highfidelity.com/wiki/Category:Entities_methods)► [Entities objects](https://wiki.highfidelity.com/wiki/Category:Entities_objects)  [EntityItemProperties](https://wiki.highfidelity.com/wiki/EntityItemProperties) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

`addEntity()` is used to add new entities to your environment. `addEntity()` takes [EntityItemProperties](https://wiki.highfidelity.com/wiki/EntityItemProperties) as an argument and adds a new entity using the included properties.

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/AddEntity()#)] 

- [1Function](https://wiki.highfidelity.com/wiki/AddEntity()#Function)
- [2Arguments](https://wiki.highfidelity.com/wiki/AddEntity()#Arguments)
- [3Returns](https://wiki.highfidelity.com/wiki/AddEntity()#Returns)
- [4Examples](https://wiki.highfidelity.com/wiki/AddEntity()#Examples)
- [5References](https://wiki.highfidelity.com/wiki/AddEntity()#References)

## Function[[edit](https://wiki.highfidelity.com/index.php?title=AddEntity()&action=edit&section=1)]

`addEntity(properties) // Returns EntityItemID`

## Arguments[[edit](https://wiki.highfidelity.com/index.php?title=AddEntity()&action=edit&section=2)]

**properties: EntityItemProperties**: A JSON of entity properties. Entity properties must contain, at minimum, the `type` property.

## Returns[[edit](https://wiki.highfidelity.com/index.php?title=AddEntity()&action=edit&section=3)]

**EntityItemID**: The [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID) of the newly created entity

## Examples[[edit](https://wiki.highfidelity.com/index.php?title=AddEntity()&action=edit&section=4)]

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

 

Avatar > Enable avatar collision

 

## References[[edit](https://wiki.highfidelity.com/index.php?title=AddEntity()&action=edit&section=5)]

Check the High Fidelity source for more information and examples:

- [C++ where the Entities code lives](https://github.com/highfidelity/hifi/tree/269e3d7f23b1a695d00dedcc89b101433107e11e/libraries/entities/src)
- [JavaScript Examples](https://github.com/highfidelity/hifi/tree/stable/scripts)

# addEventHandler()

*This article is a stub. You can help by expanding it.*

| **Script API**                           |
| ---------------------------------------- |
| ▼ [Script](https://wiki.highfidelity.com/wiki/Category:Script)► [Script methods](https://wiki.highfidelity.com/wiki/Category:Script_methods) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

*This article needs an introduction. What does the function do?*

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/AddEventHandler()#)] 

- [1Function](https://wiki.highfidelity.com/wiki/AddEventHandler()#Function)
- [2Arguments](https://wiki.highfidelity.com/wiki/AddEventHandler()#Arguments)
- [3Returns](https://wiki.highfidelity.com/wiki/AddEventHandler()#Returns)
- [4Examples](https://wiki.highfidelity.com/wiki/AddEventHandler()#Examples)
- [5References](https://wiki.highfidelity.com/wiki/AddEventHandler()#References)

## Function[[edit](https://wiki.highfidelity.com/index.php?title=AddEventHandler()&action=edit&section=1)]

`addEventHandler(entityIDString, entityMethodNameString, handler) // Return value`

## Arguments[[edit](https://wiki.highfidelity.com/index.php?title=AddEventHandler()&action=edit&section=2)]

**name:class**: description

## Returns[[edit](https://wiki.highfidelity.com/index.php?title=AddEventHandler()&action=edit&section=3)]

**name:class**: description

## Examples[[edit](https://wiki.highfidelity.com/index.php?title=AddEventHandler()&action=edit&section=4)]

*Stand-alone (or close as possible) examples showcasing the function*

