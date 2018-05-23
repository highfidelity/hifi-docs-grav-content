---
title: Create Server Entity Scripts
taxonomy:
    category: docs
---

##Introduction
Scripts that are attached to entities and run in the Entity Server are called Server Entity scripts.

###Server Entity Scripts

An entity can have multiple server entity scripts attached to it, but all of these must be through a single file URL.

To attach a server entity script,
- Go to **Create** mode and open the **Properties** tab.
- Select the entity you'd like to attach the script to.
- Scroll down to find the `serverScripts` property.
- Enter the file URL.

## Example Script

Here is an example server entity script that modifies the intensity of a light entity. This script is used to flicker tea lights.

```

(function() {
    var MINIMUM_LIGHT_INTENSITY = 100.0;
    var MAXIMUM_LIGHT_INTENSITY = 125.0;

    // Return a random number between `low` (inclusive) and `high` (exclusive)
    function randFloat(low, high) {
        return low + Math.random() * (high - low);
    }

    var self = this;
    this.preload = function(entityID) {
        self.intervalID = Script.setInterval(function() {
            Entities.editEntity(entityID, {
                intensity: randFloat(MINIMUM_LIGHT_INTENSITY, MAXIMUM_LIGHT_INTENSITY)
            });
        }, 100);
    };
    this.unload = function() {
        Script.clearInterval(self.intervalID);
    }
});

```


This script uses `Script.setInterval` to adjust the intensity of the light entity to a random value (within the given bounds) every 100 milliseconds.

As we only need one actor to update the intensity of the light, the flickering tea light is a good example of an entity that should use a server entity script. The same script could be attached as an entity client script, but all clients who could see the tea light would be editing the entity to vary the intensity of the light to flicker it.

## Script API

The Entity Script Server does not have access to all of the listed components of the API. APIs for avatars, controllers, recording, overlays, and mouse and keyboard events are not available in the Entity Script Server.

Learn more about what APIs are available to server entity scripts [here](https://docs.highfidelity.com/api-reference/namespaces/entities).

