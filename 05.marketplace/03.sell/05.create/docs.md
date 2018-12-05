---
title: 'Create Your Own Wearable'
taxonomy:
	category: docs
---

## Overview
This guide details recommendations to create your own avatar wearables to be sold in High Fidelity hosted shopping areas. 

## Introduction
Learn how you can create avatar wearables that you can sell in our shopping areas like Avatar Island. 

>>>>> If you're making a wearable entity for the Marketplace, make sure it is fit to the default wooden mannequin avatar (unless you are specifically making it to go with a very specific base avatar model).

### Automated Tools
There are two automatic tools that you can use to create and set up your wearable for sale on the Marketplace. 

* Set up your store with models where you would like them.
* Package for marketplace: https://hifi-content.s3.amazonaws.com/DomainContent/AvatarStore/Utilities/WearableJSONExporter/marketplace-packager.js
* This app lets you click on an entity in the space, select the desired joint for it, and export a JSON file that can be uploaded to the Marketplace. 
* Use the JSON file and updated model URL to upload to the Marketplace. 
* Make your store copy demo-able: https://hifi-content.s3.amazonaws.com/DomainContent/AvatarStore/Utilities/Wearable%20Creator/create-wearable.js
* This app lets you click on an entity in the space, paste in the marketplaceID, select the joint, and save it. It will then attach the appropriate demo scripts and user data to the store copy and lock it. 

### Manual Process

Avatar wearables have the concept of a 'display copy'. This 'display copy' contains the user data for spawning new wearables via an entity server script. The script does not require a user to have rez or rez temporary permissions to use. 

* Import your model into the store and set it up on display. 
* Set grabbable to `true` and make sure dynamic and cloneable are `false`. 
* Uncheck all boxes under 'Collides With' other than 'Dynamic Entities'.
* Add the following user data into your wearable's user data field:
```
{
 "Attachment": {
 "action": "attach",
 "joint": "Hips",
 "attached" : false,
 "options": {
 "translation": {
 "x": 0,
 "y": 0,
 "z": 0
 },
 "scale": 1
 }
 },
 "grabbableKey": {
 "cloneable": false,
 "grabbable": true
 },
"marketplaceID" : UUID_for_Marketplace_Page_To_Link_To
}
```
The above user data is required to specify what joints an wearable can be attached to. The marketplaceID should match the id of whatever item you want someone to purchase. For joints that can be attached to either the left or the right, use "[LR]" as a prefix, e.g. [LR]ForeArm. Currently, we are limited to a single joint.

* Add the following script to the server script field: https://hifi-content.s3.amazonaws.com/liv/avatar_shopping_demo/wearableServer.js
* Lock your display copy. It will ensure that there are always at least 1 clone to grab and will spawn a new wearable with a lifetime of five minutes when an item is removed from the shelf in a shopping area. 

#### Exporting for Marketplace
To export your item for uploading to Marketplace, first follow the standard steps for exporting entities and make the following changes in the JSON:

```
Change to:  "owningAvatarID": "{00000000-0000-0000-0000-000000000000}"
Change to: "parentID": "{00000000-0000-0000-0000-000000000001}",
Change to:  "clientOnly": 1,
Specify: "collidesWith": "",
Specify: "shapeType" : "box"
Specify: "collisionMask" : "0"
```
Do not include the script or server script URLs in your marketplace JSON copy. Remove these if present when exporting.

Sample Marketplace JSON for "Teeny Beanie": 

```
{
 "Entities": [
 {
 "age": 24.102115631103516,
 "ageAsText": "0 hours 0 minutes 24 seconds",
 "clientOnly": 1,
 "collidesWith": "",
 "created": "2017-10-13T21:33:26Z",
 "dimensions": {
 "x": 0.208173930644989,
 "y": 0.23141217231750488,
 "z": 0.24746361374855042
 },
 "id": "{858c0c20-f500-4702-bf27-b01ebb222187}",
 "lastEdited": 1507930345103568,
 "lastEditedBy": "{be5d5141-b41b-441f-8cc1-e4520d546c42}",
 "modelURL": "https://hifi-content.s3.amazonaws.com/jimi/avatar/photo-real/Clothes/Accessories/Beanie.fbx",
 "owningAvatarID": "{00000000-0000-0000-0000-000000000000}",
 "parentID": "{00000000-0000-0000-0000-000000000001}",
 "queryAACube": {
 "scale": 0.3976508677005768,
 "x": -0.1988254338502884,
 "y": -0.1988254338502884,
 "z": -0.1988254338502884
 },
 "rotation": {
 "w": -0.3166559636592865,
 "x": 0.27402493357658386,
 "y": 0.8842571973800659,
 "z": -0.20657777786254883
 },
 "shapeType": "box",
 "type": "Model",
 "userData": "{\"Attachment\":{\"action\":\"attach\",\"joint\":\"HeadTop_End\",\"attached\":false,\"options\":{\"translation\":{\"x\":0,\"y\":0,\"z\":0},\"scale\":1}},\"grabbableKey\":{\"cloneable\":false,\"grabbable\":true},\"marketplaceID\":\"47b6ff9a-4f34-45a2-a7b1-9059876212e5\"}",
 "marketplaceID" : "47b6ff9a-4f34-45a2-a7b1-9059876212e5",
 "visible": 1
 }
 ],
 "Version": 74
}
```




