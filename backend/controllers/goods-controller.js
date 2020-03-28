const Goods = require('../models/goodsList');

class GoodsController {
    constructor(){}
    getGoods = async (req, res) => {
        return res.send(Goods)
    };
}



module.exports = GoodsController;