---
title: "Tip Jar Example"
taxonomy:
    category:
         docs
---

Here you will learn how to create an entity that, when clicked, will prompt a user to send you 10 HFC.

# 1. Place a "Tip Jar" cube in your domain
Use the `CREATE` app to place a cube in your domain. This cube will be the designated "Tip Jar". Users who click on it will be prompted to pay you 10 HFC. Move the Tip Jar to where you want it now.

# 2. Write an entity script for the "Tip Jar"
We need to write a script to put on the Tip Jar entity from Step 1. This script will do the following:
* When a user clicks the cube, they will be prompted to pay a specified username (you) 10 HFC with the message "Here's a 10 HFC tip for doing a cool thing!".

[Click here](./tipJar.js) to download a pre-made "Tip Jar" entity script. Follow along with the comments in the code to understand what it's doing!

# 3. Add the entity script to the Tip Jar
You'll have to add the entity script from above to the Tip Jar cube entity:
1. Modify the `DESTINATION_USERNAME` variable within `tipJar.js` to match your username.
2. Upload the `tipJar.js` script to a publicly-accessible location such as S3. Copy its URL.
3. In Interface, use the `CREATE` app to select the Tip Jar cube entity from earlier.
4. In the entity's Properties tab, scroll down to "Script" and paste the URL from above into the text box. Press Enter.
5. Lock the entity so nobody can change its attributes.

# You're done!
Close the `CREATE` app and click on the Tip Jar cube entity with your mouse. You should see a window pop up prompting you to pay 10 HFC to the username that you specified in the script.