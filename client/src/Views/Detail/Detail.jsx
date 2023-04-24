import { getDog, cleanDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import scanlines from "../../imagenes/scanlines.png"
import style from "./Detail.module.css"


const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const dog = useSelector(state => state.dog)
    const temperament = dog.Temperaments;
    const tempReady = temperament && temperament[0]?.name; 
    useEffect(() => {
        dispatch(getDog(id))
        return () => dispatch(cleanDetail())
    }, [dispatch, id])

    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <img src={dog.image} alt={dog.name} className={style.imagen} />
                <img src={scanlines} alt={dog.name} className={style.scanlines} />
            </div>
            
            <div className={style.texts}>
                <h1 className={style.name}>{dog.name}</h1>
                <p className={style.text}>Weight: {dog.weight} </p>
                <p className={style.text}>Height: {dog.height} </p>
                <p className={style.text}>Life span: {dog.life_span} </p>
                <p className={style.text}>Temperament: {dog.temperament? dog.temperament: tempReady} </p>
            </div>
        {console.log(tempReady)}
        </div>
    )
}
export default Detail;