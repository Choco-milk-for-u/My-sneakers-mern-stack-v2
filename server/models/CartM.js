const { Schema, model } = require('mongoose');

const CartS = new Schema({
    name: { type: String, required: true, ref: 'Sneaker' },
    img: { type: String, required: true, ref: 'Sneaker' },
    price: { type: Number, ref: 'Sneaker' },
    sneakerID: {type: Schema.Types.ObjectId, ref: 'Sneaker'}
})

module.exports = model('Cart', CartS);