---
title: 'Audio Device'
taxonomy:
    category:
        - docs
---


| Properties                     | Type    | Description |
| ------------------------------ | ------- | ----------- |
| AudioDevice.inputAudioDevices  | string  |             |
| AudioDevice.outputAudioDevices | string  |             |
| AudioDevice.muted              | boolean |             |

| Methods                                  |
| ---------------------------------------- |
| [AudioDevice.getDefaultInputDevice()](#method-1)      |
| [AudioDevice.getDefaultOutputDevice()](#method-2)     |
| [AudioDevice.getInputDevice()](#method-3)             |
| [AudioDevice.getInputDevices()](#method-4)            |
| [AudioDevice.getInputVolume()](#method-5)             |
| [AudioDevice.getMuted()](#method-6)                   |
| [AudioDevice.getOutputDevice()](#method-7)            |
| [AudioDevice.getOutputDevices()](#method-8)           |
| [AudioDevice.setInputDevice(QString)](#method-9)      |
| [AudioDevice.setInputVolume(float)](#method-10)        |
| [AudioDevice.setMuted(bool)](#method-11)               |
| [AudioDevice.setOutputDevice(QString)](#method-12)     |
| [AudioDevice.setReverb(bool)](#method-13)              |
| [AudioDevice.setReverbOptions(const AudioEffectOptions*)](#method-14)   |
| AudioDevice.toggleMute()               |


| Events                                   |
| ---------------------------------------- |
| AudioDevice.deviceChanged()              |
| AudioDevice.inputAudioDevicesChanged(QStringList) |
| AudioDevice.mutedChanged(bool)           |
| AudioDevice.muteToggled()                |
| AudioDevice.outputAudioDevicesChanged(QStringList) |


## getDefaultInputDevice () <a id="method-1"></a>

Gets the name of the default audio input device in text format.


## getDefaultOutputDevice () <a id="method-2"></a>

Gets the name of the default audio output device in text format.


## getInputDevice () <a id="method-3"></a>

Gets the name of the current audio input device in text format.


## getInputDevices () <a id="method-4"></a>

Gets a list of the supported audio input devices in text array format.


## getInputVolume () <a id="method-5"></a>

Gets the current input volume. Returns a float between 0.0f and 1.0f.


## getMuted () <a id="method-6"></a>

Returns whether or not the user's input device is currently muted.


## getOutputDevice () <a id="method-7"></a>
 
Gets the name of the current audio output device in text format.


## getOutputDevices () <a id="method-8"></a>

Gets a list of the supported audio output devices in text array format.


## setInputDevice () <a id="method-9"></a>

Sets the audio input device to the specified deviceName. Returns true if set successfully, false otherwise.


## setInputVolume () <a id="method-10"></a>

Set the current input volume to a float between 0.0f and 1.0f.


## setOutputDevice () <a id="method-11"></a>

Sets the audio output device to the specified deviceName. Returns true if set successfully; false otherwise.


## setReverb () <a id="method-12"></a>

Enables or disables reverb.


## setReverbOptions () <a id="method-13"></a>

Sets the reverb options, which includes the following floats: bandwidth, preDelay, lateDelay, reverbTime, earlyDiffusion, lateDiffusion, roomSize, density, bassMult, bassFreq, highGain, highFreq, modRate, modDepth, earlyGain, lateGain, earlyMixLeft, earlyMixRight, lateMixLeft, lateMixRight, wetDryMix


## toggleMute () <a id="method-14"></a>

Toggles the muting of the user's input device.


## signal muteToggled ()

Emitted when the user's input device's muting status is toggled.


## signal deviceChanged ()

Emitted when either the user's input OR output device is changed.