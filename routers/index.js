const express = require('express');
const { listfilmRouter } = require('./listfilm.routers');
const rootRouter = express.Router();

rootRouter.use('/list', listfilmRouter);

module.exports = {
    rootRouter
}