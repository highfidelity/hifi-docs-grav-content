---
title: 'Account'
taxonomy:
    category:
        - docs
---

| Properties                    | Type   | Description |
| ----------------------------- | ------ | ----------- |
| UserActivityLogger.objectName | string |             |

| Methods                                  |
| ---------------------------------------- |
| UserActivityLogger.makeUserConnection(QString,bool) |
| UserActivityLogger.makeUserConnection(QString,bool,QString) |
| UserActivityLogger.palAction(QString,QString) |
| UserActivityLogger.tutorialProgress(QString,int,float,float) |
| UserActivityLogger.tutorialProgress(QString,int,float,float,QString) |
| UserActivityLogger.tutorialProgress(QString,int,float,float,QString,int) |
| UserActivityLogger.tutorialProgress(QString,int,float,float,QString,int,QString) |

| Events                                   |
| ---------------------------------------- |
| UserActivityLogger.closedTablet()        |
| UserActivityLogger.destroyed()           |
| UserActivityLogger.destroyed(QObject*)   |
| UserActivityLogger.enabledEdit()         |
| UserActivityLogger.objectNameChanged(QString) |
| UserActivityLogger.openedMarketplace()   |
| UserActivityLogger.openedTablet(bool)    |
| UserActivityLogger.palOpened(float)      |
| UserActivityLogger.toggledAway(bool)     |