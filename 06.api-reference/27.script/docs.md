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





# clearTimeout()

| **Script API**                           |
| ---------------------------------------- |
| ▼ [Script](https://wiki.highfidelity.com/wiki/Category:Script)► [Script methods](https://wiki.highfidelity.com/wiki/Category:Script_methods) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

[setTimeout()](https://wiki.highfidelity.com/wiki/SetTimeout()) is used to run a specified callback function once after a specified delay.

`clearTimeout()` is used to stop a call scheduled by [setTimeout()](https://wiki.highfidelity.com/wiki/SetTimeout()).

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/ClearTimeout()#)] 

- [1Function](https://wiki.highfidelity.com/wiki/ClearTimeout()#Function)
- [2Arguments](https://wiki.highfidelity.com/wiki/ClearTimeout()#Arguments)
- [3Examples](https://wiki.highfidelity.com/wiki/ClearTimeout()#Examples)
- [4References](https://wiki.highfidelity.com/wiki/ClearTimeout()#References)

## Function

`clearTimeout(valueReturnedBySetTimeout)`

## Arguments

**valueReturnedBySetTimeout: valueReturnedBySetTimeout**: The value returned by [setTimeout()](https://wiki.highfidelity.com/wiki/SetTimeout())

## Examples

In this example `setTimeout()` is used to print a line to the debug log once after a delay of 1000 milliseconds. `clearTimeout()` is used to stop the scheduled call.

```
var one_timer = Script.setTimeout(function() {
    print("One time timer fired!"); 
    }, 1000);

// this stops the scheduled function
Script.clearTimeout(one_timer);

```

You should not see any output from this example as the scheduled call was stopped.





# include()

| **Script API**                           |
| ---------------------------------------- |
| ▼ [Script](https://wiki.highfidelity.com/wiki/Category:Script)► [Script methods](https://wiki.highfidelity.com/wiki/Category:Script_methods) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

`include()` is used to include javascript from another script (or scripts) in the current script regardless of whether the current script is an interface script, entity script, or assignment client script.

For more information about script types, see the [Scripts Overview](https://readme.highfidelity.com/v1.0/docs/scripts-digging-deeper).

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/Include()#)] 

- [1Function](https://wiki.highfidelity.com/wiki/Include()#Function)
- [2Arguments](https://wiki.highfidelity.com/wiki/Include()#Arguments)
- [3Examples](https://wiki.highfidelity.com/wiki/Include()#Examples)
- [4References](https://wiki.highfidelity.com/wiki/Include()#References)

## Function

`include(StringOrArrayOfStrings, optionalCallback)`

## Arguments

**scripts: String or Strings[]**: A script or an array of scripts to include. Scripts can be specified as a full path or URL or can be relative to the current script.

**optionalCallback: function**: (Optional) A callback function to run after the script(s) have been loaded. If a callback function is specified, the specified script(s) will load asynchronously. If no callback function is specified, the specified script(s) will load synchronously (blocks).

## Examples

This example contains two scripts both located in the same directory. The first script (`ScriptA.js`) prints a line to the debug log.

```
// ScriptA.js
print ("This is script A.")

```

The second script (`ScriptB.js`) uses `include()` to include `ScriptA.js`. `include()` contains a callback function to be run when complete.

```
//ScriptB.js
Script.include('ScriptA.js', function() { 
    print("Script A included."); 
});

```

When you run `ScriptB.js`, you should see the following output:

```
This is script A.
Script A included.
```





# load()

| **Script API**                           |
| ---------------------------------------- |
| ▼ [Script](https://wiki.highfidelity.com/wiki/Category:Script)► [Script methods](https://wiki.highfidelity.com/wiki/Category:Script_methods) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

`load()` is used to start a new interface script. As `load()` is used to start interface scripts, it is only meaningful in interface and entity scripts.

For more information about script types, see the [Scripts Overview](https://wiki.highfidelity.com/wiki/Scripts_Overview).

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/Load()#)] 

- [1Function](https://wiki.highfidelity.com/wiki/Load()#Function)
- [2Arguments](https://wiki.highfidelity.com/wiki/Load()#Arguments)
- [3Examples](https://wiki.highfidelity.com/wiki/Load()#Examples)
- [4References](https://wiki.highfidelity.com/wiki/Load()#References)

## Function

`load(name)`

## Arguments

**name: String**: The name, including the full path, of the script to be loaded. The path can be a full path or URL or it can be relative to the calling script.

## Examples

This example uses two scripts in the same directory path. The first script (`sample1.js`) simply prints a line to the debug log.

```
// sample1.js
print ("This is a sample script.");

```

The second script (`loadSample.js`), loads and runs the `sample1.js` script.

```
// loadSample.js
Script.load("sample1.js");

```

You should see the following output.

```
This is a sample script.
```





# resolvePath()

| **Script API**                           |
| ---------------------------------------- |
| ▼ [Script](https://wiki.highfidelity.com/wiki/Category:Script)► [Script methods](https://wiki.highfidelity.com/wiki/Category:Script_methods) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

`resolvePath()` is used to resolve a path segment into an absolute path.

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/ResolvePath()#)] 

- [1Function](https://wiki.highfidelity.com/wiki/ResolvePath()#Function)
- [2Arguments](https://wiki.highfidelity.com/wiki/ResolvePath()#Arguments)
- [3Returns](https://wiki.highfidelity.com/wiki/ResolvePath()#Returns)
- [4Examples](https://wiki.highfidelity.com/wiki/ResolvePath()#Examples)
- [5References](https://wiki.highfidelity.com/wiki/ResolvePath()#References)

## Function

`resolvePath(pathSegment) // Returns a string`

## Arguments

**pathSegment:string**: The path segment to be resolved

## Returns

**absouletPath:string**: The absolute path

## Examples

If `scriptExample.js` were located in your current working directory, you could get the absolute path to the script by using `resolvePath()`.

```
var SCRIPT_EXAMPLE = Script.resolvePath("scriptExample.js")
print (SCRIPT_EXAMPLE);
```





# scriptEnding()

| **Script API**                           |
| ---------------------------------------- |
| ▼ [Script](https://wiki.highfidelity.com/wiki/Category:Script)► [Script methods](https://wiki.highfidelity.com/wiki/Category:Script_methods) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

`scriptEnding()` is used to run a callback function when the calling script is ending.

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/ScriptEnding()#)] 

- [1Function](https://wiki.highfidelity.com/wiki/ScriptEnding()#Function)
- [2Arguments](https://wiki.highfidelity.com/wiki/ScriptEnding()#Arguments)
- [3Examples](https://wiki.highfidelity.com/wiki/ScriptEnding()#Examples)
- [4References](https://wiki.highfidelity.com/wiki/ScriptEnding()#References)

## Function

`scriptEnding(callback)`

## Arguments

**callback:function**: The callback function to run when the script is ending

## Examples

This example waits for the script to end and prints a line to the debug log.

```
Print("This script just prints this line and then ends.");

function scriptEnding() {
    print("SCRIPT ENDING!!!");
}

// register our scriptEnding callback
Script.scriptEnding.connect(scriptEnding);

```

You should see the following output:

```
This script just prints this line and then ends.
SCRIPT ENDING!!!
```





# setInterval()

| **Script API**                           |
| ---------------------------------------- |
| ▼ [Script](https://wiki.highfidelity.com/wiki/Category:Script)► [Script methods](https://wiki.highfidelity.com/wiki/Category:Script_methods) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

`setInterval()` is used to run a specified callback function at a specified interval.

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/SetInterval()#)] 

- [1Function](https://wiki.highfidelity.com/wiki/SetInterval()#Function)
- [2Arguments](https://wiki.highfidelity.com/wiki/SetInterval()#Arguments)
- [3Returns](https://wiki.highfidelity.com/wiki/SetInterval()#Returns)
- [4Examples](https://wiki.highfidelity.com/wiki/SetInterval()#Examples)
- [5References](https://wiki.highfidelity.com/wiki/SetInterval()#References)

## Function

`setInterval(callback, milliseconds) // Returns a valueReturnedBySetInterval`

## Arguments

**callback: function**: The function to be run at each interval

**milliseconds: number**: The number of milliseconds between each interval

## Returns

**valueReturnedBySetInterval: valueReturnedBySetInterval**: A value that can be used by [clearInterval()](https://wiki.highfidelity.com/wiki/ClearInterval())

## Examples

This example uses `setInterval()` to print a message to the debug log once every 1000 milliseconds.

```
var multiple_timer = Script.setInterval(function() {
    print("Repeating timer fired!"); 
    }, 1000);

```

You should see output similar to this, with a new line printed every 1000 milliseconds:

```
Repeating timer fired!
Repeating timer fired!
Repeating timer fired!
```





# setTimeout()

| **Script API**                           |
| ---------------------------------------- |
| ▼ [Script](https://wiki.highfidelity.com/wiki/Category:Script)► [Script methods](https://wiki.highfidelity.com/wiki/Category:Script_methods) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

`setTimeout()` is used to run a specified callback function once after a specified delay.

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/SetTimeout()#)] 

- [1Function](https://wiki.highfidelity.com/wiki/SetTimeout()#Function)
- [2Arguments](https://wiki.highfidelity.com/wiki/SetTimeout()#Arguments)
- [3Returns](https://wiki.highfidelity.com/wiki/SetTimeout()#Returns)
- [4Examples](https://wiki.highfidelity.com/wiki/SetTimeout()#Examples)
- [5References](https://wiki.highfidelity.com/wiki/SetTimeout()#References)

## Function

`setTimeout(callback, milliseconds) // Return valueReturnedBySetTimeout`

## Arguments

**callback: function**: The function to run after the specified delay

**milliseconds:number**: The number of milliseconds to wait before running the specified callback function

## Returns

**valueReturnedBySetTimeout: valueReturnedBySetTimeout**: A value that can be used by [clearTimeout()](https://wiki.highfidelity.com/wiki/ClearTimeout())

## Examples

In this example, `setTimeout()` is used to specify a callback function that prints a single line to the debug log after a delay of 10000 milliseconds.

```
var one_timer = Script.setTimeout(function() {
    print("One time timer fired!"); 
    }, 10000);

```

After a delay of 10000 milliseconds, you should see the following output:

```
One time timer fired!
```





# stop()

| **Script API**                           |
| ---------------------------------------- |
| ▼ [Script](https://wiki.highfidelity.com/wiki/Category:Script)► [Script methods](https://wiki.highfidelity.com/wiki/Category:Script_methods) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

`stop()` is used to stop the current script.

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/Stop()#)] 

- [1Function](https://wiki.highfidelity.com/wiki/Stop()#Function)
- [2Arguments](https://wiki.highfidelity.com/wiki/Stop()#Arguments)
- [3Examples](https://wiki.highfidelity.com/wiki/Stop()#Examples)
- [4References](https://wiki.highfidelity.com/wiki/Stop()#References)

## Function

`stop()`

## Arguments

This function has no parameters.

## Examples

You can stop the current script simply by calling `stop()`.

```
Script.stop();
```





# update()

| **Script API**                           |
| ---------------------------------------- |
| ▼ [Script](https://wiki.highfidelity.com/wiki/Category:Script)► [Script methods](https://wiki.highfidelity.com/wiki/Category:Script_methods) |
| **Reference**                            |
| [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API) |

`update()` is used to run a specified callback function at a system-determined interval (currently 60Hz but may change going forward).

*Note: update() gives you the number of milliseconds since the last call as an argument. If you need that and are using setInterval(), you would have to track the timing yourself.*

## Contents

 [[hide](https://wiki.highfidelity.com/wiki/Update()#)] 

- [1Function](https://wiki.highfidelity.com/wiki/Update()#Function)
- [2Arguments](https://wiki.highfidelity.com/wiki/Update()#Arguments)
- [3Returns](https://wiki.highfidelity.com/wiki/Update()#Returns)
- [4Examples](https://wiki.highfidelity.com/wiki/Update()#Examples)
- [5References](https://wiki.highfidelity.com/wiki/Update()#References)

## Function

`update(float) // Return value`

## Arguments

**name:class**: description

## Returns

**name:class**: description

## Examples

*Stand-alone (or close as possible) examples showcasing the function*

```
var count = 0;

function displayCounter(deltaTime) {
    print("count =" + count + " deltaTime=" + deltaTime);
    count++;   
}

// register the call back so it fires before each data send
Script.update.connect(displayCounter);
```