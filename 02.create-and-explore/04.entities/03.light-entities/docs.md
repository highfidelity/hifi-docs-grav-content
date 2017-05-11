---
title: Light Entities 
taxonomy:
    category: docs
---

[Create Mode](http://localhost/create-and-explore/entities/create-mode) gives you the option of creating various different entity types and one of those options is the **Light entity**.

The Light entity works like a ball or a beam of light. It can be used to add local lighting effects or spotlights to an area.

## Video Overview of Light Entities

*Note: This video was made with an earlier version of Interface.*

## Create Light Entities

With [Create Mode](http://localhost/create-and-explore/entities/create-mode) enabled, you can create a Light entity by selecting the **Light** icon.

[![Lighticon.png](https://wiki.highfidelity.com/images/1/1a/Lighticon.png)](https://wiki.highfidelity.com/wiki/File:Lighticon.png)

A Light entity appears as an orange spherical grid. If you only see orange lines, you may need to reposition yourself to see the full light entity object.

[![Lightentity.png](https://wiki.highfidelity.com/images/2/28/Lightentity.png)](https://wiki.highfidelity.com/wiki/File:Lightentity.png)

You won't see any light unless there is an entity to reflect the light. In the image below the Light entity has been edited to increase the intensity and has been positioned so that the light will reflect off a Box entity.

[![Lightreflectingonbox.png](https://wiki.highfidelity.com/images/c/ce/Lightreflectingonbox.png)](https://wiki.highfidelity.com/wiki/File:Lightreflectingonbox.png)

By default, Light entities cannot be selected for editing nor will they be visible to select.

## Working with Light Entities

By default, Light entities are not visible and cannot be selected for editing. To work with Light entities you will want to make them visible and enable selecting for editing.

### Make Light Entities Visible in Edit Mode

Other than their reflected light, Light entities are not visible. To make it easier to find exactly where a light is to select it, you can make lights visible in edit mode. To make lights visible in edit mode:

1. Select **Settings > Advanced Menus**.
2. Select **Edit Menu > Show Lights in Edit Mode**.

When **Show Lights in Edit Mode** is enabled, lights appear as a gray rectangle. The image below shows two light entities with the one on the right selected for editing.

![img](https://wiki.highfidelity.com/images/c/c6/Displaylight.png)

Two light entities. The light entity on the right is selected for editing.

### Enable Selecting of Lights for Editing

To select a Light entity for editing, you must first enable selecting of lights. To enable the selecting of Light entities for editing:

1. Select **Settings > Advanced Menus**.
2. Select **Edit Menu > Allow Selecting of Lights**.

When allow selecting of lights is enabled, you should be able to click on a Light entity to select it. You will see the entity's bounding box appear and the edit mode arrows for changing the entity's position, size, and rotation will also appear. When a Light entity is selected, you can edit its properties in the **Entity Properties** tab in the *Edit* panel.

## Properties

An entity's appearance (color, size, position etc.) and behavior (animation, collision, interaction, etc.) are defined by the entity's properties.

Light entities have the [properties common to all entities](http://jsref.docs.highfidelity.com/v1.0/docs/entity-properties#section-common-properties) along with a number of [Light specific properties](http://jsref.docs.highfidelity.com/v1.0/docs/entity-properties#lightentity).

You can view and edit these properties in [Create Mode](http://localhost/create-and-explore/entities/create-mode) by selecting the entity and then selecting the **Entity Properties** tab in the *Edit* panel.

## Example: Shine a Pink Spotlight on a Wall

To demonstrate how Light entities work this example creates a pink spotlight shining down a wall. For this example, you will need to:

1. Create a wall to shine the light on.
2. Create a Light entity.
3. Edit the Light properties so that it is a pink spotlight.

The next sections cover these steps in detail followed by a section covering some of the issues you might run into when working with Light entities.

### Create a Wall to Shine the Light On

To create a wall to shine the light on, in [Create Mode](http://localhost/create-and-explore/entities/create-mode), complete these steps:

1. Click the **Cube** icon to create a Box entity.
2. Select the **Entity Properties** tab in the *Edit* panel and make the following changes to the box properties:


Assuming you are in third person view, if you use the scroll wheel to zoom back, you should now have a "wall" that looks something like this:

[![Wall.png](https://wiki.highfidelity.com/images/thumb/9/96/Wall.png/600px-Wall.png)](https://wiki.highfidelity.com/wiki/File:Wall.png)

For more information on creating and editing Box entities, see [Box and Sphere entities](https://wiki.highfidelity.com/wiki/Box_and_Sphere_entities).

### Create a Light Entity

To create a Light entity, complete these steps:

1. Ensure that selecting of Light entities is enabled.


1. Click the **Light** icon to create a light.

2. Grab the Light entity and move it so that it is centered on the wall.

   [![Centeredonwall2.png](https://wiki.highfidelity.com/images/thumb/f/f6/Centeredonwall2.png/600px-Centeredonwall2.png)](https://wiki.highfidelity.com/wiki/File:Centeredonwall2.png)

   You'll notice that you don't see any light. This is because the radius of the light is too small and the brightness is too low.

3. In the


   Entity Properties

​    

   tab in the

​    

   Edit

​    

   panel, scroll down to the

​    

   Light

​    

   properties change the

​    

   Intensity

​    

   to

​    

   100

​    

   The

​    

   Intensity

​    

   is the brightness of the light - a higher intensity corresponds with a brighter light. You should see the spot brighten up.

   [![Intensity100.png](https://wiki.highfidelity.com/images/thumb/1/11/Intensity100.png/600px-Intensity100.png)](https://wiki.highfidelity.com/wiki/File:Intensity100.png)

4. Change the


   Fall-off radius

​    

   to

​    

   .5

   . The

​    

   Fall-off radius

​    

   defines the shape of the light curve of a light. A larger radius will simulate a larger light, which will "falloff", or dim, more gradually. Specifically, the

​    

   Fall-off radius

​    

   is the distance from the light at which the intensity is reduced by 1/4. You should see the light radius increase.

   [![Falloff5.png](https://wiki.highfidelity.com/images/thumb/5/5a/Falloff5.png/600px-Falloff5.png)](https://wiki.highfidelity.com/wiki/File:Falloff5.png)

   This type of light is a point light and it emanates in all directions equally. It is meant for general area lighting as it has a bright point in the middle and fades as it radiates out.

### Edit the Light Properties to a Pink Spotlight

To edit the Light to be a pink spotlight, complete these steps:

1. Scroll down to the *Light* properties, click the box for **Spotlight**.










1. Change the


   Spotlight cutoff

​    

   to

​    

   30

   . This property determines the radius of the spotlight. A higher cutoff value corresponds with a larger spotlight radius. You should see the beam tighten up to a smaller beam.

   [![Cuttoff2.png](https://wiki.highfidelity.com/images/thumb/3/39/Cuttoff2.png/600px-Cuttoff2.png)](https://wiki.highfidelity.com/wiki/File:Cuttoff2.png)

2. Change the


   Spotlight exponent

​    

   to

​    

   20

   . This property affects the softness of the beam. You should see the edge of the beam soften.

   [![Exponent.png](https://wiki.highfidelity.com/images/thumb/d/d3/Exponent.png/600px-Exponent.png)](https://wiki.highfidelity.com/wiki/File:Exponent.png)

   You can experiment with different exponent, cutoff, and intensity combinations for varied effects.

3. Change the


   Light color

​    

   to pink by adjusting the color values to

​    

   Red: 255, Green: 0 , Blue 255

   .

   [![Pink.png](https://wiki.highfidelity.com/images/thumb/5/50/Pink.png/600px-Pink.png)](https://wiki.highfidelity.com/wiki/File:Pink.png)

4. Adjust the light's


   Rotation

​    

   so that the spotlight is facing down the wall.

   [![Pinkdown.png](https://wiki.highfidelity.com/images/thumb/4/41/Pinkdown.png/600px-Pinkdown.png)](https://wiki.highfidelity.com/wiki/File:Pinkdown.png)

   A spotlight positioned like this can be used for a good effect over paintings or wall hangings in your world.

### Issues

The domain sun shines from one side, so one side of the wall is already bright. Light from the Light entity won't show up on the bright side of the wall.

This image shows the corner of an object with one bright side and one shaded side.

[![6brightSide.png](https://wiki.highfidelity.com/images/thumb/6/67/6brightSide.png/600px-6brightSide.png)](https://wiki.highfidelity.com/wiki/File:6brightSide.png)