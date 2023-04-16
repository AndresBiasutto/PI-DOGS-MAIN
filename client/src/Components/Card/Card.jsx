const Card= (props)=>{
    const {image, name, temperament, weight}=props;
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{weight}</p>
            <p>{temperament}</p>
        </div>
    )
}

export default Card;