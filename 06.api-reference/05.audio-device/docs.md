---
title: 'Audio Device'
taxonomy:
    category:
        - docs
---


| Properties                              | Type | Description |
| --------------------------------------- | ---- | ----------- |
| AudioDevice.inputAudioDevices.0 string  |      |             |
| AudioDevice.outputAudioDevices.0 string |      |             |

| Methods                                  |
| ---------------------------------------- |
| AudioDevice.getDefaultInputDevice() function |
| AudioDevice.getDefaultOutputDevice() function |
| AudioDevice.getInputDevice() function    |
| AudioDevice.getInputDevices() function   |
| AudioDevice.getInputVolume() function    |
| AudioDevice.getMuted() function          |
| AudioDevice.getOutputDevice() function   |
| AudioDevice.getOutputDevices() function  |
| AudioDevice.setInputDevice(QString) function |
| AudioDevice.setInputVolume(float) function |
| AudioDevice.setMuted(bool) function      |
| AudioDevice.setOutputDevice(QString) function |
| AudioDevice.setReverb(bool) function     |
| AudioDevice.setReverbOptions(const AudioEffectOptions*) function |
| AudioDevice.toggleMute() function        |


| Events                                   |
| ---------------------------------------- |
| AudioDevice.deviceChanged() function     |
| AudioDevice.inputAudioDevicesChanged(QStringList) function |
| AudioDevice.mutedChanged(bool) function  |
| AudioDevice.muteToggled() function       |
| AudioDevice.muted boolean                |
| AudioDevice.outputAudioDevicesChanged(QStringList) function |