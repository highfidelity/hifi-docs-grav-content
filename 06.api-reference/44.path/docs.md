---
title: 'Path'
taxonomy:
    category: docs
---

The Paths API provides absolute paths to the scripts and resources directories.

## Properties
|Name|Type|Description|
|----|----|-----------|
|`defaultScripts`|string|The path to the scripts directory. *Read-only.*|
|`resources`|string|The path to the resources directory. *Read-only.*|

>>>>> Deprecated: The Paths API has been deprecated. Use `Script.resolvePath` and `Script.resourcesPath` instead.
