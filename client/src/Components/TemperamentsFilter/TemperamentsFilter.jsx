import { useEffect } from "react"
import { getTemperaments } from "../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import { getDogsByTemperament, getDogs } from "../../redux/actions"


const TemperamentsFilter = () => {
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getTemperaments())
    },[dispatch])

    const temperaments= useSelector(state=>state.temperaments)

    const onChange=(event)=>{
        console.log(event.target.value)
        if (event.target.value === "default") {
            dispatch(getDogs())
        }
        dispatch(getDogsByTemperament(event.target.value))
    }

    return (
        <div>
            <label htmlFor="TemperamentsFilter">Temperaments filter</label>
            <select id="TemperamentsFilter"  onChange={onChange}>
                    <option value="default">sin orden</option>
                    {temperaments.map(temperament => (
                        <option key={temperament.id} value={temperament.name} >{temperament.name}</option>
                    ))}
                </select>
        </div>
    )
}

export default TemperamentsFilter