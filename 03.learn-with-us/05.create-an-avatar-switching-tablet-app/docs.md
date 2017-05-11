---
title: 'Create an Avatar Switching Tablet App'
---

## Overview

Many users in High Fidelity like to have multiple avatars to switch between, and typing in different urls to .fst files can be inconvenient. In this tutorial, we’re going to write a script for our Interface application that gives us a new tablet app for swapping between avatars quickly. We’ll be covering:

- Using the Tablet APIs to create a new Tablet App
- Creating an HTML page for our Tablet App UI
- Sending messages from our HTML to our Tablet App script

Related [Tutorial: Create a Tablet App](https://wiki.highfidelity.com/wiki/Tutorial:_Create_a_Tablet_App)

## Introducing the Tablet UI

The High Fidelity Tablet is an in-world object that serves as the main interface for users in-world. With the Tablet UI, developers can create additional menus, tools, and apps that extend the functionality of Interface. Tablet UI applications are client scripts written in JavaScript that are loaded by users to add applications to their tablets. The UI for Tablet UI apps is written in HTML and styled using CSS.

### Script: launchAvatarApp.js

The first thing that we'll do is create an [Interface script](https://wiki.highfidelity.com/wiki/Script_Types_Overview) that will load in our tablet app to swap avatars. In addition to "installing" our app into our tablet, launchAvatarApp.js will also handle the logic of storing links to our avatar FST files, setting up our app properties, and listening for events from button clicks on our app's HTML.

```
 1 (function() {
 2 
 3 	var APP_NAME = "Avatars";
 4     var APP_URL = "YOUR_APP_HTML_FILE_URL";
 5     var APP_ICON = "YOUR_APP_ICON_IMAGE_HERE"
 6 	
 7     // Link to our avatar options
 8     var AVATARURL1 = "AVATAR_FST_FILE_LINK_1";
 9     var AVATARURL2 = "AVATAR_FST_FILE_LINK_2";
10     
11     // Get a reference to the tablet 
12 	var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
13 	var button = tablet.addButton({
14         	text: APP_NAME,
15             icon: APP_ICON
16     	});
17 
18     function clicked(){
19         tablet.gotoWebScreen(APP_URL);
20     }
21     button.clicked.connect(clicked);
22 
23     function onWebEventReceived(event){
24         print("Received Web Event: " + event);
25 
26         if(typeof event === "string"){
27             event = JSON.parse(event);
28         }
29 
30         if(event.type === "click")
31         {
32             if(event.data === "Avatar 1"){
33                 print("Avatar 1 data");
34                 MyAvatar.skeletonModelURL = AVATARURL1;
35             }
36             else if(event.data === "Avatar 2"){
37                 print("Avatar 2 data");
38                 MyAvatar.skeletonModelURL = AVATARURL2;
39             }
40         }
41     }
42     tablet.webEventReceived.connect(onWebEventReceived);
43 	function cleanup() {
44         tablet.removeButton(button);
45 	}
46     Script.scriptEnding.connect(cleanup);
47 }());

```

Our Interface script is a single function that contains all of the other components of setting up our tablet app and responding to webEvents that are received from the tablet HTML page that we specify at line 4. We also specify an app icon URL and links to the avatar FST files - we've included two, but you can add as many avatar links as you'd like to change between. Lines 12-16 create a reference to the tablet in our avatar and add a button to "install" our app, and the following `clicked() `function sets up our tablet to navigate to our app when we tap the icon on our main tablet screen. We then call `button.clicked.connect(clicked) `to attach our `clicked() `function to the tablet API.

The rest of the script handles switching between different avatars depending on the button that is selected in our tablet UI. Our HTML buttons will send `events `to our JavaScript, and the data stored in those events will determine which of our buttons in the UI were selected. We use the [Avatar API](https://wiki.highfidelity.com/wiki/Avatar_API) to change our avatar's skeleton model to the FST files that we linked to earlier in the script.

### App HTML: avatarTemplate.html

The next step of setting up our app is to create the HTML page that will be our app's UI. We'll be doing a simple layout that includes the two buttons for choosing our avatars with basic CSS styling.

```
 1 <html>
 2     <head>
 3         <title>Avatar Selector</title>
 4         <meta charset="utf-8">
 5         <meta name="viewport" content="width=device-width, initial-scale=1">
 6         <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,700" rel="stylesheet">
 7         <style>
 8             body {margin: 0;width: 100%; font-family: 'Raleway', sans-serif; color: white;
 9                   background: linear-gradient(#2b2b2b, #0f212e); }
10 
11             .top-bar { height: 90px; background: linear-gradient(#2b2b2b, #1e1e1e); font-weight: bold;
12                        padding-left: 30px; padding-right: 30px; display: flex; align-items: center;
13                        position: fixed; width: 480px; top: 0; z-index: 1;}
14             
15             .content { margin-top: 90px; padding: 30px;}
16 
17             input[type=button] {font-family: 'Raleway'; font-weight: bold; font-size: 13px;
18                 text-transform: uppercase; vertical-align: top; height: 28px; min-width: 120px;
19                 padding: 0px 18px; margin-right: 6px; border-radius: 5px; border: none;
20                 color: #fff; background-color: #000; background: linear-gradient(#343434 20%, #000 100%);
21                 cursor: pointer;}
22 
23             input[type=button].white { color: #121212; background-color: #afafaf; background: linear-gradient(#fff 20%, #afafaf 100%); }
24 
25             input[type=button]:enabled:hover { background: linear-gradient(#000, #000); border: none;  }
26            
27             input[type=button].white:enabled:hover { background: linear-gradient(#fff, #fff); border: none; }
28 
29             input[type=button]:active { background: linear-gradient(#343434, #343434); }
30            
31             input[type=button].white:active { background: linear-gradient(#afafaf, #afafaf); }
32 
33             input[type=button]:disabled { color: #252525; background: linear-gradient(#575757 20%, #252525 100%);}
34         </style>
35     </head>
36     <body>
37         <div class="top-bar">
38             <h4>Choose an Avatar</h4>
39         </div>
40         <div class="content">
41             <p><input type="button" class="white avatar-button" value="Avatar 1"></p>
42             <p><input type="button" class="white avatar-button" value="Avatar 2"></p>
43         </div>
44 
45         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
46         <script>
47             function main() {
48                 EventBridge.emitWebEvent("Document Ready");
49                 
50                 $(".avatar-button").click(function(){
51                     var clickEvent = {
52                         "type" : "click",
53                         "data" : this.value
54                     };
55                     EventBridge.emitWebEvent(JSON.stringify(clickEvent));
56                 })
57             }
58             $(document).ready(main);
59         </script>
60     </body>
61 </html>

```

The most important part of our HTML is using JQuery to specify values for our buttons and use the `EventBridge` functionality to send over click data with the value of the button attached. We specify the value when we create our buttons, and attach that to the `clickEvent`, which is then sent back to our JavaScript code for processing. Depending on the data value, we switch between the different avatars. You can add as many buttons as you'd like with unique values attached.

You'll need to have your HTML hosted someplace with a public endpoint, such as GitHub, AWS, or Dropbox, and link back to it in launchAvatarApp.js at line 4.

## Adding the App to the Tablet

To launch and use our application in-world, run launchAvatarApp.js in Interface. You should see your app appear on your tablet, and can choose between the avatars you've linked!

