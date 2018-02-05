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

| **Properties** <a id="properties"></a> | Type   | Description |
| ----------------------------- | ------ | ----------- |
| [`Overlays.keyboardFocusOverlay`](#p1) | string | Get or set the web3d overlay that has keyboard focus. If no overlay is set, get returns null; set to null to clear keyboard focus.            |


| Methods                                  |
| ---------------------------------------- |
| [`Overlays.addOverlay(QString,QVariant`)](#m1)    |
| [`Overlays.cloneOverlay(OverlayID)`](#m2)         |
| [`Overlays.deleteOverlay(OverlayID)`](#m3)        |
| [`Overlays.editOverlay(OverlayID,QVariant)`](#m4) |
| [`Overlays.editOverlays(QVariant)`](#m5)          |
| [`Overlays.editPanel(OverlayID,QVariant)`](#m6)   |
| [`Overlays.findOverlays(glm::vec3,float)`](#m7)   |
| [`Overlays.findRayIntersection(PickRay,bool,QScriptValue,QScriptValue,bool,bool)`](#m8) |
| [`Overlays.getKeyboardFocusOverlay()`](#m9)       |
| [`Overlays.getOverlayAtPoint(glm::vec2)`](#m10)    |
| [`Overlays.getOverlayObject(OverlayID)`](#m11)     |
| [`Overlays.getOverlaysProperties(OverlayID,QString)`](#m12) |
| [`Overlays.getOverlayType(OverlayID)`](#m13)       |
| [`Overlays.getProperty(OverlayID,QString)`](#m14) |
| [`Overlays.getProperties(OverlayID,QString)`](#m15) |
| [`Overlays.height()`](#m16)|       
| [`Overlays.isAddedOverlay(OverlayID)`](#m17)       |
| [`Overlays.isLoaded(OverlayID)`](#m18)             |
| [`Overlays.sendHoverEnterOverlay(id, event)`](#m19)             |
| [`Overlays.sendHoverLeaveOverlay(overlayID, event)`](#m20)             |
| [`Overlays.sendHoverOverOverlay(overlayID, event)`](#m21)             |
| [`Overlays.sendMouseMoveOnOverlay(overlayID, event)`](#m22)             |
| [`Overlays.sendMousePressOnOverlay(overlayID, event)`](#m23)             |
| [`Overlays.sendMouseReleaseOnOverlay(overlayID, event)`](#m24)             |
| [`Overlays.setKeyboardFocusOverlay(OverlayID)`](#m25) |
| [`Overlays.textSize(OverlayID,QString)`](#m26)     |
| [`Overlays.width()`](#m27)                        |

| Events                                   |
| ---------------------------------------- |
| [`Overlays.hoverEnterOverlay(OverlayID,PointerEvent)`](#e1) |
| [`Overlays.hoverLeaveOverlay(OverlayID,PointerEvent)`](#e2) |
| [`Overlays.hoverOverOverlay(OverlayID,PointerEvent)`](#e3) |
| [`Overlays.mouseDoublePressOffOverlay()`](#e4)    |
| [`Overlays.mouseDoublePressOnOverlay(OverlayID,PointerEvent)`](#e5) |
| [`Overlays.mouseMoveOnOverlay(OverlayID,PointerEvent)`](#e6) |
| [`Overlays.mousePressOffOverlay()`](#e7)          |
| [`Overlays.mousePressOnOverlay(OverlayID,PointerEvent)`](#e8) |
| [`Overlays.mouseReleaseOnOverlay(OverlayID,PointerEvent)`](#e9) |
| [`Overlays.overlayDeleted(OverlayID)`](#e10)       |
