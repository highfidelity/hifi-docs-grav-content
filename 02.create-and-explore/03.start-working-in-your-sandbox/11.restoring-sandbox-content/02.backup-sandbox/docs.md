---
title: 'Backing Up Your Entire Sandbox'
  taxonomy:
    category: docs
---

*Learn how you can backup your entire sandbox.*

###Backup Your Sandbox 

To back up your entire sandbox: 

1. Quit Sandbox on your machine
2. Transfer the following folders out of your AppData folders into a new location on your machine or externally:

Windows

      - C:\Users\username\AppData\Roaming\High Fidelity\assignment-client
      - C:\Users\username\AppData\Roaming\High Fidelity\domain-server
      - C:\Users\username\AppData\Roaming\High Fidelity\Server Console
      - C:\Users\username\AppData\Roaming\High Fidelity\domain-server.json     
        ![](appdata-folders.PNG)

OS X

    - /Users/[username]/Library/Application Support/High Fidelity/assignment-client
    - /Users/[username]/Library/Application Support/High Fidelity/domain-server
    - /Users/[username]/.config/highfidelity.io/domain-server.json
    - /Users/[username]/Library/Application Support/High Fidelity/Server Console

Linux

    - /home/[username]/.local/share/High Fidelity/assignment-client
    - /home/[username]/.local/share/High Fidelity/domain-server
    - /home/[username]/.config/highfidelity.io/domain-server.json
    - /home/[username]/.local/share/High Fidelity/Server Console

The username in the paths is your username in the computer you are using. 

Restore your Sandbox

To restore your sandbox from your backed up content:

1. Quit Sandbox
2. Navigate to the folders above and replace the contents with your stored content
   - If you are restoring only entities, make sure that your .json.gz file is named models.json.gz
   - If you are restoring your entire Sandbox, copy everything into their corresponding AppData folders
