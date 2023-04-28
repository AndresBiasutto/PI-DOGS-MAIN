const validateName = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s ]+$/;
const validateImage = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;

export const validateForm = (form, setErrors) => {
    setErrors(errors => ({ ...errors, name: "" }));
    setErrors(errors => ({ ...errors, image: "" }));
    setErrors(errors => ({ ...errors, minWeight: "" }));
    setErrors(errors => ({ ...errors, maxWeight: "" }));
    setErrors(errors => ({ ...errors, minHeight: "" }));
    setErrors(errors => ({ ...errors, maxHeight: "" }));
    setErrors(errors => ({ ...errors, minLife_span: "" }));
    setErrors(errors => ({ ...errors, maxLife_span: "" }));
    //nombre
    if (!form.name) {
        setErrors(errors => ({ ...errors, name: "nombre requerido" }));
    } else {
        if (!validateName.test(form.name)) {
            setErrors(errors => ({ ...errors, name: "Solo letras y espacios" }));
        } else {
            setErrors(errors => ({ ...errors, name: "" }))
        }
    }
    //imagen
    if (!form.image) {
        setErrors(errors => ({ ...errors, image: "url de la imagen requerida" }))
    } else {
        if (!validateImage.test(form.image)) {
            setErrors(errors => ({ ...errors, image: "Url invalida" }));
        } else {
            setErrors(errors => ({ ...errors, image: "" }))
        }
    }
    //peso
    if (!form.minWeight) {
        setErrors(errors => ({ ...errors, minWeight: "minimo requerido" }))
    } else {
        if (form.minWeight <= 0 || form.minWeight >= 100) {
            setErrors(errors => ({ ...errors, minWeight: "de 1 a 100" }))
        } else if (form.minWeight > form.maxWeight) {
            setErrors(errors => ({ ...errors, minWeight: "min mayor a max" }))
        } else {
            setErrors(errors => ({ ...errors, minWeight: "" }))
        }
    }
    if (!form.maxWeight) {
        setErrors(errors => ({ ...errors, maxWeight: "maximo requerido" }))
    } else {
        if (form.maxWeight <= 0 || form.maxWeight >= 100) {
            setErrors(errors => ({ ...errors, maxWeight: "de 1 a 100" }))
        } else if (form.minWeight > form.maxWeight) {
            setErrors(errors => ({ ...errors, maxWeight: "max menor a min" }))
        } else {
            setErrors(errors => ({ ...errors, maxWeight: "" }))
        }
    }
    //altura
    if (!form.minHeight) {
        setErrors(errors => ({ ...errors, minHeight: "minimo requerido" }))
    } else {
        if (form.minHeight <= 0 || form.minHeight >= 100) {
            setErrors(errors => ({ ...errors, minHeight: "de 1 a 100" }))
        } else if (form.minHeight > form.maxHeight) {
            setErrors(errors => ({ ...errors, minHeight: "min mayor a max" }))
        } else {
            setErrors(errors => ({ ...errors, minHeight: "" }))
        }
    }
    if (!form.maxHeight) {
        setErrors(errors => ({ ...errors, maxHeight: "maximo requerido" }))
    } else {
        if (form.maxHeight <= 0 || form.maxHeight >= 100) {
            setErrors(errors => ({ ...errors, maxHeight: "de 1 a 100" }))
        } else if (form.minHeight > form.maxHeight) {
            setErrors(errors => ({ ...errors, maxHeight: "max menor a min" }))
        } else {
            setErrors(errors => ({ ...errors, maxHeight: "" }))
        }
    }
    //vida
    if (!form.minLife_span) {
        setErrors(errors => ({ ...errors, minLife_span: "minimo requerido" }))
    } else {
        if (form.minLife_span <= 0 || form.minLife_span >= 25) {
            setErrors(errors => ({ ...errors, minLife_span: "de 1 a 25" }))
        } else if (form.minLife_span > form.maxLife_span) {
            setErrors(errors => ({ ...errors, minLife_span: "min mayor a max" }))
        } else {
            setErrors(errors => ({ ...errors, minLife_span: "" }))
        }
    }
    if (!form.maxLife_span) {
        setErrors(errors => ({ ...errors, maxLife_span: "maximo requerido" }))
    } else {
        if (form.maxLife_span <= 0 || form.maxLife_span >= 25) {
            setErrors(errors => ({ ...errors, maxLife_span: "de 1 a 25" }))
        } else if (form.minLife_span > form.maxLife_span) {
            setErrors(errors => ({ ...errors, maxLife_span: "max menor a min" }))
        } else {
            setErrors(errors => ({ ...errors, maxLife_span: "" }))
        }
    }
}