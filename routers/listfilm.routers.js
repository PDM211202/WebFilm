const express = require('express');
const { createFilm, getAllFilm, getDetailFilm } = require('../controllers/listfilm.controllers');
const listfilmRouter = express.Router();

listfilmRouter.post("/", createFilm);
listfilmRouter.get("/", getAllFilm);
listfilmRouter.get("/:id", getDetailFilm);

module.exports = { listfilmRouter };