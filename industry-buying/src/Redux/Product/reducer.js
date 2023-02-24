import { GET_PPRODUCTS_FAILURE, GET_PPRODUCTS_REQUEST, GET_PPRODUCTS_SUCCESS } from "./actionType";


const initialState = {
    products: [],
    isLoading: false,
    isError: false,
}

export const reducer = (state = initialState, {type, payload}) => {

    switch(type) {
        case GET_PPRODUCTS_REQUEST:{
           
            return {...state, isLoading: true };
        }

        case GET_PPRODUCTS_SUCCESS:{
            return {...state, isLoading: false, products: payload, isError: false};
        }

        case GET_PPRODUCTS_FAILURE:{
            return {...state, isLoading: false, isError: true};
        }

        default:{
            return state;
        }
    }

}