---
title: 3D Models
taxonomy:
    category: docs
---

A common way to create avatars in High Fidelity is to take Mixamo avatars, customize them in [Blender](https://www.blender.org/) and then upload to High Fidelity. However, you’ll need to adjust the orientation and scale before uploading. Here’s a snapshot of the **Blender workflow**.

## Import Your FBX File

Open Blender and import the .fbx with the default import settings.

![1 default view.png](https://wiki.highfidelity.com/images/thumb/4/4c/1_default_view.png/800px-1_default_view.png)

![2 import fbx.png](https://wiki.highfidelity.com/images/thumb/2/22/2_import_fbx.png/800px-2_import_fbx.png)

## Orient and Scale the Model

Because Blender is Z-Up, rotate the mesh 90 degrees along the x-axis.

![3 imported.png](https://wiki.highfidelity.com/images/thumb/b/b1/3_imported.png/800px-3_imported.png)

![4 rotate.png](https://wiki.highfidelity.com/images/thumb/b/b1/4_rotate.png/800px-4_rotate.png)

Because Blender units are in meters and High Fidelity currently expects the avatar in centimeters, scale the mesh down to a value of “.01”.

![5 scale.png](https://wiki.highfidelity.com/images/thumb/c/ce/5_scale.png/800px-5_scale.png)

## Export File

Select the content of the scene and export it as an FBX. In the export setting, select the armature and mesh and set the “Path Mode” to “Copy” and toggle the icon to embed the textures.

![6 pre export.png](https://wiki.highfidelity.com/images/thumb/8/84/6_pre_export.png/800px-6_pre_export.png)

![7 export fbx.png](https://wiki.highfidelity.com/images/thumb/f/fe/7_export_fbx.png/800px-7_export_fbx.png)

## Package the Model for High Fidelity

![8 package model.jpg](https://wiki.highfidelity.com/images/9/98/8_package_model.jpg)

[![9 world.jpg](https://wiki.highfidelity.com/images/thumb/4/44/9_world.jpg/800px-9_world.jpg)](https://wiki.highfidelity.com/wiki/File:9_world.jpg)