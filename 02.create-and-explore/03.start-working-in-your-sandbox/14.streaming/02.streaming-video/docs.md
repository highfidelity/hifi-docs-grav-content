---
title: Streaming Video to High Fidelity
taxonomy:
    category: docs
---

## Overview

This page shows you how to stream video to High Fidelity using Screenleap.

## Screenleap
Screenleap is an external service for Windows that allows you to share your whole screen, an application window, or a screen section to the rest of the world. We use it because it WORKS with the current web entity system for High Fidelity, which can be unreliable. With Screenleap, everyone sees the exact same video image in sync, no matter how late they come into the domain. Latency is typically less than milliseconds.

Screenleap **does not stream audio**. Follow the instructions [here](https://docs.highfidelity.com/create-and-explore/start-working-in-your-sandbox/streaming/streaming-audio) to stream audio in High Fidelity.

## Using Screenleap to Stream Video
1. Make an account on [screenleap.com](http://screenleap.com) and login.
2. Click on Broadcast Screen and follow the instructions to download and install the Screenleap app. You will see it in the bottom right, at your system tray.
3. Right click the green Screenleap icon and choose START BROADCAST (not start screen share).   You will be given the option to stream your entire screen, a window, or a box on your screen that you can define by dragging and stretching. Paste the URL into the web entity on which you wish to stream

## Troubleshooting
+If your Screenleap video rate is too low, it may be that the bandwidth is unable to keep up with the video. To fix this, you can scale down your video player to be a small window, and then make the Broadcast Screen Area box small to only accommodate that area. This will cut down reduce the necessary bandwith and increase frame rate. The tradeoff is lower resolution video. 
+If your Screenleap video resolution is too low, increase the size of your video player window. This will require more bandwidth, and may cause your video to have lower frame rate.


