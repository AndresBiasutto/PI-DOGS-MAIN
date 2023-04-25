import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useState } from "react";
import { getTemperaments } from "../../redux/actions";
//import { validateForm } from "./FormValidator";
import style from "./Form.module.css"

const validateName = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s ]+$/;
const validateImage = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;

const validateForm = (form, setErrors) => {
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

const Form = () => {
    const temperaments = useSelector(state => state.temperaments)
    const dispatch = useDispatch()
    const [selectedTemperamentId, setSelectedTemperamentId] = useState(0);
    const [form, setForm] = useState({
        name: "",
        image: "",
        minWeight: "",
        maxWeight: "",
        minHeight: "",
        maxHeight: "",
        minLife_span: "",
        maxLife_span: "",
        temperament: 0
    })
    const [errors, setErrors] = useState({
        name: "",
        image: "",
        minWeight: "",
        maxWeight: "",
        minHeight: "",
        maxHeight: "",
        minLife_span: "",
        maxLife_span: "",
        temperament: ""
    })

    const changeHandler = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [property]: value })
        validateForm({ ...form, [property]: value }, setErrors)
    }

    const formatDog = (form) => {
        return {
            name: form.name,
            image: form.image,
            weight: `${form.minWeight} - ${form.maxWeight}`,
            height: `${form.minHeight} - ${form.maxHeight}`,
            life_span: `${form.minLife_span} - ${form.maxLife_span} years`,
            temperament: form.temperament
        }

    }

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/dogs/`, formatDog(form)).then(res => alert("perro creado con exito"))
        console.log(formatDog(form))
    }

    return (
        <div className={style.container}>
            <form onSubmit={submitHandler} className={style.form}>

                <div className={style.inputForm}>
                    <input type="text" value={form.name} onChange={changeHandler} name="name" placeholder="Dog name" className={`${style.input} ${errors.name? style.crash:style.success}`} />
                    <div className={style.errors}>
                        {errors.name && <span className={style.span}>{errors.name}</span>}

                        <span className={style.icon}></span>
                    </div>

                </div>

                <div className={style.inputForm}>
                    <input type="url" value={form.image} onChange={changeHandler} name="image" placeholder="Image url" className={`${style.input} ${errors.image? style.crash:style.success}`} />
                    <div className={style.errors}>
                        {errors.image && <span className={style.span}>{errors.image} </span>}
                        <span className={style.icon}></span>
                    </div>
                </div>

                <div className={style.formGrup}>
                    <div className={style.inputForm}>
                        <div className={style.inputDetail}>
                            <input type="number" value={form.minWeight} onChange={changeHandler} name="minWeight" placeholder="min Weight Kg" className={`${style.input} ${style.num} ${errors.minWeight? style.crash:style.success}`} />
                        </div>
                        <div className={style.errors}>
                            {errors.minWeight && <span className={style.span}>{errors.minWeight} </span>}
                            <span className={style.icon}></span>
                        </div>
                    </div>
                    <div className={style.inputForm}>
                        <div className={style.inputDetail}>
                            <input type="number" value={form.maxWeight} onChange={changeHandler} name="maxWeight" placeholder="max Weight Kg" className={`${style.input} ${style.num} ${errors.maxWeight? style.crash:style.success}`} />
                        </div>
                        <div className={style.errors}>
                            {errors.maxWeight && <span className={style.span}>{errors.maxWeight} </span>}
                            <span className={style.icon}></span>
                        </div>
                    </div>
                </div>

                <div className={style.formGrup}>
                    <div className={style.inputForm}>
                        <div className={style.inputDetail}>
                            <input type="number" value={form.minHeight} onChange={changeHandler} name="minHeight" placeholder="min Height Cm" className={`${style.input} ${style.num} ${errors.minHeight? style.crash:style.success}`} />
                        </div>
                        <div className={style.errors}>
                            {errors.minHeight && <span className={style.span}>{errors.minHeight} </span>}
                            <span className={style.icon}></span>
                        </div>
                    </div>
                    <div className={style.inputForm}>
                        <div className={style.inputDetail}>
                            <input type="number" value={form.maxHeight} onChange={changeHandler} name="maxHeight" placeholder="max Height Cm" className={`${style.input} ${style.num} ${errors.maxHeight? style.crash:style.success}`} />
                        </div>
                        <div className={style.errors}>
                            {errors.maxHeight && <span className={style.span}>{errors.maxHeight} </span>}
                            <span className={style.icon}></span>
                        </div>

                    </div>
                </div>

                <div className={style.formGrup}>
                    <div className={style.inputForm}>
                        <div className={style.inputDetail}>
                            <input type="number" value={form.minLife_span} onChange={changeHandler} name="minLife_span" placeholder="min Life span" className={`${style.input} ${style.num} ${errors.maxLife_span? style.crash:style.success}`} />
                        </div>
                        <div className={style.errors}>
                            {errors.minLife_span && <span className={style.span}>{errors.minLife_span} </span>}
                            <span className={style.icon}></span>
                        </div>
                    </div>
                    <div className={style.inputForm}>
                        <div className={style.inputDetail}>
                            <input type="number" value={form.maxLife_span} onChange={changeHandler} name="maxLife_span" placeholder="max Life span" className={`${style.input} ${style.num} ${errors.maxLife_span? style.crash:style.success}`} />
                        </div>
                        <div className={style.errors}>
                            {errors.maxLife_span && <span className={style.span}>{errors.maxLife_span} </span>}
                            <span className={style.icon}></span>
                        </div>
                    </div>
                </div>

                <div className={style.inputForm}>
                    <select
                        value={form.temperament}
                        onChange={(e) => {
                            changeHandler(e);
                            setSelectedTemperamentId(Number(e.target.value)); // Convertir a número
                        }}
                        name="temperament"
                        className={style.input}
                    >
                        <option value="">-- Select a temperament --</option>
                        {temperaments.map((temperament) => (
                            <option key={temperament.id} value={temperament.id}> {/* Usar el id como valor */}
                                {temperament.name}
                            </option>
                        ))}
                    </select>
                    {errors.temperament && <span className={style.span}>{errors.temperament} </span>}
                </div>
                <button type="submit" className={style.boton}>SEND</button>
            </form>
        </div>
    )
}
export default Form;