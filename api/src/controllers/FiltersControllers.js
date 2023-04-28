const { getAllDogs } = require("./DogsController")
const { filterDog, filterDogaz}= require("../helpers/FiltersHelpers")

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

const namesInOrder= async (azorder)=>{
     const allDogs= await getAllDogs()
     const dogsReady= filterDogaz(allDogs)

     const order= azorder === "az"? dogsReady.sort((a, b) => a.name.localeCompare(b.name)):dogsReady.sort((a, b) => b.name.localeCompare(a.name))

    return order
}

const findTemperament= async(temporder)=>{
    const allDogs= await getAllDogs()
    const dogsReady= filterDogaz(allDogs)
    const listo= []
    for (let i = 0; i < dogsReady.length; i++) {
        if (dogsReady[i].temperament && dogsReady[i].temperament.includes(temporder)) {
            listo.push(dogsReady[i])
        }
    }
    //const listo=dogsReady[95].temperament.includes(temporder)

    return listo
}

module.exports = { filterOrigin, orderByWeight, namesInOrder, findTemperament}