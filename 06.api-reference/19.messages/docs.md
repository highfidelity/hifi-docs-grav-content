---
title: 'Messages'
taxonomy:
    category:
        - docs
---

| Methods                                  |
| ---------------------------------------- |
| Messages.sendMessage(QString,QString)    |
| Messages.sendLocalMessage(QString, QString )         |
| Messages.sendData(QString, QByteArray)|
| Messages.subscribe(QString)|
| Messages.unsubscribe(QString)|

| Signals                           |
| -------------------------------- |
| Messages.messageReceived (QString, QString, QUuid, bool)     |
| Messages.dataReceived (QString, QString, QUuid, bool)     |
