---
title: Text Entities
taxonomy:
    category: docs
---

[Create Mode](https://wiki.highfidelity.com/wiki/Edit_Mode) allows you to create various different entity types. One of the entities available is the Text entity. The Text entity is a flat panel which has the ability to display text like a whiteboard or a blackboard.

## Create a Text Entity

With [Create Mode](https://wiki.highfidelity.com/wiki/Edit_Mode) enabled, you can create a Text entity by selecting the **Text** icon.

[![Texticon.png](https://wiki.highfidelity.com/images/d/d1/Texticon.png)](https://wiki.highfidelity.com/wiki/File:Texticon.png)

This will create a Text entity displaying the default text, "Some Text".

![Newentity2.png](https://wiki.highfidelity.com/images/thumb/8/82/Newentity2.png/800px-Newentity2.png)

*Note: If you are unable to see the text, you may need to move to a position where you can see it, or use the edit tools to rotate the plane to a position where you can see it.*

## Properties

An entity's appearance (size, position etc.) and behavior (animation, collision, interaction, etc.) are defined by the entity's properties.

Text entities have the [properties common to all entities](http://jsref.docs.highfidelity.com/v1.0/docs/entity-properties#section-common-properties) as well as additional [text specific properties](http://jsref.docs.highfidelity.com/v1.0/docs/entity-properties#textentity).

*Note: A text entity is a flat panel and as it has no depth, for the dimension property, the Z value is ignored.*

You can view and edit these properties in [Create Mode](https://wiki.highfidelity.com/wiki/Edit_Mode) by selecting the entity and then selecting the **Entity Properties** tab in the *Edit* panel.

## Example: Create a Green "Welcome" Sign

For example, to create a text entity that displays the word "Welcome!" in big black letters on a green plane, complete the following steps:

1. Create and position the text entity.
2. Change and resize the text displayed.
3. Change the background and text colors.

The next sections cover these steps in detail.

### Create and Position Text Entity

To create and position the entity, while in first person view and in [Create Mode](https://wiki.highfidelity.com/wiki/Edit_Mode), complete these steps:

1. Click the Text icon to create a text entity.

   [![Texticon.png](https://wiki.highfidelity.com/images/d/d1/Texticon.png)](https://wiki.highfidelity.com/wiki/File:Texticon.png)

   ​

   A Text entity will appear directly in front of you. By default it displays the text "Some Text" in white letters on a black background.

   ![Newentity2.png](https://wiki.highfidelity.com/images/thumb/8/82/Newentity2.png/800px-Newentity2.png)

   ​

2. If you are unable to see the text, use the [edit tools](https://wiki.highfidelity.com/wiki/Edit_Mode) to rotate the plane to a position where you can see it.

### Change and Resize the Text Displayed

To change and resize the text displayed, you need to edit the entity properties.

1. With the text entity selected, on the *Edit* panel, click the **Entity Properties** tab.

2. Scroll to the bottom of the panel where you will find the Text entity specific properties.

   [![Textproperties.png](https://wiki.highfidelity.com/images/8/81/Textproperties.png)](https://wiki.highfidelity.com/wiki/File:Textproperties.png)

3. Change the text displayed. In the **Text content** field, delete the words "Some Text" and enter "Welcome!". For your own projects, if you plan to display a lot of text, you can first type the text into a plain text editor and then copy and paste the text into the **Text content** field. Press enter or click on another active field and the updated text should appear.

4. Change the size of the text. Below the **Text content** field is the **Line height** field. This value controls how big the font will be.

If you use the up and down carats to change the value, the value will change by 0.005 per click. If you enter a value, you will see the text change as soon as you press enter. The Line height default value is 0.06. For this example, the Line height was set to 0.1550.

[![Welcome.png](https://wiki.highfidelity.com/images/thumb/4/42/Welcome.png/800px-Welcome.png)](https://wiki.highfidelity.com/wiki/File:Welcome.png)

*Note: If the text is too big to fit, you can increase the size of the entity.*

### Change Background and Text Colors

To change the back ground and text colors:

1. Scroll down to the **Text color** and **Background color** properties.

2. Change the


   Red

   ,

​    

   Green

   , and

​    

   Blue

​    

   values to the desired colors. In this example, the

​    

   Text color

​    

   has been set to black (Red: 0, Green:0, Blue: 0) and the

​    

   Background color

​    

   to green (Red: 0, Green:255, Blue: 0).

   [![Colorsettings.png](https://wiki.highfidelity.com/images/4/47/Colorsettings.png)](https://wiki.highfidelity.com/wiki/File:Colorsettings.png)

If you use the carats to change the value, as you click to increase or decrease the value you should see the text or background change with each click. If you enter in the values directly, you will see the text or background change as soon as you press enter or click on another active field.

## Uses of the Text Entity

Like the other entity types, you can [attach scripts](https://wiki.highfidelity.com/wiki/Attach_scripts) to the entity by specifying a script or URL to a script can be included in the **script** field. These scripts can dynamically update the text or any other properties of the text entity.