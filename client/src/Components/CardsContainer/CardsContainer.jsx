import Card from "../Card/Card"
import {useSelector} from "react-redux";

const CardsContainer= ()=>{

    const Dogs= useSelector(state=>state.dogs)
    return (

        

        <div>
            <h1>Cards Container</h1>
            {Dogs.map((dog)=>{
                return <Card 
                    key={dog.id}
                    image= {dog.image}
                    name={dog.name}
                    temperament={dog.temperament}
                    weight={dog.weight}
                />
            })}
        </div>
    )
}

export default CardsContainer;