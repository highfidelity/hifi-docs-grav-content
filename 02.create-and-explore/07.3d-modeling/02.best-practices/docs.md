---
title: Best Practices for Making 3D Content
taxonomy:
    category: docs
---

*Learn the best practices for making 3D content in VR.*

## Overview

Making 3D models for High Fidelity (and VR) is different in comparison to making models for films, videos and games. This page details how you can incorporate the best practices for 3D Modeling while you create content for High Fidelity.

## Introduction

Making 3D models for VR is different because of the deviations in the creation process. 3D models for VR are rendered twice (for both right and left eyes). This means that the number of polygons on your model and the number of materials you use will affect your performance. All VR headsets run at 90Hz. This means you’ll have to keep your framerate at 90fps and be cautious about your model’s size. Models that are too big or very complex can slow down the framerate, and it could make people feel nauseous.

### Creating 3D Models

While creating 3D Models, check for the following:

- Polycount: Your count should resemble that of a model for a tablet game - not too high, but not too low either.
- Remove edge loops that are not needed.
- Clean the mesh to make sure there are no N-gons and no coplanar faces.

### Texturing & Materials

Here are some of the key points you need to remember while working on the texturing and materials:

- Always try to create Atlas maps: An Atlas map is where every piece of your content shares the same material and UV space. The robot in the figure below is an example where all the pieces are sharing one UV map. Try to not give separate pieces different materials. For example, a separate material and UV layout for the hands, feet, and face. Keep everything as uniform as possible.
- High Fidelity’s engine only supports one UV set for all material texture channels.

#### PBR (Physically Based Rendering)

PBR is the concept that governs how light reflects off different surfaces making a model accurately represent real-world materials.

| Albedo                                   |
| ---------------------------------------- |
| Metallic (should always either be fully white or black) |
| Roughness                                |
| Normal                                   |
| Ambient Occlusion                        |
| Emissive maps                            |

If you’re using the Stingray material in Maya, scroll to the bottom and break connections for the 3 DDS files that are included.

#### For textures:

- Preferably use .png files.
- Choose the color types wisely to minimize the size of the final file.
- Png-8 is paletted colors (256 colors, like GIF).
- For more color resolution, you can use png-24 (png 32 for translucent mask or transparent textures).
- High Fidelity doesn’t support png48 or png64.

#### Each material texture channel expects texture of particular color format to express that property correctly:

- Albedo is a color in standard gamma sRGB Format (sRGBA if transparent or contains an alpha mask)
- Roughness is a monochrome gradient (B&W)
- Metallic is a black(no) OR white(yes) (definitely use png-8 for metallic)
- Normals are linear RGB color
- Ambient Occlusion is a monochrome gradient (B&W)
- Emissive ia a sRGB color (like albedo)

You can define the way different surfaces look while still using one material. Your material can contain separate maps that combine into one material (following the PBR pipeline). Together, these are composited into a single material and drawn in a single draw call.

The number of textures per model defines the rule for the maximum resolution of the model textures:

| Num textures in the model (.fbx) | Maximum resolution (per texture) (M = million, K = thousand) |
| -------------------------------- | ---------------------------------------- |
| Up to 8                          | 2048x2048 or 4M pixels                   |
| From 9 Up to 32                  | 1024x1024 or 1M pixels                   |
| From 33 Up to 128                | 512x512 or 250K pixels                   |
| From 129 Up to 512               | 256x256 or 65K pixels                    |

When loaded in the engine, textures are automatically resized to a grid of 128x128. This is why to pick sizes which are multiples of 128.

For faster load time and fewer draw calls, keep texture sizes small and try to use just one or two materials per object whenever possible.

If you are a Maya user and using the Stingray PBS shader, be sure to remove connections to the two Global Textures and Brdf Lut image by right-clicking the texture name and selecting Break Connections. This will cut about 2 MB off your model’s bandwidth.

**Draw calls:** Draw calls happen before something gets rendered on screen. 1 model w/ 1 material = 1 draw call There are no definitive measures for a desirable polycount. You need to balance between draw calls and polys. Fewer draw calls means more room for polys. Smaller textures means more room for higher poly models.

### Debug

You can debug model material properties in High Fidelity in different ways:

- Using the debugDeferredLighting.js script. You can find it by going to **Edit > Running Scripts**. In this window, look for scripts you can load. Follow this path - `developer/utilities/render/debugDeferredLighting.js`, to find the script.
- Check the geometry mesh by rendering wireframe.
- Check with /without lighting enabling disabling the various light contributions.
- Use the combo box and check out the various material properties rendered in-world.


![](debug-deferred-lighting.PNG)
=======

