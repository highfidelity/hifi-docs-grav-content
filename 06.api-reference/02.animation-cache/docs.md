---
title: 'Animation Cache'
taxonomy:
    category:
        - docs
---



| Properties                | Type   | Description |
| ------------------------- | ------ | ----------- |
| AnimationCache.objectName | String |             |
| AnimationCache.numCached  | Number |             |
| AnimationCache.numTotal   | Number |             |
| AnimationCache.sizeCached | Number |             |
| AnimationCache.sizeTotal  | Number |             |


| Methods                                  |
| ---------------------------------------- |
| AnimationCache.dirty()                   |
| AnimationCache.getAnimation(QString)     |
| AnimationCache.getAnimation(QUrl)        |
| AnimationCache.getResource(QUrl)         |
| AnimationCache.getResource(QUrl,QUrl)    |
| AnimationCache.getResource(QUrl,QUrl,void*) |
| AnimationCache.getResourceList()         |
| AnimationCache.prefetch(QUrl)            |
| AnimationCache.prefetch(QUrl,void*)      |
| AnimationCache.updateTotalSize(qlonglong) |


| Events                                   |
| ---------------------------------------- |
| AnimationCache.objectNameChanged(QString) |




