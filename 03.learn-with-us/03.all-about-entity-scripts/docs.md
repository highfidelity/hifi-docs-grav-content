---
title: 'All About Entity Scripts'
taxonomy:
  category: docs
---

In this three-part tutorial, we’ll be building on the topics introduced in [Get Started with Scripting in High Fidelity](../get-started-with-scripting) to further explore the different types of script behavior that you can write for elements in your domains.

## Chapter 1: Creating Cubes and a Cube Spawner

In this module, we will:

- Create a cube with JavaScript
- Write a function to change the cube’s color when it’s clicked
- Build a “Cube Spawner” script that generates a cube with our script attached

### Creating _cube.js_

If you went through [Get Started with Scripting in High Fidelity](../get-started-with-scripting), you’ll remember our short code snippet that generated a cube in front of us when we ran our script from the Script Editor. This code, although short, highlights a number of important things that we can do with our High Fidelity scripts.

```javascript
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
var properties = {
    type: "Box",
    name: "ScriptBox",
    position: position,
    color: { red: 0, green: 0, blue: 155 }
};
var Ent = Entities.addEntity(properties);
print("Entity added");

```

We start off by creating a variable called `position`, which is in the format of a three-dimensional vector that stores the X, Y, and Z coordinate that we’ll place our new cube on. We specifically want our position for our cube to be directly in front of our avatar, so we use `Vec3.sum` to add the vector that represents our avatar’s position in the domain to the vector that represents the front-facing orientation of our avatar.

The next thing that we do to create our cube is give it a specific set of parameters. These generally correspond to fields that are available in the _Properties_ tab of the _Create Tools_ window, and define the characteristics of our cube. We store these parameters in a list of paired items in the variable `properties` , in the format of a _key : “value”_ pair. It’s important to follow the style guide for your property list:

- Make sure everything is wrapped in { brackets }
- Your key should not be in quotes
- Your value should be in quotes if it is a specific string value, { brackets } if it is a vector value, and neither if it is referencing a variable that you defined earlier
- Separate properties should be split by a comma

In our example above, this breaks down into:

| Key      | Value                         | Value Type |
| -------- | ----------------------------- | ---------- |
| type     | “Box”                         | string     |
| name     | “ScriptBox”                   | string     |
| position | boxPosition                   | variable   |
| color    | {red: 0, green: 0, blue: 155} | vector     |

While generally you can set whatever properties that you’d like in your entities, only the ones that are present in the [Entity Properties API](../../api-reference/namespaces/entities#.EntityProperties) will be handled directly by Interface. This means that you can extend an object with your own fields, but you will need to handle them yourself.

This cube script is helpful to create a single cube with a specific set of properties, but we may want to spawn new cubes with different properties from this one. We may also want to define a set of functions for our cubes, so we want to make our script more extensible and reusable across a number of different cubes that we can generate with the same spawning script.

### Updating _cube.js_ for the Entity Client Script system

We’re going to update our _cube.js_ file so that we can use it as the script that gets attached to the new cubes our spawner will create. The first thing that we need to do is wrap the contents of _cube.js_ in a function, which will be recognized by the High Fidelity platform when it is attached to an entity.

```javascript
(function() {
	var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
	var properties = {
		type: "Box",
		name: "ScriptBox",
		position: position,
		color: { red: 0, green: 0, blue: 155 }};
	Ent = Entities.addEntity(properties);
	print("Entity added");	
});
```

Next, since we’ll be defining our cube in a spawner, go ahead and delete the code inside of the function for now. Our _cube.js_ script should now look like:

```javascript
(function() {
});

```

Inside the now-empty function, add the following lines of code:

```javascript
var _this = this;

_this.clickDownOnEntity = function(entityID, event) {
	print("I was clicked!");
};

```

What we now have is a basic script that has defined what happens when the entity is clicked. The keyword `this` refers to the parent object currently in scope, in this case, our cube. We specifically use `clickDownOnEntity `, since this is a function defined in the [Entity Functions API](https://docs.highfidelity.com/api-reference/namespaces/entities) and will be recognized by High Fidelity when we click on our cube.

**Note**: Only [client entity scripts](https://docs.highfidelity.com/create-and-explore/all-about-scripting/attach-entity-scripts/client-entity-scripts) on entities will respond to mouse and trigger events - [entity server scripts](https://docs.highfidelity.com/create-and-explore/all-about-scripting/attach-entity-scripts/server-entity-scripts) do not have visibility into controller-based actions.

Now, what we need to do is specify exactly what happens when we click on our cube. Right now, the only thing that happens is that we’ll use the `print` function to write a statement. We’re going to do three things:

- Create three variables with a random number generated for them
- Make a new color using our variables
- Update our cube properties to make the color the newly generated one

While we could write all of this directly when our “click” code is called, it’s better to write it as a separate function - this allows us to reuse our color-changing code, and if we want to change the behavior of our cube, we can swap out one or two lines of code instead of all of them this way.

### Create a color changing function

Under the closing brackets of your `clickDownOnEntity` function, add the following lines of code:

```javascript
var changeColor = function(entityID) {		
	var newRed = Math.random() * 255;
	var newGreen = Math.random() * 255;
	var newBlue = Math.random() * 255;	

	var newProperty = {
		color: {
			red: newRed,
			green: newGreen,
			blue: newBlue
		}
	};
	Entities.editEntity(entityID, newProperty);
};

```

The first thing that we do is create a variable reference to our newly created function called `changeColor`, which allows us to call the function from other places in our code. We pass in a parameter called `entityID`, which will let us edit our cube in the `changeColor()` function. The entity ID will be the one that is visible in the Edit window if you select your cube after it is created.

The next three lines of code set up variables to store randomly generated values between 0 and 255. `Math.random()` generates a decimal number between 0 and 1, so we multiply the result by 255 to get a number that we can use as a color for our red, green, and blue values.

```javascript
var newProperty = { color: {red: newRed, green: newGreen, blue: newBlue}};
Entities.editEntity(entityID, newProperty);
```

Behind the scenes here, there’s a lot going on in these two lines of code. We start off creating a reference to a new property we’re creating, called `newProperty`. This variable points to a key-value pair with the name of the property we’ll be editing on our cube (color) and the value of the property (a newly created RGB color with our random values).

The next line of code is where the magic happens. The Entities API allows us to perform a number of different interactions with objects in our domain, including add, edit, and delete functions. We’re going to call `editEntity`, and pass in the entityID of the object we’re editing (our cube) and the new property to overwrite.

Finally, we want to call our `changeColor()` function from inside of our click function, so add the following line of code right after the line `print("I was clicked!") ` :

```javascript
   changeColor(entityID);

```

That’s it for our cube script! You can test it out by manually adding your script into an existing cube. For now, though, we’ll make a spawner that generates and attaches the scripts for us.

### Creating a basic spawn script

Save _cube.js_ and create a new file called _spawnCube.js_.

We’ll start out this script the same way we did our original cube script, by defining the position where we want to spawn our cube. Then, we’ll define the new cube that will be generated when the _spawnCube.js_ script is run.

```javascript
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
var id = Entities.addEntity({
	position: position,
	script: Script.resolvePath("cube.js"),
	type: "Box",
	name: "ScriptBox",
	color: {red: 0, green: 0, blue: 155}
});
print("Made a cube!" , id);
```

The spawner script that we’ve created will generate a new cube each time it’s run. After creating a position variable for the location in front of our avatar, we create a new cube and store a reference to the entity ID, which is returned by the function `Entities.addEntity`, another Entity API capability.

We set up our entity with the properties we started out with, with an additional key-value pair that stores our cube.js script reference. By calling `Script.resolvePath("cube.js") `, we are able to refer back to our cube script as long as we preserve the directory structure, regardless of where on a local machine or cloud hosting platform the scripts are living. Make sure that both of the files are in the same folder!

### Run _spawnCube.js_ and test it out

When we save our _spawnCube.js_ script, we can then run it in our domain to create new cubes. When you click on each of them, the _cube.js_ script will call the color changing function and update the specific cube that it’s attached to!

### Chapter 1 Recap

In this tutorial, we covered some of the basic functionality that we can use to customize and spawn entities in a High Fidelity environment through scripting. Consider playing around and making some adjustments to your script by:

- Randomizing the initial color of newly generated cubes
- Generating spheres instead of cubes
- Changing when `changeColor()` is called

### Additional Resources for Chapter 1

- [Geting Started with Scripting in High Fidelity](../get-started-with-scripting)
- [Coding Standards](../../build-guide/coding-standards)

## Chapter 2: Building an Entity Spawner

In Chapter 1, we went through the process of building a basic cube spawner that generated a color-changing cube. In this tutorial, we’ll build off of those concepts to make a reusable spawner object to create our cubes:

- Modify our cube spawner to generate cubes on click
- Create a makeCubeSpawner script to load in our reusable cube spawner
- Clean up the cubes that we’ve made when we delete our spawner object

### Preparation

From Chapter 1, we have two scripts that current look like this:

`cube.js`


```javascript
(function() {

	var _this = this;
	_this.clickDownOnEntity = function(entityID, event) {
		print("I was clicked!");
		changeColor(entityID);

	};
	var changeColor = function(entityID) {		
		var newRed = Math.random() * 255;
		var newGreen = Math.random() * 255;
		var newBlue = Math.random() * 255;	

		var newProperty = {
			color: {
				red: newRed,
				green: newGreen,
				blue: newBlue
			}
		};

		Entities.editEntity(entityID, newProperty);
	};
});
```

`spawnCube.js`

```javascript
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
var id = Entities.addEntity({
	position: position,
	script: Script.resolvePath("cube.js"),
	type: "Box",
	name: "ScriptBox",
	color: {red: 0, green: 0, blue: 155}
});
print("Made a cube!" , id);
```

### Updating _spawnCube.js_

Right now, our existing _spawnCube.js_ script creates a cube each time it’s loaded, which means to spawn multiple cubes, we need to continuously re-run our script. We’re going to start off this tutorial by modifying our spawner so that, like our cubes themselves, it has a click trigger and can be used multiple times.

We’ll start by wrapping our entire script in a function wrapper, similar to how our _cube.js_ works:

```javascript
(function() {
	var _this = this;
	var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
	var id = Entities.addEntity({
		position: position,
		"script": Script.resolvePath("cube.js"),
		type: "Box",
		name: "ScriptBox",
		color: { red: 0, green: 0, blue: 155 }
	});
	print("Made a cube!" , id);

});
```

For our cube spawner, we’ll want to make it so that we can easily trigger a new cube when we click on our spawner object, so to do that, we’ll need to move our code into a function that we can call from our spawner object’s click function. We’ll call this new function `spawnACube ` :


```javascript

(function() {
	var _this = this;
	var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
	var spawnACube = function() {
 		var id = Entities.addEntity({

			 position: position,
			 script: Script.resolvePath("cube.js"),
			 type: "Box",
			 name: "ScriptBox",

			 color: { red: 0, green: 0, blue: 155 }
		});
		print("Made a cube!" , id);
	};
});
```

In addition to creating our new function, we also made another change by moving our our print statement into our spawn function, which lets us print out the newly created entity each time we generate a new cube.

Like in our _cube.js_ script, we want to go ahead and call our `spawnACube` function when our eventual spawner object is clicked. Add the following function after the end of the spawnACube function:


```javascript
_this.clickDownOnEntity = function(entityID, event) {
	spawnACube();
};

```

At this point, our cube spawner code should look like this:


```javascript

(function() {
	var _this = this;
	var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
	var spawnACube = function() {
		var id = Entities.addEntity({
			 position: position,
			 script: Script.resolvePath("cube.js"),
			 type: "Box",
			 name: "ScriptBox",
			 color: { red: 0, green: 0, blue: 155 }
		});
		print("Made a cube!" , id);
	};

	_this.clickDownOnEntity = function(entityID, event) {
		spawnACube();
	};
});
```

If you attach your _spawnCube.js_ script to an entity in your domain and click on it, you will notice that the script saves your avatar’s position and places new cubes there - even after you move. We can fix that with a simple change - in `Entities.addEntity `, replace `position: position` with:

```javascript
 position: Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation))
```

Delete the line where we declare our position variable so that after the function declaration at the start of the script file, the `spawnACube` function begins.

```javascript

(function() {
    var _this = this;
    var spawnACube = function() {
	var id = Entities.addEntity({
		position: Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation)),
		"script": Script.resolvePath("cube.js"),
		type: "Box",
		name: "ScriptBox",
		color: { red: 0, green: 0, blue: 155 }
	});
	print("Made a cube!" , id);
    };
    _this.clickDownOnEntity = function(entityID, event) {
	spawnACube();
    };
});
```

What we’ve done here is change our spawn script so that instead of caching, or storing, the variable in our script to reuse across all our cubes, the position is recalculated for each cube we create.

### Spawning the Spawner

Similar to how our spawner creates new cubes, we’ll want to make a single script that we can run to spawn our cube spawner. We’ll start by creating a new script, _createCubeSpawner.js_, that is a single function call to create a new entity:

```javascript
Entities.addEntity({
	position: Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation)),
	script: Script.resolvePath("spawnCube.js"),
	type: "Box",
	color: {red: 255, green: 255, blue: 255},
	dimensions: {x: 0.5, y: 0.1, z: 0.1},
	name: "Cube Spawner"});
```

In the same way that we use `Entities.addEntity `in our cube spawning object to make new cubes, we also use the Entity Functions API to add our spawner when we launch the _createCubeSpawner_ script. We added one additional entity property, “dimensions”, which will make our spawner a little bit longer than the other cubes. We also gave it a name to make it easier to find in our entity list.

### Cleaning up our Cubes

If you click around on your spawner a lot, you’ll generate a pretty large number of cubes quickly, which can be a pain to clean up! We’re going to change our code in our cube spawner to delete all of the cubes we’ve made when we delete the spawner, so we can remove all of them with one deletion.

In your _spawnCube.js_ file, add the following line of code directly above the `spawnACube` function:

```javascript
var cubeList = [];
```

While most of our variables so far have pointed to functions or entity IDs, we’re introducing a new type of object for our variable, an array, or list of objects. When we create a new cube, we store its entity ID in the variable `id`, which we will add to our array. Under your `print("Made a cube!", id);` line, add the following:

```javascript
cubeList.push(id);
```

Now, any time we create a cube, our cube spawner object will retain the ID of the cube being made. To delete an entity, we need to have the entity ID for it, so with our list, we can easily loop through it and get rid of all the cubes we created with a given spawner.

For the deletion part, we’ll go ahead and create a new function in our script, making sure to keep it inside the main block of code. Under the `_this.clickDownOnEntity `function, add the following code:


```javascript

var deleteAllCubes = function() {
	print("Deleting cubes...");
	while (cubeList.length > 0) {
		Entities.deleteEntity(cubeList.pop());
	}
}
Entities.deletingEntity.connect(deleteAllCubes);
```

Let’s walk through what we’ve added to our cube spawning object. The first thing we do is create a new function called `deleteAllCubes`. In that function, we print out that we’re deleting the cubes and set up a while loop, which lets us repeat an action until a specific condition is met. In this case, we’re checking to see if there are any cubes left in our list (which will be true as long as the length of our list is greater than zero) and if there are, we remove the last cube from our list (`cubeList.pop()`) and delete the entity with that ID.

Under our `deleteAllCubes` function, we added another line, `Entities.deletingEntity.connect(deleteAllCubes);`. This allows us to call a particular method when the entity that our script is attached to gets deleted (in this case, `deleteAllCubes()`) - `Entities.deletingEntity` is a message that bubbles up from the High Fidelity engine that can be used to do specific things when we delete an object in our domain.

Save all of your files and run your createCubeSpawner script. Make some cubes and delete the spawner to see our clean up in action!

The final scripts should look like this:

`spawnCube.js`
```javascript

(function() {
    var _this = this;
    var cubeList = [];
    var spawnACube = function() {
        var id = Entities.addEntity({
            position: Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation)),
            "script": Script.resolvePath("cube.js"),
            type: "Box",
            name: "ScriptBox",
            color: { red: 0, green: 0, blue: 155 }
        });
        print("Made a cube!" , id);
        cubeList.push(id);
    };

    _this.clickDownOnEntity = function(entityID, event) {
        spawnACube();
    };

    var deleteAllCubes = function() {
        print("Deleting cubes...");
        while (cubeList.length > 0) {
            Entities.deleteEntity(cubeList.pop());
        }
    };

    Entities.deletingEntity.connect(deleteAllCubes);
});
```

`createCubeSpawner.js`

```javascript
Entities.addEntity({
	position: Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation)),
	script: Script.resolvePath("spawnCube.js"),
	type: "Box",
	color: {red: 255, green: 255, blue: 255},
	dimensions: {x: 0.5, y: 0.1, z: 0.1},
	name: "Cube Spawner"
});

```

_Cube.js_ is unchanged in this tutorial, and remains the same as it was at the start.

### Chapter 2 Recap

What we’ve done is build up our system to allow us to run a single script in our domain to generate a cube spawning object, which in turn generates cubes that change color when we click on them. Each cube exists independently as an object with a new copy of our _cube.js_ script, and are cleaned up when the spawner is deleted.

### Additional Resources for Chapter 2

- [Entity Functions API](https://docs.highfidelity.com/api-reference/namespaces/entities)
- [JavaScript Array Reference](https://www.w3schools.com/js/js_arrays.asp)
- [JavaScript While Loops](https://www.w3schools.com/js/js_loop_while.asp)
- [Creating Client Entity Scripts](https://docs.highfidelity.com/create-and-explore/all-about-scripting/attach-entity-scripts/client-entity-scripts)
- [Creating Server Entity Scripts](https://docs.highfidelity.com/create-and-explore/all-about-scripting/attach-entity-scripts/server-entity-scripts)
- [Attaching Entity Scripts](https://docs.highfidelity.com/create-and-explore/all-about-scripting/attach-entity-scripts)
- [Script Types Overview](https://docs.highfidelity.com/create-and-explore/all-about-scripting)
- [Entity script examples](https://github.com/highfidelity/hifi/tree/master/script-archive/entityScripts)

## Chapter 3: Moving & Equipping our Spawner

In Chapter 2, we made a cube spawner object that we could create by running a single script. We also implemented a clean up feature that removes all of the cubes from a single spawner when that spawn object was deleted. In this tutorial, we will:

- Make our spawner moveable
- Add an equippable property to our spawner so that we can carry it around
- Change where our cubes are spawned so it is easier to place them in specific locations

Note: This tutorial adds in functionality that takes advantage of hand controllers for a VR headset.

### Setting User Data Properties

In addition to a number of specific properties that we can set for our entities in High Fidelity, we have the ability to set custom user data to handle different behaviors. This is helpful for defining custom properties and settings for objects, and we’ll take advantage of setting the user data in our cube spawner to make it wearable.

Wearable objects in High Fidelity attach themselves to your avatar’s hand when they are grabbed in a specified region of the object. We’ll add a JSON-formatted property to our cube spawner that specifies:

- That the object can be grabbed
- That the object can be worn
- Where the grab points are on the spawner
- Where on our hand the spawner will attach

The quotes in our JSON need to be escaped, which means adding a \ character before the quotation marks so that they are stored properly in the code. The JSON data property should be added to your entity properties in _createCubeSpawner.js_:

```javascript
Entities.addEntity({
	position: Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation)),
	script: Script.resolvePath("spawnCube.js"),
	type: "Box",
	color: { red: 255, green: 255, blue: 255 },
	dimensions: { x: 0.5, y: 0.1, z: 0.1 },

	name: "Cube Spawner",
	userData: "{\"grabbableKey\": {\"wantsTrigger\": true}, \"wearable\": {\"joints\": {\"RightHand\": [{\"x\": 0.0813, \"y\": 0.0452, \"z\": 0.0095}, {\"x\": -0.3946, \"y\": -0.6604, \"z\": 0.4748, \"w\": -0.4275}], \"LeftHand\": [{\"x\": -0.0881, \"y\": 0.0259, \"z\": 0.0159}, {\"x\": 0.4427, \"y\": -0.6519, \"z\": 0.4592, \"w\": 0.4099}]}}}"
});
```

However, we’ve caused a slight problem for ourselves by making our spawner grabbable - it means that we can no longer select it to generate cubes! To fix it, we’ll be refactoring our _spawnCube.js_ script by adding in a function that will let us generate new cubes when we have our cube spawner equipped. We’ll be using a prototype in our refactor, and will start adding more nuanced behaviors to our script to detect various states of grabbing and holding our spawner object.

### Updating _spawnCube.js_ to use a prototype function

Head back into _spawnCube.js_ - we’ll be modifying this significantly to take advantage of the capabilities of a prototype function. We’ll also be using the [Hand Controller API](https://docs.highfidelity.com/api-reference/namespaces/controller) to assign specific functionality to our spawner so we can spawn cubes from our trigger pulls.

We’ll start by adding in an array that stores references to our right and left controller triggers. We will also create an empty variable that we’ll call `hand`, which will store a reference to whichever hand picks up the cube spawner. Under your `cubeList` array, add the following to your _spawnCube.js_ script:



```javascript
var TRIGGER_CONTROLS = [
	Controller.Standard.LT,
	Controller.Standard.RT,
];
var hand;
```

Next, we’ll set up our prototype functions. These functions will be a pseudo-constructor for our cube spawner, and contain functions that will wrap around our `createCube` and `deleteAllCubes` functions when specific events occur. Under the last bit of code we just added, copy and paste the following:

```javascript

function CubeSpawner() {
}

CubeSpawner.prototype = {
	preload: function(entityID) {
		this.entityID = entityID;
	},
	startEquip: function(entityID, args) {
		print("Equipping");
		hand = args[0] == "left" ? 0:1;
	},
	continueEquip: function(entityID, args){
		if (Controller.getValue(TRIGGER_CONTROLS[hand]) > 0.95) {
			spawnACube();
		}
	}
};
```

Let’s take a look at what our prototype function is doing. First, we create a `preload` function, which captures our entity ID and stores it when our spawner is initially created. Then, we define what happens when we start equipping our spawner, and save the hand information of whichever controller we used. Finally, we specify what happens while our spawner object is equipped, and test whether or not trigger has been pulled. If it has, we call our `spawnACube` function and a new cube is created.

We’ll also be making another change to how we trigger our cubes if we’re using the click down functionality. Replace the line:


```javascript

this.clickDownOnEntity = function(entityID, event) {
	spawnACube();
};
```

with the line:

```javascript

CubeSpawner.prototype.clickDownOnEntity = CubeSpawner.prototype.spawnACube;

```

The full content of _spawnCube.js_ should now look like this:

```javascript

(function() {

var cubeList = [];

var TRIGGER_CONTROLS = [
Controller.Standard.LT,
Controller.Standard.RT,
];

var hand;

function CubeSpawner() {
}

CubeSpawner.prototype = {
	preload: function(entityID) {
		this.entityID = entityID;
	},
	startEquip: function(entityID, args) {
		print("Equipping");
		hand = args[0] == "left" ? 0:1;
	},
	continueEquip: function(entityID, args) {
		if (Controller.getValue(TRIGGER_CONTROLS[hand]) > 0.95) {
			spawnACube();
		}
	}
};

var spawnACube = function() {
	var id = Entities.addEntity({
		position: Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation)),
		"script": Script.resolvePath("cube.js"),
		type: "Box",
		name: "ScriptBox",
		color: { red: 0, green: 0, blue: 155 }
	});
	print("Made a cube!" , id);
	cubeList.push(id);
};

var deleteAllCubes = function() {
	while (cubeList.length > 0) {
		Entities.deleteEntity(cubeList.pop());
	}
};

CubeSpawner.prototype.clickDownOnEntity = CubeSpawner.prototype.spawnACube;

Entities.deletingEntity.connect(deleteAllCubes);

return new CubeSpawner();
});

```

You can now pick up your spawner and carry it with you, pulling the trigger while the spawner is equipped to create new cubes!

### Changing the cube spawn locations

To make it easier to place our cubes, we’ll be changing our spawner code so that instead of generating a new cube directly in front of our avatar, we place them in front of the spawner instead.

In the spawnACube function, before the line `var id = Entities.addEntity`, add the following line:

```javascript

var cubePosition = frontPosition();

```

Inside of the `Entities.addEntity` function, change `position: Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation))` to the following:

```javascript

position: cubePosition,

```

What we’ve done here is made a new variable, called `cubePosition`, that gets a value from an as-of-yet unwritten function called `frontPosition`. We will be writing a new function to calculate where our cube should spawn, but first, we need to make a couple of changes to our script to allow us to access entity properties outside of our prototype.

Under `var hand`, add the line:

```javascript

var _this;

```

What we’ve done here is create a new variable that will store a reference to our spawner object. In our prototype function, add the following two lines of code to the beginning of the preload function:

```javascript

_this = this;
_this.entityID = entityID;

```

When our preload function is called, we now save the information into our global-scope variable (meaning the entire script can access it) so that we can create a function to calculate where the front of our spawner is and place a cube accordingly.

Under the `spawnACube` function, create the new function below:

```javascript

var frontPosition = function() {
	var position = Entities.getEntityProperties(_this.entityID).position;
	var rotation = Entities.getEntityProperties(_this.entityID).rotation;

	var front = Quat.getFront(rotation);
	var offset = Vec3.multiply(front, 0.25);

	return Vec3.sum(position, offset);
};

```

This function uses the position and rotation of our cube spawner to calculate a new location for our spawned cube. We get those two properties from our spawn, calculate the front direction of the cube, and generate an offset so that the cube appears slightly in front of the spawner instead of directly on top of it. We then return the calculated position and use this in our cubePosition variable when we generate a new cube.

### The final code

Your completed code should look like this:

`createCubeSpawner.js`

```javascript

Entities.addEntity({
	position: Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation)),
	script: Script.resolvePath("spawnCube.js"),
	type: "Box",
	color: { red: 255, green: 255, blue: 255 },
	dimensions: { x: 0.5, y: 0.1, z: 0.1 },
	name: "Cube Spawner",
	userData: "{\"grabbableKey\": {\"wantsTrigger\": true}, \"wearable\": {\"joints\": {\"RightHand\": [{\"x\": 0.0813, \"y\": 0.0452, \"z\": 0.0095}, {\"x\": -0.3946, \"y\": -0.6604, \"z\": 0.4748, \"w\": -0.4275}], \"LeftHand\": [{\"x\": -0.0881, \"y\": 0.0259, \"z\": 0.0159}, {\"x\": 0.4427, \"y\": -0.6519, \"z\": 0.4592, \"w\": 0.4099}]}}}"
});

```

`spawnCube.js`

```javascript

(function() {
var cubeList = [];

var TRIGGER_CONTROLS = [
	Controller.Standard.LT,
	Controller.Standard.RT,
];

var hand;
var _this;

function CubeSpawner() {
}

CubeSpawner.prototype = {
	preload: function(entityID) {
		_this = this;
		_this.entityID = entityID;
		this.entityID = entityID;
	},
	startEquip: function(entityID, args) {
		print("Equipping");
		hand = args[0] == "left" ? 0:1;
	},
	continueEquip: function(entityID, args) {
		if (Controller.getValue(TRIGGER_CONTROLS[hand]) > 0.95) {
			spawnACube();
		}
	}
};

var spawnACube = function() {
	var cubePosition = frontPosition();
	var id = Entities.addEntity({
		position: cubePosition,
		"script": Script.resolvePath("cube.js") ,
			 type: "Box",
			 name: "ScriptBox",
			 color: { red: 0, green: 0, blue: 155 }
		});
	print("Made a cube!" , id);
	cubeList.push(id);
};

var frontPosition = function() {
	var position = Entities.getEntityProperties(_this.entityID).position;
	var rotation = Entities.getEntityProperties(_this.entityID).rotation;

	var front = Quat.getFront(rotation);
	var offset = Vec3.multiply(front, 0.25);

	return Vec3.sum(position, offset);
};

var deleteAllCubes = function() {
	while (cubeList.length > 0) {
			Entities.deleteEntity(cubeList.pop());
		}
};

Entities.deletingEntity.connect(deleteAllCubes);

return new CubeSpawner();
});

```

### Recap

In this tutorial, we added the ability to grab and carry our spawner with us, changed our cube creating behavior from a mouse click to use hand controller triggers, and updated the initial location of our cubes to add them in front of the spawner instead of in front of our avatar. We covered some of the basics of prototype functions, and began to use our entity properties to calculate new positions for objects.
