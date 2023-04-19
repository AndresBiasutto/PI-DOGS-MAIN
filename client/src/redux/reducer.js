import { GET_DOG, GET_DOGS, GET_TEMPERAMENTS, GET_DOG_BY_NAME, GET_ORDER, GET_ORIGIN, GET_ORDER_AZ,GET_DOG_BY_TEMPERAMENT, CLEAN_DETAIL } from "./actions";

const initialState = {
    dogs: [],
    dog: {},
    temperaments: [],
    dogName: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return { ...state, dogs: action.payload }
        case GET_DOG:
            return { ...state, dog: action.payload }
        case GET_TEMPERAMENTS:
            return { ...state, temperaments: action.payload }
        case GET_DOG_BY_NAME:
            return { ...state, dogName: action.payload }
        case GET_ORDER:
            return { ...state, dogs: action.payload }
        case GET_ORIGIN:
            return {...state, dogs: action.payload}
        case GET_ORDER_AZ:
            return {...state, dogs: action.payload}
        case GET_DOG_BY_TEMPERAMENT:
            return {...state, dogs: action.payload}
        case CLEAN_DETAIL:
            return {...state, dog: {}}
        default:
            return { ...state };
    }
}

export default rootReducer;