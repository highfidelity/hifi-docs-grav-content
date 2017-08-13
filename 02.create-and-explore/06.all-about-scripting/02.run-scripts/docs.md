---
title: 'Run Scripts'
taxonomy:
    category:
        - docs
---

Scripts loaded via Interface are known as *Interface scripts*. Interface scripts; however, are not the only kind of scripts that can be used with High Fidelity. You can find more information about other types of scripts and how to use them in: [Scripts Overview](https://wiki.highfidelity.com/wiki/Scripts_Overview).

## Know Which Scripts Are Currently Running

To see the list of scripts currently running, select **Edit > Running Scripts** or press **Ctrl + J** to open the *Running Scripts* panel.

![](running-scripts-panel.png)

At the top of this panel, there are two buttons: **Reload All** and **Stop All**. Just below those two buttons is the list of currently running scripts. When you first start Interface, it runs one or more default scripts designed to improve the experience, and if you have just started Interface, the scripts you see listed here are probably the default scripts.

Interface remembers which scripts are loaded, so that the next time you start Interface, the same Interface scripts will be running.

## Load and Run a Script

The *Running Scripts* panel can be used to load and run scripts from a URL or from disk. High Fidelity also provides a number of example scripts for you to try out and those are listed in the lower half of the *Running Scripts* panel.

To run a script:

1. Select **Edit > Running Scripts** or press **Ctrl + J** to open the *Running Scripts* panel.
2. Select the script you want to run. To select a script:


1. With the script selected, click **Load** to run the script.

You should now see the script at the top of the *Running Scripts* panel as well as the results of running the script.

### Permission Required to Create/Edit Objects

Each virtual world owner has the ability to restrict who can add or edit entities (High Fidelity objects) in their virtual world. If the script you want to run adds or edits entities and you don't have permission to do so, you won't see any objects created or changed. You will, however, still see the script listed in the *Running Scripts* panel. For example, if you installed [Sandbox](https://wiki.highfidelity.com/wiki/Sandbox) and you are in your [Home](https://wiki.highfidelity.com/wiki/Home_domain) world, if you run the High Fidelity example script `createCow.js` found in the tutorials folder, an animated cow will appear in front of you. However; if you run `createCow.js` while in "Playa" (the world explored in [Visit Virtual Worlds](https://wiki.highfidelity.com/wiki/Explore)), the animated cow will NOT appear. Note that in both cases, you will see the `createCow.js` script listed at the top of the *Running Scripts* list.

## Reload or Stop a Running Script

At any time you can close or restart one or all of the running scripts. To reload or stop scripts, select **Edit > Running Scripts** or press **Ctrl + J** to open the *Running Scripts* panel, and then do one of the following:

- To reload all running scripts, click the **Reload All** button at the top of the *Running Scripts* panel.
- To reload a specific script, click the circular arrow next to the script in the currently running scripts list.
- To stop all running scripts, click the **Stop All** button at the top of the *Running Scripts* panel.
- To stop a specific script, click the X next to the script in the currently running scripts list.

## Get Started Writing Your Own Scripts

To get started writing your own scripts, first read [create content](https://wiki.highfidelity.com/wiki/Create_content) to learn how to set up your development environment. This document covers where script assets need to be located for scripts to use them.

For the scripts themselves, High Fidelity uses the JavaScript syntax and High Fidelity provides a robust [JavaScript API](https://wiki.highfidelity.com/wiki/Category:JavaScript_API). If you plan to share your code with the community, we recommend following the [Coding Standards](https://wiki.highfidelity.com/wiki/Coding_Standards).

To write scripts, you can use your favorite JavaScript editor. The [create butterflies](https://wiki.highfidelity.com/wiki/Create_butterflies) tutorial uses the example script, butterfly.js, to show you how to run and edit scripts using the script editor.
