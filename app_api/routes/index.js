var express = require('express');
var router = express.Router();

/* Controllers */
var ctrlPlayers = require('../controllers/players');
var ctrlGames= require('../controllers/games');
var ctrlRules = require('../controllers/rules');

/* Players */
router.get('/players', ctrlPlayers.allPlayers);
router.post('/players', ctrlPlayers.playerCreate);
router.get('/players/:playerid', ctrlPlayers.playerReadOne);
router.put('/players/:playerid', ctrlPlayers.playerUpdateOne);
router.delete('/players/:playerid', ctrlPlayers.playerDeleteOne);


/* Games */
router.get('/games', ctrlGames.allGames);
router.post('/games', ctrlGames.gameCreate);
router.get('/games/:gameid', ctrlGames.gameReadOne);
router.put('/games/:gameid', ctrlGames.gameUpdateOne);
router.delete('/games/:gameid', ctrlGames.gameDeleteOne);


/* Rules */
router.get('/rules', ctrlRules.allRules);
router.post('/rules', ctrlRules.ruleCreate);
router.get('/rules/:ruleid', ctrlRules.ruleReadOne);
router.put('/rules/:ruleid', ctrlRules.ruleUpdateOne);
router.delete('/rules/:ruleid', ctrlRules.ruleDeleteOne);

module.exports = router;
