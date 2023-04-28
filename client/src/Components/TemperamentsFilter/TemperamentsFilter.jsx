import { useEffect } from "react"
import { getTemperaments } from "../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import { getDogsByTemperament, getDogs } from "../../redux/actions"
import style from "./TemperamentsFilter.module.css"

const TemperamentsFilter = () => {
    const dispatch= useDispatch()
    const temperaments= useSelector(state=>state.temperaments)

    const onChange=(event)=>{
        if (event.target.value === "default") {
            dispatch(getDogs())
        }
        dispatch(getDogsByTemperament(event.target.value))
    }
    
    useEffect(()=>{
        dispatch(getTemperaments())
    },[dispatch])

    return (
        <div>
            <select id="TemperamentsFilter"  onChange={onChange} className={style.select}>
                    <option value="default">Temperaments: </option>
                    {temperaments.map(temperament => (
                        <option key={temperament.id} value={temperament.name} >{temperament.name}</option>
                    ))}
                </select>
        </div>
    )
}

export default TemperamentsFilter