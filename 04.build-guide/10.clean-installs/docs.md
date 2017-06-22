---
title: 'Clean Installation of High Fidelity'
taxonomy: 
category:
	docs

---

*Learn how to do a clean install of High Fidelity.*

##Overview
If you're facing problems when you load Interface and Sandbox, you can try uninstalling and reinstalling High Fidelity. If you continue to face problems, you can contact support@highfidelity.com.

You can also try doing a clean install.



##Introduction

A clean install should aid in starting and running High Fidelity without any problems. If you wish to, you can use this document to do a clean install.


####Steps for a Clean Installation
#####Windows

1. Go to Control Panel > Programs > Uninstall a Program. Or type “Add or Remove Programs” in your Windows search bar. ![](control-panel.png)
2. Uninstall any versions of High Fidelity that are visible (Including any Steam installs).
3. In the File Explorer, go to ```C:/Program Files/```  (or wherever you’ve installed High Fidelity builds) and delete any folders related to High Fidelity. If you installed through Steam, delete folders related to High Fidelity located at ```C:/Program Files(x86)/Steam/steamapps/common```. ![](program-files.png)
4. Find your Local and Roaming App Data folders (usually ```C:/Users/your_username/AppData/Local```  and  ```C:/Users/your_username/AppData/Roaming```). You can also open it by typing in “%appdata%” into the Windows search.![](appdata.png)
>>>>>If you do not see the folder, make sure you can view hidden folders. In File Explorer, click View and make sure “Hidden Items” is checked
5. If you want to preserve your Sandbox content, go to your ```AppData/Local/High Fidelity``` and folder, and move the “assignment-client” folder to a safe place. Repeat for ```AppData/Roaming/High Fidelity```.
6. In ```AppData/Local```, delete any folders related to High Fidelity. Repeat for ```AppData/Roaming```.
7. To restore your Sandbox content, reinstall High Fidelity and put back the “assignment-client” folders you backed up in their respective locations. ![](appdata-local.png)

