---
title: 'Window'
taxonomy:
    category:
        - docs
---

| Properties                         | Type    | Description |
| ---------------------------------- | ------- | ----------- |
|`Window.innerHeight`|number||
|`Window.innerWidth`|number||
|`Window.location.domainId`|string||
|`Window.location.hostname`|string||
|`Window.location.href`|string||
|`Window.location.isConnected`|boolean||
|`Window.location.metaverseServerUrl`|string||
|`Window.location.pathname`|string||
|`Window.location.placename`|string||
|`Window.location.protocol`|string||
|`Window.(x, y, z)`|number||

| Methods                                  |
| ---------------------------------------- |
|`Window.alert()`|
|`Window.alert(String)`|
|`Window.browse()`|
|`Window.browse(String)`|
|`Window.browse(String,String)`|
|`Window.browse(String,String,String)`|
|`Window.closeMessageBox(int)`|
|`Window.confirm()`|
|`Window.confirm(String)`|
|`Window.copyToClipboard(String)`|
|`Window.customPrompt(QVariant)`|
|`Window.hasFocus()`|
|`Window.isPhysicsEnabled()`|
|`Window.location.copyAddress()`|
|`Window.location.copyPath()`|
|`Window.location.deleteLater()`|
|`Window.location.goBack()`|
|`Window.location.goBackPossible(bool)`|
|`Window.location.goForward()`|
|`Window.location.goForwardPossible(bool)`|
|`Window.location.goToEntry()`|
|`Window.location.goToEntry(LookupTrigger)`|
|`Window.location.goToLocalSandbox()`|
|`Window.location.goToLocalSandbox(String)`|
|`Window.location.goToLocalSandbox(String,LookupTrigger)`|
|`Window.location.goToUser(String)`|
|`Window.location.goToViewpointForPath(String,String)`|
|`Window.location.handleLookupString(String)`|
|`Window.location.handleLookupString(String,bool)`|
|`Window.location.locationChangeRequired(glm::vec3,bool,glm::quat,bool)`|
|`Window.location.lookupResultIsNotFound()`|
|`Window.location.lookupResultIsOffline()`|
|`Window.location.lookupResultsFinished()`|
|`Window.location.lookupShareableNameForDomainID(QUuid)`|
|`Window.location.protocolVersion()`|
|`Window.location.refreshPreviousLookup()`|
|`Window.location.storeCurrentAddress()`|
|`Window.makeConnection(bool,String)`|
|`Window.openMessageBox(String,String,int,int)`|
|`Window.prompt()`|
|`Window.prompt(String)`|
|`Window.prompt(String,String)`|
|`Window.raiseMainWindow()`|
|`Window.save()`|
|`Window.save(String)`|
|`Window.save(String,String)`|
|`Window.save(String,String,String)`|
|`Window.setFocus()`|
|`Window.shareSnapshot(String)`|
|`Window.shareSnapshot(String,QUrl)`|
|`Window.showAssetServer()`|
|`Window.showAssetServer(String)`|
|`Window.snapshotShared(String)`|
|`Window.snapshotTaken(String,String,bool)`|
|`Window.svoImportRequested(String)`|
|`Window.takeSnapshot()`|
|`Window.takeSnapshot(bool)`|
|`Window.takeSnapshot(bool,bool)`|
|`Window.takeSnapshot(bool,bool,float)`|
|`Window.updateMessageBox(int,String,String,int,int)`|

| Events                                   |
| ---------------------------------------- |
|`Window.connectionAdded(String)`|
|`Window.connectionError(String)`|
|`Window.domainChanged(String)`|
|`Window.domainConnectionRefused(String,int,String)`|
|`Window.geometryChanged(QRect)`|
|`Window.location.hostChanged(String)`|
|`Window.location.metaverseServerUrlChanged()`|
|`Window.location.pathChangeRequired(String)`|
|`Window.location.possibleDomainChangeRequired(String,ushort,QUuid)`|
|`Window.location.possibleDomainChangeRequiredViaICEForID(String,QUuid)`|
|`Window.messageBoxClosed(int,int)`|
|`Window.processingGif()`|