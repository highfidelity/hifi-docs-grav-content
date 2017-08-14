---
title: 'Model Cache'
taxonomy:
    category:
        - docs
---

| Properties            | Type   | Description |
| --------------------- | ------ | ----------- |
| ModelCache.objectName | string |             |
| ModelCache.numCached  | number |             |
| ModelCache.numTotal   | number |             |
| ModelCache.sizeTotal  | number |             |
| ModelCache.sizeCached | number |             |

| Methods                                 |
| --------------------------------------- |
| ModelCache.getResource(QUrl)            |
| ModelCache.getResource(QUrl,QUrl)       |
| ModelCache.getResource(QUrl,QUrl,void*) |
| ModelCache.getResourceList()            |
| ModelCache.prefetch(QUrl)               |
| ModelCache.prefetch(QUrl,void*)         |
| ModelCache.updateTotalSize(qlonglong)   |

| Events                                |
| ------------------------------------- |
| ModelCache.destroyed()                |
| ModelCache.destroyed(QObject*)        |
| ModelCache.dirty()                    |
| ModelCache.objectNameChanged(QString) |