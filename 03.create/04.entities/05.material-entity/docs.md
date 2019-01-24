---
title: 'Add a Material Entity'
taxonomy:
    category: docs

---

You can add a material entity to an object in your domain. A material entity contains specific material data that determines the texture and shading of an object. For example, if you want to create a castle in your domain, you need your walls to look like they're made of rough gray stone. You can do this by adding a castle wall material entity to your walls. 

**On This Page:**

+ [Generate a Material Entity](#generate-a-material-entity)
+ [Add a Material Entity](#add-a-material-entity)

## Generate a Material Entity

To add a material to your object in High Fidelity, you need the material data specified in a .JSON file. You can generate this file when you create your material in an external tool of your choice such as Blender or Maya.

>>>>>We are aware of the difficulties involved in converting your material data to a .JSON file and are working on making the process easier for our users. We recommend embedding your material data in your models as .fbx files if you are facing difficulties generating a .JSON file. 

1. When you are finished creating your material in the tool of your choice (such as Blender or Maya), export your file as an .FBX file. 
2. Convert your .FBX file to a .JSON file. You can do this by adding plugins to your modeling software or using other external tools available online. 
3. Host your .JSON file online and copy the URL.

This is what the .JSON file for a sample [castle wall material](https://hifi-public.s3.amazonaws.com/sam/MaterialExportGuide/MaterialEntities/MatOne/CastleWall/CastleWall.hfm.json) looks like:

```
{
  "materialVersion": 1,
  "materials": [
    {
      "name": "CastleWall",
      "model": "hifi_pbr",
      "albedo": [1, 1, 1],
      "albedoMap": "https://hifi-public.s3.amazonaws.com/sam/MaterialExportGuide/MaterialEntities/MatOne/CastleWall/CastleWall_Base_Color.png",
      "roughnessMap": "https://hifi-public.s3.amazonaws.com/sam/MaterialExportGuide/MaterialEntities/MatOne/CastleWall/CCastleWall_Roughness.png",
      "normalMap": "https://hifi-public.s3.amazonaws.com/sam/MaterialExportGuide/MaterialEntities/MatOne/CastleWall/CastleWall_Normal.png"
    }
  ]
}
```

This file contains all related material data, such as the color, roughness, and other texture and shading information. 

## Add a Material Entity

Once you have your material entity .JSON file, you can add it to an object in High Fidelity. Let's add the [castle wall material](https://hifi-public.s3.amazonaws.com/sam/MaterialExportGuide/MaterialEntities/MatOne/CastleWall/CastleWall.hfm.json) to a box entity in your domain. 

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Create a wall. Click the 'Cube' icon to add a box entity and change the dimensions to make it resemble a wall. 
3. Go to the **Create** tab and click on the 'Material' icon to add a material entity. Enter the material's .JSON file URL when prompted. You will see the material entity represented as a small sphere. 
4. Click and select the wall. Go to the 'Properties' tab and copy the parent ID under the 'Name' box. 
5. Click and select the material entity. Go to the 'Properties' tab and paste the copied parent ID in the 'Parent' box. You will see the material applied to the wall. In this step, you are parenting or applying a material to an entity.
6. You can also add the material entity in another way. Click and select the wall entity. Go to the 'Properties' tab and paste the JSON file URL in the 'Material URL' box. 

   ![](material-entity.GIF)

**See Also**

+ [Create New Entities](../create-entities)
+ [PBR Materials Guide](../../3d-models/pbr-materials-guide)