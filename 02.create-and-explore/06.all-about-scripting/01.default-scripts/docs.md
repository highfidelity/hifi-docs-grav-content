---
title: Default Scripts
taxonomy:
    category: docs
---

*Learn about default scripts in High Fidelity.*

## Overview

The High Fidelity Interface comes with a collection of **default scripts** designed to improve your experience as a user and provide you with tools you need to be a High Fidelity developer. Some of these scripts are run by default, others are available to you to run as needed.

## View Running and Available Scripts

To see the list of scripts currently running or available, select **Edit > Running Scripts** or press **Ctrl + J** to open the *Running Scripts* panel.

![](\running-scripts.png)

Just below the **Reload All** and **Remove All** buttons is the list of currently running scripts. When you first start Interface, it runs a number of default scripts designed to improve the experience, and if you have just started Interface, the scripts you see listed here are the default scripts. 

Below the running scripts, you will see a file browser that shows the available scripts. High Fidelity provides a number of additional scripts to help you either improve your user experience or provide tools for developing your own content. 

For more information about how to run scripts in Interface, see [Running Scripts in Interface](../run-scripts).

## Default Scripts

The following chart lists the scripts run by default and provides a brief description of what each script does.

**This table needs to be updated.**

| Script                     | Description                              | Usage Notes                              |
| -------------------------- | ---------------------------------------- | ---------------------------------------- |
| `progress.js`              | Displays a progress download indicator when downloads are in progress. | To view the download indicator, you have to download something. It will appear as a progress bar at the bottom center of Interface. |
| `grab.js`                  | Allows you to grab moveable entities.    | To grab entities in-world.               |
| `users.js`                 | Allows you to see who is online. It also allows you control your visibility - visible to everyone, your friends, or no one. | Click on People in your tablet to view the people and your connections online. |
| `handControllerGrab.js`    | Allows you to grab moveable entities with a hand controller (Razer Hydra, HTC Vive, etc.). It works for either near or far objects. | To grab entities in-world.               |
| `notifications.js`         | Generates notifications.                 | See: [Manage notifications](../../explore-interface/menu/manage-notifications). |
| `dialTone.js`              | Makes a sound when you connect or disconnect from the server. |                                          |
| `defaultScripts.js`        | Starts all of the default scripts in this chart. | For information on starting and stopping scripts, see: [Running Scripts in Interface](../run-scripts). |
| `squeezeHands.js`          | Drives the animation of the hands based on hand controllers. |                                          |
| `edit.js`                  | Provides a user interface for adding and editing *entities* (objects in High Fidelity are called entities) using your mouse or trackpad. | See: [Create Mode](../../entities/create-mode). |
| `handControllerPointer.js` | Allows you to control the "mouse" using a hand controller. |                                          |
| `away.js`                  | Puts your avatar into a kneeling pose and mutes your microphone when you remove the HMD (Oculus Rift, Vive, etc.). |                                          |
| `examples.js`              | Provides access to a library of examples (Avatars, Entities, Scripts, etc.) that you can download. |                                          |
| `selectAudioDevice.js`     | Edits the **Audio** menu, allowing you to easily select your audio input and output devices. |                                          |

## Available Scripts

In addition to the scripts run when you first launch, High Fidelity also provides a number of additional scripts to help you improve your user experience and provide tools for developing your own content.

| Scripts Folder | Description                              |
| -------------- | ---------------------------------------- |
| `developer`    | The scripts found here were created for internal use / debugging, but are available as advanced developers may find them useful when creating content.Note: These scripts are not "entry-level" and are not guaranteed to work or be documented.This folder may not be available unless the **Settings > Developer Menu** option has been selected. |
| `system`       | Here you will find the scripts run by default. scripts are tested by High Fidelity to ensure that they work together. Making changes to these scripts is not recommended, nor is it easy, as 'administrative' permission is needed to to save edits to these files and any changes will be overwritten if an update to Interface is installed. |
| `tutorials`    | Here you will find scripts that provide examples of what you can do using scripting in High Fidelity. For example, the `butterfly.js` script used in the [create butterflies](https://wiki.highfidelity.com/wiki/Create_butterflies) tutorial is found here. |
| `modules`      | To be updated                            |


