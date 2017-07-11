---
title: 'Users'
taxonomy:
    category:
        - docs
---

| Properties                   | Type    | Description                              |
| ---------------------------- | ------- | ---------------------------------------- |
| Users.canKick                | boolean | Read-only property. "True" if the DomainServer will allow this Node/Avatar to kick (ban) other avatars. |
| Users.objectName             | string  |                                          |
| Users.requestsDomainListData | boolean | Read/write property. Set to "true" if the avatar requests extra data from the mixers (such as positional data of an avatar you've ignored). |


| Methods                                  |
| ---------------------------------------- |
| Users.canKickChanged(bool)               |
| [Users.disableIgnoreRadius()](#m1)       |
| [Users.enableIgnoreRadius()](#m2)        |
| Users.getAvatarGain(QUuid)               |
| [Users.getCanKick()](#m3)                |
| [Users.getIgnoreRadiusEnabled()](#m4)    |
| [Users.getIgnoreStatus(QUuid)](#m5)      |
| [Users.getPersonalMuteStatus(QUuid)](#m6) |
| [Users.ignore(QUuid)](#m7)               |
| [Users.ignore(QUuid,bool)](#m7)          |
| Users.ignoreRadiusEnabledChanged(bool)   |
| [Users.kick(QUuid)](#m8)                 |
| [Users.mute(QUuid)](#m9)                 |
| [Users.personalMute(QUuid)](#m10)        |
| [Users.personalMute(QUuid,bool)](#m10)   |
| [Users.requestUsernameFromID(QUuid)](#m11) |
| Users.requestsDomainListData             |
| Users.setAvatarGain(QUuid,float)         |
| [Users.toggleIgnoreRadius()](#m12)       |
| Users.usernameFromIDReply(QString,QString,QString,bool) |

| Events                           |
| -------------------------------- |
| Users.avatarDisconnected(QUuid)  |
| Users.enteredIgnoreRadius()      |
| Users.objectNameChanged(QString) |



## Methods 

## disableIgnoreRadius()<a id="m1"></a>

Disables the space bubble feature.

## enableIgnoreRadius()<a id="m2"></a>

Enables the space bubble feature.

## getCanKick()<a id="m3"></a>

"True" if the DomainServer will allow this Node/Avatar to kick (ban) other avatars.

## getIgnoreRadiusEnabled()<a id="m4"></a>

Returns `true` if the space bubble is enabled.

## getIgnoreStatus()<a id="m5"></a>

Get whether or not you have ignored the node with the passed UUID.

## getPersonalMuteStatus()<a id="m6"></a>

Get whether or not you have personally muted the node with the passed UUID.

## ignore()<a id="m7"></a>

Personally ignore another user, making them disappear for you and you disappear for them. Pass the node or session ID of the user you want to ignore and "true" for ignore; "false" for unignore.

## kick()<a id="m8"></a>

Kick/ban another user. Removes them from the server and prevents them from returning. Bans by either username (if available) or machine fingerprint otherwise. This will only do anything if you're an admin of the domain you're in. Pass the UUID of the user you want to kick/ban.

## mute()<a id="m9"></a>

Mutes another user's microphone. Not permanent; the silenced user can unmute themselves with the UNMUTE button in their HUD. This will only do anything if you're an admin of the domain you're in. Pass the UUID of the user you want to silence.

## personalMute()<a id="m10"></a>

Mute another user for you and you only. They won't be able to hear you, and you won't be able to hear them. Pass the node or session ID of the user you want to personally mute and "true" for mute; false" for unmute.

## requestUsernameFromID()<a id="m11"></a>

Get the username and machine fingerprint associated with the passed UUID. This will only do anything if you're an admin of the domain you're in.

## toggleIgnoreRadius()<a id="m12"></a>

Toggle the state of the space bubble feature.

