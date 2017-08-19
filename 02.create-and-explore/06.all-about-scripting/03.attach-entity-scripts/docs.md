---
title: Attach Entity Scripts
taxonomy:
    category: docs
---

One way to create interactive content is to **attach scripts to entities**. You have the option to attach a client script, a server script, or both a client and server script to each individual entity.

The following pages show how you might create the two types of entity scripts:

- [Creating Client Entity Scripts](./client-entity-scripts)
- [Creating Server Entity Scripts](./server-entity-scripts)

Once you have a prepared entity script (server or client), you will want to attach it to an entity.

Entities have properties that define the entity's appearance (color, size, position etc.) and behavior (animation, collision, interaction, etc.).

There are two properties you can use to attach scripts to an entity. The `script` property and the `serverScripts` property.

Use the `script` property to attach a client entity script. Use the `serverScripts` property to attach a server entity script. You can attach both a client script and a server script to an entity.

Like other entity properties, these properties can be [set using the "Entity Properties" tab](https://wiki.highfidelity.com/wiki/Edit_Mode#Edit_Entity_Properties) in the entity editing system's *Tools* panel.

![](\enter-entity-script-url.png)
Both the `script` property and the `serverScripts` property accept a URL as input. You can put the code in a file, and specify the URL of the file as the `script` or `serverScripts` property of the entity.

For the `script` property used for client entity scripts, the URL contents must be available to every Interface that visits the domain, so it must be a public http(s) URL, or an [Asset Server (ATP)](https://wiki.highfidelity.com/wiki/Asset_Server_(ATP)) URL for this domain, but not a file URL.

For the `serverScripts` property used for server entity scripts, you may use a file URL to point to a file on the machine the Entity Script Server is running on.

*NOTE: The serverScripts property is plural to lay the foundation for multiple server scripts per entity, but currently only accepts a single URL as input.*

The `script` property additionally accepts a string as input where you can directly insert the code to use for the entity client script of that entity.
