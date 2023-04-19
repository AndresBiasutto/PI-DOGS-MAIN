import { useDispatch } from "react-redux"
import { getOrderAz, getDogs } from "../../redux/actions"

const AzFilter = () => {
    const dispatch = useDispatch()

    const handleStatus = (event) => {
        if (event.target.value === "default") {
            dispatch(getDogs())
        }
        dispatch(getOrderAz(event.target.value))
    };

    return (
        <div>
            <label htmlFor="OrderFilter">Order By Alphabet</label>
            <select name="OrderFilter" id="" onChange={handleStatus}>
                <option value="default">Sin orden</option>
                <option value="az">a-z</option>
                <option value="za">z-a</option>
            </select>
        </div>
    )
}

export default AzFilter