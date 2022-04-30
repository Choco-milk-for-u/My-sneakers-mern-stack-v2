// import DB
const SneakersDB = require('../models/SneakersM');
const CartDB = require('../models/CartM');
const ApiError = require('../apiError/index');
// import rest
const uuid = require('uuid');
const path = require('path');

class SneakersController {

    getAllSneakers = async (req, res, next) => {
        const sneakers = await SneakersDB.find();

        if (!sneakers) {
            return next(ApiError.NotFound('обуви нет'));
        }

        return res.json(sneakers);
    }
    getCartSneakers = async (req, res, next) => {
        const limit = req.params.limit;
        let sneakers;

        if(limit === 'all'){
            sneakers = await CartDB.find();
        }
        else{
            sneakers = await CartDB.find().limit(limit);
        }
        if (!sneakers) {
            return next(ApiError.NotFound('обуви нет'));
        }

        return res.json(sneakers);
    }
    addSneakers = async (req, res, next) => {
        const { name, price } = req.body;
        const { img } = req.files;

        if (!(name || img || price)) {
            return next(ApiError.BadRequest('вы что-то не добавили'));
        }
        const fileName = uuid.v4() + '.jpg';
        img.mv(path.resolve(__dirname, '..', 'static', fileName));

        const sneaker = await SneakersDB.create({ name: name, price: price, img: fileName });

        if (!sneaker) {
            return next(ApiError.BadRequest('что-то не получилось добавить('));
        }

        return res.json(sneaker);
    }
    addCartSneaker = async (req, res, next) => {
        const { name } = req.body;

        if (!name) {
            return next(ApiError.BadRequest('вы что-то не добавили'));
        }

        const sneaker = await SneakersDB.findOne({ name: name });
        if (!sneaker) {
            return next(ApiError.NotFound('обуви нет'));
        }

        const addedSniker = await CartDB.create({ name: name, price: sneaker.price, img: sneaker.img, sneakerID: sneaker._id });
        if (!addedSniker) {
            return next(ApiError.Forbidden('не получилось создать'));
        }

        return res.json(addedSniker);
    }
    deleteCartSneaker = async (req, res, next) => {
        const { name } = req.body;

        if (!name) {
            return next(ApiError.BadRequest('вы что-то не добавили'));
        }

        const deletedSneaker = await CartDB.findOneAndDelete({ name: name });
        if (!deletedSneaker) {
            return next(ApiError.Forbidden('не получилось удалить'));
        }

        return res.json(deletedSneaker);
    }
}

module.exports = new SneakersController();