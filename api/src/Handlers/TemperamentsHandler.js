const { getAllTemperaments, postTemperament } = require("../controllers/TemperamentsController")
const { Temperaments } = require("../db")
const axios = require("axios")

const getTemperamentHandler = async (req, res) => {

    try {
        const temperamentsBDD = await Temperaments.findAll();
        if (temperamentsBDD.length) return res.status(200).json(temperamentsBDD);
         const allDataApi = (await axios.get(`https://api.thedogapi.com/v1/breeds`)).data;

         const allTemperamentsMixed = allDataApi.map(dog => dog.temperament).join(',');
         const allTemperamentAsParameter = allTemperamentsMixed.split(",")
         const uniqueTemperaments = allTemperamentAsParameter.filter((temperament, index) => {
             return allTemperamentAsParameter.indexOf(temperament) === index;

         })
         uniqueTemperaments.forEach(async (temperament, index) => {
             await Temperaments.findOrCreate({
                 where: {
                     id: index,
                     name: temperament
                 }
             })
         });
         const response = uniqueTemperaments.map((temperament, index) => {
             return { id: index + 1, name: temperament }
         });

        res.status(200).json(response);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const postTemperamentHandler = async (req, res) => {
    try {
        const newTemperament = req.body.name;
        const postedTemp = await Temperaments.create({ name: newTemperament });
        return res.status(200).json(postedTemp)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = { getTemperamentHandler, postTemperamentHandler }