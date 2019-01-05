---
title: "Charge Users to Access VIP Zones in Your Domain"
taxonomy:
    category:
         docs
---

*Learn how you can charge users to access a part of your domain.*

This tutorial details how you can charge users 10 HFC to access a part of your domain in the current server session.

>>>> Experimental API Notice: The High Fidelity Commerce APIs introduced in this document are **Experimental APIs** and are subject to the following: A) Commerce APIs may be modified or removed at any time until Beta Release 81; B) JavaScript Commerce APIs referenced in this document and related examples are subject to change or removal without notice until Beta Release 81; and C) Upon release of Beta 81, changes to the Commerce APIs will be subject to the standard API deprecation process.

### Requirements and Glossary
To create this content, you'll need:
* Access to a High Fidelity domain that you own and where you have full permissions. Examples of such a domain include:
    * Your private [Sandbox](../../../create-and-explore/start-working-in-your-sandbox/set-up-your-sandbox)
    * [Your DigitalOcean domain](../../../create-and-explore/start-working-in-your-sandbox/digital-ocean)

Consider familiarizing yourself with the following concepts:
* The definition of an [Entity](../../../create-and-explore/entities) in High Fidelity
* The basics of [Scripting](../../../create-and-explore/all-about-scripting) in High Fidelity
    * In this example, we're going to use [Entity Scripts](../../../learn-with-us/all-about-entity-scripts).
* The basics of [High Fidelity's ATP](../../../create-and-explore/start-working-in-your-sandbox/assignment-clients)


Start by opening Interface in Desktop mode and connecting to your domain!

### Place a "VIP Zone" in Your Domain
Use the 'CREATE' app to place a zone in your domain. This zone will be the designated "VIP Zone". Only users who have paid you 10 HFC in the current server session have access to enter this zone. If the server restarts, users will have to pay for VIP status again.

Move the VIP Zone to where you want it in the domain.

### Write an Entity Script for the "VIP Zone"
We need to write an entity script to put on the VIP Zone. This script will:
* Check if a user entering the zone is a VIP or a domain admin. If they aren't a VIP or domain admin, the script will remove them from the zone.
* Change a user's status to VIP if they pay you 10 HFC. An Assignment Client (AC) script (included in this tutorial) communicates with the entity script when the user becomes a new paid VIP.

[Click here](https://s3.amazonaws.com/hifi-docs-scripts/vipZoneEntityScript.js) to download a pre-made "VIP Zone" entity script. Follow along with the comments in the code to understand what it's doing!

>>>>> All users who load the VIP Zone entity will be individually running this script as if it were a client script.

### Add the Entity Script to the VIP Zone
To add the [entity script](https://s3.amazonaws.com/hifi-docs-scripts/vipZoneEntityScript.js) to the VIP zone:
1. Upload the [`vipZoneEntityScript.js`](https://s3.amazonaws.com/hifi-docs-scripts/vipZoneEntityScript.js) script to your domain's ATP server. In Interface, go to **Edit > Asset Browser > Choose File**. Right-click the script file, then click "Copy URL".
2. In Interface, use the 'CREATE' app to select the VIP zone.
3. In the entity's Properties tab, scroll down to "Script" and paste the URL you copied into the text box. Press Enter.
4. Lock the zone entity so nobody can change its attributes.

### Obtain the Auth Token
You need to get a High Fidelity authentication token that has the `commerce` scope. You will use this token while writing an Assignment Client (AC) script. This AC script checks your Recent Economic Activity for recent transactions of 10 HFC made in your domain.

To obtain this auth token:
1. Go to https://highfidelity.com/user/tokens/new.
2. Name the token something memorable.
3. Select the `commerce` scope.
4. Click "Create Token".
5. Copy and save the token.

### Write an Authenticated Assignment Client Script
Now, write an Assignment Client script containing the authentication token you copied and saved. This AC script checks your Recent Economic Activity for recent transactions of 10 HFC made in your domain.

[Click here](https://s3.amazonaws.com/hifi-docs-scripts/vipZoneACScript.js) to download a pre-made "VIP Zone" AC script. Follow along with the comments in the code to understand what it's doing!

### Run the Assignment Client Script in Your Domain

#### Running an AC Script from ATP
To run the above AC script in your domain from ATP:
1. Set `HIFI_COMMERCE_TOKEN` to the token you saved in the `vipZoneACScript.js` script. 
2. Upload your `vipZoneACScript.js` script to your domain's ATP server. In Interface, go to **Edit > Asset Browser > Choose File**. Right-click and select "Copy URL".
3. Navigate to the Domain Settings page of your domain (for a local sandbox, this is http://localhost:40100/). 
4. Click "Content" at the top of the page, then scroll to the "Scripts" section.
5. Under "Persistent Scripts", click the `+` button on the right column.
6. Under "Script URL", paste the ATP URL you copied.
7. Click "Save and restart" at the top right of the page.

### (Optional) Make it Easy for Others to Pay You 10 HFC
This step is optional as it doesn't matter how a user sends you 10 HFC to earn VIP status. For example, if a user (in Interface) went to **Inventory > Send Money > Nearby** to send you 10 HFC while you were in your domain, they would still get "VIP status".

You can create an entity that, when clicked, will prompt the user to pay you 10 HFC. This will use the "Pay-In Commerce API".

#### Place a "Tip Cube" in Your Domain
Use the 'CREATE' app to place a cube in your domain. This cube will be the designated "Tip Cube". When a user clicks on the cube, they will be prompted to pay you 10 HFC. Move the Tip Cube to where you want it in your domain.

#### Write an Entity Script for the "Tip Cube"
We need to write an entity script to put on the Tip Cube. This script will do the following:
* When a user clicks the cube, a message pops up asking them to pay (you) "10 HFC for VIP status!".

[Click here](https://s3.amazonaws.com/hifi-docs-scripts/tipCube.js) to download a pre-made "Tip Cube" entity script. Follow along with the comments in the code to understand what it's doing!

#### Add the Entity Script to the Tip Cube
To add the entity script to the Tip Cube entity:
1. Set `DESTINATION_USERNAME` to your username in `tipCube.js`.
2. Upload the `tipCube.js` script to your domain's ATP server. In Interface, go to **Edit > Asset Browser > Choose File**. Right-click the script file, then click "Copy URL".
3. In Interface, use the 'CREATE' app to select the Tip Cube from earlier.
4. In the entity's Properties tab, scroll down to "Script" and paste the URL you copied into the text box. Press Enter.
5. Lock the entity so nobody can change its attributes.

### You're Done!
You should now have a working "VIP Zone" in your domain. Only users with VIP status can enter this "VIP Zone". You should also have a "Tip Cube" in your domain that helps users pay you HFC to become VIPs.
