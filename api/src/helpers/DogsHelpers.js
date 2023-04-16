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
const dogFilter = (apiData) => {
    return {
        id: apiData.id,
        name:apiData.name,
        image:apiData.reference_image_id,
        weight:apiData.weight.metric,
        height:apiData.height.metric,
        life_span:apiData.life_span,
        created:false
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
const dogFilterBDDbyName=(allDogsBDD)=>{
    return allDogsBDD.map((dog)=>{
        return {
            id: dog.id,
            name:dog.name,
            image:dog.reference_image_id,
            weight:dog.weight.metric,
            height:dog.height.metric,
            life_span:dog.life_span,
            created:true
        }
    })
}

module.exports = { dogsFilter, dogFilter, dogFilterBDD , dogFilterBDDbyName };