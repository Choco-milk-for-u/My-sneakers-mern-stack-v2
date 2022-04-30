const Router = require('express').Router();
const SneakersController = require('../controllers/sneakersController');

Router.get('/getAllSneakers', SneakersController.getAllSneakers);
Router.get('/getCartSneakers/:limit', SneakersController.getCartSneakers);

Router.post('/addSneaker', SneakersController.addSneakers);
Router.post('/addCartSneaker', SneakersController.addCartSneaker);
Router.post('/deleteCartSneaker', SneakersController.deleteCartSneaker);

module.exports = Router;