---
title: 'Create an Avatar Switching Tablet App'
taxonomy:
  category: docs
---

## Overview

Many users in High Fidelity like to have multiple avatars to switch between, and typing in different urls to .fst files can be inconvenient. In this tutorial, we’re going to write a script for our Interface application that gives us a new tablet app for swapping between avatars quickly. We’ll be covering:

- Using the Tablet APIs to create a new Tablet App
- Creating an HTML page for our Tablet App UI
- Sending messages from our HTML to our Tablet App script



## Introducing the Tablet UI

The High Fidelity Tablet is an in-world object that serves as the main interface for users in-world. With the Tablet UI, developers can create additional menus, tools, and apps that extend the functionality of Interface. Tablet UI applications are client scripts written in JavaScript that are loaded by users to add applications to their tablets. The UI for Tablet UI apps is written in HTML and styled using CSS.

### Script: launchAvatarApp.js

The first thing that we'll do is create an [Interface script](https://wiki.highfidelity.com/wiki/Script_Types_Overview) that will load in our tablet app to swap avatars. In addition to "installing" our app into our tablet, launchAvatarApp.js will also handle the logic of storing links to our avatar FST files, setting up our app properties, and listening for events from button clicks on our app's HTML.

```
(function() {

	var APP_NAME = "Avatars";
    var APP_URL = "YOUR_APP_HTML_FILE_URL";
    var APP_ICON = "YOUR_APP_ICON_IMAGE_HERE"
	
    // Link to our avatar options
    var AVATARURL1 = "AVATAR_FST_FILE_LINK_1";
    var AVATARURL2 = "AVATAR_FST_FILE_LINK_2";
    
    // Get a reference to the tablet 
	var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
	var button = tablet.addButton({
        	text: APP_NAME,
            icon: APP_ICON
    	});

    function clicked(){
        tablet.gotoWebScreen(APP_URL);
    }
    button.clicked.connect(clicked);

    function onWebEventReceived(event){
        print("Received Web Event: " + event);

        if(typeof event === "string"){
            event = JSON.parse(event);
        }

        if(event.type === "click")
        {
            if(event.data === "Avatar 1"){
                print("Avatar 1 data");
                MyAvatar.skeletonModelURL = AVATARURL1;
            }
            else if(event.data === "Avatar 2"){
                print("Avatar 2 data");
                MyAvatar.skeletonModelURL = AVATARURL2;
            }
        }
    }
    tablet.webEventReceived.connect(onWebEventReceived);
	function cleanup() {
        tablet.removeButton(button);
	}
    Script.scriptEnding.connect(cleanup);
}());

```

Our Interface script is a single function that contains all of the other components of setting up our tablet app and responding to webEvents that are received from the tablet HTML page that we specify at line 4. We also specify an app icon URL and links to the avatar FST files - we've included two, but you can add as many avatar links as you'd like to change between. Lines 12-16 create a reference to the tablet in our avatar and add a button to "install" our app, and the following `clicked() `function sets up our tablet to navigate to our app when we tap the icon on our main tablet screen. We then call `button.clicked.connect(clicked) `to attach our `clicked() `function to the tablet API.

The rest of the script handles switching between different avatars depending on the button that is selected in our tablet UI. Our HTML buttons will send `events `to our JavaScript, and the data stored in those events will determine which of our buttons in the UI were selected. We use the [Avatar API](https://docs.highfidelity.com/api-reference/namespaces/myavatar) to change our avatar's skeleton model to the FST files that we linked to earlier in the script.

### App HTML: avatarTemplate.html

The next step of setting up our app is to create the HTML page that will be our app's UI. We'll be doing a simple layout that includes the two buttons for choosing our avatars with basic CSS styling.

```
<html>
    <head>
        <title>Avatar Selector</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,700" rel="stylesheet">
        <style>
            body {margin: 0;width: 100%; font-family: 'Raleway', sans-serif; color: white;
                  background: linear-gradient(#2b2b2b, #0f212e); }

            .top-bar { height: 90px; background: linear-gradient(#2b2b2b, #1e1e1e); font-weight: bold;
                       padding-left: 30px; padding-right: 30px; display: flex; align-items: center;
                       position: fixed; width: 480px; top: 0; z-index: 1;}
            
            .content { margin-top: 90px; padding: 30px;}

            input[type=button] {font-family: 'Raleway'; font-weight: bold; font-size: 13px;
                text-transform: uppercase; vertical-align: top; height: 28px; min-width: 120px;
                padding: 0px 18px; margin-right: 6px; border-radius: 5px; border: none;
                color: #fff; background-color: #000; background: linear-gradient(#343434 20%, #000 100%);
                cursor: pointer;}

            input[type=button].white { color: #121212; background-color: #afafaf; background: linear-gradient(#fff 20%, #afafaf 100%); }

            input[type=button]:enabled:hover { background: linear-gradient(#000, #000); border: none;  }
           
            input[type=button].white:enabled:hover { background: linear-gradient(#fff, #fff); border: none; }

            input[type=button]:active { background: linear-gradient(#343434, #343434); }
           
            input[type=button].white:active { background: linear-gradient(#afafaf, #afafaf); }

            input[type=button]:disabled { color: #252525; background: linear-gradient(#575757 20%, #252525 100%);}
        </style>
    </head>
    <body>
        <div class="top-bar">
            <h4>Choose an Avatar</h4>
        </div>
        <div class="content">
            <p><input type="button" class="white avatar-button" value="Avatar 1"></p>
            <p><input type="button" class="white avatar-button" value="Avatar 2"></p>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script>
            function main() {
                EventBridge.emitWebEvent("Document Ready");
                
                $(".avatar-button").click(function(){
                    var clickEvent = {
                        "type" : "click",
                        "data" : this.value
                    };
                    EventBridge.emitWebEvent(JSON.stringify(clickEvent));
                })
            }
            $(document).ready(main);
        </script>
    </body>
</html>

```

The most important part of our HTML is using JQuery to specify values for our buttons and use the `EventBridge` functionality to send over click data with the value of the button attached. We specify the value when we create our buttons, and attach that to the `clickEvent`, which is then sent back to our JavaScript code for processing. Depending on the data value, we switch between the different avatars. You can add as many buttons as you'd like with unique values attached.

You'll need to have your HTML hosted someplace with a public endpoint, such as GitHub, AWS, or Dropbox, and link back to it in launchAvatarApp.js at line 4.

## Adding the App to the Tablet

To launch and use our application in-world, run launchAvatarApp.js in Interface. You should see your app appear on your tablet, and can choose between the avatars you've linked!

