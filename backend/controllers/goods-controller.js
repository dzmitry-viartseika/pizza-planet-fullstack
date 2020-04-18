const Goods = require('../models/goodsList');
const mongoose = require('mongoose');
const PizzaList = mongoose.model('Pizza');


// {
//     id: 1,
//     name: 'Margarita',
//     description: 'Margarita',
//     options: [
//     {
//         size: 9,
//         price: 10.95,
//     },
//     {
//         size: 12,
//         price: 12.95,
//     }
// ]
// },

class GoodsController {
    constructor(){}
    getGoods = async (req, res) => {
        // const pizza = new PizzaList()
        // pizza.name = 'Amaretto'
        // pizza.description = 'Amaretto description wertey'
        // pizza.options = [
        //     {
        //         size: 1,
        //         price: 9
        //     },
        //     {
        //         size: 20,
        //         price: 190
        //     },
        // ]
        // pizza.save()
        PizzaList.find((err, docs) => {
            if (err) {
                res.send(err);
            } else {
                res.send(docs);
            }
        })
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
        const item = new PizzaList()
            item.name = req.body.item.name,
            item.description = req.body.item.description,
            item.options = req.body.item.options,
        item.save()
    }
}

module.exports = GoodsController;
