const Goods = require('../models/goodsList');
const mongoose = require('mongoose');
const PizzaList = mongoose.model('Pizza');
const ObjectId = require('mongodb').ObjectID;

class GoodsController {
    constructor(){}
    getGoods = async (req, res) => {
        PizzaList.find((err, docs) => {
            if (err) {
                res.send(err);
            } else {
                res.send(docs);
            }
        })
    };
    newItem = async (req, res) => {
        const item = new PizzaList()
            item.name = req.body.item.name,
            item.description = req.body.item.description,
            item.options = req.body.item.options,
        item.save()
    };
    deleteItem = async (req, res) => {
        const id = req.query.id;
        const o_id = new ObjectId(id);
        PizzaList.deleteOne({ _id: o_id }, function(err, result) {
            if (err) {
                res.send('err');
            } else {
                res.send('result');
            }
        });
    };
}

module.exports = GoodsController;
