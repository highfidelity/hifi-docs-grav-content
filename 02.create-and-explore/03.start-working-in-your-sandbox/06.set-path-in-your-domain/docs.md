---
title: Set the Path for Your Domain
taxonomy:
    category: docs
---

*Set a path for your domain.*

## Overview

Learn how to set a path in your domain that will dictate where a user will appear and which direction they'll face when entering your domain. 

## Introduction

Define where a user will appear and which direction they face when they enter your domain by setting the **Path** in either the [server settings](../server-settings-for-your-domain) or by setting the **Path** property when [managing your place names](../place-names).

A path is defined in this format: `/x,y,z`. For example, a path could be `/23,42,125`.

The `x`, `y`, and `z` values are the coordinates of the user's position. These values can be approximated manually, or by placing an avatar in the desired location and copying its path.

To find your avatar's path in the Interface:

1. Navigate to the location where you wish to find the path.
2. Select **File > Copy Path to Clipboard**.
3. With the path copied to your clipboard, go to [place names](../place-names) and open the edit view. Paste the copied path into the **Path**. You can also access your [server settings](../server-settings-for-your-domain) and paste your path in the **Path** under Places/Paths.

Here is an example of path copied to the clipboard:

`/8242.93,978.761,3068.2/-1.14104e-05,-0.1286,-8.75948e-05,0.991697`

This path is a bit more complex than `x`, `y`, and `z` as it contains both position and orientation values. This type of path is tedious to approximate and enter manually, making **Copy Path to Clipboard** the more practical method of defining a path.