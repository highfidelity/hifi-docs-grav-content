//
//  tipJar.js
//
//  Users can click on the entity attached to this script to pay
//  a user 10 HFC.
//
//  Copyright 2018 High Fidelity, Inc.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

(function() {
    // This is the username that the user will send money to.
    // Be sure to change this to your desired username!
    var DESTINATION_USERNAME = "yourUsername";
    // The amount of HFC that the user will send.
    var HFC_AMOUNT = 10;
    // The message displayed to the user when they click the entity.
    var MONEY_MESSAGE = "Here's a 10 HFC tip for doing a cool thing!";

    var TipJar = function() {
    };

    // This function will open a user's tablet and prompt them to pay for VIP status.
    var promptToTip = function doTip() {
        var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
        tablet.loadQMLSource("hifi/commerce/common/sendAsset/SendAsset.qml");
        tablet.sendToQml({method: 'updateSendAssetQML',
            assetCertID: "",
            amount: HFC_AMOUNT,
            username: DESTINATION_USERNAME,
            message: MONEY_MESSAGE
        });
    }

    TipJar.prototype = {
        clickDownOnEntity: function(entityID, mouseEvent) {
            // When the user running this script clicks the attached entity with their mouse,
            // call this function.
            promptToTip();
        },
        startFarTrigger: function() {
            // When the user running this script clicks the attached entity with
            // their hand controller lasers, call this function.
            promptToTip();
        }
    };

    return new TipJar();
});
