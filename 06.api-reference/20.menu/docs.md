---
title: 'Menu'
taxonomy:
    category:
        - docs
---

The Menu API provides access to the menu displayed at the top of the window on a user's desktop and the tablet/HUD "MENU" app. 

A menu "grouping" enables you to group a set of menu items together. For instance, you can specify that your menu item has to be grouped with either of the two available groupings "Advanced" and "Developer". The visibility of these groupings can be changed through the "Settings" menu. If you don't soecify your menu item's grouping, it will always be visible. 

- **[Properties](#prop)**
- **[Methods](#methods)**
- **[Events](#events)**

| Properties |
| ---------- | 
| `[MenuItemProperties](#prop)` |


| Methods                                  |
| ---------------------------------------- |
| `Menu.addActionGroup(QString,QStringList,QString<optional>)` |
| `[Menu.addMenu(QString, QString<optional>)](#m1)`             |
| `[Menu.addMenuItem(MenuItemProperties)](#m2)` |
| `Menu.addMenuItem(QString,QString,QString<optional>)(#m3)` |
| `[Menu.addSeparator(QString,QString)](#m4)` |
| `Menu.closeInfoView(QString)`              |
| `Menu.isInfoViewVisible(QString)`          |
| `Menu.isMenuEnabled(QString)`              |
| `Menu.isOptionChecked(QString)`            |
| `[Menu.menuExists(QString)](#m5)`          |
| `[Menu.menuItemExists(QString,QString)](#m6)` |
| `Menu.removeActionGroup(QString)`          |
| `[Menu.removeMenu(QString)](#m7)`          |
| `[Menu.removeMenuItem(QString,QString)](#m8)`     |
| `[Menu.removeSeparator(QString,QString)](#m9)` |
| `[Menu.setIsOptionChecked(QString,bool)](#m10)`    |
| `[Menu.setMenuEnabled(QString,bool)](#m11)`        |
| `[Menu.triggerOption(QString)](#m12)`              |

| Events                             |
| ---------------------------------- |
| `[Menu.menuItemEvent(QString)](#e1)` |

## Properties <a id="prop"></a>

`MenuItemProperties`: Object (type)
`MenuItemProperties` is a set of properties you can use to define your menu item. If you don't specify any properties, your menu item will be placed at the end of the menu by default. 

| Properties | Type | Attributes | Default | Description |
| ---------- | ---- | ---------- | ------- | ----------- |
| `menuName` | string | | | Name of the menu. Nested menus can be described using this symbol - ">".|
| `menuItemName`| string| | | Name of the menu item|
| `isCheckable`|boolean |<optional>|false |Whether or not the menu item can be checked/toggled|
| `isChecked`|boolean |<optional>|false |Whether or not the menu item is enabled.|
| `isSeparator`|boolean |<optional>|false |Whether or not the menu item is a separator.|
| `shortcutKey`|string|<optional>||A shortcut key that triggers the menu item|
| `shortcutKeyEvent`|KeyEvent|<optional>||A KeyEvent that specifies a key that triggers the menu item.|
| `position`|number|<optional>||The position to place the new menu item. This is an integer, with 0 being the first menu item.|
| `beforeItem`|string|<optional>||The item before which the menu item being created is to be placed.|
| `afterItem`|string|<optional>||The item after which the menu item being created is to be placed.|
| `grouping`|string|<optional>||The name of grouping to add the menu item to.|

## Methods <a id="methods"></a>

### `addMenu(menuName, grouping)`<a id="m1"></a>

Adds a new top-level menu. 

**Parameters**
|Name|Type|Attributes|Description|
|----|----|----------|-----------|
|menuName|string||Name of the menu. Nested menus can be described using this symbol - ">".|
|grouping|string|<optional>|The name of the grouping where the menu is to be added.|

**Returns**

This function does not return a value.

**Example**
*Add a menu called "Test Menu" and a nested submenu called "Test Sub Menu".*
```
Menu.addMenu("Test Menu");
Menu.addMenu("Test Menu > Test Sub Menu");
```

*Add a menu that is nested under "Settings" to the "Advanced" grouping.*
```
Menu.addMenu("Settings > Test Grouping Menu", "Advanced");
```


### `addMenuItem(properties)`<a id="m2"></a>

Adds a menu item to a menu.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|properties|[MenuItemProperties](#prop)|The menu item's set of properties.|


**Returns**

This function does not return a value.

**Example**
*Add a menu item named "Test" to the menu "Developer", under the "Advanced" grouping. It should be displayed after the menu item "Log". The shortcut keys that trigger the menu should be "Ctrl+Shift+T".*
```
Menu.addMenuItem({
    menuName:     "Developer",
    menuItemName: "Test",
    afterItem:    "Log",
    shortcutKey:  "Ctrl+Shift+T",
    grouping:     "Advanced"
});
```


### `addMenuItem(menuName, menuItem, shortcutKey<opt>)`<a id="m3"></a>

Adds a new menu item to a menu. The new item is added at the end of the menu. 

**Parameters**

|Name|Type|Attributes|Description|
|----|----|----------|-----------|
|menuName|string||Name of the menu where the new item is being added.|
|menuItem|string||Name of the menu item. This is what will be displayed in the menu.|
|shortcutKey|string|<optional>|The shortcut key to be used to trigger the menu item.|

**Example**

*Add a menu item to the end of the "Developer" menu.*
```
Menu.addMenuItem("Developer", "Test", "Ctrl+Shift+T");
```

### `addSeparator(menuName, separatorName)`<a id="m4"></a>

Add a separator with an unclickable label below it. The separator will be placed at the bottom of the menu. If you want to add a separator at a specific point in the menu, use Menu.addMenuItem with Menu.MenuItemProperties instead.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|menuName|string|Name of the menu to add a separator to.|
|separatorName|string|Name of the separator that will be displayed as the label below the separator line.|

**Example**

*Add a separator.*
```
Menu.addSeparator("Developer","Test Separator");
```


### `menuExists(menuName)`<a id="m5"></a>

Checks if a top-level menu exists. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|menuName|string|The name of the menu you are checking.|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|`true`|boolean|The menu exists.|
|`false`|boolean|The menu doesn't exist.|

**Examples**

*Check if the "Developer" menu exists.*

```
if (Menu.menuExists("Developer")) {
    print("Developer menu exists.");
}
```


### `menuItemExists(menuName, menuItem)`<a id="m6"></a>

Checks if a menu item exists. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|menuName|string|The menu in which you are checking for the menu item's existence.|
|menuItem|string|The menu item you are looking for.|

**Returns**

|Value|Type|Description|
|----|----|-----------|
|`true`|boolean|The menu item exists.|
|`false`|boolean|The menu item doesn't exist.|

**Examples**

*Determine if the Developer > Stats menu exists.*

```
if (Menu.menuItemExists("Developer", "Stats")) {
    print("Developer > Stats menu item exists.");
}
```


### `removeMenu(menuName)`<a id="m7"></a>

Removes a top-level menu. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|menuName|string|Name of the menu to remove.|

**Example**
*Remove a menu and nested submenu.*
```
Menu.removeMenu("Test Menu > Test Sub Menu");
Menu.removeMenu("Test Menu");
```

### `removeMenuItem(menuName, menuItem)`<a id="m8"></a>

Removes a menu item from a menu. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|menuName|string|Name of the menu from which you want to remove the menu item.|
|menuItem|string|Name of the menu item you want to remove.|

**Example**
*Remove the menu item "Test" from the menu "Developer".*
```
Menu.removeMenuItem("Developer", "Test");
```


### `removeSeparator(menuName, separatorName)`<a id="m9"></a>

Removes a top-level menu. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|menuName|string|Name of the menu from which you want to remove the separator.|
|separatorName|string|Name of the separator to remove.|

**Example**
*Remove a separator.*
```
Menu.removeSeparator("Developer","Test Separator");
```

### `setIsOptionChecked(menuOption, isChecked)`<a id="m10"></a>

Sets a menu item (that can be toggled) as checked or unchecked. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|menuOption|string|The name of the menu item to modify.|
|isChecked|boolean|If `true`, the menu item will be checked, otherwise it won't be checked.|

**Example**
*Turn on Settings > Advanced Menus.*
```
Menu.setIsOptionChecked("Advanced Menus", true);
print(Menu.isOptionChecked("Advanced Menus")); // true
```

### `setMenuEnabled(menuName, isEnabled)`<a id="m11"></a>

Sets a menu or menu item to be enabled or disabled. If disabled, the item is grayed out and cannot be used. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|menuName|string|The name of the menu or menu item to modify.|
|isEnabled|boolean|If `true`, the menu will be enabled, otherwise it will be disabled.|

**Example**
*Disable the Settings > Advanced Menus menu item.*
```
Menu.setMenuEnabled("Settings > Advanced Menus", false);
print(Menu.isMenuEnabled("Settings > Advanced Menus")); // false
```

### `triggerOption(menuOption)`<a id="m12"></a>

Triggers the menu item. 

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|menuOption|string|The name of the menu item to trigger.|

**Example**
*Open the help window.*
```
Menu.triggerOption('Help...');
```


## Events <a id="events"></a>

### `menuItemEvent.connect(menuItemEventHandler)`<a id="e1"></a>

Event listener for menu items. Use the .connect(*handler*) method to wire up a handler.

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|menuItemEventHandler(menuItemText)|function|A function that receives the text of the menu item.|

**Example**
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

Menu.menuItemEvent.connect(menuItemEventHandler);;
```

