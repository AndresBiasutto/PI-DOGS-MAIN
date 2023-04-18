import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import SearchBar from "../../Components/SearchBar/SearchBar";
import OriginFilter from "../../Components/OriginFilter/OriginFilter";
import OrderFilter from "../../Components/OrderFilter/OrderFilter";
import AzFilter from "../../Components/AzFilter/AzFilter";
import TemperamentsFilter from "../../Components/TemperamentsFilter/TemperamentsFilter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";

const Home = () => {
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getDogs())
    },[dispatch])
    return (
        <div>
            <SearchBar />
            <OriginFilter />
            <OrderFilter />
            <AzFilter />
            <TemperamentsFilter />
            <CardsContainer />
        </div>
    )
}
export default Home;