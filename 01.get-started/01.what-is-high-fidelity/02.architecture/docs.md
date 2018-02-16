---
title: Understanding High Fidelity's Architecture
taxonomy:
    category:
        - docs
---

## Overview

We've covered some of the software elements of High Fidelity—Interface, Sandbox, Domains, and Entities. This page will cover the other elements that are part of High Fidelity's high level architecture. 



### Domain Server

A domain is a space in High Fidelity that you can visit. Your sandbox functions as your home domain. If you're invited to a talk show in-world, you'll have to go to the domain where it's taking place. A domain is a spatial simulation, and it is computed by a stack of programs on one or more computers. 

Your home domain has servers that are on the machine hosting it. This machine doesn't have to be local and can be anywhere. Your home domain's server stack is controlled and managed by the Sandbox.

So what is this server stack? Your home domain's server stack contains components that simulate and manage different aspects of the domain such as audio, entities and your avatar. So whatever you see, hear and do in your domain is managed by the server stack. The *Domain Server* is at the top of this stack and its job is to give out assignments to the other components. These components are called *Assignment Clients*, because from the perspective of the domain server, they are clients that take on different roles. 

#### Functions of the Assignment Clients

Assignment clients control and manage various aspects of a domain. They also communicate directly with the Interface clients connected to a domain. There are six types of assignment clients:

* The *Avatar Mixer* is in charge of your virtual presence in any domain. It keeps track of where you are, which avatar you are wearing, and how you move around the domain.  For example, it tracks how you move your head while wearing a Head Mounted Display (HMD).

* The *Audio Mixer* mixes all sounds, whether it's voice or environmental. And it does this not just for avatars, but also for all the entities in a domain. The Audio mixer can customize a stereo mix for you based on your position relative to the audio source.

* The *Entity Server* tracks all entities and their properties in a domain, from their description and position, to any behaviors attached to them by script. If an entity is modified, the change is communicated to the entity server, which in turn relays the information to all clients currently visiting the domain. 

* The *Asset Server* provides copies of the models, audio files, scripts, and other media used by the domain. It functions like a Web server, but using protocols tuned to High Fidelity's architecture.

* The *Agent* executes user-written JavaScript programs. If you've written a script to get your avatar to clap, or create a bowling alley, the Agent will execute it. It can see entities, avatars, and send audio. 

* The *Messages Mixer* provides communication between scripts running in different programs connected to the domain, which could be Interfaces or Agents.

  ![hifi-system-architecture](\architecture-sandbox.png)

#### Topology

The server stack is not only controlling, managing and computing your domain as you see it, but also how it is seen by anyone visiting your domain. This means that the domain server hands out simulation assignments and provides their IP addresses to connecting Interface clients. The domain server is a single executable that spawns assignment clients that become the different mixers as requested. Each assignment client can function as one of the six types mentioned. The domain server determines which assignment client functions as which mixer. 

Sandbox manages all these components—the domain server, five dedicated assignment clients, and as many agent assignments clients as needed. However, it is possible to spread the assignment clients over multiple computers, and even to divide each function among a hierarchy of assignment components, which may be on different computers. For instance, multiple audio mixers could be used to mix the audio in different geographic regions of the domain.

![hifi-system-architecture](\architecture-overview.png)

In the picture above, the Asset Server and Messages Mixer are not shown, but they fit in like the Audio, Avatar and Entity mixers. The Assignment Server under Global Services is for future use, in which people can contribute assignment client computing power to a pool.

High Fidelity's open source architecture is a work in progress and is subject to change. If you're interested in understanding our architecture better, check out our [Github](https://github.com/highfidelity/) project.



### Physics

Your VR experience won't be realistic without some physics. High Fidelity includes a [physics engine](http://bulletphysics.org/) that simulates behaviors of objects according to the Newtonian laws of physics. So, when an object falls to the ground and bounces, or when two or more objects collide, their movements are computed by the physics engine. Each Interface runs its own physics engine, and the entity server coordinates the results to produce a consistent simulation across the domain.

This engine works in some ways like a “black box”; the deep core of its operations are not exposed. However, some parameters are available to JavaScript, and you can control various aspects of the system through the Action API. As of now, the Action API is under development and hence unstable. We provide examples, but they come with the proviso that they’re subject to breakage at any point.



##Related Pages


- [How It Works](../how-it-works)
