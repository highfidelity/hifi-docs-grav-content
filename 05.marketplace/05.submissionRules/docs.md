---
title: 'Marketplace Submission Rules'
taxonomy:
    category:
        - docs 
---
All submissions to the Marketplace must conform to these rules.
___
#### Presentation
* **Preview Image:** A preview image must be included with all items. 
    * Preview images must clearly show what is included in the package. Images providing context (avatars holding the item, nice backgrounds, etc.) are permitted as long as the description text clearly states what content is not included with the item. 
    * Images must be proper quality, resolution, and be visually appealing. 
    * If the item doesn't have visual elements, the preview image must show context for the functionality of the item, (e.g. including an image of a VR controller for a script that adds controller functionality).
* **Description Text:** Description text must clearly state what is included in the item and describe all relevant functionality. 
    * Descriptions must be in English and use proper grammar, spelling, and capitalization. 
    * The Marketplace Admin Team may make minor modifications to the description for corrections or to provide clarity. 
* **Titles:** Item titles must be properly capitalized and only include the item name. 
    * Do not include subtext, taglines, or descriptive text in your title; these belong in the description text. This includes adding your username to the title as branding.

#### Documentation
* Any item that requires any kind of setup, special functionality, or important technical information must include documentation. This can be included in the description text or appear for the user when the item is downloaded into High Fidelity. 
* Includes information about the rez rights required to use the item.

#### Licensing
* All Marketplace items are under the Proof of Provenance License (PoP License) v1.0. Custom or alternative licenses are not permitted, unless they are in conjunction with the PoP license, in which case the additional licenses need to be added to the description or as a comment in the code. You can read more about the PoP license [here](https://digitalassetregistry.com/PoP-License/v1/).

#### Copyright and Trademark
* Sellers must have absolute rights to the content submitted to the marketplace. No material in violation of copyright law will be permitted.

#### Inappropriate Content
* **Nudity/Pornography:** No pornographic or overtly sexual content is permitted. Nudity in non-sexual context is permitted at the discretion of the Marketplace Admin Team. This can include content such as nude statues or paintings.
* **Disturbing Content:** Content made to be excessively violent or cause extreme discomfort to users is not permitted. This includes excessive violence or gore.
* **Hate Speech:** Absolutely no hate speech or imagery of any kind is permitted, including, but not limited to attacking race, religion, ethnic origin, national origin, gender, disability, or sexual orientation.

#### Restricted content
* Any content marketed as a version of an item that is meant to allow users to experience a product before purchasing the full version is permitted (demo, trial, lite, etc.). The description text must clearly state all limitations, and the restricted version must be free. 

#### Submissions with Scripts:
* Your scripts should have no linter errors, using the [High Fidelity linter](https://github.com/highfidelity/hifi/blob/master/.eslintrc.js).
* All code should be self contained and all libraries need to be uploaded alongside your item. 
* No minified code, it should be human readable and well documented. No obfuscated or unintelligible code.
* You should destroy all entities created, unless explicitly stated in your description.
    * Use Script.scriptEnding.connect() described in our documentation [here](https://docs.highfidelity.com/api-reference/namespaces/script#.scriptEnding).

#### Art Submissions:
* Art assets uploaded are limited to 4K resolution.
* We allow only .png and .gif formats due to their lossless compression.

#### Submission Standards for Specific Categories:
* **Avatars:** Avatars should not have more than 40k polygons.
* **Environments:** Environments need to be limited to 200 entities and please make sure your content is centered around {0,-10,0} so when rezzed, users will be in the middle.
* **Apps, Scripts, and Tools:** Your application should have an .app.json root file which includes your .js and your .html files.
* **Wearables:** Your wearable must have a parentJoint described in your JSON, as well as userData describing how it is to be worn.

*Content found to infringe on copyrights and content found to be malicious after being accepted will be invalidated. This will halt all access to the item and it will no longer be able for purchase or rezzing.*
