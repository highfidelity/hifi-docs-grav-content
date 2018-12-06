---
title: 'Get Started with Scripting'
taxonomy:
  category: docs
---

## Introduction to Scripting

High Fidelity provides a number of tools to help you customize a domain. Using these tools, you can

- Add, modify, or delete objects (entities).
- Customize and control the behavior of entities, domains, and your avatar. 
- Create apps that have specific functions, such as the Record app. 

The [Create app](../../create-and-explore/entities/create-mode) is an easy UI based tool in the Tablet that lets you add, modify, and delete different types of entities. But you can also do that and more by scripting in High Fidelity! 

### Scripting in High Fidelity

High Fidelity's scripts are written in JavaScript. There are [four types of scripts](../../create-and-explore/all-about-scripting) used:

- Interface Scripts: These are scripts that run as long as you have Interface running. Some applications are modifying the user experience with new menus, overlays, tweaks, plugins, and extensions, or one-time creation tasks.
- Client Entity Scripts: This script is always attached to an entity. If you trigger this type of script, you will be running an instance of it on your local machine. With these scripts, you can customize what happens when a user encounters an entity. An example is a cube scripted to make your avatar dance when you touch it. 
- Server Entity Scripts: This script is attached to an entity and does not require a user to trigger it. These scripts control the behavior of entities for all users in a domain.  
- Assignment Client Scripts: These scrips coordinate the actions between entities and avatars and run as long as your domain is running. This means that these scripts continue to run even when you shut down Interface and are directly connected to your domain (Sandbox).

## Write and Execute Your Own Scripts

Most of the scripts you write will be Interface scripts or Client Entity Scripts. You can write your scripts in an external editor of your choice. 

With your text editor open, you can now view and modify scripts in your domain or attached to various entities. To start, we’ll do a basic ‘Hello, World’:

1. Type `print("Hello, World");` into your text editor's window.
2. Save your script as testScript.js on your computer. 
3. On your tablet, go to **Menu > Settings** and enable both Advanced and Developer menus.
4. In the developer menu select Script Log (HMD Friendly).
5. Go to **Menu > Edit > Running Scripts...**.
6. In the Running Scripts screen/window, click on **From Disk**.
7. Your tablet will now display your local system's directory. You can find your script file and click on **Open**.
8. You will see your text printed in the Script Log window which is titled 'Debug Window'. Your script will continue running until you stop it.

Instead of using the **Create** app to add a cube entity, let's use a script. Replace your `print(“Hello, World”)` in testScript.js with with the following example:

```
// Getting your position in the domain, so that the cube is spawned in front of you. 
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
var properties = {
    type: "Box",
    name: "ScriptBox",
    position: position,
    color: { red: 0, green: 0, blue: 155 }
};
var Ent = Entities.addEntity(properties);
print("Entity added");

```

A few things are happening in this script to get us familiar with scripting in High Fidelity. First, we’re accessing some data from our avatar `(MyAvatar.position, MyAvatar.orientation)` to figure out where to place our newly generated cube. Next, we create an entity based on our customized properties' specifications (we do type, name, position, and color, but you could also set additional properties for your entity depending on the complexity of your components). Finally, we save a reference to the Entity and place it in our world, then print our debug line to confirm everything is running smoothly.

Go to **Menu > Edit > Open and Run Script** and load testScript.js to see your cube appear!

