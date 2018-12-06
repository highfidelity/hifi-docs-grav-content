---
title: 3D Models
taxonomy:
    category: docs
---

##Introduction

You can [import 3D models into High Fidelity](../entities/model-entities) using **Create** mode. Models imported into High Fidelity must currently be in OBJ or FBX format, and as with all importers, there are various limitations on the sub-formats supported in the file formats.

### Creating Your Own 3D Content

There are quite a few 3D modeling ssoftware packages available online. For instance, [Blender](https://www.blender.org/) is a powerful free modeling tool which can save models as .fbx objects. Blender can also be used to convert other formats like 3DS, VRML, or X3D into FBX files for High Fidelity.

We also support textures in the following formats - PNG and JPEG. 

**Quick checklist for Blender 2.73 - 2.74**

- Models must have properly assigned materials
- Set specularity to near zero to avoid unwanted shine
- Textures are optional
- Any textures must be UV mapped
- Textures must be 1024 x 1024 or smaller
- Export as FBX 7.4 binary
- Select **Mesh**
- If using textures set **Path Mode** to **Copy** and check **Embed Textures**

If you are using Blender to create an avatar, check out the [Blender workflow](https://docs.highfidelity.com/create-and-explore/avatars/blender-workflow) tutorial.

**Quick checklist for Maya 16 - 17**

- Models must have properly assigned materials
- Textures are optional
- Any textures must be UV mapped and assigned to 1 UV channel
- Textures must be 1024 x 1024 or smaller
- Select File > Export as FBX
- If using textures, check Embed Textures
- Export as FBX 2013 binary

You can learn more about the Physically Based Rendering materials supported by High Fidelity, [here](../3d-modeling/materials).

## Sourcing From 3D Content Stores

If you get 3D models from on of the many online 3D content sites, you'll find that some models work better than others. Sometimes the model may be missing its textures. If that happens, first check to see that textures are included. If a model loads into High Fidelity and doesn't look right, you may also find error information in the Interface logs, accessible at **View > Logs**.

### Check Licensing Terms

When sourcing 3D models, be sure to check the licensing terms. It is your responsibility to ensure that you have sufficient rights to upload the content. When you make a 3D model available on your High Fidelity server, visitors are getting the links to those files in the same way as they would when viewing an image on your website. You should be comfortable and have rights to re-distribute content in this manner.

Note that High Fidelity is also planning to offer proof-of-purchase certificates that can accompany entities and 3D models to certify that they have been legitimately purchased. This work is not yet done but is in progress, and will provide 3D content developers with an effective means to sell and protect their work.
