---
title: Maintain Your Domain
taxonomy:
    category: docs

---

Maintain your High Fidelity domain by clearing it of clutter from recently created entities. For example, you can maintain your domain by deleting all entities created in the last hour. This allows you to keep your domain clean and in a good state. 

**On This Page**

+ [Set Temporary Create Permissions](#set-temporary-create-permissions)
+ [Use an AC Script to Clean Your Domain](#use-an-ac-script-to-clean-your-domain)

## Set Temporary Create Permissions

You can [set different user permissions](../your-domain/secure-domain.html#set-user-permissions) for your domain. These permissions will determine the types of users that have the permission to edit your domain. When you set these permissions, ensure that you have locked your existing entities or set entity filters to prevent users from editing objects already present in your domain.

You can allow users visiting your domain to have temporary edit permissions without altering any existing entities. For example, you can host a virtual class on adding and editing a cube's properties. You can give the right permissions to the users in the class to follow and create their own cubes, and ensure that any changes are not permanent. 

1. [Set user permissions](../your-domain/secure-domain.html#set-user-permissions) to 'rez temp'. This grants users edit permissions for the interval of time specified in the domain settings. 
2. [Set entity specific permissions](../your-domain/secure-domain.html#set-entity-specific-permissions) (lock entities or set entity filters) to make sure that any visiting user cannot edit the existing entities in your domain. 

## Use an AC Script to Clean Your Domain

You can also maintain your domain using an [assignment client script](). 

We've written an example assignment script that contains the list of entities in a domain that you don't want edited, and delete everything else. 

```javascript
var SEARCH_CENTER = {x: 0, y: 0, z: 0};
var SEARCH_AREA = 60000; // search area (sphere) in meters radius
var CLEANUP_INTERVAL_MIN = 1;

var MINUTES_TO_MILLISECONDS = 60000;
var ENTITIES_TO_KEEP = ["{ENTITY_ID1}", "{ENTITY_ID2}"]
    
var initialized = false;
var interval;

Agent.isAvatar = true;
Avatar.skeletonModelURL = "AVATAR_FST_URL";
Script.update.connect(initialization);

function cleanup() {
  EntityViewer.queryOctree();
  var foundEntities = Entities.findEntities(SEARCH_CENTER, SEARCH_AREA);
  print("Found: " + foundEntities.length + " entities");
  foundEntities.forEach(function(entityID){
    if(ENTITIES_TO_KEEP.indexOf(entityID) === -1) {
      print("Need to delete: " + entityID);
      Entities.deleteEntity(entityID);
    }
  });

}


function initialization(deltaTime) {
  if (!initialized) {
    if(Entities.serversExist() && Entities.canRez()) {
     Entities.setPacketsPerSecond(60000);
       EntityViewer.setPosition(SEARCH_CENTER);
       EntityViewer.setCenterRadius(SEARCH_AREA);
       Script.setInterval(function() {
         EntityViewer.queryOctree();
       }, 1000);
      initialized = true;
      interval = Script.setInterval(cleanup, CLEANUP_INTERVAL_MIN * MINUTES_TO_MILLISECONDS);
      Script.update.disconnect(initialization);
    }
  }
}

Script.scriptEnding.connect(function(){
  Script.clearInterval(interval);
});
```

