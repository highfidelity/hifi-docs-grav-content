---
title: 'Animation Cache'
taxonomy:
    category:
        - docs
---

AnimationCache extends ResourceCache. 

| Properties                | Type   | Description |
| ------------------------- | ------ | ----------- |
| `AnimationCache.numCached`  | number | The total number of cached resources            |
| `AnimationCache.numTotal`   | number | The total number of resources            |
| `AnimationCache.sizeCached` | number | The size in bytes of cached resources            |
| `AnimationCache.sizeTotal`  | number | The size in bytes of all cached resources            |


| Methods                                  |
| ---------------------------------------- |
| `AnimationCache.getAnimation(String)`     |
| `AnimationCache.getResource(String,String,void*)` |
| `AnimationCache.getResourceList()`         |
| `AnimationCache.prefetch(String,void*)`      |
| `AnimationCache.updateTotalSize(number)` |




