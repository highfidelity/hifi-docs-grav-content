---
title: 3D Models
taxonomy:
    category: docs
---

You can create basic shapes (spheres, cubes, and several other solid shapes) using the toolbar brought up by the 'Edit' HUD button - for more information see [Interface content editing tools](https://wiki.highfidelity.com/wiki/Edit_Mode). But you can also directly [import](https://wiki.highfidelity.com/wiki/Edit_Mode#Upload_3D_Models_to_Add_a_Model_Entity) **3D models** into High Fidelity as a means of building more visually complex objects as well as getting access to millions of pre-existing pieces of 3D content. Models imported into High Fidelity must currently be in OBJ or FBX format, and as with all importers, there are various limitations on the sub-formats supported in the file formats.

To source 3D models for use in your domain, you can:

- [Create your own models](https://wiki.highfidelity.com/wiki/3D_models#Creating_Your_Own_3D_Content)
- [Source from 3D content stores](https://wiki.highfidelity.com/wiki/3D_models#Sourcing_From_3D_Content_Stores)

To use a 3D model in your domain, you will need to import it. For more information, see [Edit Mode: Upload 3D Models to Add Model Entity](https://wiki.highfidelity.com/wiki/Edit_Mode#Upload_3D_Models_to_Add_a_Model_Entity).

## Creating Your Own 3D Content

There are many 3D modeling software packages available, some are free and some are licensed. [Blender](https://www.blender.org/) is a powerful free modeling tool which can save to the FBX format. Blender can also be used to convert other formats like 3DS, VRML, or X3D into FBX files for High Fidelity.

There are many great tutorials and videos for the various 3D packages online including Blender, and after a few hours of learning a beginner can be creating simple models. By exporting your work as an FBX file, you can then either upload as an asset to your High Fidelity server, or optionally place the files on a content hosting server of your choice (such as Amazon S3), and then place your models in-world.

**Quick checklist for Blender 2.73 - 2.74**

- Models must have properly assigned materials
- Set specularity to near zero to avoid unwanted shine
- Textures are optional
- Any textures must be UV mapped
- Textures must be 1024 x 1024 or smaller
- Export as FBX 7.4 binary
- Select **Mesh**
- If using textures set **Path Mode** to **Copy** and check **Embed Textures**

If you are using Blender to create an avatar, check out the [Blender workflow](https://wiki.highfidelity.com/wiki/Blender_workflow) tutorial.

**Quick checklist for Maya 16 - 17**

- Models must have properly assigned materials
- Textures are optional
- Any textures must be UV mapped and assigned to 1 UV channel
- Textures must be 1024 x 1024 or smaller
- Select File > Export as FBX
- If using textures, check Embed Textures
- Export as FBX 2013 binary

Another great tool is the [Autodesk FBX converter](http://usa.autodesk.com/adsk/servlet/pc/item?siteID=123112&id=22694909).

For more detailed information on exporting materials from Maya or Blender to High Fidelity, see the [Material Export Guide](https://wiki.highfidelity.com/wiki/Material_Export_Guide).

## Sourcing From 3D Content Stores

If you get 3D models from on o f the many online 3D content sites, you'll find that some models work better than others. Sometimes the FBX may be missing its textures. If that happens, first double check to see that textures are included in the FBX. If a model loads into High Fidelity and doesn't look right, you may also find error information in the interface logs, accessible at **View > Logs**.

### Check Licensing Terms

When sourcing 3D models, be sure to check the licensing terms. It is your responsibility to ensure that you have sufficient rights to upload the content. Bear in mind that when you make a 3D model available on your High Fidelity server, visitors are getting the links to those files in the same way as they would, for example, when viewing an image on your website. You should be comfortable and have rights to re-distribute content in this way.

Note that High Fidelity is also planning to offer proof-of-purchase certificates that can accompany entities and 3D models to certify that they have been legitimately purchased. This work is not yet done but is in progress, and will provide 3D content developers with an effective means to sell and protect their work, as desired.
