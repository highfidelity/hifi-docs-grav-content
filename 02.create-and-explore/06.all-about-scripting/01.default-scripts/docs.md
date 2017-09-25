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

| Script              | Description                              | Usage Notes                              |
| ------------------- | ---------------------------------------- | ---------------------------------------- |
| `defaultScripts.js` | Starts all of the default scripts in this chart. | For information on starting and stopping scripts, see: [Running Scripts in Interface](../run-scripts). |

## Available Scripts

In addition to the scripts run when you first launch, High Fidelity also provides a number of additional scripts to help you improve your user experience and provide tools for developing your own content.

| Scripts Folder | Description                              |
| -------------- | ---------------------------------------- |
| `developer`    | The scripts found here were created for internal use / debugging, but are available as advanced developers may find them useful when creating content. Note: These scripts are not "entry-level" and are not guaranteed to work or be documented. This folder may not be available unless the **Settings > Developer Menu** option has been selected. |
| `system`       | Here you will find the scripts run by default. scripts are tested by High Fidelity to ensure that they work together. Making changes to these scripts is not recommended, nor is it easy, as 'administrative' permission is needed to save edits to these files and any changes will be overwritten if an update to Interface is installed. |
| `tutorials`    | Here you will find scripts that provide examples of what you can do using scripting in High Fidelity. For example, the `butterfly.js` script used in the [create butterflies](https://wiki.highfidelity.com/wiki/Create_butterflies) tutorial is found here. |
| `modules`      | To be updated                            |
