---
title: 'Overlays'
taxonomy:
    category:
        - docs
---

The Overlays API enables a user to create and interact with overlays. Overlays are 2D or 3D objects that simplify the UI and are only visible to you, allowing you to access additional information without leaving your space.  

- [Properties](#properties)
- [Methods](#methods)
- [Events](#events)

| **Properties** <a id="properties"></a> | Type   | Description                              |
| -------------------------------------- | ------ | ---------------------------------------- |
| [`Overlays.keyboardFocusOverlay`](#p1) | string | Get or set the web3d overlay that has keyboard focus. If no overlay is set, get returns null; set to null to clear keyboard focus. |


| Methods                                  |
| ---------------------------------------- |
| [`Overlays.addOverlay(String,QVariant`)](#m1) |
| [`Overlays.cloneOverlay(OverlayID)`](#m2) |
| [`Overlays.deleteOverlay(OverlayID)`](#m3) |
| [`Overlays.editOverlay(OverlayID,QVariant)`](#m4) |
| [`Overlays.editOverlays(QVariant)`](#m5) |
| `Overlays.editPanel(OverlayID,QVariant)` |
| [`Overlays.findOverlays(glm::vec3,float)`](#m7) |
| [`Overlays.findRayIntersection(PickRay,bool,QScriptValue,QScriptValue,bool,bool)`](#m8) |
| [`Overlays.findRayIntersectionVector(PickRay,bool,QScriptValue,QScriptValue,bool,bool)`](#m6) |
| [`Overlays.getKeyboardFocusOverlay()`](#m9) |
| [`Overlays.getOverlayAtPoint(glm::vec2)`](#m10) |
| [`Overlays.getOverlayObject(OverlayID)`](#m11) |
| [`Overlays.getOverlaysProperties(OverlayID,String)`](#m12) |
| [`Overlays.getOverlayType(OverlayID)`](#m13) |
| [`Overlays.getProperty(OverlayID,String)`](#m14) |
| [`Overlays.getProperties(OverlayID,String)`](#m15) |
| [`Overlays.height()`](#m16)              |
| [`Overlays.isAddedOverlay(OverlayID)`](#m17) |
| [`Overlays.isLoaded(OverlayID)`](#m18)   |
| [`Overlays.sendHoverEnterOverlay(id, event)`](#m19) |
| [`Overlays.sendHoverLeaveOverlay(overlayID, event)`](#m20) |
| [`Overlays.sendHoverOverOverlay(overlayID, event)`](#m21) |
| [`Overlays.sendMouseMoveOnOverlay(overlayID, event)`](#m22) |
| [`Overlays.sendMousePressOnOverlay(overlayID, event)`](#m23) |
| [`Overlays.sendMouseReleaseOnOverlay(overlayID, event)`](#m24) |
| [`Overlays.setKeyboardFocusOverlay(OverlayID)`](#m25) |
| [`Overlays.textSize(OverlayID,String)`](#m26) |
| [`Overlays.width()`](#m27)               |

| Events                                   |
| ---------------------------------------- |
| [`Overlays.hoverEnterOverlay(OverlayID,PointerEvent)`](#e1) |
| [`Overlays.hoverLeaveOverlay(OverlayID,PointerEvent)`](#e2) |
| [`Overlays.hoverOverOverlay(OverlayID,PointerEvent)`](#e3) |
| [`Overlays.mouseDoublePressOffOverlay()`](#e4) |
| [`Overlays.mouseDoublePressOnOverlay(OverlayID,PointerEvent)`](#e5) |
| [`Overlays.mouseMoveOnOverlay(OverlayID,PointerEvent)`](#e6) |
| [`Overlays.mousePressOffOverlay()`](#e7) |
| [`Overlays.mousePressOnOverlay(OverlayID,PointerEvent)`](#e8) |
| [`Overlays.mouseReleaseOnOverlay(OverlayID,PointerEvent)`](#e9) |
| [`Overlays.overlayDeleted(OverlayID)`](#e10) |



### Methods

#### `(static) addOverlay(type, properties)` → {UUid} <a id="m1"></a>

Add an overlay to the scene.

##### Parameters:

| Name         | Type                                     | Description                           |
| ------------ | ---------------------------------------- | ------------------------------------- |
| `type`       | [Overlays.OverlayType](Overlays   #.OverlayType) | The type of the overlay to add.       |
| `properties` | [Overlays.OverlayProperties](Overlays   #.OverlayProperties) | The properties of the overlay to add. |


##### Returns:

The ID of the newly created overlay.

- Type: Uuid

##### Example

Add a cube overlay in front of your avatar.

```
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
```



#### `(static) cloneOverlay(overlayID)` → {UUid} <a id="m2"></a>

Create a clone of an existing overlay.

##### Parameters:

| Name        | Type              | Description                     |
| ----------- | ----------------- | ------------------------------- |
| `overlayID` | UUid | The ID of the overlay to clone. |


##### Returns:

The ID of the new overlay.

- Type: UUid

##### Example

Add an overlay in front of your avatar, clone it, and move the clone to be above the original.

```
var position = Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 }));
var original = Overlays.addOverlay("cube", {
    position: position,
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});

var clone = Overlays.cloneOverlay(original);
Overlays.editOverlay(clone, {
    position: Vec3.sum({ x: 0, y: 0.5, z: 0}, position)
});
```



#### `(static) deleteOverlay(overlayID)`<a id="m3"></a>

Delete an overlay.

##### Parameters:

| Name        | Type              | Description                      |
| ----------- | ----------------- | -------------------------------- |
| `overlayID` | UUid | The ID of the overlay to delete. |


##### Example

Create an overlay in front of your avatar then delete it.

```
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
print("Overlay: " + overlay);
Overlays.deleteOverlay(overlay);
```



#### `(static) editOverlay(overlayID, properties)` → {boolean} <a id="m4"></a>

Edit an overlay's properties.

##### Parameters:

| Name         | Type                                     | Description                     |
| ------------ | ---------------------------------------- | ------------------------------- |
| `overlayID`  | UUid                        | The ID of the overlay to edit.  |
| `properties` | Overlays.OverlayProperties | The properties changes to make. |


##### Returns:

`true` if the overlay was found and edited, otherwise `false`.

- Type: boolean

##### Example

Add an overlay in front of your avatar then change its color.

```
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});

var success = Overlays.editOverlay(overlay, {
    color: { red: 255, green: 0, blue: 0 }
});
print("Success: " + success);
```



#### `(static) editOverlays(propertiesById)` → {boolean}<a id="m5"></a>

Edit multiple overlays' properties.

##### Parameters:

| Name             | Type                                     | Description                              |
| ---------------- | ---------------------------------------- | ---------------------------------------- |
| `propertiesById` | object.<UUid, Overlays.OverlayProperties> | An object with overlay IDs as keys and OverlayProperties edits to make as values. |


##### Returns:

`true` if all overlays were found and edited, otherwise `false` (some may have been found and edited).

- Type: boolean

##### Example

Create two overlays in front of your avatar then change their colors.

```
var overlayA = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: -0.3, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
var overlayB = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0.3, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});

var overlayEdits = {};
overlayEdits[overlayA] = { color: { red: 255, green: 0, blue: 0 } };
overlayEdits[overlayB] = { color: { red: 0, green: 255, blue: 0 } };
var success = Overlays.editOverlays(overlayEdits);
print("Success: " + success);
```



#### `(static) findOverlays(center, radius)` → {Array.<UUid>}<a id="m7"></a>

Return a list of 3D overlays with bounding boxes that touch a search sphere.

##### Parameters:

| Name     | Type                     | Description                      |
| -------- | ------------------------ | -------------------------------- |
| `center` | Vec3 | The center of the search sphere. |
| `radius` | number                   | The radius of the search sphere. |


##### Returns:

An array of overlay IDs with bounding boxes that touch a search sphere.

- Type: Array.<UUid>

##### Example

Create two cube overlays in front of your avatar then search for overlays near your avatar.

```
var overlayA = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: -0.3, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
print("Overlay A: " + overlayA);
var overlayB = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0.3, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
print("Overlay B: " + overlayB);

var overlaysFound = Overlays.findOverlays(MyAvatar.position, 5.0);
print("Overlays found: " + JSON.stringify(overlaysFound));
```



#### `(static) findRayIntersection(pickRay, precisionPickingopt, overlayIDsToIncludeopt, overlayIDsToExcludeopt, visibleOnlyopt, collidableOnlyopt)` → {Overlays.RayToOverlayIntersectionResult}<a id="m8"></a>

Find the closest 3D overlay intersected by a PickRay.

##### Parameters:

| Name                  | Type                           | Attributes | Default | Description                              |
| --------------------- | ------------------------------ | ---------- | ------- | ---------------------------------------- |
| `pickRay`             | [PickRay](  #PickRay) |            |         | The PickRay to use for finding overlays. |
| `precisionPicking`    | boolean                        | <optional> | false   | *Unused*; exists to match Entity API.    |
| `overlayIDsToInclude` | Array.<UUid>      | <optional> | []      | Whitelist for intersection test. If empty then the result isn't limited to overlays in the list. |
| `overlayIDsToExclude` | Array.<UUid>      | <optional> | []      | Blacklist for intersection test. If empty then the result doesn't exclude overlays in the list. |
| `visibleOnly`         | boolean                        | <optional> | false   | *Unused*; exists to match Entity API.    |
| `collidableOnly`      | boolean                        | <optional> | false   | *Unused*; exists to match Entity API.    |


##### Returns:

The closest 3D overlay intersected by `pickRay`, taking into account `overlayIDsToInclude` and `overlayIDsToExclude` if they're not empty.

- Type: Overlays.RayToOverlayIntersectionResult

##### Example

Create a cube overlay in front of your avatar. Report 3D overlay intersection details for mouse clicks.

```
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});

Controller.mousePressEvent.connect(function (event) {
    var pickRay = Camera.computePickRay(event.x, event.y);
    var intersection = Overlays.findRayIntersection(pickRay);
    print("Intersection: " + JSON.stringify(intersection));
});
```



#### `(static) findRayIntersectionVector(pickRay, precisionPickingopt, overlayIDsToIncludeopt, overlayIDsToExcludeopt, visibleOnlyopt, collidableOnlyopt)` → {Overlays.RayToOverlayIntersectionResult}<a id="m6"></a>

Find the closest 3D overlay intersected by a PickRay.

##### Parameters:

| Name                  | Type                           | Attributes | Default | Description                              |
| --------------------- | ------------------------------ | ---------- | ------- | ---------------------------------------- |
| `pickRay`             | PickRay) |            |         | The PickRay to use for finding overlays. |
| `precisionPicking`    | boolean                        | <optional> | false   | *Unused*; exists to match Entity API.    |
| `overlayIDsToInclude` | Array.<UUid>      | <optional> | []      | Whitelist for intersection test. If empty then the result isn't limited to overlays in the list. |
| `overlayIDsToExclude` | Array.<UUid>      | <optional> | []      | Blacklist for intersection test. If empty then the result doesn't exclude overlays in the list. |
| `visibleOnly`         | boolean                        | <optional> | false   | *Unused*; exists to match Entity API.    |
| `collidableOnly`      | boolean                        | <optional> | false   | *Unused*; exists to match Entity API.    |

- Deprecated:

  Use Overlays.findRayIntersection instead; it has identical parameters and results.

##### Returns:

The closest 3D overlay intersected by `pickRay`, taking into account `overlayIDsToInclude` and `overlayIDsToExclude` if they're not empty.

- Type: Overlays.RayToOverlayIntersectionResult



#### `(static) getKeyboardFocusOverlay()` → {UUid}<a id="m9"></a>

Get the ID of the Web3D overlay that has keyboard focus.


##### Returns:

The ID of the web3d overlay that has focus, if any, otherwise `null`.

- Type: UUid



#### `(static) getOverlayAtPoint(point)` → {UUid} <a id="m10"></a>

Get the ID of the 2D overlay at a particular point on the screen or HUD.

##### Parameters:

| Name    | Type                     | Description                        |
| ------- | ------------------------ | ---------------------------------- |
| `point` | Vec2 | The point to check for an overlay. |


##### Returns:

The ID of the 2D overlay at the specified point if found, otherwise `null`.

- Type: UUid

##### Example

Create a 2D overlay and add an event function that reports the overlay clicked on, if any.

```
var overlay = Overlays.addOverlay("rectangle", {
    bounds: { x: 100, y: 100, width: 200, height: 100 },
    color: { red: 255, green: 255, blue: 255 }
});
print("Created: " + overlay);

Controller.mousePressEvent.connect(function (event) {
    var overlay = Overlays.getOverlayAtPoint({ x: event.x, y: event.y });
    print("Clicked: " + overlay);
});
```



#### `(static) getOverlayObject(overlayID)` → {object} <a id="m11"></a>

Get the overlay script object.

##### Parameters:

| Name        | Type              | Description                              |
| ----------- | ----------------- | ---------------------------------------- |
| `overlayID` | UUid | The ID of the overlay to get the script object of. |

> > > > > Deprecated: This function is deprecated and will soon be removed.

##### Returns:

The script object for the overlay if found.

- Type: object



#### `(static) getOverlaysProperties(propertiesById)` → {object.<UUid, Overlays.OverlayProperties>} <a id="m12"></a>

Get the values of multiple overlays' properties.

##### Parameters:

| Name             | Type                                     | Description                              |
| ---------------- | ---------------------------------------- | ---------------------------------------- |
| `propertiesById` | object.<UUid, Array.<string>> | An object with overlay IDs as keys and arrays of the names of properties to get for each as values. |


##### Returns:

An object with overlay IDs as keys and OverlayProperties as values.

- Type: object.<UUid, Overlays.OverlayProperties>

##### Example

Create two cube overlays in front of your avatar then get some of their properties.

```
var overlayA = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: -0.3, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
var overlayB = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0.3, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
var propertiesToGet = {};
propertiesToGet[overlayA] = ["color", "alpha"];
propertiesToGet[overlayB] = ["dimensions"];
var properties = Overlays.getOverlaysProperties(propertiesToGet);
print("Overlays properties: " + JSON.stringify(properties));
```



#### `(static) getOverlayType(overlayID)` → {Overlays.OverlayType} <a id="m13"></a>

Get the type of an overlay.

##### Parameters:

| Name        | Type              | Description                              |
| ----------- | ----------------- | ---------------------------------------- |
| `overlayID` | UUid | The ID of the overlay to get the type of. |


##### Returns:

The type of the overlay if found, otherwise an empty string.

- Type: Overlays.OverlayType

##### Example

Create an overlay in front of your avatar then get and report its type.

```
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
var type = Overlays.getOverlayType(overlay);
print("Type: " + type);
```



#### `(static) getProperties(overlayID, properties)` → {Overlays.OverlayProperties} <a id="m15"></a>

Get the values of an overlay's properties.

##### Parameters:

| Name         | Type              | Description                              |
| ------------ | ----------------- | ---------------------------------------- |
| `overlayID`  | UUid | The ID of the overlay.                   |
| `properties` | Array.<string>    | An array of names of properties to get the values of. |


##### Returns:

The values of valid properties if the overlay can be found, otherwise `undefined`.

- Type: Overlays.OverlayProperties

##### Example

Create an overlay in front of your avatar then report some of its properties.

```
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
var properties = Overlays.getProperties(overlay, ["color", "alpha", "grabbable"]);
print("Overlay properties: " + JSON.stringify(properties));
```



#### `(static) getProperty(overlayID, property)` → {object} <a id="m14"></a>

Get the value of a 3D overlay's property.

##### Parameters:

| Name        | Type              | Description                              |
| ----------- | ----------------- | ---------------------------------------- |
| `overlayID` | UUid | The ID of the overlay. *Must be for a 3D OverlayType.* |
| `property`  | string            | The name of the property value to get.   |


##### Returns:

The value of the property if the 3D overlay and property can be found, otherwise `undefined`.

- Type: object

##### Example

Create an overlay in front of your avatar then report its alpha property value.

```
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
var alpha = Overlays.getProperty(overlay, "alpha");
print("Overlay alpha: " + alpha);
```



#### `(static) height()` → {number}<a id="m16"></a>

Get the height of the window or HUD.


##### Returns:

The height, in pixels, of the Interface window if in desktop mode or the HUD if in HMD mode.

- Type: number



#### `(static) isAddedOverly(overlayID)` → {boolean}<a id="m17"></a>

Check if there is an overlay of a given ID.

##### Parameters:

| Name        | Type              | Description      |
| ----------- | ----------------- | ---------------- |
| `overlayID` | UUid | The ID to check. |


##### Returns:

`true` if an overlay with the given ID exists, `false` otherwise.

- Type: boolean



#### `(static) isLoaded(overlayID)` → {boolean}<a id="m18"></a>

Check whether an overlay's assets have been loaded. For example, for an `image` overlay the result indicates whether its image has been loaded.

##### Parameters:

| Name        | Type              | Description                     |
| ----------- | ----------------- | ------------------------------- |
| `overlayID` | UUid | The ID of the overlay to check. |


##### Returns:

`true` if the overlay's assets have been loaded, otherwise `false`.

- Type: boolean

##### Example

Create an image overlay and report whether its image is loaded after 1s.

```
var overlay = Overlays.addOverlay("image", {
    bounds: { x: 100, y: 100, width: 200, height: 200 },
    imageURL: "https://content.highfidelity.com/DomainContent/production/Particles/wispy-smoke.png"
});
Script.setTimeout(function () {
    var isLoaded = Overlays.isLoaded(overlay);
    print("Image loaded: " + isLoaded);
}, 1000);
```



#### `(static) sendHoverEnterOverlay(id, event)`<a id="m19"></a>

Generate a hover enter event on an overlay.

##### Parameters:

| Name    | Type                                     | Description                              |
| ------- | ---------------------------------------- | ---------------------------------------- |
| `id`    | UUid                        | The ID of the overlay to generate a hover enter event on. |
| `event` | PointerEvent | The hover enter event details.           |




#### `(static) sendHoverLeaveOverlay(overlayID, event)`<a id="m20"></a>

Generate a hover leave event on an overlay.

##### Parameters:

| Name        | Type                                     | Description                              |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| `overlayID` | UUid                        | The ID of the overlay to generate a hover leave event on. |
| `event`     | PointerEvent | The hover leave event details.           |




#### `(static) sendHoverOverOverlay(overlayID, event)`<a id="m21"></a>

Generate a hover over event on an overlay.

##### Parameters:

| Name        | Type                                     | Description                              |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| `overlayID` | UUid                        | The ID of the overlay to generate a hover over event on. |
| `event`     | PointerEvent | The hover over event details.            |




#### `(static) sendMouseMoveOnOverlay(overlayID, event)`<a id="m22"></a>

Generate a mouse move event on an overlay.

##### Parameters:

| Name        | Type                                     | Description                              |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| `overlayID` | UUid                        | The ID of the overlay to generate a mouse move event on. |
| `event`     | PointerEvent | The mouse move event details.            |




#### `(static) sendMousePressOnOverlay(overlayID, event)`<a id="m23"></a>

Generate a mouse press event on an overlay.

##### Parameters:

| Name        | Type                                     | Description                              |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| `overlayID` | UUid                        | The ID of the overlay to generate a mouse press event on. |
| `event`     | PointerEvent | The mouse press event details.           |


##### Example

Create a 2D rectangle overlay plus a 3D cube overlay and generate mousePressOnOverlay events for the 2D overlay.

```
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
print("3D overlay: " + overlay);

var overlay = Overlays.addOverlay("rectangle", {
    bounds: { x: 100, y: 100, width: 200, height: 100 },
    color: { red: 255, green: 255, blue: 255 }
});
print("2D overlay: " + overlay);

// Overlays.mousePressOnOverlay by default applies only to 3D overlays.
Overlays.mousePressOnOverlay.connect(function(overlayID, event) {
    print("Clicked: " + overlayID);
});

Controller.mousePressEvent.connect(function (event) {
    // Overlays.getOverlayAtPoint applies only to 2D overlays.
    var overlay = Overlays.getOverlayAtPoint({ x: event.x, y: event.y });
    if (overlay) {
        Overlays.sendMousePressOnOverlay(overlay, {
            type: "press",
            id: 0,
            pos2D: event
        });
    }
});
```



#### `(static) sendMouseReleaseOnOverlay(overlayID, event)`<a id="m24"></a>

Generate a mouse release event on an overlay.

##### Parameters:

| Name        | Type                                     | Description                              |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| `overlayID` | UUid                        | The ID of the overlay to generate a mouse release event on. |
| `event`     | PointerEvent | The mouse release event details.         |




#### `(static) setKeyboardFocusOverlay(overlayID)`<a id="m25"></a>

Set the Web3D overlay that has keyboard focus.

##### Parameters:

| Name        | Type              | Description                              |
| ----------- | ----------------- | ---------------------------------------- |
| `overlayID` | UUid | The ID of the web3d overlay to set keyboard focus to. Use Uuid.NULL or `null` to unset keyboard focus from an overlay. |




#### `(static) textSize(overlayID, text)`<a id="m26"></a> → {Size}

Calculates the size of the given text in the specified overlay if it is a text overlay.

##### Parameters:

| Name        | Type              | Description                              |
| ----------- | ----------------- | ---------------------------------------- |
| `overlayID` | UUid | The ID of the overlay to use for calculation. |
| `text`      | string            | The string to calculate the size of.     |


##### Returns:

The size of the `text` if the overlay is a text overlay, otherwise `{ height: 0, width : 0 }`. If the overlay is a 2D overlay, the size is in pixels; if the overlay is a 3D overlay, the size is in meters.

- Type: Size

##### Example

Calculate the size of "hello" in a 3D text overlay.

```
var overlay = Overlays.addOverlay("text3d", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -2 })),
    rotation: MyAvatar.orientation,
    text: "hello",
    lineHeight: 0.2
});
var textSize = Overlays.textSize(overlay, "hello");
print("Size of \"hello\": " + JSON.stringify(textSize));
```



#### `(static) width()` → {number}<a id="m27"></a>

Get the width of the window or HUD.


##### Returns:

The width, in pixels, of the Interface window if in desktop mode or the HUD if in HMD mode.

- Type: number

## Events



#### `(static) hoverEnterOverlay(overlayID, event)` → {Signal}<a id="e1"></a>

Triggered when a mouse cursor starts hovering over an overlay. Only occurs for 3D overlays (unless you use sendHoverEnterOverlay for a 2D overlay).

##### Parameters:

| Name        | Type                                     | Description                              |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| `overlayID` | UUid                        | The ID of the overlay the mouse moved event occurred on. |
| `event`     | PointerEvent | The mouse move event details.            |


##### Returns:

- Type: Signal

##### Example

Create a cube overlay in front of your avatar and report when you start hovering your mouse over it.

```
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
print("Overlay: " + overlay);
Overlays.hoverEnterOverlay.connect(function(overlayID, event) {
    print("Hover enter: " + overlayID);
});
```



#### `(static) hoverLeaveOverlay(overlayID, event)` → {Signal} <a id="e2"></a>

Triggered when a mouse cursor finishes hovering over an overlay. Only occurs for 3D overlays (unless you use sendHoverLeaveOverlay for a 2D overlay).

##### Parameters:

| Name        | Type                                     | Description                              |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| `overlayID` | UUid                        | The ID of the overlay the hover leave event occurred on. |
| `event`     | PointerEvent | The hover leave event details.           |


##### Returns:

- Type: Signal



#### `(static) hoverOverOverlay(overlayID, event)` → {Signal}<a id="e3"></a>

Triggered when a mouse cursor continues hovering over an overlay. Only occurs for 3D overlays (unless you use sendHoverOverOverlay for a 2D overlay).

##### Parameters:

| Name        | Type                                     | Description                              |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| `overlayID` | UUid                        | The ID of the overlay the hover over event occurred on. |
| `event`     | PointerEvent | The hover over event details.            |


##### Returns:

- Type: Signal



#### `(static) mouseDoublePressOffOverlay()` → {Signal} <a id="e4"></a>

Triggered when a mouse double press event occurs on something other than a 3D overlay.


##### Returns:

- Type: Signal



#### `(static) mouseDoublePressOnOverlay(overlayID, event)` → {Signal} <a id="e5"></a>

Triggered when a mouse double press event occurs on an overlay. Only occurs for 3D overlays.

##### Parameters:

| Name        | Type                                     | Description                              |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| `overlayID` | UUid                        | The ID of the overlay the mouse double press event occurred on. |
| `event`     | PointerEvent | The mouse double press event details.    |


##### Returns:

- Type: Signal



#### `(static) mouseMoveOnOverlay(overlayID, event)` → {Signal}<a id="e6"></a>

Triggered when a mouse move event occurs on an overlay. Only occurs for 3D overlays (unless you use sendMouseMoveOnOverlay for a 2D overlay).

##### Parameters:

| Name        | Type                                     | Description                              |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| `overlayID` | UUid                        | The ID of the overlay the mouse moved event occurred on. |
| `event`     | PointerEvent | The mouse move event details.            |


##### Returns:

- Type: Signal



#### `(static) mousePressOffOverlay() → {Signal}`<a id="e7"></a>

Triggered when a mouse press event occurs on something other than a 3D overlay.


##### Returns:

- Type: Signal



#### `(static) mousePressOnOverlay(overlayID, event)` → {Signal}<a id="e8"></a>

Triggered when a mouse press event occurs on an overlay. Only occurs for 3D overlays (unless you use sendMousePressOnOverlay for a 2D overlay).

##### Parameters:

| Name        | Type                                     | Description                              |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| `overlayID` | UUid                        | The ID of the overlay the mouse press event occurred on. |
| `event`     | PointerEvent | The mouse press event details.           |


##### Returns:

- Type: Signal

##### Example

Create a cube overlay in front of your avatar and report mouse clicks on it.

```
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
print("My overlay: " + overlay);

Overlays.mousePressOnOverlay.connect(function(overlayID, event) {
    if (overlayID === overlay) {
        print("Clicked on my overlay");
    }
});
```



#### `(static) mouseReleaseOnOverlay(overlayID, event)` → {Signal}<a id="e9"></a>

Triggered when a mouse release event occurs on an overlay. Only occurs for 3D overlays (unless you use sendMouseReleaseOnOverlay for a 2D overlay).

##### Parameters:

| Name        | Type                                     | Description                              |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| `overlayID` | UUid                        | The ID of the overlay the mouse release event occurred on. |
| `event`     | PointerEvent | The mouse release event details.         |


##### Returns:

- Type: Signal



#### `(static) overlayDeleted(overlayID)` → {Signal}<a id="e10"></a>

Triggered when an overlay is deleted.

##### Parameters:

| Name        | Type              | Description                             |
| ----------- | ----------------- | --------------------------------------- |
| `overlayID` | UUid | The ID of the overlay that was deleted. |


##### Returns:

- Type: Signal

##### Example

Create an overlay then delete it after 1s.

```
var overlay = Overlays.addOverlay("cube", {
    position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0, z: -3 })),
    rotation: MyAvatar.orientation,
    dimensions: { x: 0.3, y: 0.3, z: 0.3 },
    solid: true
});
print("Overlay: " + overlay);

Overlays.overlayDeleted.connect(function(overlayID) {
    print("Deleted: " + overlayID);
});
Script.setTimeout(function () {
    Overlays.deleteOverlay(overlay);
}, 1000);
```



### Type Definitions

#### Circle3DProperties

These are the properties of a `circle3d` OverlayType.

##### Type:

- object

##### Properties:

| Name                    | Type                       | Default     | Description                              |
| ----------------------- | -------------------------- | ----------- | ---------------------------------------- |
| `type`                  | string                     | circle3d    | Has the value `"circle3d"`. *Read-only.* |
| `pulseMax`              | number                     | 0           | The maximum value of the pulse multiplier. |
| `pulseMin`              | number                     | 0           | The minimum value of the pulse multiplier. |
| `pulsePeriod`           | number                     | 1           | The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from `pulseMin` to `pulseMax`, then `pulseMax` to `pulseMin` in one period. |
| `alphaPulse`            | number                     | 0           | If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `colorPulse`            | number                     | 0           | If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `visible`               | boolean                    | true        | If `true`, the overlay is rendered, otherwise it is not rendered. |
| `name`                  | string                     | ""          | A friendly name for the overlay.         |
| `position`              | Vec3   |             | The position of the overlay center. Synonyms: `p1`, `point`, and `start`. |
| `localPosition`         | Vec3   |             | The local position of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `position`. |
| `rotation`              | Quat   |             | The orientation of the overlay. Synonym: `orientation`. |
| `localRotation`         | Quat   |             | The orientation of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `rotation`. |
| `isSolid`               | boolean                    | false       | Synonyms: solid, `isFilled`, and `filled` Antonyms: `isWire` and `wire`. |
| `isDashedLine`          | boolean                    | false       | If `true`, a dashed line is drawn on the overlay's edges. Synonym: `dashed`. |
| `ignoreRayIntersection` | boolean                    | false       | If `true`, findRayIntersection ignores the overlay. |
| `drawInFront`           | boolean                    | false       | If `true`, the overlay is rendered in front of other overlays that don't have `drawInFront` set to `true`, and in front of entities. |
| `grabbable`             | boolean                    | false       | Signal to grabbing scripts whether or not this overlay can be grabbed. |
| `parentID`              | UUid          | null        | The avatar, entity, or overlay that the overlay is parented to. |
| `parentJointIndex`      | number                     | 65535       | Integer value specifying the skeleton joint that the overlay is attached to if `parentID` is an avatar skeleton. A value of `65535` means "no joint". |
| `dimensions`            | Vec2   | 1,1         | The dimensions of the overlay. Synonyms: `scale`, `size`. *Not used.* |
| `startAt`               | number                     | 0           | The counter-clockwise angle from the overlay's x-axis that drawing starts at, in degrees. |
| `endAt`                 | number                     | 360         | The counter-clockwise angle from the overlay's x-axis that drawing ends at, in degrees. |
| `outerRadius`           | number                     | 1           | The outer radius of the overlay, in meters. Synonym: `radius`. |
| `innerRadius`           | number                     | 0           | The inner radius of the overlay, in meters. |
| `color`                 | Color | 255,255,255 | The color of the overlay. Setting this value also sets the values of `innerStartColor`, `innerEndColor`, `outerStartColor`, and `outerEndColor`. |
| `startColor`            | Color |             | Sets the values of `innerStartColor` and `outerStartColor`. *Write-only.* |
| `endColor`              | Color |             | Sets the values of `innerEndColor` and `outerEndColor`. *Write-only.* |
| `innerColor`            | Color |             | Sets the values of `innerStartColor` and `innerEndColor`. *Write-only.* |
| `outerColor`            | Color |             | Sets the values of `outerStartColor` and `outerEndColor`. *Write-only.* |
| `innerStartcolor`       | Color |             | The color at the inner start point of the overlay. *Write-only.* |
| `innerEndColor`         | Color |             | The color at the inner end point of the overlay. *Write-only.* |
| `outerStartColor`       | Color |             | The color at the outer start point of the overlay. *Write-only.* |
| `outerEndColor`         | Color |             | The color at the outer end point of the overlay. *Write-only.* |
| `alpha`                 | number                     | 0.5         | The opacity of the overlay, `0.0` - `1.0`. Setting this value also sets the values of `innerStartAlpha`, `innerEndAlpha`, `outerStartAlpha`, and`outerEndAlpha`. Synonym: `Alpha`; *write-only*. |
| `startAlpha`            | number                     |             | Sets the values of `innerStartAlpha` and `outerStartAlpha`. *Write-only.* |
| `endAlpha`              | number                     |             | Sets the values of `innerEndAlpha` and `outerEndAlpha`. *Write-only.* |
| `innerAlpha`            | number                     |             | Sets the values of `innerStartAlpha` and `innerEndAlpha`. *Write-only.* |
| `outerAlpha`            | number                     |             | Sets the values of `outerStartAlpha` and `outerEndAlpha`. *Write-only.* |
| `innerStartAlpha`       | number                     | 0           | The alpha at the inner start point of the overlay. *Write-only.* |
| `innerEndAlpha`         | number                     | 0           | The alpha at the inner end point of the overlay. *Write-only.* |
| `outerStartAlpha`       | number                     | 0           | The alpha at the outer start point of the overlay. *Write-only.* |
| `outerEndAlpha`         | number                     | 0           | The alpha at the outer end point of the overlay. *Write-only.* |
| `hasTickMarks`          | boolean                    | false       | If `true`, tick marks are drawn.         |
| `majorTickMarksAngle`   | number                     | 0           | The angle between major tick marks, in degrees. |
| `minorTickMarksAngle`   | number                     | 0           | The angle between minor tick marks, in degrees. |
| `majorTickMarksLength`  | number                     | 0           | The length of the major tick marks, in meters. A positive value draws tick marks outwards from the inner radius; a negative value draws tick marks inwards from the outer radius. |
| `minorTickMarksLength`  | number                     | 0           | The length of the minor tick marks, in meters. A positive value draws tick marks outwards from the inner radius; a negative value draws tick marks inwards from the outer radius. |
| `majorTickMarksColor`   | Color | 0,0,0       | The color of the major tick marks.       |
| `minorTickMarksColor`   | Color | 0,0,0       | The color of the minor tick marks.       |


#### CubeProperties

These are the properties of a `cube` OverlayType.

##### Type:

- object

##### Properties:

| Name                    | Type                       | Default     | Description                              |
| ----------------------- | -------------------------- | ----------- | ---------------------------------------- |
| `type`                  | string                     | cube        | Has the value `"cube"`. *Read-only.*     |
| `color`                 | Color | 255,255,255 | The color of the overlay.                |
| `alpha`                 | number                     | 0.7         | The opacity of the overlay, `0.0` - `1.0`. |
| `pulseMax`              | number                     | 0           | The maximum value of the pulse multiplier. |
| `pulseMin`              | number                     | 0           | The minimum value of the pulse multiplier. |
| `pulsePeriod`           | number                     | 1           | The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from `pulseMin` to `pulseMax`, then `pulseMax` to `pulseMin` in one period. |
| `alphaPulse`            | number                     | 0           | If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `colorPulse`            | number                     | 0           | If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `visible`               | boolean                    | true        | If `true`, the overlay is rendered, otherwise it is not rendered. |
| `name`                  | string                     | ""          | A friendly name for the overlay.         |
| `position`              | Vec3   |             | The position of the overlay center. Synonyms: `p1`, `point`, and `start`. |
| `localPosition`         | Vec3   |             | The local position of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `position`. |
| `rotation`              | Quat   |             | The orientation of the overlay. Synonym: `orientation`. |
| `localRotation`         | Quat   |             | The orientation of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `rotation`. |
| `isSolid`               | boolean                    | false       | Synonyms: solid, `isFilled`, and `filled`. Antonyms: `isWire` and `wire`. |
| `isDashedLine`          | boolean                    | false       | If `true`, a dashed line is drawn on the overlay's edges. Synonym: `dashed`. |
| `ignoreRayIntersection` | boolean                    | false       | If `true`, findRayIntersection ignores the overlay. |
| `drawInFront`           | boolean                    | false       | If `true`, the overlay is rendered in front of other overlays that don't have `drawInFront` set to `true`, and in front of entities. |
| `grabbable`             | boolean                    | false       | Signal to grabbing scripts whether or not this overlay can be grabbed. |
| `parentID`              | UUid          | null        | The avatar, entity, or overlay that the overlay is parented to. |
| `parentJointIndex`      | number                     | 65535       | Integer value specifying the skeleton joint that the overlay is attached to if `parentID` is an avatar skeleton. A value of `65535` means "no joint". |
| `dimensions`            | Vec3   |             | The dimensions of the overlay. Synonyms: `scale`, `size`. |
| `borderSize`            | number                     |             | Not used.                                |


#### GridProperties

These are the properties of a `grid` OverlayType.

##### Type:

- object

##### Properties:

| Name                    | Type                       | Default     | Description                              |
| ----------------------- | -------------------------- | ----------- | ---------------------------------------- |
| `type`                  | string                     | grid        | Has the value `"grid"`. *Read-only.*     |
| `color`                 | Color | 255,255,255 | The color of the overlay.                |
| `alpha`                 | number                     | 0.7         | The opacity of the overlay, `0.0` - `1.0`. |
| `pulseMax`              | number                     | 0           | The maximum value of the pulse multiplier. |
| `pulseMin`              | number                     | 0           | The minimum value of the pulse multiplier. |
| `pulsePeriod`           | number                     | 1           | The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from `pulseMin` to `pulseMax`, then `pulseMax` to `pulseMin` in one period. |
| `alphaPulse`            | number                     | 0           | If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `colorPulse`            | number                     | 0           | If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `visible`               | boolean                    | true        | If `true`, the overlay is rendered, otherwise it is not rendered. |
| `name`                  | string                     | ""          | A friendly name for the overlay.         |
| `position`              | Vec3   |             | The position of the overlay center. Synonyms: `p1`, `point`, and `start`. |
| `localPosition`         | Vec3   |             | The local position of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `position`. |
| `rotation`              | Quat   |             | The orientation of the overlay. Synonym: `orientation`. |
| `localRotation`         | Quat   |             | The orientation of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `rotation`. |
| `isSolid`               | boolean                    | false       | Synonyms: solid, `isFilled`, and `filled`. Antonyms: `isWire` and `wire`. |
| `isDashedLine`          | boolean                    | false       | If `true`, a dashed line is drawn on the overlay's edges. Synonym: `dashed`. |
| `ignoreRayIntersection` | boolean                    | false       | If `true`, findRayIntersection ignores the overlay. |
| `drawInFront`           | boolean                    | false       | If `true`, the overlay is rendered in front of other overlays that don't have `drawInFront` set to `true`, and in front of entities. |
| `grabbable`             | boolean                    | false       | Signal to grabbing scripts whether or not this overlay can be grabbed. |
| `parentID`              | UUid          | null        | The avatar, entity, or overlay that the overlay is parented to. |
| `parentJointIndex`      | number                     | 65535       | Integer value specifying the skeleton joint that the overlay is attached to if `parentID` is an avatar skeleton. A value of `65535` means "no joint". |
| `dimensions`            | Vec2   | 1,1         | The dimensions of the overlay. Synonyms: `scale`, `size`. |
| `followCamera`          | boolean                    | true        | If `true`, the grid is always visible even as the camera moves to another position. |
| `majorGridEvery`        | number                     | 5           | Integer number of `minorGridEvery` intervals at which to draw a thick grid line. Minimum value = `1`. |
| `minorGridEvery`        | number                     | 1           | Real number of meters at which to draw thin grid lines. Minimum value = `0.001`. |


#### Image3DProperties

These are the properties of an `image3d` OverlayType.

##### Type:

- object

##### Properties:

| Name                    | Type                       | Default     | Description                              |
| ----------------------- | -------------------------- | ----------- | ---------------------------------------- |
| `type`                  | string                     | image3d     | Has the value `"image3d"`. *Read-only.*  |
| `color`                 | Color | 255,255,255 | The color of the overlay.                |
| `alpha`                 | number                     | 0.7         | The opacity of the overlay, `0.0` - `1.0`. |
| `pulseMax`              | number                     | 0           | The maximum value of the pulse multiplier. |
| `pulseMin`              | number                     | 0           | The minimum value of the pulse multiplier. |
| `pulsePeriod`           | number                     | 1           | The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from `pulseMin` to `pulseMax`, then `pulseMax` to `pulseMin` in one period. |
| `alphaPulse`            | number                     | 0           | If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `colorPulse`            | number                     | 0           | If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `visible`               | boolean                    | true        | If `true`, the overlay is rendered, otherwise it is not rendered. |
| `name`                  | string                     | ""          | A friendly name for the overlay.         |
| `position`              | Vec3   |             | The position of the overlay center. Synonyms: `p1`, `point`, and `start`. |
| `localPosition`         | Vec3   |             | The local position of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `position`. |
| `rotation`              | Quat   |             | The orientation of the overlay. Synonym: `orientation`. |
| `localRotation`         | Quat   |             | The orientation of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `rotation`. |
| `isSolid`               | boolean                    | false       | Synonyms: solid, `isFilled`, and `filled`. Antonyms: `isWire` and `wire`. |
| `isDashedLine`          | boolean                    | false       | If `true`, a dashed line is drawn on the overlay's edges. Synonym: `dashed`. |
| `ignoreRayIntersection` | boolean                    | false       | If `true`, findRayIntersection ignores the overlay. |
| `drawInFront`           | boolean                    | false       | If `true`, the overlay is rendered in front of other overlays that don't have `drawInFront` set to `true`, and in front of entities. |
| `grabbable`             | boolean                    | false       | Signal to grabbing scripts whether or not this overlay can be grabbed. |
| `parentID`              | UUid          | null        | The avatar, entity, or overlay that the overlay is parented to. |
| `parentJointIndex`      | number                     | 65535       | Integer value specifying the skeleton joint that the overlay is attached to if `parentID` is an avatar skeleton. A value of `65535` means "no joint". |
| `dimensions`            | Vec2  | 1,1         | The dimensions of the overlay. Synonyms: `scale`, `size`. |
| `isFacingAvatar`        | boolean                    |             | If `true`, the overlay is rotated to face the user's camera about an axis parallel to the user's avatar's "up" direction. |
| `url`                   | string                     |             | The URL of the PNG or JPG image to display. |
| `subImage`              | Rect   |             | The portion of the image to display. Defaults to the full image. |
| `emissive`              | boolean                    |             | If `true`, the overlay is displayed at full brightness, otherwise it is rendered with scene lighting. |


#### ImageProperties

These are the properties of an `image` OverlayType.

##### Type:

- object

##### Properties:

| Name       | Type                       | Default | Description                              |
| ---------- | -------------------------- | ------- | ---------------------------------------- |
| `bounds`   | Rect   |         | The position and size of the image display area, in pixels. *Write-only.* |
| `x`        | number                     |         | Integer left, x-coordinate value of the image display area = `bounds.x`. *Write-only.* |
| `y`        | number                     |         | Integer top, y-coordinate value of the image display area = `bounds.y`. *Write-only.* |
| `width`    | number                     |         | Integer width of the image display area = `bounds.width`. *Write-only.* |
| `height`   | number                     |         | Integer height of the image display area = `bounds.height`. *Write-only.* |
| `imageURL` | string                     |         | The URL of the image file to display. The image is scaled to fit to the `bounds`. *Write-only.* |
| `subImage` | Vec2   | 0,0     | Integer coordinates of the top left pixel to start using image content from. *Write-only.* |
| `color`    | Color | 0,0,0   | The color to apply over the top of the image to colorize it. *Write-only.* |
| `alpha`    | number                     | 0.0     | The opacity of the color applied over the top of the image, `0.0` - `1.0`. *Write-only.* |
| `visible`  | boolean                    | true    | If `true`, the overlay is rendered, otherwise it is not rendered. *Write-only.* |


#### Line3DProperties

These are the properties of a `line3d` OverlayType.

##### Type:

- object

##### Properties:

| Name                    | Type                       | Default     | Description                              |
| ----------------------- | -------------------------- | ----------- | ---------------------------------------- |
| `type`                  | string                     | line3d      | Has the value `"line3d"`. *Read-only.*   |
| `color`                 | Color | 255,255,255 | The color of the overlay.                |
| `alpha`                 | number                     | 0.7         | The opacity of the overlay, `0.0` - `1.0`. |
| `pulseMax`              | number                     | 0           | The maximum value of the pulse multiplier. |
| `pulseMin`              | number                     | 0           | The minimum value of the pulse multiplier. |
| `pulsePeriod`           | number                     | 1           | The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from `pulseMin` to `pulseMax`, then `pulseMax` to `pulseMin` in one period. |
| `alphaPulse`            | number                     | 0           | If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `colorPulse`            | number                     | 0           | If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `visible`               | boolean                    | true        | If `true`, the overlay is rendered, otherwise it is not rendered. |
| `name`                  | string                     | ""          | A friendly name for the overlay.         |
| `position`              | Vec3   |             | The position of the overlay center. Synonyms: `p1`, `point`, and `start`. |
| `localPosition`         | Vec3   |             | The local position of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `position`. |
| `rotation`              | Quat   |             | The orientation of the overlay. Synonym: `orientation`. |
| `localRotation`         | Quat   |             | The orientation of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `rotation`. |
| `isSolid`               | boolean                    | false       | Synonyms: solid, `isFilled`, and `filled`. Antonyms: `isWire` and `wire`. |
| `isDashedLine`          | boolean                    | false       | If `true`, a dashed line is drawn on the overlay's edges. Synonym: `dashed`. |
| `ignoreRayIntersection` | boolean                    | false       | If `true`, [findRayIntersection](Overlays   #.findRayIntersection) ignores the overlay. |
| `drawInFront`           | boolean                    | false       | If `true`, the overlay is rendered in front of other overlays that don't have `drawInFront` set to `true`, and in front of entities. |
| `grabbable`             | boolean                    | false       | Signal to grabbing scripts whether or not this overlay can be grabbed. |
| `parentID`              | UUid          | null        | The avatar, entity, or overlay that the overlay is parented to. |
| `parentJointIndex`      | number                     | 65535       | Integer value specifying the skeleton joint that the overlay is attached to if `parentID` is an avatar skeleton. A value of `65535` means "no joint". |
| `endParentID`           | UUid          | null        | The avatar, entity, or overlay that the end point of the line is parented to. |
| `endParentJointIndex`   | number                     | 65535       | Integer value specifying the skeleton joint that the end point of the line is attached to if `parentID` is an avatar skeleton. A value of `65535`means "no joint". |
| `start`                 | Vec3   |             | The start point of the line. Synonyms: `startPoint`, `p1`, and `position`. |
| `end`                   | Vec3   |             | The end point of the line. Synonyms: `endPoint` and `p2`. |
| `localStart`            | Vec3   |             | The local position of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `start`. Synonym: `localPosition`. |
| `localEnd`              | Vec3   |             | The local position of the overlay relative to its parent if the overlay has a `endParentID` set, otherwise the same value as `end`. |
| `length`                | number                     |             | The length of the line, in meters. This can be set after creating a line with start and end points. |
| `glow`                  | number                     | 0           | If `glow > 0`, the line is rendered with a glow. |
| `lineWidth`             | number                     | 0.02        | If `glow > 0`, this is the width of the glow, in meters. |


#### ModelProperties

These are the properties of a `model` OverlayType.

##### Type:

- object

##### Properties:

| Name                                 | Type                             | Default     | Description                              |
| ------------------------------------ | -------------------------------- | ----------- | ---------------------------------------- |
| `type`                               | string                           | sphere      | Has the value `"model"`. *Read-only.*    |
| `color`                              | Color       | 255,255,255 | The color of the overlay.                |
| `alpha`                              | number                           | 0.7         | The opacity of the overlay, `0.0` - `1.0`. |
| `pulseMax`                           | number                           | 0           | The maximum value of the pulse multiplier. |
| `pulseMin`                           | number                           | 0           | The minimum value of the pulse multiplier. |
| `pulsePeriod`                        | number                           | 1           | The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from `pulseMin` to `pulseMax`, then `pulseMax` to `pulseMin` in one period. |
| `alphaPulse`                         | number                           | 0           | If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `colorPulse`                         | number                           | 0           | If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `visible`                            | boolean                          | true        | If `true`, the overlay is rendered, otherwise it is not rendered. |
| `name`                               | string                           | ""          | A friendly name for the overlay.         |
| `position`                           | Vec3         |             | The position of the overlay center. Synonyms: `p1`, `point`, and `start`. |
| `localPosition`                      | Vec3         |             | The local position of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `position`. |
| `rotation`                           | Quat         |             | The orientation of the overlay. Synonym: `orientation`. |
| `localRotation`                      | Quat         |             | The orientation of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `rotation`. |
| `isSolid`                            | boolean                          | false       | Synonyms: solid, `isFilled`, and `filled`. Antonyms: `isWire` and `wire`. |
| `isDashedLine`                       | boolean                          | false       | If `true`, a dashed line is drawn on the overlay's edges. Synonym: `dashed`. |
| `ignoreRayIntersection`              | boolean                          | false       | If `true`, [findRayIntersection](Overlays   #.findRayIntersection) ignores the overlay. |
| `drawInFront`                        | boolean                          | false       | If `true`, the overlay is rendered in front of other overlays that don't have `drawInFront` set to `true`, and in front of entities. |
| `grabbable`                          | boolean                          | false       | Signal to grabbing scripts whether or not this overlay can be grabbed. |
| `parentID`                           | UUid                | null        | The avatar, entity, or overlay that the overlay is parented to. |
| `parentJointIndex`                   | number                           | 65535       | Integer value specifying the skeleton joint that the overlay is attached to if `parentID` is an avatar skeleton. A value of `65535` means "no joint". |
| `url`                                | string                           |             | The URL of the FBX or OBJ model used for the overlay. |
| `dimensions`                         | Vec3         |             | The dimensions of the overlay. Synonym: `size`. |
| `scale`                              | Vec3         |             | The scale factor applied to the model's dimensions. |
| `textures`                           | object.<name, url>               |             | Maps the named textures in the model to the JPG or PNG images in the urls. |
| `jointNames`                         | Array.<string>                   |             | The names of the joints - if any - in the model. *Read-only* |
| `jointRotations`                     | Array.<Quat> |             | The relative rotations of the model's joints. |
| `jointTranslations`                  | Array.<Vec3> |             | The relative translations of the model's joints. |
| `jointOrientations`                  | Array.<Quat> |             | The absolute orientations of the model's joints, in world coordinates. *Read-only* |
| `jointPositions`                     | Array.<Vec3> |             | The absolute positions of the model's joints, in world coordinates. *Read-only* |
| `animationSettings.url`              | string                           | ""          | The URL of an FBX file containing an animation to play. |
| `animationSettings.fps`              | number                           | 0           | The frame rate (frames/sec) to play the animation at. |
| `animationSettings.firstFrame`       | number                           | 0           | The frame to start playing at.           |
| `animationSettings.lastFrame`        | number                           | 0           | The frame to finish playing at.          |
| `animationSettings.running`          | boolean                          | false       | Whether or not the animation is playing. |
| `animationSettings.loop`             | boolean                          | false       | Whether or not the animation should repeat in a loop. |
| `animationSettings.hold`             | boolean                          | false       | Whether or not when the animation finishes, the rotations and translations of the last frame played should be maintained. |
| `animationSettings.allowTranslation` | boolean                          | false       | Whether or not translations contained in the animation should be played. |


#### OverlayProperties

Different overlay types have different properties:

| OverlayType | Overlay Properties                       |
| ---------------------------------------- | ---------------------------------------- |
| `circle3d`                               | [Circle3DProperties](Overlays   #.Circle3DProperties) |
| `cube`                                   | [CubeProperties](Overlays   #.CubeProperties) |
| `grid`                                   | [GridProperties](Overlays   #.GridProperties) |
| `image`                                  | [ImageProperties](Overlays   #.ImageProperties) |
| `image3d`                                | [Image3DProperties](Overlays   #.Image3DProperties) |
| `line3d`                                 | [Line3DProperties](Overlays   #.Line3DProperties) |
| `model`                                  | [ModelProperties](Overlays   #.ModelProperties) |
| `rectangle`                              | [RectangleProperties](Overlays   #.RectangleProperties) |
| `rectangle3d`                            | [Rectangle3DProperties](Overlays   #.Rectangle3DProperties) |
| `shape`                                  | [ShapeProperties](Overlays   #.ShapeProperties) |
| `sphere`                                 | [SphereProperties](Overlays   #.SphereProperties) |
| `text`                                   | [TextProperties](Overlays   #.TextProperties) |
| `text3d`                                 | [Text3DProperties](Overlays   #.Text3DProperties) |
| `web3d`                                  | [Web3DProperties](Overlays   #.Web3DProperties) |

##### Type:

- object



#### OverlayType

An overlay may be one of the following types:

| Value         | 2D/3D | Description                              |
| ------------- | ----- | ---------------------------------------- |
| `circle3d`    | 3D    | A circle.                                |
| `cube`        | 3D    | A cube. Can also use a `shape` overlay to create a cube. |
| `grid`        | 3D    | A grid of lines in a plane.              |
| `image`       | 2D    | An image. Synonym: `billboard`.          |
| `image3d`     | 3D    | An image.                                |
| `line3d`      | 3D    | A line.                                  |
| `model`       | 3D    | A model.                                 |
| `rectangle`   | 2D    | A rectangle.                             |
| `rectangle3d` | 3D    | A rectangle.                             |
| `shape`       | 3D    | A geometric shape, such as a cube, sphere, or cylinder. |
| `sphere`      | 3D    | A sphere. Can also use a `shape` overlay to create a sphere. |
| `text`        | 2D    | Text.                                    |
| `text3d`      | 3D    | Text.                                    |
| `web3d`       | 3D    | Web content.                             |

2D overlays are rendered on the display surface in desktop mode and on the HUD surface in HMD mode. 3D overlays are rendered at a position and orientation in-world.

Each overlay type has different [OverlayProperties](Overlays   #.OverlayProperties).

##### Type:

- string



#### RayToOverlayIntersectionResult

##### Type:

- object

##### Properties:

| Name            | Type                     | Description                              |
| --------------- | ------------------------ | ---------------------------------------- |
| `intersects`    | boolean                  | `true` if the [PickRay](  #PickRay) intersected with a 3D overlay, otherwise `false`. |
| `overlayID`     | UUid        | The UUID of the overlay that was intersected. |
| `distance`      | number                   | The distance from the [PickRay](  #PickRay) origin to the intersection point. |
| `surfaceNormal` | Vec3 | The normal of the overlay surface at the intersection point. |
| `intersection`  | Vec3 | The position of the intersection point.  |


#### Rectangle3DProperties

These are the properties of a `rectangle3d` OverlayType.

##### Type:

- object

##### Properties:

| Name                    | Type                       | Default     | Description                              |
| ----------------------- | -------------------------- | ----------- | ---------------------------------------- |
| `type`                  | string                     | rectangle3d | Has the value `"rectangle3d"`. *Read-only.* |
| `color`                 | Color | 255,255,255 | The color of the overlay.                |
| `alpha`                 | number                     | 0.7         | The opacity of the overlay, `0.0` - `1.0`. |
| `pulseMax`              | number                     | 0           | The maximum value of the pulse multiplier. |
| `pulseMin`              | number                     | 0           | The minimum value of the pulse multiplier. |
| `pulsePeriod`           | number                     | 1           | The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from `pulseMin` to `pulseMax`, then `pulseMax` to `pulseMin` in one period. |
| `alphaPulse`            | number                     | 0           | If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `colorPulse`            | number                     | 0           | If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `visible`               | boolean                    | true        | If `true`, the overlay is rendered, otherwise it is not rendered. |
| `name`                  | string                     | ""          | A friendly name for the overlay.         |
| `position`              | Vec3   |             | The position of the overlay center. Synonyms: `p1`, `point`, and `start`. |
| `localPosition`         | Vec3   |             | The local position of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `position`. |
| `rotation`              | Quat   |             | The orientation of the overlay. Synonym: `orientation`. |
| `localRotation`         | Quat   |             | The orientation of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `rotation`. |
| `isSolid`               | boolean                    | false       | Synonyms: solid, `isFilled`, and `filled`. Antonyms: `isWire` and `wire`. |
| `isDashedLine`          | boolean                    | false       | If `true`, a dashed line is drawn on the overlay's edges. Synonym: `dashed`. |
| `ignoreRayIntersection` | boolean                    | false       | If `true`, [findRayIntersection](Overlays   #.findRayIntersection) ignores the overlay. |
| `drawInFront`           | boolean                    | false       | If `true`, the overlay is rendered in front of other overlays that don't have `drawInFront` set to `true`, and in front of entities. |
| `grabbable`             | boolean                    | false       | Signal to grabbing scripts whether or not this overlay can be grabbed. |
| `parentID`              | UUid          | null        | The avatar, entity, or overlay that the overlay is parented to. |
| `parentJointIndex`      | number                     | 65535       | Integer value specifying the skeleton joint that the overlay is attached to if `parentID` is an avatar skeleton. A value of `65535` means "no joint". |
| `dimensions`            | Vec2   | 1,1         | The dimensions of the overlay. Synonyms: `scale`, `size`. |


#### RectangleProperties

These are the properties of a `rectangle` OverlayType.

##### Type:

- object

##### Properties:

| Name          | Type                       | Default | Description                              |
| ------------- | -------------------------- | ------- | ---------------------------------------- |
| `bounds`      | Rect   |         | The position and size of the rectangle, in pixels. *Write-only.* |
| `x`           | number                     |         | Integer left, x-coordinate value = `bounds.x`. *Write-only.* |
| `y`           | number                     |         | Integer top, y-coordinate value = `bounds.y`. *Write-only.* |
| `width`       | number                     |         | Integer width of the rectangle = `bounds.width`. *Write-only.* |
| `height`      | number                     |         | Integer height of the rectangle = `bounds.height`. *Write-only.* |
| `color`       | Color | 0,0,0   | The color of the overlay. *Write-only.*  |
| `alpha`       | number                     | 1.0     | The opacity of the overlay, `0.0` - `1.0`. *Write-only.* |
| `borderWidth` | number                     | 1       | Integer width of the border, in pixels. The border is drawn within the rectangle's bounds. It is not drawn unless either `borderColor` or `borderAlpha` are specified. *Write-only.* |
| `radius`      | number                     | 0       | Integer corner radius, in pixels. *Write-only.* |
| `borderColor` | Color | 0,0,0   | The color of the border. *Write-only.*   |
| `borderAlpha` | number                     | 1.0     | The opacity of the border, `0.0` - `1.0`. *Write-only.* |
| `visible`     | boolean                    | true    | If `true`, the overlay is rendered, otherwise it is not rendered. *Write-only.* |


#### ShapeProperties

These are the properties of a `shape` OverlayType.

##### Type:

- object

##### Properties:

| Name                    | Type                       | Default     | Description                              |
| ----------------------- | -------------------------- | ----------- | ---------------------------------------- |
| `type`                  | string                     | shape       | Has the value `"shape"`. *Read-only.*    |
| `color`                 | Color | 255,255,255 | The color of the overlay.                |
| `alpha`                 | number                     | 0.7         | The opacity of the overlay, `0.0` - `1.0`. |
| `pulseMax`              | number                     | 0           | The maximum value of the pulse multiplier. |
| `pulseMin`              | number                     | 0           | The minimum value of the pulse multiplier. |
| `pulsePeriod`           | number                     | 1           | The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from `pulseMin` to `pulseMax`, then `pulseMax` to `pulseMin` in one period. |
| `alphaPulse`            | number                     | 0           | If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `colorPulse`            | number                     | 0           | If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `visible`               | boolean                    | true        | If `true`, the overlay is rendered, otherwise it is not rendered. |
| `name`                  | string                     | ""          | A friendly name for the overlay.         |
| `position`              | Vec3   |             | The position of the overlay center. Synonyms: `p1`, `point`, and `start`. |
| `localPosition`         | Vec3   |             | The local position of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `position`. |
| `rotation`              | Quat   |             | The orientation of the overlay. Synonym: `orientation`. |
| `localRotation`         | Quat   |             | The orientation of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `rotation`. |
| `isSolid`               | boolean                    | false       | Synonyms: solid, `isFilled`, and `filled`. Antonyms: `isWire` and `wire`. |
| `isDashedLine`          | boolean                    | false       | If `true`, a dashed line is drawn on the overlay's edges. Synonym: `dashed`. |
| `ignoreRayIntersection` | boolean                    | false       | If `true`, findRayIntersection ignores the overlay. |
| `drawInFront`           | boolean                    | false       | If `true`, the overlay is rendered in front of other overlays that don't have `drawInFront` set to `true`, and in front of entities. |
| `grabbable`             | boolean                    | false       | Signal to grabbing scripts whether or not this overlay can be grabbed. |
| `parentID`              | UUid          | null        | The avatar, entity, or overlay that the overlay is parented to. |
| `parentJointIndex`      | number                     | 65535       | Integer value specifying the skeleton joint that the overlay is attached to if `parentID` is an avatar skeleton. A value of `65535` means "no joint". |
| `dimensions`            | Vec3   |             | The dimensions of the overlay. Synonyms: `scale`, `size`. |
| `shape`                 | Shape | Hexagon     | The geometrical shape of the overlay.    |
| `borderSize`            | number                     |             | Not used.                                |


#### SphereProperties

These are the properties of a `sphere` OverlayType.

##### Type:

- object

##### Properties:

| Name                    | Type                       | Default     | Description                              |
| ----------------------- | -------------------------- | ----------- | ---------------------------------------- |
| `type`                  | string                     | sphere      | Has the value `"sphere"`. *Read-only.*   |
| `color`                 | Color | 255,255,255 | The color of the overlay.                |
| `alpha`                 | number                     | 0.7         | The opacity of the overlay, `0.0` - `1.0`. |
| `pulseMax`              | number                     | 0           | The maximum value of the pulse multiplier. |
| `pulseMin`              | number                     | 0           | The minimum value of the pulse multiplier. |
| `pulsePeriod`           | number                     | 1           | The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from `pulseMin` to `pulseMax`, then `pulseMax` to `pulseMin` in one period. |
| `alphaPulse`            | number                     | 0           | If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `colorPulse`            | number                     | 0           | If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `visible`               | boolean                    | true        | If `true`, the overlay is rendered, otherwise it is not rendered. |
| `name`                  | string                     | ""          | A friendly name for the overlay.         |
| `position`              | Vec3   |             | The position of the overlay center. Synonyms: `p1`, `point`, and `start`. |
| `localPosition`         | Vec3   |             | The local position of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `position`. |
| `rotation`              | Quat   |             | The orientation of the overlay. Synonym: `orientation`. |
| `localRotation`         | Quat   |             | The orientation of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `rotation`. |
| `isSolid`               | boolean                    | false       | Synonyms: solid, `isFilled`, and `filled`. Antonyms: `isWire` and `wire`. |
| `isDashedLine`          | boolean                    | false       | If `true`, a dashed line is drawn on the overlay's edges. Synonym: `dashed`. |
| `ignoreRayIntersection` | boolean                    | false       | If `true`, findRayIntersection ignores the overlay. |
| `drawInFront`           | boolean                    | false       | If `true`, the overlay is rendered in front of other overlays that don't have `drawInFront` set to `true`, and in front of entities. |
| `grabbable`             | boolean                    | false       | Signal to grabbing scripts whether or not this overlay can be grabbed. |
| `parentID`              | UUid          | null        | The avatar, entity, or overlay that the overlay is parented to. |
| `parentJointIndex`      | number                     | 65535       | Integer value specifying the skeleton joint that the overlay is attached to if `parentID` is an avatar skeleton. A value of `65535` means "no joint". |
| `dimensions`            | Vec3   |             | The dimensions of the overlay. Synonyms: `scale`, `size`. |


#### Text3DProperties

These are the properties of a `text3d` OverlayType.

##### Type:

- object

##### Properties:

| Name                    | Type                       | Default     | Description                              |
| ----------------------- | -------------------------- | ----------- | ---------------------------------------- |
| `type`                  | string                     | text3d      | Has the value `"text3d"`. *Read-only.*   |
| `color`                 | Color | 255,255,255 | The color of the overlay.                |
| `alpha`                 | number                     | 0.7         | The opacity of the overlay, `0.0` - `1.0`. |
| `pulseMax`              | number                     | 0           | The maximum value of the pulse multiplier. |
| `pulseMin`              | number                     | 0           | The minimum value of the pulse multiplier. |
| `pulsePeriod`           | number                     | 1           | The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from `pulseMin` to `pulseMax`, then `pulseMax` to `pulseMin` in one period. |
| `alphaPulse`            | number                     | 0           | If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `colorPulse`            | number                     | 0           | If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `visible`               | boolean                    | true        | If `true`, the overlay is rendered, otherwise it is not rendered. |
| `name`                  | string                     | ""          | A friendly name for the overlay.         |
| `position`              | Vec3   |             | The position of the overlay center. Synonyms: `p1`, `point`, and `start`. |
| `localPosition`         | Vec3   |             | The local position of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `position`. |
| `rotation`              | Quat   |             | The orientation of the overlay. Synonym: `orientation`. |
| `localRotation`         | Quat   |             | The orientation of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `rotation`. |
| `isSolid`               | boolean                    | false       | Synonyms: solid, `isFilled`, and `filled`. Antonyms: `isWire` and `wire`. |
| `isDashedLine`          | boolean                    | false       | If `true`, a dashed line is drawn on the overlay's edges. Synonym: `dashed`. |
| `ignoreRayIntersection` | boolean                    | false       | If `true`, findRayIntersection ignores the overlay. |
| `drawInFront`           | boolean                    | false       | If `true`, the overlay is rendered in front of other overlays that don't have `drawInFront` set to `true`, and in front of entities. |
| `grabbable`             | boolean                    | false       | Signal to grabbing scripts whether or not this overlay can be grabbed. |
| `parentID`              | UUid          | null        | The avatar, entity, or overlay that the overlay is parented to. |
| `parentJointIndex`      | number                     | 65535       | Integer value specifying the skeleton joint that the overlay is attached to if `parentID` is an avatar skeleton. A value of `65535` means "no joint". |
| `dimensions`            | Vec2   | 1,1         | The dimensions of the overlay. Synonyms: `scale`, `size`. |
| `isFacingAvatar`        | boolean                    |             | If `true`, the overlay is rotated to face the user's camera about an axis parallel to the user's avatar's "up" direction. |
| `text`                  | string                     | ""          | The text to display. Text does not automatically wrap; use `\n` for a line break. |
| `textAlpha`             | number                     | 1           | The text alpha value.                    |
| `backgroundColor`       | Color | 0,0,0       | The background color.                    |
| `backgroundAlpha`       | number                     | 0.7         | The background alpha value.              |
| `lineHeight`            | number                     | 1           | The height of a line of text in meters.  |
| `leftMargin`            | number                     | 0.1         | The left margin, in meters.              |
| `topMargin`             | number                     | 0.1         | The top margin, in meters.               |
| `rightMargin`           | number                     | 0.1         | The right margin, in meters.             |
| `bottomMargin`          | number                     | 0.1         | The bottom margin, in meters.            |


#### TextProperties

These are the properties of a `text` OverlayType.

##### Type:

- object

##### Properties:

| Name              | Type                       | Default     | Description                              |
| ----------------- | -------------------------- | ----------- | ---------------------------------------- |
| `bounds`          | Rect   |             | The position and size of the rectangle, in pixels. *Write-only.* |
| `x`               | number                     |             | Integer left, x-coordinate value = `bounds.x`. *Write-only.* |
| `y`               | number                     |             | Integer top, y-coordinate value = `bounds.y`. *Write-only.* |
| `width`           | number                     |             | Integer width of the rectangle = `bounds.width`. *Write-only.* |
| `height`          | number                     |             | Integer height of the rectangle = `bounds.height`. *Write-only.* |
| `margin`          | number                     | 0           | Sets the `leftMargin` and `topMargin` values, in pixels. *Write-only.* |
| `leftMargin`      | number                     | 0           | The left margin's size, in pixels. *Write-only.* |
| `topMargin`       | number                     | 0           | The top margin's size, in pixels. *Write-only.* |
| `text`            | string                     | ""          | The text to display. Text does not automatically wrap; use `\n` for a line break. Text is clipped to the `bounds`. *Write-only.* |
| `font.size`       | number                     | 18          | The size of the text, in pixels. *Write-only.* |
| `lineHeight`      | number                     | 18          | The height of a line of text, in pixels. *Write-only.* |
| `color`           | Color | 255,255,255 | The color of the text. Synonym: `textColor`. *Write-only.* |
| `alpha`           | number                     | 1.0         | The opacity of the overlay, `0.0` - `1.0`. *Write-only.* |
| `backgroundColor` | Color | 0,0,0       | The color of the background rectangle. *Write-only.* |
| `backgroundAlpha` | number                     | 0.7         | The opacity of the background rectangle. *Write-only.* |
| `visible`         | boolean                    | true        | If `true`, the overlay is rendered, otherwise it is not rendered. *Write-only.* |


#### Web3DProperties

These are the properties of a `web3d` OverlayType.

##### Type:

- object

##### Properties:

| Name                         | Type                       | Default     | Description                              |
| ---------------------------- | -------------------------- | ----------- | ---------------------------------------- |
| `type`                       | string                     | web3d       | Has the value `"web3d"`. *Read-only.*    |
| `color`                      | Color | 255,255,255 | The color of the overlay.                |
| `alpha`                      | number                     | 0.7         | The opacity of the overlay, `0.0` - `1.0`. |
| `pulseMax`                   | number                     | 0           | The maximum value of the pulse multiplier. |
| `pulseMin`                   | number                     | 0           | The minimum value of the pulse multiplier. |
| `pulsePeriod`                | number                     | 1           | The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from `pulseMin` to `pulseMax`, then `pulseMax` to `pulseMin` in one period. |
| `alphaPulse`                 | number                     | 0           | If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `colorPulse`                 | number                     | 0           | If non-zero, the color of the overlay is pulsed: the color value is multiplied by the current pulse multiplier value each frame. If > 0 the pulse multiplier is applied in phase with the pulse period; if < 0 the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise used.) |
| `visible`                    | boolean                    | true        | If `true`, the overlay is rendered, otherwise it is not rendered. |
| `name`                       | string                     | ""          | A friendly name for the overlay.         |
| `position`                   | Vec3   |             | The position of the overlay center. Synonyms: `p1`, `point`, and `start`. |
| `localPosition`              | Vec3   |             | The local position of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `position`. |
| `rotation`                   | Quat   |             | The orientation of the overlay. Synonym: `orientation`. |
| `localRotation`              | Quat   |             | The orientation of the overlay relative to its parent if the overlay has a `parentID` set, otherwise the same value as `rotation`. |
| `isSolid`                    | boolean                    | false       | Synonyms: solid, `isFilled`, and `filled`. Antonyms: `isWire` and `wire`. |
| `isDashedLine`               | boolean                    | false       | If `true`, a dashed line is drawn on the overlay's edges. Synonym: `dashed`. |
| `ignoreRayIntersection`      | boolean                    | false       | If `true`, findRayIntersection ignores the overlay. |
| `drawInFront`                | boolean                    | false       | If `true`, the overlay is rendered in front of other overlays that don't have `drawInFront` set to `true`, and in front of entities. |
| `grabbable`                  | boolean                    | false       | Signal to grabbing scripts whether or not this overlay can be grabbed. |
| `parentID`                   | UUid          | null        | The avatar, entity, or overlay that the overlay is parented to. |
| `parentJointIndex`           | number                     | 65535       | Integer value specifying the skeleton joint that the overlay is attached to if `parentID` is an avatar skeleton. A value of `65535` means "no joint". |
| `isFacingAvatar`             | boolean                    |             | If `true`, the overlay is rotated to face the user's camera about an axis parallel to the user's avatar's "up" direction. |
| `url`                        | string                     |             | The URL of the Web page to display.      |
| `scriptURL`                  | string                     | ""          | The URL of a JavaScript file to inject into the Web page. |
| `dpi`                        | number                     | 30          | The dots per inch to display the Web page at, on the overlay. |
| `dimensions`                 | Vec2   | 1,1         | The size of the overlay to display the Web page on, in meters. Synonyms: `scale`, `size`. |
| `maxFPS`                     | number                     | 10          | The maximum update rate for the Web overlay content, in frames/second. |
| `showKeyboardFocusHighlight` | boolean                    | true        | If `true`, the Web overlay is highlighted when it has keyboard focus. |
| `inputMode`                  | string                     | Touch       | The user input mode to use - either `"Touch"` or `"Mouse"`. |


