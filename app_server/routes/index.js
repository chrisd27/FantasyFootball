var express = require('express');
var router = express.Router();

/* Controllers */
var ctrlMain = require('../controllers/main');
var ctrlAdmin= require('../controllers/admin');
var ctrlOthers = require('../controllers/others');

/* Main page */
router.get('/', ctrlMain.main);

/* Others */
router.get('/newAccount', ctrlOthers.newAccount);
router.get('/signIn', ctrlOthers.signIn);
router.get('/about', ctrlOthers.about);

/* Admin */
router.get('/admin/teamSummary', ctrlAdmin.teamSummary);

/* Add */
router.get('/admin/addRules', ctrlAdmin.addRules);
router.get('/admin/addPlayer', ctrlAdmin.addPlayer);
router.get('/admin/addGame', ctrlAdmin.addGame);

//router.post('/admin/addRules', ctrlAdmin.addRules);
//router.post('/admin/addPlayer', ctrlAdmin.addPlayer);
//router.post('/admin/addGame', ctrlAdmin.addGame);

/* Edit */
router.get('/admin/editRule', ctrlAdmin.editRule);
router.get('/admin/editPlayer', ctrlAdmin.editPlayer);
router.get('/admin/editGame', ctrlAdmin.editGame);

/* Edit */
router.get('/admin/viewRules', ctrlAdmin.viewRules);
router.get('/admin/viewPlayer', ctrlAdmin.viewPlayer);
router.get('/admin/viewGame', ctrlAdmin.viewGame);


module.exports = router;
