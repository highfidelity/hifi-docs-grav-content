---
title: Create Client Entity Scripts
taxonomy:
    category: docs
---

##Introduction
When you attach a client script to an entity, the entity responds to a trigger or event. For instance, you can attach a script to an entity that changes the entity's color when a user clicks on it. 

###Client Entity Scripts
There can be many entities in a domain, and each can have a different associated client entity script. These run in the same environment and namespace in Interface. 

You can attach a client entity script to an entity by:
- Going to **Create** and opening the **Properties** tab. 
- Selecting the entity you want to attach the script to. 
- Scrolling down to find the `scripts` property. 
- Entering the script URL. 

####Example
Here is a client entity script, `changeColorOnClickDown.js`, which when attached to a non-model entity (like a box or sphere), will change the color of the entity when you click on it:

```

//  changeColorOnClickDown.js
(function () {
    var clicked = false;
    this.clickDownOnEntity = function (entityID, mouseEvent) {
        if (clicked){
            Entities.editEntity(entityID, { color: { red: 0, green: 255, blue: 255} });
            clicked = false;
        } else {
            Entities.editEntity(entityID, { color: { red: 255, green: 255, blue: 0} });
            clicked = true;
        }
    };
})

```

You'll notice that this example is written as a JavaScript class prototype function. You'll also notice that it uses the mouse event [clickDownOnEntity()](https://docs.highfidelity.com/api-reference/namespaces/entities#.sendClickDownOnEntity). When the user clicks on an entity, `clickDownOnEntity()` triggers the function associated with that click event. In this case, it edits the entity's color back and forth between yellow and magenta.

To learn more:
- For more information on events available, see the High Fidelity [JavaScript API](https://docs.highfidelity.com/api-reference).
- For a list of event methods that may be defined, see [Entities](https://docs.highfidelity.com/api-reference/namespaces/entities).
- For more examples, see the [GitHub repository](https://github.com/highfidelity/hifi/tree/master/scripts/tutorials).


