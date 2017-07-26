---
title: 'Windows 64-bit'
---

Use this guide to create your first High Fidelity build for Windows 64-bit.

##Overview
This guide will help you create your first High Fidelity build if you’re using a system with Windows 64 bit. 

--------------

##Requirements

####Hardware Requirements
To successfully build High Fidelity, check out the [system requirements](http://localhost/get-started/requirements). 


####Software Requirements
To create your High Fidelity build you’ll need to download and install: 

**1. Visual Studio 2017**

If you don’t have Community or Professional edition of Visual Studio 2017, download [Visual Studio Community 2017](https://www.visualstudio.com/downloads/). Make sure that the following components are selected:

TODO:ADD IMAGE

**2. CMake**     

Download and install the latest release of CMake 3.8.0. Download the file named  win64-x64 Installer from the [CMake Website](https://cmake.org/download/). Make sure to check "Add CMake to system PATH for all users" when prompted during installation.

**3. Qt**              

Download and install the [Qt 5.6.1 Installer](https://download.qt.io/official_releases/qt/5.6/5.6.1-1/qt-opensource-windows-x86-msvc2013_64-5.6.1-1.exe). The download file is large (850 MB) and may take some time. While installing, you have to select all components. 

The next thing you need to do is set the Qt environment variables. Go to "Control Panel > System > Advanced System Settings > Environment Variables > New..." (or search “Environment Variables” in Start Search). Then, setup your Qt variables.  
* Set "Variable name": QT_CMAKE_PREFIX_PATH 
* Set "Variable value":  `C:\Qt\Qt5.6.1\5.6\msvc2013_64\lib\cmake`

**4. OpenSSL**

Download and install the Win64 OpenSSL v1.0.2k Installer here.                     


---------------------------


####Steps

#####1. Run CMake to Generate Build Files 
Run Command Prompt from Start and run the following commands: 

		cd "%HIFI_DIR%"
		mkdir build
		cd build 
		cmake .. -G "Visual Studio 12 Win64"

`%HIFI_DIR%` is the directory for the highfidelity repository.


#####2. Make a Build
Follow these steps to make your build:
* Open  `%HIFI_DIR%\build\hifi.sln`  using Visual Studio.
* For best performance, change the Solution Configuration (next to the green play button) from Debug to Release for best performance.
* Lastly, go to Run Build > Build Solution.


#####3. Test the Interface
Create another environment variable (Just like how you created the Qt-variable).

* Set Variable name: _NO_DEBUG_HEAP
* Set Variable value: 1

In Visual Studio, go to the Apps folder in the Solution Explorer. Right-click interface and select Set as Startup Project. Then, you can navigate to Run Debug > Start Debugging.

Now, you should have a full build of High Fidelity and be able to run the Interface using Visual Studio. Please check our documentation for more information regarding the programming workflow.

>>>>> You can also run Interface by launching it from command line or File Explorer from `%HIFI_DIR%\build\interface\Release\interface.exe`

---------------------------------------------------------------


####Troubleshooting
If you face any problems once you start trying to generate build files using Cmake, there are couple of things you could try to solve any issues.
* Delete your locally cloned copy of the highfidelity repository.
* Restart your computer.
* Download the repository again.
* Try to generate build files using Cmake. If this is successful, continue with the rest of the steps.

#####Common Errors and their Solutions
* If CMake gives you the same error message repeatedly after the build fails, try to remove CMakeCache.txt found in the %HIFI_DIR%\build' directory.
* If you receive the error  “nmake cannot be found” make sure nmake.exe is located in the following path C:\Program Files (x86)\Microsoft Visual Studio 12.0\VC\bin. If it isn't, add nmake's directory to the PATH environment variable.
* If Qt is throwing an error, make sure you have the correct version (5.6.1-1) installed and the 'QT_CMAKE_PREFIX_PATH' environment variable is set correctly.


##References
* [System Requirements](http://localhost/get-started/requirements)
