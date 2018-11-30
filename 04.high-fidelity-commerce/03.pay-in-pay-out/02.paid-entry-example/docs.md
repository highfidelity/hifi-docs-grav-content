---
title: "Paid Entry Example"
taxonomy:
    category:
         docs
---

Say you want to automatically give a user access to a part of your domain _if and only if_ a user has paid you 10 HFC in the current session.

To do that:

# 1. Obtain Auth Token
First, obtain a High Fidelity authentication token that has the `commerce` scope:
    a. Go to https://highfidelity.com/user/tokens/new
    b. Name the token something memorable.
    c. Select the `commerce` scope.
    d. Click "Create Token".
    e. Copy the token somewhere safe for now.

# 2. Place a "VIP Zone" in your domain
Next, use the `CREATE` app to place a zone in your domain. This zone will be the designated "VIP Zone". Only users who have paid you 10 HFC in the current session will be allowed to enter this zone.

# 3. Write an entity script for the "VIP Zone"
We need to write a script to put on the VIP Zone from Step 2. This script will do the following:
* When a user enters the zone, the script will check if they are a "VIP" OR if they are a domain admin and will remove them from the zone if they aren't.
* When the script receives a message from an AC script saying that someone has become a new paid VIP, and that new username is the avatar's username, the script will change their status to "VIP".

[Click here](./vipZoneEntityScript.js) to download a pre-built "VIP Zone" entity script. Follow along with the comments in the code to understand what it's doing!

Here is our VIP Zone Entity Script. Be mindful of the fact that all users who load the VIP Zone entity will be running this script as if it were a client script.

Follow along with the comments in the code to understand what it's doing!

# 4. Add the entity script to the VIP Zone
Fourth, you'll have to add the entity script from above to the VIP zone:
1. Upload the `vipZoneEntityScript.js` script to a publicly-accessible location such as S3. Copy its URL.
2. In Interface, use the `CREATE` app to select the zone from earlier.
3. In the entity's Properties tab, scroll down to "Script" and paste the URL from above into the text box. Press Enter.

2. Write an Assignment Client script containing the authentication token from (1) that checks your Recent Economic Activity for recent transactions of 10 HFC made in your domain.
    a. See "Example: Assignment Client Script" below.
3. Run the Assignment Client script on your domain.
    a. Navigate to the Domain Settings page of your domain (for a local sandbox, this is probably http://localhost:40100/)
    b. Click "Assignment" at the top of the page.
    c. Paste in the script from (2) above.
    d. Click "Run" at the top right of the page.
4. <ZRF TODO: Finish this out.>

#### Example: Assignment Client Script
<ZRF TODO: Flesh out this section, perhaps with Roxanne's example. There's an example in the Confluence Pay-In API doc, but it's probably not totally up-to-date.>
