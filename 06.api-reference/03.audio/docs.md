---
title: 'Audio'
taxonomy:
    category:
        - docs
---


## Audio.playSound()

`Audio.playSound()` triggers playback of an audio file by sending it to the audio mixer. To use this API to play (aka "inject") a sound, the sound file must have been previously loaded using [SoundCache.getSound()](https://wiki.highfidelity.com/wiki/SoundCache.getSound()).

If the client is not connected to an audio mixer, no sound will be played unless the localOnly option is invoked (see below.)

### Function

`Audio.playSound (Sound*, AudioInjectorOptions)`

### Arguments

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

### Returns

**object: AudioInjector**

### Examples

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



## Audio Device API

The exposed AudioDevice class.

### Functions

function **AudioDevice.setInputDevice** (deviceName: string): bool

function **AudioDevice.setOutputDevice** (deviceName: string): bool

function **AudioDevice.getInputDevice** (): string

function **AudioDevice.getOutputDevice** (): string

function **AudioDevice.getDefaultInputDevice** (): string

function **AudioDevice.getDefaultOutputDevice** (): string

function **AudioDevice.getInputDevices** (): string[]

function **AudioDevice.getOutputDevices** (): string[]

function **AudioDevice.getInputVolume** (): float

function **AudioDevice.setInputVolume** (volume: float)

function **AudioDevice.setReverb** (reverb: bool)

function **AudioDevice.setReverbOptions** (options: AudioEffectOptions)

function **AudioDevice.getMuted** (): bool

function **AudioDevice.toggleMute** ()

### Signals

signal **AudioDevice.setInputDevice** (deviceName: string): bool

signal **AudioDevice.setOutputDevice** (deviceName: string): bool

signal **AudioDevice.getInputDevice** (): string

signal **AudioDevice.getOutputDevice** (): string

signal **AudioDevice.getDefaultInputDevice** (): string

signal **AudioDevice.getDefaultOutputDevice** (): string

signal **AudioDevice.getInputDevices** (): string[]

signal **AudioDevice.getOutputDevices** (): string[]

signal **AudioDevice.getInputVolume** (): float

signal **AudioDevice.setInputVolume** (volume: float)

signal **AudioDevice.setReverb** (reverb: bool)

signal **AudioDevice.setReverbOptions** (options: AudioEffectOptions)

signal **AudioDevice.getMuted** (): bool

signal **AudioDevice.toggleMute** ()

### Function Descriptions

#### function setInputDevice (deviceName: string): bool

Sets the audio input device to the specified deviceName. Returns true if set successfully; false otherwise.

#### function setOutputDevice (deviceName: string): bool

Sets the audio output device to the specified deviceName. Returns true if set successfully; false otherwise.

#### function getInputDevice (): string

Gets the name of the current audio input device in text format.

#### function getOutputDevice (): string

Gets the name of the current audio output device in text format.

#### function getDefaultInputDevice (): string

Gets the name of the default audio input device in text format.

#### function getDefaultOutputDevice (): string

Gets the name of the default audio output device in text format.

#### function getInputDevices (): string[]

Gets a list of the supported audio input devices in text array format.

#### function getOutputDevices (): string[]

Gets a list of the supported audio output devices in text array format.

#### function getInputVolume (): float

Gets the current input volume. Returns a float between 0.0f and 1.0f.

#### function setInputVolume (volume: float)

Set the current input volume to a float between 0.0f and 1.0f.

#### function setReverb (reverb: bool)

Enables or disables reverb.

#### function setReverbOptions (options: AudioEffectOptions)
#### function setReverbOptions (options: AudioEffectOptions)

Sets the reverb options, which includes the following floats: bandwidth, preDelay, lateDelay, reverbTime, earlyDiffusion, lateDiffusion, roomSize, density, bassMult, bassFreq, highGain, highFreq, modRate, modDepth, earlyGain, lateGain, earlyMixLeft, earlyMixRight, lateMixLeft, lateMixRight, wetDryMix

#### function getMuted (): bool

Returns whether or not the user's input deviceis currently muted.

#### function toggleMute ()

Toggles the muting of the user's input device.

### Signal Descriptions

#### signal muteToggled ()

Emitted when the user's input device's muting status is toggled.

#### signal deviceChanged ()

Emitted when either the user's input OR output device is changed.



## Audio Functions API

### Contents

 [[hide](https://wiki.highfidelity.com/wiki/Audio_Functions_API#)] 

- [1bool isInjectorPlaying(AudioInjector injector)](https://wiki.highfidelity.com/wiki/Audio_Functions_API#bool_isInjectorPlaying.28AudioInjector_injector.29)
- [2Example: Using isInjectorPlaying()](https://wiki.highfidelity.com/wiki/Audio_Functions_API#Example:_Using_isInjectorPlaying.28.29)
- [3AudioInjector playSound(Sound *sound*, AudioInjectorOptions *injectorOptions*)](https://wiki.highfidelity.com/wiki/Audio_Functions_API#AudioInjector_playSound.28Sound_sound.2C_AudioInjectorOptions_injectorOptions.29)
- [4Example: Using playSound](https://wiki.highfidelity.com/wiki/Audio_Functions_API#Example:_Using_playSound)
- [5void stopInjector(AudioInjector injector)](https://wiki.highfidelity.com/wiki/Audio_Functions_API#void_stopInjector.28AudioInjector_injector.29)
- [6Example: Using stopInjector()](https://wiki.highfidelity.com/wiki/Audio_Functions_API#Example:_Using_stopInjector.28.29)

### bool isInjectorPlaying(AudioInjector injector)

Description: `isInjectorPlaying` returns a boolean value describing the play status of a given AudioInjector.

### Example: Using isInjectorPlaying()

Take a look at this snippet of `playSoundLoop.js`:

```
 1 //starting the sound
 2 soundPlaying = Audio.playSound(sound, options);
 3 print("Started sound looping.");
 4 Script.update.disconnect(maybePlaySound);
 5 }
 6 }
 7 
 8 function scriptEnding() {
 9 
10 //if the injector is playing a sound, Audio.isInjectorPlaying(soundPlaying) returns `true`
11 if (Audio.isInjectorPlaying(soundPlaying)) {
12 Audio.stopInjector(soundPlaying);
13 Entities.deleteEntity(ball);
14 print("Stopped sound.");
15 }

```

### AudioInjector playSound(Sound *sound*, AudioInjectorOptions *injectorOptions*)

`playSound` takes a `Sound` object and an `AudioInjectorOptions` object as inputs, returns an `AudioInjector` object, and initiates the playback of the intended `Sound` with the given options.

### Example: Using playSound

Take a look at this snippet of `playSoundLoop.js`:

```
 1 Script.include("libraries/globals.js");
 2 
 3 //loading the URL into the Sound object
 4 var sound = new Sound(HIFI_PUBLIC_BUCKET + "sounds/Guitars/Guitar+-+Nylon+A.raw");
 5 
 6 var soundPlaying = false;
 7 var options = new AudioInjectionOptions();
 8 options.position = Vec3.sum(Camera.getPosition(), Quat.getFront(MyAvatar.orientation));
 9 options.volume = 0.5;
10 options.loop = true;
11 var playing = false;
12 var ball = false;
13 
14 function maybePlaySound(deltaTime) {
15 
16 ...
17 
18 //playing the sound
19 soundPlaying = Audio.playSound(sound, options);
20 print("Started sound looping.");
21 Script.update.disconnect(maybePlaySound);
22 }
23 }
24 
25 ...

```

### void stopInjector(AudioInjector injector)

Description: `stopInjector` stops the playback of a given AudioInjector.

### Example: Using stopInjector()

Take a look at this snippet of `playSoundLoop.js`:

```
 1 function maybePlaySound(deltaTime) {
 2 
 3 ...
 4 //starting the sound
 5 soundPlaying = Audio.playSound(sound, options);
 6 print("Started sound looping.");
 7 Script.update.disconnect(maybePlaySound);
 8 }
 9 }
10 
11 function scriptEnding() {
12 if (Audio.isInjectorPlaying(soundPlaying)) {
13 
14 //stopping the sound
15 Audio.stopInjector(soundPlaying);
16 Entities.deleteEntity(ball);
17 print("Stopped sound.");
18 }
19 
20 ...
```