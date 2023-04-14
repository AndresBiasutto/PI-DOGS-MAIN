const formatTemperamants = (AllDogs) => {
    const allTemperamentsMixed = AllDogs.map(dog => dog.temperament).join(',');
    const allTemperamentAsParameter = allTemperamentsMixed.split(",")
    const uniqueTemperaments = allTemperamentAsParameter.filter((temperament, index) => {
        return allTemperamentAsParameter.indexOf(temperament) === index;
    });
    uniqueTemperaments.forEach(async temp => {
        await uniqueTemperaments.findOrCreate({
            where: {
                id: indexOf(temp),
                name: temp
            }
        })
    });
    const temperaments = uniqueTemperaments.map((temp) => {
        return { id: temp.id, temperament: temp.temperament }
    })
    return temperaments
}

module.exports= {formatTemperamants}