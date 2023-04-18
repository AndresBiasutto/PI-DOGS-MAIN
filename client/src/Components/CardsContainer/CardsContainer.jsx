import Card from "../Card/Card"
import { useSelector } from "react-redux";
import { useState } from "react";
import Paginado from "../Paginado/Paginado";

const CardsContainer = () => {

    const Dogs = useSelector(state => state.dogs)
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage] = useState(6);
    const indexOfLastdog = currentPage * dogsPerPage;
    const indexOfFirstdog = indexOfLastdog - dogsPerPage;
    const currentdogs = Dogs.slice(indexOfFirstdog, indexOfLastdog);
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (



        <div>
            {currentdogs.map((dog) => {
                return <Card
                    key={dog?.id}
                    id={dog?.id}
                    image={dog?.image}
                    name={dog?.name}
                    temperament={dog?.temperament}
                    weight={dog?.weight}
                />
            })}
            <Paginado
                dogsPerPage={dogsPerPage}
                dogs={Dogs.length}
                paginado={paginado}
            />
        </div>
    )
}

export default CardsContainer;