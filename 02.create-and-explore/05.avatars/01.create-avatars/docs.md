---
title: Create Your Own Avatar
taxonomy:
    category: docs
---

This page will walk you through creating your own avatar using Adobe Fuse, Mixamo and Blender.

## Overview

The steps involved in creating your avatar are:

- Create an avatar in Adobe Fuse.
- Rig your avatar with Mixamo
- Make adjustments to model materials using Blender.
- Package the model in High Fidelity for use as an avatar.

## Software Requirements

For creating your avatar, you will need to:

1. Create an [Adobe account](http://adobe.com/) and download [Adobe Fuse](https://www.adobe.com/products/fuse.html). You can also download Adobe Creative Cloud and download Fuse through the application.
2. Download and Install [Blender](https://www.blender.org/).

## Creating Your Avatar

###Video

Check out this youtube playlist to learn how you can get an avatar from the marketplace and create your own with a custom look. 

[plugin:youtube](https://www.youtube.com/watch?v=6NfiH4rdVRM&t=3s)

### Creating Your Avatar with Fuse

Using Adobe Fuse, you can create a custom avatar. The default heads, torsos, arms and legs in Adobe Fuse can help you start your customization.

1. Launch Adobe Fuse.
2. Pick your default body parts. Once you're done assembling the body, you can customize the avatar. For example, you can customize how the eyebrows are shaped, facial expressions, how long the fingers are and much more.
3. You can choose the clothing you'd like. You can modify these clothing options with materials and colors using the Textures tab in Adobe Fuse.
4. Save your avatar.

### Rig Your Avatar in Mixamo

Mixamo is a rigging system that will rig your model's skeleton. You can rig the avatar you created in Adobe Fuse using Mixamo. The following steps will help animate your avatar.

1. In Adobe Fuse, go to File > Animate with Mixamo.
2. Save your avatar with a name and wait while it is exported to the auto-rigger.
3. The Mixamo page that is opened will have your animated avatar. Ensure that Facial Blendshapes are **enabled** and Skeleton LOD has been set to **standard**.
4. Click **Finish**.
5. Once your avatar has been successfully rigged, click **View in My Assets**.
6. A preview screen will open up. Click **Queue Download**.
7. You'll be prompted to select the format and pose. Select Format as **fbx** and Pose as **T-Pose**. Then click **Queue Download**.
8. You'll be redirected to the Downloads view, where you can select your avatar and click **Download**.

### Modifying Materials and Textures Using Blender

You can use Blender to fix materials and change textures on your avatar.

1. Launch Blender and go to File > Import FBX and choose your avatar's fbx that you just downloaded from Mixamo.
2. From the Outliner, open the 'Armature' tree and then select the top-most item, the Body.
3. Select the Material tab.
4. Click the Specular color (set to white) and make it 100% black.
5. Repeat this step for every avatar item in the Outliner.
6. Starting at the top of the Outliner, select the top-most item in the armature and select the Texture tab.
7. Un-check any mapping to textures that have the name **Specular** and **Gloss**.
8. Repeat this step with every avatar item.

Now you can modify any part of your avatar using Blender. We've included an example below on how you can change eyelash material and texture on your avatar. You can follow similar steps for other avatar items.

**Updating Eyelash Material and Texture For Your Avatar**

- Save [this texture](http://hifi-content.s3.amazonaws.com/DomainContent/Event%20/Images/mixamo_eyelashes.png) to a directory where you will remember.
- Select Eyelashes from the Outliner.
- Select the Materials tab.
- Click the + button to the right of the material list to create a new material slot.
- Click the '+ New' button next to the material combobox to add a new material.
- Rename the new material to **lashes**.
- With the Eyelashes layer selected in the outliner, and the Lashes material highlighted in the material editor, use the Tab key to go into Edit Mode.
- Click the ‘Assign' button in the material editor.
- Scroll down in the Material tab until you see the ‘Transparency' section. Check the Transparency box and change the ‘Alpha' value to 0.00.
- Set the specular color for the Lashes material to black.
- While still editing the Eyelashes, select the Texture tab.
- Click the '+ New' button next to the texture combobox.
- From the Image section select ‘Open' and find the lashes texture named ‘mixamo_eyelashes' you previously downloaded.
- Check the 'Show Alpha' option in the Preview section.
- Make sure the 'Use Alpha' option is checked in the Image/Source area.
- Scroll down in the Texture tab to the Influence section and check the ‘Alpha’ box.
- Click the ‘Pack texture’ option to include the texture in the model.
- Select File/Export/FBX.
- Change the Path Mode to ‘Copy'.
- Select the 'Embed Textures' option next to the dropdown options that now say Copy.
- Give the Avatar a unique name and click the Export FBX button.

### Uploading to High Fidelity

Now you can package your avatar to use it in High Fidelity.

1. Launch High Fidelity’s Interface application.
2. Enable ‘Advanced Menus’ under Settings > Advanced Menus.
3. Go to Edit > Package Model.
4. Click ‘Browse’ under ‘Model File’ and select the FBX that you exported from Blender, then click OK.
5. Click OK on the next menu to export the model.
6. Create a new folder AvatarName_Exported.
7. Select your folder and click ‘Select Folder’.
8. Your output folder should contain a .fst file and a folder with textures in it.
9. Upload your avatar.