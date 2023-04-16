const { getAllTemperaments, postTemperament } = require("../controllers/TemperamentsController")
const { Temperaments } = require("../db")


const getTemperamentHandler = async (req, res) => {
    try {
        const temperamentsBDD = await Temperaments.findAll();
        if (temperamentsBDD.length) return res.status(200).json(temperamentsBDD);
        const temperamentsApi = getAllTemperaments()

        res.status(200).json(temperamentsApi);
    } catch (error) {

        res.status(404).send({ error: error.message })
    }
}

const postTemperamentHandler = async (req, res) => {
    try {
        const { name, dogId } = req.body;
        const createTemperament = await postTemperament(name, dogId)

        return res.status(200).json(createTemperament)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = { getTemperamentHandler, postTemperamentHandler }