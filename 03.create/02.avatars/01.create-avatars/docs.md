---
title: Create Your Own Avatar
taxonomy:
    category: docs
---

The steps involved in creating your avatar are:

1. Create an avatar with 3D character modeling tool such as Adobe Fuse. 
2. Rig and animate your avatar with an animation tool such as Mixamo.
3. Fine tune your avatar using a tool such as Blender or Maya.
4. Package the model in High Fidelity for use as an avatar.  

>>>>>You do not need to design an avatar using Adobe Fuse. You can also download avatars for use from other external sources such as TurboSquid or CGTrader. If you get an avatar from somewhere else, use the [High Fidelity Avatar Exporter for Unity](../find-avatars) to map the avatar's skeleton and package it for use with High Fidelity.

**On This Page:**
* [Glossary](#glossary)
* [Community Tools for Avatars](#community-tools-for-avatars)
* [Package Your Avatar](#package-your-avatar)
* [YouTube Tutorial: Create Your Avatar](#youtube-tutorial)

## Glossary

As we delve deeper into creating custom avatars, we may use terminology that you are unfamiliar with. Here are some terms you might come across:

* Avatar - A virtual representation of a person or NPC.
* Mesh - The collection of 3D vertices and triangles for the avatar model. Without this, the avatar is invisible.
* Bones - A component of a skeleton that defines a "limb" such as an arm, leg, etc. Each bone may be animated as a separate limb in your avatar.
* Skeleton - A hierarchy of joints.
* Rigging - The process of creating a skeleton of the avatar model.
* Blendshapes - Variations of the topology that defines how the mesh is modified to create various "shapes".
* FST file - The main avatar file, which contains information about the skeleton, blendshapes, FBX file and textures used by an avatar.

## Community Tools for Avatars
As you're creating your avatar, remember that High Fidelity is an open-source project. Many of our community members have created plug-ins, add-ons, toolkits, skeletons and more to help you create content, including avatars. Here are a few for you to play around with.

### [Blender Add-on by Menithal](https://github.com/Menithal/Blender-Hifi-Addon)

Plugin ("Project Hermes") is a plugin for Blender to allow for easier content creation and importing for the High Fidelity Metaverse Platform. It features: 

- **Material Tools**: Allows for easier pipeline to apply materials to objects so that they are ready to use in High Fidelity.
- **Armature Tools**: Adds a skeleton that is compatible with High Fidelity and let you configure bone names for use in advanced scripts.
- **Avatar Converters**: Translates and fixes models and materials from MMD and Mixamo so that they work in High Fidelity.
- **Export Tools**: Exports avatars and scenes so that they can be used in High Fidelity.
- **Import Tools**: Imports primitive entities from High Fidelity so that you can make modifications to them.

Install it here: [https://github.com/Menithal/Blender-Hifi-Addon](https://github.com/Menithal/Blender-Hifi-Addon)

---
Have a project you've been working on that you'd like us to share? Let us know by editing this page in GitHub! 

## Package Your Avatar

No matter how you [created your custom avatar](../), you must convert your FBX model to FST before using that avatar in High Fidelity. This process is called *packaging your avatar*.

If you wish to host your avatar on our Marketplace and make it available for purchase, you can use our [Avatar Packager](#use-the-avatar-packager). If you want to [host your avatar](../host-avatar) on a cloud service, you can [generate an FST file](#generate-an-fst-file) to upload to the service of your choice.

### Generate an FST File
High Fidelity provides a built-in tool that will create an FST file that will animate our avatar in VR. 

1. In Interface, go to Edit > Package Model as fst.
2. Click Browse and locate the FBX file for your avatar. Click OK. 
3. The Set Model Properties window lets you map the FBX properties with everything that High Fidelity needs to know to create your avatar. If you use Mixamo, these will be set automatically for you and you do not need to make any changes. Here, you can also attach external textures or [scripts](../../../script/avatar-scripts) to your avatar. Click OK.
4. Browse to the folder where you want to save your avatar files. We recommend creating a new directory for each avatar. 

At this point, your avatar has been created! After hosting the avatar in the cloud or the Marketplace, [switch to it](../../../explore/personalize-experience/change-avatar#use-your-own-custom-avatar) and adopt your new look. ![](imported-avatar.png)

### Use the Avatar Packager
You can use our built-in Avatar Packager to upload, edit, and use your custom avatar and make it available for purchase on the Marketplace. 

1. In Interface, go to **Edit > Avatar Packager**. 
2. In the Avatar Packager window that opens, click 'New Project'.![](new-project.png)
3. In the Create Project window, fill in the following details:
   * Name: The name you want for your avatar. 
   * Project Location: The folder path where your avatar's files are stored. 
   * Avatar Model: Your avatar's FBX file.
   * Texture Folder: If your avatar has textures in a separate folder, specify the folder location. If your avatar's textures are embedded in the FBX, you do not need to specify anything. ![](create-project.png)
4. Click 'Create'.
5. Click 'Upload' to upload your avatar's files to High Fidelity's servers. If you make any changes to your custom avatar, you will need to update it through this packager to see your changes. To update, select your project and click 'Open Project' in step 1. Follow the same steps to update your avatar.
6. Once your avatar is uploaded to the servers, click 'View in Inventory' to view your custom avatar. ![](inventory.png)
7. Click 'Wear' to try out your new avatar! 
8. You can view your avatar in the Marketplace. It is currently in Draft mode. You will need to submit it for review to make your avatar available for purchase on the Marketplace.

## YouTube Tutorial

Check out this YouTube playlist for one way to create and customize your own avatar. Here, we use Adobe Fuse to create our avatar, Mixamo to rig our avatar automatically, and Blender to adjust the rendering on our avatar. We also have written instructions on the same process: 

* [Create an Avatar with Fuse](../fuse-tutorial)
* [Rig Your Avatar in Mixamo](../mixamo-tutorial)
* [Modify Materials and Textures with Blender](../blender-tutorial)

[plugin:youtube](https://www.youtube.com/watch?v=6NfiH4rdVRM)

**See Also**

+ [Find and Use an Existing Avatar](../find-avatars)
+ [Host Your Avatar](../host-avatar)