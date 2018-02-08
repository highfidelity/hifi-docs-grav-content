---
title: 'Script'
taxonomy:
    category:
        - docs
---

| Properties        | Type   | Description |
| ----------------- | ------ | ----------- |
|`Script.context`|string||

| Methods                                  |
| ---------------------------------------- |
|`Script.addEventHandler(EntityItemID,String,QScriptValue)`|
|`Script.callAnimationStateHandler(QScriptValue,AnimVariantMap,StringList,bool,AnimVariantResultHandler)`|
|`Script.callEntityScriptMethod(EntityItemID,String)`|
|`Script.callEntityScriptMethod(EntityItemID,String,EntityItemID,Collision)`|
|`Script.callEntityScriptMethod(EntityItemID,String,PointerEvent)`|
|`Script.callEntityScriptMethod(EntityItemID,String,StringList)`|
|`Script.cleanupMenuItem(String)`|
|`Script.clearInterval(QObject*)`|
|`Script.clearTimeout(QObject*)`|
|`Script.doneRunning()`|
|`Script.errorMessage(String,String)`|
|`Script.evaluate(String,String)`|
|`Script.evaluate(String,String,int)`|
|`Script.evaluateInClosure(QScriptValue,QScriptProgram)`|
|`Script.executeOnScriptThread(std::function<void()>)`|
|`Script.executeOnScriptThread(std::function<void()>,Qt::ConnectionType)`|
|`Script.finished(String,ScriptEngine*)`|
|`Script.formatException(QScriptValue,bool)`|
|`Script.generateUUID()`|
|`Script.getContext()`|
|`Script.include(String)`|
|`Script.include(String,QScriptValue)`|
|`Script.include(StringList)`|
|`Script.include(StringList,QScriptValue)`|
|`Script.infoMessage(String,String)`|
|`Script.isAgentScript()`|
|`Script.isClientScript()`|
|`Script.isEntityClientScript()`|
|`Script.isEntityScriptRunning(EntityItemID)`|
|`Script.isEntityServerScript()`|
|`Script.lintScript(String,String)`|
|`Script.lintScript(String,String,int)`|
|`Script.load(String)`|
|`Script.loadEntityScript(EntityItemID,String,bool)`|
|`Script.loadScript(String,bool)`|
|`Script.makeError()`|
|`Script.makeError(QScriptValue)`|
|`Script.makeError(QScriptValue,String)`|
|`Script.print(String)`|
|`Script.registerFunction(String,QScriptEngine::FunctionSignature)`|
|`Script.registerFunction(String,QScriptEngine::FunctionSignature,int)`|
|`Script.registerFunction(String,String,QScriptEngine::FunctionSignature)`|
|`Script.registerFunction(String,String,QScriptEngine::FunctionSignature,int)`|
|`Script.registerGetterSetter(String,QScriptEngine::FunctionSignature,QScriptEngine::FunctionSignature)`|
|`Script.registerGetterSetter(String,QScriptEngine::FunctionSignature,QScriptEngine::FunctionSignature,String)`|
|`Script.registerGlobalObject(String,QObject*)`|
|`Script.registerValue(String,QScriptValue)`|
|`Script.reloadScript(String,bool)`|
|`Script.removeEventHandler(EntityItemID,String,QScriptValue)`|
|`Script.requestGarbageCollection()`|
|`Script.require(String)`|
|`Script.resetModuleCache()`|
|`Script.resetModuleCache(bool)`|
|`Script.resolvePath(String)`|
|`Script.resourcesPath()`|
|`Script.setInterval(QScriptValue,int)`|
|`Script.setTimeout(QScriptValue,int)`|
|`Script.signalHandlerException(QScriptValue)`|
|`Script.stop()`|
|`Script.stop(bool)`|
|`Script.unhandledException(QScriptValue)`|
|`Script.unloadAllEntityScripts()`|
|`Script.unloadEntityScript(EntityItemID)`|
|`Script.unloadEntityScript(EntityItemID,bool)`|
|`Script.update(float)`|
|`Script.updateMemoryCost(qlonglong)`|
|`Script.warningMessage(String,String)`|

| Events                                   |
| ---------------------------------------- |
|`Script.entityScriptDetailsUpdated()`|
|`Script.entityScriptContentAvailable(EntityItemID,String,String,bool,bool,String)`|
|`Script.errorLoadingScript(String)`|
|`Script.objectNameChanged(String)`|
|`Script.printedMessage(String,String)`|
|`Script.runningStateChanged()`|
|`Script.scriptEnding()`|
|`Script.scriptLoaded(String)`|

## clearInterval()

[setInterval()](https://wiki.highfidelity.com/wiki/SetInterval\(\)) is used to run a specified callback function at a specified interval.

`clearInterval()` is used to stop calls scheduled using [setInterval()](https://wiki.highfidelity.com/wiki/SetInterval\(\)).

### Function

`clearInterval(valueReturnedBySetInterval) // Return value`

### Arguments

**valueReturnedBySetInterval: valueReturnedBySetInterval**: The value returned by [setInterval()](https://wiki.highfidelity.com/wiki/SetInterval\(\))

### Examples

In this example, `setInterval()` is used to print a line to the debug log once every 1000 milliseconds. The repeating call is stopped by using `clearInterval()`.

```
var multiple_timer = Script.setInterval(function() {
    print("Repeating timer fired!"); 
}, 1000);

// Stops the repeating timer
Script.clearInterval(multiple_timer);

```

You should not see any output from this example as the call is stopped.





## clearTimeout()

[setTimeout()](https://wiki.highfidelity.com/wiki/SetTimeout\(\)) is used to run a specified callback function once after a specified delay.

`clearTimeout()` is used to stop a call scheduled by [setTimeout()](https://wiki.highfidelity.com/wiki/SetTimeout\(\)).

### Function

`clearTimeout(valueReturnedBySetTimeout)`

### Arguments

**valueReturnedBySetTimeout: valueReturnedBySetTimeout**: The value returned by [setTimeout()](https://wiki.highfidelity.com/wiki/SetTimeout\(\))

### Examples

In this example `setTimeout()` is used to print a line to the debug log once after a delay of 1000 milliseconds. `clearTimeout()` is used to stop the scheduled call.

```
var one_timer = Script.setTimeout(function() {
    print("One time timer fired!"); 
    }, 1000);

// this stops the scheduled function
Script.clearTimeout(one_timer);

```

You should not see any output from this example as the scheduled call was stopped.





## include()

`include()` is used to include javascript from another script (or scripts) in the current script regardless of whether the current script is an interface script, entity script, or assignment client script.

For more information about script types, see the [Scripts Overview](https://readme.highfidelity.com/v1.0/docs/scripts-digging-deeper).

### Function

`include(StringOrArrayOfStrings, optionalCallback)`

### Arguments

**scripts: String or Strings[]**: A script or an array of scripts to include. Scripts can be specified as a full path or URL or can be relative to the current script.

**optionalCallback: function**: (Optional) A callback function to run after the script(s) have been loaded. If a callback function is specified, the specified script(s) will load asynchronously. If no callback function is specified, the specified script(s) will load synchronously (blocks).

### Examples

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





## load()

`load()` is used to start a new interface script. As `load()` is used to start interface scripts, it is only meaningful in interface and entity scripts.

For more information about script types, see the [Scripts Overview](https://wiki.highfidelity.com/wiki/Scripts_Overview).

### Function

`load(name)`

### Arguments

**name: String**: The name, including the full path, of the script to be loaded. The path can be a full path or URL or it can be relative to the calling script.

### Examples

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





## resolvePath()



`resolvePath()` is used to resolve a path segment into an absolute path.

### Function

`resolvePath(pathSegment) // Returns a string`

### Arguments

**pathSegment:string**: The path segment to be resolved

### Returns

**absouletPath:string**: The absolute path




## scriptEnding()



`scriptEnding()` is used to run a callback function when the calling script is ending.

### Function

`scriptEnding(callback)`

### Arguments

**callback:function**: The callback function to run when the script is ending

### Examples

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





## setInterval()

`setInterval()` is used to run a specified callback function at a specified interval.

### Function

`setInterval(callback, milliseconds) // Returns a valueReturnedBySetInterval`

### Arguments

**callback: function**: The function to be run at each interval

**milliseconds: number**: The number of milliseconds between each interval

### Returns

**valueReturnedBySetInterval: valueReturnedBySetInterval**: A value that can be used by [clearInterval()](https://wiki.highfidelity.com/wiki/ClearInterval\(\))

### Examples

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



## setTimeout()

`setTimeout()` is used to run a specified callback function once after a specified delay.

### Function

`setTimeout(callback, milliseconds) // Return valueReturnedBySetTimeout`

### Arguments

**callback: function**: The function to run after the specified delay

**milliseconds:number**: The number of milliseconds to wait before running the specified callback function

### Returns

**valueReturnedBySetTimeout: valueReturnedBySetTimeout**: A value that can be used by [clearTimeout()](https://wiki.highfidelity.com/wiki/ClearTimeout\(\))

### Examples

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





## stop()



`stop()` is used to stop the current script.


### Function

`stop()`

### Arguments

This function has no parameters.

### Examples

You can stop the current script simply by calling `stop()`.

```
Script.stop();
```





## update()

`update()` is used to run a specified callback function at a system-determined interval (currently 60Hz but may change going forward).

*Note: update() gives you the number of milliseconds since the last call as an argument. If you need that and are using setInterval(), you would have to track the timing yourself.*

### Function

`update(float) // Return value`

### Arguments

**name:class**: description

### Returns

**name:class**: description

### Examples

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
