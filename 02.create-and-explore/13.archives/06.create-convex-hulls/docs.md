---
title: Create Convex Hulls
taxonomy:
    category: docs
---

Learn how to make a model physical. We will take you through bringing a model into Blender and creating a convex hull that you can use for collisions.

[plugin:youtube](https://www.youtube.com/watch?v=bFPhaUod9SM)

## Using V-HACD in Blender for Convex Hulls

When bringing in different models to use in High Fidelity, you’ll need to create a convex collider in the form of an .obj model in order to have colliders work with other entities in the world. If you have a model in a format that Blender can import, you can use the V-HACD Blender plugin to generate these hulls automatically.

- Download the V-HACD Plugin (as zip): [https://github.com/kmammou/v-hacd](https://github.com/kmammou/v-hacd)


- Once you have downloaded and extracted the V-HACD plugin to your computer, launch Blender and import your model by going to File > Import and selecting the proper file type for your mesh.


- Add the V-HACD plugin to your user preferences by going to File > User Preferences and choosing the button ‘Install from File’. Navigate to the folder where you downloaded the v-hacd plugin and go to v-hacd-master > add-ons > Blender and select the object_vhacd.py script. Check the box next to the Object: V-HACD descriptor and click Save User Settings to load it in.


- Under your ‘Tools’ tab, you should now see a drop down for V-HACD. Before we can run the tool, we need to specify the compiled V-HACD executable in VHACD Path. Click the folder icon to the right of the text box and select the executable file that corresponds to your operating system - for example, a Windows 64-bit system would use the .exe file at the location v-hacd-master\v-hacd-master\bin\win64\.

Now that V-HACD is ready, it’s time to use the tool to create our convex hull for collisions.

- Select all of the components in your model in blender by holding down the CTRL key and right-clicking on the meshes
- With the components selected, hit the Enter key to open an options menu
- Search for ‘Hierarchical Approximate Convex Decomposition’ in the options menu and select it from the drop down list
- Change the first parameter from 100,000 to 1,000,000 and hit OK

You can check the console for output progress in the decomposition process. Depending on the size of your meshes, this may take several minutes.

The tool duplicates the mesh when complete, so you can select the original meshes and delete them for your collider. Export the resulting object as an .OBJ file - it can now be used as a collider for your models in High Fidelity.

## Related Links

For more information about V-HACD, see [V-HACD](https://github.com/kmammou/v-hacd).