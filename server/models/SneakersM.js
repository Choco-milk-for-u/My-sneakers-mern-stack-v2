const { Schema, model } = require('mongoose');

const SneakerM = new Schema({
    name: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    price: { type: Number },
})

module.exports = model('Sneaker', SneakerM);