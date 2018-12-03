---
title: "Slot Machine Example"
taxonomy:
    category:
         docs
---

Say you want to create a slot machine game that pays out HFC in High Fidelity.

To do that:

# 1. Place an unscripted "Slot Machine" entity in your domain
First, you'll want to create a Slot Machine entity in your domain. This is the first step of the Slot Machine project, and is the most open-ended! It's up to you to decide what a "slot machine" looks like.

If you're following along with the particular example in this document, import the following JSON into your domain: [basicSlotMachine_noScripts.json](./basicSlotMachine_noScripts.json)

Later, you will lock this entity so that nobody can make changes to it or its children.

# 2. Pre-authorize Game Winning Payout Funds
In our slot machine example, players will pay you (the domain owner) 10 HFC to start playing, and the slot machine will pay out 10 HFC if/when the payer wins.

You will now learn how to pre-authorize the first payout of 10 HFC.

1. In your HUD or tablet, open the "INVENTORY" app.
2. Click the "Authorized Script" button.
3. Next to "Amount", enter "10".
4. Under "Optional Public Message", enter "Slot Machine Winnings".
    ![](./images/preAuth01.png)
5. Click "SUBMIT".
6. On the "Payment Authorized" screen, copy and paste the "Authorization ID" text string to a text file on your computer. You'll use this later.
7. On the "Payment Authorized" screen, copy and paste the "Coupon ID" text string to a text file on your computer. You'll use this later.
8. Click "CLOSE", then "I'M ALL SET".

# 3. Obtain Auth Token
You'll have to obtain a High Fidelity authentication token that has the `commerce` scope. You will use this token in a later step when writing an Assignment Client script that'll check your Recent Economic Activity for recent transactions of 10 HFC made in your domain with a specific memo.

To obtain this auth token:
    a. Go to https://highfidelity.com/user/tokens/new
    b. Name the token something memorable.
    c. Select the `commerce` scope.
    d. Click "Create Token".
    e. Copy the token somewhere safe for now.

# 4. Attach the game logic to the Slot Machine Base
You'll have to write an Entity Server Script, then attach it to the Slot Machine Base entity. This Entity Server Script will handle the slot machine game logic, including:
* Knowing when to start a new spin, and knowing whether a user who attempted to spin has paid
* Changing the slot machine reel colors during a spin
* Checking the end state of the reels to determine win/loss
* Paying out pre-authorized funds

[Click here](./slotMachineEntityServerScript.js) to download a pre-made "Slot Machine" Entity Server Script. Follow along with the comments in the code to understand what it's doing!