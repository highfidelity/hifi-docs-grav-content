---
title: Motion Capture (Using Vive Trackers)
taxonomy:
    category: docs 
---

*Learn how you can set-up motion capture (mocap) in High Fidelity using Vive trackers.*

## Overview

This page guides you through the process of configuring and calibrating Vive trackers for motion capture (mocap) in High Fidelity. Even if you only have one HTC Vive Tracker, you can use it to control your Avatar or even attach it to an object like a guitar!


## Introduction

You will need to purchase [Vive trackers](https://www.vive.com/us/vive-tracker/) to set-up a mocap system for yourself in High Fidelity. If you bought a Vive Pro, you can use up to 4 lighthouses for better tracking, other wise the Vive with the standard two light houses will also provide good support.  Depending on what kind of motion capture you’re looking for, the number of trackers needed differs. 

- Only feet: 2 Vive trackers.
- Feet and hips: 3 Vive trackers.
- Feet, hips and chest: 4 Vive trackers.
- Feet, hips, and shoulders: 5 Vive trackers.

If you are a performer and need the use of your hands instead of the Vive controllers, two extra trackers are needed for your wrists.
If you need to track your head but not use a HMD, then you also need one tracker for your head.

To use the trackers, you need to strap them on to different parts of your body. You can purchase straps of different lengths for different purposes from here:

* [Foot and Shoulder Straps](https://rebuffreality.com/products/trackstrap)
* Hip Strap: Drill a hole in the back of a thick leather belt and attach the puck using a 1/4" screw. 
* [Chest Strap](https://www.amazon.com/gp/product/B00PQ6B5SY/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1)
* [Hand Straps](https://www.amazon.com/SublimeWare-Degree-Rotation-Session-SJ4000/dp/B01H18TY2S/ref=sr_1_2?ie=UTF8&qid=1492804865&sr=8-2&keywords=go+pro+arm+mount)
* [Head Straps](https://www.amazon.com/EEEKit-Kidizoom-Action-EK7000-DBPOWER/dp/B019SXPF3G/ref=sr_1_1?ie=UTF8&qid=1492795518&sr=8-1&keywords=EEEKit+Head+Strap+Mount+for+VTech+Kidizoom+Kids+Cam%2C)

![img](tracker-placement.jpg)

> > > For information on how to pair the trackers, refer to https://www.vive.com/eu/support/accessory/category_howto/pairing-vive-tracker.html

### Configure Your Mocap System

Once you’ve purchased the number of trackers and the straps for your requirements:

- Make sure your Vive headset, hand controllers, and Vive trackers are properly connected to SteamVR.

- Securely attach the Vive trackers to your body as shown in the image.

- If you are in HMD mode, pull up your tablet or if you are in Desktop mode go to **Settings > Controls > Calibration **.

  ![img](https://hifi-content.s3.amazonaws.com/milad/ROLC/Organize/O_Projects/Hifi/Documentation/settings.png)

- Set your tracker configuration to one of the following options:
  - Head: Track your head with a head tracker instead of the HMD.
        - Offset: Adjust the offset of the position of the tracker from your avatar’s head joint.
  - Hands: Track your hands with hand trackers instead of the hand controllers.
         - Offset: Adjust the offset of the position of the trackers from your avatar's hand joints. 
  - Feet: Track your feet with two trackers. 
  - Hips: You'll need to have two feet trackers and one hip tracker to track your hips (3 total). 
  - Chest: You can track your chest using one chest tracker, one hip tracker and two feet trackers (4 total).
  - Shoulders: Track your shoulders with two trackers on your shoulders, one tracker for your hip, and two for your feet (5 total).

    ![img](https://hifi-content.s3.amazonaws.com/milad/ROLC/Organize/O_Projects/Hifi/Documentation/vive_settings.png)

- Click "Apply and Calibrate".

- When you setup your Vive and choose which way to point the arrow as your reference, it is important that you face this same way during the calibration.  This will be fixed in a future version.  If you can not remember which way that arrow was, you can press the Vive System Menu Button and look on the ground for a marker.  This should be facing the same way the initial arrow you created during the Vive setup is facing.  This is important to make sure your joints are orientated correctly.

- Stand in a T-Pose until the timer counts down to zero:
  - Feet together
  - Arms out
  - Head looking straight ahead. 

    ![img](calibrate.PNG)

- Check to see that each tracker is tracking the corresponding joint on the avatar.

> > >  Use HTC Vive Devices in Desktop Mode: Check this box if you have a head tracker and want to use your trackers in desktop mode without having to wear your Vive headset.


### Another Way to Calibrate Your Mocap System

Once you’ve applied your desired configuration, you can use a shortcut to calibrate your trackers without having to bring up your tablet again. To calibrate on the fly, stand in a T-Pose and hold the following four buttons together for 1 second: 

- Left trigger
- Right trigger
- Left menu button
- Right menu button

Check if you’ve calibrated your trackers by moving the corresponding joint and determine if your avatar moves the same joint. Check to see that each tracker now tracks its corresponding joint on the avatar.

You can press the same buttons together for a second to remove your calibration from the trackers.



## Troubleshooting & Common Issues

* Calibration failed!

  * Are all your trackers properly connected in SteamVR?
  * Have you selected the correct configuration in your tablet and do you have enough number of trackers to support that configuration?
  * If you are performing and not in HMD, did you select to use the Vive in desktop mode?
  * Are any of the trackers blinking?  If so, they may need to be paired again.
  * Do you have the correct number of dongles plugged in to your computer.  You will need one dongle per tracker.  If you are performing with all 7, then you may need a USB hub to handle them.

* My sensor is jiggling a lot!

  * Make sure the straps on the sensor are tightened.

* My sensor keeps losing tracking.

  * If it’s the hip puck, is your shirt is tucked in and not covering the puck? Also make sure your headphone cord isn’t covering the puck. 
  * Can the base stations clearly see the tracker?
  * Is the signal from the base station conflicting with another Vive setup nearby?
  * Are you clear of reflective surfaces nearby? (ie. picture frames, whiteboards, shiny tables).
  * Is the lighting consistent across the room (minimal outdoor lighting)?
  * Try restarting SteamVR
  
Final note: 
Remember to charge your trackers when you aren't using them so that you don't have to deal with a low battery tracker negatively impacting your performance. 
