---
title: All About Scripting
taxonomy:
    category: docs
---

*Get an overview of Scripting in High Fidelity.*

## Overview

High Fidelity scripts use the JavaScript syntax and can be anything from a single-line `print("Hello World");` to a full application. Scripts can be used to create content that can be seen by everyone in the same virtual world as you or by you alone. For example, scripts can be used to build structures, move your avatar, shoot guns, or play audio at a specific location. Scripts can also be used to make changes to your individual environment: create custom UI elements to display information that only you can see or play music only you can hear. This page explains the four types of scripts you can use in High Fidelity and how they work.

## Script Types

High Fidelity uses four types of scripts. They are:

| Script Type           | Description                              | How / Where to run                       | What to use it for                       |
| --------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| Interface Scripts     | Each user can elect to run a script while they have the Interface app open. | These run only on your machine for as long as you run Interface, and restart when you open Interface again. See [Running scripts](../all-about-scripting/run-scripts). | Modifying the user experience - new menus, overlays, tweaks, plugins, and extensions. One time creation tasks. |
| Client Entity Scripts | Each entity (model, cube, sphere) can have a client script attached to it. These scripts run on Agents (clients) in the domain. These scripts call 'preload' whenever a user encounters the entity for the first time, and 'unload' when the user leaves. | A different instance of each client entity script runs for each entity that uses it for each Interface client in the domain. See [Creating Client Entity Scripts](../all-about-scripting//attach-entity-scripts/client-entity-scripts). | Use a variety of callback methods to hook into actions like when an avatar enters/leaves, clicks, or grabs. Or when entities collide with each other. |
| Server Entity Scripts | Each entity (model, cube, sphere) can have a server script attached to it. These scripts call 'preload' when the Entity Script Server starts the script, and 'unload' when it stops the script. The scripting engine in the Entity Script Server has a subset of the full Interface functionality. | Unlike the client entity scripts above, only one instance of a server entity script is run by the Entity Script Server. A different instance of each server entity script is run by the Entity Script Server for each entity that uses it. See [Creating Server Entity Scripts](../all-about-scripting//attach-entity-scripts/server-entity-scripts). | Single server-side script so modifications to entities and audio in the domain are done only once and are viewed at the same time by all domain clients. |
| Assignment Scripts    | Each domain can run scripts. These scripts have access to a subset of the full Interface functionality. They are a great way to coordinate. | These run only on a Sandbox [Agent](../../get-started/what-is-high-fidelity/architecture#functions-of-the-assignment-clients) for as long as the domain is running, and restart when you run Sandbox again. See [Server_Settings#Scripts](../start-working-in-your-sandbox/server-settings-for-your-domain#scripts). | Coordinating actions between [entities](../entities) and avatars, keeping state about your world. Access control, autonomous agents.: does not have full physics system. |

Each Interface and assignment script executes in its own thread, isolated from other scripts. With this isolation model, you don’t have to worry about what other scripts are doing. You can include whatever scripts you want in your own namespace. Entity scripts (client or server) use JavaScript function containment to separate the execution of the multiple entity scripts, which all execute in the same thread.

## Interface Scripts

Interface scripts are run by you using the [Running scripts](/run-scripts) dialog.

The results (such as when your script changes the color of a box) are seen by everyone in your domain, but the script itself is running on your local machine running Interface. Your Interface will communicate that information to the Entity Server, which will communicate it to whoever is visiting the domain. When you quit Interface, so quit your Interface scripts. If an Interface script is animating a flock of birds, the birds will stop animating when you shut Interface down.

You can also use Interface scripts to customize your own experience of your domain. For example, if you wanted to put a 3D overlay on your domain with a special menu, you would do this with an Interface Script.

## Client Entity Scripts

Client entity scripts are tightly coupled with an instance of an entity, and live only as long as the entity itself does. So, for example, you can have a click handler that responds to clicks on that entity by anyone who clicks on it.

For example, someone might create an entity with a magic button in their domain and create a client entity script for that button. Any visitor can click on that button and it will do whatever the client entity script specifies—perhaps it's a portal that transports the user's avatar somewhere else. Everybody who clicks on that button runs the client entity script, but the script itself runs locally on each person's own Interface.

See [Creating Client Entity Scripts](/attach-entity-scripts/client-entity-scripts).

## Server Entity Scripts

Like client entity scripts, server entity scripts are also tightly coupled with the instance of an entity. They will run only as long as the entity exists and does not have its server script URL cleared or changed. Unlike client entity scripts, server entity scripts do not require people present in the domain to be run. This means you can script behavior that will take place even when nobody is visiting your domain. As long as your domain is running and has an assigned Entity Script Server, it will continue to run your server entity scripts.

Because server entity scripts are run only by the entity script server and not by every Interface client that visits your domain, you can write behavior into your script that takes actions in your domain that will be seen and heard at the same time by all of the viewing clients.

See [Creating Server Entity Scripts](attach-entity-scripts/server-entity-scripts).

## Assignment Client Scripts

Assignment Client scripts, also called AC scripts or “persistent scripts” run on an assignment client connected directly to the domain, so they can do things independent of Interface clients. You might use an AC script to run a virtual pet that interacts with people who visit your domain, or a simulated ecosystem with plants that grow all the time. That domain might be your own installed version of [Sandbox](../start-working-in-your-sandbox), or a domain hosted somewhere else where you have permissions to add assignment client scripts.

The syntax of AC scripts is generally close to that of Interface scripts, but the feature sets are not identical. Likewise, the JavaScript API calls available to AC scripts contain a large subset of the Interface API calls, but not all. For example, Agents are not able to do anything that requires rendering. The [MyAvatar](../../api-reference/myavatar) API calls are not available to AC scripts. But AC scripts can do many of the things that an Interface script can do, and anything related to creating, modifying and deleting entities. For example, even though there is no MyAvatar object, an AC script can create a “NPC” — “non-player character” — such as a bot that has an avatar. An AC script can inject audio to say "Hey, I’m an avatar” and modify position/joints/blendshapes information. To make your agent be visible to others as an avatar, see [Agent](../../get-started/what-is-high-fidelity/architecture#functions-of-the-assignment-clients).

Currently, the [Audio](../../api-reference/audio) utilities are not available to agents unless you set `Agent.isAvatar = true`. If you don't want a visible avatar, specify an invisible avatar model, such as by `Avatar.skeletonModelURL = "http://hifi-content.s3.amazonaws.com/ozan/dev/avatars/invisible_avatar/invisible_avatar.fst"`.

Also, without rendering, there is not normally anything to pull data from the [Entity Server](../../get-started/what-is-high-fidelity/architecture#functions-of-the-assignment-clients) unless you explicitly query for it. For example `Entities.findEntities` will normally produce an empty list, even if there are entities within the specified radius around the position. To get data, use the EntityViewer methods before `findEntities`.

AC scripts run in your domain as long as the Domain Server is running, but Interface scripts only run when you’re running Interface. So if you want a script to be running even when you’re not “in world”, you should make it an AC script. In many cases, you can take an Interface script and make it an AC script just by running it on an Assignment Client.

To add your script, click on the **Settings** button in [Sandbox](../start-working-in-your-sandbox).

![](\menu-settings.png)
Click "Settings"

This will open a web page [http://localhost:40100](http://localhost:40100/). From the domain server homepage click on **Scripts** to navigate to the "Persistent Scripts" section. Now simply paste the URL link to your script. Leave the **Pool** field blank for now. Press **+** to add your script, then click **Save and restart**.

![](\enter-script-url.jpg)

The Domain Server finds the first available Assignment Client and sends it the script to run.

## Summary

If you implement something as an Interface script, it runs only in your application.

If you implement something as a client entity script, there is one instance of the script for each user who invokes it, running on that user's local Interface.

If you implement something as a server entity script, only one instance of the script is executed on the Entity Script Server and the results are communicated (via the Avatar mixer, Audio Mixer, and/or Entity Server) to all Interfaces.

If you implement something as an AC script, the script is executed on an Assignment Client, and the results are communicated (via the Avatar mixer, Audio Mixer, and/or Entity Server) to all Interfaces.
