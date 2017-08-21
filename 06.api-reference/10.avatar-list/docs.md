---
title: 'Avatar List'
taxonomy:
    category:
        - docs
---

| Properties            | Type   | Description |
| --------------------- | ------ | ----------- |
| AvatarList.objectName | string |             |



| Methods                                  |
| ---------------------------------------- |
| AvatarList.findRayIntersection(PickRay)  |
| AvatarList.findRayIntersection(PickRay,QScriptValue) |
| AvatarList.findRayIntersection(PickRay,QScriptValue,QScriptValue) |
| AvatarList.getAvatar(QUuid)              |
| AvatarList.getAvatarDataRate(QUuid)      |
| AvatarList.getAvatarDataRate(QUuid,QString) |
| AvatarList.getAvatarIdentifiers()        |
| AvatarList.getAvatarSimulationRate(QUuid) |
| AvatarList.getAvatarSimulationRate(QUuid,QString) |
| AvatarList.getAvatarSortCoefficient(QString) |
| AvatarList.getAvatarUpdateRate(QUuid)    |
| AvatarList.getAvatarUpdateRate(QUuid,QString) |
| AvatarList.isAvatarInRange(glm::vec3,float) |
| AvatarList.processAvatarDataPacket(QSharedPointer<ReceivedMessage>,SharedNodePointer) |
| AvatarList.processAvatarIdentityPacket(QSharedPointer<ReceivedMessage>,SharedNodePointer) |
| AvatarList.processExitingSpaceBubble(QSharedPointer<ReceivedMessage>,SharedNodePointer) |
| AvatarList.processKillAvatar(QSharedPointer<ReceivedMessage>,SharedNodePointer) |
| AvatarList.setAvatarSortCoefficient(QString,QScriptValue) |
| AvatarList.setShouldShowReceiveStats(bool) |
| AvatarList.updateAvatarRenderStatus(bool) |



| Events                                   |
| ---------------------------------------- |
| AvatarList.avatarAddedEvent(QUuid)       |
| AvatarList.avatarRemovedEvent(QUuid)     |
| AvatarList.avatarSessionChangedEvent(QUuid,QUuid) |
| AvatarList.objectNameChanged(QString)    |
| AvatarList.sessionUUIDChanged(QUuid,QUuid) |