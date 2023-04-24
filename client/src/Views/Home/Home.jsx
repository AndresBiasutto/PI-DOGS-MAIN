import style from "./Home.module.css"
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";
import OriginFilter from "../../Components/OriginFilter/OriginFilter";
import OrderFilter from "../../Components/OrderFilter/OrderFilter";
import AzFilter from "../../Components/AzFilter/AzFilter";
import TemperamentsFilter from "../../Components/TemperamentsFilter/TemperamentsFilter";

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogs())
    }, [dispatch])
    return (
        <div className={style.home}>
            <div className={style.orderBar}>
                <OriginFilter />
                <OrderFilter />
                <AzFilter />
                <TemperamentsFilter />
            </div>
            <CardsContainer />
        </div>
    )
}
export default Home;