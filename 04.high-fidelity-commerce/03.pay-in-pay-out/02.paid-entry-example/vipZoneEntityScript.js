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

    // This function will handle changing `user_is_VIP` to `true`.
    var onMessageReceived = function onMessageReceived(channel, message, sender, localOnly) {
        // If we're receiving a message over the channel we care about
        // AND the username in the message is our username...
        if (channel === VIP_MESSAGING_CHANNEL && JSON.parse(message) === Account.username) {
            // ...note that we are a VIP. This will allow us to enter the VIPZone.
            user_is_VIP = true;
        }
    }

    // This function will kick the user out if they are not a VIP.
    var checkIfUserIsVIP = function checkIfUserIsVIP() {
        // If the user is not a VIP AND they are not an admin...
        if (!userIsVIP && !Users.canKick) {
            // ...send the user to the start location of the domain.
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