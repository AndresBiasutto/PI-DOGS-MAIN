const filterDog = (allDogs) => {
    const dogsReady = allDogs.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            image: dog.image,
            weight: Number(dog.weight.split(" ")[2]),
            height: dog.height,
            life_span: dog.life_span,
            temperament: dog.temperament
        }
    })
    return dogsReady
}
const filterDogaz = (allDogs) => {
    const dogsReady = allDogs.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            image: dog.image,
            weight: dog.weight,
            height: dog.height,
            life_span: dog.life_span,
            temperament: dog.temperament
        }
    })
    return dogsReady
}


module.exports = { filterDog, filterDogaz }