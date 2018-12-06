---
title: Create Buildings
taxonomy:
    category: docs
---

## Overview

One of the benefits of High Fidelity is the ability to create large-scale worlds, and a big part of that are buildings. Perhaps you have an idea for a meeting space, virtual offices, an apartment complex, or personal mansion - in this module, we'll walk through some of the options available to you to create buildings that can be explored for your own domain.

- Options for creating or finding buildings
- Adding your building to your domain
- Customizing your space

## Options for Creating Buildings

There are many options for creating your own custom buildings to bring into your High Fidelity domains, ranging from primitive building to ground-up 3D modeling and photogrammetry capture. In this section, we'll explore various options that you can choose from to make a building, including:

- Building your own custom 3D models in a modeling program
- Creating a 2D floorplan that is converted to 3D
- Making a building with primitives in High Fidelity

### Building a 3D Building in Maya or Blender

If you're already familiar with a 3D modeling program like Maya or Blender, you can use these tools to create your own custom buildings. Models that are used as interior spaces should be carefully constructed so that collisions align with the mesh and not around the entire model, so that users can easily move throughout the inside. If you have closed off spaces and doors, either inside the building or to the outside of the model, you can find an example of a scripted [door with open/close behavior on Marketplace](https://highfidelity.com/marketplace?q=door).

### Creating a 2D Floor Plan

Another option for creating a custom floor plan (no 3D modeling required!) is to generate a 2D floor plan and use a service like [Archilogic](http://archilogic.com/) to generate a 3D mesh of your floor plan. While you can use any art tool to sketch out a 2D layout, you can also pick a program designed for floor plans, including:

- [Draw.io](https://www.draw.io/), a browser-based flowchart program that exports drawings and can be used to create basic floor plans
- [RoomSketcher](http://www.roomsketcher.com/), another browser-based app for layouts and building designs
- [MagicPlan](http://www.sensopia.com/), a mobile app that generates floor plans based on a physical location

Once you have a 2D floor plan, you can upload it to [Archilogic](http://archilogic.com/) or another service for generating 3D models based on 2D designs. Archilogic also allows you to include reference images of what you'd like your model to include to influence the textures or appearance of the generated model, which you can then customize further before importing to High Fidelity.

## Options for Finding Buildings

If you'd like to use an existing 3D model, you can find options for buildings in High Fidelity under the 'Architecture' section of Marketplace. You can also browse sites like [Clara.io](http://clara.io/) from within High Fidelity or in your desktop browser. Look for existing FBX models to use as buildings, and if necessary, specify a version of the mesh stored as an OBJ to set up collisions properly in your domain.

## Adding your Building to High Fidelity

Follow the instructions in [Sandbox](https://wiki.highfidelity.com/wiki/Sandbox) if you haven't already to set up your own domain that you can host content in. If you're planning on using your building in a single domain, you can host your building by:

1. Opening the Asset Browser and uploading your model to your domain
2. Placing your building by clicking 'Add to World'
3. Using the Edit tools to change the scale and location of your building, if necessary

## Customizing your Space

Once you have your building in High Fidelity, you'll likely want to customize it! You can add in various decorations, including posters, house plants, furniture, and games through the various Marketplace objects that are available in High Fidelity. You can also follow the steps that you used to add your building into your domain on external 3D models that you want to use in your building. Keep in mind that any objects added to the Asset Server are only available for that specific domain - if you want to use your decorations or furniture in additional domains, you'll need to host them somewhere that is publicly accessible to each different computer that the domains are hosted on.

You can swap out textures to your model directly in High Fidelity by specifying new files in the 'Textures' section of the Entity Properties window that align with the names of the original texture files, viewable under "Original textures"
