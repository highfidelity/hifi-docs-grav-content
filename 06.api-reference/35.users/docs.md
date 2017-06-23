---
title: 'Users'
taxonomy:
    category:
        - docs
---

| Properties       | Type    | Description |
| ---------------- | ------- | ----------- |
| Users.canKick    | boolean |             |
| Users.objectName | string  |             |


| Methods                                  |
| ---------------------------------------- |
| Users.canKickChanged(bool)               |
| Users.disableIgnoreRadius()              |
| Users.enableIgnoreRadius()               |
| Users.getAvatarGain(QUuid)               |
| Users.getCanKick()                       |
| Users.getIgnoreRadiusEnabled()           |
| Users.getIgnoreStatus(QUuid)             |
| Users.getPersonalMuteStatus(QUuid)       |
| Users.ignore(QUuid)                      |
| Users.ignore(QUuid,bool)                 |
| Users.ignoreRadiusEnabledChanged(bool)   |
| Users.kick(QUuid)                        |
| Users.mute(QUuid)                        |
| Users.personalMute(QUuid)                |
| Users.personalMute(QUuid,bool)           |
| Users.requestUsernameFromID(QUuid)       |
| Users.requestsDomainListData             |
| Users.setAvatarGain(QUuid,float)         |
| Users.toggleIgnoreRadius()               |
| Users.usernameFromIDReply(QString,QString,QString,bool) |

| Events                           |
| -------------------------------- |
| Users.avatarDisconnected(QUuid)  |
| Users.destroyed()                |
| Users.destroyed(QObject*)        |
| Users.enteredIgnoreRadius()      |
| Users.objectNameChanged(QString) |

### Properties

property **canKick** : bool

property **requestsDomainListData** : bool

### Functions

function **Users.ignore** (nodeID: QUuid, ignoreEnabled: bool (default true)): void

function **Users.getIgnoreStatus** (nodeID: QUuid): bool

function **Users.personalMute** (nodeID: QUuid, muteEnabled: bool (default true)): void

function **Users.getPersonalMuteStatus** (nodeID: QUuid): bool

function **Users.kick** (nodeID: QUuid): void

function **Users.mute** (nodeID: QUuid): void

function **Users.requestUsernameFromID** (nodeID: QUuid): void

function **Users.getCanKick** (void): bool

function **Users.toggleIgnoreRadius** (void): void

function **Users.enableIgnoreRadius** (void): void

function **Users.disableIgnoreRadius** (void): void

function **Users.getIgnoreRadiusEnabled** (void): bool

### Signals

signal **Users.canKickChanged** (canKick: bool): void

signal **Users.ignoreRadiusEnabledChanged** (isEnabled: bool): void

signal **Users.enteredIgnoreRadius** (void): void

signal **Users.usernameFromIDReply** (nodeID: string, username: string, machineFingerprint: string): void

### Property Descriptions

#### property canKick: bool

Read-only property. "True" if the DomainServer will allow this Node/Avatar to kick (ban) other avatars.

#### property requestsDomainListData: bool

Read/write property. Set to "true" if the avatar requests extra data from the mixers (such as positional data of an avatar you've ignored).

### Function Descriptions

#### function **Users.ignore** (nodeID: QUuid, ignoreEnabled: bool (default true)): void

Personally ignore another user, making them disappear for you and you disappear for them. Pass the node or session ID of the user you want to ignore and "true" for ignore; "false" for unignore.

#### function **Users.getIgnoreStatus** (nodeID: QUuid): bool

Get whether or not you have ignored the node with the passed UUID.

#### function **Users.personalMute** (nodeID: QUuid, muteEnabled: bool (default true)): void

Mute another user for you and you only. They won't be able to hear you, and you won't be able to hear them. Pass the node or session ID of the user you want to personally mute and "true" for mute; false" for unmute.

#### function **Users.getPersonalMuteStatus** (nodeID: QUuid): bool

Get whether or not you have personally muted the node with the passed UUID.

#### function **Users.kick** (nodeID: QUuid): void

Kick/ban another user. Removes them from the server and prevents them from returning. Bans by either username (if available) or machine fingerprint otherwise. This will only do anything if you're an admin of the domain you're in. Pass the UUID of the user you want to kick/ban.

#### function **Users.mute** (nodeID: QUuid): void

Mutes another user's microphone. Not permanent; the silenced user can unmute themselves with the UNMUTE button in their HUD. This will only do anything if you're an admin of the domain you're in. Pass the UUID of the user you want to silence.

#### function **Users.requestUsernameFromID** (nodeID: QUuid): void

Get the username and machine fingerprint associated with the passed UUID. This will only do anything if you're an admin of the domain you're in.

#### function **Users.getCanKick** (void): bool

"True" if the DomainServer will allow this Node/Avatar to kick (ban) other avatars.

#### function **Users.toggleIgnoreRadius** (void): void

Toggle the state of the space bubble feature.

#### function **Users.enableIgnoreRadius** (void): void

Enables the space bubble feature.

#### function **Users.enableIgnoreRadius** (void): void

Disables the space bubble feature.

### function **Users.getIgnoreRadiusEnabled** (void): bool

Returns `true` if the space bubble is enabled.

### Signal Descriptions

#### signal **Users.canKickChanged** (canKick: bool): void

Emitted when the user's "can kick" property is changed.

#### signal **Users.ignoreRadiusEnabledChanged** (isEnabled: bool): void

Emitted when the users's space bubble is enabled or disabled.

#### signal **Users.enteredIgnoreRadius** (void): void

Emitted when the users's space bubble has been penetrated.

#### signal **Users.usernameFromIDReply** (nodeID: string, username: string, machineFingerprint: string): void

Emitted when the domain server has replied with the username and machine fingerprint of the given UUID.





```

```

