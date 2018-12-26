---
title: All About Scripting
taxonomy:
    category: docs
---

*Learn the different script types available in High Fidelity and how they're used.*

##Introduction

High Fidelity uses scripts (written in JavaScript) for a number of applications: creating content, moving your avatar, playing audio at a specific location, putting on a wearable, and much more. A script can range from a single-line  `print("Hello World");` to a full application. 

### Script Types

High Fidelity uses four types of scripts.

| Script Type                              | Description                              | Running the Script                       | Applications                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| Interface Scripts                        | You can choose to run this type of script when Interface is running. | You can choose to run an Interface script through the [Running Scripts](../all-about-scripting/run-scripts) dialog. These run on your machine as long as you run Interface, and restart with Interface.  The results (such as when your script changes the color of a box) can be seen by everyone in your domain, but the script itself is running on your local machine. Your Interface will communicate that information to the Entity Server, which will communicate it to whoever is visiting the domain. | Modifying the user experience with new menus, overlays, tweaks, plugins, and extensions. One-time creation tasks. You can also use Interface scripts to customize your own experience of your domain. For example, if you wanted to put a 3D overlay on your domain with a special menu, you would do this with an Interface Script. |
| Avatar Scripts                           | An avatar can have a script attached to it to create a special effect. | [Avatar scripts](avatar-scripts) run automatically when an avatar is worn and stop when it is removed. Avatar scripts only run on the client that is wearing the avatar.  | Give avatars unique effects, such as flowing hair. |
| Client Entity Scripts                    | An entity can have a script attached to it. Such a script runs on Agents (clients) in the domain. These scripts call 'preload' whenever a user encounters the entity for the first time, and 'unload' when the user leaves. | A [Client Entity Script](../all-about-scripting//attach-entity-scripts/client-entity-scripts) lives as long as the entity it is attached to. A user who triggers this type of script in Interface is running an instance of the script on their machine. For example, someone might create an entity with a magic button in their domain and create a client entity script for that button. Any visitor can click on that button and it will do whatever the client entity script specifies—perhaps it's a portal that transports the user's avatar somewhere else. Everybody who clicks on that button runs the client entity script, but the script itself runs locally on each person's own Interface. | Using a variety of callback methods to hook into actions like when an avatar enters/leaves, clicks, or grabs, or when entities collide with each other. |
| Server Entity Scripts                    | An entity can have a server script attached to it. Such scripts run on the Entity Script Server and run with or without the presence of a user. | [Server Entity Scripts](../all-about-scripting//attach-entity-scripts/server-entity-scripts) live as long as as the entity is it attached to. Unlike client entity scripts, only one instance of a server entity script is run by the Entity Script Server. A different instance of each server entity script is run by the Entity Script Server for each entity that uses it. As server entity scripts are run only by the Entity Script Server and not by every user who visits your domain, you can write behavior into your script that takes actions in your domain that will be seen and heard at the same time by everyone. | Single server-side script modifications to entities and audio in the domain are done only once and are viewed at the same time by all users (domain clients). |
| Assignment Client Scripts (Persistent Scripts) | Assignment Client (AC) scripts are run in your domain or a domain where you have permissions to run an AC script. An AC script is run on an [assignment client](../../get-started/what-is-high-fidelity/architecture#functions-of-the-assignment-clients) and is not run in the Interface. So even if you are not exploring High Fidelity through Interface, your AC script will keep running until you shut down your domain. | Your [Assignment Client Scripts](../all-about-scripting/assignment-client-scripts)  run while your domain (Sandbox) is running. They stop when the Sandbox is shut down and restart with the Sandbox. You can check your AC scripts and server settings [here](../start-working-in-your-sandbox/server-settings-for-your-domain#scripts). To add an AC script, go to "[http://localhost:40100](http://localhost:40100/)". From the domain server homepage, click on **Scripts** to navigate to the "Persistent Scripts" section. Now simply paste the URL link to your script. Leave the **Pool** field blank for now. Press **+** to add your script, then click **Save and restart**.![](\enter-script-url.png) | Coordinating actions between entities and avatars, having a virtual pet to greet anyone who visits your domain, access control. |



Each Interface and AC script executes in its own thread, isolated from other scripts. With this isolation model, you don’t have to worry about what other scripts are doing. You can include any scripts you want in your own namespace. Entity scripts (client or server) use JavaScript function containment to separate the execution of the multiple entity scripts, which all execute in the same thread.




