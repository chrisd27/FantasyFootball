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
router.get('/admin', ctrlAdmin.admin);
router.get('/admin/addRules', ctrlAdmin.addRules);
router.get('/admin/addPlayer', ctrlAdmin.addPlayer);
router.get('/admin/addGame', ctrlAdmin.addGame);


module.exports = router;
