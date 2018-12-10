//
//  tipCube.js
//
//  Users who click on the entity attached to this script will be prompted to pay
//  a user 10 HFC.
//
//  Copyright 2018 High Fidelity, Inc.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

(function() {
    // This is the username the user will be prompted to send money to.
    // Be sure to change this to your desired username!
    var DESTINATION_USERNAME = "yourUsername";
    // The amount of HFC that the user will be prompted to send.
    var HFC_AMOUNT = 10;
    // The message displayed to the user when they click on the entity.
    var MONEY_MESSAGE = "10 HFC for VIP status!";

    var TipCube = function() {
    };

    // This function will open a user's tablet and prompt them to pay for VIP status.
    var promptToPayForVIP = function doTip() {
        var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
        tablet.loadQMLSource("hifi/commerce/common/sendAsset/SendAsset.qml");
        tablet.sendToQml({method: 'updateSendAssetQML',
            assetCertID: "",
            amount: HFC_AMOUNT,
            username: DESTINATION_USERNAME,
            message: MONEY_MESSAGE
        });
    }

    TipCube.prototype = {
        clickDownOnEntity: function(entityID, mouseEvent) {
            // When the user running this script clicks the attached entity with their mouse,
            // call this function.
            promptToPayForVIP();
        },
        startFarTrigger: function() {
            // When the user running this script clicks the attached entity with
            // their hand controller lasers, call this function.
            promptToPayForVIP();
        }
    };

    return new TipCube();
});
