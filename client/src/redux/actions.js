import axios from "axios";

export const GET_DOGS= "GET_DOGS";
export const GET_DOG= "GET_DOG"
export const GET_TEMPERAMENTS= "GET_TEMPERAMENTS"
export const GET_DOG_BY_NAME= "GET_DOG_BY_NAME"
export const GET_ORDER= "GET_ORDER"
export const GET_ORIGIN="GET_ORIGIN"
export const GET_ORDER_AZ="GET_ORDER_AZ"
export const GET_DOG_BY_TEMPERAMENT="GET_DOG_BY_TEMPERAMENT"
export const CLEAN_DETAIL="CLEAN_DETAIL"
export const DELETE_DOG="DELETE_DOG"

export const getDogs = ()=> {
    return async (dispatch)=>{
        const apiData= (await axios.get(`http://localhost:3001/dogs`)).data
        dispatch({type: GET_DOGS, payload: apiData})
    }
}
export const getDog = (id)=> {
    return async (dispatch)=>{
        const apiData= (await axios.get(`http://localhost:3001/dogs/${id}`)).data
        dispatch({type: GET_DOG, payload: apiData})
    }
}
export const getTemperaments= ()=>{
    return async (dispatch)=>{
        const apidata= await axios.get(`http://localhost:3001/temperaments`)
        const temperaments= apidata.data
        dispatch({type: GET_TEMPERAMENTS, payload: temperaments})
    }
}
export const getDogByName= (name)=>{
    return async (dispatch)=>{
        const apidata= (await axios.get(`http://localhost:3001/dogs?name=${name}`)).data
        dispatch({type: GET_DOG_BY_NAME, payload: apidata})
    }
}
export const getOrder= (order)=>{
    return async (dispatch)=>{
        const apidata= (await axios.get(`http://localhost:3001/dogs/order?orderby=${order}`)).data
        dispatch({type: GET_ORDER, payload: apidata})
    }
}
export const getOrigin= (origin)=>{
    return async (dispatch)=>{
        const apidata= (await axios.get(`http://localhost:3001/dogs/origin?origin=${origin}`)).data
        dispatch({type: GET_ORIGIN, payload: apidata})
    }
}
export const getOrderAz= (azorder)=>{
    return async (dispatch)=>{
        const apidata= (await axios.get(`http://localhost:3001/dogs/azorder?azorder=${azorder}`)).data
        dispatch({type: GET_ORDER_AZ, payload: apidata})
    }
}
export const getDogsByTemperament=(temporder)=>{
    return async (dispatch)=>{
        const apidata= (await axios.get(`http://localhost:3001/dogs/temporder?temporder=${temporder}`)).data
        dispatch({type: GET_DOG_BY_TEMPERAMENT, payload: apidata})
    }
}
export const DeleteDog=(id)=>{
    return async (dispatch)=>{
        await axios.delete(`http://localhost:3001/dogs/delete/${id}`).data
        dispatch({type: DELETE_DOG, payload: id})      
    }
}
export const cleanDetail=()=>{
    return {type:CLEAN_DETAIL}
}