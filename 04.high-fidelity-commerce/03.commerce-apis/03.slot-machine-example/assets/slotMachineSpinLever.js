//
//  slotMachineSpinLever.js
//
//  This script will kick off a slot machine spin.
//
//  Copyright 2018 High Fidelity, Inc.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

(function() {
    // This is the messaging channel that the AC script will use to communicate
    // slot machine play start events.
    var SLOT_MACHINE_MESSAGING_CHANNEL = "com.highfidelity.slotMachine";

    var StartSpinLever = function() {
    };

    // This function will send a message over the Slot Machine Messaging Channel containing
    // the user's username.
    var sendStartPlayMessage = function sendStartPlayMessage() {
        console.log("Sending 'Start Play Slot Machine' message for " + Account.username);
        Messages.sendMessage(SLOT_MACHINE_MESSAGING_CHANNEL, Account.username);
    }

    StartSpinLever.prototype = {
        clickDownOnEntity: function(entityID, mouseEvent) {
            // When the user running this script clicks the attached entity with their mouse,
            // call this function.
            sendStartPlayMessage();
        },
        startFarTrigger: function() {
            // When the user running this script clicks the attached entity with
            // their hand controller lasers, call this function.
            sendStartPlayMessage();
        }
    };

    return new StartSpinLever();
});