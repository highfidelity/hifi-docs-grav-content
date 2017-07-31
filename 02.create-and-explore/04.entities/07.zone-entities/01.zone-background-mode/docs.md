---
title: Zone Background Mode
taxonomy:
    category: docs
---

**TO BE REVIEWED**

This tutorial assumes that you have an understanding of what [Zone entities](https://wiki.highfidelity.com/wiki/Zone_entities) are and how to edit their properties with either JavaScript or using the edit.js script.

The Zone Background Mode can be set to:

1. None
2. Skybox

### None

When this option is selected, the domain's default background is displayed and the zone has no visible backdrop of its own.

### Skybox

A skybox is a method for creating the illusion of an infinite background such as a solid color, a sky, or distant mountains and buildings. If the zone's background mode is set to 'Skybox', it is possible to specify either a solid color for the background or a skybox texture URL. Skybox textures can be projected onto a zone from cubemaps and from equirectangular projections. High Fidelity automatically determines which projection a skybox texture is using and displays it accordingly. High Fidelity accepts cubemaps and equirectangular textures of any resolution as long as each side is a multiple of 128pixels.

### Cubemaps

A cubemap is a collection of six square textures that represent a scenes environment. The six squares form the faces of an imaginary cube that surrounds a scene; each face represents the view along the directions of the world axes (up, down, left, right, forward and back). It is possible to draw a cubemap from an image editing application or to render it from a 3D rendering application such as Blender or Maya.

## Setting up a Skybox

To change the background mode to skybox, select it from the Background Mode drop down.

![](zone-background-mode.png)

You may choose not to use a texture at all and just 'paint' the cubemap with a single color. To do this, change the RGB values or use the color picker. By default, the skybox color is set to black. You can use both a texture and a color effectively changing the texture's hue.

If you choose to use a cubemap texture, it must be prepared in a specific way. There are numerous video and text tutorials available to teach you how to create cubemap textures. You can use tools like Photoshop, Maya, Blender, etc to do this. Once your textures are created they need to be arranged in one of two specific ways for Interface to render them correctly on to the skybox.

- [http://hifi-content.s3.amazonaws.com/alan/production/docs/SkyboxTemplate-Cube-Faces.psd](http://hifi-content.s3.amazonaws.com/alan/production/docs/SkyboxTemplate-Cube-Faces.psd)
- [http://hifi-content.s3.amazonaws.com/alan/production/docs/SkyboxTemplate-Equirectangular.psd](http://hifi-content.s3.amazonaws.com/alan/production/docs/SkyboxTemplate-Equirectangular.psd)

Open one of the provided Photoshop templates and replace the template textures with your own. Turn off the axis/direction layers, and export the image as a jpeg. It is suggested you keep your skybox image to under 1MB so that it takes less time to render for those that are visiting your zone and have not yet cached the texture.

![](sample skybox image.jpg)

![](cubemap.gif)

In order for others to see your skybox texture, it will need to be hosted either on your domian's Asset Server or on a publicly accessible webserver like S3 or Dropbox. Place the image on the webserver and copy the url address.

Paste this address in the Skybox URL field.

## Changing the Properties via JavaScript

To change the skybox properties via JavaScript, use the following syntax for your entity properties:

```
 1 var properties = {
 2     type: "Zone",
 3     atmosphere: {
 4         center: { x: 1000, y: 0, z: 1000}, 
 5         innerRadius: 1000.0,
 6         outerRadius: 1025.0,
 7         rayleighScattering: 0.0025,
 8         mieScattering: 0.0010,
 9         scatteringWavelengths: { x: 0.650, y: 0.570, z: 0.475 },
10         hasStars: false
11     },
12     skybox: {
13         color: { red: 255, green: 0, blue: 255 }, 
14         url: ""
15     },
16     stage: {
17         latitude: 37.777,
18         longitude: 122.407,
19         altitude: 0.03,
20         day: 60,
21         hour: 0,
22         sunModelEnabled: true
23     }
24 };
```