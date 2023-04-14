const { getAllDogs, getDogById, getDogByName, createDog } = require("../controllers/DogsController")
const { Temperaments, Dogs } = require("../db")
const getDogsHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const response = !name ? await getAllDogs() : await getDogByName(name)
    res.status(200).json(response)
  } catch (error) {

    return res.status(500).json({ error: error.message })
  }
}
const getDogByIdHandler = async (req, res) => {
  try {
    const { id } = req.params
    const source = isNaN(id) ? "bdd" : "api";
    const dogById = await getDogById(id, source);

    res.status(200).json(dogById)
  } catch (error) {

    return res.status(500).json({ error: error.message })
  }
}
const postDogHandler = async (req, res) => {
  try {
    const { name, image, weight, height, life_span, temperament } = req.body;
       const newDog = await Dogs.create({ name, image, weight, height, life_span });

    if (temperament) {
      await newDog.setTemperaments(temperament)
    }
    const dogWithTemperament = await Dogs.findByPk(newDog.id, {
      include: {
        model: Temperaments,
        attributes: ['name'],
        through: {
          attributes: []
        }
      }
    });
    res.status(200).json(dogWithTemperament);
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
module.exports = {
  getDogsHandler,
  getDogByIdHandler,
  postDogHandler
};
