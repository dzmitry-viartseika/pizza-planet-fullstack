const express = require('express');
const GoodsController = require('../controllers/goods-controller');
const goods_controller = new GoodsController();
const router = new express.Router();

router.get('/getGoods', goods_controller.getGoods);
router.post('/newItem', goods_controller.newItem);
router.delete('/deleteItem', goods_controller.deleteItem);

module.exports = router;
