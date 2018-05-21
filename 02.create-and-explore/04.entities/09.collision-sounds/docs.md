---
title: Collision Sounds
taxonomy:
    category: docs
---

*Add collision sounds to entities.*

## Overview

Entities have the ability to add a collision sound in the properties which will cause the entity to emit a sound every time the entity comes in contact, or collides, with another entity.

[plugin:youtube](https://www.youtube.com/watch?v=NzgMjFOEEV4)

## Make a Floor

We'll start by making a floor to bounce something off.

- Create a [**Box Entity**](../box-and-sphere-entities).
- Select the **Properties** tab.
- Change the Dimensions to about 10m wide, 1m high and 10m deep (X:10, Y:1, Z:10).
- Drag it down to the ground level. This will be our floor.

## Add a Ball

- Start by standing on the floor entity and create a [**Sphere Entity**](../box-and-sphere-entities).
- Change the Color of the sphere to something other than red.

### Set "Collisions" to Active

- Scroll down and find the check box for **Collisions will Move**, put a check in there.
- The entity is now set to respond to collisions.

## Applying the Sound URL to the Entity

The URL to a sound is set in the entity's properties as the **Collision Sound URL** . The sound must be a *.wav* file, uncompressed, 48Khz, 16 bit. The URL can be either a web address, or an ATP reference to the assets on this domain server.

For this example, copy the following link and paste it into the space for Collision Sound URL:

```
http://s3.amazonaws.com/hifi-public/sounds/dice/diceCollide.wav
```

## Making the Ball Move

Find Gravity and change the value for **Y** to *-5*. This will cause it to fall a little more slowly than things on earth (use -9.8 if you want that). Gravity is in units of meters/second^2^.

As soon as you click off, the gravity will cause the ball to fall downwards. When it hits the floor, it should stop or bounce a little and the sound should play.

You can just keep picking it up and dropping it to hear the sound again.

You can duplicate the balls by ALT + Drag and then knock them into each other to get more sounds.

## Resources

- [Create a playable piano](../../archives/create-a-playable-piano)

