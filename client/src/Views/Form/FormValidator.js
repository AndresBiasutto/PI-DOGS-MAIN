const validateName = /^[a-zA-Z]{1,50}$/
const validateImage = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;

export const validateForm = (form) => {
    const errors = {}
    //name
    if (!form.name.match(validateName)) {
        errors.name = "nombre invalido"
    }
    //image
    if (!form.image.match(validateImage)) {
        errors.image = "url invalida"
    }
    //Weight
    if (form.minWeight >= 90) {
        errors.minWeight = "peso minimo exedido"
    }
    if (form.maxWeight >= 100) {
        errors.maxWeight = "peso maximo exedido"
    }
    if (form.minWeight > form.maxWeight) {
        errors.minWeight = "el peso minimo no puede exeder al maximo"
        errors.maxWeight = "el peso minimo no puede exeder al maximo"
    }
    //height
    if (form.minHeight >= 90) {
        errors.minHeight = "altura minima exedida"
    }
    if (form.maxHeight >= 120) {
        errors.maxHeight = "altura maxima exedida"
    }
    if (form.minHeight > form.maxHeight) {
        errors.minHeight = "la altura minima no puede exeder a la maxima"
        errors.maxHeight = "la altura minima no puede exeder a la maxima"
    }
    //life
    if (form.minLife_span >= 10) {
        errors.minLife_span= "edad minima exedida"
    }
    if (form.maxLife_span >= 29) {
        errors.maxLife_span = "edad maxima exedida"
    }
    if (form.minLife_span > form.maxLife_span) {
        errors.minLife_span = "el peso minimo no puede exeder al maximo"
        errors.maxLife_span = "el peso minimo no puede exeder al maximo"
    }
    if (!form.temperament === "temperamentos") {
        errors.temperament= "debes elejir un temperamento"
    }else {
        errors.temperament=""
    }
    return errors;
};