---
title: 'Sound'
taxonomy:
    category:
        - docs
---



## SoundCache.getSound()

### Function

`SoundCache.getSound (url)`

### Arguments

**url: QUrl **: The URL of the sound file being retrieved

### Returns

**object: Sound**

### Examples

To set up a sound for playback, ask the SoundCache for it first. This will return a sound object. For example:

```
var GunshotSound = SoundCache.getSound(HIFI_PUBLIC_BUCKET + "sounds/Lobby/gunshot.wav")
```

The API accepts a mono, stereo, or 4-channel 16-bit WAV file at any sample rate. A sample rate other than 24 KHz will be internally resampled, so all audio effectively plays back at a 24 KHz sample rate. 48 KHz RAW files are also supported. Because raw files do not include a header, you have the option to name them as ".stereo.raw" to indicate that the file is stereo.

A 4-channel WAV file must be first-order Ambisonic in the ambiX (ACN/SN3D) format.

You can check if a sound object has already been cached with the 'downloaded' property

```
if (GunshotSound.downloaded)
```

