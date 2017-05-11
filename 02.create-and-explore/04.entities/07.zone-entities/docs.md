---
title: Zone Entities
taxonomy:
    category: docs
---

[Create Mode](https://wiki.highfidelity.com/wiki/Edit_Mode) gives you the option of creating various different entity types and one of those options is the Zone entity.

A Zone entity is a 3-dimensional area that allows you to create custom lighting environments. You can define the zone boundaries using shapes and then customize the Zone’s light properties such as its intensity, direction and color to create different effects.

## Create a Zone Entity

With [Create Mode](https://wiki.highfidelity.com/wiki/Edit_Mode) enabled, you can create a Zone entity by selecting the **Zone** icon.

[![Zoneicon.png](https://wiki.highfidelity.com/images/d/d2/Zoneicon.png)](https://wiki.highfidelity.com/wiki/File:Zoneicon.png)

The new Zone entity is created at your current location.

![img](https://wiki.highfidelity.com/images/thumb/5/57/1newzone.png/500px-1newzone.png)

You can create multiple Zone entities, nested Zone entities, adjacent Zone entities and overlapping Zone entities. Zone entities do not have to be axis aligned.

## Working With Zones

Zones entities can be a bit tricky to work with. By default, Zone entities cannot be selected for editing nor will they be visible to select. In addition, Zone entities can be nested or overlap. This section covers:

- Precedence
- How to make Zone entities visible in Create Mode
- How to select Zone entities for editing

### Precedence

You can create multiple Zone entities, nested Zone entities, adjacent Zone entities and overlapping Zone entities. Each of these Zone entities can have different properties. If Zone entities are overlapping then the smaller Zone entity's lighting values will take precedence over the other Zone entities. For example, as a user moves through a group of nested Zone entities, each with different lighting values set, the user would experience the lighting conditions of the smallest Zone entity that they are currently in.

[![Zones graphic.png](https://wiki.highfidelity.com/images/0/0b/Zones_graphic.png)](https://wiki.highfidelity.com/wiki/File:Zones_graphic.png)

### How to Make Zone Entities Visible in Create Mode

By default, Zone entity boundaries are invisible. To make it easier to know exactly where a Zone entity is, you can make Zone entity boundaries visible in [Create Mode](https://wiki.highfidelity.com/wiki/Edit_Mode). To make Zone entities visible in edit mode:Select **Settings > Advanced Menus**.

1. Select **Edit Menu > Show Zones in Edit Mode**.

Zone entities will appear as a wireframe shapes.

![img](https://wiki.highfidelity.com/images/thumb/b/b7/Wireframe.png/500px-Wireframe.png)

By default, Zone entities are cube shaped, but other shapes are possible and can be set in the Zone entity properties.

### How to Select Zone Entities for Editing

Unlike other entity types, you cannot simply click on a Zone entity in edit mode to select it. To select a Zone entity for editing:

- Select the Zone entity in the **Entity List** tab in the *Edit* window.

![3selectedzone.png](https://wiki.highfidelity.com/images/thumb/a/af/3selectedzone.png/500px-3selectedzone.png)

*Note: You can enable the selecting of Zone entities via script using setZonesArePickable().*

With the Zone entity selected, you can edit the Zone entity's properties.

## Properties

An entity's appearance (color, size, position etc.) and behavior (animation, collision, interaction, etc.) are defined by the entity's properties.

Zone entities have the [properties common to all entities](http://jsref.docs.highfidelity.com/v1.0/docs/entity-properties#section-common-properties) along with a number of [Zone specific properties](http://jsref.docs.highfidelity.com/v1.0/docs/entity-properties#zoneentity).

You can view and edit these properties in [Edit Mode](https://wiki.highfidelity.com/wiki/Edit_Mode) by selecting the entity and then selecting the **Entity Properties** tab in the *Edit* panel.

## Example: Create Two Nested Zones with Different Lighting

To help you get a better understanding of Zone entities, this example creates two different Zone entities, one inside the other, that you can navigate through. For this example, you will:

- Create two Zones entities
- Edit the positions and size properties so that one Zone entity is inside the other
- Edit the light properties to create two different effects

Details on these steps are in the sections below.

### Create Two Zone Entities

For this example, you will need to create two Zone entities. Complete the following steps:

1. Create a Zone entity by selecting the **Zone** icon. When you first create a Zone, it will be selected. If it is not selected, you'll can select it using the **Entity List** tab in the *Edit* panel. To help keep track of Zone entities, you can use the **Name** property.

2. In the **Entity Properties** tab in the *Edit* panel, enter a name into the **Name** property field. Name the first zone, **ZoneRED**.

3. Repeat steps 1 and 2 to create a second Zone entity. Name this second zone,


   ZoneBLUE

   .

   ![Twonewzone.png](https://wiki.highfidelity.com/images/thumb/c/cf/Twonewzone.png/500px-Twonewzone.png)

   ​

   You should now have two new Zone entities.

### Edit the Zone Positions and Sizes so that One is Inside the Other

With two Zone entities created, you now need to resize one so that it is smaller than the other. You will also want to position the smaller Zone entity inside the larger Zone entity.

*Note: To see the size and position of the Zone entities you are working with, select \**Settings > Advanced Menus** and then select **Edit Menu > Show Zones in Edit Mode**.*

By default, Zone entities are created at your current position, so to see the Zone entities you just created, you may need to reposition your avatar.

1. Edit one Zone entity to be half the length and width as the other. In the **Entity Properties** tab in the *Edit* panel, for the Zone entity named ZoneRED, set the ** Dimension** properties to: **X: 5, Y: 10, Z: 5**

2. If you created the two Zone entities without moving your avatar, the Zone entities should be positioned in the same place. If not, use the


   Edit Mode

​    

   tools to position the smaller Zone (ZoneRED) inside the larger Zone (ZoneBLUE).

   ![Betterzoneinzone.png](https://wiki.highfidelity.com/images/thumb/1/18/Betterzoneinzone.png/500px-Betterzoneinzone.png)

   ​

   You should now have ZoneRED inside of ZoneBLUE.

### Edit the Zone Entities' Light Properties to Create Two Different Effects

Both Zone entities currently use the default lighting properties. If you pass through both Zone entities, you won't notice when you have moved into or out of each Zone entity. The next step is to set the Zone entities' lighting properties such that you have two different light environments. The lighting environment for a Zone entity can either be set by enabling and setting the stage sun model (a light that simulates sun light) or by setting the keylight (a single point of light) properties. For this example, the keylight properties for each Zone entity will be set to create one area lit with red light and one area lit with blue light.

*Note: Each zone has a single keylight.*

To edit the keylight properties, complete these steps:

1. Select the smaller Zone entity (ZoneRED).
2. In the **Entity Properties** tab in the *Edit* panel, scroll down to the *Zone* properties, and set the **Keylight Color** property to Red (**Red: 255, Green: 0, Blue: 0**)
3. Select the larger Zone entity (ZoneBLUE).
4. In the **Entity Properties** tab in the *Edit* panel, scroll down to the *Zone* properties, and set the **Keylight Color** property to Blue (**Red :0, Green: 0, Blue: 255**)

If you now navigate your avatar through both Zone entities you should see the light turn blue as you enter ZoneBLUE and then turn red when you enter ZoneRED.

![ZoneBlue.png](https://wiki.highfidelity.com/images/thumb/c/c2/ZoneBlue.png/500px-ZoneBlue.png)

![img](https://wiki.highfidelity.com/images/thumb/c/cf/ZoneRed.png/500px-ZoneRed.png)

## Example: Changing the Zone Shape

In the previous example, the Zone entity's boundaries were a cube. You can view a wireframe of a Zone entity's shape, select **Settings > Advanced Menus** and then select **Edit Menu > Show Zones in Edit Mode**.

This cube shape is the default shape, however other shapes are possible. To change a Zone entity's shape"

1. Select the Zone entity and in the **Entity Properties** tab in the *Edit* panel, scroll down to the *Model* properties.
2. Set the **Collision shape type** property to the shape you want to use:

There are four shape types to chose from:

- **None**: Will go to the default shape. (Box at the moment)

- Box

  : The Zone entity's shape is the same than its bounding box.

  [![Box shape.jpg](https://wiki.highfidelity.com/images/8/86/Box_shape.jpg)](https://wiki.highfidelity.com/wiki/File:Box_shape.jpg)

- Sphere

  : The Zone entity's shape will be a stretched sphere.

  [![Streched sphere shape.jpg](https://wiki.highfidelity.com/images/c/c6/Streched_sphere_shape.jpg)](https://wiki.highfidelity.com/wiki/File:Streched_sphere_shape.jpg)

- **Compound**: The Zone entity's shape will be a convex mesh.



All shapes will be stretched to fit the Zone entity's dimensions.

### Generate a Convex Mesh

For people working off of the High Fidelity dev build available on GitHub, you will find a command line tool called `vhacd-util`. This tool will allow you to generate a convex mesh (or a set of convex meshes) from another non-convex model. The tool is located here: `{BUILD_DIR}/tools/vhacd-util/Debug/vhacd-util` The `—help` option will show you the available arguments and what they do.