---
title: 'Windows 64-bit Build Guide'
taxonomy:
  category: docs
---

## Overview
This guide will help you create your first High Fidelity build if you’re using a system with Windows 64 bit.

## Building High Fidelity

>>>>> We are now using Visual Studio 2017 and Qt 5.10.1. If you are upgrading from Visual Studio 2013 and Qt 5.6.2, do a clean uninstall of those versions before going through this guide.

---

>>>>> The prerequisites will require about 10 GB of space on your drive.

**1. Install Visual Studio 2017 and Python**

If you don’t have Community or Professional edition of Visual Studio 2017, download [Visual Studio Community 2017](https://www.visualstudio.com/downloads/).

When selecting components, check "Desktop development with C++." Also on the Summary toolbar, check "Windows 8.1 SDK and UCRT SDK" and "VC++ 2015.3 v140 toolset (x86,x64)". If you do not already have a python development environment installed, also check "Python Development" in this screen.

If you already have Visual Studio installed and need to add Python, open the "Add or remove programs" control panel and find the "Microsoft Visual Studio Installer". Select it and click "Modify". In the installer, select "Modify" again, then check "Python Development" and allow the installer to apply the changes.

**Step 1a. Alternate Install of Python**
If you do not wish to use the Python installation bundled with Visual Studio, you can download the installer from [here](https://www.python.org/downloads). Ensure you get version 3.6.6 or higher.

**2. Install CMake**

Download and install the latest version of CMake 3.9. Download the file named  win64-x64 Installer from the [CMake Website](https://cmake.org/download/). Make sure to check "Add CMake to system PATH for all users" when prompted during installation.

**3. Install Qt**

Download and install the [Qt Open Source Online Installer](https://www.qt.io/download-open-source/?hsCtaTracking=f977210e-de67-475f-a32b-65cec207fd03%7Cd62710cd-e1db-46aa-8d4d-2f1c1ffdacea). While installing, you only need to have the following components checked under Qt 5.10.1: "msvc2017 64-bit", "Qt WebEngine", and "Qt Script (Deprecated)".

Note: Installing the Sources is optional but recommended if you have room for them (~2GB).

The next thing you need to do is set the Qt environment variables. Go to "Control Panel > System > Advanced System Settings > Environment Variables > New..." (or search “Environment Variables” in Start Search). 
* Set "Variable name": QT_CMAKE_PREFIX_PATH
* Set "Variable value":  `C:\Qt\5.10.1\msvc2017_64\lib\cmake`

**4. Install vcpkg**

Clone the [VCPKG repository](https://github.com/Microsoft/vcpkg).

Follow the instructions in the [readme](https://github.com/Microsoft/vcpkg/blob/master/README.md) to bootstrap vcpkg using a Developer Command Prompt.

Set an environment variable VCPKG_ROOT to the location of the cloned repository. Go to "Control Panel > System > Advanced System Settings > Environment Variables > New..." (or search “Environment Variables” in Start Search). 
* Set "Variable name": VCPKG_ROOT
* Set "Variable value":  &lt;The location of of the cloned repository&gt;

Close and re-open any command prompts after setting the environment variable so that they will pick up the change.

**5. Install OpenSSL via vcpkg**

Using a Developer Command Prompt, run the following command in your %VCPKG_ROOT% directory: 
```bash
.\vcpkg install openssl:x64-windows
```

Once the build completes, you should have a file `ssl.h` in `${VCPKG_ROOT}/installed/x64-windows/include/openssl`.
 
**6. Run CMake to Generate Build Files**  

Run Command Prompt from Start and run the following commands:
```bash
cd "%HIFI_DIR%"
mkdir build
cd build
cmake .. -G "Visual Studio 15 Win64"
```
where `%HIFI_DIR%` is the directory for the hifi repository.

**7. Make a Build**

Open  `%HIFI_DIR%\build\hifi.sln`  using Visual Studio.

Change the Solution Configuration (menu ribbon under the menu bar, next to the green play button) from "Debug" to "Release" for best performance. 

Run from the menu Build > Build Solution.

**8. Test the Interface**

Create an environment variable `_NO_DEBUG_HEAP`. Go to "Control Panel > System > Advanced System Settings > Environment Variables > New..." (or search “Environment Variables” in Start Search). 

* Set Variable name: _NO_DEBUG_HEAP
* Set Variable value: 1

In Visual Studio, right+click "interface" under the Apps folder in Solution Explorer and select "Set as Startup Project". Run from the menu bar Debug > Start Debugging.

Now, you should have a full build of High Fidelity and be able to run the Interface using Visual Studio. Please check our documentation for more information regarding the programming workflow.

>>>>> You can also run Interface by launching it from command line or File Explorer from %HIFI_DIR%\build\interface\Release\interface.exe

##Troubleshooting
If you face any problems once you start trying to generate build files using CMake, there are couple of things you could try to solve any issues.
* Delete your locally cloned copy of the highfidelity repository.
* Restart your computer.
* Download the [repository](https://github.com/highfidelity/hifi) again.
* Try to generate build files using CMake. If this is successful, continue with the rest of the steps.

####Common Errors and their Solutions
* If CMake gives you the same error message repeatedly after the build fails, remove CMakeCache.txt from the %HIFI_DIR%\build' directory.
* If CMake cannot find OpenSSL, remove CMakeCache.txt found in the %HIFI_DIR%\build directory. Verify that your VCPKG_ROOT environment variable is set and pointing to the correct location. Verify that the file ${VCPKG_ROOT}/installed/x64-windows/include/openssl/ssl.h exists.
* If Qt is throwing an error, make sure you have the correct version (5.10.1) installed and the 'QT_CMAKE_PREFIX_PATH' environment variable is set correctly.