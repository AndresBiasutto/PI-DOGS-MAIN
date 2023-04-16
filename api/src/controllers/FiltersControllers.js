const { getAllDogs } = require("./DogsController")
const { filterDog}= require("../helpers/FiltersHelpers")

const filterOrigin = async (origin) => {
    const allDogs = await getAllDogs()
    const created = origin === "api" ? allDogs.filter(dog => dog.created === false) : allDogs.filter(dog => dog.created === true)

    return created
}

const orderByWeight = async (orderby) => {
    const allDogs = await getAllDogs()
    const dogsReady= filterDog(allDogs)

    const order= orderby === "asc"? dogsReady.sort((dog1,dog2)=> dog1.weight - dog2.weight):dogsReady.sort((dog1,dog2)=> dog2.weight - dog1.weight)

    return order
}

module.exports = { filterOrigin, orderByWeight }