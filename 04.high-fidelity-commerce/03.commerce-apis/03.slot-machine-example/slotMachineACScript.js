//
//  slotMachineACScript.js
//
//  This AC script handles all game logic for the attached Slot Machine entity in-world, including:
//      * Knowing whether a user who attempted to spin has paid
//      * Knowing when to start a new spin
//      * Changing the slot machine reel colors during a spin
//      * Checking the end state of the reels to determine win/loss
//      * Paying out pre-authorized funds
//
//  Copyright 2018 High Fidelity, Inc.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

// REPLACE THIS with your authentication token
// from https://highfidelity.com/user/tokens/new
var HIFI_COMMERCE_TOKEN = "34162f4ed09ac676eeb1966c481bd276e95c36cf87304cf6b6535ed380cea285";
// The Metaverse to use
var HIFI_METAVERSE_URL = "https://staging.highfidelity.com";
// The Recent Economic Activity endpoint on the High Fidelity Metaverse
var HIFI_HISTORY_ENDPOINT_URL = HIFI_METAVERSE_URL + "/api/v1/commerce/history";
// The Redmption endpoint on the High Fidelity Metaverse
var HIFI_REDEMPTION_ENDPOINT_URL = HIFI_METAVERSE_URL + "/api/v1/commerce/redeem";
// In HFC, the amount of money someone must send you to be able to play the slot machine
var SLOT_MACHINE_CREDIT_COST = 10;
// The text of the message used when a user adds credit to the slot machine.
var SLOT_MACHINE_PAYIN_MESSAGE = "1 Slot Machine Play Credit";
// This is the messaging channel that the AC script will use to communicate
// slot machine play start events.
var SLOT_MACHINE_MESSAGING_CHANNEL = "com.highfidelity.slotMachine";
// Our script will check our Recent Economic Activity on an interval specified
// by this variable. Units are millseconds.
var CHECK_RECENT_ACTIVITY_INTERVAL_MS = 10000;
// Change these to match the Entity IDs of the reels attached to your slot machine.
var SLOT_MACHINE_REEL_1_ID = "{4915b437-01ec-4a6e-b456-ec9c840835b9}";
var SLOT_MACHINE_REEL_2_ID = "{ef08db79-a1c3-4342-9184-efcae2f27962}";
var SLOT_MACHINE_REEL_3_ID = "{f0c3d402-f688-4dd2-b0f1-6b4356931c52}";
// Change this to match the Entity ID of the "play text" entity attached to your slot machine.
var SLOT_MACHINE_PLAY_TEXT_ID = "{787b493e-0c82-4c70-8563-a5b1530a9310}";
// Change this to match the URL of your Google Sheet Slot Machine Authorization DB script
var GOOGLE_SHEET_AUTH_SCRIPT = "https://script.google.com/macros/s/AKfycbwA4WVJ_vKH0ZknxV6pumE475nwG6LLD_jow6o0Qw4h4oIIl0ZL/exec";

// This ensure the AC script will not be considered an avatar.
Agent.isAvatar = false;

// This function is used to send this script's specific version of an HTTP request.
// It's a stripped-down version of High Fidelity's included `request.js` module.
// This function will make the HTTP request and handle the data that's retrieved via a callback.
// It'll also handle dispensing HFC via pre-authorized transactions using HTTP PUT requests.
function request(options, callback) {
    var httpRequest = new XMLHttpRequest(), key;
    // QT bug: apparently doesn't handle onload. Workaround using readyState.
    httpRequest.onreadystatechange = function () {
        var READY_STATE_DONE = 4;
        var HTTP_OK = 200;
        if (httpRequest.readyState >= READY_STATE_DONE) {
            var error = (httpRequest.status !== HTTP_OK) && httpRequest.status.toString() + ':' + httpRequest.statusText,
                response = !error && httpRequest.responseText,
                contentType = !error && httpRequest.getResponseHeader('content-type');
            if (!error && contentType.indexOf('application/json') === 0) { // ignoring charset, etc.
                try {
                    response = JSON.parse(response);
                } catch (e) {
                    error = e;
                }
            }
            if (error) {
                response = { statusCode: httpRequest.status };
            }
            callback(error, response);
        }
    };
    if (!options.method) {
        options.method = 'GET';
    }
    if (options.body && (options.method === 'GET')) { // add query parameters
        var params = [], appender = (-1 === options.uri.search('?')) ? '?' : '&';
        for (key in options.body) {
            if (options.body.hasOwnProperty(key)) {
                params.push(key + '=' + options.body[key]);
            }
        }
        options.uri += appender + params.join('&');
        delete options.body;
    }
    if (options.json) {
        options.headers = options.headers || {};
        options.headers["Content-type"] = "application/json";
        options.body = JSON.stringify(options.body);
    }
    for (key in options.headers || {}) {
        if (options.headers.hasOwnProperty(key)) {
            httpRequest.setRequestHeader(key, options.headers[key]);
        }
    }
    httpRequest.open(options.method, options.uri, true);
    httpRequest.send(options.body || null);
}

function entityExistsInDomain(entityID) {
    if (Entities.getEntityProperties(entityID, ["id"]).id) {
        return true;
    } else {
        console.log("Entity doesn't exist! ID: " + entityID);
        return false;
    }
}

function entityIsColor(entityID, colorString) {
    var targetColor;

    if (colorString === "red") {
        targetColor = {r: 255, g: 0, b: 0};
    } else if (colorString === "green") {
        targetColor = {r: 0, g: 255, b: 0};
    } else if (colorString === "blue") {
        targetColor = {r: 0, g: 0, b: 255};
    } else {
        return false;
    }

    var entityColor = Entities.getEntityProperties(entityID, ["color"]).color;

    return (entityColor.r === targetColor.r &&
        entityColor.g === targetColor.g &&
        entityColor.b === targetColor.b);
}

// This function will check all slot machine reels to see if
// the player has won.
function playerHasWonSlotMachine() {
    if (!entityExistsInDomain(SLOT_MACHINE_REEL_1_ID) ||
        !entityExistsInDomain(SLOT_MACHINE_REEL_2_ID) ||
        !entityExistsInDomain(SLOT_MACHINE_REEL_3_ID)) {
        console.log("One or more of the slot machine entities doesn't exist!");
        return false;
    } else if ((entityIsColor(SLOT_MACHINE_REEL_1_ID, "red") &&
        entityIsColor(SLOT_MACHINE_REEL_2_ID, "red") && 
        entityIsColor(SLOT_MACHINE_REEL_3_ID, "red")) ||
        (entityIsColor(SLOT_MACHINE_REEL_1_ID, "green") &&
        entityIsColor(SLOT_MACHINE_REEL_2_ID, "green") && 
        entityIsColor(SLOT_MACHINE_REEL_3_ID, "green")) ||
        (entityIsColor(SLOT_MACHINE_REEL_1_ID, "blue") &&
        entityIsColor(SLOT_MACHINE_REEL_2_ID, "blue") && 
        entityIsColor(SLOT_MACHINE_REEL_3_ID, "blue"))) {
            return true;
        }
    return false;
}

// This function will get auth data related to a 10-HFC pre-authorized
// transaction from our Google Sheet auth data database.
function getGoogleSheetAuthData(successCallback) {
    var googleSheetRequestBody = {
        hfc: "10"
    }

    request({
        uri: GOOGLE_SHEET_AUTH_SCRIPT,
        method: 'GET',
        body: googleSheetRequestBody
    }, function(error, response) {
        try {
            JSON.parse(response);
        } catch(e) {
            if (e instanceof SyntaxError) {
                error = true;
            }
        }
        if (error) {
            console.log("ERROR while retrieving authorization data: " + JSON.stringify(response));
            console.log("ERROR during slot machine payout: Couldn't get auth data from Google Sheet");
            console.log("Slot machine was supposed to pay out to " + slotMachineCurrentPlayer + ".");
            slotMachineCurrentPlayer = false;
            if (entityExistsInDomain(SLOT_MACHINE_PLAY_TEXT_ID)) {
                Entities.editEntity(SLOT_MACHINE_PLAY_TEXT_ID, {text: "Error during payout :("});
            }
            return false;
        } else if (JSON.parse(response).status !== "success") {
            console.log("Slot machine DOES NOT have payout funds available!");
            console.log("Slot machine was supposed to pay out to " + slotMachineCurrentPlayer + ".");
            slotMachineCurrentPlayer = false;
            if (entityExistsInDomain(SLOT_MACHINE_PLAY_TEXT_ID)) {
                Entities.editEntity(SLOT_MACHINE_PLAY_TEXT_ID, {text: "Error during payout :("});
            }
            return false;
        } else {
            console.log("Slot machine DOES have payout funds available! Returning auth data...");
            response = JSON.parse(response);

            successCallback(response.authorizationID, response.couponID); // payOutToCurrentPlayer() 
            return true;
        }
    });
}

// This function will pay out to the current slot machine player in `slotMachineCurrentPlayer`
// based on the passed `authID` and `secret` (coupon ID).
function payOutToCurrentPlayer(authID, secret) {
    // Set up the `redeem` endpoint request body
    var hifiRedemptionRequestBody = {
        authorization_id: authID,
        secret: secret,
        username: slotMachineCurrentPlayer
    };

    console.log("Attempting payout! Redemption request body: " + JSON.stringify(hifiRedemptionRequestBody));

    // Make the call to the redemption endpoint to pay out!
    request({
        uri: HIFI_REDEMPTION_ENDPOINT_URL,
        method: 'PUT',
        json: true,
        body: hifiRedemptionRequestBody
    }, function (error, response) {
        if (error || (response.status !== 'success')) {
            console.log("ERROR during slot machine payout: ", error || response.status);
            console.log("Full response: " + JSON.stringify(response));
            console.log("Slot machine was supposed to pay out to " + slotMachineCurrentPlayer + ".");
            console.log("SLOT MACHINE DID NOT PAY OUT - Google Sheet will say auth used, but it wasn't!");
            slotMachineCurrentPlayer = false;
            if (entityExistsInDomain(SLOT_MACHINE_PLAY_TEXT_ID)) {
                Entities.editEntity(SLOT_MACHINE_PLAY_TEXT_ID, {text: "Error during payout :("});
            }
            return;
        } else {
            console.log("Slot machine paid out to " + slotMachineCurrentPlayer + "!");
            slotMachineCurrentPlayer = false;
            if (entityExistsInDomain(SLOT_MACHINE_PLAY_TEXT_ID)) {
                Entities.editEntity(SLOT_MACHINE_PLAY_TEXT_ID, {text: "YOU WON 10 HFC!!"});
            }
        }
    });
}

// This function will check our pre-authorized funds database to make
// sure we have funds available to pay out.
// If we do have funds available to pay out, we'll call `successCallback(callbackParam)`.
function checkIfSlotMachineHasAvailableFunds(successCallback, callbackParam) {
    var googleSheetRequestBody = {
        hfc: "10",
        justChecking: true
    }

    console.log("Checking Google Sheet for available authorization data...");
    request({
        uri: GOOGLE_SHEET_AUTH_SCRIPT,
        method: 'GET',
        body: googleSheetRequestBody
    }, function(error, response) {
        try {
            JSON.parse(response);
        } catch(e) {
            if (e instanceof SyntaxError) {
                error = true;
            }
        }
        if (error) {
            console.log("ERROR while retrieving authorization data: " + JSON.stringify(response));
            return false;
        } else if (JSON.parse(response).status !== "success") {
            console.log("Slot machine DOES NOT have payout authorizations available.");
            if (entityExistsInDomain(SLOT_MACHINE_PLAY_TEXT_ID)) {
                Entities.editEntity(SLOT_MACHINE_PLAY_TEXT_ID, {text: "Out of order :("});
            }
            return false;
        } else {
            console.log("Slot machine DOES have payout authorizations available.");
            successCallback(callbackParam); // startSlotMachine(player);
            return true;
        }
    });
}

// This variable holds the current slot machine player.
var slotMachineCurrentPlayer = false;
function startSlotMachine(player) {
    // Decrement the amount of credits that the player has based on SLOT_MACHINE_CREDIT_COST
    slotMachinePlayerRecords[player].credits -= SLOT_MACHINE_CREDIT_COST;
    slotMachineCurrentPlayer = player;
    
    console.log("Player " + player + " now has " +
        slotMachinePlayerRecords[player].credits + " credits remaining. SPINNING!");
        if (entityExistsInDomain(SLOT_MACHINE_PLAY_TEXT_ID)) {
            Entities.editEntity(SLOT_MACHINE_PLAY_TEXT_ID, {text: "Good luck!!!"});
        }

    // Check if the player has won! If they have...
    if (playerHasWonSlotMachine()) {
        // First, we have to retrieve available authorization data from our Google Sheet auth database.
        // If that's successful, we'l; call `payOutToCurrentPlayer()`.
        getGoogleSheetAuthData(payOutToCurrentPlayer);
    } else {
        console.log(slotMachineCurrentPlayer + " didn't win - not paying out.");
        slotMachineCurrentPlayer = false;
        if (entityExistsInDomain(SLOT_MACHINE_PLAY_TEXT_ID)) {
            Entities.editEntity(SLOT_MACHINE_PLAY_TEXT_ID, {text: "Sorry, try again!"});
        }
    }
}

// This in-memory variable will hold records about known slot machine players:
// - their username
// - their credit balance
// - what Recent Economic Activity transactions have counted towards their credit balance
var slotMachinePlayerRecords = {};

function checkForNewPlayers(playerWhoStartedSpin) {
    request({
        uri: HIFI_HISTORY_ENDPOINT_URL,
        // Sets up authentication headers with the specified token (see top of file)
        headers: { 'Authorization': 'Bearer ' + HIFI_COMMERCE_TOKEN },
        // The HTTP method used by this endpoint is `POST`
        method: 'POST'
        // This function is the callback function, called when the HTTP request
        // data comes back from the server.
        }, function (error, data) {
            // If we've successfully retrieved data...
            if (!error && data["status"] === "success") {
                // For each transaction in the retrieved history data...
                data.data.history.forEach(function(item) {
                    // If the user has paid the requisite money for a slot machine credit...
                    if (parseInt(item.received_money) === SLOT_MACHINE_CREDIT_COST &&
                        item.message === SLOT_MACHINE_PAYIN_MESSAGE) {
                        // If we've never seen this player before...
                        if (!slotMachinePlayerRecords[item.sender_name]) {
                            // ...add a new player record to `slotMachinePlayerRecords`
                            slotMachinePlayerRecords[item.sender_name] = {};
                            slotMachinePlayerRecords[item.sender_name].recordedTransactions = [];
                            slotMachinePlayerRecords[item.sender_name].credits = 0;

                            console.log("New slot machine player! Username: " + item.sender_name);
                        }
                        
                        // If we've never updated this player record based on this Transaction ID...
                        if (slotMachinePlayerRecords[item.sender_name].recordedTransactions.indexOf(item.id) === -1) {
                            // Increment the number of credits the user has on the slot machine
                            // by the amount they paid (should be 10).
                            slotMachinePlayerRecords[item.sender_name].recordedTransactions.push(item.id);
                            slotMachinePlayerRecords[item.sender_name].credits += item.received_money;
                            console.log("Slot machine player \"" + item.sender_name + "\" now has " +
                                slotMachinePlayerRecords[item.sender_name].credits + " credits!");
                        }
                    }
                });

                // `playerWhoStartedSpin` is only defined if a user just clicked on the slot machine
                // to start playing! In that case, we want to call `maybePlay()`
                // with an argument of the name of the player.
                if (playerWhoStartedSpin) {
                    maybePlay(playerWhoStartedSpin);
                }
            } else {
                print("ERROR retrieving Recent Economic Activity!");
                print(error);
                print(JSON.stringify(data));
            }
        }
    );
}

// This function checks to make sure the player has enough credits to start the reels.
function maybePlay(player) {
    if (slotMachinePlayerRecords[player] &&
        slotMachinePlayerRecords[player].credits >= SLOT_MACHINE_CREDIT_COST) {
        checkIfSlotMachineHasAvailableFunds(startSlotMachine, player);
    } else {
        console.log("Player " + player + " doesn't have enough credits to play.");
    }
}

// This function checks our Recent Economic Activity for new players,
// then adds their username to a list of players.
function onMessageReceived(channel, message, sender, localOnly) {
    // If the message we received is not on the channel we're listening to, OR
    // if the slot machine is currently playing...
    if (channel !== SLOT_MACHINE_MESSAGING_CHANNEL || slotMachineCurrentPlayer) {
        // ...simply return.
        return;
    }

    // Check our Recent Economic Activity for new players,
    // making sure to pass the username of the player who sent the message.
    // If we pass the username, then a new game will start (if the user
    // has enough credits) immediately after checking for new players.
    checkForNewPlayers(message);
}

// This function is used to allow the AC script to see and change entities
// in the domain.
function allowEntityAccess() {
    Entities.setPacketsPerSecond(6000);
    EntityViewer.setPosition({x: 0, y: 0, z: 0});
    EntityViewer.setCenterRadius(10000);
    // This should allow us to see nano-scale entities from great distances
    EntityViewer.setVoxelSizeScale(Number.MAX_VALUE);
    Script.setInterval(function() {
        EntityViewer.queryOctree();
    }, 1000);
    console.log("This AC script now has access to entities in this domain!");
}

// This function checks to make sure that the entity server exists
// and that the AC script has Rez permissions.
// If one or both of those things is false, we'll check again in 5 seconds.
function maybeAllowEntityAccess() {
    console.log("Attempting to give this AC script entity access...");
    if (Entities.serversExist() && Entities.canRez()) {
        allowEntityAccess();
    } else {
        if (!Entities.canRez()) {
            console.log("This AC script doesn't have rez permissions!");
        }
        Script.setTimeout(maybeAllowEntityAccess, 5000);
    }
}

// This function will be called on startup.
function startup() {
    // Listen on the slot machine messaging channel!
    Messages.subscribe(SLOT_MACHINE_MESSAGING_CHANNEL);
    Messages.messageReceived.connect(onMessageReceived);

    maybeAllowEntityAccess();
    
    // This function sets up a repeating interval. When the interval timer expires,
    // the script will request our Recent Economic Activity.
    Script.setInterval(function() {
        checkForNewPlayers();
    }, CHECK_RECENT_ACTIVITY_INTERVAL_MS);
}
startup();

// This function will be called when the script shuts down.
function shutdown() {
    Messages.messageReceived.disconnect(onMessageReceived);
}
Script.scriptEnding.connect(shutdown);