---
title: 'Avatar Manager'
taxonomy:
    category:
        - docs
---

| Properties               | Type   | Description |
| ------------------------ | ------ | ----------- |
| AvatarManager.objectName | string |             |


| Methods                                  |
| ---------------------------------------- |
| AvatarManager.findRayIntersection(PickRay) |
| AvatarManager.findRayIntersection(PickRay,QScriptValue) |
| AvatarManager.findRayIntersection(PickRay,QScriptValue,QScriptValue) |
| AvatarManager.getAvatar(QUuid)           |
| AvatarManager.getAvatarDataRate(QUuid)   |
| AvatarManager.getAvatarDataRate(QUuid,QString) |
| AvatarManager.getAvatarIdentifiers()     |
| AvatarManager.getAvatarSimulationRate(QUuid) |
| AvatarManager.getAvatarSimulationRate(QUuid,QString) |
| AvatarManager.getAvatarSortCoefficient(QString) |
| AvatarManager.getAvatarUpdateRate(QUuid) |
| AvatarManager.getAvatarUpdateRate(QUuid,QString) |
| AvatarManager.isAvatarInRange(glm::vec3,float) |
| AvatarManager.processAvatarDataPacket(QSharedPointer<ReceivedMessage>,SharedNodePointer) |
| AvatarManager.processAvatarIdentityPacket(QSharedPointer<ReceivedMessage>,SharedNodePointer) |
| AvatarManager.processKillAvatar(QSharedPointer<ReceivedMessage>,SharedNodePointer) |
| AvatarManager.setAvatarSortCoefficient(QString,QScriptValue) |
| AvatarManager.setShouldShowReceiveStats(bool) |
| AvatarManager.updateAvatarRenderStatus(bool) |


| Events                                   |
| ---------------------------------------- |
| AvatarManager.avatarAddedEvent(QUuid)    |
| AvatarManager.avatarRemovedEvent(QUuid)  |
| AvatarManager.avatarSessionChangedEvent(QUuid,QUuid) |
| AvatarManager.objectNameChanged(QString) |
| AvatarManager.sessionUUIDChanged(QUuid,QUuid) |