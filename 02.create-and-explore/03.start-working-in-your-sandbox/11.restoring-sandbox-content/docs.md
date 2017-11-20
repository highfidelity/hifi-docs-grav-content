---
title: Restoring Sandbox Content
taxonomy:
    category: docs
---

*Learn how to restore the entities in your sandbox, or your entire sandbox from your computer to another.*

## Overview

This page details how you can back up and restore your sandbox and sandbox content. 

##Introduction

Depending on your requirements, you can either
- [Backup only all the entities in your sandbox](#a1): This means all the objects you either created in your domain or the ones you imported. Once you create this backup, you can create a new domain and upload all your entities.  
- [Backup your entire sandbox](#a2): This means you will be backing up all the information about your sandbox. When you do this, you can restore your entire sandbox including server information, as it was. It doesn't only include the entities in your sandbox. 

Check out how you can do both!

####Backup Only Entities <a id=#a1"></a>

To backup only the entities in your sandbox:

1. In a web browser on your sandbox machine, visit http://localhost:40100/. This opens up the domain-server settings. 
2. Click ‘Content’ in the main menu. ![](domain-server-settings.PNG)
3. The links listed in this window show you where your entities are located on your machine. ![](settings-content.PNG)
4. Save a copy of the models.json.gz file (and any backups you'd like to keep) to a safe location on your computer or externally

The backup files are configured in your domain settings, and will not immediately be replaced. Older copies of your backups will be overwritten based on your domain server backup settings. 

####Backup Your Sandbox <a id=#a2"></a>

To back up your entire sandbox: 

1. Quit Sandbox on your machine
2. Transfer the following folders out of your AppData folders into a new location on your machine or externally:

**Windows**
      - C:\Users\username\AppData\Roaming\High Fidelity\assignment-client
      - C:\Users\username\AppData\Roaming\High Fidelity\domain-server
      - C:\Users\username\AppData\Roaming\High Fidelity\Server Console
      - C:\Users\username\AppData\Roaming\High Fidelity\domain-server.json     
        ![](appdata-folders.PNG)

**OS X**
	- /Users/[username]/Library/Application Support/High Fidelity/assignment-client
	- /Users/[username]/Library/Application Support/High Fidelity/domain-server
	- /Users/[username]/.config/highfidelity.io/domain-server.json
	- /Users/[username]/Library/Application Support/High Fidelity/Server Console
	
**Linux**
	- /home/[username]/.local/share/High Fidelity/assignment-client
	- /home/[username]/.local/share/High Fidelity/domain-server
	- /home/[username]/.config/highfidelity.io/domain-server.json
	- /home/[username]/.local/share/High Fidelity/Server Console
      
>>>>> The username in the paths is your username in the computer you are using. 

###Restore your Sandbox

To restore your sandbox from your backed up content:

1. Quit Sandbox
2. Navigate to the folders above and replace the contents with your stored content
	* If you are restoring only entities, make sure that your .json.gz file is named models.json.gz
	* If you are restoring your entire Sandbox, copy everything into their corresponding AppData folders
