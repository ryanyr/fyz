var express = require('express');
var router = express.Router();
var pageController =require('../controllers/pageController');
var userController =require('../controllers/userController');
var postController =require('../controllers/postController');

/* GET home page. */
router.get('/', pageController.homePage);
router.get('/home', pageController.homePage);

module.exports = router;
