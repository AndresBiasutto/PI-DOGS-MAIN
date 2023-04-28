import { Link } from "react-router-dom"
import style from "./Landing.module.css"
import scanlines from "../../imagenes/scanlines.png"
import dogImg1 from "../../imagenes/dogpxlart1.png"
import dogImg2 from "../../imagenes/dogpxlart2.png"
import dogImg3 from "../../imagenes/dogpxlart3.png"
import dogImg4 from "../../imagenes/dogpxlart4.png"
import dogImg5 from "../../imagenes/dogpxlart5.png"
import dogImg6 from "../../imagenes/dogpxlart6.png"

const Landing = () => {
    return (
        <div className={style.landing}>
            <img src={dogImg1} alt="dog1" className={`${style.dogImg} ${style.dog1}`} />
            <img src={dogImg2} alt="dog1" className={`${style.dogImg} ${style.dog2}`} />
            <img src={dogImg3} alt="dog1" className={`${style.dogImg} ${style.dog3}`} />
            <img src={dogImg4} alt="dog1" className={`${style.dogImg} ${style.dog4}`} />
            <img src={dogImg5} alt="dog1" className={`${style.dogImg} ${style.dog5}`} />
            <img src={dogImg6} alt="dog1" className={`${style.dogImg} ${style.dog6}`} />
            <img src={scanlines} alt="dog1" className={style.scanLines} />
            <h1 className={style.titulo}>DOGS API</h1>
            <Link to={"/home"} className={style.boton}>watch all dogs</Link>
            <p className={style.p}>PI Henry Dogs, creado con mucho ❤️ por <span className={style.span}>Andrés Biasutto</span></p>
        </div>
    )
}
export default Landing;