---
title: 'Model'
taxonomy:
    category:
        - docs
---

| Properties       | Type   | Description |
| ---------------- | ------ | ----------- |
| Model.objectName | string |             |

| Methods                                  |
| ---------------------------------------- |
| Model.appendMeshes(MeshProxyList)        |
| Model.meshToOBJ(MeshProxyList)           |
| Model.newMesh(QVector<glm::vec3>,QVector<glm::vec3>,QVector<MeshFace>) |
| Model.transformMesh(glm::mat4,MeshProxy*) |

| Events                           |
| -------------------------------- |
| Model.destroyed()                |
| Model.destroyed(QObject*)        |
| Model.objectNameChanged(QString) |