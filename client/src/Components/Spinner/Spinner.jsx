import style from "./Spinner.module.css"
import spinnerImg from "../../imagenes/dogpxlart3.png"

const Spinner= ()=>{
    return(
        <div className={style.container}>
            <img src={spinnerImg} alt="" className={style.spinner} />
        </div>
    )
}

export default Spinner;