//
//  vipZoneEntityScript.js
//
//  This script will only allow users with VIP status into a zone.
//
//  Copyright 2018 High Fidelity, Inc.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

(function() {
    // This is the messaging channel that the AC script will use to communicate VIP status.
    var VIP_MESSAGING_CHANNEL = "com.highfidelity.vip";

    // This variable will change to `true` once the associated AC
    // script has messaged this script with specific data.
    var userIsVIP = false;

    var VIPZone = function() {
    };

    // This function will handle changing `userIsVIP` to `true`.
    var onMessageReceived = function onMessageReceived(channel, message, sender, localOnly) {
        // If we're receiving a message over the channel we care about
        // AND a username in the message is our username
        // AND we aren't already a VIP...
        if (channel === VIP_MESSAGING_CHANNEL &&
            JSON.parse(message).indexOf(Account.username) > -1 &&
            !userIsVIP) {
            // ...note that we are a VIP. This will allow us to enter the VIPZone.
            userIsVIP = true;
            console.log("VIP Zone Entity Script: You are now a VIP and can enter the VIP Zone.");
        }
    }

    // This function will kick the user out if they are not a VIP.
    var checkIfUserIsVIP = function checkIfUserIsVIP() {
        // If the user is not a VIP AND they are not an admin...
        if (!userIsVIP && !Users.canKick) {
            // ...send the user to the start location of the domain.
            // Feel free to modify this line of code if you want to, say,
            // direct people elsewhere in your domain.
            Window.location.handleLookupString("hifi://" + location.hostname, false);
        }
    }

    VIPZone.prototype = {
        preload: function(entityID) {
            Messages.subscribe(VIP_MESSAGING_CHANNEL);
            Messages.messageReceived.connect(onMessageReceived);
        },
        unload: function(entityID) {
            Messages.messageReceived.disconnect(onMessageReceived);
        },
        enterEntity: function() {
            // When the user running this script enters the VIP zone,
            // call this function.
            checkIfUserIsVIP();
        }
    };

    return new VIPZone();
});