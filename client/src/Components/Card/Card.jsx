import { Link } from "react-router-dom";

const Card= (props)=>{
    const {id, image, name, temperament, weight}=props;
    return (
        <div style={{border: "2px solid black"}}>
            <img src={image} alt="" style={{width: "500px"}} />
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>   
            <p>{weight}</p>
            <p>{temperament}</p>
        </div>
    )
}

export default Card;