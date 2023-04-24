import { useDispatch } from "react-redux"
import { getOrder, getDogs } from "../../redux/actions"
import style from "./OrderFilter.module.css"

const OrderFilter = () => {
    const dispatch = useDispatch()
    const reset = () => {
        return dispatch(getDogs())
    }
    const handleStatus = (event) => {
        if (event.target.value === "default") {
            return reset()
        }
        dispatch(getOrder(event.target.value))
    };

    return (
        <div>
            <select name="OrderFilter" id="" onChange={handleStatus} className={style.select}>
                <option value="default">Weight: </option>
                <option value="asc">asc</option>
                <option value="des">des</option>
            </select>
        </div>
    )
}

export default OrderFilter