---
title: 'Script'
taxonomy:
    category:
        - docs
---

| Properties        | Type   | Description |
| ----------------- | ------ | ----------- |
| Script.context    | string |             |
| Script.objectName | string |             |

| Methods                                  |
| ---------------------------------------- |
| Script.addEventHandler(EntityItemID,QString,QScriptValue) |
| Script.callAnimationStateHandler(QScriptValue,AnimVariantMap,QStringList,bool,AnimVariantResultHandler) |
| Script.callEntityScriptMethod(EntityItemID,QString) |
| Script.callEntityScriptMethod(EntityItemID,QString,EntityItemID,Collision) |
| Script.callEntityScriptMethod(EntityItemID,QString,PointerEvent) |
| Script.callEntityScriptMethod(EntityItemID,QString,QStringList) |
| Script.cleanupMenuItem(QString)          |
| Script.clearInterval(QObject*)           |
| Script.clearTimeout(QObject*)            |
| Script.doneRunning()                     |
| Script.errorMessage(QString,QString)     |
| Script.evaluate(QString,QString)         |
| Script.evaluate(QString,QString,int)     |
| Script.evaluateInClosure(QScriptValue,QScriptProgram) |
| Script.executeOnScriptThread(std::function<void()>) |
| Script.executeOnScriptThread(std::function<void()>,Qt::ConnectionType) |
| Script.finished(QString,ScriptEngine*)   |
| Script.formatException(QScriptValue,bool) |
| Script.generateUUID()                    |
| Script.getContext()                      |
| Script.include(QString)                  |
| Script.include(QString,QScriptValue)     |
| Script.include(QStringList)              |
| Script.include(QStringList,QScriptValue) |
| Script.infoMessage(QString,QString)      |
| Script.isAgentScript()                   |
| Script.isClientScript()                  |
| Script.isEntityClientScript()            |
| Script.isEntityScriptRunning(EntityItemID) |
| Script.isEntityServerScript()            |
| Script.lintScript(QString,QString)       |
| Script.lintScript(QString,QString,int)   |
| Script.load(QString)                     |
| Script.loadEntityScript(EntityItemID,QString,bool) |
| Script.loadScript(QString,bool)          |
| Script.makeError()                       |
| Script.makeError(QScriptValue)           |
| Script.makeError(QScriptValue,QString)   |
| Script.print(QString)                    |
| Script.registerFunction(QString,QScriptEngine::FunctionSignature) |
| Script.registerFunction(QString,QScriptEngine::FunctionSignature,int) |
| Script.registerFunction(QString,QString,QScriptEngine::FunctionSignature) |
| Script.registerFunction(QString,QString,QScriptEngine::FunctionSignature,int) |
| Script.registerGetterSetter(QString,QScriptEngine::FunctionSignature,QScriptEngine::FunctionSignature) |
| Script.registerGetterSetter(QString,QScriptEngine::FunctionSignature,QScriptEngine::FunctionSignature,QString) |
| Script.registerGlobalObject(QString,QObject*) |
| Script.registerValue(QString,QScriptValue) |
| Script.reloadScript(QString,bool)        |
| Script.removeEventHandler(EntityItemID,QString,QScriptValue) |
| Script.requestGarbageCollection()        |
| Script.require(QString)                  |
| Script.resetModuleCache()                |
| Script.resetModuleCache(bool)            |
| Script.resolvePath(QString)              |
| Script.resourcesPath()                   |
| Script.setInterval(QScriptValue,int)     |
| Script.setTimeout(QScriptValue,int)      |
| Script.signalHandlerException(QScriptValue) |
| Script.stop()                            |
| Script.stop(bool)                        |
| Script.unhandledException(QScriptValue)  |
| Script.unloadAllEntityScripts()          |
| Script.unloadEntityScript(EntityItemID)  |
| Script.unloadEntityScript(EntityItemID,bool) |
| Script.update(float)                     |
| Script.updateMemoryCost(qlonglong)       |
| Script.warningMessage(QString,QString)   |

| Events                                   |
| ---------------------------------------- |
| Script.destroyed()                       |
| Script.destroyed(QObject*)               |
| Script.entityScriptDetailsUpdated()      |
| Script.entityScriptContentAvailable(EntityItemID,QString,QString,bool,bool,QString) |
| Script.errorLoadingScript(QString)       |
| Script.objectNameChanged(QString)        |
| Script.printedMessage(QString,QString)   |
| Script.runningStateChanged()             |
| Script.scriptEnding()                    |
| Script.scriptLoaded(QString)             |

# clearInterval()

[setInterval()](https://wiki.highfidelity.com/wiki/SetInterval()) is used to run a specified callback function at a specified interval.

`clearInterval()` is used to stop calls scheduled using [setInterval()](https://wiki.highfidelity.com/wiki/SetInterval()).

## Function

`clearInterval(valueReturnedBySetInterval) // Return value`

## Arguments

**valueReturnedBySetInterval: valueReturnedBySetInterval**: The value returned by [setInterval()](https://wiki.highfidelity.com/wiki/SetInterval())

## Examples

In this example, `setInterval()` is used to print a line to the debug log once every 1000 milliseconds. The repeating call is stopped by using `clearInterval()`.

```
var multiple_timer = Script.setInterval(function() {
    print("Repeating timer fired!"); 
}, 1000);

// Stops the repeating timer
Script.clearInterval(multiple_timer);

```

You should not see any output from this example as the call is stopped.