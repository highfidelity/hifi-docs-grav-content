//
//  vipZoneACScript.js
//
//  This AC script will use a High Fidelity authentication token to check your Recent
//  Economic Activity for a payment of 10 HFC and notify relevant scripts of such activity.
//
//  Copyright 2018 High Fidelity, Inc.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

// REPLACE THIS with your authentication token!
var HIFI_COMMERCE_TOKEN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// The Metaverse to use
var HIFI_METAVERSE_URL = "https://staging.highfidelity.com";
// The Recent Economic Activity endpoint on the High Fidelity Metaverse website
var HIFI_HISTORY_ENDPOINT_URL = HIFI_METAVERSE_URL + "/api/v1/commerce/history";
// In HFC, the amount of money someone must send you to become a VIP
var VIP_STATUS_COST = 10;
// This is the messaging channel that the entity script will
// listen to in order to verify  VIP status.
var VIP_MESSAGING_CHANNEL = "com.highfidelity.vip";
// Our script will check our Recent Economic Activity on an interval specified
// by this variable. Units are millseconds.
var CHECK_RECENT_ACTIVITY_INTERVAL_MS = 10000;

// This ensure the AC script will not be considered an avatar.
Agent.isAvatar = false;

// This function is used to send this script's specific version of an HTTP request.
// It's a stripped-down version of High Fidelity's included `request.js` module.
// This function will make the HTTP request and handle the data that's retrieved via a callback.
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
    for (key in options.headers || {}) {
        if (options.headers.hasOwnProperty(key)) {
            httpRequest.setRequestHeader(key, options.headers[key]);
        }
    }
    httpRequest.open(options.method, options.uri, true);
    httpRequest.send(options.body || null);
}

// This function sets up a repeating interval. When the interval timer expires,
// the script will request our Recent Economic Activity.

// This array holds all of the known VIP users.
var knownVIPUsers = [];

Script.setInterval(function() {
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
                    // If the user has paid enough money to be considered a VIP
                    // AND they are not already on the Known VIP Users list...
                    if (item.received_money >= VIP_STATUS_COST &&
                        knownVIPUsers.indexOf(item.sender_name) === -1) {
                        knownVIPUsers.push(item.sender_name);
                    }
                });
                // Send a message to listeners of the `VIP_MESSAGING_CHANNEL` containing a list
                // of known VIPs.
                Messages.sendMessage(VIP_MESSAGING_CHANNEL, JSON.stringify(knownVIPUsers));
            } else {
                print("ERROR retrieving Recent Economic Activity!");
                print(error);
                print(JSON.stringify(data));
            }
        });
}, CHECK_RECENT_ACTIVITY_INTERVAL_MS);