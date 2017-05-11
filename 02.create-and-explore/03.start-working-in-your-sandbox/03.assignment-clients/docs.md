---
title: Asset Server (ATP)
taxonomy:
    category: docs
---

The Asset Server is an assignment in your domain that you can use to reliably serve files referenced by entities or scripts in your domain. The protocol that is used to transfer files to/from the Asset Server is called the Asset Transfer Protocol (ATP). With the Asset Server, you can easily add models, sound effects, and other objects from your local machine into your domain.

When you are in a domain where you have the permission to write assets, you can access the Asset Browser via the Edit menu by selecting the Assets button. The Asset Browser allows you to manage the files currently stored in your Asset Server.

[![AssetBrowser.png](https://wiki.highfidelity.com/images/b/b0/AssetBrowser.png)](https://wiki.highfidelity.com/wiki/File:AssetBrowser.png)

From the Asset Browser you can:

- Upload new files to your Asset Server
- Remove existing files from your Asset Server
- Rename existing files in your Asset Server
- Add an existing model from your Asset Server to the world in front of you
- Organize your assets into folders to help you find and reference them quickly

Once files have been uploaded to your Asset Server they can be referenced by any entities or scripts in your domain using their ATP URLs.

Note that assets in your Asset Server are only available inside your domain. The Asset Server is best used to host the content used by entities and scripts in your domain. Your avatar mesh would not be an ideal use case for an ATP asset, since it is not likely to be available under the same mapping from the Asset Servers in the other domains you visit.

## ATP URLs

The ATP URLs have the following syntax:

`atp:/$FILENAME`

If you have a file in the root of your Asset Server named `chair.fbx`, the ATP URL would be `atp:/chair.fbx`. If you have a file in your Asset Server at the path `content/sounds/boom.wav` the ATP URL is `atp:/content/sounds/boom.wav`. Don't forget the leading slash!