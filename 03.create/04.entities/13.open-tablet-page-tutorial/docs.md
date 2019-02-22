---
title: Tutorial: Open to Page from Entity
taxonomy:
    category: docs
---

You can link to webpages from entities in a domain in High Fidelity. This is useful if you have items on sale and want users to be directed to the right Marketplace pages where they can be purchased.  

**On This Page:**

- [Prerequisites](#prerequisites)
- [Write a Script to Open a Web Page](#write-a-script-to-open-a-web-page)
- [Create an Entity to Use as a Button](#create-an-entity-to-use-as-a-button)

## Prerequisites

Consider getting familiar with the following concepts before starting this tutorial:

- [Create New Entities](../create-entities)
- [Change How Entities Look](../entity-appearance)
- [Define an Entity's Behavior](../entity-behavior)
- [Get Started with Scripting](../../../script/get-started-with-scripting)
- [Client Entity Scripts](../../../script/client-entity-scripts)
- [Write Your Own Scripts](../../../script/write-scripts)

## Write a Script to Open a Web Page

The script to be used here opens a webpage when a user clicks or triggers an entity. This user can view this webpage on their Tablet. 

We've written a script that opens a link to a Marketplace page when an entity/item is triggered. The script looks for the URL in the 'userdata' property of the entity and injects the Marketplace code into the link. This allows the user who triggered the script to purchase the item without having to go to the **Market** app on their Tablet or HUD. 

You can copy the script below or access the same [here](https://open-tablet-to-page.glitch.me/openTabletPageButton.js). 

```
(function(){
  var MARKETPLACE_QUALIFIER = 'https://highfidelity.com/marketplace/items/';
  var MARKETPLACE_INJECT_SCRIPT = ScriptDiscoveryService.defaultScriptsPath + "/system/html/js/marketplacesInject.js";
   
  var url;
  var tablet;
  var shouldInjectMarketplaceCode = false;
   
  function navigateToPage() {
    shouldInjectMarketplaceCode ? tablet.gotoWebScreen(url, MARKETPLACE_INJECT_SCRIPT) : tablet.gotoWebScreen(url);
  }
 
  var OpenTabletButton = function() {};
   
  OpenTabletButton.prototype = {
    preload : function(entityID) {
      try {
        url = JSON.parse(Entities.getEntityProperties(entityID, 'userData').userData).url;
        if (url.indexOf(MARKETPLACE_QUALIFIER) != -1) {
          shouldInjectMarketplaceCode = true;
        }
      } catch (e) {
        print("Unable to find a valid URL");
        url = "https://highfidelity.com";
      }
      tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
      
    },
    clickDownOnEntity : function() {
      navigateToPage();
    },
    startFarTrigger: function() {
      navigateToPage();
    }
  };
  return new OpenTabletButton();
});
```

## Create an Entity to Use as a Button
Any entity you create to be used as a button has to be [triggerable](../entity-behavior#set-an-entity-to-trigger-scripts) so that the script can detect when you use your hand controllers to trigger an event.

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. [Create an entity](../create-entities) to be used as a button. This can be a 3D model or a box or sphere entity.
3. Go to the 'Properties' tab and scroll down to 'Behavior'.
4. Paste the following JSON data into the 'userdata' field for your entity, with the updated URL:
```
{
  "url": "your_url_in_quotes_here",
  "grabbableKey": {
    "grabbable": false,
    "triggerable": true
  }
}
```
5. Next to 'Script', paste the script URL. In this case, it is [openTabletPageButton.js](https://open-tablet-to-page.glitch.me/openTabletPageButton.js).
6. Scroll down and ensure that 'Triggerable' is selected.
7. Exit the **Create** Tools app and click or trigger the button to see the Marketplace page for your item open on your Tablet. 

**See Also**

- [Create New Entities](../create-entities)
- [Change How Entities Look](../entity-appearance)
- [Define an Entity's Behavior](../entity-behavior)
- [Get Started with Scripting](../../../script/get-started-with-scripting)
- [Client Entity Scripts](../../../script/client-entity-scripts)
- [Write Your Own Scripts](../../../script/write-scripts)
- [Interact with Your Environment](../../../explore/interact-objects)