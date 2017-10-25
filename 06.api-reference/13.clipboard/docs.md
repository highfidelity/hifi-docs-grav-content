---
title: 'Clipboard'
taxonomy:
    category:
        - docs
---


| Properties           | Type   | Description |
| -------------------- | ------ | ----------- |
| Clipboard.objectName | string |             |

| Events                               |
| ------------------------------------ |
| Clipboard.objectNameChanged(QString) |
| Clipboard.readyToImport()            |

| Methods                                  |
| ---------------------------------------- |
| Clipboard.exportEntities(QString,QVector<EntityItemID>) |
| Clipboard.exportEntities(QString,float,float,float,float) |
| Clipboard.getClipboardContentsLargestDimension() |
| Clipboard.getContentsDimensions()        |
| Clipboard.importEntities(QString)        |
| Clipboard.pasteEntities(glm::vec3)       |
