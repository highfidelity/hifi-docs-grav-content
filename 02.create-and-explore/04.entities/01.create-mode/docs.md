---
title: 'Create Mode'
taxonomy:
    category:
        - docs
---

*Learn how you can add, edit, and delete entities in Create Mode*

##Overview

The Create Mode button. 

![](\create-mode.PNG)

By pressing the 'Create' button on the HUD bar, you enter or exit a mode where you can add, change, and delete [entities](http://localhost/create-and-explore/entities) (our name for objects you see in the world) if you have the rights to do so. By the way, this button and all the edit functionality described herein is actually created by a script called (`edit.js`), which you can change to create a new kind of editor, or replace with a different one. Edit.js is one of the default scripts run when interface is started.

We are actively looking for help with creating other types of editors, for example ones that more closely match the editing schemes of commonly used 3D model editors.

## Enabling and Disabling Create Mode

### Create Mode

In the toolbar or tablet, you should see a button labeled **create**.

To enable create mode, click the **create** button.

When createing mode is enabled:

- The **create** button changes color to indicate that you are in create mode.

- [Using the mouse moves your camera](https://wiki.highfidelity.com/wiki/Edit_Mode#Using_Camera_Controls_When_in_Edit_Mode) and not your avatar

- The create toolbar icons appear below the **create** icon. These buttons are used to [add entities to the domain](https://wiki.highfidelity.com/wiki/Edit_Mode#Adding_Entities_Using_the_Edit_Toolbar)

- The create Panel appears. [The create Panel can be used to edit entities.](https://wiki.highfidelity.com/wiki/Edit_Mode#Editing_Entities_Using_the_Edit_Panel)

- The mouse or trackpad can be used to edit an entity

  [![Edit mode.png](https://wiki.highfidelity.com/images/thumb/d/d8/Edit_mode.png/500px-Edit_mode.png)](https://wiki.highfidelity.com/wiki/File:Edit_mode.png)

- If using hand controllers, the hand lasers can be used to grab and move the control points to edit an entity.

### Leaving create Mode

When you want to exit create mode, simply click the **create** button to turn it off. The create panel and Toolbar icons disappear and navigation returns to normal.

## Using Camera Controls When in create Mode

When in create Mode, if you try to move your avatar in the conventional way with the mouse it will not work; the mouse moves your camera instead.

- To zoom in and out from the object in view, move the scroll wheel moved backwards and forwards.
- To pan around the object, click the right mouse button and drag left and right.
- To orbit over and under the object, click the right mouse button and drag up and down.

When you want to exit create mode and move around normally, click the **create** button to disable create Mode.

## Adding Entities Using the create Toolbar

When create mode is enabled, a toolbar of icons appears along the lower-center of Interface.

![img](https://wiki.highfidelity.com/images/thumb/d/d7/Toolbar.png/300px-Toolbar.png)

This toolbar contains buttons that allow you to:

- Upload 3D models to add model entities
- Add box, sphere, light, text, web, zone, and particle entities

### Upload 3D Models to Add a Model Entity

The first button, **Model**, allows you to upload a 3D model to create a model entity. Model entities allow you to add complex shapes such as trees, houses, cars, aliens, etc. Anything you can create as an FBX or OBJ model can be added to your domain as a model entity. For more information about where to get 3D models to use in your domain, see [Sourcing 3D Content](https://wiki.highfidelity.com/wiki/3D_models).

**Check the licensing terms before uploading any content** 
Before uploading 3D models, be sure to check the licensing terms. It is your responsibility to ensure that you have sufficient rights to upload the content.

To upload a model, complete the following steps:

1. First, upload the model either to your own asset server (need link here to help on asset server), or to a hosted content server (such as Amazon S3, Dropbox, a VPS server, etc). To be accessible, all files should be in the public_html folder of the host content server (or the public folder of Dropbox). To make it easier, set up a specific folder and upload the models and all associated textures to the folder.

2. Get the full URL of the hosted model (for example,`http://mywebsite.com/myObject.fbx`) and copy it to the clipboard or a notepad.

3. Navigate to approximately where you want the model to appear.

4. Press **P** on the keyboard to enter first-person view. When added, the model will appear in front of you and first-person view will make it easiest to see.

5. Click the Model button. Clicking the Model button opens an input dialog which allows you to specify the web location where the item is hosted.

   [![Uploaddialog.png](https://wiki.highfidelity.com/images/4/4f/Uploaddialog.png)](https://wiki.highfidelity.com/wiki/File:Uploaddialog.png)

6. Enter the full URL of the hosted model (for example,`http://mywebsite.com/myObject.fbx`) and then click **OK**.

The model will appear in front of your avatar.

Once placed in world, you can [create the entity using your mouse or trackpad](https://wiki.highfidelity.com/wiki/create_Mode#Editing_Entities_Using_a_Mouse_or_Trackpad). To edit all entity properties, you can [use the create panel](https://wiki.highfidelity.com/wiki/Edit_Mode#Editing_Entities_Using_the_Edit_Panel).

### Add Entities of Other Types

The next seven buttons are for adding other entity types (box, sphere, light, text, web, zone, and particle).

![img](https://wiki.highfidelity.com/images/c/cb/7entities.png)

The add entity buttons.

To add an entity, complete the following steps:

1. Navigate to approximately where you want the entity to appear.
2. Press **P** on the keyboard to enter first person view. When added, the entity will appear in front of you and first-person view will make it easiest to see.
3. Enable create mode, and then click the entity button for the entity type you want to add.

Entities can be of the following types:

| Entity Type                              | Description                              |
| ---------------------------------------- | ---------------------------------------- |
| [Box](https://wiki.highfidelity.com/wiki/Box_and_Sphere_entities) | Box entities are used to create basic cube shaped entities. These first appear inworld red in color. |
| [Sphere](https://wiki.highfidelity.com/wiki/Box_and_Sphere_entities) | Sphere entities are used to create basic sphere shaped entities.These first appear inworld red in color. |
| [Light](https://wiki.highfidelity.com/wiki/Light_entities) | The Light entity works like a ball or a beam of light and can be used to add local lighting effects and spotlights to an area or spot. |
| [Text](https://wiki.highfidelity.com/wiki/Text_entities) | The Text entity displays text against a flat plane, similar to a whiteboard or blackboard.default text says **"some text"**. |
| [Web](https://wiki.highfidelity.com/wiki/Web_entities) | Web entities display a web page with a specified URL on a plane. |
| [Zone](https://wiki.highfidelity.com/wiki/Zone_entities) | A Zone entity is a 3-dimensional area that allows you to create a custom lighting environment. |
| [Particle](https://wiki.highfidelity.com/wiki/Particle_entities) | A particle system entity that can be used to create dynamic effects such as smoke clouds or falling water. |

*Note: Each entity type has its own set of properties that define the entities appearance and behavior. See the entity specific guides (Box and Sphere entities, Light entities, Particle entities, Text entities, Web entities, and Zone entities) for more information about working with each entity type. For more information about entity properties, see the JavaScript API Entity Properties page.*

After clicking the button, the new entity will appear in front of your avatar. Here for example, a sphere entity has just been added.

![img](https://wiki.highfidelity.com/images/thumb/8/83/Sphereadded.png/800px-Sphereadded.png)

Each entity type has a set of properties that define the entities appearance and behavior. Once placed in world, you can [create the entity using your mouse or trackpad](https://wiki.highfidelity.com/wiki/Edit_Mode#Editing_Entities_Using_a_Mouse_or_Trackpad) or to edit all entity properties, you can [use the create panel](https://wiki.highfidelity.com/wiki/Edit_Mode#Editing_Entities_Using_the_Edit_Panel).

## Editing Entities Using a Mouse or Trackpad

You can edit an entity's position, rotation, and scale using your mouse or trackpad. You can also duplicate and delete entities using the mouse and keyboard.

To edit an entity using the mouse or trackpad, first make sure it is selected. You can select an entity simply by clicking on it, or you can click on the entity in the [create panel](https://wiki.highfidelity.com/wiki/Edit_Mode#Editing_Entities_Using_the_Edit_Panel) entity list.

*Note: By default, Light entities and Zone entities cannot be selected for editing. To be able to select Light entities, select \**Settings > Advanced Menus** and then select **Edit Menu > Allow Selecting of Lights**. To select Zone entities, you must click on the Zone entity in the **Entity List** tab in the *Edit* window.*

You can tell an entity is selected when you see the bounding box and arrows around it. These arrows are the rotate and stretch widgets.

[![Selectedbox.png](https://wiki.highfidelity.com/images/8/89/Selectedbox.png)](https://wiki.highfidelity.com/wiki/File:Selectedbox.png)

With the entity selected, you can:

- [Change the entity's position](https://wiki.highfidelity.com/wiki/Edit_Mode#Change_the_Entity.27s_Position)
- [Change the entity's scale](https://wiki.highfidelity.com/wiki/Edit_Mode#Change_the_Entity.27s_Scale)
- [Change the entity's rotation](https://wiki.highfidelity.com/wiki/Edit_Mode#Rotating_the_Entity_with_the_Mouse)
- [Duplicate the entity](https://wiki.highfidelity.com/wiki/Edit_Mode#Duplicating_the_Entity_with_the_Mouse)
- [Delete the entity](https://wiki.highfidelity.com/wiki/Edit_Mode#Deleting_an_Entity)

*Note: When in create mode your arrow keys move the camera instead of the avatar, you do not need to move the avatar to get a better look; do it all with the camera view.*

### Change the Entity's Position

Entities can be easily moved around using the mouse but care must be taken not to accidentally click the *rotate widgets* or the *size widgets*.

- To move the entity across the ground plane, click the entity at a spot where there are no widgets highlighted and hold and drag the mouse.
- To move the entity up and down, use the double arrow at the top.

### Change the Entity's Scale

Grabbing the black squares at the edges of the entity bounding box enables you to stretch and shrink the object.

- To resize the height only: Grab the little square widget at the top of the entity and drag up or down.
- To resize one side at a time: Grab one of the little square widgets at the bottom edges and drag in or out.
- To resize proportionally across the X and Z axes (ground plane): Grab the little square widgets at the bottom corners and drag in or out.
- To resize proportionally across all three axes: Hold the **Shift** key and grab the little square widgets at the corners and drag in or out.

You can undo this action by pressing the **CTRL/Z **keys together.

### Rotating the Entity with the Mouse

Grabbing any of the three curved arrows enables rotation about one axis.

- Grab one of the curved arrows to rotate on that axis.
- Move the mouse closer to the object to snap to whole sizes.
- Move the mouse further away to rotate as free wheel (no snapping)

You can undo this action by pressing the **CTRL/Z **keys together.

### Duplicating the Entity with the Mouse

To duplicate an entity:

1. Press and hold the **ALT** key and grab the entity with the mouse.
2. Drag to create a copy.

*Note: The safest way of doing this is to hold the \**ALT** key and grab the up/down arrows and duplicate up.*

You can undo this action by pressing the **CTRL/Z** keys together.

### Deleting an Entity

Press the **Backspace** key to delete the selected entity.

## Editing Entities Using the create Panel

The create mode *create* panel has three tabs: *Entities*, *Properties*, and *Grid*. Theses tabs allow you to:

- List entities in the domain
- create entity properties - Entity properties define an entity's appearance (color, size, position etc.) and behavior (animation, collision, interaction, etc.).
- Expose a grid to assist in layout

### List the Entities in the Domain

To list all of the entities on the domain, in the *create* panel, click the **Entities** tab and then click **Refresh** from the top of the panel. You can filter by entity type and by distance from the current location.

[![Entitylist.png](https://wiki.highfidelity.com/images/6/60/Entitylist.png)](https://wiki.highfidelity.com/wiki/File:Entitylist.png)

You can click on any one of the entities there to select it. You can also click **Jump To Selection** to be taken directly to the entity selected.

### Edit Entity Properties

Entity properties define an entity's appearance (color, size, position etc.) and behavior (animation, collision, interaction, etc.). The entity's type (sphere, box, light, zone, etc.) will define the specific set of properties the entity has.

To edit an entity's properties:

1. Select the entity. You can select an entity simply by clicking on it, or you can click on the entity in the *Edit* panel entity list. You know when an entity is selected when you see the bounding box and arrows around it.

2. With the entity selected, in the Edit panel, select the Entity Properties tab.

   ![img](https://wiki.highfidelity.com/images/e/e4/Entityproperties.png)

   The Entity Properties Tab.

   Here you will see the properties listed for the selected entity. You can make changes to any of the listed properties assuming the entity is not locked. If you can't change a property, check to see if the locked property is checked.

*Note: Each entity type has its own set of properties that define the entities appearance and behavior. See the entity specific guides, (Box and Sphere entities, Light entities, Particle entities, Text entities, Web entities, and Zone entities) for more information about working with each entity type. For more information about entity properties, see the JavaScript API Entity Properties page.*

### Expose a Grid to Assist in Layout

The *Grid* panel is used to expose a grid to assist in layout. Using this panel, you can toggle grid visibility, toggle snapping to the grid, and set the grid position, size, and color.

![img](https://wiki.highfidelity.com/images/thumb/c/c1/Gridpanel.png/800px-Gridpanel.png)

 



