---
title: 'Overlays'
taxonomy:
    category:
        - docs
---

| Properties                    | Type   | Description |
| ----------------------------- | ------ | ----------- |
| Overlays.keyboardFocusOverlay | string |             |
| Overlays.objectName           | string |             |

| Methods                                  |
| ---------------------------------------- |
| Overlays.addOverlay(QString,QVariant)    |
| Overlays.addPanel(OverlayPanel::Pointer) |
| Overlays.addPanel(QVariant)              |
| Overlays.cloneOverlay(OverlayID)         |
| Overlays.deleteOverlay(OverlayID)        |
| Overlays.deletePanel(OverlayID)          |
| Overlays.editOverlay(OverlayID,QVariant) |
| Overlays.editOverlays(QVariant)          |
| Overlays.editPanel(OverlayID,QVariant)   |
| Overlays.findOverlays(glm::vec3,float)   |
| Overlays.findRayIntersection(PickRay)    |
| Overlays.findRayIntersection(PickRay,bool) |
| Overlays.findRayIntersection(PickRay,bool,QScriptValue) |
| Overlays.findRayIntersection(PickRay,bool,QScriptValue,QScriptValue) |
| Overlays.findRayIntersection(PickRay,bool,QScriptValue,QScriptValue,bool) |
| Overlays.findRayIntersection(PickRay,bool,QScriptValue,QScriptValue,bool,bool) |
| Overlays.getKeyboardFocusOverlay()       |
| Overlays.getOverlayAtPoint(glm::vec2)    |
| Overlays.getOverlayObject(OverlayID)     |
| Overlays.getOverlayType(OverlayID)       |
| Overlays.getPanelProperty(OverlayID,QString) |
| Overlays.getParentPanel(OverlayID)       |
| Overlays.getProperty(OverlayID,QString)  |
| Overlays.height()                        |
| Overlays.isAddedOverlay(OverlayID)       |
| Overlays.isAddedPanel(OverlayID)         |
| Overlays.isLoaded(OverlayID)             |
| Overlays.setKeyboardFocusOverlay(OverlayID) |
| Overlays.setParentPanel(OverlayID,OverlayID) |
| Overlays.textSize(OverlayID,QString)     |
| Overlays.width()                         |

| Events                                   |
| ---------------------------------------- |
| Overlays.destroyed()                     |
| Overlays.destroyed(QObject*)             |
| Overlays.hoverEnterOverlay(OverlayID,PointerEvent) |
| Overlays.hoverLeaveOverlay(OverlayID,PointerEvent) |
| Overlays.hoverOverOverlay(OverlayID,PointerEvent) |
| Overlays.mouseDoublePressOffOverlay()    |
| Overlays.mouseDoublePressOnOverlay(OverlayID,PointerEvent) |
| Overlays.mouseMoveOnOverlay(OverlayID,PointerEvent) |
| Overlays.mousePressOffOverlay()          |
| Overlays.mousePressOnOverlay(OverlayID,PointerEvent) |
| Overlays.mouseReleaseOnOverlay(OverlayID,PointerEvent) |
| Overlays.objectNameChanged(QString)      |
| Overlays.overlayDeleted(OverlayID)       |
| Overlays.panelDeleted(OverlayID)         |