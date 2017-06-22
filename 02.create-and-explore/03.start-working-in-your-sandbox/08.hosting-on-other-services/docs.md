---
title: Set Up Your Domain on Amazon Services (EC2)
taxonomy:
    category: docs
---

**USER CONTRIBUTION: UNDER REVIEW**

*Learn how you can set up your domain on Amazon Services (EC2).*

## Overview

We'll walk you through setting up your domain on Amazon Services (EC2).

- Register for AWS services: [https://aws.amazon.com/](https://aws.amazon.com/).
- Start up an new EC2 instance.
  - If you use one of the wizards, your preferred region may not come up as a choice. If you start from the EC2 console, it will give all regions as options.
  - Choose an image, such as Microsoft Windows Server 2012 R2 Base - ami-7805b71c. 
  - Take the t2.small, 2GB seems to help a lot as well and the nano sizes do not support remote desktop.
  - Accept most of the default during the setup steps for the instance, note on the security page, make sure that RDP is available for the security group, and set it to your IP for access.


- During the process you will be asked to create a key file so you can connect to the new server with remote desktop (RDP). Save this file. 


- After the server has finished setting up (give it 10 minutes) connect to it from the EC2 Management console:
  - Right click and select 'Get windows password', then upload your key, note the resulting password.
  - Then right click again and choose 'Connect', from here you can click 'Download Remote Desktop File', once clicked should open up remote desktop. Full remote desktop documentation is available from the AWS site as well as:
    - [https://support.microsoft.com/en-us/help/17463/windows-7-connect-to-another-computer-remote-desktop-connection](https://support.microsoft.com/en-us/help/17463/windows-7-connect-to-another-computer-remote-desktop-connection).
    - [http://www.techrepublic.com/article/pro-tip-remote-desktop-on-mac-what-you-need-to-know/](http://www.techrepublic.com/article/pro-tip-remote-desktop-on-mac-what-you-need-to-know/).


- Once you have accessed the remote windows server you just set up, you may have to modify the security settings on Internet Explorer.
  - Option 1: Keep clicking 'add' on the security popups.
  - Option 1b: You may want to install Chrome or Firefox as well on the server.
  - Option 2: Copy the High Fidelity installer file from your local system and paste it into the RDP server.


- Install and set sandbox to run automatically and on startup, then move to the existing Sandbox, place names and Hi Fi domain documentation. You will have to add your avatar name into the permissions section of the sandbox settings.



