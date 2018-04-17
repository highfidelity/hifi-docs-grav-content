---
title: 'Selection Script Interface'
taxonomy:
    category:
        - docs
---



| Methods                                  |
| ---------------------------------------- |
| [`Selection.addToSelectedItemsList(string listName, string itemType, QUuid id)`](#m1) |
| [`Selection.removeFromSelectedItemsList(string listName, string itemType, QUuid id)`](#m2) |
| [`Selection.removeListFromMap(string listName)`](#m3) |
| [`Selection.printList(string listName)`](#m4)     |


| Signals                                  |
| ---------------------------------------- |
| [`Selection.selectedItemsListChanged(string listName)`](#s1)|

---

The Selection Scripting Interface is a simple JavaScript API useful for grouping together Gameplay Objects like Avatars, Entities, or Overlays. The group is labelled with a name, like `mySelection01`, which can then be retrieved later through the Interface.

### addToSelectedItems() <a id="m1"></a>

`addToSelectedItems()` adds the `id` associated with an item to the list called `listName`. Specify the type as a string with `itemType`, which can be "avatar", "entity", or "overlay".

#### Function

`addToSelectedItemsList(string listName, string itemType, QUuid id)`

##### Arguments

- *listName: string* The list of items to which an item is being added.
- *itemType: string* Specify the type of item as "avatar", "entity", or "overlay".
- *id: QUuid* This is the id of the item being added. 

 ##### Returns

**bool**: Returns `true` if the `id` was added to the list; `false` otherwise.





### removeFromSelectedItemsList <a id="m2"></a>

Removes the `id` associated with an item from the list called `listName`. Specify the type as a string with `itemType`, which can be "avatar", "entity", or "overlay".

#### Function

`removeFromSelectedItemsList(string listName, string itemType, QUuid id)`

##### Arguments

- *listName: string* The list of items from which an item is being removed. 
- *itemType: string* Specify the type of item as "avatar", "entity", or "overlay".
- *id: QUuid* This is the id of the item being removed. 

##### Returns

**bool**: Returns `true` if the `id` was removed from the list; `false` otherwise. Will return `false` if the list doesn't contain any data.





### removeListFromMap <a id="m3"></a>

Removes the list called `listName` from the internal `QMap<QString, GameplayObjects>`. Useful if you want to completely clear a list of objects and start over.

#### Function

`removeListFromMap(string listName)`

##### Arguments

- *listName: string*  This is a list of items. 

##### Returns

**bool**: Returns `true` if the list was removed from the map; `false` otherwise.





### printList <a id="m4"></a>

Prints the list labelled with `listName` in *the debug log* (not the script log).

#### Function

`printList(string listName)`

##### Arguments

- *listName: string* This is a list of items. 

##### Returns

**void**





### selectedItemsListChanged <a id="s1"></a> 

This signal is fired when an internal list in the `QMap<QString, GameplayObjects>` is changed (i.e. items are added to or removed from that list).

#### Function

`selectedItemsListChanged(string listName)`

##### Arguments

- *listName: string* This is a list of items. 

##### Returns

**void**

### Examples

Add the following script to an entity to cause it to outline highlight the object when grabbing with a controller in VR.

For instance: create a box, and then copy the following text into the Script URL field on the entity.

```
(function () {
    print("Starting highlight script...............");
   
   _this = this;
    var prevID = 0;
    var listName = "contextOverlayHighlightList";
    var listType = "entity";

    _this.startNearGrab = function(entityID){
        if (prevID !== entityID) {
            Selection.addToSelectedItemsList(listName, listType, entityID);
            prevID = entityID;
        }
    };
    
    _this.releaseGrab = function(entityID){
        if (prevID !== 0) {
            Selection.removeFromSelectedItemsList("contextOverlayHighlightList", listType, prevID);
            prevID = 0;
        }
    };


    var cleanup = function(){
        Entities.findEntities(MyAvatar.position, 1000).forEach(function(entity) {
            try {
                Selection.removeListFromMap(listName);
            } catch (e) {
                print("Error cleaning up.");
            }
        }); 
    };

    Script.scriptEnding.connect(cleanup);
});
```
