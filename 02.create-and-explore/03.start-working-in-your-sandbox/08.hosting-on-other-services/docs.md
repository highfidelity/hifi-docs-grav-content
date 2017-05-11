---
title: Set Up Your Domain on Amazon Services (EC2)
taxonomy:
    category: docs
---

*Learn how you can set up your domain on Amazon Services (EC2).*

## Overview

**USER CONTRIBUTION: UNDER REVIEW**

We'll walk you through setting up your domain on Amazon Services (EC2).

- Register for AWS services: [https://aws.amazon.com/](https://aws.amazon.com/).
- Start up an new EC2 instance.
  - If you use one of the wizards, your preferred region may not come up as a choice. If you start from the EC2 console, it will give all regions as options.
  - I chose the image: Microsoft Windows Server 2012 R2 Base - ami-7805b71c , I had tried the 2016 version first but it didn't seem stable at this time
  - take the t2.small, 2GB seems to help alot as well importantly , the nano sizes do not support remote desktop.
  - accept most of the default during the setup steps for the instance, note on the security page, make sure that RDP is available for the security group, and set it to 'your ip' for access.


- During the process you will be asked to create a key file so you can connect to the new server with remote desktop (RDP), keep this file safe..


- After the server has finished setting up (give it 10 minutes) connect to it from the EC2 Management console:
  - first right click and choose 'Get windows password', then upload your key, note the resulting password
  - then right click again and choose 'connect', from here you can click 'download remote desktop file', once clicked should open up remote desktop. Full remote desktop documentation is available from the AWS site as well as:
    - [https://support.microsoft.com/en-us/help/17463/windows-7-connect-to-another-computer-remote-desktop-connection](https://support.microsoft.com/en-us/help/17463/windows-7-connect-to-another-computer-remote-desktop-connection)
    - [http://www.techrepublic.com/article/pro-tip-remote-desktop-on-mac-what-you-need-to-know/](http://www.techrepublic.com/article/pro-tip-remote-desktop-on-mac-what-you-need-to-know/) (not tested by me)


- Once you have accessed the remote windows server you just set up, there may be some complications to actually open internet explorer to the High fidelity site due to security settings.
  - Option 1: keep clicking 'add' on the security popups.
  - Option 1b: you may want to install chrome or firefox as well on the server.
  - Option 2: copy the hifi installer file from your PC desktop and paste it up to the RDP server (can take a while but avoids IE annoyances).


- Install and set sandbox to run automatically and on startup, then move to the existing Sandbox, placenames and Hi Fi domain documentation. !!A key point to note is your will have to add your avatar name into the permissions section of the sandbox settings.!!

Hopefully this can be helpful, once you know it, its possible to run through this setup in 30 minutes or so.

