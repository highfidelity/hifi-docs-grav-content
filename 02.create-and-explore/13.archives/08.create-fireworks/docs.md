---
title: Create Fireworks
taxonomy:
    category: docs
---

Welcome to the fireworks scripting tutorial! Here we will take you step by step through building a launch button which, when pressed, will launch a series of fireworks into the sky!

![](fireworks.png)



## All is quiet...

You find yourself on the edge of a vast desert. Through the screaming wind you hear laughter and music. You slowly make your way through the dust, tinged with purple light from the far off mysterious structure you can just barely glimpse. You've moved into a deep trancelike state when suddenly- BOOM! A huge explosion overhead vibrates you to the core, and crackling firework after firework almost blinds you. A shriek of joy rings out from the settling smoke, and your curiosity overpowers your fear as you fly at top speed towards the source.

A mysterious woman clad in flowing red robes is standing next to a large rusty button that reads "launch". You're new to this world, and approach her in awe and exclaim "You have to show me how you made that!"

The figure grows solemn and stares deeply into your eyes. "Are you sure you want to know?" she asks softly, "for this knowledge may lead you down a path from which there is no turning back. A magical path, brimming with creativity and profound, intense power. You're life may never be the same again, my friend."

You feel absolutely no hesitation. "I'm in," you reply.

She breaks into a wide smile. "I was hoping you'd say that! I have a special document prepared, available to all those who seek the deeper knowledge. You will find what you are looking for within..."

## Overview

The fireworks experience is composed of two scripts- one is the spawner script that creates the button from which fireworks will be launched from, and the other is the entity script you will attach to the launch button itself. Whenever I'm creating any experience that requires an entity script, I always find it immensely helpful to write a corresponding interface script that spawns the entity with the script attached. This will speed up your iteration time considerably as you develop your content. For a deeper look at the difference between entity and interface (or client) scripts, check out this [in depth guide](https://docs.highfidelity.com/docs/scripts-digging-deeper).

I've organized this tutorial as a series of progressing chapters, and as you follow along with this you will be going through a similar process to the one I took as I wrote the actual fireworks experience. I've included the code for each chapter in the examples/tutorials/fireworks directory for your reference.

## Chapter 1: Writing the Spawner Script

It's generally a good idea to write your spawner script first, so you can quickly get your entity (or group of entities) set up and destroyed as you iterate. This will become more and important as you start building more intricate experiences that require multiple entities working together in concert, but even now will save you lots of time and frustration. Let's start by writing the interface script to get our launch button spawned and positioned in front of our avatar with a simple, boilerplate entity script attached to it: Call it fireworksLaunchButtonSpawner.js

```
 1 // Chapter 1 : fireworksLaunchButtonSpawner.js
 2 
 3   var orientation = Camera.getOrientation();
 4   orientation = Quat.safeEulerAngles(orientation);
 5   orientation.x = 0;
 6   orientation = Quat.fromVec3Degrees(orientation);
 7   var center = Vec3.sum(MyAvatar.position, Vec3.multiply(3, Quat.getFront(orientation)));
 8 
 9   var SCRIPT_URL = Script.resolvePath("fireworksLaunchButtonEntityScript.js");
10   var MODEL_URL = "https://s3-us-west-1.amazonaws.com/hifi-content/eric/models/Launch-Button.fbx";
11   var launchButton = Entities.addEntity({
12     type: "Model",
13     name: "hifi-launch-button",
14     modelURL: MODEL_URL,
15     position: center,
16     dimensions: {
17       x: 0.98,
18       y: 1.16,
19       z: 0.98
20     },
21     script: SCRIPT_URL,
22   })
23 
24 
25   function cleanup() {
26     Entities.deleteEntity(launchButton);
27   }
28 
29   Script.scriptEnding.connect(cleanup);</source>
30 
31 Now create a file in the same folder called fireworksLaunchButtonEntityScript.js. Paste or type the following code in:
32 
33 <source lang="javascript">// Chapter 1: fireworksLaunchButtonEntityScript.js
34 
35   (function() {
36     Script.include("../../libraries/utils.js");
37     var _this;
38     Fireworks = function() {
39       _this = this;
40     };
41 
42     Fireworks.prototype = {
43 
44       preload: function(entityID) {
45         _this.entityID = entityID;
46 
47       }
48 
49     };
50 
51     // entity scripts always need to return a newly constructed object of our type
52     return new Fireworks();
53   });

```

Great! Now run the interface script and you should see a launch button appear in front of you.

The spawner script is quite simple- it spawns a model entity with an entity script attached in front of your avatar. If you haven't learned about the different kinds of entities our system supports, no worries! Hop on over to [this guide](http://jsref.docs.highfidelity.com/docs/entity-properties), which will walk you through all of the entities you can create and the properties common to them all and specific to each entity type.

The entity script doesn't do much right now, but we're ready to start building it out, and will be able to make rapid changes and see them take effect almost instantly, simply by reloading our spawner script, since we've set up the script to delete the launch button entity on shutdown. From here on out, most of our work will be spent building out our entity script to imbue our launch button with the power to launch fireworks into the sky!

## Chapter 2: Launching a Firework on Mouse Click or Hand Controller Trigger

Let's add some logic to our entity script that will launch a firework when someone clicks on the button with their mouse, or squeezes a hand controller trigger while their hand is in the launch button or pointing at the button from further away. For the latter two actions to work, you need to be running handControllerGrab.js, which is one of your default running scripts.

```
 1 // Chapter 2: fireworksLaunchButtonEntityScript.js
 2 
 3   (function() {
 4     Script.include("../../libraries/utils.js");
 5     var _this;
 6     Fireworks = function() {
 7       _this = this;
 8       _this.launchSound = SoundCache.getSound("https://s3-us-west-1.amazonaws.com/hifi-content/eric/Sounds/missle+launch.wav");
 9     };
10 
11     Fireworks.prototype = {
12 
13       startNearTrigger: function() {
14         _this.shootFirework(_this.position);
15       },
16 
17       startFarTrigger: function() {
18         _this.shootFirework(_this.position);
19       },
20 
21       clickReleaseOnEntity: function() {
22         _this.shootFirework(_this.position);
23       },
24 
25 
26       shootFirework: function(launchPosition) {
27         Audio.playSound(_this.launchSound, {
28           position: launchPosition,
29           volume: 0.5
30         });
31 
32 
33         var smoke = Entities.addEntity({
34           type: "ParticleEffect",
35           position: _this.position,
36           velocity: {x: 0, y: 3, z: 0},
37           lifespan: 10,
38           lifetime: 20,
39           isEmitting: true,
40           name: "Smoke Trail",
41           maxParticles: 3000,
42           emitRate: 80,
43           emitSpeed: 0,
44           speedSpread: 0,
45           polarStart: 0,
46           polarFinish: 0,
47           azimuthStart: -3.14,
48           azimuthFinish: 3.14,
49           emitAcceleration: {
50             x: 0,
51             y: 0.01,
52             z: 0
53           },
54           accelerationSpread: {
55             x: 0.01,
56             y: 0,
57             z: 0.01
58           },
59           radiusSpread: 0.03,
60           particleRadius: 0.3,
61           radiusStart: 0.06,
62           radiusFinish: 0.9,
63           alpha: 0.1,
64           alphaSpread: 0,
65           alphaStart: 0.7,
66           alphaFinish: 0,
67           textures: "https://hifi-public.s3.amazonaws.com/alan/Particles/Particle-Sprite-Smoke-1.png",
68           emitterShouldTrail: true,
69         });
70 
71       },
72 
73       preload: function(entityID) {
74         _this.entityID = entityID;
75         _this.position = Entities.getEntityProperties(_this.entityID, "position").position;
76 
77       }
78 
79     };
80 
81     // entity scripts always need to return a newly constructed object of our type
82     return new Fireworks();
83   });

```

Now, reload your spawner script, and you should see the launch button flicker briefly out of and back into existence. What happened here is we just deleted our old launch button entity, and respawned a new one. This new launch button now has our more fleshed-out entity script attached. When you click on it with your mouse, or near or far-trigger it with your hand controller of choice, you should see a trail of smoke go flying into the air! We currently support Razer Hydra and HTC Vive hand controllers, so if you have either one of those systems and you're running handControllerGrab.js, you should be able to near or far-trigger the launch button and to launch the firework in the same manner as you would by mouse clicking on it. If you're unsure of what "far trigger" or "near trigger" means, check out [this walkthrough](https://dash.readme.io/project/hifijavascriptref/v1.0/docs/hand-controller-api) on our hand controller API, which will take you through the different ways entity scripts can hook into our controller system and respond to various kinds ways you can interact with entities with your hands.

The smoke you see is a Particle Effect entity which is a powerful and flexible entity that allows you to create all kinds of awesome effects- from a comet trail, to fire, rain, magic spells, and so much more. To learn more about particle effects, the [entity properties guide](http://jsref.docs.highfidelity.com/docs/entity-properties) goes into the details of all the properties you can play with to make your own effects. When you're done reading through that, you can spawn your own particle system right from the edit menu (make sure you're running edit.js for this menu to be available) and adjust the properties from the particle explorer tab that appears alongside the other entity menu tabs.

The other element of note here is the sound we play on the firework's launch. High Fidelity has an awesome 3D spatial sound system, and it's super easy to play all kinds of sounds at an in-world location of your choice that anyone nearby can hear. Line's 8 and 27-30 demonstrate how to load and play the missile launch sound effect you hear. For more detailed information, check out the [SoundCache](http://jsref.docs.highfidelity.com/docs/soundcachegetsound) and [Audio](http://jsref.docs.highfidelity.com/docs/audioplaysound) references.

So to sum up what we've accomplished so far: We've wired up an entity script to our launch button that, when clicked or triggered by a hand controller, launches our firework into the sky! Right now, our firework is just a trail of smoke- we need to make it explode! We'll cover that in the next chapter

## Chapter 3: Exploding the Firework

To create a cool firework explosion effect, we'll want to wait for the launched firework to rocket upwards for a few seconds, and then detonate the explosion, which, like the smoke, is a particle entity. If you've ever done any web development, you'll be familiar with the setTimeout function, which in browsers is implemented as part of the Window object, but in High Fidelity is exposed on the global Script object. Check out our [Script Object reference](https://docs.highfidelity.com/v1.0/docs/script-object-api) for more! Here's the implementation:

```
  1 // Chapter 3: fireworksLaunchButtonEntityScript.js
  2 
  3   (function() {
  4     Script.include("../../libraries/utils.js");
  5     var _this;
  6     Fireworks = function() {
  7       _this = this;
  8       _this.launchSound = SoundCache.getSound("https://s3-us-west-1.amazonaws.com/hifi-content/eric/Sounds/missle+launch.wav");
  9       _this.explosionSound = SoundCache.getSound("https://s3-us-west-1.amazonaws.com/hifi-content/eric/Sounds/fireworksExplosion.wav");
 10       _this.TIME_TO_EXPLODE = 3000;
 11     };
 12 
 13     Fireworks.prototype = {
 14 
 15       startNearTrigger: function() {
 16         _this.shootFirework(_this.position);
 17       },
 18 
 19       startFarTrigger: function() {
 20         _this.shootFirework(_this.position);
 21       },
 22 
 23       clickReleaseOnEntity: function() {
 24         _this.shootFirework(_this.position);
 25       },
 26 
 27       shootFirework: function(launchPosition) {
 28         Audio.playSound(_this.launchSound, {
 29           position: launchPosition,
 30           volume: 0.5
 31         });
 32 
 33 
 34         var smoke = Entities.addEntity({
 35           type: "ParticleEffect",
 36           position: _this.position,
 37           velocity: {x: 0, y: 3, z: 0},
 38           linearDamping: 0,
 39           lifespan: 10,
 40           lifetime: 20,
 41           isEmitting: true,
 42           name: "Smoke Trail",
 43           maxParticles: 3000,
 44           emitRate: 80,
 45           emitSpeed: 0,
 46           speedSpread: 0,
 47           polarStart: 0,
 48           polarFinish: 0,
 49           azimuthStart: -3.14,
 50           azimuthFinish: 3.14,
 51           emitAcceleration: {
 52             x: 0,
 53             y: 0.01,
 54             z: 0
 55           },
 56           accelerationSpread: {
 57             x: 0.01,
 58             y: 0,
 59             z: 0.01
 60           },
 61           radiusSpread: 0.03,
 62           particleRadius: 0.3,
 63           radiusStart: 0.06,
 64           radiusFinish: 0.9,
 65           alpha: 0.1,
 66           alphaSpread: 0,
 67           alphaStart: 0.7,
 68           alphaFinish: 0,
 69           textures: "https://hifi-public.s3.amazonaws.com/alan/Particles/Particle-Sprite-Smoke-1.png",
 70           emitterShouldTrail: true,
 71         });
 72 
 73         Script.setTimeout(function() {
 74           var explodePosition = Entities.getEntityProperties(smoke, "position").position;
 75           _this.explodeFirework(explodePosition);
 76         }, _this.TIME_TO_EXPLODE);
 77 
 78       },
 79 
 80     explodeFirework: function(explodePosition) {
 81         Audio.playSound(_this.explosionSound, {
 82           position: explodePosition
 83         });
 84         var firework = Entities.addEntity({
 85           name: "fireworks emitter",
 86           position: explodePosition,
 87           type: "ParticleEffect",
 88           colorStart: hslToRgb({
 89             h: Math.random(),
 90             s: 0.5,
 91             l: 0.7
 92           }),
 93           color: hslToRgb({
 94             h: Math.random(),
 95             s: 0.5,
 96             l: 0.5
 97           }),
 98           colorFinish: hslToRgb({
 99             h: Math.random(),
100             s: 0.5,
101             l: 0.7
102           }),
103           maxParticles: 10000,
104           lifetime: 20,
105           lifespan: randFloat(1.5, 3),
106           emitRate: randInt(500, 5000),
107           emitSpeed: randFloat(0.5, 2),
108           speedSpread: 0.2,
109           emitOrientation: Quat.fromPitchYawRollDegrees(randInt(0, 360), randInt(0, 360), randInt(0, 360)),
110           polarStart: 1,
111           polarFinish: randFloat(1.2, 3),
112           azimuthStart: -Math.PI,
113           azimuthFinish: Math.PI,
114           emitAcceleration: {
115             x: 0,
116             y: randFloat(-1, -0.2),
117             z: 0
118           },
119           accelerationSpread: {
120             x: Math.random(),
121             y: 0,
122             z: Math.random()
123           },
124           particleRadius: randFloat(0.001, 0.1),
125           radiusSpread: Math.random() * 0.1,
126           radiusStart: randFloat(0.001, 0.1),
127           radiusFinish: randFloat(0.001, 0.1),
128           alpha: randFloat(0.8, 1.0),
129           alphaSpread: randFloat(0.1, 0.2),
130           alphaStart: randFloat(0.7, 1.0),
131           alphaFinish: randFloat(0.7, 1.0),
132           textures: "http://ericrius1.github.io/PlatosCave/assets/star.png",
133         });
134 
135 
136         Script.setTimeout(function() {
137           Entities.editEntity(firework, {
138             isEmitting: false
139           });
140         }, 1000);
141 
142       },
143 
144       preload: function(entityID) {
145         _this.entityID = entityID;
146         _this.position = Entities.getEntityProperties(_this.entityID, "position").position;
147 
148       }
149 
150     };
151 
152     // entity scripts always need to return a newly constructed object of our type
153     return new Fireworks();
154   });

```

You'll notice that we use the Script.setTimeout function twice- one starting on line 73, where we wait 3 seconds from the time of launch until we explode the firework, and the other starting on line 136, where we stop emitting the particles from the emitter after 1 second. If you read through the entity properties guide I referenced above you may be asking yourself, "why do I need to set a timeout on the fireworks emitter and disable the emitter, when I could just give that entity a lifetime of 1 second?" That's a great question- and the answer is that, even after we turn off the emitter, we still want the particles that have already been emitted to stay alive and be visible. With particle effect entities, if you delete the entity, all of its associated particles will all blink out of existence simultaneously! That might be fine for some things you'll want to design, but a firework doesn't work like that at all- once the combustible material within the firework is burnt through, all the remaining sparks keep doing their thing and slowly fade away- ideally before they land on anything flammable on the ground.

Another interesting aspect of this script is that many of the properties of the particle entity are assigned random values within a certain range. This is an easy and fun way to get a ton of subtle and not-so-subtle kinds of firework explosions every time one explodes! By using randomness in such a way, no two fireworks will ever be the same. Though powerful, the path of randomness is not to be taken lightly- too much or the wrong kind of randomness may turn your beautiful creation into utter chaos.

Hopefully you got a lot out of this tutorial. You are highly encouraged to take this script and try modifying it to understand it at a deeper level. Some fun things you can try are launching multiple fireworks for each button click, and/or exploding multiple fireworks from one launched firecracker!