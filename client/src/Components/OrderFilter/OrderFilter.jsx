import { useDispatch } from "react-redux"
import { getOrder, getDogs } from "../../redux/actions"

const OrderFilter = () => {
    const dispatch = useDispatch()

    const handleStatus = (event) => {
        if (event.target.value === "default") {
            dispatch(getDogs())
        }
        dispatch(getOrder(event.target.value))
    };

    return (
        <div>
            <label htmlFor="OrderFilter">Order by Weight</label>
            <select name="OrderFilter" id="" onChange={handleStatus}>
                <option value="default">Sin orden</option>
                <option value="asc">asc</option>
                <option value="des">des</option>
            </select>
        </div>
    )
}

export default OrderFilter