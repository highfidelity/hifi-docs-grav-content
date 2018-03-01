---
title: 'Assets'
taxonomy:
    category:
        - docs
---





| Methods                                  |
| ---------------------------------------- |
| [`Assets.downloadData(String,QScriptValue)`](#m1) |
| [`Assets.getMapping(String,QScriptValue)`](#m2) |
| [`Assets.setMapping(String,String,QScriptValue)`](#m2) |
| [`Assets.uploadData(String,QScriptValue)`](#m4) |




### Methods

#### `(static) downloadData(url, callback)`<a id ="m1"></a>

Download data from the connected domain's asset server.

##### Parameters:

| Name       | Type                       | Description                              |
| ---------- | -------------------------- | ---------------------------------------- |
| `url`      | string                     | URL of asset to download, must be ATP scheme URL. |
| `callback` | downloadDataCallback(data) |                                          |


#### `(static) getMapping(path, callback)`<a id="m2"></a>

Look up a path to hash mapping within the connected domain's asset server

##### Parameters:

| Name       | Type                                 | Description |
| ---------- | ------------------------------------ | ----------- |
| `path`     | string                               |             |
| `callback` | getMappingCallback(assetID, success) |             |


#### `(static) setMapping(path, hash, callback)`<a id="m3"></a>

Sets up a path to hash mapping within the connected domain's asset server

##### Parameters:

| Name       | Type                      | Description |
| ---------- | ------------------------- | ----------- |
| `path`     | string                    |             |
| `hash`     | string                    |             |
| `callback` | setMappingCallback(error) |             |


#### `(static) uploadData(data, callback)`<a id="m4"></a>

Upload content to the connected domain's asset server.

##### Parameters:

| Name       | Type                                     | Description                    |
| ---------- | ---------------------------------------- | ------------------------------ |
| `data`     | string                                   | content to upload              |
| `callback` | [Assets~uploadDataCallback](Assets.html#~uploadDataCallback) | called when upload is complete |


### Type Definitions

#### downloadDataCallback(data)

Called when downloadData is complete

##### Parameters:

| Name   | Type   | Description                 |
| ------ | ------ | --------------------------- |
| `data` | string | content that was downloaded |


#### getMappingCallback(assetID, success)

Called when getMapping is complete.

##### Parameters:

| Name      | Type    | Description                              |
| --------- | ------- | ---------------------------------------- |
| `assetID` | string  | hash value if found, else an empty string |
| `success` | boolean | false for errors other than "not found", else true |


#### setMappingCallback(error)

Called when setMapping is complete

##### Parameters:

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| `error` | string |             |


#### uploadDataCallback(url, hash)

Called when uploadData is complete

##### Parameters:

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| `url`  | string |             |
| `hash` | string |             |


