---
title: Entity Scripts
taxonomy:
    category: docs
---

##Introduction
You can make content in High Fidelity interactive by attaching scripts to entities. You have the option to attach a client script, a server script, or both a client and server script to each individual entity.

The following pages contain instructions to create:

- [Creating Client Entity Scripts](./client-entity-scripts)
- [Creating Server Entity Scripts](./server-entity-scripts)


An entity's properties define its appearance (color, size, position) and behavior (animation, collision, interaction). You can access these properties through Create mode on your tablet. 

There are two properties you can use to attach scripts to an entity. The `script` property and the `serverScripts` property. Use the `script` property to attach a client entity script. Use the `serverScripts` property to attach a server entity script. 

![](\enter-entity-script-url.png)
Both the `script` property and the `serverScripts` property accept a URL as input. You can put the code in a file, and specify the URL of the file as the `script` or `serverScripts` property of the entity.

For client entity scripts, the URL content must be available to every user who visits the domain. This means the URL should be a public http(s) URL, or an [Asset Server (ATP)](https://wiki.highfidelity.com/wiki/Asset_Server_(ATP)) URL for the domain. It cannot be a file URL. The `script` property also accepts a string as input, allowing you to insert the code directly. 

For server entity scripts, you may use a file URL to point to a file on the machine the Entity Script Server is running on.

>>>>> You can add multiple server scripts per entity, but using only a single file URL.


