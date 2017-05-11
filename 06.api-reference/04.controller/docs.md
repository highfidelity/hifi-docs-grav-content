---
title: 'Controller'
taxonomy:
    category:
        - docs
---



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

