var express = require('express');
var router = express.Router();
var calldirection = require('./controllers/callDirectionController.js');
var users = require('./controllers/userController.js');

// Define the home page route
router.get('/', users.index);

router.post('/users/add', users.add);

router.get('/users/delete/:id', users.delete);

router.post('/subscription/callback', calldirection.callback);

router.post('/callevent/callback', calldirection.callevent);

router.get('/subscription', calldirection.subscribe);

router.get('/subscription/delete/:id/:addr', calldirection.delete);

module.exports = router;