---
title: Tutorial: Create a Purchase Button for Marketplace Sales
taxonomy:
    category: docs
---

If you are selling items on the Marketplace, you can have a space in your domain where users can easily buy your items. This could be done with a display copy of your items, an image of your item, or a purchase button for users to click. 

**On This Page:**

- [Prerequisites](#prerequisites)
- [Get an Item's MarketplaceID](#get-an-items-marketplace-id)
- [Write a Purchase Item Script](#write-a-purchase-item-script)
- [Create an Entity to Use as a Button](#create-an-entity-to-use-as-a-button)
  
  
## Prerequisites

Consider getting familiar with the following concepts before starting this tutorial:

- [Create New Entities](../create-entities)
- [Change How Entities Look](../entity-appearance)
- [Define an Entity's Behavior](../entity-behavior)
- [Get Started with Scripting](../../../script/get-started-with-scripting)
- [Client Entity Scripts](../../../script/client-entity-scripts)
- [Write Your Own Scripts](../../../script/write-scripts)
- [Purchase Marketplace Items from Script](../../script/transfer-hfc-tutorial.html#purchase-marketplace-items)
  
## Get an Item's MarketplaceID
If you are putting up an item (in your domain) you have on sale in the Marketplace, you need to get the item's 'marketplaceID'. This is a unique identifier that can be found by viewing the Marketplace page in a browser window.

1. In your browser of choice, navigate to [www.highfidelity.com/marketplace](www.highfidelity.com/marketplace).
2. Locate the item.
3. Copy the multi-number identifier at the end of the URL in the address bar of your browser. This is your item's 'marketplaceID'.

## Write a Purchase Item Script

The button we'll create is an entity with a script attached (entity script). This attached script defines what happens when a user clicks or triggers the entity. We've used [buy-item.js](https://hifi-scripting-101.glitch.me/entity-client-script-buy-item.js), the script used to open a specified Marketplace page. You can also [write your own script](../../../script/write-scripts) to suit your needs.

The buy-item.js script we've used:
+ Uses High Fidelity's [JavaScript API](../../../api-reference) to determine when a user clicks with the mouse or triggers the entity using hand controllers.
+ Opens the user's Tablet to the purchase page if there is a valid 'marketplaceID' specified in the 'userdata' field of the entity that is clicked or triggered.
  
## Create an Entity to Use as a Button

Any entity you create to be used as a button has to be [triggerable](../entity-behavior#set-an-entity-to-trigger-scripts) so that the script can detect when you use your hand controllers to trigger an event.

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. [Create an entity](../create-entities) to be used as a button. This can be a 3D model or a box or sphere entity.
3. Go to the 'Properties' tab and scroll down to 'Behavior'.
4. Select 'Code' from the drop down menu in the 'User Data' property. Add the following line, replacing 'YOUR_MARKETPLACE_ID_HERE' with the 'marketplaceID' that you copied in the first step of the tutorial:
```JSON
{'marketplaceID' : 'YOUR_MARKETPLACEID_HERE'}
```
5. Next to 'Script', paste the script URL. In this case, it is '[buy-item.js](https://hifi-scripting-101.glitch.me/entity-client-script-buy-item.js)'.
5. Scroll down to 'Triggerable' and ensure that 'Triggerable' is selected.
6. Exit the **Create** Tools app and click or trigger the button to see the tablet page open up to the item's purchase page. If a user has already purchased the item that is linked, they will be shown a page that allows them to re-purchase another copy, or view it in their **Inventory**.

**See Also**

- [Create New Entities](../create-entities)
- [Change How Entities Look](../entity-appearance)
- [Define an Entity's Behavior](../entity-behavior)
- [Get Started with Scripting](../../../script/get-started-with-scripting)
- [Client Entity Scripts](../../../script/client-entity-scripts)
- [Write Your Own Scripts](../../../script/write-scripts)
- [Interact with Your Environment](../../../explore/interact-objects)

