import { useDispatch } from "react-redux"
import { getOrigin, getDogs } from "../../redux/actions"
import style from "./OriginFilter.module.css"

const OriginFilter = () => {
    const dispatch = useDispatch()
    const reset = () => {
        return dispatch(getDogs())
    }
    const handleStatus = (event) => {
        console.log(event.target.value)
        if (event.target.value === "") {
            return reset()
        }
        dispatch(getOrigin(event.target.value))
    };

    return (
        <div className={style.container}>
            <select name="originFilter" id="" onChange={handleStatus} className={style.select}>
                <option value="">Origin: </option>
                <option value="api">api</option>
                <option value="bdd">bdd</option>
            </select>
        </div>
    )
}

export default OriginFilter