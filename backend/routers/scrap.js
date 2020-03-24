const express = require('express');
const ScrapController = require('../controllers/scrap-controller');
const scrap_controller = new ScrapController();
const router = new express.Router();

router.post('/', scrap_controller.addScrap);
router.get('/getdata', scrap_controller.getScrap);

module.exports = router;

