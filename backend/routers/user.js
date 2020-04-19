const express = require('express');
const UserController = require('../controllers/user-controller');
const user_controller = new UserController();
const router = new express.Router();

router.get('/signup', user_controller.getSignUp);
router.post('/signup', user_controller.postSignUp);
router.get('/signin', user_controller.getSignIn);
router.post('/signin', user_controller.postSignIn);

module.exports = router;
