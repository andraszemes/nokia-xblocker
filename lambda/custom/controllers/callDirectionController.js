const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const NokiaTasCallDirectionApi = require('nokia_tas_call_direction_api');

var defaultClient = NokiaTasCallDirectionApi.ApiClient.instance;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const domain = "http://79257a69.ngrok.io";

// Configure API key authorization: nokia_mn_api_auth
var nokia_mn_api_auth = defaultClient.authentications['nokia_mn_api_auth']
nokia_mn_api_auth.apiKey = "5a8b14c1a353b4000197972f58762935f12443dd9eb68456a79f688b"
var api = new NokiaTasCallDirectionApi.SubscriptionApi()

exports.subscribe = function(req, res) {
    //CallDirectionSubscription object that needs to be sent to the Nokia TAS
    var CallDirectionSubscription = {
            callDirectionSubscription: {
                callbackReference: {
                    notifyURL: domain + "/callevent"
                },
                filter: {
                    address: [
                        "sip:+358480786487@ims8.wirelessfuture.com"
                    ],
                    criteria: ["CalledNumber"],
                    addressDirection: "Called"
                },
                clientCorrelator: "cc12390"
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



exports.callevent = function(req, res) {
    var data = []

    req.on('data', chunk => {
      data.push(chunk)
    });
    req.on('end', () => {
      console.log(JSON.parse(data))
       
      var resObj = {
        "action": {
          "actionToPerform": "Continue",
          //"displayAddress": "sip:+358480786488@ims8.wirelessfuture.com",
          "digitCapture": {
            "digitConfiguration": {
              "maxDigits": 10,
              "minDigits": 1,
              "endChar": "#"
            },
            "playingConfiguration": {
              "playFileLocation": domain + "/audio.wav"
            },
            "callParticipant": [
              "sip:+358480786488@ims8.wirelessfuture.com"
            ]
          },
          "playAndCollectInteractionSubscription": {
            "callbackReference": {
              "notifyURL": domain + "/mediaevent"
            }
          }
        }
      }
      res.json(resObj).send();
    })
}

exports.mediaevent = app.use(function(req, res) {
    console.log(req.body)
    var digits = req.body.mediaInteractionNotification.mediaInteractionResult

    var actionToPerform = (action) => {
      res.json({
        "action": {
          "actionToPerform": action
        }
      }).send()
    }

    if(digits.includes("0")) {
      actionToPerform("EndCall")
    } else if(digits.includes("1")) {
      actionToPerform("Continue")
    } else {
      res.sendStatus(200)
    }
})