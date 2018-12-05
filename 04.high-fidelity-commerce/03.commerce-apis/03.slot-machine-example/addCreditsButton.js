//
//  addCreditsButton.js
//
//  Users who click on the entity attached to this script will be prompted to pay
//  a user 10 HFC with a specific message attached.
//
//  Copyright 2018 High Fidelity, Inc.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

(function() {
    // This is the username that the clickee will be prompted to send money to.
    // Be sure to change this to your desired username!
    var DESTINATION_USERNAME = "zfoxStaging";
    // The amount of HFC that the user will be prompted to send.
    var HFC_AMOUNT = 1;
    // The message displayed to the user when they are prompted to send you money.
    var MONEY_MESSAGE = "1 Slot Machine Play Credit";

    var AddCreditButton = function() {
    };

    // This function will open a user's tablet and prompt them to pay for VIP status.
    var promptToPayForSlotMachineCredit = function promptToPayForSlotMachineCredit() {
        var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
        tablet.loadQMLSource("hifi/commerce/common/sendAsset/SendAsset.qml");
        tablet.sendToQml({method: 'updateSendAssetQML',
            assetCertID: "",
            amount: HFC_AMOUNT,
            username: DESTINATION_USERNAME,
            message: MONEY_MESSAGE
        });
    }

    AddCreditButton.prototype = {
        clickDownOnEntity: function(entityID, mouseEvent) {
            // When the user running this script clicks the attached entity with their mouse,
            // call this function.
            promptToPayForSlotMachineCredit();
        },
        startFarTrigger: function() {
            // When the user running this script clicks the attached entity with
            // their hand controller lasers, call this function.
            promptToPayForSlotMachineCredit();
        }
    };

    return new AddCreditButton();
});