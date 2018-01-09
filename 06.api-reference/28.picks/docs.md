---
title: 'Picks'
taxonomy:
    category: docs
---

The Picks API lets you create and manage objects to repeatedly calculate intersections in different ways.

- **[Properties](#prop)**
- **[Methods](#methods)**
- **[Events](#events)**


| Properties | Type | Description |
| ---------- | ---- | ----------- |
|[`PickProperties`](#p1)|object| |
|[`PickType`](#p2)|enum| |
|[`RayPickResult`](#p3)|object| |
|[`StylusPickResult`](#p4)|object| |
| `PICK_NOTHING` | number  | A filter flag. Don't intersect with anything.|
| `PICK_ENTITIES`| number | A filter flag. Include entities when intersecting.|
| `PICK_OVERLAYS`|number  |A filter flag. Include overlays when intersecting.|
| `PICK_AVATARS`|number  |A filter flag. Include avatars when intersecting.|
| `PICK_HUD`|number  |A filter flag. Include the HUD sphere when intersecting in HMD mode.|
| `PICK_COARSE`|number |A filter flag. Pick against coarse meshes, instead of exact meshes.|
| `PICK_INCLUDE_INVISIBLE`|number |A filter flag. Include invisible objects when intersecting.|
| `PICK_INCLUDE_NONCOLLIDABLE`|number|A filter flag. Include non-collidable objects when intersecting.|
| `INTERSECTED_NONE`|number |An intersection type. Intersected nothing with the given filter flags.|
| `INTERSECTED_ENTITY`|number |An intersection type. Intersected an entity.|
| `INTERSECTED_OVERLAY`|number |An intersection type. Intersected an overlay.|
| `INTERSECTED_AVATAR`|number |An intersection type. Intersected an avatar.|
| `INTERSECTED_HUD`|number |An intersection type. Intersected the HUD sphere.|


| Methods                                  |
| ---------------------------------------- |
| [`Picks.createPick(enum,object)`](#m1) |
| [`Picks.disablePick(number)`](#m2) |
| [`Picks.enablePick(number)`](#m3) |
| [`Picks.getPrevPickResult(number)`](#m4) |
| [`Picks.isLeftHand(number)`](#m5) |
| [`Picks.isMouse(number)`](#m6) |
| [`Picks.isRightHand(number)`](#m7) |
| [`Picks.removePick(number)`](#m8) |
| [`Picks.setIgnoreItems(number, Array<unumber>)`](#m9) |
| [`Picks.setIncludeItems(number, Array<unumber>)`](#m10) |
| [`Picks.setPrecisionPicking(number, boolean)`](#m11) |


## Properties <a id="prop"></a>

### `PickProperties`: Object (type) <a id="p1"></a>
It is a set of properties that can be passed to Picks.createPick to create a new Pick. Different Picks.PickTypes use different properties, and within one PickType, the properties you choose can lead to a wide range of behaviors. For example, with PickType.Ray, depending on which optional parameters you pass, you could create a Static Ray Pick, a Mouse Ray Pick, or a Joint Ray Pick. 

| Properties | Type | Attributes | Default | Description |
| ---------- | ---- | ---------- | ------- | ----------- |
| `enabled` | boolean | optional| false| If this Pick should start enabled or not. Disabled Picks do not update their pick results.|
| `filter`| number |optional |Picks.PICK\_NOTHING |The filter for this Pick to use, constructed using filter flags combined using bitwise OR.|
| `maxDistance`|float  |optional|0.0 |The max distance at which this Pick will intersect. `0.0` = no max. `< 0.0` is invalid.|
| `joint`|string  |optional| |Only for Joint or Mouse Ray Picks. If it is "Mouse", it will create a Ray Pick that follows the system mouse, in desktop or HMD. If it is "Avatar", it will create a Joint Ray Pick that follows your avatar's head. Otherwise, it will create a Joint Ray Pick that follows the given joint, if it exists on your current avatar.|
| `posOffset`|Vec3 |optional|Vec3.ZERO  |Only for Joint Ray Picks. A local joint position offset (in meters). `x` = upward, `y` = forward, `z` = lateral|
| `dirOffset`|Vec3|optional|Vec3.UP  |Only for Joint Ray Picks. A local joint direction offset. `x` = upward, `y` = forward, `z` = lateral|
| `position`|Vec3|optional| |Only for Static Ray Picks. The world-space origin of the ray.|
| `direction`|Vec3|optional|-Vec3.UP  |Only for Static Ray Picks. The world-space direction of the ray.|
| `hand`|number |optional|-1 |Only for Stylus Picks. It is an integer. `0` == left, `1` == right. Otherwise invalid.|


### `PickType`: enum (type) <a id="p2"></a>


| Properties | Type |  Description |
| ---------- | ---- | ----------- |
| `Ray` | number |  Ray Picks intersects a ray with the nearest object in front of them, along a given direction.|
| `Stylus`| number |Stylus Picks provides "tapping" functionality on flat surfaces.|

### `RayPickResult`: object (type) <a id="p3"></a>

An intersection result for a Ray Pick. 


| Properties | Type |  Description |
| ---------- | ---- | ----------- |
| `type` | number |  The intersection type.|
| `intersects`| boolean |If there was a valid intersection (type != INTERSECTED\_NONE)|
| `objectID` | Uuid |  The ID of the intersected object. Uuid.NULL for the HUD or invalid intersections.|
| `distance` | float |  The distance to the intersection point from the origin of the ray.|
| `intersection` | Vec3 |  The intersection point in world-space.|
| `surfaceNormal` | Vec3 |  The surface normal at the intersected point. All NANs if type == INTERSECTED\_HUD.|
| `searchRay` | PickRay |  The PickRay that was used. Valid even if there was no intersection.|


### `StylusPickResult`: object (type) <a id="p4"></a>

An intersection result for a Ray Pick. 


| Properties | Type |  Description |
| ---------- | ---- | ----------- |
| `type` | number |  The intersection type.|
| `intersects`| boolean |If there was a valid intersection (type != INTERSECTED\_NONE)|
| `objectID` | Uuid |  The ID of the intersected object. Uuid.NULL for the HUD or invalid intersections.|
| `distance` | float |  The distance to the intersection point from the origin of the ray.|
| `intersection` | Vec3 |  The intersection point in world-space.|
| `surfaceNormal` | Vec3 |  The surface normal at the intersected point. All NANs if type == INTERSECTED\_HUD.|
| `stylusTip` | StylusTip  |  The StylusTip that was used. Valid even if there was no intersection.|

## Methods <a id="methods"></a>

### `createPick(type, properties)`<a id="m1"></a>

Adds a new top-level menu. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|type|PickType |A PickType that specifies the method of picking to use.|
|properties|[PickProperties](#p1)|A [PickProperties](#p1) object, containing all the properties for initializing this Pick|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|The ID of the pick created|number|Used for managing the Pick. `0` if invalid. |


### `disablePick(uid)`<a id="m2"></a>

Disables a Pick. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|uid|number|The ID of the Pick, as returned by Picks.createPick.|


### `enablePick(uid)`<a id="m3"></a>

Enables a Pick. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|uid|number|The ID of the Pick, as returned by Picks.createPick.|


### `getPrevPickResult(uid)`<a id="m4"></a>

Gets the most recent pick result from this Pick. This will be updated as long as the Pick is enabled. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|uid|number|The ID of the Pick, as returned by Picks.createPick.|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|The most recent intersection result|PickResult|This will be slightly different for different PickTypes. See Picks.[RayPickResult](#p3) and Picks.[StylusPickResult](#p4). |

### `isLeftHand(uid)`<a id="m5"></a>

Check if a Pick is associated with the left hand. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|uid|number|The ID of the Pick, as returned by Picks.createPick.|


**Returns**

|Value|Type|Description|
|----|----|-----------|
|`true`|boolean|if the Pick is a Joint Ray Pick with joint == "\_CONTROLLER\_LEFTHAND" or "\_CAMERA\_RELATIVE\_CONTROLLER\_LEFTHAND", or a Stylus Pick with hand == 0.|
|`false`|boolean|If the conditions for a `true` return are not met.|


### `isMouse(uid)`<a id="m6"></a>

Checks if a Pick is associated with the system mouse. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|uid|number|The ID of the Pick, as returned by Picks.createPick.|


**Returns**

|Value|Type|Description|
|----|----|-----------|
|`true`|boolean|If the Pick is a Mouse Ray Pick|
|`false`|boolean|If the Pick is not a Mouse ray Pick|


### `isRightHand(uid)`<a id="m7"></a>

Checks if a Pick is associated with the right hand. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|uid|number|The ID of the Pick, as returned by Picks.createPick.|


**Returns**

|Value|Type|Description|
|----|----|-----------|
|`true`|boolean|if the Pick is a Joint Ray Pick with joint == "\_CONTROLLER\_RIGHTHAND" or "\_CAMERA\_RELATIVE\_CONTROLLER\_RIGHTHAND", or a Stylus Pick with hand == 1.|
|`false`|boolean|If the conditions for a `true` return are not met.|


### `removePick(uid)`<a id="m8"></a>

Removes a Pick. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|uid|number|The ID of the Pick, as returned by Picks.createPick.|


### `setIgnoreItems(uid, ignoreItems)`<a id="m9"></a>

Sets a list of Entity IDs, Overlay IDs, and/or Avatar IDs to ignore during intersection. Not used by Stylus Picks. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|uid|number|The ID of the Pick, as returned by Picks.createPick.|
|ignoreItems|Array.Uuid|A list of IDs to ignore.|

### `setIncludeItems(uid, includeItems)`<a id="m10"></a>

Sets a list of Entity IDs, Overlay IDs, and/or Avatar IDs to include during intersection, instead of intersecting with everything. Stylus Picks only intersect with objects in their include list. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|uid|number|The ID of the Pick, as returned by Picks.createPick.|
|includeItems|Array.Uuid|A list of IDs to include.|


### `setPrecisionPicking(uid, precisionPicking)`<a id="m11"></a>

Sets whether or not to use precision picking. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|uid|number|The ID of the Pick, as returned by Picks.createPick.|
|precisionPicking|boolean|Whether or not to use precision picking.|
