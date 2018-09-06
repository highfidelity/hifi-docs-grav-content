---
title: 'Basic Scripting Examples'
taxonomy:
	category : docs
---
*Try out some simple example scripts in High Fidelity.*

##Introduction

High Fidelity uses a right-handed Cartesian coordinate system. 

![](xyz.jpg)

In this frame of reference, the Y axis represents the UP direction and the -Z axis represent the FRONT direction. 

**Getting the Current Position of Your Avatar**

When creating objects in world, it's often very helpful to know where your Avatar currently is. 

The world can be thought of as grid of X,Y,Z coordinates with Y going up and down.  The coordinates of anything in this world is often expressed in a position vector object that looks like this.

```javascript
{ x: 0, y: 0, z: 0 }
```

To get the position of your Avatar, we have a handy custom class, MyAvatar, that contains properties with information related to your Avatar.  One of the properties in MyAvatar is the position property, which contains an object of your current position in world space.

Since MyAvatar.position returns back an object, to view that position we can use the JSON.stringify method.

```javascript
JSON.stringify(MyAvatar.position);
// {"x":-10.349810600280762,"y":-9.55379867553711,"z":11.861204147338867}
```

**Getting the Current Orientation of Your Avatar**

If you want an object to appear in front of you, another important piece of information to have is how your Avatar is currently oriented in world.

The way rotations are handled are by a number-system called Quaternions. Quaternions help simplify calculations in three dimensional space.  They add an extra dimension of 'w' and the values are normalized (-1,1).

These are represented in the form:

```javascript
{ x: 0, y: 0, z: 0, w: 1 }
```

We can get our orientation by using the MyAvatar.orientation property

```javascript
JSON.stringify(MyAvatar.orientation);
// {"x":0,"y":-0.4974651634693146,"z":0,"w":0.8674839735031128}
```



**Getting which direction you are facing**

There is a class to help with Quaternions called Quat.  One of it's methods is Quat.getForward.  If you pass into it your Avatar's orientation, it will give you a vector describing which direction you are facing on the world Axis.

```javascript
{ x: 0, y: 0, z: 1 } // Backward
{ x: 0, y: 0, z: -1 } // Forward
{ x: -1, y: 0, z: 0 } // Left
{ x: 1, y: 0, z: 0 } // Right
```



**Getting the position of where you want an object to appear in front of you**

Using the vector we get back from passing your Avatar's orientation into Quat.getForward, we can use another helper class called Vec3 to help make an object appear in front of us. 

```javascript
Vec3.sum(MyAvatar.position, Quat.getForward(MyAvatar.orientation)); // This will add your position vector to the direction vector returned from Quat.getForward.  This will represent a position that is 1 meter in front of your avatar.
```

If you want to control how far away an object appears in front of you, first we multiply the return value of Quat.getForward with a number representing how many meters we want an object to be in front of us.  Vec3.multiply can assist with this.  It takes a vector and a number as a parameter.

```javascript
Vec3.multiply(Quat.getForward(MyAvatar.orientation), 2.0); // if we are facing forward, that means our vector { x: 0, y: 0, z: -1 }, get's multiplied by 2.0 giving us a vector of { x: 0, y: 0, z: -2 }
```

We can then use Vec3.sum to return a new vector representing how far away an object will appear from us, to a vector representing our current position given from MyAvatar.position.

```javascript
Vec3.sum(MyAvatar.position, Vec3.multiply(Quat.getForward(MyAvatar.orientation, 2.0))); // this will give us a final vector representing where in the world a point 2 meters directly in front of our avatar is

```



If it helps to make that more readable, we can assign some of those values to variable names like so:

```javascript
var myPosition = MyAvatar.position;   
var myOrientation = MyAvatar.orientation;
var myDirection = Quat.getForward(myOrientation);
var distanceInFrontOfMe = 2.0;
var distanceVectorOfObjectInFrontOfMe= Vec3.multiply(myDirection, distanceInFrontOfMe);
var positionOfObjectInFrontOfMe = Vec3.sum(myPosition, distanceVectorOfObjectInFrontOfMe);
 
 
// we can even wrap this all up in a function to help simplify this any time we want the position of an object to appear in front of us
function getPositionInFrontOfMe(distanceInFrontOfMe){
  var myPosition = MyAvatar.position;
  var myOrientation = MyAvatar.orientation;
  var myDirection = Quat.getForward(myOrientation);
  var distanceVectorOfObjectInFrontOfMe= Vec3.multiply(myDirection, distanceInFrontOfMe);
  var positionOfObjectInFrontOfMe = Vec3.sum(myPosition, distanceVectorOfObjectInFrontOfMe);
  return positionOfObjectInFrontOfMe;
}
 
 
getPositionInFrontOfMe(4.0); // { x: 0, y: 0, z: -4 }
getPositionInFrontOfMe(8.0); // { x: 0, y: 0, z: -8 }
```



**Creating a Basic Entity**

Any object represented in our world is called an Entity.  To add one through scripting we can use the Entities class which has a method called addEntity.

addEntity takes an object that describes the properties of an Entity we would like to create and it will return back the id of the entity we just created.  

The only thing that is necessary is a type property, but we will also add a position property to help make it appear in front of us.

```javascript
// get a position in front of you
var positionInFrontOfMyAvatar = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation)); 
 
// Create an object describing the entities properties
var properties = {
  type: "Sphere",
  position: positionInFrontOfMyAvatar
};
 
// Add the sphere
var newEntity = Entities.addEntity(properties);
print("Entity added.");
```



What other kind of Entities can we put in the type properties?

```javascript
"Model", "Box", "Sphere", "Light", "Text", "ParticleEffect", "Zone", "Web", "Line", "PolyVox", "PolyLine"
```



Each of those entities share common properties as well as their own special properties unique to their type.

**Getting an Entity's Properties**

To get the properties of an Entity, we can use Entities.getEntityProperties and pass in the ID of the entity we want to manipulate.  We can get the ID by saving the returned value of addEntity to a variable, or by using an entity method such as findEntity, which we will discuss in a later section.

```javascript
// add a new entity
var newEntity = Entities.addEntity({ type: "Sphere" });   // newEntity is now a string with a new unique id similar to "{18aaecb3-b22d-463c-92f0-95f07b1ec235}"
 
// get the entity properties
var newEntityProperties = Entities.getEntityProperties(newEntity);
 
// we now have an object describing the entities current properties.  Please note that this object only represents the current values at the time we queried the object. 
JSON.stringify(newEntityProperties.color);   // {"red":255,"green":255,"blue":255}
JSON.stringify(newEntityProperties.position); // {"x":0,"y":0,"z":0}
JSON.stringify(newEntityProperties.rotation); // {"x":0,"y":0,"z":0,"w":1}
JSON.stringify(newEntityProperties.type); // "Sphere"
 
// You can take a look at all of the entities properties by using JSON.stringify(newEntityProperties);
```



Refer to this section after we discuss Arrays for how to limit the properties you are getting back, if you are only interested in a few things.

**Editing an Entity**

To manipulate an entities properties, we can use Entities.editEntity which takes the ID of an entity and an object describing how you would like to change it.



```javascript
// create a position in front of you
var positionInFrontOfMyAvatar = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation)); 
 
// add a new entity
var newEntity = Entities.addEntity({ type: "Sphere", position: positionInFrontOfMyAvatar });
 
// get the entity properties
var newEntityProperties = Entities.getEntityProperties(newEntity);
 
// create an object describing the change
var propertiesToChange = {
  position: Vec3.sum(newEntityProperties.position, {x: 0, y: .5, z: 0}),
  color: {red: 50, green: 50, blue: 50}
};
 
// edit the property
Entities.editEntity(newEntity, propertiesToChange);
```

