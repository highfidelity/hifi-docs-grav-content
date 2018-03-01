---
title: 'Messages'
taxonomy:
    category:
        - docs
---

| Methods                                  |
| ---------------------------------------- |
| `Messages.sendMessage(String,String)`    |
| `Messages.sendLocalMessage(String, String)`         |
| `Messages.sendData(String, QByteArray)`|
| `Messages.subscribe(String)`|
| `Messages.unsubscribe(String)`|

| Signals                           |
| -------------------------------- |
| `Messages.messageReceived (String, String, QUuid, bool)`     |
| `Messages.dataReceived (String, String, QUuid, bool)`     |
