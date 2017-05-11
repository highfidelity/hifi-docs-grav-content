---
title: Building Your Avatar
taxonomy:
    category: docs
---

**WORK IN PROGRESS**

This document describes the standards and conventions for using an avatar in High Fidelity's Interface program. The workflow for using an avatar in Interface generally falls into these 4 categories:

1. **Build **the avatar’s head, body and animation according to the avatar standards.
2. **Upload **the avatar into interface.
3. **Setup **mocap input devices such as a depth camera, Razer Hydra move or even a mocap suite.
4. **Drive **the avatar in real-time to do performances and interact with other avatars.



## Glossary

Avatar: the in-world representation of the user or non-player character (NPC). Mesh: the geometric surface that represents the avatar’s body and clothes Bones: a pivot or joint that represents the limbs in a skeletal hierarchy Skeleton: a hierarchical set bones used to pose or animate the mesh Rig: a set of skeletal controls used for animation Weights: defines how a bone influences a vertex Skinning: defines the weighting between the bones and the mesh UV mapping: defines the relationship between the mesh and a 2d texture Blendshape: a deformed version of a mesh used for morphing its surface

## Building the Avatar

Interface’s avatar is driven by an FK skeletal rig with smooth skinning. The rig is composed of three main components, the head, the body and their textures.

### Head

The head is generally composed of:

- Meshes for the head, hair, teeth and eyes,
- A set of blendshapes
- A skeletal rig
- Texture files

#### Mesh

As with any 3D object, lower vertex count will generally mean better performance. Not all mesh and material formats found in the FBX and OBJ formats are supported by High Fidelity. If the textures on a model look wrong, this may be the reason.

#### Skeleton

The head skeleton is an FK joint chain. The head joint itself should be positioned with the scene’s (0,0,0) coordinates. Doing so will help ensure that it appears correctly in Interfaces mirror window. The position of the head in the mirror window is calculated based on the distance between the body’s hips and the eye joints.

#### Skinning and Parenting

The avatar supports smooth bind skinning with up to 4 max influences on each vertex. Typically, you will smooth bind the head mesh to the neck and head bones, and then weight the vertices. You can parent the hair and teeth to the head joint. You can parent the eyes to the eye joints.

#### Facial Blendshape Rigging

Interface uses audio information to animate your avatar's mouth and eyes, and with certain plugins will also allow you to do realtime facial animation. You must create blendshapes with your avatar for these animations to be visible.

### Body

#### Skeleton

The body is composed of a body mesh and FK skeletal rig. A detailed description of the body’s joint hierarchy can be found at the bottom of this document.

#### Skinning

The skinning process is the same as with the head. You can smooth bind the skin with up to 4 max influences on each vertex. Interface will support a single body mesh or multiple meshes for things such as clothing.

## Mixamo's Fuse to Interface Pipeline

Interface uses the same joint naming convention and hierarchy as [Mixamo](https://www.mixamo.com/) and [Mixamo's Fuse](https://www.mixamo.com/fuse) avatar creator. This makes it possible for you to create and modify an avatar using Fuse, export it to mixamo.com to have its body and face automatically rigged, and then import into Interface.

Here are the steps to take get a Fuse avatar into Interface.

1. Export your Fuse model by clicking on the 'Animate' button on the top right corner of Fuse.

   ![Create Avatar Export.jpg](https://wiki.highfidelity.com/images/thumb/3/36/Create_Avatar_Export.jpg/500px-Create_Avatar_Export.jpg)

   ​

2. Enter your login information (or create a new account) and 'Upload' your model to mixamo.com.

   ![Create Avatar Upload.jpg](https://wiki.highfidelity.com/images/thumb/7/79/Create_Avatar_Upload.jpg/500px-Create_Avatar_Upload.jpg)

   ​

3. So that your avatar's expressions will be able to be driven by a 2D or 3D camera in Interface, make sure 'Facial Blendshapes' is 'Enabled' and update your preview.

   ![Create Avatar Facial Blendshapes.jpg](https://wiki.highfidelity.com/images/thumb/b/bd/Create_Avatar_Facial_Blendshapes.jpg/500px-Create_Avatar_Facial_Blendshapes.jpg)

   ​

4. Finish your rigging by clicking the "Finish" button.

   ![Create Avatar Rigging.jpg](https://wiki.highfidelity.com/images/thumb/a/a3/Create_Avatar_Rigging.jpg/500px-Create_Avatar_Rigging.jpg)

   ​

5. If you want to bring your model into Interface with a pose, you can select an animation from the available Mixamo library and Interface will read the first frame of that animation as the pose. If you don't want to pose it, click the 'Download' button.

   ![Create Avatar Download.jpg](https://wiki.highfidelity.com/images/thumb/1/1c/Create_Avatar_Download.jpg/500px-Create_Avatar_Download.jpg)

   ​

6. Select FBX from the format type drop down menu and either download your model in a T-Pose or select the "with skin" option if an animation was attached during the final rigging. Click the 'Download' button.

   ![Create Avatar Select FBX.jpg](https://wiki.highfidelity.com/images/thumb/5/5b/Create_Avatar_Select_FBX.jpg/500px-Create_Avatar_Select_FBX.jpg)

   ​

7. From within Interface, select the Edit/Package Model option.

   ![Create Avatar Edit Package Model.jpg](https://wiki.highfidelity.com/images/thumb/4/44/Create_Avatar_Edit_Package_Model.jpg/500px-Create_Avatar_Edit_Package_Model.jpg)

   ​

8. Browse to the local directory where the saved FBX is, select Avatar Body from the Model Type menu and click 'OK'.

   ![Create Avatar Local Directory Browse.jpg](https://wiki.highfidelity.com/images/thumb/6/66/Create_Avatar_Local_Directory_Browse.jpg/500px-Create_Avatar_Local_Directory_Browse.jpg)

   ​

9. Interface will look for common joint names and if it finds them in your model, automatically map them. In this case, because we use Mixamo's joint naming convention, all the mapping is automatically done. Clicking the "." in the Texture Directory field will allow you to find and select the directory where the model's textures are. When your are done confirming your joint mapping and texture directory location, click the "OK" button.

   ![Create Avatar Texture Directory.jpg](https://wiki.highfidelity.com/images/thumb/c/cc/Create_Avatar_Texture_Directory.jpg/500px-Create_Avatar_Texture_Directory.jpg)

   ​

10. Interface will ask you where you want to save the packaged model. Navigate to the directory where you want to save the packaged model and click 'OK'. 
   Your model is now ready to be rendered in Interface. In order for your model to be seen by other people, you will need to host it on a publicly accessible web-server. Something like S3 or Dropbox.

11. If you have not already saved it to a web server, move the packaged model directory to that web-server.

12. Copy the URL of the .fst in that location.

13. From within Interface, go to Interface/Preferences (Command , / Ctrl ,) and paste that url into the 'Body" field. Remove any link in the 'Head' field if there is any. Click 'Save All Changes'.

    ![Create Avatar Avatar Basics Body URL.jpg](https://wiki.highfidelity.com/images/thumb/a/a7/Create_Avatar_Avatar_Basics_Body_URL.jpg/500px-Create_Avatar_Avatar_Basics_Body_URL.jpg)

    ​

    Enjoy your new Fuse avatar, fully rigged with body joints and facial blendshapes!

## Measurement Units

Interface uses meters. When you upload an asset, Interface will interpret the scenes working units as meters. So, if you upload a cube that is 1 unit sized, in a scene whose working units are in cm, Interface will interpret the cube as 1 meter. The same will be true for feet, etc. The best thing to do is to size your asset in a scene whose working units are in meters, then upload to Interface and, in the upload options, keep the scale factor at 1. That way you’ll get predictable scaling in world and your assets integrate nicely with other assets.

A standard 6 foot man would measure about 1.8 meters.

## Animation

You can animate the avatars in two ways: One, through real-time animation data being driven by an input device like the mouse/keyboard or a motion capture device; Two, by attaching baked animation to the rig.

When driving real-time animation, you can specify the starting T-Pose of the character and allow all the incoming animation data to be applied to the joints relative to the starting position.

When attaching baked animation data, it’s critical that the joint orientation of the source animation and target rig are equivalent, since the animation data applies absolute values onto the joints. If the orientations are different, the avatar will move in unpredictable ways.

## Textures

Interface will support texture files for the head and body meshes. It supports the .jpg and .png formats at a maximum size of 1024x1024.

Typically, the head rig will have textures for the face, the hair and the eyes. A body will have textures for the clothing and skin.

The texture map will be based on the mesh topology. You can see the UV map for the standard head topology [here](https://wiki.highfidelity.com/wiki/Create_avatars#Standard_Mesh_UV_Map).

**Technical Note about Image Formats**

Technically, High Fidelity supports anything that Qt loads. Realistically, that means jpg, png, gif, and bmp, but there shouldn't be any reason to load anything other than jpg and png. When uploading models, Interface converts anything that isn't jpg or png to png.

**A Note about Filesize Optimization**

Because bandwidth can be limited, optimizing files helps the user experience. Where possible, use repeating tiled textures and limit the file resolution to 1024 squared.

## General Rigging Concepts

### Skeletons

A bit about skeletal rigs: Each avatar is controlled by a skeletal rig. Skeletons are hierarchical, articulated structures that let you pose and animate character mesh. A skeleton is much like the strings of a marionette that allow the user to puppeteer the character.

### Joints

Joints are the building blocks of skeletons and are their points of articulation. Each joint can have one or more child joints. Our standard rigs have minimum number of 15 joints and can support up to 65 joints. The location of the joints are determined by the user and how to best fit the structure of the model. The location of the joints determine how the character moves. When you bind a model to a skeleton, it is called skinning.

### Joint Orients

When creating the joints, we pay close attention to the joint orientation. The joint orientations define the local rotation axis of the joints. Joint orientation is essential to achieving appealing rig articulation and to mapping animation onto the rig in a predictable way.

With our rigs, we want to align the joints along the Y axis of the joint pivot. It’s important to keep it consistent. In the image below, note how the joints are traveling down the green or Y-axis of the bones.

![Create Avatar Joints.png](https://wiki.highfidelity.com/images/thumb/6/63/Create_Avatar_Joints.png/500px-Create_Avatar_Joints.png)

Also, pay attention to the rotation values of the joint orients. In general, they should be set to zero; however there are times when you’ll need to make adjustments.

## Auto-Rigging

Mixamo provides an auto-rigging script which automatically creates a skeleton and binds it to the character mesh. To use the auto-rigger, the user uploads an FBX to Mixamo’s auto-rigger then marks the knees, chin, wrists, elbow, groin of the mesh. The system then uses the markers to identify the joint locations and then creates the matching skeleton and binds it to the mesh.

### Smooth Skinning

During the character creation process, the system will bind the joint skeleton to the character mesh in a process called smooth skinning. Smooth skinning provides smooth, articulated deformation effects by enabling several joints to influence the same mesh vertices. With Maya, we can specify the number of joints that can influence a skin object’s points. With Mixamo, the number of joints influences are set automatically.

For clothing, the body mesh and cloth mesh are treated as separate meshes and skinned individually. It may be the case that the weights are transferred from one mesh to the other or they are weighted separately. Either way is fine, so long as the weighting is consistent.

#### FK Rigging

We use Forward Kinematics (FK) to calculate the joint movement of the avatar. When using FK rigging, any given joint movement will affect the joint and the joints descendants. For example, rotating a character's shoulder changes the position of the elbow, wrist, and hand.

#### Control Rig

If, at some point, you need to create a control rig, i.e. a set of curves to easily select the various joints in the body, you can leverage the Mixamo toolset, which involves the installing a custom python Maya script and using its interface to create an IK/FK control rig. Below is a sample control rig.

![Create Avatar Sample Control Rig.png](https://wiki.highfidelity.com/images/9/97/Create_Avatar_Sample_Control_Rig.png)

## UV Mapping

UV mapping is the process in 3D modeling of making a 2D image representation of a 3D model's surface.

![Create Avatar UV map.png](https://wiki.highfidelity.com/images/0/0a/Create_Avatar_UV_map.png)

In essence, it translates the 3D object’s X,Y,Z coordinates to a 2D U,V coordinate system. In other words, there is a UV coordinate for each X,Y,Z vertex. The basic steps for mapping UV's is: unwrap polygon to create a UV texture, edit the texture, apply the texture

There is a strict correlation between the UV texture and the surface skin weighting. If you change either the surface topology or the UV mapping after doing skin weighting, the weighting will break in unexpected ways.

### Skin weight maps

During the rigging process, when you smooth skin a surface, 3D applications like Maya can create a weight map per joint. Skin weight mapping is relative to the UV parameterization of the skinned geometry.

For example, when you bind a surface to a skeletal joint, an application like Maya will weight the vertices based on their distance to a joint in the joint hierarchy. If you create a skin weight map, it will be based on the current UVs of the selected object. Skin weight mapping is relative to the UV parameterization of the skinned geometry.

In this sample, we’ve bound a skin to a skeleton and painted the skin weights. You can see the skin weighting and its distribution across the vertices and UV parameters.

![Create Avatar Skin Weighting.png](https://wiki.highfidelity.com/images/a/a4/Create_Avatar_Skin_Weighting.png)

Then, we can export the skin weight map to an iff file for each of the joints in the hierarchy.

![Create Avatar Export Skin Weight Map.png](https://wiki.highfidelity.com/images/8/82/Create_Avatar_Export_Skin_Weight_Map.png)

If we then create a matching skinned surface in another scene and attempt to articulate it without applying the painted skin weights, you can see "rubber hose" problem in the bend.

![Create Avatar Rubber Hose.png](https://wiki.highfidelity.com/images/thumb/7/72/Create_Avatar_Rubber_Hose.png/500px-Create_Avatar_Rubber_Hose.png)

However, If we then apply the skin weight map to the surface, it gives us the kind of weight distribution that we want.

![Create Avatar Apply Skin Weight Map.png](https://wiki.highfidelity.com/images/thumb/3/3d/Create_Avatar_Apply_Skin_Weight_Map.png/500px-Create_Avatar_Apply_Skin_Weight_Map.png)

The surface in the second scene must have the same UV orientation as the original surface, but it can differ from the original as follows: It can be scaled differently but must be proportioned similarly in regions of significant deformation, typically around joints. It can have a different number of spans and sections. It can have a different world space position.

## Joint Hierarchy and Naming Convention

### Head Joint Hierarchy

1. Neck
   1. Head
      1. Headtop
      2. EyeLeft
      3. EyeRight

## Body Joint Hierarchy

1. Hips
   1. Spine
      1. Spine1
         1. Spine2
            1. Neck
               1. Head
                  1. HeadTop_End
            2. LeftShoulder
               1. LeftArm
                  1. LeftForeArm
                     1. LeftHand
                        1. LeftHandThumb1
                        2. LeftHandThumb2
                        3. LeftHandThumb3
                        4. LeftHandThumb4
                        5. LeftHandIndex1
                        6. LeftHandIndex2
                        7. LeftHandIndex3
                        8. LeftHandIndex4
                        9. LeftHandMiddle1
                        10. LeftHandMiddle2
                        11. LeftHandMiddle3
                        12. LeftHandMiddle4
                        13. LeftHandRing1
                        14. LeftHandRing2
                        15. LeftHandRing3
                        16. LeftHandRing4
                        17. LeftHandPinky1
                        18. LeftHandPinky2
                        19. LeftHandPinky3
                        20. LeftHandPinky4
            3. RightShoulder
               1. RightArm
                  1. RightForeArm
                     1. RightHand
                        1. RightHandThumb1
                        2. RightHandThumb2
                        3. RightHandThumb3
                        4. RightHandThumb4
                        5. RightHandIndex1
                        6. RightHandIndex2
                        7. RightHandIndex3
                        8. RightHandIndex4
                        9. RightHandMiddle1
                        10. RightHandMiddle2
                        11. RightHandMiddle3
                        12. RightHandMiddle4
                        13. RightHandRing1
                        14. RightHandRing2
                        15. RightHandRing3
                        16. RightHandRing4
                        17. RightHandPinky1
                        18. RightHandPinky2
                        19. RightHandPinky3
                        20. RightHandPinky4
   2. LeftUpLeg
      1. LeftLeg
         1. LeftFoot
            1. LeftToeBase
               1. LeftToe_End
   3. RightUpLeg
      1. RightLeg
         1. RightFoot
            1. RightToeBase
               1. RightToe_End

## Sample Rig Structure

![Create Avatar Sample Rig Structure.png](https://wiki.highfidelity.com/images/4/46/Create_Avatar_Sample_Rig_Structure.png)

## Standard Mesh UV Map

This UV map reflects the Mixamo mesh and UV standard. By staying consistent with the Mixamo standard, we ensure that you can work with Mixamo’s Fuse product and any of their other tools.

![Create Avatar Standard Mesh UV Map.png](https://wiki.highfidelity.com/images/thumb/0/08/Create_Avatar_Standard_Mesh_UV_Map.png/500px-Create_Avatar_Standard_Mesh_UV_Map.png)

## Creating Avatars with Morph3D's Ready Room Application

If you are using a Vive headset, you can create an avatar with the Morph3D Ready Room system and bring it directly into High Fidelity. To use Ready Room to create a High Fidelity avatar:

- Create a Morph3D account and download [Ready Room](https://www.morph3d.com/ready-room)
- Extract Ready Room from the zip download and run the EXE
- Sign in with your Ready Room account and locate the path to your Interface executable, if it isn't already found
- Launch VR mode and create your character using the sliders
- When you are happy with your avatar, move to the corner of the room and hit the button on the right-hand side to create your High Fidelity portal
- Place your hand inside the portal to enter High Fidelity with your new avatar!

## References

- Mixamo Import Documentation - [https://www.mixamo.com/fuse/import](https://www.mixamo.com/fuse/import)
- Morph3D Ready Room - [https://www.morph3d.com/ready-room](https://www.morph3d.com/ready-room)