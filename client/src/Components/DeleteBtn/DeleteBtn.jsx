import { useDispatch } from "react-redux";
import { DeleteDog, getDogs } from "../../redux/actions";
import style from "./DeleteBtn.module.css"

const DeleteBtn= (props)=>{
    const {id}= props
    const dispatch= useDispatch()

    const clickHandler=(e)=>{
        e.preventDefault()
        dispatch(DeleteDog(id))
        dispatch(getDogs())
        alert("Registro eliminado")
    }

    return (
        <div>
            <button onClick={clickHandler} className={style.boton}>X</button>
        </div>
    )
}

export default DeleteBtn;