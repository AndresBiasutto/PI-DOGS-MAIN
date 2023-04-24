const axios = require("axios");

const dogsFilter = async (apiData) => {
    return await apiData.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            image: dog.image.url,
            weight: dog.weight.metric,
            height: dog.height.metric,
            life_span: dog.life_span,
            temperament: dog.temperament,
            created: false
        }
    })
}
const dogFilter = async (apiData) => {
    const allDogs = (await axios.get(`https://api.thedogapi.com/v1/breeds`)).data;
    const dog= allDogs.find(dog=> dog.id=== apiData.id)
    const dogImage= dog.image.url
    return {
        id: apiData.id,
        name: apiData.name,
        image: dogImage,
        weight: apiData.weight.metric,
        height: apiData.height.metric,
        life_span: apiData.life_span,
        temperament:apiData.temperament,
        created: false
    }
}
const dogFilterBDDId = (theDogBDD) => {
    return {
        id: theDogBDD.id,
        name: theDogBDD.name,
        image: theDogBDD.image,
        weight: theDogBDD.weight,
        height: theDogBDD.height,
        life_span: theDogBDD.life_span,
        temperament: theDogBDD.Temperaments[0].name,
        created: true,

    }
}
const dogFilterBDD = (allDogsBDD) => {
    return allDogsBDD.map((dog) => {
        return {
            id: dog.id,
            name: dog.name,
            image: dog.image,
            weight: dog.weight,
            height: dog.height,
            life_span: dog.life_span,
            created: true,
            temperament: dog.Temperaments && dog.Temperaments.length > 0 ? dog.Temperaments[0].name : null
        }
    })
}
const dogFilterBDDbyName = (allDogsBDD) => {
    return allDogsBDD.map((dog) => {
        return {
            id: dog.id,
            name: dog.name,
            image: dog.reference_image_id,
            weight: dog.weight.metric,
            height: dog.height.metric,
            life_span: dog.life_span,
            created: true
        }
    })
}

module.exports = { dogsFilter, dogFilter, dogFilterBDD, dogFilterBDDbyName, dogFilterBDDId };