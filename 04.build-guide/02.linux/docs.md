---
title: Linux
taxonomy:
  category: docs
---

*Build High Fidelity in Linux.*

## Overview

Please read the [general build guide](../build-guide) for information on dependencies required for all platforms. Only Linux specific instructions are found in this file.

### Qt5

Dependencies Should you choose not to install Qt5 via a package manager that handles dependencies for you, you may be missing some Qt5 dependencies. On Ubuntu, for example, the following additional packages are required:

```
libasound2 libxmu-dev libxi-dev freeglut3-dev libasound2-dev libjack0 libjack-dev libxrandr-dev libudev-dev libssl-dev
```

With the new build method in place it becomes somewhat easier to build domain-server, assignment-client and interface with Ubuntu 14.10.

### Ubuntu

Here's what's needed starting from a clean Ubuntu 14.10 (server variant used) install.  These instructions do not work for Ubuntu 16.04.

#### Install Requirements

Install the needed requirements:

```
sudo apt-get install git build-essential cmake qt5-default qtscript5-dev libssl-dev qttools5-dev qtmultimedia5-dev libqt5svg5-dev libqt5webkit5-dev libsdl2-dev libqt5xmlpatterns5-dev qttools5-dev-tools libqt5websockets5-dev
```

#### Download Source Code

Make directories in and download the source code:

```
mkdir $HOME/source
cd $HOME/source
git clone https://github.com/highfidelity/hifi.git
```

#### Compile High Fidelity Components

Now you're ready to setup for compiling HF components:

```
mkdir compile
cd compile
cmake ../hifi/
```

#### Domain Server

If you want server side parts:

```
make assignment-client
make domain-server
```

#### Install Interface

If you want Interface:

```
sudo apt-get install qml-module-qtgraphicaleffects qml-module-qtwebkit qml-module-qtquick-controls libqtwebkit-qmlwebkitplugin
make interface
```
