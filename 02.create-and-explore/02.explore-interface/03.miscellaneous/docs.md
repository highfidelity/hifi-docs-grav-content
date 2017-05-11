---
title: 'Miscellaneous'
taxonomy:
    category:
        - docs
---

Welcome! Using Interface, you can visit and explore shared virtual worlds created with High Fidelity. This document will take you on a tour of a High Fidelity domain called Playa. The goal is to get you familiar with using your High Fidelity display and configuring the view for your best experience.

This document assumes that you [have the right equipment](https://wiki.highfidelity.com/wiki/System_Requirements) and have [Interface installed](https://wiki.highfidelity.com/wiki/Interface). It also assumes that Sandbox (the High Fidelity software for managing domains) is either not installed or if installed currently not running. However, you can experiment with many of the view features explained below with Sandbox running. You can find out more about Sandbox [here](https://wiki.highfidelity.com/wiki/Sandbox). If you'd like to follow along with the steps below, you may need to quit Sandbox. To do so, look for Sandbox (the High Fidelity icon) in your system tray (Windows) or in the top menu bar (OS X), and from the menu there, select, **Quit**.

## Launch Interface

You can find Interface in your **Start Menu** (Windows) or in your **Applications** folder (OS X) in a **High Fidelity** folder.

When you first launch Interface, you should see the **dev-welcome** environment.

[![Interface-launch.png](https://wiki.highfidelity.com/images/thumb/6/61/Interface-launch.png/500px-Interface-launch.png)](https://wiki.highfidelity.com/wiki/File:Interface-launch.png)

You'll find various mini-tutorials here. The next section covers how to setup the best view.

## Configure Your Display and View Mode

High Fidelity virtual worlds can be viewed on a traditional monitor or for a more immersive experience, they can be viewed on a head mounted display (HMD). You also have options for the camera view mode.

### View Modes

In Interface the view can be changed between a number of modes:

**First Person**, **Third Person**, **Mirror**, and the special case **Mini Mirror**.

These modes affect the relative position of the camera to your avatar. (**Independent Mode** and **Entity Mode** are also available but are used mostly by [content creators](https://wiki.highfidelity.com/wiki/Create_content) and are not particularly useful when exploring.)

You can change mode by clicking "View" from the menu bar and selecting your choice of viewing position.

By default, the view mode is **First Person.** If you would like to see what you look like, select **View > Third Person** or **View > Mirror** mode.

[![Thirdperson.png](https://wiki.highfidelity.com/images/thumb/a/a6/Thirdperson.png/500px-Thirdperson.png)](https://wiki.highfidelity.com/wiki/File:Thirdperson.png)

[![Mirror.png](https://wiki.highfidelity.com/images/thumb/b/b8/Mirror.png/500px-Mirror.png)](https://wiki.highfidelity.com/wiki/File:Mirror.png)

In the images above, the blue being of light is you. This is the default avatar. Later in this tutorial we'll show you how to change your avatar.

Unless otherwise noted, this tutorial assumes that you are in first person mode: (**View > First Person**).

If you want to keep an eye on your avatar, select **View > Mini Mirror**. This creates a small window with a mirror view of you in the upper left hand of your view.

![img](https://wiki.highfidelity.com/images/thumb/3/3b/Minimirror.png/500px-Minimirror.png)

### Display Setting - Traditional Monitor or HMD

By default, even if you have a head mounted display (HMD) plugged in and ready to go, your display will be set to **Desktop**.

If you have an HMD (Oculus Rift, HTC Vive) you want to use, you will need to select the device from the Display menu.

**Display > Oculus Rift** or **Display > Vive**.

*Note: Before selecting your HMD, you should ensure that the appropriate (Oculus or SteamVR for Vive) software is running.*

You will need to click through your device's storefront to access the High Fidelity domain when you initially change the display.

If you don't see your display option, check to see that your HMD is on. If it isn't, you may need to turn it on and restart Interface for it to appear.

After you have switched to HMD display, it is time to put on the HMD. The view will be paused until you press any key.

[![Riftview.png](https://wiki.highfidelity.com/images/thumb/0/07/Riftview.png/500px-Riftview.png)](https://wiki.highfidelity.com/wiki/File:Riftview.png)

If you want to return to using a traditional monitor setup, select **Display > Desktop**.

*Note: You can access the Interface menu in-world by right-clicking on the mouse. You can also toggle the mouse between 2D mode and 3D mode to make selections from the menu. To toggle the mouse, press \**Esc**.*

## Configure Your Controllers

The next step is to ensure that Interface is configured to use the connected controllers. To maximize immersion, High Fidelity virtual worlds are designed to be explored with hand controllers. So although navigation and limited interaction can be accomplished with a keyboard/mouse, fully interacting with in-world objects in High Fidelity requires a hand controller.

### Razer Hydra or HTC Vive Hand Controllers

If you are using a Razer Hydra or HTC Vive hand controller, enable it using these steps from the top menu.

1. Select **Settings > Advanced Menus**.
2. Select **Avatar > Input Devices > Sixense** for the Hydra or **Avatar > Input Devices > Vive** for the Vive.

*Note: Vive users should have SteamVR running before starting Interface.*

Once enabled you should be able to use the hand controller to navigate and grab objects. If it is still not working, select **Edit > Running Scripts** or press **Ctrl + J** to open the *Running Scripts* panel and in the *Running Scripts* panel, check to see that `handControllerGrab.js` script is running. It should be running by default.

### Leap Motion Orion

If you are using the Leap Motion with an HMD, enable it using these steps:

1. Select **Settings > Developer Menus**.
2. Select **Developer > Hands > Leap Motion > Leap Motion on HMD**.
3. Select **Edit > Running Scripts** or press **Ctrl + J** to open the *Running Scripts* panel.
4. In the *Running Scripts* panel, navigate to the `leapHands.js` script (`controllers/leap`) and click on it to highlight it.
5. Click **Load** to run the script.

If the Leap is detecting your hands, when you look down you will see the avatar's hands move in sync with your own.

### XBOX One Controller

If you are using an XBOX One controller, enable it using these steps:

1. Select **Settings > Advanced Menus**.
2. Select **Avatar > Input Devices > SDL2**.

*Note: If you are using Mac OS, and are having issues with using an XBOX controller, see Xbox 360 Controller (OS X) for more information.*

## Navigate

With your controllers configured and display and view mode selected, it is time to explore!

### Look Around

To look around, if you are using a head mounted display (HMD), all you need to do is look!

If you don't have an HMD, or you want to look further to the left or right than is comfortable with your HMD, you can rotate the view using another connected controller. To rotate the view:

- **Keyboard**: Use the left and right arrows or **A** and **D** keys to rotate the view to the left or right.
- **Mouse**: Click and hold the right mouse button and move the mouse to rotate the view in any direction.
- **Razer Hydra**: Use the right joystick to rotate view to the left and right.
- **HTC Vive**: Use the right thumbstick to rotate view to the left and right.
- **XBOX One Controller**: Use the right joystick to rotate the view to the left or right.

For comfort sake, as much as possible, we recommend using the HMD to look around rather than using other controllers to change the view.

### Move Around

It is no fun standing in one place. Time to really explore! To move around:

- **Keyboard**: Use the arrow keys or the **W**, **A**, **S**, and **D** keys to move around on the ground plane. You can fly using the **E** and **C** keys.
- **Razer Hydra**: Use the left joystick to move around the ground plane. Use the right joystick to fly up and down and rotate.
- **HTC Vive**: Use the left thumbstick to move around the ground plane. Use the right thumbstick to fly up and down and rotate.
- **XBOX One Controller**: Use the left joystick to move around the ground plane. Use the right joystick to fly up and down and rotate.

If you are using a head mounted display (HMD), you will move in the direction that you are looking. Again, for comfort sake, as much as possible, we recommend using the HMD to turn rather than using other controllers to rotate your position.

Spend as much time as you like wandering around. You may even see other user's avatars. The next section will cover how you can say "Hello."

## Talk

Voice chat is available throughout all High Fidelity virtual worlds, with uncompressed 16-bit audio spatialized in real-time based on your location. If you have a working microphone and headset, you can talk to other avatars within audio range. A good set of boom-mic'd headphones will radically improve the experience for you, and for those listening to you. To use voice chat, you'll need to configure Interface to use your audio device.

### Configure Interface for Your Audio Device

To configure Interface for your audio device, select **Audio > Devices** and then select the audio devices you want to use from the pull-down menu. The pull-down menu should list your connected audio devices. Be sure to select both input and output devices.

[![Audiodevices-cropped.png](https://wiki.highfidelity.com/images/thumb/6/67/Audiodevices-cropped.png/500px-Audiodevices-cropped.png)](https://wiki.highfidelity.com/wiki/File:Audiodevices-cropped.png)

### Show Audio Meter

To test that your input device is detecting sound, you can use the Interface audio meter.

Select **Audio > Show Level Meter** to display a meter that shows the audio level detected when you speak. Talk into your microphone and if audio is detected you should see the meter change.

![img](https://wiki.highfidelity.com/images/3/3f/Audiodevices-cropped-2.png)

The Audio meter displayed as part of the mini-mirror.

### Mute Microphone

If you don't want to be heard, you can mute your microphone. To mute your microphone, select **Audio > Mute Microphone**, press **Ctrl+M** or click the microphone icon next to the audio meter. When the microphone is muted the icon will be red with a slash through it.

![img](https://wiki.highfidelity.com/images/8/88/Audiomute-cropped.png)

The audio meter with the microphone muted.

## Chat


Text chat is also an option in High Fidelity and can be used by running a script or using a chat application in a web browser. For more information, go [here](https://wiki.highfidelity.com/wiki/Chat).

## Change Your Avatar

To get a good look at your current avatar, switch to a traditional display (**Display > Desktop**) and set the view mode to mirror (**View > Mirror**). Everyone starts out as the default avatar - a sparkly blue being of light and the image below shows what the default avatar looks like.

[![Avatarblue-cropped.png](https://wiki.highfidelity.com/images/thumb/b/bd/Avatarblue-cropped.png/200px-Avatarblue-cropped.png)](https://wiki.highfidelity.com/wiki/File:Avatarblue-cropped.png)

High Fidelity offers a variety of preexisting avatars and changing your avatar is quite simple:

1. Click on the

    

   Market

    

   icon found in your toolbar or tablet.

   ![Toolbar with market highlighted.png](https://wiki.highfidelity.com/images/0/0a/Toolbar_with_market_highlighted.png)

   ​

2. The *MArket* panel appears. Here you'll see various avatars, scripts, games and other objects. Right now, we want to look only at the avatars. (If you decide to [run your own virtual world](https://wiki.highfidelity.com/wiki/Sandbox), these other examples are a good place to start [exploring how to customize your world](https://wiki.highfidelity.com/wiki/Home_domain).)

3. In the top-left of the dialog box, select the

    

   Categories

    

   dropdown and click on

    

   Avatars

    

   to filter the results to only avatars

   [![Market avatars.png](https://wiki.highfidelity.com/images/thumb/a/a4/Market_avatars.png/300px-Market_avatars.png)](https://wiki.highfidelity.com/wiki/File:Market_avatars.png)

4. To change to another avatar, mouse over the **Free** button and click **Get** for the avatar you want to be, or click the whole tile to see more information.

5. You may be asked to agree to terms of use for the avatar. You'll then be asked to confirm that you want to be the new avatar. Click **OK** to confirm.

6. Dismiss the *Market* panel (click the X in the upper right corner) so that it does not block your view, and you'll see that you are now the selected avatar. For example, if you selected the *Tiny Skeleton* avatar, you would now look like the avatar in the image below.

![img](https://wiki.highfidelity.com/images/thumb/b/b0/Skeleton_avatar.png/100px-Skeleton_avatar.png)

You aren't limited to using preexisting avatars. If you have 3D skills and are interested in creating your own avatar, see [create avatars](https://wiki.highfidelity.com/wiki/Create_avatars) for more information.

The avatar you selected will be your avatar no matter which virtual world your are visiting and the next section covers how to get to other virtual worlds.

## Visit Other Virtual Worlds

Using Interface, you can visit other virtual worlds created with High Fidelity. To transport yourself directly from one location to another you can use the navigation bar.

To access the navigation bar, press the **Enter** key, select **Navigate > Show Address Bar** or type **Ctrl+L** and the navigation bar will appear.

[![Navbar-cropped.png](https://wiki.highfidelity.com/images/thumb/e/e0/Navbar-cropped.png/500px-Navbar-cropped.png)](https://wiki.highfidelity.com/wiki/File:Navbar-cropped.png)

You can enter a network address to go to another virtual world, but an easier way is to enter the virtual world's *place name*. A place name is the virtual world's unique name within High Fidelity. For example, the place name for the world you see in this tutorial is **welcome**.

If you have gone to another virtual world, you can return to **welcome** by entering **welcome** into the navigation bar.

[![Navbar-welcome.png](https://wiki.highfidelity.com/images/0/0b/Navbar-welcome.png)](https://wiki.highfidelity.com/wiki/File:Navbar-welcome.png)

Another neat feature of the navigation bar is that you can use it to take you directly to wherever another user is. Simply enter the user's High Fidelity ID preceded by an @ sign. If that user is online and in a virtual world you have permission to enter, you will be transported directly to where they are.

You can also use the navigation bar to explore **Places** and **Snaps** that other users have contributed!

*Note: For this tutorial, it was not necessary to have an account or to log in. However if you want others to be able to reach you by user name, you will need a High Fidelity Account.*

## What Next?

- **Build your own content**




- **Explore scripting**




- **Run your own virtual world**





