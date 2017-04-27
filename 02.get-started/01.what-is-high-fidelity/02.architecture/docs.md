---
title: 'Architecture Overview'
taxonomy:
    category:
        - docs
---

## Overview

High Fidelity is client/server software allowing you to deploy VR environments which other people can come into, and which can be changed in real time. You enter these simulated worlds by running the High Fidelity client program called *Interface.* Here you are represented by an *avatar.* At any time your avatar may be “in” only one bounded region, called a *domain*. In addition to avatars, domains may contain other things that may be visible or invisible. These other things are called *entities.* [Entities](https://wiki.highfidelity.com/wiki/Entity) may be anything from a simple box or sphere to a lighting source to a complex mesh model, can be animated with complex behaviors using javascript, and can be made to obey the laws of physics. (The coordinate system of a domain runs from -16384 to 16384 meters in x, y, and z.) The high level architecture of High Fidelity will allow multiple server computers to support the avatars and entities within a single domain, allowing scaling to very large environments and concurrency.

### Interface

[Interface](https://wiki.highfidelity.com/wiki/Interface) is the client software that you use to connect to VR spaces hosted on High Fidelity server software (for example the 'Sandbox'). It provides an immersive editable environment (sound, 2d and 3d graphics, support for hand-held controllers and head-mounted displays, etc) and a programmatic interface for manipulating the domain and its contents. It is analogous in some ways to a web browser. If you think about Google Chrome, for example, it contains both the rendering engine that displays web pages and the developer tools that allow you to create new webpages and JavaScript programs. Similarly Interface both renders the domain and provides a programmatic interface to it.

### Servers and Sandbox

Each Domain is essentially a spatial simulation computed by a stack of programs on one or more computers. For your domain, the servers typically reside on the machine that’s hosting the domain, but they don't have to be local; they can be anywhere. Each server stack is controlled and managed by a single application known as the **Sandbox**

The "stack" in this case is a set of components that simulate and manage different aspects of the domain. At the top of the stack is the *Domain Server*; its job is to dole out simulation 'assignments' to the other components. These components are referred to as 'Assignment Clients', because from the perspective of the domain server, they are clients that take on different roles. The assignment clients also communicate directly with the interface clients that are connected to a domain. For example, the Audio Mixer is an assignment client that collects audio from sound sources (including avatars), mixes and processes them in 3D, and then sends them back to the connected interface clients who need to hear them.

#### Functions of the Assignment Clients

The *Avatar Mixer* is in charge of everything related to your virtual presence in any domain. It keeps track of where you are, which model is used to represent you, and how you move around the domain. This includes things like movement of your head when you’re wearing an HMD, facial movement, etc.

The *Audio Mixer* mixes all sounds, whether voice or environmental, for everything in the domain, including both avatars and entities. It presents a customized stereo mix for each avatar running Interface based on their relative position to the sound sources.

The *Entity Server* keeps track of all entities in the domain — their description, position, and any behaviors attached to them by script. When something changes about an entity, this information is communicated to the entity server, which relays that information to all clients currently visiting that domain.

The *Asset Server* provides copies of the models, audio files, scripts, and other media used by the domain. It functions much like a Web server, but using protocols that are tuned to the High Fidelity architecture.

An *Agent* is an assignment client that executes user-written JavaScript programs. It can see entities, avatars, send audio and even impersonate an avatar (i.e. NPC, “non-player character”). See [Scripts Overview](https://wiki.highfidelity.com/wiki/Scripts_Overview).

The *Messages Mixer* provides for communication between scripts running in different programs connected to the domain, which may be Interfaces or Agents.

#### Topology

The Domain Server is in charge of handing out simulation assignments and providing their IP addresses to connecting Interface clients. (In other words, the server stack is not only computing your domain as you see it, but also how it is seen by anybody who is visiting it. ) The Domain Server is a single executable that spawns "assignment clients" that become the different servers/mixers as requested. Each copy knows how to wear any of six hats (avatar mixer, audio mixer, entity server, asset server, agent, or messages mixer) and wears whatever hat their domain server assigns them.

Sandbox manages all these components, running the domain server, five dedicated assignment clients, and as many agent assignments clients as needed. However, it is possible to spread the assignment clients over multiple computers, and even to divide each function among a hierarchy of assignment components, which may be on different computers. For example, multiple audio mixers could be used to mix the audio in different geographic regions of the domain.

![Hifi-system-architecture.png](https://wiki.highfidelity.com/images/thumb/f/fe/Hifi-system-architecture.png/800px-Hifi-system-architecture.png)

Asset server and Messages mixer are not shown, and fit similarly to Audio/Avatar/Entity mixers. The Assignment Server under Global Services is for future use, in which people can contribute assignment client computing power to a pool.

High Fidelity's open source architecture is a work in progress and is subject to change. If you want to better understand the implementation or contribute changes, check out the High Fidelity project in [Github](https://github.com/highfidelity/).

### Physics

High Fidelity includes a [physics engine](http://bulletphysics.org/) that simulates behaviors of objects according to Newtonian laws of physics. So, when an object falls to the ground and bounces, or when two or more objects collide, their movements are computed by the physics engine. Each Interface runs its own physics engine, and the entity server coordinates the results to produce a consistent simulation across the domain.

This engine works in some ways like a “black box”; the deep core of its operations are not exposed. However, some parameters are available to JavaScript, and you can control various aspects of the system through the Action API. As of this writing the Action API is under development and hence unstable. We provide examples, but they come with the proviso that they’re subject to breakage at any point.

### Under the Hood 

Interface and the various servers are implemented as programs written in C++. When you execute a [JavaScript program](https://wiki.highfidelity.com/wiki/Scripts_Overview), your API calls are mapped to objects in C++. The interface between C++ and a script is provided by the a cross-platform, open source runtime environment called [Qt](https://www.qt.io/). When a script sets or gets data, it is talking to the Qt event system.

High Fidelity has four different kinds of scripts -- see [Scripts Overview](https://wiki.highfidelity.com/wiki/Scripts_Overview). Each Interface and assignment script executes in its own thread, isolated from other scripts. With this isolation model, you don’t have to worry about what other scripts are doing. You can include whatever scripts you want in your own namespace. Entity scripts use javascript function containment to separate the execution of the multiple entity scripts, which all execute in the same thread.

##References


- [Host documentation](https://wiki.highfidelity.com/wiki/Category:Host_documentation)
- [Host reference](https://wiki.highfidelity.com/wiki/Category:Host_reference)
- [Creator documentation](https://wiki.highfidelity.com/wiki/Category:Creator_documentation)
- [Creator reference](https://wiki.highfidelity.com/wiki/Category:Creator_reference)