---
title: Sandbox
taxonomy:
    category: docs
---

Welcome! Using High Fidelity, you can deploy a virtual reality domain server that can be accessed by anyone from anywhere using the High Fidelity open source client. The easiest way to setup a domain is with Sandbox and that is the method covered in this quick start guide. (Another option is to compile the domain-server and assignment-client from [source](https://github.com/highfidelity/hifi).)

To quickly get your own corner of the Metaverse up and running, follow the steps below.

## Download and Install the Latest High Fidelity Build

Download the latest build of the High Fidelity software from the [Downloads](https://highfidelity.com/download) page.

High Fidelity is available for MacOS (10.8 or newer) and Windows (7.1 or newer).

*Note: We are still in the process of nailing down the minimum system requirements, but any machine made in the last 5 years with at least a dual core should be able to host a modest experience for a small number of viewers. However, for larger numbers of viewers and hosting additional content, hosting services such as Amazon S3 or Digital Ocean could be used.*

The High Fidelity software download contains:

- **Interface** - the client application used to view and navigate domains
- **Sandbox** - the application used to manage a High Fidelity domain

To install the software, simply run the installer and follow the instructions on screen. Be sure that **High Fidelity Sandbox** is selected to be installed.

[![Installserver.png](https://wiki.highfidelity.com/images/e/e2/Installserver.png)](https://wiki.highfidelity.com/wiki/File:Installserver.png)

At the conclusion of the install, you are given an option to launch Sandbox. Once launched, it should present you with a splash screen and Sandbox should now be an application in your system tray (Windows) or in the top menu bar (OS X).

![img](https://wiki.highfidelity.com/images/8/8f/Tray.png)

High Fidelity icon in system tray (Windows).

![img](https://wiki.highfidelity.com/images/6/69/Mac.png)

High Fidelity icon in the top menu bar (OS X).

*Note: If you did not launch Sandbox after installation completed, you can find the High Fidelity Sandbox application in your \**Start Menu** (Windows) or in your **Applications** folder (OS X), usually in a **High Fidelity** subfolder, and launch it from there.*

## Visit Your Home Domain

![ConsoleGoHome.png](https://wiki.highfidelity.com/images/6/6f/ConsoleGoHome.png)

When launched, Sandbox downloads a default set of domain content (models, scripts, etc.) and creates a Home domain on your local machine.

To visit your Home domain, click on the High Fidelity icon in your system tray (Windows) or in the top menu bar (OS X) and in the menu that opens, select **Go Home**.

This starts the domain server and launches Interface with your avatar at the Home domain's index position. By default, the index position is 0, 0, 0 which will put your avatar right in the middle of the default content.

With the domain server running, if your network is not overly restrictive, your Home domain can be reached by other users; but, it won't be easy to find.

## Configure Your Domain’s Security Settings[[edit](https://wiki.highfidelity.com/index.php?title=Sandbox&action=edit&section=3)]


![MenuSettings.png](https://wiki.highfidelity.com/images/e/e4/MenuSettings.png)

Before making your domain widely available, you should review your domain’s security settings to ensure that they meet your needs.

By default, anyone can visit your domain, anyone can edit your domain content, and anyone can add new entities to the domain.

To change these settings, click on the High Fidelity icon in your system tray (Windows) or in the top menu bar (OS X) and in the menu that opens, select **Settings**.

Your default web browser will open at [**http://localhost:40100**](http://localhost:40100/). In the Domain Settings page select **Security** from the options in the column on the left. This will take you to the domain security options.

[![Securityoptions.png](https://wiki.highfidelity.com/images/thumb/6/68/Securityoptions.png/500px-Securityoptions.png)](https://wiki.highfidelity.com/wiki/File:Securityoptions.png)

Here you can make the necessary changes to set who can can visit your domain, edit your domain, and add entities.

For more details on server settings, see [Server Settings](https://wiki.highfidelity.com/wiki/Server_Settings). 

## Share Your Domain with Other Users

With the domain server running, if your network is not overly restrictive, your domain can be reached by other users; but, it may not be easy to find. To reach your domain, other users will need to know your domain's *place name* - the domain's unique name within the High Fidelity Metaverse. When Sandbox launched for the first time, your Home domain was assigned a randomly generated place name.

To share this place name with other users, select **Share** from the Sandbox menu.

![MenuShare.png](https://wiki.highfidelity.com/images/0/08/MenuShare.png)

The link displayed is the location of your Home domain.

![SharePlace.png](https://wiki.highfidelity.com/images/4/43/SharePlace.png)

Copy this link to share it with others. They can visit your domain in Interface by selecting **Navigate > Show Address Bar** , opening '**Go To' in the HUD**, or by hitting the '**Enter'** key on the keyboard, and specifying the link.

*Note: If you have a High Fidelity account and are logged in, depending on your High Fidelity account settings, you may appear online in your domain to other users making you easily and immediately reachable by anyone who can see that you are online.*

*Note: If the domain is not reachable, it is possible that your network or the connecting client’s network uses symmetric NAT. In this case, for the domain to be reachable, you will need to open up the appropriate ports on your firewall to be reachable by basically all users (other than those on extremely restrictive networks that do not allow outbound traffic on unknown ports).*

## Purchase and Associate a Place Name with Your Domain

You did not have the option to choose its name, it doesn't appear in the list of Places in High Fidelity, and it can't be authenticated (it can be impersonated).

You can obtain a place name of your choosing (one that better represents you or your business) by [purchasing and registering a place name from High Fidelity](https://wiki.highfidelity.com/wiki/Place_Names). Purchased place names can be authenticated. *Note: To purchase a place name, you will need to create a High Fidelity account.*

## What Next?

- **Add content to your domain**
  Your home domain contained some default content so that you have something to look at when you first start. You can make your home yours by uploading your own models and scripts. For more information see [Creating Content](https://wiki.highfidelity.com/wiki/Create_content).


- **Learn more about managing the server**
  To learn more about managing the server, see the [Sandbox Reference Guide](https://wiki.highfidelity.com/wiki/Using_Sandbox). There you will learn how to use Sandbox to start, stop, and restart the server, check status and logs, and ensure Sandbox is running at startup.


- **Learn more about configuring server settings**
  To learn more about server settings, see the [Server Settings](https://wiki.highfidelity.com/wiki/Server_Settings).