const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    options: [
        {
        size:  {
            type: String,
        },
        price: {
            type: String,
        },
    }
    ]
});

const Pizza = mongoose.model('Pizza', pizzaSchema)
module.exports = Pizza
