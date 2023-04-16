import axios from "axios";

export const GET_DOGS= "GET_DOGS";
export const GET_DOG= "GET_DOG"

export const getDogs = ()=> {
    return async (dispatch)=>{
        const apiData= (await axios.get(`http://localhost:3001/dogs`)).data
        dispatch({type: GET_DOGS, payload: apiData})
    }
}
export const getDog = (id)=> {
    return async (dispatch)=>{
        const apiData= (await axios.get(`http://localhost:3001/dogs${id}`)).data
        dispatch({type: GET_DOG, payload: apiData})
    }
}