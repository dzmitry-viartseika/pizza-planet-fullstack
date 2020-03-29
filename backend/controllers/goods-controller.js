const Goods = require('../models/goodsList');

class GoodsController {
    constructor(){}
    getGoods = async (req, res) => {
        return res.send(Goods)
    };
    newItem = async (req, res) => {
        // const { error } = validateCourse(req.body);
        //
        // if (error) {
        //     res.status(400).send(error.details[0].message);
        //     return;
        // }
        // if (error) {
        //     res.status(400).send(error.details[0].message);
        //     return;
        // }
        const item = {
            id: Goods.length + 1,
            name: req.body.item.name,
            description: req.body.item.description,
            options: req.body.item.options,
        };
        Goods.push(item);
        res.send(item);
    }
}

module.exports = GoodsController;