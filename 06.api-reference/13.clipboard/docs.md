---
title: 'Clipboard'
taxonomy:
    category:
        - docs
---

The Clipboard Scripting Interface powers the import and export of entities (in JSON files) in the Create menu. You can use the Clipboard API to import and export entity files (which include entities and/or entity behavior).


| Methods                                  |
| ---------------------------------------- |
| [Clipboard.exportEntities(filename, entityIDs)](#m1) |
| [Clipboard.exportEntities(filename, x, y, z, scale)](#m2) |
| [Clipboard.getClipboardContentsLargestDimension()](#m3) |
| [Clipboard.getContentsDimensions()](#m4)      |
| [Clipboard.importEntities(filename)](#m5)        |
| [Clipboard.pasteEntities(position)](#m6)       |

###exportEntities(filename, entityIDs) <a id="m1"></a>
Exports entities to the JSON filename specified. 
**Parameters**
|Name|Type|Description|
|----|----|-----------|
|filename|string|The path and name of the file where the entities are to be exported. Must have the extention .json.|
|entitiyIDs|Array.<Uuid>|Entity ids in an array.|
**Returns**
|Returns|Type|Description|
|-------|----|-----------|
|true|boolean|The export was successful.|
|false|boolean|The export was not successsful.|

###exportEntities(filename, x, y, z, scale) <a id="m2"></a>
Exports entities with centers within a cube to a JSOn file. 
**Parameters**
|Name|Type|Description|
|----|----|-----------|
|filename|string|The path and name of the file where the entities are to be exported. Must have the extention .json.|
|x|number|x coordinate of the cube center.|
|y|number|y coordinate of the cube center.|
|z|number|z coordinate of the cube center.|
|scale|number|Half dimension of the cube.|
**Returns**
|Returns|Type|Description|
|-------|----|-----------|
|true|boolean|The export was successful.|
|false|boolean|The export was not successsful.|

###getClipboardContentsLargestDimension() <a id="m3"></a>
Computes the largest dimension of the extents of the contents held in the clipboard. 
**Returns**
|Type|Description|
|----|-----------|
|number|The largest dimension computed|

###getContentsDimensions() <a id="m4"></a>
Computes the extents of the contents held in the clipboard. 
**Returns**
|Type|Description|
|----|-----------|
|Vec3|The extents computed|


###importEntities(filename) <a id="m5"></a>
Import entities from a JSON file containing entity data into the clipboard. You can generate a JSON file using Clipboard.exportEntities.
**Parameters**
|Name|Type|Description|
|----|----|-----------|
|filename|string|The path and name of the file from where the entities are imported.|
**Returns**
|Returns|Type|Description|
|-------|----|-----------|
|true|boolean|The import was successful.|
|false|boolean|The import was not successsful.|


###pasteEntities(position) <a id="m6"></a>
Pastes the contens of the clipboard into High Fidelity.
**Parameters**
|Name|Type|Description|
|----|----|-----------|
|position|Vec3|The location/position where you want to place the entities|
**Returns**
|Returns|Type|Description|
|-------|----|-----------|
|array|Array.<uuid>|Array of entity IDs for the new entities that were created as a result of the paste operation.|
