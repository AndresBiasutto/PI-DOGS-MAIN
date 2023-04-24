const axios = require("axios");
const { dogsFilter, dogFilterBDDId, dogFilter, dogFilterBDD, dogFilterBDDbyName } = require("../helpers/DogsHelpers")
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
    const allDogsBddFilter = dogFilterBDD(allDogsBDD)
    return [...allDogsBddFilter, ...allDogsApi];
}

const getDogById = async (id, source) => {
    const theDogAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data


    if (source === "api") {
       return dogFilter(theDogAPI)
    }
    else {
        const theDogBDD = await Dogs.findByPk(id, {
            include: {
                model: Temperaments,
                attributes: ["name"]
            }
        })
        return theDogBDD
    }
}

const getDogByName = async (name) => {

    // const apiData = (await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)).data;
    // const dogApi =dogFilterBDDbyName(apiData)
    // const dogApiReady= dogApi.filter(dog=> dog !== null)
    // while (dogApiReady[dogApiReady.length - 1] === null) {
    //     dogApiReady.pop();
    //   }
    // // Buscar en la base de datos
    // const dogsFromDatabase = await Dogs.findAll({ where: { name: name } })
    // const findDogsDatabase = dogsFromDatabase.length ? dogFilterBDD(dogsFromDatabase) : null;
    // const dogsbdd= dogsFromDatabase[0]
    // // Combinar los resultados
    // const combinedResults = []
    //   combinedResults.push(dogsbdd)
    //   combinedResults.push(...dogApiReady)

    
    // // Devolver el resultado combinado si existe, si no, devolver un mensaje de error
    // if (combinedResults.length) {
    //     return combinedResults;
    // } else {
    //     throw new Error(`No se encontró ningún perro llamado ${name}`);
    // }
    const apiData = (await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)).data;
    const dogApi = apiData.length ? dogFilterBDDbyName(apiData) : null;
    
    // Buscar en la base de datos
    const dogsFromDatabase = await Dogs.findAll({ where: { name: name } })
    const findDogsDatabase = dogsFromDatabase.length ? dogFilterBDD(dogsFromDatabase) : null;

    // Combinar los resultados
    const combinedResults = [];
    if (dogApi) combinedResults.push(...dogApi);
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
    
    return dogWithTemperament[0] ;
}
const dogDelete = async (id) => {
    const dog = await Dogs.findByPk(id);
    if (dog) await dog.destroy();
    return `😔😔 ${dog.name} fue eliminado de la base de datos 😔😔`
}
module.exports = { getAllDogs, getDogById, getDogByName, createDog, dogDelete };