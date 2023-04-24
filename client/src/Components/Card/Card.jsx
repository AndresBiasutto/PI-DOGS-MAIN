import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import style from "./Card.module.css"
import scanlines from "../../imagenes/scanlines.png"

const Card = (props) => {
    const { id, image, name, temperament, weight, created } = props;
    return (

        <Link to={`/detail/${id}`} className={style.li}>

            <div className={style.container}>

                <div className={style.topBar}>
                    <h2 className={style.name}>{name}</h2>
                    {created && <DeleteBtn id={id} className={style.delete} />}
                </div>

                <img src={image} alt="" className={style.imagen} />
                <img src={scanlines} alt="" className={style.scanlines} />

                <div className={style.texts}>
                    <p className={style.text1}><span>weight: </span> {weight}</p>
                    <p className={style.text2}><span>temperament: </span> {temperament}</p>
                </div>

            </div>
        </Link>
    )
}

export default Card;