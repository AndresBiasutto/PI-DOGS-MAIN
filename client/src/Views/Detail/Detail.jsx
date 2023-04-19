import { getDog, cleanDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const dog = useSelector(state => state.dog)
    useEffect(() => {
        dispatch(getDog(id))
        return ()=> dispatch(cleanDetail())
    }, [dispatch, id])

    return (
        <div>
            <h1>{dog.name}</h1>
            <img src={dog.image} alt={dog.name} />
            <p>{dog.weight} </p>
            <p>{dog.height} </p>
            <p>{dog.life_span} </p>
        </div>
    )
}
export default Detail;