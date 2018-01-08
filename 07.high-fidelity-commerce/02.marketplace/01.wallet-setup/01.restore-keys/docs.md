---
title: 'Backup and Restore Your Private Keys'
taxonomy:
	category: docs
---

*Learn how to backup and restore your private keys.*

## Overview

This page talks about how you can backup your private keys and restore them. 

### Backup Your Private Keys

Your *Wallet's* passphrase is used to encrypt your private keys. Your private keys are used to securely access the contents of your *Wallet* and purchases. If you lose your passphrase, you will not be able to recover it. Backing up your passphrase and private keys will ensure continued access to your *Wallet* and purchases. 

> > > > > You can access the backup instructions and find the directory where your private keys are stored in the Help section of your *Wallet*. ![](wallet-help.PNG)



- Your private keys are stored on your hard drive in Interface's AppData directory. You can also find the file using the Help section in your *Wallet*.
  - Windows: `C:/Users/<user>/AppData/Roaming/High Fidelity/Interface/<username>.hifikey`
  - Mac OS: `~/Library/Application Support/High Fidelity/Interface`
  - Linux: `/home/<username>/.local/share/High Fidelity/Interface`
- Backup your `.hifikey` file by copying it to a USB flash drive or to service like Dropbox or Google Drive. 



### Restoring Your Private Keys

- You can restore your private keys by replacing the file in Interface's AppData directory with your backup copy.
  - Windows: `C:/Users/<user>/AppData/Roaming/High Fidelity/Interface/<username>.hifikey`
  - Mac OS: `~/Library/Application Support/High Fidelity/Interface/<username>.hifikey`
  - Linux: `/home/<username>/.local/share/High Fidelity/Interface/<username>.hifikey`
