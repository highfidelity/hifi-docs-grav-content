---
title: 'Avatar List'
taxonomy:
    category:
        - docs
---


| Methods                                  |
| ---------------------------------------- |
|`AvatarList.findRayIntersection(PickRay)`|
|`AvatarList.findRayIntersection(PickRay,QScriptValue)`|
|`AvatarList.findRayIntersection(PickRay,QScriptValue,QScriptValue)`|
|`AvatarList.getAvatar(QUuid)`|
|`AvatarList.getAvatarDataRate(QUuid)`|
|`AvatarList.getAvatarDataRate(QUuid,String)`|
|`AvatarList.getAvatarIdentifiers()`|
|`AvatarList.getAvatarSimulationRate(QUuid)`|
|`AvatarList.getAvatarSimulationRate(QUuid,String)`|
|`AvatarList.getAvatarSortCoefficient(String)`|
|`AvatarList.getAvatarUpdateRate(QUuid)`|
|`AvatarList.getAvatarUpdateRate(QUuid,String)`|
|`AvatarList.isAvatarInRange(glm::vec3,float)`|
|`AvatarList.processAvatarDataPacket(QSharedPointer<ReceivedMessage>,SharedNodePointer)`|
|`AvatarList.processAvatarIdentityPacket(QSharedPointer<ReceivedMessage>,SharedNodePointer)`|
|`AvatarList.processExitingSpaceBubble(QSharedPointer<ReceivedMessage>,SharedNodePointer)`|
|`AvatarList.processKillAvatar(QSharedPointer<ReceivedMessage>,SharedNodePointer)`|
|`AvatarList.setAvatarSortCoefficient(String,QScriptValue)`|
|`AvatarList.setShouldShowReceiveStats(bool)`|
|`AvatarList.updateAvatarRenderStatus(bool)`|



| Events                                   |
| ---------------------------------------- |
| `AvatarList.avatarAddedEvent(QUuid)`       |
| `AvatarList.avatarRemovedEvent(QUuid)`     |
| `AvatarList.avatarSessionChangedEvent(QUuid,QUuid)` |
| `AvatarList.sessionUUIDChanged(QUuid,QUuid)` |