---
title: 'Audio'
taxonomy:
    category:
        - docs
---

* [Properties](#properties)
* [Methods](#methods)
* [Events](#events)



| Properties <a id="properties"></a> | Type    | Description                              |
| ---------------------------------- | ------- | ---------------------------------------- |
| `Audio.muted`                        | Boolean | Determines if the audio is muted or not. |
| `Audio.noiseReduction`               | Boolean | Turn noise reduction on or off.          |
| `Audio.inputVolume`                  | Float   |                                          |
| `Audio.inputLevel`                   | Float   | Read only value, to get the input level. |
| `Audio.context`                      | String  |                                          |







| Methods <a id="methods"></a>             |
| ---------------------------------------- |
| [`Audio.playSound(SharedSoundPonumberer)`](#method-1) |
| `Audio.playSound(SharedSoundPonumberer,AudioInjectorOptions)` |
| `Audio.setStereoInput(bool)`               |
| [`Audio.stopInjector(soundPlaying)`](#method-3) |
| [`Audio.isInjectorPlaying(soundPlaying)`](#method-2) |
| `Audio.devices.deleteLater()`              |
| `Audio.devices.input.canFetchMore(QModelIndex)` |
| `Audio.devices.input.columnCount()`        |
| `Audio.devices.input.columnCount(QModelIndex)` |
| `Audio.devices.input.columnsAboutToBeInserted(QModelIndex,number,number)` |
|`Audio.devices.input.columnsAboutToBeInserted(QModelIndex,number,number)`|
|`Audio.devices.input.columnsAboutToBeMoved(QModelIndex,number,number,QModelIndex,number)`|
|`Audio.devices.input.columnsAboutToBeRemoved(QModelIndex,number,number)`|
|`Audio.devices.input.columnsInserted(QModelIndex,number,number)`|
|`Audio.devices.input.columnsMoved(QModelIndex,number,number,QModelIndex,number)`|
|`Audio.devices.input.columnsRemoved(QModelIndex,number,number)`|
|`Audio.devices.input.data(QModelIndex)`|
|`Audio.devices.input.data(QModelIndex,number)`|
|`Audio.devices.input.dataChanged(QModelIndex,QModelIndex)`|
|`Audio.devices.input.dataChanged(QModelIndex,QModelIndex,QVector<number>)`|
|`Audio.devices.input.deviceChanged(QAudioDeviceInfo)`|
|`Audio.devices.input.fetchMore(QModelIndex)`|
|`Audio.devices.input.flags(QModelIndex)`|
|`Audio.devices.input.hasChildren()`|
|`Audio.devices.input.hasChildren(QModelIndex)`|
|`Audio.devices.input.hasIndex(number,number)`|
|`Audio.devices.input.hasIndex(number,number,QModelIndex)`|
|`Audio.devices.input.headerData(number,Qt::Orientation)`|
|`Audio.devices.input.headerData(number,Qt::Orientation,number)`|
|`Audio.devices.input.headerDataChanged(Qt::Orientation,number,number)`|
|`Audio.devices.input.index(number,number)`|
|`Audio.devices.input.index(number,number,QModelIndex)`|
|`Audio.devices.input.layoutAboutToBeChanged()`|
|`Audio.devices.input.layoutAboutToBeChanged(QList<QPersistentModelIndex>)`|
|`Audio.devices.input.layoutAboutToBeChanged(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHnumber)`|
|`Audio.devices.input.layoutChanged()`|
|`Audio.devices.input.layoutChanged(QList<QPersistentModelIndex>)`|
|`Audio.devices.input.layoutChanged(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHnumber)`|
|`Audio.devices.input.match(QModelIndex,number,QVariant)`|
|`Audio.devices.input.match(QModelIndex,number,QVariant,number)`|
|`Audio.devices.input.match(QModelIndex,number,QVariant,number,Qt::MatchFlags)`|
|`Audio.devices.input.modelAboutToBeReset()`|
|`Audio.devices.input.modelReset()`|
|`Audio.devices.input.objectNameChanged(QString)`|
|`Audio.devices.input.parent(QModelIndex)`|
|`Audio.devices.input.resetnumberernalData()`|
|`Audio.devices.input.revert()`|
|`Audio.devices.input.rowCount()`|
|`Audio.devices.input.rowCount(QModelIndex)`|
|`Audio.devices.input.rowsAboutToBeInserted(QModelIndex,number,number)`|
|`Audio.devices.input.rowsAboutToBeMoved(QModelIndex,number,number,QModelIndex,number)`|
|`Audio.devices.input.rowsAboutToBeRemoved(QModelIndex,number,number)`|
|`Audio.devices.input.rowsInserted(QModelIndex,number,number)`|
|`Audio.devices.input.rowsMoved(QModelIndex,number,number,QModelIndex,number)`|
|`Audio.devices.input.rowsRemoved(QModelIndex,number,number)`|
|`Audio.devices.input.setData(QModelIndex,QVariant)`|
|`Audio.devices.input.setData(QModelIndex,QVariant,number)`|
|`Audio.devices.input.sibling(number,number,QModelIndex)`|
|`Audio.devices.input.submit()`|
|`Audio.devices.nop()`|
|`Audio.devices.objectNameChanged(QString)`|
|`Audio.devices.output.canFetchMore(QModelIndex)`|
|`Audio.devices.output.columnCount()`|
|`Audio.devices.output.columnCount(QModelIndex)`|
|`Audio.devices.output.columnsAboutToBeInserted(QModelIndex,number,number)`|
|`Audio.devices.output.columnsAboutToBeMoved(QModelIndex,number,number,QModelIndex,number)`|
|`Audio.devices.output.columnsAboutToBeRemoved(QModelIndex,number,number)`|
|`Audio.devices.output.columnsInserted(QModelIndex,number,number)`|
|`Audio.devices.output.columnsMoved(QModelIndex,number,number,QModelIndex,number)`|
|`Audio.devices.output.columnsRemoved(QModelIndex,number,number)`|
|`Audio.devices.output.data(QModelIndex)`|
|`Audio.devices.output.data(QModelIndex,number)`|
|`Audio.devices.output.dataChanged(QModelIndex,QModelIndex)`|
|`Audio.devices.output.dataChanged(QModelIndex,QModelIndex,QVector<number>)`|
|`Audio.devices.output.deleteLater()`|
|`Audio.devices.output.deviceChanged(QAudioDeviceInfo)`|
|`Audio.devices.output.fetchMore(QModelIndex)`|
|`Audio.devices.output.flags(QModelIndex)`|
|`Audio.devices.output.hasChildren()`|
|`Audio.devices.output.hasChildren(QModelIndex)`|
|`Audio.devices.output.hasIndex(number,number)`|
|`Audio.devices.output.hasIndex(number,number,QModelIndex)`|
|`Audio.devices.output.headerData(number,Qt::Orientation)`|
|`Audio.devices.output.headerData(number,Qt::Orientation,number)`|
|`Audio.devices.output.headerDataChanged(Qt::Orientation,number,number)`|
|`Audio.devices.output.index(number,number)`|
|`Audio.devices.output.index(number,number,QModelIndex)`|
|`Audio.devices.output.layoutAboutToBeChanged()`|
|`Audio.devices.output.layoutAboutToBeChanged(QList<QPersistentModelIndex>)`|
|`Audio.devices.output.layoutAboutToBeChanged(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHnumber)`|
|`Audio.devices.output.layoutChanged()`|
|`Audio.devices.output.layoutChanged(QList<QPersistentModelIndex>)`|
|`Audio.devices.output.layoutChanged(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHnumber)`|
|`Audio.devices.output.match(QModelIndex,number,QVariant)`|
|`Audio.devices.output.match(QModelIndex,number,QVariant,number)`|
|`Audio.devices.output.match(QModelIndex,number,QVariant,number,Qt::MatchFlags)`|
|`Audio.devices.output.modelAboutToBeReset()`|
|`Audio.devices.output.modelReset()`|
|`Audio.devices.output.parent(QModelIndex)`|
|`Audio.devices.output.resetnumberernalData()`|
|`Audio.devices.output.revert()`|
|`Audio.devices.output.rowCount()`|
|`Audio.devices.output.rowCount(QModelIndex)`|
|`Audio.devices.output.rowsAboutToBeInserted(QModelIndex,number,number)`|
|`Audio.devices.output.rowsAboutToBeMoved(QModelIndex,number,number,QModelIndex,number)`|
|`Audio.devices.output.rowsAboutToBeRemoved(QModelIndex,number,number)`|
|`Audio.devices.output.rowsInserted(QModelIndex,number,number)`|
|`Audio.devices.output.rowsMoved(QModelIndex,number,number,QModelIndex,number)`|
|`Audio.devices.output.rowsRemoved(QModelIndex,number,number)`|
|`Audio.devices.output.setData(QModelIndex,QVariant)`|
|`Audio.devices.output.setData(QModelIndex,QVariant,number)`|
|`Audio.devices.output.sibling(number,number,QModelIndex)`|
|`Audio.devices.output.submit()`|
|`Audio.noiseReductionChanged(bool)`|
|`Audio.nop()`|
|`Audio.playSystemSound(SharedSoundPonumberer,QVector3D)`|
|`Audio.setInputDevice(QAudioDeviceInfo)`|
|`Audio.setOutputDevice(QAudioDeviceInfo)`|
|`Audio.setReverb(bool)`|
|`AudioEffectOptions`|
|`Audio.setReverbOptions(const AudioEffectOptions*)`|







| Events      <a id="events"></a>  |
| -------------------------------- |
|`Audio.disconnected()`|
|`Audio.environmentMuted()`|
|`Audio.inputReceived(QByteArray)`|
|`Audio.mutedByMixer()`|
|`Audio.noiseGateClosed()`|
|`Audio.noiseGateOpened()`|
|`Audio.receivedFirstPacket()`|
|`Audio.contextChanged(QString)`|
|`Audio.onContextChanged()`|
|`Audio.inputLevelChanged(float)`|
|`Audio.inputVolumeChanged(float)`|
|`Audio.mutedChanged(bool)`|




## Audio.playSound() <a id="method-1"></a>

`Audio.playSound()` triggers playback of an audio file by sending it to the audio mixer. To use this API to play (aka "inject") a sound, the sound file must have been previously loaded using SoundCache.getSound().

Currently, we support the following audio formats:
- 16-bit uncompressed WAV at any sample rate, with 1, 2, or 4 (ambisonic) channels.

If the client is not connected to an audio mixer, no sound will be played unless the localOnly option is invoked (see below.)

### Function

`Audio.playSound (Sound*, AudioInjectorOptions)`

### Arguments

**Sound** The sound object returned from SoundCache.getSound().

Below are options you can pass to `Audio.playSound()`:

| Option         | Description                              | Values                                   | Default                    |
| -------------- | ---------------------------------------- | ---------------------------------------- | -------------------------- |
| Volume         | Playback volume of sound                 | from 0.0 to 1.0                          | 1.0                        |
| Position       | Playback position of sound               | Valid positional coordinates within the domain | { x: 0, y: 0, z: 0 }       |
| Orientation    | Playback orientation of sound            | As above                                 | { x: 0, y: 0, z: 0, w: 1 } |
| Loop           | Repeats sound automatically              | Boolean                                  | False                      |
| Stereo         | File is in stereo format                 | Boolean                                  | False                      |
| localOnly      | injects audio locally rather than via the audio mixer | Boolean                                  | False                      |
| secondOffset   | starting playback ponumber within the soundclip, in seconds | Any number >= 0                          | 0                          |
| ignorePenumbra | don't subject this sound to the positional lowpass penumbra filter | Boolean                                  | False                      |

'Stereo' can be overridden by a WAV header or by including ".stereo" in a RAW filename (e.g., Thunderclap.stereo.raw)

Note that 'Position', 'Orientation' and 'IgnorePenumbra' have no effect when 'localOnly' is true. Local sounds are played without any spatialization.

### Returns

**object: AudioInjector**

### Examples

To play a sound loaded numbero the SoundCache as "GunshotSound":

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

```java
injector.restart(); // stops playback and restarts from beginning - useful for repeated sounds 
injector.stop() // stops playback immediately
injector.isPlaying(); // true if still playing
injector.getLoudness(); // returns the loudness in last frame as a value between 0 and 1.0
injector.finished.connect(function();    // your injector is done playing
```

##  Audio.isInjectorPlaying() <a id="method-2"></a>

Description: `isInjectorPlaying` returns a boolean value describing the play status of a given AudioInjector.

### Example: Using isInjectorPlaying()

Take a look at this snippet of `playSoundLoop.js`:

```java
//starting the sound
soundPlaying = Audio.playSound(sound, options);
prnumber("Started sound looping.");
Script.update.disconnect(maybePlaySound);
	}
}

function scriptEnding() {

//if the injector is playing a sound, Audio.isInjectorPlaying(soundPlaying) returns `true`
if (Audio.isInjectorPlaying(soundPlaying)) {
Audio.stopInjector(soundPlaying);
Entities.deleteEntity(ball);
prnumber("Stopped sound.");
}

```

## Audio.stopInjector() <a id="method-3"></a>

Description: `stopInjector` stops the playback of a given AudioInjector.

### Example: Using stopInjector()

Take a look at this snippet of `playSoundLoop.js`:

```java
 function maybePlaySound(deltaTime) {
 
 ...
 //starting the sound
 soundPlaying = Audio.playSound(sound, options);
 prnumber("Started sound looping.");
 Script.update.disconnect(maybePlaySound);
 }
 }
 
 function scriptEnding() {
 if (Audio.isInjectorPlaying(soundPlaying)) {
 
 //stopping the sound
 Audio.stopInjector(soundPlaying);
 Entities.deleteEntity(ball);
 prnumber("Stopped sound.");
 }
 
 ...
```
