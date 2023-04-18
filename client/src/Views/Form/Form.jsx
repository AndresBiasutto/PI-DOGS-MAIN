import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useState } from "react";
import { getTemperaments } from "../../redux/actions";
import { validateForm } from "./FormValidator";

const Form = () => {
    const dispatch= useDispatch()
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
        setErrors(validateForm({ ...form, [property]: value }))
        console.log(e.target.value)
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


    useEffect(()=>{
        dispatch(getTemperaments())
    },[dispatch])

    const temperaments= useSelector(state=>state.temperaments)




    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/dogs/`, formatDog(form)).then(res => alert("perro creado con exito"))

    }
    return (
        <div>
            <h1>soy la Form page</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" value={form.name} onChange={changeHandler} name="name" />
                    {errors.name && <span>{errors.name} </span>}
                </div>
                <div>
                    <label htmlFor="image">image</label>
                    <input type="url" value={form.image} onChange={changeHandler} name="image" />
                    {errors.image && <span>{errors.image} </span>}
                </div>
                <div>
                    <label htmlFor="minWeight">Min weight</label>
                    <input type="number" value={form.minWeight} onChange={changeHandler} name="minWeight" />
                    {errors.minWeight && <span>{errors.minWeight} </span>}
                </div>
                <div>
                    <label htmlFor="maxWeight">maxWeight</label>
                    <input type="number" value={form.maxWeight} onChange={changeHandler} name="maxWeight" />
                    {errors.maxWeight && <span>{errors.maxWeight} </span>}
                </div>
                <div>
                    <label htmlFor="minHeight">Min Height</label>
                    <input type="number" value={form.minHeight} onChange={changeHandler} name="minHeight" />
                    {errors.minHeight && <span>{errors.minHeight} </span>}
                </div>
                <div>
                    <label htmlFor="maxHeight">maxHeight</label>
                    <input type="number" value={form.maxHeight} onChange={changeHandler} name="maxHeight" />
                    {errors.maxHeight && <span>{errors.maxHeight} </span>}
                </div>
                <div>
                    <label htmlFor="minLife_span">minLife_span</label>
                    <input type="number" value={form.minLife_span} onChange={changeHandler} name="minLife_span" />
                    {errors.minLife_span && <span>{errors.minLife_span} </span>}
                </div>
                <div>
                    <label htmlFor="maxLife_span">maxLife_span</label>
                    <input type="number" value={form.maxLife_span} onChange={changeHandler} name="maxLife_span" />
                    {errors.maxLife_span && <span>{errors.maxLife_span} </span>}
                </div>
                {/* <div>
                    <label htmlFor="">temperament</label>
                    <input type="text" value={form.temperament} onChange={changeHandler} name="temperament" />
                    {errors.temperament && <span>{errors.temperament} </span>}
                </div> */}
                <label htmlFor="temperament">temperament</label>
                <select id="temperament" onChange={changeHandler}>
                    <option value="temperamentos"  onChange={changeHandler} >temperamentos</option>
                    {temperaments.map(temperament => (
                        <option key={temperament.id} value={temperament.id} >{temperament.name}</option>
                    ))}
                </select>
                {errors.temperament && <span>{errors.temperament} </span>}
                <button type="submit">SEND</button>
            </form>
        </div>
    )
}
export default Form;