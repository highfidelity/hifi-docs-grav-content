---
title: Client and Server Installer and Client Only Installer Interactions
taxonomy:
    category:
        - docs
---
+ No changes have been made to the native code that tells you that something from High Fidelity is still running during install
  - During the client only install, if a Sandbox is still running the install will tell you that one of Sandbox/assignment-client/domain-server is still running and must be closed before install can proceed
+ The client only and server/client installers default to install to different directories
  - The master/stable client/sandbox installer defaults to "High Fidelity{- PRXXXX}"
  - The client only installer defaults to "High Fidelity Installer{- PRXXXX}"
+ The uninstall record for the client only and client/server installs are the separated in "Apps & Features"
  - The client install record shows "High Fidelity Interface" instead of "High Fidelity" 
  - Uninstalling after a client only install will only remove the client only install
  - Uninstalling after a server/client install will only remove the server/client install
  - Uninstalling after a server only install will only remove the files needed by the server
+ Intentionally installing one over the other (in the same folder) will overwrite the previous install
  - Installing a client only install over a server/client install will leave an older version of the server behind
  - Installing a server/client install over a client install will overwrite the previous version of the client
  - Installing only the server (from custom server/client install) over a client install will leave an older version of the client behind
  - Running an "outdated" version of client or server could cause undefined behaviour when shared libraries also used by the other component have been updated