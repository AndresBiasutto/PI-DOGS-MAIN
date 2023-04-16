import { GET_DOG, GET_DOGS } from "./actions";

const initialState= {
    dogs:[],
    dog:{}
};

const rootReducer=(state= initialState, action)=>{
    switch (action.type) {
        case GET_DOGS:
            return {...state, dogs: action.payload}
        case GET_DOG:
            return {...state, dog: action.payload}
        default:
            return {...state};
    }
}

export default rootReducer;