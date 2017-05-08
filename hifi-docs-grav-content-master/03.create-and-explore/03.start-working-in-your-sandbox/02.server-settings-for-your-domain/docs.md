---
title: Server Settings for Your Own Domain
taxonomy:
    category: docs
---

Using High Fidelity, you can deploy a virtual reality domain server that can be accessed by anyone from anywhere using the High Fidelity open source client. The easiest way to set up a domain is with Sandbox as covered in the [Sandbox Setup Quick Start Guide](https://wiki.highfidelity.com/wiki/Sandbox). Another option is to compile the domain-server and assignment-client from [source](https://github.com/highfidelity/hifi). Once your domain is up and running, there are a number of settings you can configure to have a domain server that best meets your needs.

This document covers how to [access server settings](https://wiki.highfidelity.com/wiki/Server_Settings#Accessing_Server_Settings) and [enable updated settings](https://wiki.highfidelity.com/wiki/Server_Settings#Enabling_Updated_Settings) along with the server settings available. Server settings are available for:

- [Metaverse / Networking](https://wiki.highfidelity.com/wiki/Server_Settings#Metaverse_.2F_Networking) - These settings are used to configure your domain ID and networking.
- [Places / Paths](https://wiki.highfidelity.com/wiki/Server_Settings#Places_.2F_Paths) - These settings are used to associate place names with your domain and to define specific paths that can be used to enter your domain.
- [Description](https://wiki.highfidelity.com/wiki/Server_Settings#Description) - These settings allow you to describe your domain and set operating hours
- [Security](https://wiki.highfidelity.com/wiki/Server_Settings#Security) - These settings are used to define who can can visit your domain, edit your domain, and add entities to your domain.
- [Scripts](https://wiki.highfidelity.com/wiki/Server_Settings#Scripts) - These settings are used to specify scripts to run when Sandbox is running.
- [Audio Environment](https://wiki.highfidelity.com/wiki/Server_Settings#Audio_Environment) - These settings are used to define how sound is transmitted and received throughout the domain.
- [Entity Server Settings](https://wiki.highfidelity.com/wiki/Server_Settings#Entity_Server_Settings) - These settings are used to set the rules for automatic backups.
- [Advanced Settings](https://wiki.highfidelity.com/wiki/Server_Settings#Advanced_Settings)

*Note: This document assumes that you already have Sandbox running on your local machine.*



## Accessing Server Settings

High Fidelity's Sandbox lets you manage your domain on your local machine. When you launch Sandbox, you will see an icon in your system tray (Windows) or in the top menu bar (OS X) that you can click on go to your Home space on your domain as well as providing access to your server's settings and logs

To view the settings page click on the **Settings** option.

[![MenuSettings.png](https://wiki.highfidelity.com/images/e/e4/MenuSettings.png)](https://wiki.highfidelity.com/wiki/File:MenuSettings.png)

This opens the server settings page ([**http://localhost:40100**](http://localhost:40100/)) in your default web browser.

![img](https://wiki.highfidelity.com/images/thumb/7/72/Newfrontppage.png/500px-Newfrontppage.png)

You can jump to a specific settings area by selecting the area from the column on the left. By default, only the basic settings are shown. To see advanced settings, click **Show Advanced**.

## Enabling Updated Settings

If you have made any changes to your settings, for the new settings to go into effect, you need to select **Save and restart** from the column on the left of the settings page.

[![Saveandrestart.png](https://wiki.highfidelity.com/images/6/66/Saveandrestart.png)](https://wiki.highfidelity.com/wiki/File:Saveandrestart.png)

This will save your settings and will restart the domain-server. Doing so will automatically refresh the settings page after a few seconds.

## Metaverse / Networking

The Metaverse/Networking settings are used to configure the domain ID and networking settings. To access the Metaverse/Networking settings, in the column on the left of the settings page, click **Metaverse/Networking**.

To edit the Metaverse/Networking settings, you must first connect to your High Fidelity account. If you don't already have one, you need to [sign up for a High Fidelity account](https://highfidelity.com/users/signup) now.

### Connecting to Your High Fidelity Account

Connecting to you High Fidelity account requires that you log in using a valid High Fidelity username and password, then generating and entering an access token. To connect to your High Fidelity account, complete the following steps:

1. In the Metaverse/Networking settings, click

    

   Connect High Fidelity Account

   .

   [![Meteversnotloggedin.png](https://wiki.highfidelity.com/images/f/f2/Meteversnotloggedin.png)](https://wiki.highfidelity.com/wiki/File:Meteversnotloggedin.png)

2. If you aren't already logged into your High Fidelity account the High Fidelity login page will open in a new tab in your browser. Login using your High Fidelity username and password.

   [![Hifiloginpage.png](https://wiki.highfidelity.com/images/thumb/6/6c/Hifiloginpage.png/800px-Hifiloginpage.png)](https://wiki.highfidelity.com/wiki/File:Hifiloginpage.png)

3. Once logged in, you will be prompted to generate an access token. Click

    

   Create token

   .

   [![Newtoken.png](https://wiki.highfidelity.com/images/thumb/0/0b/Newtoken.png/800px-Newtoken.png)](https://wiki.highfidelity.com/wiki/File:Newtoken.png)

   Note: You can enter a **Name** here for the token to help you remember what this token is for.

4. A pop-up window appears with a new token. Highlight and copy the token to your clipboard and click

    

   I've copied the token

   .

   ![Copytoken.png](https://wiki.highfidelity.com/images/thumb/0/06/Copytoken.png/500px-Copytoken.png)

   ​

   Note: Clicking **I've copied the token** does NOT copy the token. You must copy the token by highlighting it and using **command-C** (Mac) or **Ctrl-C** (Windows).

5. Go back to the settings page. You should see a

    

   Connect Account

    

   pop-up window. Paste the token there and then click

    

   OK

   .

   ![Pastetoken.png](https://wiki.highfidelity.com/images/thumb/f/f3/Pastetoken.png/400px-Pastetoken.png)

   ​

   The domain server will restart and you should now see the Metaverse/Networking settings for editing the domain ID and the network settings.

[![Metaverseloggeding.png](https://wiki.highfidelity.com/images/7/77/Metaverseloggeding.png)](https://wiki.highfidelity.com/wiki/File:Metaverseloggeding.png)

### Domain ID

You should already have a Domain ID showing here, which would be your existing domain. When you run Sandbox for the first time it automatically generates a domain ID and temporary [place name](https://wiki.highfidelity.com/wiki/Place_Names).

To change the domain ID, you can select **Create new domain ID** or **Choosing from my domains**. For more information about creating and using domain IDs, see: [Place Names: Purchasing and Managing](https://wiki.highfidelity.com/wiki/Place_Names).

### Automatic Networking

Here you can choose from the following network settings for your domain:

- **full**




- **ip**




- **disabled**



*Note: Changing the domain's automatic networking settings here will update this settings in the High Fidelity database.*

## Places / Paths

A *place name* is a domain's unique name within the High Fidelity Metaverse and it is one of the easiest ways for other users to reach your domain.

When [you first create a domain](https://wiki.highfidelity.com/wiki/Sandbox), it is assigned a randomly generated place name. This randomly generated place name can’t be shown in the [High Fidelity Directory](https://highfidelity.com/directory) or be authenticated (meaning, it can be impersonated). Most significantly, you had no choice about what it would be.

You can obtain a place name of your choosing (one that better represents you or your business) for your domain by purchasing a place name from High Fidelity. How to get a place name and assign it to your domain is covered in: [Place Names: Purchasing and Managing](https://wiki.highfidelity.com/wiki/Place_Names).

## Description

The Description settings allow you to describe your account and set operating hours. To access Description settings, in the column on the left of the *Settings* page, click **Description**.

*Note: These setting are a framework and are still in development.*

### Creating a Description for Your Account

To create a description for your account, fill in the following fields:

- **Description** - A description of your domain in less than 256 characters
- **Maturity** - A maturity rating for your domain. You can choose **Everyone**, **Teen(13+)**, **Mature(17+)**, **Adult(18+)**.
- **Tags** - Common categories under which your domain falls.

[![Description.png](https://wiki.highfidelity.com/images/8/87/Description.png)](https://wiki.highfidelity.com/wiki/File:Description.png)

### Name Users That Can Show Your Domain to Others

You can specify users who have permission to show your domain to other users by entering High Fidelity user names into the Usernames field under Hosts.

[![Hosts.png](https://wiki.highfidelity.com/images/5/50/Hosts.png)](https://wiki.highfidelity.com/wiki/File:Hosts.png)

### Set Operating Hours

You can specify operating hours for your domain by filling on the Operating Hours fields.

[![Operatinghours.png](https://wiki.highfidelity.com/images/4/4e/Operatinghours.png)](https://wiki.highfidelity.com/wiki/File:Operatinghours.png)

## Security

The Security settings are used to define who can can visit your domain, edit your domain, and add entities to your domain. To access Security settings, in the column on the left of the *Settings* page, click **Security**.

### Basic Security

To have a basic level of security for your domain settings, simply put in your username in **HTTP Username** and any password in **HTTP Password** field.

[![Security.png](https://wiki.highfidelity.com/images/thumb/8/8c/Security.png/700px-Security.png)](https://wiki.highfidelity.com/wiki/File:Security.png)

Anyone trying to access your settings page will have to have this username and password. This also means you will be asked for it each time you open settings.

### Maximum User Capacity

The Maximum User Capacity field allows you to limit how many users can be connected at one time.

[![Maximusers.png](https://wiki.highfidelity.com/images/thumb/4/4c/Maximusers.png/600px-Maximusers.png)](https://wiki.highfidelity.com/wiki/File:Maximusers.png)

Setting this to 0 means no limit. Setting this to 1 will allow only a single user. Note that avatars connected from the same machine do not count towards this limit and that you can specify users that do apply to this limit.

### Domain-Wide User Permissions

The security settings allow you to define who can can visit your domain and what rights they have. You can assign rights to parameter-level groups (anonymous users, users on the local host, users that are logged in) and you can assign rights to specific users by specifying their user ID.

[![Domainwide.png](https://wiki.highfidelity.com/images/thumb/a/ac/Domainwide.png/600px-Domainwide.png)](https://wiki.highfidelity.com/wiki/File:Domainwide.png)

For each user or group specified, you can set the following permissions:

- **Connect**: Sets whether a user can connect to the domain.
- **Lock/Unlock**: Sets whether a user can change the locked property of entities (either from on to off or off to on).
- **Rez**: Sets whether a user can create new entities.
- **Rez Temporary**: Sets whether a user can create new entities with a finite lifetime.
- **Write Assets**: Sets Whether the user can make changes to the domain's asset-server assets
- **Ignore Max Capacity**: Sets whether a user can connect even if the domain has reached or exceeded its maximum allowed agents.

Permissions assigned to a specific user supersede any parameter-level permissions that also apply to the user. Additionally, if more than one parameter is applicable to a single user, the permissions given that user will be the sum of all applicable parameters. For example, if only *localhost* users can connect and only *logged in* users can lock and unlock entities, if a user is both logged in and on a local host, the user will be able to both connect and lock/unlock entities.

*Note: For entities with a finite lifetime, the maximum lifetime defaults to 3600 seconds. This default can be changed by clicking \**Show Advanced** from the sidebar and looking in the **Entity Server Settings** section. The field is labeled **Maximum Lifetime of Temporary Entities**.*

## Scripts

This section enables you to define scripts to run when Sandbox is running.

Enter a URL accessible to your Sandbox machine (and not a *file:* URL). Press the + button. Next click Save and Restart. *Note: Scripts are cached. If the content on the URL host changes, you may want to use some cache-defeating trick, such as specifying a URL with query parameter such as http://whatever.com/path/file.js?version=17*

For more info check out the [JavaScript API](http://jsref.docs.highfidelity.com/) and scripting sections of the documentation, in particular, read the [Scripts Overview](https://wiki.highfidelity.com/wiki/Scripts_Overview).

## Audio Environment

The Server Settings has a section dedicated to Audio settings. These settings affect how sound is transmitted and received throughout the domain.

### Default Domain Attenuation

The first parameter, **Default Domain Attenuation**, allows you to set the degree to which things get quieter as you get further away from them. High Fidelity domains default to a distance attenuation curve roughly like the real world. If you see two avatars talking in the distance, you can hear them, but not very well. If you approach them, they become more audible in a manner that approximates what you're likely to be used to.

A domain's default attenuation can be changed in audio settings, so that no matter how far away a sound source is, it still plays at full volume (attenuation = 0). Likewise, the default attenuation for a domain can be set very high (to a max value of 1), making only things very near to you audible.

### Noise Muting Threshold

The **Noise Muting Threshold** sets up a "Noise Gate", so that when the sound of an audio source is below the set level, no audio is transmitted. If someone is in an environment with a lot of background noise, this feature will suppress the background noise except when the person speaks at a volume loud enough (i.e., above the set threshold) to "open the gate." The higher this threshold is set, the louder someone has to speak to be heard. Setting the value to zero effectively disables the features, allowing audio (noise and otherwise) through to the audio mixer.

### Low-pass Filter

The **Low-pass Filter** reduces high-frequency bands (i.e., "treble" for old stereo enthusiasts) when sounds come from above or behind us, which is what our oddly-shaped ears do for us in the real world. If you enable this feature and spin in place with someone speaking to you, you'll note they sound a bit muted when they're behind you.

### Zones

The concept of audio zones enables you to define specific parcels of space in 3D space. These zones can then be set with rules for how audio is mixed and rendered. Each zone has a **Name** and is defined using start and end X, Y, and Z coordinates.

[![Zones.png](https://wiki.highfidelity.com/images/f/f9/Zones.png)](https://wiki.highfidelity.com/wiki/File:Zones.png)

**Attenuation Coefficients** can be used to designate how a zone transmits sound to another zone. Each profile needs two zones for one-way communication, a **Source** and a **Listener**.

#### Example: Building a Stage

Another common example is to build a stage environment for performances. To do this, complete these steps:

1. Create two new zones, call them "Stage" and "Audience".
2. Set the the **Attenuation Coefficients** to zero with Stage as the source and Audience as the listener. That way, anyone in Audience will hear anyone on Stage at maximum volume. Everybody in Audience has the best seat in the house!
3. If you want to minimize Audience people from hearing one another in the Audience zone, set up another **Attenuation Coefficients** pair with Audience as both source and listener, and set the distance attenuation very high--e.g., to 1.0. That way, you'll only hear people very close to you like your friend on your right, but won't hear the guy coughing 10 rows back.

### Reverb Settings

The **Reverb Settings** are used to create the natural ambient reflections we would hear when a sound fires in a real space. It can give the effect of sounding like you are in a large empty room, deep inside a large cave, or inside a tiny room like a tiled shower.

[![Reverbsettings.png](https://wiki.highfidelity.com/images/7/77/Reverbsettings.png)](https://wiki.highfidelity.com/wiki/File:Reverbsettings.png)

The reverb settings are:

- **Zone**: The user-defined zone where the reverb effect will occur,
- **Reverb Decay Time**: This is how long the reverb "tail" lasts. Zero decay time means no reverb at all (like outside in a field). 1-2 seconds is a good range for normal rooms. Longer times like 5 seconds give a deep hall/cave sound, and longer than that sounds like you're inside an oil tanker.
- **Wet/ Dry Mix**: This is the volume of the reverb tail relative to the original "dry" signal.

Keep the Wet/ Dry Mix value at or below zero, or prepare to have your ears assaulted. Levels of between -20 (minus 20) and -8 (minus eight) give useful results, with -8 (minus 8) being the more reverberant of the two. For a very thick reverb, you might try a value as high as -3 (minus 3), where the reverb is nearly as loud as the original signal.

## Entity Server Settings

These are the rules for automatic backups. The four preset rules set as default are shown in the image below.

![img](https://wiki.highfidelity.com/images/e/e5/Entityserver.png)

The four preset rules.

Each rule has four variables:

- **Name:** A name for the rule so you recognize it.
- **Rule Format:** The file name extension the rule is saved as.
- **Backup Interval in Seconds:** How often the backs up occurs, in seconds.
- **Max Rolled Backup Versions:** How many backups are kept before it re-saves as the first one.

For example, the "Half Hour Rolling" preset rule will save every half hour until there are 5 backups, then the 6th backup will overwrite the first one and so on. You will always have 5 backups for the last 2 1/2 hours.

If you want to add a new rule (e.g., every two hours) you can add it in where it shows "Example." Fill out the four variables and click the **+** button.

## Advanced Settings

Additional settings for the Asset Server (ATP), Audio Buffers, and Avatar Mixer are available by selecting **Show Advanced** from the sidebar menu. Advanced setting parameters are subject to change. Documentation to come once stabilized.