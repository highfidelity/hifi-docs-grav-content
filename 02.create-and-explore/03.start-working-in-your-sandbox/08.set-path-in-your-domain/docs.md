---
title: Set the Path for Your Domain
taxonomy:
    category: docs
---

You can define where a user will appear and which direction they face when they enter your domain by setting the **Path** in either the [Server Settings](https://wiki.highfidelity.com/wiki/Server_Settings) or by setting the **Path** property when [managing your place names](https://wiki.highfidelity.com/wiki/Place_Names).

A path is defined in this format: `/x,y,z`. For example, `/23,42,125`.

The `x`, `y`, and `z` values are the coordinates of the user's position. These values can be approximated manually, or by placing an avatar in the desired location and copying its path.

To find your avatar's path in High Fidelity Interface, complete these steps:

1. Navigate to the location of which you wish to find the path.
2. Select **File > Copy Path to Clipboard**.

With the path copied to your clipboard, you may now paste the path into the **Path** field in the edit view of a place name ( Go to [Place Names](https://metaverse.highfidelity.com/user/places), then click on the pencil next to the place name to get to the edit view) or into the **Path** field in the server settings for Places/Paths.

Here is an example result of **Copy Path to Clipboard**:

`/8242.93,978.761,3068.2/-1.14104e-05,-0.1286,-8.75948e-05,0.991697`

This path is a bit more complex than `x`, `y`, and `z` as it contains both position and orientation values. This type of path is tedious to approximate and enter manually, making **Copy Path to Clipboard** the more practical method of defining a path.