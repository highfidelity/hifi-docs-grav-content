---
title: 'Pointers'
taxonomy:
    category: docs
---

The Pointers API lets you create and manage objects for repeatedly calculating intersections in different ways, as well as the visual representation of those objects.  Pointers can also be configured to automatically generate PointerEvents.

## Properties <a id="prop"></a>

### `PointerProperties`: Object (type) <a id="PointerProperties"></a>
A set of properties that can be passed to [Pointers.createPointer()](#createPointer) to create a new Pointer.  Also contains the relevant [Picks.PickProperties](../..//picks/PickProperties) to define the underlying Pick.
Different [PickType](../..//picks/PickType)s use different properties, and within one [PickType](../..//picks/PickType), the properties you choose can lead to a wide range of behaviors.  For example, with PickType.Ray, depending on which optional parameters you pass, you could create a Static Ray Pointer, a Mouse Ray Pointer, or a Joint Ray Pointer.

| Properties | Type | Attributes | Default | Description |
| ---------- | ---- | ---------- | ------- | ----------- |
| `hover` | boolean | | false | If this Pointer should generate hover events. |
| `faceAvatar` | boolean | Ray Pointers only | false | If true, the end of the Pointer will always rotate to face the avatar. |
| `centerEndY` | boolean | Ray Pointers only | true | If false, the end of the Pointer will be moved up by half of its height. |
| `lockEnd` | boolean | Ray Pointers only | false | If true, the end of the Pointer will lock on to the center of the object at which the laser is pointing. |
| `distanceScaleEnd` | boolean | Ray pointers only | false | If true, the dimensions of the end of the Pointer will scale linearly with distance. |
| `scaleWithAvatar` | boolean | Ray Pointers only | false | If true, the width of the Pointer's path will scale linearly with your avatar's scale. |
| `renderStates` | object array | Ray Pointers only | |  A list of different visual states to switch between. |
| `defaultRenderStates` | object array | Ray Pointers only | | A list of different visual states to use if there is no intersection. |
| `triggers` | object array | Ray Pointers only | | A list of different triggers mechanisms that control this Pointer's click event generation. |

### `RayPointerRenderState`: Object (type) <a id="RayPointerRenderState"></a>
A set of properties used to define the visual aspect of a Ray Pointer in the case that the Pointer is intersecting something.

| Properties | Type | Attributes | Default | Description |
| ---------- | ---- | ---------- | ------- | ----------- |
| `name` | string | | | The name of this render state, used by Pointers.setRenderState() and Pointers.editRenderState(). |
| `start` | OverlayProperties | | | All of the properties you would nomrally pass to Overlays.addOverlay(), plus the `type` field. |
| `path` | OverlayProperties | | | All of the properties you would nomrally pass to Overlays.addOverlay(), plus the `type` field. |
| `end` | OverlayProperties | | | All of the properties you would nomrally pass to Overlays.addOverlay(), plus the `type` field. |


### `DefaultRayPointerRenderState`: Object (type) <a id="DefaultRayPointerRenderState"></a>
A set of properties used to define the visual aspect of a Ray Pointer in the case that the Pointer is not intersecting something.
Same as a [Pointers.RayPointerRenderState](#RayPointerRenderState), but with an additional distance field.

| Properties | Type | Attributes | Default | Description |
| ---------- | ---- | ---------- | ------- | ----------- |
| `distance` | number | | | The distance at which to render the end of this Ray Pointer, if defined. |


### `Trigger`: Object (type) <a id="Trigger"></a>
A trigger mechanism for Ray Pointers.

| Properties | Type | Attributes | Default | Description |
| ---------- | ---- | ---------- | ------- | ----------- |
| `action` | Controller.Action | | | This can be a built-in Controller action, like Controler.Standard.LTClick, or a function that evaluates to >= 1.0 when you want to trigger `button`. |
| `button` | string | | | Which button to trigger: "Primary", "Secondary", "Tertiary", and "Focus" are currently supported.  Only "Primary" will trigger clicks on web seruvaces.  If "Focus" is triggered, it will try to set the entity or overlay focus to the object at which the Pointer is aimed.  Buttons besides the first three will trigger vents but will be "None". |

## Methods <a id="methods"></a>

### `createPointer(type, properties)` <a id="createPointer"></a>
Adds a new Pointer.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|type|[PickType](../..//picks/PickType) |A PickType that specifies the method of picking to use.|
|`properties`|[PointerProperties](#PointerProperties)|A [PointerProperties](#PointerProperties) object, containing all the properties for initializing this Pointer and the [Picks.PickProperties](../..//picks/PickProperties) fo the Pick that this Pointer will use to do its picking. |

**Returns**

|Type|Description|
|----|-----------|
|number|The ID of the Pointer created. Used for managing the Pointer. `0` if invalid. |



### `enablePointer(id)` <a id="enablePointer"></a>
Enables a Pointer.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |

### `disablePointer(id)` <a id="disablePointer"></a>
Disables a Pointer.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |

### `removePointer(id)` <a id="removePointer"></a>
Removes a Pointer.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |

### `editRenderState(id, renderState, properties)` <a id="editRenderState"></a>
Edit some visual aspect of a Pointer.  Currently only supported for Ray Pointers.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |
| renderState | string | The name of the render state to edit. |
| properteis | RenderState | The new properties for `renderState`.  For Ray Pointers, a [RayPointerRenderState](#RayPointerRenderState). |

### `setRenderState(id, renderState)` <a id="setRenderState"></a>
Set the render state of a Pointer.  For Ray Pointers, this means switching between their [Pointers.RayPointerRenderState](#RayPointerRenderState)s, or "" to turn off rendering and hover/trigger events.
For Stylus Pointers, there are three built-in options: "events on" (render and send events, the default), "events off" (render but don't send events), and "disabled" (don't render, don't send events).

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |
| renderState | string | The name of the render state to which to switch. |

### `getPrevPickResult(id)` <a id="getPrevPickResult"></a>
Get the most recent pick result from this Pointer.  This will be updated as long as the Pointer is enabled, regardless of the render state.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |

**Returns**

|Type|Description| 
|----|-----------| 
| PickResult | The most recent intersection result.  This will be slightly different for different PickTypes.  See [Picks.RayPickResult](../..//picks/RayPickResult) and [Picks.StylusPickResult](../..//picks/StylusPickResult). |

### `setPrecisionPicking(id, precisionPicking)` <a id="setPrecisionPicking"></a>
Sets whether or not to use precision picking.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |
| precisionPicking | boolean | Whether or not to use precision picking. |

### `setLength(id, length)` <a id="setLength"></a>
Sets the length of this Pointer.  No effect on Stylus Pointers.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |
| length | number | The desired length of the Pointer. |

### `setIgnoreItems(id, ignoreItems)` <a id="setIgnoreItems"></a>
Sets a list of Entity IDs, Overlay IDs, and/or Avatar IDs to ignore during intersection.  Not used by Stylus Pointers.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |
| ignoreItems | Uuid[] | A list of IDs to ignore. |

### `setIncludeItems(id, includeItems)` <a id="setIncludeItems"></a>
Sets a list of Entity IDs, Overlay IDs, and/or Avatar IDs to include during intersection, instead of intersecting with everything.
Stylus Pointers <b>only</b> intersect with objects in their include list.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |
| includeItems | Uuid[] | A list of IDs to include. |

### `setLockEndUUID(id, objectID, isOverlay, offsetMat)` <a id="setLockEndUUID"></a>
Lock a Pointer onto a specific object (overlay, entity, or avatar).  Optionally, provide an offset in object-space, otherwise the Pointer will lock on to the center of the object.
Not used by Stylus Pointers.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |
| objectID | Uuid | The ID of the object to which to lock on. |
| isOverlay | boolean | False for entities or avatars, true for overlays. |
| offsetMat | Mat4 | The offset matrix to use if you do not want to lock on to the center of the object. |

### `isLeftHand(id)` <a id="isLeftHand"></a>
Check if a Pointer is associated with the left hand.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |

**Returns**

|Type|Description|
|----|-----------|
| boolean | True if Pointer is a Joint Ray Pointer with joint == "\_CONTROLLER\_LEFTHAND" or "\_CAMERA\_RELATIVE\_CONTROLLER\_LEFTHAND", or a Stylus Pointer with hand == 0. |

### `isRightHand(id)` <a id="isRightHand"></a>
Check if a Pointer is associated with the right hand.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |

**Returns**

|Type|Description|
|----|-----------|
| boolean | True if Pointer is a Joint Ray Pointer with joint == "\_CONTROLLER\_RIGHTHAND" or "\_CAMERA\_RELATIVE\_CONTROLLER\_RIGHTHAND", or a Stylus Pointer with hand == 1. |

### `isMouse(id)` <a id="isMouse"></a>
Check if a Pointer is associated with the system mouse.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
| `id` | number | The ID of the Pointer, as returned by [createPointer()](#createPointer). |

**Returns**

|Type|Description|
|----|-----------|
| boolean | True if the Pointer is a Mouse Ray Pointer, false otherwise. |


## Examples <a id="examples"></a>

```
    // Create a left hand Ray Pointer that triggers events on left controller trigger click and
    // changes color when it's intersecting something.
    var end = {
        type: "sphere",
        dimensions: {x:0.5, y:0.5, z:0.5},
        solid: true,
        color: {red:0, green:255, blue:0},
        ignoreRayIntersection: true
    };
    var end2 = {
        type: "sphere",
        dimensions: {x:0.5, y:0.5, z:0.5},
        solid: true,
        color: {red:255, green:0, blue:0},
        ignoreRayIntersection: true
    };
    var renderStates = [ {name: "test", end: end} ];
    var defaultRenderStates = [ {name: "test", distance: 10.0, end: end2} ];
    var pointer = Pointers.createPointer(PickType.Ray, {
        joint: "_CAMERA_RELATIVE_CONTROLLER_LEFTHAND",
        filter: Picks.PICK_OVERLAYS | Picks.PICK_ENTITIES | Picks.PICK_INCLUDE_NONCOLLIDABLE,
        renderStates: renderStates,
        defaultRenderStates: defaultRenderStates,
        distanceScaleEnd: true,
        triggers: [ {action: Controller.Standard.LTClick, button: "Focus"}, {action: Controller.Standard.LTClick, button: "Primary"} ],
        hover: true,
        enabled: true
    });
    Pointers.setRenderState(pointer, "test");
```
