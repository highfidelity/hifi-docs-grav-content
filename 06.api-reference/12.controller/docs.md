---
title: 'Controller'
taxonomy:
    category:
        - docs
---



| Properties                               | Type   | Description |
| ---------------------------------------- | ------ | ----------- |
| Controller.Actions.ACTION1               | number |             |
| Controller.Actions.ACTION2               | number |             |
| Controller.Actions.Backward              | number |             |
| Controller.Actions.BoomIn                | number |             |
| Controller.Actions.BoomOut               | number |             |
| Controller.Actions.ContextMenu           | number |             |
| Controller.Actions.CycleCamera           | number |             |
| Controller.Actions.Down                  | number |             |
| Controller.Actions.Forward               | number |             |
| Controller.Actions.LATERAL_LEFT          | number |             |
| Controller.Actions.LATERAL_RIGHT         | number |             |
| Controller.Actions.LONGITUDINAL_BACKWARD | number |             |
| Controller.Actions.LONGITUDINAL_FORWARD  | number |             |
| Controller.Actions.LeftFoot              | number |             |
| Controller.Actions.LeftHand              | number |             |
| Controller.Actions.LeftHandClick         | number |             |
| Controller.Actions.Pitch                 | number |             |
| Controller.Actions.PitchDown             | number |             |
| Controller.Actions.PitchUp               | number |             |
| Controller.Actions.PrimaryAction         | number |             |
| Controller.Actions.ReticleClick          | number |             |
| Controller.Actions.ReticleDown           | number |             |
| Controller.Actions.ReticleLeft           | number |             |
| Controller.Actions.ReticleRight          | number |             |
| Controller.Actions.ReticleUp             | number |             |
| Controller.Actions.ReticleX              | number |             |
| Controller.Actions.ReticleY              | number |             |
| Controller.Actions.RightFoot             | number |             |
| Controller.Actions.RightHand             | number |             |
| Controller.Actions.RightHandClick        | number |             |
| Controller.Actions.Roll                  | number |             |
| Controller.Actions.SHIFT                 | number |             |
| Controller.Actions.SecondaryAction       | number |             |
| Controller.Actions.Shift                 | number |             |
| Controller.Actions.StepPitch             | number |             |
| Controller.Actions.StepRoll              | number |             |
| Controller.Actions.StepTranslateX        | number |             |
| Controller.Actions.StepTranslateY        | number |             |
| Controller.Actions.StepTranslateZ        | number |             |
| Controller.Actions.StepYaw               | number |             |
| Controller.Actions.StrafeLeft            | number |             |
| Controller.Actions.StrafeRight           | number |             |
| Controller.Actions.ToggleMute            | number |             |
| Controller.Actions.ToggleOverlay         | number |             |
| Controller.Actions.TranslateX            | number |             |
| Controller.Actions.TranslateY            | number |             |
| Controller.Actions.TranslateZ            | number |             |
| Controller.Actions.UiNavBack             | number |             |
| Controller.Actions.UiNavGroup            | number |             |
| Controller.Actions.UiNavLateral          | number |             |
| Controller.Actions.UiNavSelect           | number |             |
| Controller.Actions.UiNavVertical         | number |             |
| Controller.Actions.Up                    | number |             |
| Controller.Actions.VERTICAL_DOWN         | number |             |
| Controller.Actions.VERTICAL_UP           | number |             |
| Controller.Actions.Yaw                   | number |             |
| Controller.Actions.YawLeft               | number |             |
| Controller.Actions.YawRight              | number |             |
| Controller.Hardware.Application.AdvancedMovement | number |             |
| Controller.Hardware.Application.CameraEntity | number |             |
| Controller.Hardware.Application.CameraFSM | number |             |
| Controller.Hardware.Application.CameraFirstPerson | number |             |
| Controller.Hardware.Application.CameraIndependent | number |             |
| Controller.Hardware.Application.CameraThirdPerson | number |             |
| Controller.Hardware.Application.Grounded | number |             |
| Controller.Hardware.Application.InHMD    | number |             |
| Controller.Hardware.Application.NavigationFocused | number |             |
| Controller.Hardware.Application.SnapTurn | number |             |
| Controller.Hardware.Hydra.L0             | number |             |
| Controller.Hardware.Keyboard.0           | number |             |
| Controller.Hardware.OculusTouch.A        | number |             |
| Controller.Standard.A                    | number |             |
| Controller.objectName                    | string |             |

| Methods                                  |
| ---------------------------------------- |
| Controller.createInputController(QString,QString) |
| Controller.disableMapping(QString)       |
| Controller.enableMapping(QString)        |
| Controller.enableMapping(QString,bool)   |
| Controller.findAction(QString)           |
| Controller.findDevice(QString)           |
| Controller.getActionNames()              |
| Controller.getActionValue(int)           |
| Controller.getActions()                  |
| Controller.getAllActions()               |
| Controller.getAvailableInputs(uint)      |
| Controller.getAxisValue(StandardAxisChannel) |
| Controller.getAxisValue(StandardAxisChannel,uint16_t) |
| Controller.getAxisValue(int)             |
| Controller.getButtonValue(StandardButtonChannel) |
| Controller.getButtonValue(StandardButtonChannel,uint16_t) |
| Controller.getDeviceName(uint)           |
| Controller.getDeviceNames()              |
| Controller.getHardware()                 |
| Controller.getPoseValue(StandardPoseChannel) |
| Controller.getPoseValue(StandardPoseChannel,uint16_t) |
| Controller.getPoseValue(int)             |
| Controller.getRecommendedOverlayRect()   |
| Controller.getStandard()                 |
| Controller.getValue(int)                 |
| Controller.getViewportDimensions()       |
| Controller.loadMapping(QString)          |
| Controller.newMapping()                  |
| Controller.newMapping(QString)           |
| Controller.parseMapping(QString)         |



| Events                                   |
| ---------------------------------------- |
| Controller.actionEndEvent(HFActionEvent) |
| Controller.actionEvent(int,float)        |
| Controller.actionStartEvent(HFActionEvent) |
| Controller.backEndEvent()                |
| Controller.backStartEvent()              |
| Controller.captureActionEvents()         |
| Controller.captureEntityClickEvents()    |
| Controller.captureJoystick(int)          |
| Controller.captureKeyEvents(KeyEvent)    |
| Controller.captureMouseEvents()          |
| Controller.captureTouchEvents()          |
| Controller.captureWheelEvents()          |
| Controller.destroyed()                   |
| Controller.destroyed(QObject*)           |
| Controller.hardwareChanged()             |
| Controller.inputEvent(int,float)         |
| Controller.keyPressEvent(KeyEvent)       |
| Controller.keyReleaseEvent(KeyEvent)     |
| Controller.mouseDoublePressEvent(MouseEvent) |
| Controller.mouseMoveEvent(MouseEvent)    |
| Controller.mousePressEvent(MouseEvent)   |
| Controller.mouseReleaseEvent(MouseEvent) |
| Controller.objectNameChanged(QString)    |
| Controller.releaseActionEvents()         |
| Controller.releaseEntityClickEvents()    |
| Controller.releaseInputController(controller::InputController*) |
| Controller.releaseJoystick(int)          |
| Controller.releaseKeyEvents(KeyEvent)    |
| Controller.releaseMouseEvents()          |
| Controller.releaseTouchEvents()          |
| Controller.releaseWheelEvents()          |
| Controller.touchBeginEvent(TouchEvent)   |
| Controller.touchEndEvent(TouchEvent)     |
| Controller.touchUpdateEvent(TouchEvent)  |
| Controller.triggerHapticPulse(float,float) |
| Controller.triggerHapticPulse(float,float,controller::Hand) |
| Controller.triggerHapticPulseOnDevice(uint,float,float) |
| Controller.triggerHapticPulseOnDevice(uint,float,float,controller::Hand) |
| Controller.triggerShortHapticPulse(float) |
| Controller.triggerShortHapticPulse(float,controller::Hand) |
| Controller.triggerShortHapticPulseOnDevice(uint,float) |
| Controller.triggerShortHapticPulseOnDevice(uint,float,controller::Hand) |
| Controller.wheelEvent(WheelEvent)        |

## Overview

### Mapping Input to Output

A *mapping* is the set of rules for taking changes in inputs from supported controllers and acting on them in some way. A new mapping is created using `Controller.newMapping()`. This function takes a string which is used as the mapping name, and returns a [MappingObject](https://wiki.highfidelity.com/wiki/MappingObject), as seen in the example below.

```
// The name of the new mapping
var MAPPING_NAME = "com.highfidelity.controllers.example.triggerExample";

// Create a new mapping object
var mapping = Controller.newMapping(MAPPING_NAME);
```

The individual rules in a mapping are known as *routes* and they define which input goes to which output. The controller API has a predefined list of standard controller inputs (things like button A and Right X axis) in [Controller.Standard](https://wiki.highfidelity.com/wiki/Controller.Standard). You can create a route from one of these inputs to a function using the [MappingObject](https://wiki.highfidelity.com/wiki/MappingObject)'s, `from` method and the resulting [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `to` method.

This example, creates a route from the input `Controller.Standard.RT` to a new function that prints the value of the controller's right trigger to the debug line.

```
// Add a route to the mapping object
 mapping.from(Controller.Standard.RT).to(function (value) {
     print("Right trigger is  " + value);
 });
```

At this point, the new mapping object and route won't do anything. For the mapping to go into effect, you need to enable the mapping using `Controller.enableMapping()`. In addition, when the script ends, it is good practice to disable the mapping using `Controller.disableMapping()`. A good way to do that is to bind the disable to the script ending event. Here you have a minimal, but functional example mapping script.

```
// The name of the new mapping
var MAPPING_NAME = "com.highfidelity.controllers.example.triggerExample";

// Create a new mapping object
var mapping = Controller.newMapping(MAPPING_NAME);

// Add a route to the mapping object
 mapping.from(Controller.Standard.RT).to(function (value) {
     print("Right trigger is " + value);
 });

//Enable the new mapping
 Controller.enableMapping(MAPPING_NAME);

// Disable the new mapping when the script ends
 Script.scriptEnding.connect(function () {
     Controller.disableMapping(MAPPING_NAME);
});
```

For more complete examples, see:

- [Controller JavaScript examples](https://github.com/highfidelity/hifi/tree/master/examples/controllers)

For information on available Controller API functions, objects, and events, see the individual function, object, and event pages in the column to the left.

### Mapping to Predefined Output Actions

As mentioned above, the controller API has a list of predefined standard controller inputs (things like button A and Right X axis) in [Controller.Standard](https://wiki.highfidelity.com/wiki/Controller.Standard). It also has a list of predefined application *Actions* (things like yaw, pitch, or left/right hand pose) in [Controller.Actions](https://wiki.highfidelity.com/wiki/Controller.Actions). A default mapping of standard controller inputs to *Actions* exists, however, this mapping may not suit your needs, and you can create your own routes from standard input to any of the predefined *Actions*.

This example creates a route from `Controller.Standard.RT` input to the predefined *Action* `Controller.Actions.StepYaw`.

```
// Add a route to the mapping object
 mapping.from(Controller.Standard.RT).to(Controller.Actions.StepYaw);
```

### Using Filters to Customize Output Actions

The custom mapping you want to create may not be as simple as input A -> standard input A -> Action A. For this reason, the controller mapping system provides a number of filters allowing you to customize the action. For example, filters can be used to scale an action to be twice as fast as the default or to create a different threshold for when an action occurs. In this example, a new mapping is created that uses the inverse of the standard mapping by using the `invert` filter.

```
{
    "name": "Test to Standard",
    "channels": [
        { "from": "test.LY", "filters": "invert", "to": "Standard.LY" }
    ]
}
```

Filters are methods of the [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject). For the complete list of filters, see the [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject) page.

### Creating Conditional Mappings

You may want to use different mappings depending on your user's setup. For example, if your user is using an HMD (such as the Oculus Rift) in addition to a hand-held controller (GamePad, Hydra, etc.), to provide greater user comfort, you may want to provide different controls than when using a GamePad alone. To create conditional mappings, use the [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `when` method. Here we have an example of route created only when the application is in HMD mode followed by the route to be used if the application is not in HMD mode.

```
1 mapping.from(Controller.Test.LY).when(Controller.Application.InHMD).to(Controller.Standard.RY);
2 mapping.from(Controller.Test.LY).to(Controller.Standard.LY);
```

### Mapping Order

In the conditional mapping example above, you'll see that the conditional case (line 1) is above the standard case (line 2). This order is important as mappings use a one read/one write rule. After an input has been read, it is marked as read and can’t be read again. If the standard case were first, the input would be marked as read and the conditional case, even if true, would not be used.

*Note: Circular loops not permitted.*

### Using JSON to Create Mappings

While all of the above examples used scripting to create a mapping, it is also possible to create a mapping as a JSON object. For examples of creating new mappings using a JSON mapping object, see:

- [Controller JSON mapping examples](https://github.com/highfidelity/hifi/tree/master/interface/resources/controllers)

Creating a JSON mapping is typically used when adding support for new hardware.

### Creating Mappings for New Hardware

Attached controllers are exposed as a tree of identifiers under the global variable `Controller`. That is, there's `Controller.Hardware.Foo` where Foo is the hardware name of the controller (Hydra, GamePad, Vive, etc.). Inputs for specific controllers are not mapped directly to [Controller.Actions](https://wiki.highfidelity.com/wiki/Controller.Actions). Instead, the controller API has a predefined mapping referred to as the "standard controller" (defined in [standard.json](https://github.com/highfidelity/hifi/blob/master/interface/resources/controllers/standard.json)) which maps standard inputs to [Controller.Standard](https://wiki.highfidelity.com/wiki/Controller.Standard) to [Controller.Actions](https://wiki.highfidelity.com/wiki/Controller.Actions). Each specific controller is mapped to the standard controller.

![img](https://wiki.highfidelity.com/images/b/bd/Controllersystem.png)

Specific controllers are mapped to the standard controller which is mapped to application output actions.

So, for example, the Hydra controls are mapped to standard controls (which are mapped to hardware actions) as seen in [hydra.json](https://github.com/highfidelity/hifi/blob/master/interface/resources/controllers/hydra.json).

The exception to this are keyboard and mouse inputs (Hardware.[Keyboard](https://wiki.highfidelity.com/wiki/Keyboard)) which are mapped directly to actions ([keyboardMouse.json](https://github.com/highfidelity/hifi/blob/master/interface/resources/controllers/keyboardMouse.json)).

##Hand Controller

This API reference guide covers the various methods an entity script can implement that are called by the interface script, [handControllerGrab.js](https://github.com/highfidelity/hifi/blob/master/scripts/system/controllers/handControllerGrab.js) # Overview High Fidelity currently supports the hydra and vive hand controllers, with continually updated support as more controllers are released to the market. The "trigger" button is located at the lower underside of both the hydra and the vive and looks similar to a pistol trigger. The equip button is the bumper above the primary trigger in the case of the hydra, and the left side button for the vive. The handControllerGrab.js interface script provides a rich interface for using your hands to interact with the world around you, from picking up physical objects, to pressing buttons, puling triggers, shooting a bow and arrow, and anything else you can imagine!

The following table provides a complete reference for all of the actions an entity script can listen for from the handControllerGrab script. NOTE: The handControllerGrab.js script MUST be running for any entity script implementing the following methods to work properly.

| Method                                   | Description                              | Example Entity                           |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| stopFarTrigger, startFarTrigger, continueFarTrigger | These methods will be called when a user is more than 0.3 meters away from a non-physical entity, and starts, stops, or continues squeezing the trigger. NOTE: This entity must have the following field in the userData for these methods to be triggered:grabbableKey: { wantsTrigger: true } | A light switch that can be toggled on and off from a distance. |
| stopNearTrigger, startNearTrigger, continueNearTrigger | These methods will be called when a user is less than 0.3 meters away from a non-physical entity, and starts, stops, or continues squeezing the trigger. NOTE: This entity must have the following field in the userData for these methods to be triggered:grabbableKey: { wantsTrigger: true } | A doorbell that rings when a user puts her hand close to it and squeezes the trigger |
| startNearGrab, continueNearGrab          | These methods will be called when a user is less than 0.3 meters from a physical entity and starts or continues to squeeze the trigger. | A magic ball that glows with healing light when it's being held close. |
| startDistanceGrab, continueDistantGrab   | These methods will be called when a user is more than 0.3 meters from a physical entity and starts or continues to squeeze the trigger. | A comet that emits beautiful icy particle trails when a user is dragging it through the sky. |
| releaseGrab                              | This method is called when a user releases the trigger when having been either near or distance grabbing a physical entity | Turn off the magical glowing ball when it's released |
| startEquip, continueEquip, releaseEquip  | These methods are called when a user starts, continues, or stops equipping a physical entity. | A pistol that stays in the user's hand even when he's not holding the trigger down. |



## Events

## hardwareChanged()



A `hardwareChanged()` event is sent when a device (Joystick, GamePad) is registered or unregistered by a plugin.

*Note: Not all plugins send hardware changed events. So, for example plugging or unplugging a mouse will not generate a hardware changed event while doing so with and Xbox controller will.*



### Event

`hardwareChanged()`

### Arguments

This function has no parameters.

### Examples

This example prints a line to the debug log when a device (Joystick, GamePad) is registered or unregistered by a plugin.

```
Controller.hardwareChanged.connect(function(){
   print("Hardware changed");
});

```

Note: Be sure to have the device enabled as an input device in Interface (**Avatar > Input Devices**). If it is not enabled, messages won't be sent.





## keyPressEvent()


A `keyPressEvent()` is sent when a key is pressed.

### Event

`keyPressEvent(event)`

### Arguments

- **event:KeyEvent**: A JavaScript keyboard event

### Examples

This example prints the key pressed to the debug log.

```
Controller.keyPressEvent.connect(function(event){
   print ("You pressed: " + event.text);
});
```





## keyReleaseEvent()



A `keyReleaseEvent()` is sent when a key has been released after it has been pressed.


### Event

`keyReleaseEvent(event)`

### Arguments

- **event: KeyEvent**: A JavaScript keyboard event

### Examples

This example prints the key released to the debug log.

```
Controller.keyPressEvent.connect(function(event){
   print ("The " + event.text + " key has been released");
});
```



## mouseDoublePressEvent()


A `mouseDoublePressEvent()` is sent when the mouse button has been double-clicked.



### Event

`mouseDoublePressEvent(event)`

### Arguments

**mouseEvent: MouseEvent**: A JavaScript mouse event

### Examples

This example prints a line to the debug log when the mouse has been double-clicked.

```
Controller.mouseDoublePressEvent.connect(function(event){
   print ("The mouse has been double-clicked.");
});
```



## mouseMoveEvent()



The `mouseMoveEvent()` is sent when the mouse has been moved.


### Event

`mouseMoveEvent(event)`

### Arguments

- **mouseEvent: MouseEvent**: A JavaScript mouse event

### Examples

This example prints a line to the debug log when the mouse has been moved.

```
Controller.mouseMoveEvent.connect(function(event){
   print ("The mouse has been moved.");
});
```



## mousePressEvent()


The `mousePressEvent()` is sent when the mouse button has been pressed.



### Event

`mousePressEvent(event)`

### Arguments

- **mouseEvent: MouseEvent**: A JavaScript mouse event

### Examples

This example prints a line to the debug log when the mouse button has been pressed. To test this script, open the Script Editor and run the following code:

```
Controller.mousePressEvent.connect(function(event){
   print ("The mouse button has been pressed.");
});

```

To run the sample as an entity script, wrap the content in an anonymous JavaScript function, save the file, and add the URL to the desired entity in the Script URL textbox:

```
(function(){
    Controller.mousePressEvent.connect(function(event){
       print ("The mouse button has been pressed.");
    });
})
```





## mouseReleaseEvent()



The `mouseReleaseEvent()` is sent when the mouse button has been released.



### Event

`mouseReleaseEvent(event)`

### Arguments

- **mouseEvent: MouseEvent**: A JavaScript mouse event

### Examples

This example prints a line to the debug log when the mouse button has been released.

```
Controller.mouseReleaseEvent.connect(function(event){
   print ("The mouse button has been released.");
});
```





## touchBeginEvent()



The `touchBeginEvent()` is sent when a touch event begins.

### Event

`touchBeginEvent(event)`

### Arguments

**event: TouchEvent**: A JavaScript touch event

### Examples

This example prints a line to the debug log when a touch event begins.

```
Controller.touchBeginEvent.connect(function (event) {
   print ("A touch event began.");
});
```



## touchEndEvent()



The `touchEndEvent()` is sent when a touch event has ended.



### Event

`touchEndEvent(event)`

### Arguments

- **event: TouchEvent**: A JavaScript touch event

### Examples

This example prints a line to the debug log when a touch event has ended.

```
Controller.touchEndEvent.connect(function(event){
   print ("The touch event has ended.");
});
```



## touchUpdateEvent()



The `touchUpdateEvent()` is sent when a touch event has been updated.



### Event

`touchUpdateEvent(event)`

### Arguments

- **event: TouchEvent**: A JavaScript touch event

### Examples

This example prints a line to the debug log when a touch event has been updated.

```
Controller.touchUpdateEvent.connect(function(event){
   print ("The touch even has been updated.");
});
```



## wheelEvent()


The `wheelEvent()` is sent when a wheel event has occurred.

### Event

`wheelEvent(event)`

### Arguments

**event: WheelEvent**: A JavaScript wheel event

### Examples

This example prints a line to the debug log when a wheel event has occurred.

```
Controller.wheelEvent.connect(function(event){
   print ("A wheel event has occurred.");
});
```





## Methods

## disableMapping()


A *mapping* is the set of rules for taking changes in inputs from supported controllers and acting on them in some way. The individual rules in a mapping are known as *routes* and they define which input goes to which output.

`disableMapping()` disables the specified mapping so that the routes it contains are no longer used by the application.


### Function

`disableMapping(mappingName)`

### Arguments

- **mappingName: string**: The name of the mapping. It can be any valid string.

### Examples

This example creates a new mapping that specifies a route from `Controller.Standard.RT` input to custom output. It then enables that mapping so that the new route is used by the application. When the script ends, the mapping is disabled and the application will again use the default mapping for `Controller.Standard.RT`.

```
// The name of the new mapping
var MAPPING_NAME = "com.highfidelity.controllers.example.triggerExample";

// Create a new mapping object
var mapping = Controller.newMapping(MAPPING_NAME);

// Add a route to the mapping object
 mapping.from(Controller.Standard.RT).to(function (value) {
     print("Right trigger is " + value);
 });

//Enable the new mapping
 Controller.enableMapping(MAPPING_NAME);

// Disable the new mapping when the script ends
 Script.scriptEnding.connect(function () {
     Controller.disableMapping(MAPPING_NAME);
});
```



## enableMapping()


A *mapping* is the set of rules for taking changes in inputs from supported controllers and acting on them in some way. The individual rules in a mapping are known as *routes* and they define which input goes to which output.

`enableMapping()` enables the specified mapping so that the routes it contains are used by the application.



### Function

`enableMapping(mappingName)`

### Arguments

- **mappingName: string**: The name of the mapping

### Examples

This example creates a new mapping that specifies a route from `Controller.Standard.RT` input to custom output. It then enables that mapping so that the new route is used by the application. When the script ends, the mapping is disabled and the application will again use the default mapping for `Controller.Standard.RT`.

```
// The name of the new mapping
var MAPPING_NAME = "com.highfidelity.controllers.example.triggerExample";

// Create a new mapping object
var mapping = Controller.newMapping(MAPPING_NAME);

// Add a route to the mapping object
 mapping.from(Controller.Standard.RT).to(function (value) {
     print("Right trigger is " + value);
 });

//Enable the new mapping
 Controller.enableMapping(MAPPING_NAME);

// Disable the new mapping when the script ends
 Script.scriptEnding.connect(function () {
     Controller.disableMapping(MAPPING_NAME);
});
```



## getPoseValue()



`getPoseValue()` is used to get the value of a specified endpoint pose. This can be a [Standard](https://wiki.highfidelity.com/wiki/Standard) endpoint object or it can be an individual hardware input pose.


### Function

`getPoseValue(input) // Returns a pose object`

### Arguments

- **input: object**: A [Standard](https://wiki.highfidelity.com/wiki/Standard) endpoint pose, for example `LeftHand` or `RightHand` or an individual hardware input pose

### Returns

- **pose: object**: A JSON object consisting of a translation (vec3), rotation (Quat), velocity (vec3), and angular velocity(vec3)

### Examples

This example gets the pose value for the right hand (`Controller.Standard.RightHand`) and then prints the value (converted to a string) to the debug log.

```
var poseRight = Controller.getPoseValue(Controller.Standard.RightHand);
print (JSON.stringify(poseRight));

```

With this example, you should see output similar to the following:

```
{"translation":{"x":0,"y":0,"z":0},"rotation":{"x":0,"y":0,"z":0,"w":1},"velocity":{"x":0,"y":0,"z":0},"angularVelocity":{"x":0,"y":0,"z":0},"valid":false
```



## getReticlePosition()


`getReticlePosition()` is used to get the current position of the cursor on the screen.


### Function

`getReticlePosition() // Returns a vec2`

### Arguments

This function has no parameters.

### Returns

- **position:Vec2**: The x and y positions of the cursor on the screen

### Examples

This example gets the current position of the cursor and then prints it to the debug log.

```
var postition = getReticlePosition();
print ("x: " + position.x + " y: " + position.y);
```



## getValue()



`getValue()` gets the current value of the specified endpoint object. This can be a [Standard](https://wiki.highfidelity.com/wiki/Standard) endpoint object or it can be individual hardware endpoint object.


### Function

`getValue(object) // Return float`

### Arguments

- **object:object**: The [Standard](https://wiki.highfidelity.com/wiki/Standard) endpoint object whose value is to be retrieved

### Returns

- **value:float**: The current value of the specified endpoint object

### Examples

This example prints the current value of the left analog stick Y axis (`Controller.Standard.LY`) to the debug log.

```
 print("LY value: " + Controller.getValue(Controller.Standard.LY));
```



## Haptics



If a controller supports haptic feedback, you can activate it using the following methods.

If you trigger a pulse while another one is already in progress, the strength and duration of the one that would finish last are honored.

### Custom Pulse

```
Controller.triggerHapticPulse(strength, duration, hand)

```

The three parameters here are: - strength: a float between 0 and 1 - duration: a number of milliseconds - hand: 0 for left, 1 for right, 2 for both

### Short Pulse

This method automatically trigger pulses of 250 ms

```
Controller.triggerShortHapticPulse(strength, hand)

```

The two parameters here are: - strength: a float between 0 and 1 - hand: 0 for left, 1 for right, 2 for both

### Specific Devices

The methods above will trigger pulses on all devices that can make them. If you'd like to specify the precise devices that will receive pulses, use the following methods:

```
Controller.triggerHapticPulseOnDevice(deviceID,strength, duration, hand )

Controller.triggerShortHapticPulseOnDevice(deviceID, strength, hand )
```



## MappingObject.enable()



A *mapping* is the set of rules for taking changes in inputs from supported controllers and acting on them in some way. The individual rules in a mapping are known as *routes* and they define which input goes to which output. The routes in a mapping will not be used by the application until the mapping has been enabled.

The [MappingObject](https://wiki.highfidelity.com/wiki/MappingObject)'s `enable()` method is used to enable and disable the mapping.



### Function

`mapping.enable() // enable the mapping` `mapping.enable(false) // disable the mapping`

### Arguments

- **false: bool**: `false` is used to disable the mapping.

### Examples

This example creates a simple JSON formatted mapping. A new mapping object is then created by passing the JSON object as a string to `parseMapping`. The mapping object's `enable()` method is then be used to enable and disable the mapping.

```
// Create a JSON mapping object
var mappingJSON = {
    "name": "com.highfidelity.testing.simpleJSONMapping",
    "channels": [
        { "from": "Standard.RT", "to": "Actions.ReticleClick", "filters": "constrainToInteger" }
    ]
};

// Use parseMapping to create a new mapping object
mapping = Controller.parseMapping(JSON.stringify(mappingJSON));

//Enable the new mapping
mapping.enable();

//Disable the new mapping
mapping.enable(false);
```



## MappingObject.from()



The individual rules in a mapping are known as *routes* and they define which input goes to which output.

The [MappingObject](https://wiki.highfidelity.com/wiki/MappingObject)'s `from()` method is used to specify the starting point of a route. This starting point can be a specific hardware input or it can be a [Standard](https://wiki.highfidelity.com/wiki/Standard) controller endpoint object.

Note: If you create a direct route from a specific hardware input (for example, `Hydra.LX`), the default mapping (`Hydra.LX` to `Standard.LX`) will be suppressed, because the new route takes precedence.



### Function

`MappingObject.from(input) // Returns a RouteObject`

### Arguments

- - input: object**: A [Standard](https://wiki.highfidelity.com/wiki/Standard) controller endpoint object or an individual hardware input

### Returns

- **object:RouteObject**: A JSON object that defines the route

### Examples

This example creates a route from the standard controller's right trigger (`Controller.Standard.RT`) to a custom function that prints the input value to the debug log.

```
// Add a route to the mapping object ("mapping")
 mapping.from(Controller.Standard.RT).to(function (value) {
     print("Right trigger is " + value);
 });

```

Here is sample output from pressing the right trigger:

```
Right trigger value: 0.027346327
Right trigger value: 0.184298423
Right trigger value: 0.249583496
Right trigger value: 0.533287539
Right trigger value: 0.649349544
Right trigger value: 0.838428374
Right trigger value: 0.992342344
```



## newMapping()



A *mapping* is the set of rules for taking changes in inputs from supported controllers and acting on them in some way. A mapping is stored in a [MappingObject](https://wiki.highfidelity.com/wiki/MappingObject).

`newMapping()` creates a new [MappingObject](https://wiki.highfidelity.com/wiki/MappingObject).



### Function

`newMapping(mappingName) // Returns a MappingObject`

### Arguments

- **mappingName:string**: The mapping object name. It can be any valid string; however, it should be a unique name as it is used to access the mapping.

### Returns

- **object: MappingObject**: A JavaScript object of the new mapping

### Examples

This example creates a new [MappingObject](https://wiki.highfidelity.com/wiki/MappingObject) with the name "New_Mapping."

```
var mapping = Controller.newMapping("New_Mapping");

```

**Note**: A new mapping will not go into effect until is has been enabled. You can enable a mapping either by name using the Controller.[enableMapping()](https://wiki.highfidelity.com/wiki/EnableMapping()) function, or directly from the mapping object by calling [MappingObject.enable()](https://wiki.highfidelity.com/wiki/MappingObject.enable()). The mapping can be disabled by calling Controller.[disableMapping()](https://wiki.highfidelity.com/wiki/DisableMapping()) or by using `enable(false)`.

**Note**: If the mapping re-maps a `Controller.Standard` mapping to another, where the button already has a value defined, the mapping will always fall back to the original default mapping. Be sure to not write into a control that already has a value.



## parseMapping()



A *mapping* is the set of rules for taking changes in inputs from supported controllers and acting on them in some way. In addition to scripting, a mapping can be created as a JSON object.

`parseMapping()` takes a JSON mapping object converted to string format and creates a new [MappingObject](https://wiki.highfidelity.com/wiki/MappingObject).

### Function

`parseMapping(mappingString) // Return a MappingObject`

### Arguments

- **mappingString:string**: A JSON mapping in string format

### Returns

- **object: MappingObject**: A new mapping object

### Examples

This example creates a simple JSON formatted mapping. A new mapping object is then created by passing the JSON object as a string to `parseMapping()`. The mapping object's`enable()` method is then be used to enable and disable the mapping.

```
// Create a JSON mapping object
var mappingJSON = {
    "name": "com.highfidelity.testing.simpleJSONMapping",
    "channels": [
        { "from": "Standard.RT", "to": "Actions.ReticleClick", "filters": "constrainToInteger" }
    ]
};

// Use parseMapping to create a new mapping object
mapping = Controller.parseMapping(JSON.stringify(mappingJSON));

//Enable the new mapping
mapping.enable();

//Disable the new mapping
mapping.enable(false);

```

**Note**: You can also enable and disable the mapping by name using `Controller.enableMapping()` and `Controller.disableMapping()`.

## RouteObject.clamp()


The individual rules in a mapping are known as *routes* and they define which input goes to which output. The mapping you want to create may not be as simple as input A -> Action A. For this reason, the controller mapping API provides a number of filters allowing you to customize the action.

The [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `clamp` method is used to specify that the input value must be within a specified range for output to be sent. If the input value falls outside of the specified range, output is not sent.

### Function

`clamp(min, max) // Returns this.RouteObject`

### Arguments

- **min:float**: The minimum value for which output will be sent


- **max:float**: The maximum value for which output will be sent

### Returns

- **object:RouteObject**: Returns *this*.RouteObject

### Examples

In this example, two routes are created. The first route uses the `clamp()` filter and goes from the standard controller's right trigger (`Controller.Standard.RT`) to a custom function that prints the right trigger value. The second route does not use the `clamp()`filter and goes from the standard controller's left trigger (`Controller.Standard.LT`) to a custom function that prints the left trigger value.

```
// Add a route to the mapping object ("mapping") from 
// the right trigger with the clamp filter
 mapping.from(Controller.Standard.RT).clamp(0, 0.5).to(function (value) {
     print("Right trigger value: " + value);
 });

// Add a route to the mapping object ("mapping") from the  
// left trigger without the clamp filter
 mapping.from(Controller.Standard.LT).to(function (value) {
     print("Left trigger value: "  + value);
 });

```

Using this example, you can easily compare the output between a route with the `clamp()` filter and a route without it. First, here is sample output from pressing the right trigger:

```
Right trigger value: 0.01232234
Right trigger value: 0.25992253
Right trigger value: 0.38326432
Right trigger value: 0.45975495
Right trigger value: 0.5
Right trigger value: 0.18839423
Right trigger value: 0
```

As you can see, with the `clamp()` filter, input values range from the specified min value (0) to the specified max (0.5) value. In comparison, here is sample output from pressing the left trigger which does not use the `clamp()` filter.

```
Left trigger value: 0.027346327
Left trigger value: 0.184298423
Left trigger value: 0.249583496
Left trigger value: 0.533287539
Left trigger value: 0.649349544
Left trigger value: 0.838428374
Left trigger value: 0.992342344
```

As you can see, without the `clamp()` filter, values range from 0 to 1.



## RouteObject.constrainToInteger()



The individual rules in a mapping are known as *routes* and they define which input goes to which output. The mapping you want to create may not be as simple as input A -> Action A. For this reason, the controller mapping API provides a number of filters allowing you to customize the action.

The [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `constrainToInteger()` method rounds the input value to an integer away from zero.



### Function

`constrainToInteger() // Returns this.RouteObject`

### Arguments

This function has no parameters.

### Returns

- **object:RouteObject**: Returns *this*.RouteObject

### Examples

Constraining a value to an integer allows you to use analog input as if it were a toggle (or in the case of a bidirectional axis, a three-state switch). Here is an example that creates a route using the `constrainToInteger()` filter. This route goes from the right analog stick x axis (`Controller.Standard.RX`) to a custom function that prints the value to the debug log.

```
mapping.from(Controller.Standard.RX).constrainToInteger().to(function(value) {
    print("Right analog stick x axis value: "  + value);
});

```

With this route enabled, sample output from pressing the right analog stick x axis looks something like this:

```
Right analog stick x axis value: 1
Right analog stick x axis value: 0
Right analog stick x axis value: -1
```

As you can see, with `constrainToInteger()`, the function is only called once when the analog stick x axis value is first pushed to the right (value goes to 1), once when the analog stick x axis is in a neutral position (value goes to 0), and once when analog stick x axis is first push to left (value goes to -1).

In comparison, here is the same rout without the `constrainToInteger()` filter.

```
 mapping.from(Controller.Standard.RX).to(function (value) {
     print("Right analog stick x axis value: "  + value);
 });

```

With this route enabled, sample output from pressing the right analog stick x axis looks something like this:

```
Right analog stick x axis value: 0.027346327
Right analog stick x axis value: 0.284298423
Right analog stick x axis value: 0.149583496
Right analog stick x axis value:  0
Right analog stick x axis value: -0.249349544
Right analog stick x axis value: -0.338428374
Right analog stick x axis value: -0.692342344
```

As you can see, when `constrainToInteger()` is not used, the function gets called with each and every value change of the right analog stick x axis.

## RouteObject.constrainToPositiveInteger()



The individual rules in a mapping are known as *routes* and they define which input goes to which output. The mapping you want to create may not be as simple as input A -> Action A. For this reason, the controller mapping API provides a number of filters allowing you to customize the action.

The [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `constrainToPositiveInteger()` method rounds the input value to 0 or 1.


### Function

`constrainToPositiveInteger() // Returns this.RouteObject`

### Arguments

This function has no parameters.

### Returns

- **object:RouteObject**: Returns *this*.RouteObject

### Examples

Constraining a value to an integer allows you to use analog input as if it were a toggle. Here is an example that creates a route using the `constrainToPositiveInteger()` filter. This route goes from the right analog stick x axis (`Controller.Standard.RX`) to a custom function that prints the value to the debug log.

```
mapping.from(Controller.Standard.RX).constrainToPositiveInteger().to(function(value) {
    print("Right analog stick x axis value: "  + value);
});

```

With this route enabled, sample output from pressing the right analog stick x axis looks something like this:

```
Right analog stick x axis value: 1
Right analog stick x axis value: 0
```

As you can see, with `constrainToPositiveInteger()`, the function is only called once when the analog stick x axis value is first pushed to the right (value goes to 1) and once when the analog stick x axis is in a neutral position (value goes to 0).

In comparison, here is the same rout without the `constrainToPositiveInteger()` filter.

```
mapping.from(Controller.Standard.RX).to(function(value) {
    print("Right analog stick x axis value: "  + value);
});

```

With this route enabled, sample output from pressing the right analog stick x axis looks something like this:

```
Right analog stick x axis  value: 0.027346327
Right analog stick x axis  value: 0.284298423
Right analog stick x axis  value: 0.149583496
Right analog stick x axis  value:  0
Right analog stick x axis  value: -0.249349544
Right analog stick x axis value: -0.338428374
Right analog stick x axis value: -0.692342344
```

As you can see, when `constrainToPositiveInteger()` is not used, the function gets called with each and every value change of the right analog stick x axis.



## RouteObject.deadZone()



**Note**: This may not work at this time.

The individual rules in a mapping are known as *routes* and they define which input goes to which output. The mapping you want to create may not be as simple as input A -> Action A. For this reason, the controller mapping API provides a number of filters allowing you customize the action.

The [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `deadZone` method is used to specify a value at which output will begin to be sent.



### Function

or Event `deadZone(min) // Returns this.RouteObject`

### Arguments

- **min:float**: The value output will begin to be sent

### Returns

**object:RouteObject**: Returns *this*.RouteObject

### Examples

In this example, two routes are created. The first route uses the `deadZone` filter and goes from the standard controller's right trigger (`Controller.Standard.RT`) to a custom function that prints the right trigger value. The second route does not use the `deadZone`filter and goes from the standard controller's left trigger (`Controller.Standard.LT`) to a custom function that prints the left trigger value.

```
// Add a route to the mapping object ("mapping")
 mapping.from(Controller.Standard.RT).deadZone(0.5).to(function (value) {
     print("Right trigger: " + value);
 });

// Add a route to the mapping object ("mapping")
 mapping.from(Controller.Standard.LT).to(function (value) {
     print("Left trigger: " + value);
 });

```

Using this example, you can easily compare the output between a route with the `deadZone` filter and a route without it. First, here is sample output from pressing the right trigger:

```
Right trigger value:  0.533287539
Right trigger value:  0.728184939
Right trigger value:  0.892749237
Right trigger value:  0.649328498
Right trigger value:  0.449324343
Right trigger value:  0.234394234
Right trigger value:  0
Right trigger value:  0.534234324
Right trigger value:  0.628184939
```

As you can see, with the `deadZone` filter, output is not sent until after the input value has gone above 0.5 and then output continues to be sent as long as the value is above 0. Output stops being sent when the input value has returned to 0 and doesn't start again until the input value again goes above 0.5. In comparison, here is sample output from pressing the left trigger which does not use the `deadZone` filter.

```
Left trigger value: 0.027346327
Left trigger value: 0.184298423
Left trigger value: 0.249583496
Left trigger value: 0.533287539
Left trigger value: 0.649349544
Left trigger value: 0.838428374
Left trigger value: 0.992342344
```

As you can see, without the `deadZone` filter, values range from 0 to 1.



## RouteObject.debug()



The individual rules in a mapping are known as *routes* and they define which input goes to which output.

The [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `debug()` method is used to enable debug messages.



### Function

`debug() // returns this.RouteObject`

### Arguments

This function has no parameters.

### Returns

**object:RouteObject**: Returns *this*.RouteObject

### Examples

This example creates a route with debug messages enabled.

```
// Add a route to the mapping object ("mapping")
 mapping.from(Controller.Standard.RT).debug().to(function (value) {
     print("Right trigger is " + value);
 });

```

With debug enabled, you should see output similar to the following in **Developer > Log**:

```
[DEBUG] Applying route ""
[DEBUG] Value was 0
[DEBUG] Done with mapping
```



## RouteObject.hysteresis()



The individual rules in a mapping are known as *routes* and they define which input goes to which output. The mapping you want to create may not be as simple as input A -> Action A. For this reason, the controller mapping API provides a number of filters allowing you customize the action.

The [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `hysteresis()` method is used to specify a value at which to start sending input and a value at which to stop sending input. When `hysteresis()` is used, input above the start value is rounded to a positive integer, and input below the stop value is rounded to 0. The purpose of this filter is to prevent flickering between options.



### Function or Event
`hysteresis(min, max) // Return this.RouteObject`

### Arguments

- **min:float**: The value at which to stop sending output


- **max:float**: The value at which to start sending output

### Returns

- **object:RouteObject**: Returns *this*.RouteObject

### Examples

This example creates two routes from the standard controller's right trigger (`Controller.Standard.RT`) to custom functions that print the right trigger value to the debug line. The first route uses the [peek()](https://wiki.highfidelity.com/wiki/RouteObject.peek()) filter to look at the value without registering that the value was looked at. The second route uses the `hysteresis()` filter. This route looks at the input value and prints the rounded input value to the debug log once when the value goes above 0.7 and once again when it falls below 0.5.

```
// peek at the value
mapping.from(Controller.Standard.RT).peek().to(function(value) {
    print ("Peeked at value: " + value);
});

// print the value with the hysteresis filter
mapping.from(Controller.Standard.RT).hysteresis(0.5, 0.7).to(function(value) {
    print ("Hysteresis value: " + value);
});

```

Here is what typical output might look like:

```
Peeked at value:  0.123123123
Peeked at value:  0.424577127
Peeked at value:  0.523124560
Peeked at value:  0.723156126
Hysteresis value: 1
Peeked at value:  0.894234342
Peeked at value:  0.634234344
Peeked at value:  0.493124560
Hysteresis value: 0
```

As you can see, the peeked at values range anywhere from 0 to 1 and are printed to the debug log with every change in value. The `hysteresis()` values are 0 and 1 and are only printed when input goes above 0.7 (rounded to 1) and when it falls below 0.5 (rounded to 0).



## RouteObject.invert()



The individual rules in a mapping are known as *routes* and they define which input goes to which output. The mapping you want to create may not be as simple as input A -> Action A. For this reason, the controller mapping API provides a number of filters allowing you to customize the action.

The [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `invert()` method inverts the scale of the input value.



### Function

`invert() // Return this.RouteObject`

### Arguments

This function has no parameters.

### Returns

- **object:RouteObject**: Returns *this*.RouteObject

### Examples

This example creates a route from the standard controller's right analog stick y axis (`Controller.Standard.RY`) to a custom function that prints the input value.

```
// Add a route to the mapping object ("mapping")
 mapping.from(Controller.Standard.RY).invert().to(function (value) {
     print("Right analog stick y axis value: " + value);
 });

```

With this route, if you press the right analog stick forward and then back, you will see output similar to the following:

```
Right analog stick y axis value: 0.027346327
Right analog stick y axis value: 0.284298423
Right analog stick y axis value: 0.149583496
Right analog stick y axis value:  0
Right analog stick y axis value: -0.249349544
Right analog stick y axis value: -0.338428374
Right analog stick y axis value: -0.692342344
```

As you can see, as you push the right analog stick y axis forward, values range from 0 to 1 and as you push the stick backwards, values range from 0 to -1. For comparison, here is the same route without the `invert()` filter.

```
// Add a route to the mapping object ("mapping")
 mapping.from(Controller.Standard.RY).to(function (value) {
     print("Right analog stick y axis value: " + value);
 });

```

With this route, if you push the right analog stick forward and then backwards, you will see output similar to the following:

```
Right analog stick y axis value: -0.013394275
Right analog stick y axis value: -0.234238455
Right analog stick y axis value: -0.103842374
Right analog stick y axis value:  0
Right analog stick y axis value:  0.234872235
Right analog stick y axis value:   0.309342302
Right analog stick y axis value:  0.634329837
```

As you can see, when you push the right analog stick y axis forward without the `invert()` filter, values range from 0 to -1 and as you push the stick backwards, values range from 0 to 1.



## RouteObject.peek()



Mappings use a "one read/one write" rule. After an input has been read, it is marked as read and can’t be read again.

The [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `peek()` method is used to look at an input value without registering that you looked at the input value.



### Function

`peek() // Return this.RouteObject`

### Arguments

This function has no parameters.

### Returns

- - **object:RouteObject**: Returns *this*.RouteObject

### Examples

This example creates two routes. The first uses `peek()` and `constrainToInteger()` to look at the value of the standard controller's left trigger (`Controller.Standard.LT`) to determine if it is being pressed or not without marking the left trigger as read. The second route reads the value of the left trigger and prints it to the debug line.

```
//Add new route to the mapping object ("mapping") that peeks at a value
mapping.from(Controller.Standard.LT).peek().constrainToInteger().to(function(value) {
   if (value) {
     print ("trigger pressed");
   } else {
     print ("trigger released");
   }
});
//Add a new route to the mapping object ("mapping")
mapping.from(Controller.Standard.LT).to(function(value) {
   print("Left trigger value:" + value);
 });
```



## RouteObject.pulse()



The individual rules in a mapping are known as *routes* and they define which input goes to which output. The mapping you want to create may not be as simple as input A -> Action A. For this reason, the controller mapping API provides a number of filters allowing you to customize the action.

The [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `pulse()` method is used to specify that the value should be sent at a specified interval.



### Function or Event

`pulse(interval) // Return this.RouteObject`

### Arguments

- **interval: float**: The length of the interval in seconds

### Returns

- **object:RouteObject**: Returns *this*.RouteObject

### Examples

This example creates a mapping route where the value of the standard controller's left trigger (`Controller.Standard.LT`) is printed to the debug line once every second.

```
//Add new route that looks at the value once per second
mapping.from(Controller.Standard.LT).pulse(1.0).to(function(value){
    print("Left trigger value: " + value);
});
```



##RouteObject.scale()


The individual rules in a mapping are known as *routes* and they define which input goes to which output. The mapping you want to create may not be as simple as input A -> Action A. For this reason, the controller mapping API provides a number of filters allowing you to customize the action.

The [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `scale()` method is used to scale the input value.



### Function or Event

`scale(multiplier) // Returns this.RouteObject`

### Arguments

- **multiplier: float**: The amount to multiply the input value by

### Returns

- **object:RouteObject**: Returns *this*.RouteObject

### Examples

This example adds a route from the standard controller's right trigger (`Controller.Standard.RT`) to a custom function that prints the scaled value of the right trigger.

```
// Add a route to the mapping object ("mapping")
mapping.from(Controller.Standard.RT).scale(10).to(function(value) {
   print ("Right trigger value:" + value);
});

```

Here is sample output from pressing the right trigger:

```
Right trigger value: 0.1232234
Right trigger value: 2.5992253
Right trigger value: 3.8326432
Right trigger value: 4.5975495
Right trigger value: 5.3423533
Right trigger value: 7.8839423
Right trigger value: 9.3957293
```

As you can see, the value has been scaled by 10, and trigger values range from 0 to 10.

## RouteObject.to()



The individual rules in a mapping are known as *routes* and they define which input goes to which output.

The [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `to()` method is used to specify the endpoint of a route.


### Function

`to(object)`

### Arguments

- **object:object**: The endpoint of the route. The endpoint can be a standard output [Action](https://wiki.highfidelity.com/wiki/Actions) or a custom function.

### Examples

This example uses the [MappingObject](https://wiki.highfidelity.com/wiki/MappingObject)'s `from()` method and the resulting [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `to()` method to specify a route from the standard controller's right trigger (`Controller.Standard.RT`) to a custom function that prints the input value to the debug log.

```
// Add a route to the mapping object ("mapping")
 mapping.from(Controller.Standard.RT).to(function (value) {
     print("Right trigger is " + value);
 });
```



## RouteObject.when()



The individual rules in a mapping are known as *routes* and they define which input goes to which output. When setting up routes, you may want to use different mappings for different conditions.

The [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject)'s `when()` method is used to create conditional mappings.

The conditional specified by `when()` is evaluated before the specified input value is read, and the input value is *only* read if the condition is `true`. This is important as mappings use a "one read/one write" rule. After an input has been read, it is marked as read and can’t be read again. If the condition is `false`, the input is not read, and the route won't suppress later routes that use the same input.



### Function

`when(condition) // Return this.RouteObject`

### Arguments

- **condition:bool**: If `true` the source input is read and route is used. If `false` the source input is not read and the route is not used.

### Returns

- **object:RouteObject**: Returns *this*.RouteObject

### Examples

If the user is using an HMD (such as the Oculus Rift) in addition to a GamePad, to provide greater user comfort you may want to provide different controls than when using a GamePad alone. This example creates two routes for the standard controller's right trigger (`Controller.Standard.RT`). Each route goes to a custom function that prints a line to the debug log when the right trigger is pressed. The first route is used when the application is in HMD mode ([Controller.Hardware.Application](https://wiki.highfidelity.com/wiki/Application)) while the second is used when the application is not in HMD mode.

```
// Add a route to the mapping object ("mapping") for 
// when Interface is in HMD mode

mapping.from(Controller.Standard.RT).when(Controller.Hardware.Application.InHMD).to(function(value) {
   print ("Right trigger pressed while in HMD mode.");
});

// Add a route to the mapping object ("mapping") for
// when  Interface is not in HMD mode 
                                                                                 
mapping.from(Controller.Standard.RT).to(function(value) {
   print ("Right trigger pressed while not in HMD mode.");
});

```

### Conditional Mapping Order

In the conditional mapping example above, you'll see that the conditional case (line 4) is above the standard case (line 11). This order is important as mappings use a one read/one write rule. After an input has been read, it is marked as read and can’t be read again. If the standard case were first, the input would be marked as read and the conditional case, even if true, would not be used.



## setReticlePosition()



### Function

`setReticlePosition(position)`

### Arguments

- **position:Vec2**: The x and y position to move the cursor to

### Examples

This example moves the the cursor to the upper left-hand corner of the screen.

```
var newPosition = {x:0 , y:0};
Controller.setReticlePosition(newPosition);
```



## Objects

## Controller.Actions


The [Controller API](https://wiki.highfidelity.com/wiki/Controller_API) has a list of predefined application *Actions* in `Controller.Actions`. The predefined actions are listed below.

| Action            | Description                              |
| ----------------- | ---------------------------------------- |
| `Backward`        | Alias for `TranslateZ` in the positive direction |
| `BoomIn`          | Camera movement to third person view     |
| `BoomOut`         | Camera movement back to first person view |
| `ContextMenu`     |                                          |
| `CycleCamera`     | Cycles the camera                        |
| `Down`            |                                          |
| `Forward`         | Alias for `TranslateZ` in the negative direction |
| `LeftHand`        | Set the left hand pose                   |
| `LeftHandClick`   |                                          |
| `Pitch`           | Rotation around the X axis               |
| `PitchDown`       | Bisected alias for `Pitch`               |
| `PitchUp`         | Bisected alias for `Pitch`               |
| `PrimaryAction`   |                                          |
| `ReticleClick`    | Pointer/Reticle click event              |
| `ReticleDown`     | Bisected alias for `ReticleY`            |
| `ReticleLeft`     | Bisected alias for `ReticleX`            |
| `ReticleRight`    | Bisected alias for `ReticleX`            |
| `ReticleUp`       | Bisected alias for `ReticleY`            |
| `ReticleX`        | Reticle movement along the X axis        |
| `ReticleY`        | Reticle movement along the Y axis        |
| `RightHand`       | Set the right hand pose                  |
| `RightHandClick`  |                                          |
| `Roll`            | Rotation around the Z axis               |
| `SecondaryAction` |                                          |
| `Shift`           |                                          |
| `StrafeLeft`      | Bisected alias for `TranslateX`          |
| `StrafeRight`     | Bisected alias for <code>TranslateX      |
| `StepPitch`       | Incremental rotation around the X axis   |
| `StepRoll`        | Incremental rotation around the Z axis   |
| `StepTranslateX`  | Incremental movement along the X axis    |
| `StepTranslateY`  | Incremental movement along the Y axis    |
| `StepTranslateZ`  | Incremental movement along the Z axis    |
| `StepYaw`         | Incremental rotation around the Y axis   |
| `ToggleMute`      | Toggle audio device mute                 |
| `TranslateX`      | Movement along the X axis                |
| `TranslateY`      | Movement along the Y axis                |
| `TranslateZ`      | Movement along the Z axis                |
| `Up`              |                                          |
| `Yaw`             | Rotation around the Y axis               |
| `YawLeft`         | Bisected alias for `Yaw`                 |
| `YawRight`        | Bisected alias for `Yaw`                 |



## Controller.Hardware



Attached controllers are exposed as a tree of identifiers under the global variable `Controller`. That is, there's `Controller.Hardware.Foo` where Foo is the hardware name of the controller (Hydra, GamePad, Vive, etc.).

Under each `Hardware.Foo` property, such as `Hardware.Hydra` or `Hardware.Gamepad`, there are properties for the specific inputs on the device.

For more information, see the section *Creating Mappings for New Hardware* in the [Controller API Overview](https://wiki.highfidelity.com/wiki/Controller_API_Overview).



## Controller.Hardware.Application



When creating controller mappings, you may want to use different routes depending on your user's setup. For example, if your user is using an HMD (such as the Oculus Rift) in addition to a GamePad, to provide greater user comfort you may want to provide different controls than when using a GamePad alone. The `Controller.Hardware.Application` object provides an easy way to access information about the user's setup and preferences when creating conditional routes using the [when()](https://wiki.highfidelity.com/wiki/RouteObject.when()) filter.

The `Controller.Hardware.Application` object has following properties:

| Name                | Value | Description                              |
| ------------------- | ----- | ---------------------------------------- |
| `ComfortMode`       | float | A non-zero value indicates the user has selected to use "Comfort Mode" when in HMD mode and 0 indicates the user has not selected to use "Comfort Mode." |
| `Grounded`          | float | The `Grounded` property is used to determine whether an avatar is colliding with a floor entity or located within a specified distance above a floor entity. A floor entity is any entity that has collision enabled (the entity's `ignoreForCollisions` property is set to `false`). The specified distance depends on the avatar's size and is set to 1/3 the radius of the avatar's collision capsule. non-zero value indicates the avatar is either colliding with the floor entity or above the floor entity within the specified distance. A value of 0 indicates the avatar is not colliding with or near a floor entity. : The distance measured is from the avatar's capsule to the entity's collision hull. As an entity's collision hull may not match the entity's mesh (and won't for irregular shapes) and may be significantly larger than the mesh, the avatar may appear to be floating even though the `Grounding` value is 1. |
| `InHMD`             | float | A non-zero value indicates Interface is being run in HMD mode, and 0 indicates HMD mode is not in use. |
| `NavigationFocused` | float | If the user is using a GamePad or Hydra, and a menu or dialog appears, switching to the keyboard is not user friendly. By checking for `NavigationFocused`, conditional routes can be created that allow the user to navigate the menu without having to touch the mouse or keyboard. |

Note: Looking at any of these properties directly will give you the integer identifier of that input and not the value. To see the value you need to use [getValue()](https://wiki.highfidelity.com/wiki/GetValue()). For example, to print the current value of `inHMD` you would use something like this:

```
print ("InHMD: " +   Controller.getValue(Controller.Hardware.Application.InHMD));
```



## Controller.Hardware.Keyboard



The [Controller API](https://wiki.highfidelity.com/wiki/Controller_API) has a list of predefined keyboard and mouse inputs in `Controller.Hardware.Keyboard`. For key inputs or mouse events not on this list, use the Controller API key and mouse event functions documented in the column to the left.

| KeyBoard / Mouse Input                   | Description                              |
| ---------------------------------------- | ---------------------------------------- |
| `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, and `9` | Number keys inclusive of 0 though 9      |
| `A`, `B`, `C`, `D`, `E`, `F`,`G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, and `Z` | Letter keys inclusive of A - Z of the English alphabet |
| `Left` and `Right`                       | Left and right arrow keys                |
| `Up` and `Down`                          | Up and down arrow keys                   |
| `Space`                                  | Space bar                                |
| `Shift`                                  | Shift key                                |
| `PageUp` and `PageDown`                  | PageUp and PageDown keys                 |
| `LeftMouseButton`                        | Left mouse button                        |
| `MiddleMouseButton`                      | Middle mouse button                      |
| `RightMouseButton`                       | Right mouse button                       |
| `LeftMouseClicked`                       | Left mouse button click                  |
| `MiddleMouseClicked`                     | Middle mouse button click                |
| `RightMouseClicked`                      | Right mouse button click                 |
| `MouseMoveRight`                         | Mouse movement to the right              |
| `MouseMoveLeft`                          | Mouse movement to the left               |
| `MouseMoveUp`                            | Mouse movement up                        |
| `MouseMoveDown`                          | Mouse movement down                      |
| `MouseWheelRight`                        | Mouse wheel movement to the right        |
| `MouseWheelLeft`                         | Mouse wheel movement left                |
| `MouseWheelUp`                           | Mouse wheel movement up                  |
| `MouseWheelDown`                         | Mouse wheel movement down                |
| `TouchpadRight`                          | Touchpad movement to the right           |
| `TouchpadLeft`                           | Touchpad movement to the left            |
| `TouchpadUp`                             | Touchpad movement up                     |
| `TouchpadDown`                           | Touchpad movement down                   |



## Controller.Standard


The controller API has a list of predefined standard controller end points as listed below. End point names are based on the Xbox controller input names. For convenience, aliases based on the Playstation controller names are also available. Inputs are listed below with those for buttons, D-Pad, triggers, and sticks in the first chart and those for finger abstractions and poses in the second.

### Buttons, D-Pad , Triggers, Sticks

| Input     | Aliases    | Description               |
| --------- | ---------- | ------------------------- |
| `A`       | `Cross`    | Button                    |
| `B`       | `Circle`   | Button                    |
| `Back`    | `Select`   | Back button               |
| `DD`      | `Down`     | D-Pad                     |
| `DL`      | `Left`     | D-Pad                     |
| `DR`      | `Right`    | D-Pad                     |
| `DU`      | `Up`       | D-Pad                     |
| `LB`      | `L1`       | Left bumper               |
| `LS`      | `L3`       | Left stick press          |
| `LSTouch` |            | Left stick touch          |
| `LT`      | `L2`       | Left trigger              |
| `LY`      |            | Left analog stick Y axis  |
| `LX`      |            | Left analog stick x axis  |
| `RB`      | `R1`       | Right bumper              |
| `RS`      | `R3`       | Right stick press         |
| `RSTouch` |            | Right stick touch         |
| `RT`      | `R2`       | Right trigger             |
| `RY`      | `RY`       | Right analog stick Y axis |
| `RX`      | `RX`       | Right analog stick X axis |
| `Start`   |            | Start button              |
| `X`       | `Square`   | Button                    |
| `Y`       | `Triangle` | Button                    |

### Finger abstractions and poses

Rather than buttons, triggers, etc., some controllers are based on the user's hands (for example, the Hydra or Leap Motion). For these types of controllers, the finger abstraction and pose properties are available to make it easy to create a JSON mapping based on hands rather than specific controls. For controls that map directly to a standard Xbox style game pad, the [standard.json](https://github.com/highfidelity/hifi/blob/master/interface/resources/controllers/standard.json) mapping creates the aliases to the finger and thumb abstractions. For individual controls that don't map directly to a standard Xbox style game pad, the hardware specific JSON mapping creates the aliases (for example, [hydra.json](https://github.com/highfidelity/hifi/blob/master/interface/resources/controllers/hydra.json)).

The "touch" controls are intended to expose when a user has a finger touching, but not pressing a particular control (as will be needed for the Oculus Touch controller).

| Input                      | Description        |
| -------------------------- | ------------------ |
| `LeftGrip`                 | Finger abstraction |
| `LeftHand`                 | Pose               |
| `LeftIndexPoint`           | Finger abstraction |
| `LeftGripTouch`            | Finger abstraction |
| `LeftPrimaryIndex`         | Finger abstraction |
| `LeftPrimaryIndexTouch`    | Finger abstraction |
| `LeftPrimaryThumb`         | Finger abstraction |
| `LeftPrimaryThumbTouch`    | Finger abstraction |
| `LeftSecondaryIndex`       | Finger abstraction |
| `LeftSecondaryIndexTouch`  | Finger abstraction |
| `LeftSecondaryThumb`       | Finger abstraction |
| `LeftSecondaryThumbTouch`  | Finger abstraction |
| `LeftThumbUp`              | Finger abstraction |
| `RightGrip`                | Finger abstraction |
| `RightHand`                | Pose               |
| `RightIndexPoint`          | Finger abstraction |
| `RightGripTouch`           | Finger abstraction |
| `RightPrimaryIndex`        | Finger abstraction |
| `RightPrimaryIndexTouch`   | Finger abstraction |
| `RightPrimaryThumb`        | Finger abstraction |
| `RightPrimaryThumbTouch`   | Finger abstraction |
| `RightSecondaryIndex`      | Finger abstraction |
| `RightSecondaryIndexTouch` | Finger abstraction |
| `RightSecondaryThumb`      | Finger abstraction |
| `RightSecondaryThumbTouch` | Finger abstraction |
| `RightThumbUp`             | Finger abstraction |



## MappingObject


A *mapping* is the set of rules for taking changes in inputs from supported controllers and acting on them in some way. The set of rules is stored in a MappingObject.

A MappingObject has the following methods:

- [MappingObject.from()](https://wiki.highfidelity.com/wiki/MappingObject.from())
- [MappingObject.enable()](https://wiki.highfidelity.com/wiki/MappingObject.enable())

A MappingObject has the following properties:

| Property   | Type   | Description                              |
| ---------- | ------ | ---------------------------------------- |
| `name`     | string | The mapping object name is the name of the mapping. It can be any valid string, but should be unique as it is used to access the mapping.avoid name conflicts, HighFidelity uses Java-style packaging notion for mapping names. This notation is not required. |
| `channels` | object | A JSON object of *routes* which define which input goes to which output. For more information, see the [RouteObject](https://wiki.highfidelity.com/wiki/RouteObject). |



## RouteObject



The individual rules in a mapping are known as *routes* and they define which input goes to which output. Routes are stored in a RouteObject.

A RouteObject has the following methods:

- [RouteObject.clamp()](https://wiki.highfidelity.com/wiki/RouteObject.clamp())
- [RouteObject.constrainToInteger()](https://wiki.highfidelity.com/wiki/RouteObject.constrainToInteger())
- [RouteObject.constrainToPositiveInteger()](https://wiki.highfidelity.com/wiki/RouteObject.constrainToPositiveInteger())
- [RouteObject.deadZone()](https://wiki.highfidelity.com/wiki/RouteObject.deadZone())
- [RouteObject.debug()](https://wiki.highfidelity.com/wiki/RouteObject.debug())
- [RouteObject.hysteresis()](https://wiki.highfidelity.com/wiki/RouteObject.hysteresis())
- [RouteObject.invert()](https://wiki.highfidelity.com/wiki/RouteObject.invert())
- [RouteObject.peek()](https://wiki.highfidelity.com/wiki/RouteObject.peek())
- [RouteObject.pulse()](https://wiki.highfidelity.com/wiki/RouteObject.pulse())
- [RouteObject.to()](https://wiki.highfidelity.com/wiki/RouteObject.to())
- [RouteObject.scale()](https://wiki.highfidelity.com/wiki/RouteObject.scale())
- [RouteObject.when()](https://wiki.highfidelity.com/wiki/RouteObject.when())