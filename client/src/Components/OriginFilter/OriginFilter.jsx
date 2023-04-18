import { useDispatch } from "react-redux"
import { getOrigin, getDogs } from "../../redux/actions"

const OriginFilter = () => {
    const dispatch = useDispatch()
    const handleStatus = (event) => {
        console.log(event.target.value)
        if (event.target.value === "") {
            dispatch(getDogs())
        }
        dispatch(getOrigin(event.target.value))
    };

    return (
        <div>
            <label htmlFor="originFilter">Origen</label>
            <select name="originFilter" id="" onChange={handleStatus}>
                <option value="">Sin orden</option>
                <option value="api">api</option>
                <option value="bdd">bdd</option>
            </select>
        </div>
    )
}

export default OriginFilter