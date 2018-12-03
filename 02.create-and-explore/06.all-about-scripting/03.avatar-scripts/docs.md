---
title: Avatar Scripts
taxonomy:
    category: docs
---

## Overview
You can spruce up your avatar by attaching a script that will create a special effect, such as flowing hair or particle clouds. 

## Avatar Scripts
Avatar scripts run automatically when an avatar is worn and stop when the avatar is removed. Avatar scripts only run on the client that is wearing the avatar, other users in the domain will be able to see the script in action, but they will not be able to run the scripts themselves.	

In order for avatar scripts to work properly, you must modify your avatar's FST file to include the desired script.

## How to Add an Avatar Script
In order to attach a script to your avatar, you must modify your avatar's FST file to include the path where your script lives. There are two ways to update your FST file:
1.  You can manually add a line to the FST file telling the avatar where to find the script file using `script = [FLOW SCRIPT URL HERE]`. For example: 
![](addScript1.PNG)
2. You can also use our Package Model tool to add your avatar script. 
    
    a. Create a folder in the path of your avatar that includes the script.
    
    b. In the interface, go to Edit > 'Package Model as .fst'

    c. Select the path in the "Script Directory" section of the Package Model tool, seen here: 

![](addScript2.PNG)
When packaging your model, the tool will iterate through the directory and add each script to the FST file. Now, you can upload the folder structure to the Marketplace or to your preffered hosting service.
## How to Stop an Avatar Script
 You can temporarily disable or restart your avatar script in the script interface (crtl + J) by pressing the close or reload button. 
 ![](\endFlow.png)
 However, there is no way to permanently prevent the script from running, other then removing the script field from the FST file.
## Example Script
Here is an example of an avatar that is rigged appropriately to use with a Flow script: [Mannequin with Hair](https://github.com/highfidelity/hifi-docs-grav-content/tree/master/02.create-and-explore/05.avatars/08.%20create-avatar-with-flow/mannequinHairTest8.fst).


