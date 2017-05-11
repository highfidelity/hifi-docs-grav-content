---
title: Marketplace
taxonomy:
    category: docs
---

High Fidelity's Marketplace is the beginning of a complete object registration, ownership and distribution system.

No form of payment has yet been implemented, so everything posted is free to "Get" by anyone. Also there are not yet owner/creator indications, nor is there a permission system.

For now, the marketplace allows users to upload content the creator wishes to be made freely available to other High Fidelity users. Anything posted to the High Fidelity marketplace is reviewed before it is available to others to protect against unauthorized copying and distribution.

## Guide to Buying for Shoppers

![Market.png](https://wiki.highfidelity.com/images/thumb/9/9f/Market.png/500px-Market.png)

1. Click on the edit icon.
2. Click on the market icon
3. Select your desired item
4. It will appear in front of your avatar

There is no concept of personal inventory in High Fidelity, so all items are simply placed in world using this method any time you need. This means you can either leave your item on your domain or delete / re-get items as needed.

## Guide to Selling for Creators

### Marketplace Submission Guidelines


The [Marketplace Submission Guidelines](https://wiki.highfidelity.com/wiki/Marketplace_Submission_Guidelines) contains information you'll need to increase the likelihood of your submission appearing on the Marketplace.

### Uploading Items

The process of uploading your content to High Fidelity’s Marketplace has several key steps:

1. Add a New Item

    

   \- Click the "+ New Item Button." The page you are taken to will contain fields to let you name and describe your new item as well as add a picture, set relevant categories, license options, and to attribute any co-creators or authors. Once you have set a name for your item you can save it as a draft by clicking "Save Draft." At any point during the upload process prior to submission you will be able to return to this draft item and change any fields related to it by going to your account dropdown in the top navigation and clicking "My Items."

   [![Marketplace-My-Stuff-Add-Item.png](https://wiki.highfidelity.com/images/thumb/8/85/Marketplace-My-Stuff-Add-Item.png/500px-Marketplace-My-Stuff-Add-Item.png)](https://wiki.highfidelity.com/wiki/File:Marketplace-My-Stuff-Add-Item.png)

2. Upload Your Assets

    

   \- Once you have saved a draft, you will see the Assets section of the upload page that contains basic tools to upload files to Marketplace's servers, as well as to create and rename folders to organize your files on those servers. Once the upload of an asset is complete, selecting it in the file manager window will reveal its URL for you to copy and paste into your root file.

    

   Note: Some browsers, including Safari, will not show the button to copy the URL of an uploaded asset, but ctrl-clicking on the path of the selected file will let you choose to 'Copy Link.' 

   Your item's root file is a either a

    

   .js

   , a

    

   .json

    

   or an

    

   .fst

   . High Fidelity's Docs has a more detailed overview of how each of these types function as well as how to create them. Whichever type of root file you use, you will need to update it with the URLs of the assets you uploaded in the section above. Once your root file is ready and uploaded to the Assets section and select it as your root file.

   [![Marketplace-Item-Assets.png](https://wiki.highfidelity.com/images/thumb/c/c5/Marketplace-Item-Assets.png/500px-Marketplace-Item-Assets.png)](https://wiki.highfidelity.com/wiki/File:Marketplace-Item-Assets.png)

3. Submit for Review

    

   \- Once you have completed the upload process and you are ready to share your new item on the Marketplace, review the terms on the upload page and if you agree, click the 'Submit for Review' button. Your item will then be shared with our team to make sure it loads correctly and complies with the terms of use. If all is well, your item will go from 'In Review' status to 'Active' status. If there's an issue with your submission, we will reach out to work with you to fix it and resubmit.

   [![Marketplace-Item-In-Review.png](https://wiki.highfidelity.com/images/d/d1/Marketplace-Item-In-Review.png)](https://wiki.highfidelity.com/wiki/File:Marketplace-Item-In-Review.png)

### Editing Your Uploaded Items

Each Marketplace item can be set to one of three status states: **Draft**, **In Review** and **Active**. The status of an item determines which elements can be edited freely and which elements require re-submission and review.

- **Draft** items can be edited freely by their creators.
- **In Review** items can be edited freely but because they are actively in review, the reviewer may at any time approve the version most recently submitted. Because of this, it's advisable to make all necessary changes before submitting an item for review.
- **Active** Active items can be edited to a limited extent without requiring re-submission, but changes to an item's assets or content file will require re-submission for review.

### Best Practices

#### JavaScript

Where possible, use relative paths when referencing external assets, like other scripts, models, sounds, etc. This will keep your content portable and save you work in the future when you update your marketplace items.

Example, assuming the script URL is "[http://mpassets.highfidelity.com/0a5e847a-1e1f-4fb9-9081-a07b216393a5-v1/script1.js](http://mpassets.highfidelity.com/0a5e847a-1e1f-4fb9-9081-a07b216393a5-v1/script1.js)"

```
// BAD
Script.include("http://mpassets.highfidelity.com/0a5e847a-1e1f-4fb9-9081-a07b216393a5-v1/script2.js");

// GOOD
Script.include("script2.js");


// BAD
const MODEL_URL = "http://mpassets.highfidelity.com/0a5e847a-1e1f-4fb9-9081-a07b216393a5-v1/assets/model.fbx";

// GOOD
const MODEL_URL = Script.resolvePath("assets/model.fbx");

```

### Frequently Asked Questions

#### Can I sell my items?

Not yet. The Marketplace is still young and we have not yet built the infrastructure required to buy and sell items for money. For the time being, every item is shared free of cost.

#### How are my items protected?

As part of the upload process, you can set the Creative Commons license appropriate for your work and everyone who uses your item agrees to abide by that license when they download it. For more information about Creative Commons and the licenses they define, click [here](https://creativecommons.org/licenses/).

#### What file types are accepted?

- For **models**: .FBX and .OBJ
- For **images/textures**: .JPG, .PNG, and .TGA
- For **audio**: .WAV (Mono or Stereo or Ambisonic, 16-bit at 24 or 48 Khz)

#### Can I change parts of an item after it's been approved?

Yes. Active items can be edited to a limited extent without requiring re-submission, but changes to an item's assets or content file will require re-submission for review.

#### Why did I get an error message during the upload process?

If you experience an error that impacts your upload of files, there are several possible causes:

- If you have a browser open to the edit page for an item for more than twelve hours without saving or refreshing, your session token will expire. Refreshing the page and saving your work at regular intervals will prevent this.
- If you chose a folder name or uploaded a file with a name uses characters prohibited by our file system ( !, -, _, ), (, ., *, ') you will get an error.

#### Are my assets cached?

Assets are specifically not cached while an item's status is 'Draft' or 'In Review', but once an item is approved, assets related to that item are cached.