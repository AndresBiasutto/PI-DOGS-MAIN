const axios = require('axios');
const { Temperaments } = require("../db")
const { formatTemperamants } = require("../helpers/TemperamentHelpers")

const getAllTemperaments = async () => {
    const allDataApi = (await axios.get(`https://api.thedogapi.com/v1/breeds`)).data;
    const allTemperamentsMixed = allDataApi.map(dog => dog.temperament).join(',');//obtengo todos los temperamentos de todas las razas y los uno en un solo string adentro de un array
    const allTemperamentAsParameter = allTemperamentsMixed.split(",")//separo todos los temperamentos para que cada uno sea un valor
    const uniqueTemperaments = allTemperamentAsParameter.filter((temperament, index) => { //filtro los temperamentos para que no haya ninguno repetido
        return allTemperamentAsParameter.indexOf(temperament) === index;
    })

    uniqueTemperaments.forEach(async (temperament, index) => {//a cada temperamento le doy un id y le asigno su valor para agregarlos a la bdd
        await Temperaments.findOrCreate({
            where: {
                id: index,
                name: temperament
            }
        })
    });

    const response = uniqueTemperaments.map((temperament, index) => {//preparo la respuseta
        return { id: index + 1, name: temperament }
    });
    return response
}

const postTemperament = async (name, dogId) => {
    const newTemperaent = await Temperaments.create({ name })
    newTemperaent.setDogs(dogId)
}

module.exports = { getAllTemperaments, postTemperament };
