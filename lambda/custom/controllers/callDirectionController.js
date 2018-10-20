const NokiaTasCallDirectionApi = require('nokia_tas_call_direction_api');

var defaultClient = NokiaTasCallDirectionApi.ApiClient.instance;

const express = require('express')
const bodyParser = require('body-parser')
const digitCaptureRequest = require('../json/digitCaptureRequest.json')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Configure API key authorization: nokia_mn_api_auth
var nokia_mn_api_auth = defaultClient.authentications['nokia_mn_api_auth']
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
                        "sip:+358480786487@ims8.wirelessfuture.com"
                    ],
                    criteria: ["CalledNumber"],
                    addressDirection: "Called"
                },
                clientCorrelator: "cc12350"
            }
        }
    
    var callback = function(error, data, response) {
      if (error) {
        res.send(error);
      } else {
        res.send('API called successfully. Returned data: ' + data.callDirectionSubscription.filter.address[0]);
      }
    }

    api.createSubscription(CallDirectionSubscription, callback)
}

exports.delete = function(req, res) {
    var id = req.params.id // String | Subscription identifier
    var addr = req.params.addr // String | Subscriber address (SIP address)

    var callback = function(error, data, response) {
        if (error) {
            res.send(error)
        } else {
            res.send('API called successfully.')
        }
    };
    api.deleteSubscription(id, addr, callback)
}



exports.callback = app.use(function(req, res) {
  if(req.body) {
    console.log(req.body)
    var notification = req.body.callEventNotification

    var resObj = {
        "action": {
          "actionToPerform": "Continue",
          "displayAddress": "sip:+358480786487@ims8.wirelessfuture.com",
          "digitCapture": {
            "digitConfiguration": {
              "maxDigits": 10,
              "minDigits": 1,
              "endChar": "#"
            },
            "playingConfiguration": {
              "playFileLocation": "http://e9481228.ngrok.io/audio.wav",

            },
            "callParticipant": [
              "sip:+358480786487@ims8.wirelessfuture.com"
            ]
          },
          "playAndCollectInteractionSubscription": {
            "callbackReference": {
              "notifyURL": "http://e9481228.ngrok.io/callevent/callback"
            }
          }
        }
      }

    res.json(resObj).send();
  }
})

exports.callevent = app.use(function(req, res) {
    console.log("Hello world")
    /*

    var notification = req.body.mediaInteractionNotification
    var resObj = (actionToPerform) => {
        return {
            "action": {
              "actionToPerform": actionToPerform,
            }
        }
    }

    if(notification.mediaInteractionResult.includes("1")) {
        console.log("number 1")
        res.json(resObj("Continue")).send();
    } 
    else if(notification.mediaInteractionResult.includes("0")) {
        console.log("number 0")
        res.json(resObj("EndCall")).send();
    }*/
})