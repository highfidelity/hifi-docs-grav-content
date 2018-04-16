---
title: Installation
taxonomy:
    category:
        - docs
---
### Client Only Installer
To install High Fidelity's Interface, follow the instructions [here](https://docs.highfidelity.com/get-started/installation/client-install) to download the client installer. The installer comes with everything you need to view and interact with High Fidelity's content and users. You cannot install High Fidelity's Sandbox using this installer, which means you won't be able to create or host your own content.

### Client and Sandbox Installer
Want to create and host your own content? Follow the instructions [here](https://docs.highfidelity.com/get-started/installation/client-and-sandbox-install) to download the client and sandbox installer. High Fidelity's Sandbox provides all the tools you need to create, modify, and host your own content. 

### Client Only Installer and Client and Sandbox Installer Interactions
We do not expect users to switch back and forth between the two installers. For more information on the interactions between the two of them, go [here]()
* During the client only install, if a Sandbox is still running the install will tell you that one of Sandbox/assignment-client/domain-server is still running and must be closed before install can proceed
* The client only and server/client installers default to install to different directories
* The master/stable client/sandbox installer defaults to "High Fidelity{- PRXXXX}"
* The client only installer defaults to "High Fidelity{- PRXXXX}"
* The uninstall record for the client only and client/server installs are the separated in "Apps & Features"
* The client install record shows "High Fidelity Interface" instead of "High Fidelity" 
Uninstalling after a client only install will only remove the client only install
Uninstalling after a server/client install will only remove the server/client install
Uninstalling after a server only install will only remove the files needed by the server
Intentionally installing one over the other (in the same folder) will overwrite the previous install
Installing a client only install over a server/client install will leave an older version of the server behind
Installing a server/client install over a client install will overwrite the previous version of the client
Installing only the server (from custom server/client install) over a client install will leave an older version of the client behind
Running an "outdated" version of client or server could cause undefined behaviour when shared libraries also used by the other component have been updated
