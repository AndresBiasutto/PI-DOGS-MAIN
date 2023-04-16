const axios = require("axios");
const { dogsFilter, dogFilter, dogFilterBDD, dogFilterBDDbyName } = require("../helpers/DogsHelpers")
const { Dogs, Temperaments } = require("../db")

const getAllDogs = async () => {
    const apiData = (await axios.get("https://api.thedogapi.com/v1/breeds")).data;
    const allDogsApi = await dogsFilter(apiData)
    const allDogsBDD = await Dogs.findAll({
        include: {
            model: Temperaments,
            attributes: ["name"],
        },
    })
    const allDogsBddFilter= dogFilterBDD(allDogsBDD)
    return [...allDogsBddFilter, ...allDogsApi];
}

const getDogById = async (id, source) => {
    const theDog = source == "api"
        ? dogFilter((await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data)
        : Dogs.findByPk(id, {
            include:{
                model: Temperaments,
                attributes:["name"]
            }
        })

    return theDog;
}

const getDogByName = async (name) => {
    
    const apiData = (await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)).data;
    const dogApi = apiData.length ? dogFilterBDDbyName(apiData)[0] : null;
    
    // Buscar en la base de datos
    const dogsFromDatabase = await Dogs.findAll({ where: { name: name } })
    const findDogsDatabase = dogsFromDatabase.length ? dogFilterBDD(dogsFromDatabase) : null;

    // Combinar los resultados
    const combinedResults = [];
    if (dogApi) combinedResults.push(dogApi);
    if (findDogsDatabase) combinedResults.push(...findDogsDatabase);

    // Devolver el resultado combinado si existe, si no, devolver un mensaje de error
    if (combinedResults.length) {
        return combinedResults;
    } else {
        throw new Error(`No se encontró ningún perro llamado ${name}`);
    }
}

const createDog = async (name, image, weight, height, life_span, temperament) => {
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
    return dogWithTemperament;
}

module.exports = { getAllDogs, getDogById, getDogByName, createDog };