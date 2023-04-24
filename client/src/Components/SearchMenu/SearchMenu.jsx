import { Link } from "react-router-dom";
import style from "./SearchMenu.module.css"

const SearchMenu=(props)=>{
    const {id, name}= props;
    return(
        <div className={style.container}>
            <Link to={`/detail/${id}`} className={style.link} key={id} id={id}>{name}</Link>  
        </div>
    )
}

export default SearchMenu