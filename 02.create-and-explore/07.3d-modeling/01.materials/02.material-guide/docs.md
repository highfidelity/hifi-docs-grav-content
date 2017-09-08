---
title: Materials Guide (Blender & Maya)
taxonomy:
    category: docs
---

The High Fidelity Material defines several channels of data used by the rendering engine. These channels can be configured in different ways from different fields as indicated by the following table:

| Channel   | Fields      | Type            | Configurations | Results           |
| --------- | ----------- | --------------- | -------------- | ----------------- |
| Opacity   | value & map | scalar in [0,1] | value& map     | value.a map.a     |
| Albedo    | value & map | sRGB color      | value& map     | value.rgb map.rgb |
| Roughness | value & map | scalar in [0,1] | value          | value.r           |
| Metallic  | value & map | scalar in [0,1] | value          | value.r           |
| Emissive  | value & map | sRGB color      | value          | value.rgb         |
| Normal    | map         | XYZ normal      | map            | map.xyz           |
| Occlusion | map         | scalar in [0,1] | map            | map.r             |
| Lightmap  | map         | sRGB Radiance   | map            | map.rgb           |

When importing a FBX model, every FBX material encountered is converted to an equivalent Hifi material created following the conversion rules as defined in the following table. The table also details how Modeling packages (Maya & Blender) generate the FBX material properties.

## Hifi Opacity Value & Map

Opacity Map must be the same texture as albedo Map. Only if the albedo map is also bound to the opacity map channel then the opacity map is considered assigned. If it is the case, the Albedo/Opacity Map is scanned and if there are meaningful alpha values then Opacity map is used.

### Blender

| HIFI Material Properties | FBX Fields                               | Comment                        |
| ------------------------ | ---------------------------------------- | ------------------------------ |
| Opacity = Opacity        | Opacity = 1 - average(Blender.Transparency.Alpha) | Blender UI as seen in Image A. |


| HIFI Material Properties                 | FBX Fields                               | Comment                        |
| ---------------------------------------- | ---------------------------------------- | ------------------------------ |
| Opacity = OpacityOpacityMap = Tex.Mat.TransparencyFactor (if the same as AlbedoMap) | Opacity = 1 - average(Blender.Transparency.Alpha)Tex.Mat.TransparencyFactor= Blender.Texture.Diffuse.Alpha | Blender UI as seen in Image B. |


| HIFI Material Properties                 | FBX Fields                               | Comment                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| Opacity = OpacityOpacityMap = Tex.Mat.TransparencyFactor | Opacity = 1 - average(Blender.Transparency.Alpha)Tex.Mat.TransparencyFactor= Blender.Texture.Diffuse.AlphaTex.Mat.DiffuseColor: Blender.Texture.Diffuse.Color | When AlbedoMap and Opacity Map are the same then check the 2 channels in the Influence ui. UI as seen in Image C. |


### Maya

| HIFI Material Properties | FBX Fields                               | Comment                                  |
| ------------------------ | ---------------------------------------- | ---------------------------------------- |
| Opacity = Opacity        | Opacity = 1 - average(Maya.TransparencyColor) | Hifi doesn't support colored transparency. The Transparency color is just a gray value.Maya UI as seen in Image D. |


| HIFI Material Properties                 | FBX Fields                               | Comment                     |
| ---------------------------------------- | ---------------------------------------- | --------------------------- |
| Opacity = OpacityOpacityMap = Tex.Mat.TransparentColor (if the same as AlbedoMap) | Opacity = 1Tex.Mat.TransparentColor = Maya.TransparencyColor.Texture | Maya UI as seen in Image E. |


## Hifi Albedo Color & Map

### Blender

| HIFI Material Properties              | FBX Fields                               | Comment                        |
| ------------------------------------- | ---------------------------------------- | ------------------------------ |
| Albedo = DiffuseColor * DiffuseFactor | DiffuseColor = Blender.DiffuseColorDiffuseFactor = Blender.DiffuseIntensity | Blender UI as seen in Image F. |


| HIFI Material Properties         | FBX Fields                               | Comment                                  |
| -------------------------------- | ---------------------------------------- | ---------------------------------------- |
| AlbedoMap = Tex.Mat.DiffuseColor | DiffuseColor = Blender.DiffuseColorDiffuseFactor = Blender.DiffuseIntensityTex.Mat.DiffuseColor: Blender.Texture.Diffuse.Color | Use the Diffuse.Color texture influence not the Diffuse.Intensity which overrides extra fields as indicated above. The Blender Diffuse color map can contain Opacity map, check the Alpha influence if needed.Blender UI as seen in Image G. |


### Maya

| HIFI Material Properties              | FBX Fields                               | Comment                     |
| ------------------------------------- | ---------------------------------------- | --------------------------- |
| Albedo = DiffuseColor * DiffuseFactor | DiffuseColor = Maya.ColorDiffuseFactor = Maya.DiffuseDIffuse = Maya.Color * Maya.Diffuse | Maya UI as seen in Image H. |


| HIFI Material Properties                 | FBX Fields                               | Comment                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| Albedo = DiffuseColorAlbedoMap = Tex.Mat.DiffuseFactor | DiffuseColor = Maya.ColorDiffuseFactor = 0.5Tex.Mat.DiffuseFactor = Maya.Diffuse.Texture | Texture and Diffuse Color are blended.Maya UI as seen in Image I. |


| HIFI Material Properties                 | FBX Fields                               | Comment                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| Albedo = DiffuseColor * DiffuseFactorAlbedoMap = Tex.Mat.DiffuseColor | DiffuseColor = Vec3(1.0)DiffuseFactor = Maya.DiffuseTex.Mat.DiffuseColor = Maya.Color.Texture | Albedo Color is always exactly the Texture map color.Maya UI as seen in Image J. |


## Hifi Emissive Color & Map

### Blender

| HIFI Material Properties                 | FBX Fields                               | Comment                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| Emissive = EmissiveColor * EmissiveFactor | EmissiveColor = Blender.Diffuse.ColorEmissiveFactor = Blender.Shading.Emit | Emissive Color is always the Diffuse Color. Shading Emit controls the Emissive Factor so it MUST be assigned correctly.Blender UI as seen in Image K. |


| HIFI Material Properties                 | FBX Fields                               | Comment                        |
| ---------------------------------------- | ---------------------------------------- | ------------------------------ |
| Emissive = NOT USEDEmissiveMap = Tex.Mat.EmissiveFactor | EmissiveColor = Blender.Diffuse.ColorEmissiveFactor = Blender.Shading.EmitTex.Mat.EmissiveFactor = Blender.Texture.Shading.Emit | Blender UI as seen in Image L. |


### Maya

| HIFI Material Properties | FBX Fields                              | Comment                     |
| ------------------------ | --------------------------------------- | --------------------------- |
| Emissive = EmissiveColor | EmissiveColor = Maya.IncandescenceColor | Maya UI as seen in Image M. |


| HIFI Material Properties                 | FBX Fields                               | Comment                     |
| ---------------------------------------- | ---------------------------------------- | --------------------------- |
| Emissive = NOT USEDEmissiveMap = Tex.Mat.EmissiveColor | EmissiveColor = Vec3(0.5)Tex.Mat.EmissiveColor = Maya.Incandescence.Texture | Maya UI as seen in Image N. |


## Hifi Roughness Value & Map

### Blender

| HIFI Material Properties        | FBX Fields                       | Comment                        |
| ------------------------------- | -------------------------------- | ------------------------------ |
| Roughness = 1 - Shininess / 100 | Shininess = Hardness * 100 / 512 | Blender UI as seen in Image O. |


| HIFI Material Properties                 | FBX Fields                               | Comment                        |
| ---------------------------------------- | ---------------------------------------- | ------------------------------ |
| Roughness = NOT USEDRoughnessMap = monochrome(1 - Tex.Mat.ShininessExponent) | Shininess = Hardness * 100 / 512Tex.Mat.ShininessExponent = Blender.Texture.Specular.Hardness | Blender UI as seen in Image P. |


### Maya

| HIFI Material Properties        | FBX Fields                   | Comment                     |
| ------------------------------- | ---------------------------- | --------------------------- |
| Roughness = 1 - Shininess / 100 | Shininess = Maya.CosinePower | Maya UI as seen in Image Q. |


| HIFI Material Properties                 | FBX Fields                               | Comment                     |
| ---------------------------------------- | ---------------------------------------- | --------------------------- |
| Roughness = NOT USEDRoughnessMap = monochrome(1 - Tex.Mat.ShininessExponent) | Shininess = 20Tex.Mat.ShininessExponent = Maya.SpecularPower.Texture | Maya UI as seen in Image R. |


## Hifi Metallic Value & Map

### Blender

| HIFI Material Properties           | FBX Fields                               | Comment                        |
| ---------------------------------- | ---------------------------------------- | ------------------------------ |
| Metallic = maxCoord(SpecularColor) | SpecularColor = Blender.Specular.ColorSpecularFactor = 0.5 * Blender.Specular.Intensity | Blender UI as seen in Image S. |


| HIFI Material Properties                 | FBX Fields                               | Comment                        |
| ---------------------------------------- | ---------------------------------------- | ------------------------------ |
| Metallic = NOT USEDMetallicMap = monochrome(Tex.Mat.SpecularColor) | SpecularColor = Blender.Specular.ColorSpecularFactor = 0.5 * Blender.Specular.IntensityTex.Mat.SpecularColor = Blender.Texture.Specular.Color | Blender UI as seen in Image T. |


| HIFI Material Properties                 | FBX Fields                               | Comment                        |
| ---------------------------------------- | ---------------------------------------- | ------------------------------ |
| Metallic = NOT USEDMetallicMap = monochrome(Tex.Mat.SpecularFactor) | SpecularColor = Blender.Specular.ColorSpecularFactor = 0.5 * Blender.Specular.IntensityTex.Mat.SpecularFactor = Blender.Texture.Specular.Intensity | Blender UI as seen in Image U. |


### Maya

| HIFI Material Properties           | FBX Fields                         | Comment                     |
| ---------------------------------- | ---------------------------------- | --------------------------- |
| Metallic = maxCoord(SpecularColor) | SpecularColor = Maya.SpecularColor | Maya UI as seen in Image V. |


| HIFI Material Properties                 | FBX Fields                               | Comment                     |
| ---------------------------------------- | ---------------------------------------- | --------------------------- |
| Metallic = NOT USEDMetallicMap = monochrome(Tex.Mat.SpecularColor) | SpecularColor = Vec3(0.5)Tex.Mat.SpecularColor = Maya.SpecularColor.Texture | Maya UI as seen in Image W. |


## Hifi Normal Map

### Blender

No way to define Normal map from a bumpmap in Blender that can be detected in FBX so NO bumpmap support from Blender.

| HIFI Material Properties      | FBX Fields                               | Comment                                  |
| ----------------------------- | ---------------------------------------- | ---------------------------------------- |
| NormalMap = Tex.Mat.NormalMap | Tex.Mat.NormalMap = Blender.Texture.Geometry.Normal | Pick "TextureSpace" for normal map.Blender UI as seen in Image X. |


### Maya

| HIFI Material Properties      | FBX Fields                               | Comment                            |
| ----------------------------- | ---------------------------------------- | ---------------------------------- |
| NormalMap = Tex.Mat.NormalMap | Tex.Mat.NormalMap = Maya.Bump_Mapping.Texture | Maya UI as seen in Images Y and Z. |




| HIFI Material Properties                 | FBX Fields                               | Comment                              |
| ---------------------------------------- | ---------------------------------------- | ------------------------------------ |
| NormalMap= convertToNormal(Tex.Mat.Bump) | Tex.Mat.Bump = Maya.Bump_Mapping.Texture | Maya UI as seen in Images AA and BB. |




## Hifi Occlusion Map

### Blender

Not supported.

### Maya

Not supported with the Phong material in Maya.

## Hifi Lightmap Map

Lightmap is only used for material without emissive.

### Blender

Not supported.

### Maya

| HIFI Material Properties           | FBX Fields                               | Comment |
| ---------------------------------- | ---------------------------------------- | ------- |
| LightmapMap = Tex.Mat.AmbientColor | Tex.Mat.AmbientColor = Maya.Ambient_Color.Texture |         |
