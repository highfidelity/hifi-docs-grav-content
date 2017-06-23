---
title: 'Animation Cache'
taxonomy:
    category:
        - docs
---



| Properties                | Type | Description |
| ------------------------- | ---- | ----------- |
| AnimationCache.numCached  |      |             |
| AnimationCache.numTotal   |      |             |
| AnimationCache.sizeCached |      |             |
| AnimationCache.sizeTotal  |      |             |


| Methods                                  |
| ---------------------------------------- |
| AnimationCache.getAnimation(QString)     |
| AnimationCache.getAnimation(QUrl)        |
| AnimationCache.getResource(QUrl)         |
| AnimationCache.getResource(QUrl,QUrl)    |
| AnimationCache.getResource(QUrl,QUrl,void*) |
| AnimationCache.getResourceList()         |
| AnimationCache.prefetch(QUrl)            |
| AnimationCache.prefetch(QUrl,void*)      |
| AnimationCache.updateTotalSize(qlonglong) |


