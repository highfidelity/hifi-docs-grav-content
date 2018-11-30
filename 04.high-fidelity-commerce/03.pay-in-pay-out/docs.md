---
title: "Pay-In and Pay-Out APIs"
taxonomy:
    category:
         docs
---

# Introduction

Using High Fidelity's **Pay-In** and **Pay-Out Commerce APIs**, you can create unique domains, apps, and games that can **reward users with High Fidelity Coin (HFC), Certified Marketplace Items, and/or premium content**.

Using these APIs, you can create content such as:
* VIP Domain Access
* Tip Jars
* Crane Games
* Banking Apps
* Poker Games
* Resale Shops
* Money Trees
* Vending Machines
* Trading Apps

# Table of Contents
1. [Full Examples](#examples)
    1. [Tip Jar](#tipJar)
    2. [VIP Access Zone](#vipZone)
    3. [Slot Machine Game](#slotMachine)
2. [Pay-In Commerce API](#payIn)
    1. [Scriptable, Secure Money Transfer](#moneyTransfer)
    2. [Scriptable, Secure Item Transfer](#itemTransfer)
    3. [Scriptable, Secure Item Purchases](#itemPurchases)
    4. [Scriptable Money Transfer Verification/Item Transfer Verification/Purchase Verification](#transferVerification)
3. [Pay-Out Commerce API](#payOut)
    1. [Money and Item Transfer Pre-Authorization and Redemption](#preAuth)

# Full Examples <a name="examples"></a>
For more detail about the functionality introduced by these APIs, and for simple examples using each new API, [skip this section](#payIn) and continue reading below.

## Tip Jar <a name="tipJar"></a>
[Click here](./tip-jar-example) to learn how to create an entity that, when clicked, will prompt a user to send you 10 HFC.
This example uses:
* [Scriptable, Secure Money Transfer](#moneyTransfer)

## VIP Access Zone <a name="vipZone"></a>
[Click here](./paid-entry-example) to learn how to create an exclusive VIP zone in your domain that is accessible only to paid VIPs.
This example uses:
* [Scriptable, Secure Money Transfer](#moneyTransfer)
* [Scriptable Money Transfer Verification/Item Transfer Verification/Purchase Verification](#transferVerification)

## Slot Machine Game <a name="slotMachine"></a>
[Click here](./slot-machine-example) to learn how to create a slot machine game that pays out HFC in High Fidelity.
This example uses:
* [Scriptable, Secure Money Transfer](#moneyTransfer)
* [Scriptable Money Transfer Verification/Item Transfer Verification/Purchase Verification](#transferVerification)
* [Money and Item Transfer Pre-Authorization and Redemption](#preAuth)

# Pay-In Commerce API <a name="payIn"></a>
The High Fidelity Pay-In Commerce API adds the following functionality:

## Scriptable, Secure Money Transfer <a name="moneyTransfer"></a>
An entity script or client script can open an end-user's tablet to a "Send Money" screen.
The script MUST specify a recipient, it MUST specify an amount of HFC, and it CAN specify a message to the user.

### Example
**A user running this script will be prompted to send 10 HFC to a username "steve".** When they are prompted to send this money, they will see a message: "Pay me 10 HFC and I will unlock this door!"

```
var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
tablet.loadQMLSource("hifi/commerce/common/sendAsset/SendAsset.qml");
tablet.sendToQml({method: 'updateSendAssetQML',
	assetCertID: "",
    amount: "10",
    username: "steve",
    message: "Pay me 10 HFC and I will unlock this door!"
});
```

## Scriptable, Secure Certified Item Transfer <a name="itemTransfer"></a>
An entity script or client script can open an end-user's tablet to a "Send Item" screen.
The script MUST specify a recipient, it MUST specify an item Certificate ID, and it CAN specify a message to the user.
NOTE that the specified item Certificate ID must be owned by the user running the script.

### Example
**A user running this script will be prompted to send an item to a username "steve".** When they are prompted to send the item, they will see a message: "Send me the item you've previously bought!"

```
var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
tablet.loadQMLSource("hifi/commerce/common/sendAsset/SendAsset.qml");
tablet.sendToQml({method: 'updateSendAssetQML',
	assetCertID: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", // This is a fake Certificate ID!
    amount: "1", // Amount will always be "1" regardless of what is specified here
    username: "steve",
    message: "Send me the item you've previously bought!"
});
```

## Scriptable, Secure Item Purchases <a name="itemPurchases"></a>
An entity script or client script can open an end-user's tablet to the Marketplace Checkout screen for a specified item.
The script MUST specify the Marketplace Item ID.

### Example
A user running this script will be **prompted to purchase Spectator Camera v2.3** from the High Fidelity Marketplace.

```
var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
tablet.loadQMLSource("hifi/commerce/checkout/Checkout.qml");
tablet.sendToQml({method: 'updateCheckoutQMLItemID', params: {itemId: "399921f6-bf26-4bba-8654-75d1b30f9442"}});
```

## Scriptable Money Transfer Verification/Item Transfer Verification/Purchase Verification <a name="transferVerification"></a>
If a script has the proper credentials, it can check a user's Recent Economic Activity and Inventory on their behalf. You can use this functionality to verify that another user has sent you money, sent you an item, or purchased your item from the Marketplace.

### Example
Say you want to **automatically give a user access to a part of your domain _if and only if_ a user has paid you 10 HFC.**

This example is lengthier than the others on this page, so [click here](./paid-entry-example) to go to the Paid Entry Example document.

# Pay-Out Commerce API <a name="payOut"></a>
The High Fidelity Pay-Out Commerce API adds the following functionality:

## Money and Item Transfer Pre-Authorization and Redemption <a name="preAuth"></a>
A user can pre-authorize the transfer of money or items. The user can then save this authorization record in the form of an "Authorization ID" and "Secret" value pair.
Later, a script written by this user can use these secret values to send the money or items associated with the authoriaztion record to another user.

### Example
Say you want to **pre-authorize 10 of your High Fidelity Coin to be paid out to a user who wins a contest that you are holding**. In this example, the redeption step is performed using [curl](https://curl.haxx.se/), but you can redeem a pre-authorized transfer using any script or tool that can perform `HTTP PUT` requests. Consider that Interface's `request` JavaScript module can also perform `HTTP PUT` requests, but that isn't covered in this example.

1. Use Interface's "INVENTORY" app to obtain an "Authorization ID" and "Secret" value pair associated with a 10-HFC Pre-Authorized Money transfer.
    1. Open Interface.
    2. In your HUD or tablet, open the "INVENTORY" app.
    3. Click the "Authorized Script" button.
    4. Next to "Amount", enter "10".
    5. Under "Optional Public Message", enter "You won the contest!".
    6. Click "SUBMIT".
    7. On the "Payment Authorized" screen, copy and paste the "Authorization ID" text string to a text file on your computer.
    8. On the "Payment Authorized" screen, copy and paste the "Secret" text string to a text file on your computer.
    9. Click "CLOSE", then "I'M ALL SET".
2. Hold a really fun contest! Later, you learn that a user with username "steve" has won the contest.
3. Use the following `curl` command from the command line to dispense the money authorized in (1) to username `steve`:
    1. `curl -X PUT -d authorization_id=<authorization ID from 1> -d secret=<secret from 1> -d username=steve https://highfidelity.com/api/v1/commerce/redeem`