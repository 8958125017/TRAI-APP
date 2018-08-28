cordova.define("io.adc.plugin.callreceiver.AdcCallReceiver", function(require, exports, module) {
var AdcCallReceiver = {
    onCall: function(successCallback, errorCallback) {
        errorCallback = errorCallback || this.errorCallback;
        cordova.exec(successCallback, errorCallback, 'AdcCallReceiver', 'onCall', []);
    },

    errorCallback: function() {
        console.log("WARNING: AdcCallReceiver errorCallback not implemented");
    }
};

module.exports = AdcCallReceiver;

});
