---
title: 'LOD Manager'
taxonomy:
    category:
        - docs
---



| Properties            | Type   | Description |
| --------------------- | ------ | ----------- |
| LODManager.objectName | string |             |

| Methods                                  |
| ---------------------------------------- |
| LODManager.getAutomaticLODAdjust()       |
| LODManager.getBoundaryLevelAdjust()      |
| LODManager.getDesktopLODDecreaseFPS()    |
| LODManager.getDesktopLODIncreaseFPS()    |
| LODManager.getHMDLODDecreaseFPS()        |
| LODManager.getHMDLODIncreaseFPS()        |
| LODManager.getLODDecreaseFPS()           |
| LODManager.getLODFeedbackText()          |
| LODManager.getLODIncreaseFPS()           |
| LODManager.getOctreeSizeScale()          |
| LODManager.setAutomaticLODAdjust(bool)   |
| LODManager.setBoundaryLevelAdjust(int)   |
| LODManager.setDesktopLODDecreaseFPS(float) |
| LODManager.setHMDLODDecreaseFPS(float)   |
| LODManager.setOctreeSizeScale(float)     |

| Events                                |
| ------------------------------------- |
| LODManager.LODDecreased()             |
| LODManager.LODIncreased()             |
| LODManager.destroyed()                |
| LODManager.destroyed(QObject*)        |
| LODManager.objectNameChanged(QString) |