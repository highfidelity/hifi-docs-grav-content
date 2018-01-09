---
title: 'Window'
taxonomy:
    category:
        - docs
---

| Properties                         | Type    | Description |
| ---------------------------------- | ------- | ----------- |
| Window.innerHeight                 | number  |             |
| Window.innerWidth                  | number  |             |
| Window.location.domainId           | string  |             |
| Window.location.hostname           | string  |             |
| Window.location.href               | string  |             |
| Window.location.isConnected        | boolean |             |
| Window.location.metaverseServerUrl | string  |             |
| Window.location.objectName         | string  |             |
| Window.location.pathname           | string  |             |
| Window.location.placename          | string  |             |
| Window.location.protocol           | string  |             |
| Window.objectName                  | string  |             |
| Window.x                           | number  |             |

| Methods                                  |
| ---------------------------------------- |
| Window.alert()                           |
| Window.alert(QString)                    |
| Window.browse()                          |
| Window.browse(QString)                   |
| Window.browse(QString,QString)           |
| Window.browse(QString,QString,QString)   |
| Window.closeMessageBox(int)              |
| Window.confirm()                         |
| Window.confirm(QString)                  |
| Window.copyToClipboard(QString)          |
| Window.customPrompt(QVariant)            |
| Window.hasFocus()                        |
| Window.isPhysicsEnabled()                |
| Window.location.copyAddress()            |
| Window.location.copyPath()               |
| Window.location.deleteLater()            |
| Window.location.goBack()                 |
| Window.location.goBackPossible(bool)     |
| Window.location.goForward()              |
| Window.location.goForwardPossible(bool)  |
| Window.location.goToEntry()              |
| Window.location.goToEntry(LookupTrigger) |
| Window.location.goToLocalSandbox()       |
| Window.location.goToLocalSandbox(QString) |
| Window.location.goToLocalSandbox(QString,LookupTrigger) |
| Window.location.goToUser(QString)        |
| Window.location.goToViewpointForPath(QString,QString) |
| Window.location.handleLookupString(QString) |
| Window.location.handleLookupString(QString,bool) |
| Window.location.locationChangeRequired(glm::vec3,bool,glm::quat,bool) |
| Window.location.lookupResultIsNotFound() |
| Window.location.lookupResultIsOffline()  |
| Window.location.lookupResultsFinished()  |
| Window.location.lookupShareableNameForDomainID(QUuid) |
| Window.location.protocolVersion()        |
| Window.location.refreshPreviousLookup()  |
| Window.location.storeCurrentAddress()    |
| Window.makeConnection(bool,QString)      |
| Window.openMessageBox(QString,QString,int,int) |
| Window.prompt()                          |
| Window.prompt(QString)                   |
| Window.prompt(QString,QString)           |
| Window.raiseMainWindow()                 |
| Window.save()                            |
| Window.save(QString)                     |
| Window.save(QString,QString)             |
| Window.save(QString,QString,QString)     |
| Window.setFocus()                        |
| Window.shareSnapshot(QString)            |
| Window.shareSnapshot(QString,QUrl)       |
| Window.showAssetServer()                 |
| Window.showAssetServer(QString)          |
| Window.snapshotShared(QString)           |
| Window.snapshotTaken(QString,QString,bool) |
| Window.svoImportRequested(QString)       |
| Window.takeSnapshot()                    |
| Window.takeSnapshot(bool)                |
| Window.takeSnapshot(bool,bool)           |
| Window.takeSnapshot(bool,bool,float)     |
| Window.updateMessageBox(int,QString,QString,int,int) |

| Events                                   |
| ---------------------------------------- |
| Window.connectionAdded(QString)          |
| Window.connectionError(QString)          |
| Window.destroyed()                       |
| Window.destroyed(QObject*)               |
| Window.domainChanged(QString)            |
| Window.domainConnectionRefused(QString,int,QString) |
| Window.geometryChanged(QRect)            |
| Window.location.destroyed()              |
| Window.location.destroyed(QObject*)      |
| Window.location.hostChanged(QString)     |
| Window.location.metaverseServerUrlChanged() |
| Window.location.objectNameChanged(QString) |
| Window.location.pathChangeRequired(QString) |
| Window.location.possibleDomainChangeRequired(QString,ushort,QUuid) |
| Window.location.possibleDomainChangeRequiredViaICEForID(QString,QUuid) |
| Window.messageBoxClosed(int,int)         |
| Window.objectNameChanged(QString)        |
| Window.processingGif()                   |