const axios = require('axios');
const { Temperaments } = require("../db")
const {formatTemperamants}= require("../helpers/TemperamentHelpers")

const getAllTemperaments = async () => {
    // const temperamentsBDD = await Temperaments.findAll();
    // if (temperamentsBDD.length) return temperamentsBDD
    const apiData = (await axios.get("https://api.thedogapi.com/v1/breeds")).data;
    const temperaments = formatTemperamants(apiData)
    return temperaments
}
module.exports = { getAllTemperaments };

//     const AllDogs = (await axios.get("https://api.thedogapi.com/v1/breeds")).data;
//     const allTemperamentsMixed = AllDogs.map(dog => dog.temperament).join(',');
//     const allTemperamentAsParameter = allTemperamentsMixed.split(",")
//     const uniqueTemperaments = allTemperamentAsParameter.filter((temperament, index) => {
//         return allTemperamentAsParameter.indexOf(temperament) === index;
//     });
//     uniqueTemperaments.forEach(async temp => {
//         await uniqueTemperaments.findOrCreate({
//             where: {
//                 id: indexOf(temp),
//                 name: temp
//             }
//         })
//     });
//     const temperaments= uniqueTemperaments.map((temp)=>{
//         return {id: temp.id, temperament: temp.temperament}
//     })
//     return temperaments
// }
// const postTemperament=(req,res)=>{
//     res.send("hago el postTemperaments")