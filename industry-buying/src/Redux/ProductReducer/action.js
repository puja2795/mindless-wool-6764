import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionTypes"
import axios from "axios"


export const getProducctSuccess = (payload) => {
    return {
        type: GET_PRODUCT_SUCCESS, payload
    }
}
export const postProducctSuccess = () => {
    return {
        type: POST_PRODUCT_SUCCESS
    }
}

export const productRequest = () => {
    return {
        type: PRODUCT_REQUEST
    }
}

export const productFailure = () => {
    return {
        type: PRODUCT_FAILURE
    }
}

export const addProduct = (payload) =>(dispatch) => {
    dispatch(productRequest())

    axios.post("http://localhost:8080/product", payload)
        .then(() => {
            dispatch(postProducctSuccess())
        })
        .catch((err) => {
            dispatch(productFailure())
        })
}


export const getProduct = (dispatch) => {
    dispatch(productRequest())

    axios.post("http://localhost:8080/product")
        .then((res) => {
            dispatch(getProducctSuccess(res.data))
        })
        .catch((err) => {
            dispatch(productFailure())
        })
}
