---
title: 'Menu'
taxonomy:
    category:
        - docs
---

| Properties      | Type   | Description |
| --------------- | ------ | ----------- |
| Menu.objectName | string |             |


| Methods                                  |
| ---------------------------------------- |
| Menu.addActionGroup(QString,QStringList) |
| Menu.addActionGroup(QString,QStringList,QString) |
| Menu.addMenu(QString)                    |
| Menu.addMenu(QString,QString)            |
| Menu.addMenuItem(MenuItemProperties)     |
| Menu.addMenuItem(QString,QString)        |
| Menu.addMenuItem(QString,QString,QString) |
| Menu.addSeparator(QString,QString)       |
| Menu.closeInfoView(QString)              |
| Menu.isInfoViewVisible(QString)          |
| Menu.isMenuEnabled(QString)              |
| Menu.isOptionChecked(QString)            |
| Menu.menuExists(QString)                 |
| Menu.menuItemExists(QString,QString)     |
| Menu.removeActionGroup(QString)          |
| Menu.removeMenu(QString)                 |
| Menu.removeMenuItem(QString,QString)     |
| Menu.removeSeparator(QString,QString)    |
| Menu.setIsOptionChecked(QString,bool)    |
| Menu.setMenuEnabled(QString,bool)        |
| Menu.triggerOption(QString)              |

| Events                          |
| ------------------------------- |
| Menu.destroyed()                |
| Menu.destroyed(QObject*)        |
| Menu.menuItemEvent(QString)     |
| Menu.objectNameChanged(QString) |

## addMenu()

### Function

`addMenu(name)` // Adds a menu item to a menu, described by the properties of the object.

### Arguments

**name : string**: An string for the name of the menu.

Nested menu's can be described using the greater than symbol.

`"Developer > Test Menu"` Describes a submenu called "Test Menu" in the "Developer" menu.

### Returns

This function does not return a value.

### Examples

```
Menu.addMenu("Test Menu");
Menu.addMenu("Test Menu > Test Sub Menu");
```



## addMenuItem()

### Function

`addMenuItem(object)` // Adds a menu item to a menu, described by the properties of the object.

### Arguments

**Object**: An object describing the menuItem.

```
{
    menuName:      string,          // Name of the menu you wish to add the item too
    menuItemName:  string,          // Name of the menuItem you wish to add
    afterItem:     string,          // Name of a menuItem, you want yours to follow
    shortcutKey:   string,          // String describing the shortcut key combination
    shortcutKeyEvent: {             // ------ unsure ------
        text: string                // ------ unsure ------
    },
    isCheckable:   bool,            // Bool declaring wether this menu item can be checked or not
    isChecked:     bool,            // Bool declaring wehter it is checked or not
    grouping:      string           // ------ unsure ------ (all examples use "Advanced")
}

```

Not all Items are required.

### Returns

This function does not return a value.

### Examples

```
Menu.addMenuItem({
    menuName:      "Developer",
    menuItemName:  "Test",
    afterItem:     "Log",
    shortcutKey:   "Ctrl+Shift+T",
    shortcutKeyEvent: {
        text: "test"
    },
    isCheckable:   false,
    isChecked:     false,
    grouping:      "Advanced"
});
```





## addSeparator()

### Function

`addSeperator(menuDescriptor,menuItemName)` // Adds a seperator the the given menu, above menuItem with menuItemName.

### Arguments

**menuDescriptor : string**: An string describing the menu you want to add the seperator to.

**menuItemName : string**: An string for the name of the menuItem the seperator should be above.

Nested menu's can be described using the greater than symbol.

`"Developer > Test Menu"` Describes a submenu called "Test Menu" in the "Developer" menu.

### Returns

This function does not return a value.

### Examples

```
Menu.addSeparator("Audio > Devices","Output Audio Device");  // This is currenly used in selectAudioDevice.js to add a seperator to the Audio > Devices menu.
```



## menuExists()

### Function

`menuExists(name) // Return value `is used to check if a menu with called 'name' exists.

### Arguments

**name: String**: The name of the menu you wish to check for.

### Returns

**bool**: Returns `true` if there is a menu by that name. (Otherwise `false`)

### Examples

`if (Menu.menuExists("Developer")){`

```
   //Perform a task dependant on whether there is a Developer menu, (Such as adding a menuItem to the Developer menu)

```

`}`

## menuItemExists()
### Function

`menuItemExists(menuName,menuItemName) // Return value `is used to check if a menuItem with called 'nameItemName' exists in the given menu.

### Arguments

**menuName: String**: The name of the menu in which you wish to check for the menuItem.

**menuItemName: String**: The name of the menuItem you wish to check for.

### Returns

**bool**: Returns `true` if there is a menuItem by that name, in the specified menu. (Otherwise `false`)

### Examples

```
if (Menu.menuItemExists("Developer","Stats")){
    //Perform a task dependant on whether there is a Stats item in the Developer menu, (Such as not adding it again)
}menuItemExists()
```



## removeMenu()

### Function

`removeMenu(name)` // Removes a menu.

### Arguments

**name : string**: An string for the name of the menu.

Nested menus can be described using the greater than symbol.

`"Developer > Test Menu"` Describes a submenu called "Test Menu" in the "Developer" menu.

### Returns

This function does not return a value.

### Examples

```
Menu.removeMenu("Test Menu > Test Sub Menu");
Menu.removeMenu("Test Menu");
```



## removeSeparator()

### Function

`removeSeperator(menuDescriptor,menuItemName)` // Removes a seperator from the given menu, above menuItem with menuItemName.

### Arguments

**menuDescriptor : string**: An string describing the menu you want to add the seperator to.

**menuItemName : string**: An string for the name of the menuItem the seperator should be above.

Nested menu's can be described using the greater than symbol.

`"Developer > Test Menu"` Describes a submenu called "Test Menu" in the "Developer" menu.

### Returns

This function does not return a value.

### Examples

```
Menu.removeSeparator("Audio > Devices","Output Audio Device");  // This would remove the seperator currently set by selectAudioDevice.js in the Audio > Devices menu.
```

## Menu.menuItemEvent

### Description

Event listener for menu items. Use the .connect(*handler*) method to wire up a handler.

### Function or Event

`Menu.menuItemEvent.connect(menuItemEventHandler);`

### Arguments

**menuItemEventHandler(menuItemText):function**: A function that receives the text of the menu item.

### Returns

null

### Examples

*Stand-alone (or close as possible) examples showcasing the function*

```
Menu.addMenu("Demo Menu");

Menu.addMenuItem({
    menuName: "Demo Menu",
    menuItemName: "Demo Item"
});

function menuItemEventHandler(menuItemText)
{
    if(menuItemText == "Demo Item") {
        print("Nice. You clicked the demo item.");
    }
}

Menu.menuItemEvent.connect(menuItemEventHandler);
```