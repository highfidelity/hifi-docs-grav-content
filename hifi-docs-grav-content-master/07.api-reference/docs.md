---
title: 'API Reference'
taxonomy:
    category:
        - docs
---

# Audio.playSound()

`Audio.playSound()` triggers playback of an audio file by sending it to the audio mixer. To use this API to play (aka "inject") a sound, the sound file must have been previously loaded using [SoundCache.getSound()](https://wiki.highfidelity.com/wiki/SoundCache.getSound()).

If the client is not connected to an audio mixer, no sound will be played unless the localOnly option is invoked (see below.)

## Function

`Audio.playSound (Sound*, AudioInjectorOptions)`

## Arguments

**Sound\*** The sound object returned from [SoundCache.getSound()](https://wiki.highfidelity.com/wiki/SoundCache.getSound()).

Below are options you can pass to `Audio.playSound()`:

| Option         | Description                              | Values                                   | Default                    |
| -------------- | ---------------------------------------- | ---------------------------------------- | -------------------------- |
| Volume         | Playback volume of sound                 | from 0.0 to 1.0                          | 1.0                        |
| Position       | Playback position of sound               | Valid positional coordinates within the domain | { x: 0, y: 0, z: 0 }       |
| Orientation    | Playback orientation of sound            | As above                                 | { x: 0, y: 0, z: 0, w: 1 } |
| Loop           | Repeats sound automatically              | Boolean                                  | False                      |
| Stereo         | File is in stereo format                 | Boolean                                  | False                      |
| localOnly      | injects audio locally rather than via the audio mixer | Boolean                                  | False                      |
| secondOffset   | starting playback point within the soundclip, in seconds | Any number >= 0                          | 0                          |
| ignorePenumbra | don't subject this sound to the positional lowpass penumbra filter | Boolean                                  | False                      |

'Stereo' can be overridden by a WAV header or by including ".stereo" in a RAW filename (e.g., Thunderclap.stereo.raw)

Note that 'Position', 'Orientation' and 'IgnorePenumbra' have no effect when 'localOnly' is true. Local sounds are played without any spatialization.

## Returns

**object: AudioInjector**

## Examples

To play a sound loaded into the SoundCache as "GunshotSound":

```
var injector = Audio.playSound(GunshotSound);

```

This will inject the sound by sending it to the audio mixer. The object returned from a call to Audio.playSound is an 'AudioInjector'. While it is running you can change the options above via the property '.options'. To modify the injector so that the sound plays from a position in the domain with coordinates of x: 10, y: 20, z: 30:h

```
injector.options = { position: { x: 10, y: 20, z: 30 } }

```

You can also pass options to Audio.playSound initially with the same name-value pairs.

```
var options = { loop: true, position: { x: 10, y: 20, z: 30 } }
var injector = Audio.playSound(options);

```

There are a number of methods you can call on the 'AudioInjector' object to control the playback and get information about its current state.

```
injector.restart(); // stops playback and restarts from beginning - useful for repeated sounds 
injector.stop() // stops playback immediately
injector.isPlaying(); // true if still playing
injector.getLoudness(); // returns the loudness in last frame as a value between 0 and 1.0
injector.finished.connect(function();    // your injector is done playing
```





##Camera API

In High Fidelity there is a single camera that provides the main view for the user. This camera can be controlled via scripting using the Camera API. (There is also a mini mirror-view camera, but it is not exposed to the scripting interface.) This document covers the [Camera Properties](https://wiki.highfidelity.com/wiki/Camera_API_Overview#Camera_Properties) and [Camera Modes](https://wiki.highfidelity.com/wiki/Camera_API_Overview#Camera_Modes) and provides a brief overview of how to [script camera movement](https://wiki.highfidelity.com/wiki/Camera_API_Overview#Scripting_Camera_Movement).


## Methods

| Method           | Description                              |
| ---------------- | ---------------------------------------- |
| `computePickRay` | Compute a {PickRay} based on the current camera configuration and the position x,y on the screen. |
| `keepLookingAt`  | Set the camera to continue looking at position `position`. Only works while in `independent` camera mode. |
| `lookAt`         | Set the camera to look at position `position`. Only works while in `independent` camera mode. |
| `stopLookingAt`  | Stops the camera from continually looking at a position that was set with `keepLookingAt` |

## Properties

| `position`     | Vec3     | The position of the camera.              |
| -------------- | -------- | ---------------------------------------- |
| `orientation`  | Quat     | The orientation of the camera.           |
| `mode`         | string   | The current camera mode.                 |
| `cameraEntity` | EntityID | The position and rotation properties of the entity specified by this ID are then used as the camera's position and orientation. Only works when mode is "entity". |
| `frustum`      | Object   | The frustum of the camera.               |

## Camera Modes

Camera modes affect the relative position of the camera to your avatar as well as the default controls for camera movement. The camera can be in one of the following modes:

| Mode                 | String         | Description                              |
| -------------------- | -------------- | ---------------------------------------- |
| **First Person**     | "first person" | The camera is positioned such that you have the same view as the avatar and the camera moves and rotates with the avatar. |
| **Third Person**     | "third person" | The camera is positioned such that you have a view from just behind the avatar. The camera moves and rotates with the avatar. |
| **Mirror**           | "mirror"       | The camera is positioned such that you are looking directly at the avatar. The camera moves and rotates with the avatar. |
| **Independent Mode** | "independent"  | The camera's position and rotation don't change when using the default avatar controls but can be set via scripting to any position or rotation of your choosing. |
| **Entity Mode**      | "entity"       | The camera's position and rotation are set to be the same as the entity's, effectively letting you follow it. |

### Changing the Camera Mode

The camera mode can be changed by:

- Setting the mode property, for example `Camera.mode = "first person"`.
- Using the [setModeString()](https://wiki.highfidelity.com/wiki/SetModeString()) function.
- Selecting **View** from the Interface menus, and then the mode you want to use: **First Person**, **Third Person**, **Mirror**, **Independent Mode** or **Entity Mode**.

## Scripting Camera Movement

For the camera movement to be scripted, the camera must be set to **Independent Mode** or **Entity Mode**.

If the camera is in **Independent Mode**, you can set the camera's position and orientation to that of your choosing by:

- Setting the position and orientation properties directly, for example: `Camera.position = { x: 0, y: 4, z: 0 }`
- Using the [setOrientation()](https://wiki.highfidelity.com/wiki/SetOrientation()) and [setPosition()](https://wiki.highfidelity.com/wiki/SetPosition()) functions to set the orientation and position.
- Using [lookAt()](https://wiki.highfidelity.com/wiki/LookAt()) or [keepLookingAt()](https://wiki.highfidelity.com/wiki/KeepLookingAt()) to specify a point the camera should focus on. You can set the camera to look at a particular point using [lookAt()](https://wiki.highfidelity.com/wiki/LookAt()) or to continuously look at a particular point using [keepLookingAt()](https://wiki.highfidelity.com/wiki/KeepLookingAt()). If you have used [keepLookingAt()](https://wiki.highfidelity.com/wiki/KeepLookingAt()), to stop the camera from pointing at the specified point, use [stopLooking()](https://wiki.highfidelity.com/wiki/StopLooking()).

If the camera is in **Entity Mode**, you can set the camera's position and orientation to that of a specified entity by:

- Setting the `cameraEntity` property to an entity ID. You can use `setCameraEntity()` to set the `cameraEntity` property to a specified [EntityItemID](https://wiki.highfidelity.com/wiki/EntityItemID). The position and rotation properties of the entity specified by that ID are then used as the camera's position and orientation. For example you could use this to jump between particular viewpoints in a scene by placing an entity in the scene at each viewpoint, and then using a script to change the viewpoint by setting the `cameraEntity` to the ID of the entity at each viewpoint. You can use [getCameraEntity()](https://wiki.highfidelity.com/wiki/GetCameraEntity()) to get the current value of the `cameraEntity` property.