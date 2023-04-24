import { Link } from "react-router-dom"
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar"



const NavBar = () => {
    return (
        <div className={style.navMain}>
            <div className={style.navBar}>
                <Link to="/" className={style.logoLink}><h2 className={style.logo} >DOGS API</h2></Link>
                <nav className={style.navMenu}>
                    <Link to="/home" className={style.boton}>All dogs</Link>
                    <Link to="/form" className={style.boton}>New dog</Link>
                    <SearchBar />
                </nav>
            </div>
        </div >

    )
}

export default NavBar;