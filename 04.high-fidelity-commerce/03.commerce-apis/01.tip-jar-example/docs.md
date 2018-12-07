---
title: "Create a Tip Jar For Your Domain"
taxonomy:
    category:
         docs
---

*Learn how you can create a tip jar and earn HFC in your domain.*

## Overview
Here, you will learn how to create an entity that, when clicked, will prompt a user to send you 10 HFC.

>>>>> Experimental API Notice
The High Fidelity Commerce APIs introduced in this document are **Experimental APIs** and thus are subject to the following:
* Commerce APIs on the High Fidelity Metaverse may be modified or removed at any time *until Beta Release 81*.
* JavaScript Commerce APIs referenced in this document and related examples are subject to change or removal without notice *until Beta Release 81*.
* Upon release of Beta 81, changes to the High Fidelity Commerce APIs will be subject to the standard API deprecation process.


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

### Place a "Tip Jar" cube in your domain
Use the `CREATE` app to place a cube in your domain. This cube will be the designated "Tip Jar". Users who click on it will be prompted to pay you 10 HFC. Move the Tip Jar to where you want it.

### Write an entity script for the "Tip Jar"
We need to write a script to put on the Tip Jar entity from Step 1. This script will do the following:
* When a user clicks the cube, they will be prompted to pay a specified username (you) 10 HFC with the message "Here's a 10 HFC tip for doing a cool thing!".

[Click here](./tipJar.js) to download a pre-made "Tip Jar" entity script. Follow along with the comments in the code to understand what it's doing!

### Add the entity script to the Tip Jar
You'll have to add the entity script from above to the Tip Jar cube entity. 
1. Modify the `DESTINATION_USERNAME` variable within `tipJar.js` to match your username.
2. Upload the `tipJar.js` script to your domain's ATP server using Interface's "Edit" menu -> "Asset Browser" -> "Choose File". Right click the file in the list, then click "Copy URL".
3. In Interface, use the `CREATE` app to select the Tip Jar cube entity from earlier.
4. In the entity's Properties tab, scroll down to "Script" and paste the URL from above into the text box. Press Enter.
5. Lock the entity so nobody can change its attributes.

### You're done!
Close the `CREATE` app and click on the Tip Jar cube entity with your mouse. You should see a window pop up that prompts you to pay 10 HFC to the username that you specified in the script.
