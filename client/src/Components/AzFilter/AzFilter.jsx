import { useDispatch } from "react-redux"
import { getOrderAz, getDogs } from "../../redux/actions"
import style from "./AzFilter.module.css"

const AzFilter = () => {
    const dispatch = useDispatch()
    const reset = () => {
        return dispatch(getDogs())
    }

    const handleStatus = (event) => {
        if (event.target.value === "default") {
            return reset()
        }
        dispatch(getOrderAz(event.target.value))
    };

    return (
        <div>
            <select name="OrderFilter" id="" onChange={handleStatus} className={style.select}>
                <option value="default">A - Z: </option>
                <option value="az">a-z</option>
                <option value="za">z-a</option>
            </select>
        </div>
    )
}

export default AzFilter