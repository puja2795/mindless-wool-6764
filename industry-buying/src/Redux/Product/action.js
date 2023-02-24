import { GET_PPRODUCTS_FAILURE, GET_PPRODUCTS_REQUEST, GET_PPRODUCTS_SUCCESS } from "./actionType"



export const productRequestAction = () => {
    return {type : GET_PPRODUCTS_REQUEST};
}

export const productSuccessAction = (payload) => {

    return { type: GET_PPRODUCTS_SUCCESS, payload: payload }
}

export const productFailureAction = () => {
    return { type: GET_PPRODUCTS_FAILURE };
}