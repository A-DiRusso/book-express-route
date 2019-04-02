const express = require('express');
const Router = express.Router;

const {
    create,
    retrieveAll,
    update,
    deleteOne
} = require('../controller/books');

const booksRoutes = Router();


booksRoutes.get('/', retrieveAll);
booksRoutes.post('/', create);
booksRoutes.put('/', update);
booksRoutes.delete('/', deleteOne);

module.exports = booksRoutes;

