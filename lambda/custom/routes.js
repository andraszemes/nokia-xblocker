var express = require('express');
var router = express.Router();
var calldirection = require('./controllers/callDirectionController.js');

// Define the home page route
router.get('/', function(req, res) {
  res.send('home page');
});

router.post('/subscription/callback', calldirection.callback);

router.post('/callevent/callback', calldirection.callevent);

router.get('/subscription', calldirection.subscribe);

router.get('/subscription/delete/:id/:addr', calldirection.delete);

module.exports = router;