const NokiaTasCallDirectionApi = require('nokia_tas_call_direction_api');

var defaultClient = NokiaTasCallDirectionApi.ApiClient.instance;

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Configure API key authorization: nokia_mn_api_auth
var nokia_mn_api_auth = defaultClient.authentications['nokia_mn_api_auth'];
nokia_mn_api_auth.apiKey = "5a8b14c1a353b4000197972f58762935f12443dd9eb68456a79f688b"
var api = new NokiaTasCallDirectionApi.SubscriptionApi()

exports.subscribe = function(req, res) {
    //CallDirectionSubscription object that needs to be sent to the Nokia TAS
    var CallDirectionSubscription = {
            callDirectionSubscription: {
                callbackReference: {
                    notifyURL: "http://e9481228.ngrok.io/subscription/callback"
                },
                filter: {
                    address: [
                        "sip:+358480786486@ims8.wirelessfuture.com"
                    ],
                    criteria: ["CalledNumber"],
                    addressDirection: "Called"
                },
                clientCorrelator: "cc12345"
            }
        };
    
    var callback = function(error, data, response) {
      if (error) {
        res.send(error);
      } else {
        res.send('API called successfully. Returned data: ' + data.callDirectionSubscription.filter.address[0]);
      }
    };

    api.createSubscription(CallDirectionSubscription, callback);
}

exports.delete = function(req, res) {
    var id = req.params.id; // String | Subscription identifier
    var addr = req.params.addr; // String | Subscriber address (SIP address)

    var callback = function(error, data, response) {
        if (error) {
            res.send(error);
        } else {
            res.send('API called successfully.');
        }
    };
    api.deleteSubscription(id, addr, callback);
}

exports.callback = app.use(function(req, res) {
  if(req.body) {
    var notification = req.body.callEventNotification

    if(notification.notificationType == "CallDirection" && notification.callingParticipant != "jjj") {
      
    }
  }
    
    
})