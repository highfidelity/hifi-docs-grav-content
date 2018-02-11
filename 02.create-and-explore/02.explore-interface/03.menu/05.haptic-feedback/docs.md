---
title: Activate Haptic Feedback
taxonomy:
    category: docs
---

If a controller supports haptic feedback, you can activate it using the following methods.

If you trigger a pulse while another one is already in progress, the strength and duration of the one that would finish last are honored.

## Custom Pulse

```
Controller.triggerHapticPulse(strength, duration, hand)

```

The three parameters here are:
- strength: a float between 0 and 1
- duration: a number of milliseconds
- hand:
  - 0 for left
  - 1 for right
  - 2 for both

## Short Pulse

This method automatically trigger pulses of 250 ms

```
Controller.triggerShortHapticPulse(strength, hand)

```

The two parameters here are:
- strength: a float between 0 and 1
- hand: 0 for left, 1 for right, 2 for both

## Specific Devices

The methods above will trigger pulses on all devices that can make them. If you'd like to specify the precise devices that will receive pulses, use the following methods:

```
Controller.triggerHapticPulseOnDevice(deviceID,strength, duration, hand)

Controller.triggerShortHapticPulseOnDevice(deviceID, strength, hand)
```
