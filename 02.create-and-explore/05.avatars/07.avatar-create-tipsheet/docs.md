---
title: Bookmark Your Avatar
taxonomy:
    category: docs
---

### <span class="c10 c12">Avatar Creation Tips:</span>

#### <span class="c10 c11">Polycount:</span><span class="c2"> </span>

<span class="c2">40k max on tris (fuse spits out an overall 30k~)</span>

<span class="c2"></span>

#### <span class="c6">Textures:</span>

<span class="c2">No maps exceeding 1024x1024 (2k maps are not needed just yet in</span>

<span class="c5">High Fidelity for avatars)</span> <span class="c8">Use PBR Materials!</span>

<span class="c8"></span>

#### <span class="c10">Info on Materials:

</span> <span class="c13">[https://docs.highfidelity.com/create-and-explore/3d-modeling/best-practices](https://www.google.com/url?q=https://docs.highfidelity.com/create-and-explore/3d-modeling/best-practices&sa=D&ust=1522890364626000)</span>

<span class="c2"></span>

<span class="c2">Keep the avatar size under 20 mbs on export (10 mbs or less would be better)</span>

<span class="c2"></span>

<span class="c2">If you are going to have multiple maps, keep higher rez maps for face and hands (1k) and for things like shoes, try to keep it lower than 512, unless it is a focal point.</span>

<span class="c2"></span>

#### <span class="c6">Blendshapes:</span>

<span class="c2">Bare minimum: Mouth Open, Blink, Brows up</span>

<span class="c2"></span>

#### <span class="c10 c11">Blendshapes we support:

</span> <span class="c7">[https://github.com/highfidelity/hifi/blob/master/libraries/shared/src/FaceshiftConstants.cpp](https://www.google.com/url?q=https://github.com/highfidelity/hifi/blob/master/libraries/shared/src/FaceshiftConstants.cpp&sa=D&ust=1522890364627000)</span>

<span class="c7">[](https://www.google.com/url?q=https://github.com/highfidelity/hifi/blob/master/libraries/shared/src/FaceshiftConstants.cpp&sa=D&ust=1522890364627000)</span>

<span class="c2">Remember to scale correctly! We use the metric system for all assets (don't make it 100 ft tall)</span>

<span class="c2"></span>

<span class="c2"> Make sure you follow our avatar standard docs guidelines when rigging.</span>

<span class="c2"></span>

#### <span class="c6">Docs on Avatar Standard:</span>

<span class="c7">[https://docs.highfidelity.com/create-and-explore/avatars/avatar-standards](https://www.google.com/url?q=https://docs.highfidelity.com/create-and-explore/avatars/avatar-standards&sa=D&ust=1522890364628000)</span>

<span class="c7">[](https://www.google.com/url?q=https://docs.highfidelity.com/create-and-explore/avatars/avatar-standards&sa=D&ust=1522890364628000)</span>

#### <span class="c6">Packaging Avatars:</span>

<span class="c5">Download High Fidelity at highfidelity.com. Launch interface and then go to Settings>Advanced menus and check it to be on. Go to</span><span class="c2"> Edit>Package Model, click Browse, and load up the fbx stored on your computer. Make sure you named all your joints the same as our avatar standards doc, if they are the joints should automatically be selected in the Set Models Properties. Save the model in your avatar folder in a new folder called “fst”.</span>

<span class="c5">Upl</span><span class="c5">oad the folder you have just created, which should contain the .fst and the folder with the fbx model, into your</span> <span class="c5">own s3 instance</span><span class="c2">.</span>

<span class="c2"></span>

<span class="c5">After packaging your avatar make sure the blendshapes in the fst file are all linked.</span><span class="c2"> The list of blendshapes and their names can be found in the Blendshape doc above. Example: bs = jawOpen = yourBlendshapeName = 1 will enable your avatar’s mouth to move.</span>

<span class="c2"></span>

#### <span class="c6">Testing:</span>

<span class="c2"></span>

<span class="c2">Bring avatar into high fidelity and make sure bounding box is correct. To do this, go to Settings> Developer Menu and enable Developer Menu by clicking on it. Then go to Developer>Avatar>Show Bounding Collision Shapes or Show Detailed Collisions.</span>

<span class="c2"></span>

<span class="c2">Check to make sure your avatar's blendshapes are working and check the weighting</span>

<span class="c2"></span>

<span class="c5">Make sure your hands work!</span>
