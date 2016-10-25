var express = require('express');
var router = express.Router();

/* Controllers */
var ctrlMain = require('../controllers/main');
var ctrlAdmin= require('../controllers/admin');
var ctrlDetails= require('../controllers/details');
var ctrlOthers = require('../controllers/others');

/* Main page */
router.get('/', ctrlMain.main);

/* Others */
router.get('/newAccount', ctrlOthers.newAccount);
router.get('/signIn', ctrlOthers.signIn);
router.get('/about', ctrlOthers.about);

/* Admin */
router.get('/teamSummary', ctrlAdmin.teamSummary);

/* Add */
router.get('/admin/rules/new', ctrlAdmin.addRule);
router.get('/admin/players/new', ctrlAdmin.addPlayer);
router.get('/admin/games/new', ctrlAdmin.addGame);

router.post('/admin/rules/new', ctrlAdmin.doAddRule);
router.post('/admin/players/new', ctrlAdmin.doAddPlayer);
//router.post('/admin/game/new', ctrlAdmin.doAddGame);

/* Edit */
router.get('/admin/rule/:ruleid', ctrlAdmin.editRule);
router.get('/admin/player/:playerid', ctrlAdmin.editPlayer);
router.get('/admin/game/:gameid', ctrlAdmin.editGame);

/* View All */
router.get('/details/rules', ctrlDetails.viewRules);
router.get('/details/players', ctrlDetails.viewPlayer);
router.get('/details/games', ctrlDetails.viewGame);


module.exports = router;
