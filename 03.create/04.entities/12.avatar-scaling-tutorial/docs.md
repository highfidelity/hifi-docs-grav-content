---
title: Tutorial: Create an Avatar Scaling Button
taxonomy:
    category: docs
---

You can build content in High Fidelity that breaks the laws of physical boundaries (oversized or extremely small). To give any visiting users access to such an experience, you can add an avatar scaling button to your domain. This will help users fit into the spaces you design.

**On This Page:**

- [Prerequisites](#prerequisites)
- [Write an Avatar Scaling Script](#write-an-avatar-scaling-script)
- [Create an Entity to Use as a Button](#create-an-entity-to-use-as-a-button)


## Prerequisites

Consider getting familiar with the following concepts before starting this tutorial:

- [Create New Entities](../create-entities)
- [Change How Entities Look](../entity-appearance)
- [Define an Entity's Behavior](../entity-behavior)
- [Get Started with Scripting](../../../script/get-started-with-scripting)
- [Client Entity Scripts](../../../script/client-entity-scripts)
- [Write Your Own Scripts](../../../script/write-scripts)

## Write an Avatar Scaling Script

The avatar scaling script you use will:

+ be used to shrink or increase the size of an avatar. 
+ be an entity script that has to be attached to the entity that is the button. 
+ define what happens when a user clicks on or triggers the entity. 

In this tutorial, we've used [shrink-avatar.js](https://hifi-scripting-101.glitch.me/entity-client-script-shrink-avatar.js), the avatar scaling script used to shrink an avatar down to a tiny size. You can use this script or [write a script](../../../script/write-scripts) to suit your needs.

The shrink-avatar.js script we've used:
+ uses High Fidelity's [JavaScript API](../../../api-reference) to determine when a user clicks with the mouse or triggers the entity using hand controllers.
+ scales down the avatar to a tenth of its original size.

## Create an Entity to Use as a Button

Any entity you create to be used as a button has to be [triggerable](../entity-behavior#set-an-entity-to-trigger-scripts) so that the script can detect when you use your hand controllers to trigger an event.

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. [Create an entity](../create-entities) to be used as a button. This can be a 3D model or a box or sphere entity.
3. Go to the 'Properties' tab and scroll down to 'Behavior'.
4. Next to 'Script', paste the script URL. In this case, it is '[shrink-avatar.js](https://hifi-scripting-101.glitch.me/entity-client-script-shrink-avatar.js)'.
5. Scroll down and ensure that 'Triggerable' is selected.
6. Exit the **Create** Tools app and click or trigger the button to observe your avatar scale down.

**See Also**

- [Create New Entities](../create-entities)
- [Change How Entities Look](../entity-appearance)
- [Define an Entity's Behavior](../entity-behavior)
- [Get Started with Scripting](../../../script/get-started-with-scripting)
- [Client Entity Scripts](../../../script/client-entity-scripts)
- [Write Your Own Scripts](../../../script/write-scripts)
- [Interact with Your Environment](../../../explore/interact-objects)