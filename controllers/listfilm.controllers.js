const { Listfilm } = require('../models');

const createFilm = async (req, res) => {
    const { name, category, src } = req.body;
    const newFilm = await Listfilm.create({ name, category, src });
    res.status(201).send(newFilm);
};

const getAllFilm = async (req, res) => {
    try {
        const films = await Listfilm.findAll();
        res.status(200).send(films);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const getDetailFilm = async (req, res) => {
    try {
        const { id } = req.params;
        const film = await Listfilm.findByPk(id);
        if (film) {
            res.status(200).send(film);
        } else {
            res.status(404).send({ message: 'Station not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = { createFilm, getAllFilm, getDetailFilm };