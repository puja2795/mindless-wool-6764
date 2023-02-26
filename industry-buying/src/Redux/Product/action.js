import axios from "axios";
import {
  GET_PPRODUCTS_FAILURE,
  GET_PPRODUCTS_REQUEST,
  GET_PPRODUCTS_SUCCESS,
  POST_PPRODUCTS_CART_FAILURE,
  POST_PPRODUCTS_CART_REQUEST,
  POST_PPRODUCTS_CART_SUCCESS,
  DELETE_ITEM_SUCCESS,
} from "./actionType";

export const productRequestAction = () => {
  return { type: GET_PPRODUCTS_REQUEST };
};

export const productSuccessAction = (payload) => {
  return { type: GET_PPRODUCTS_SUCCESS, payload: payload };
};

export const productFailureAction = () => {
  return { type: GET_PPRODUCTS_FAILURE };
};

export const getData = () => (dispatch) => {
  dispatch(productRequestAction());

  axios
    .get(`http://localhost:8080/powertools`)
    .then((res) => {
      // console.log(res.data);
      dispatch(productSuccessAction(res.data));
    })
    .catch((err) => {
      // console.log(err);
      dispatch(productFailureAction());
    });
};

// Cart Post

export const postCartRequestAction = () => {
  return { type: POST_PPRODUCTS_CART_REQUEST };
};

export const postCartSuccessAction = (payload) => {
  return { type: POST_PPRODUCTS_CART_SUCCESS, payload: payload };
};

export const postCartFailureAction = () => {
  return { type: POST_PPRODUCTS_CART_FAILURE };
};

export const deleteItemAction = (id) => {
  return { type: DELETE_ITEM_SUCCESS, payload: id };
};

export const handleCart = (id, payload) => (dispatch) => {
  // console.log("Product");
  //console.log(payload);

  dispatch(postCartRequestAction());

  axios
    .post(`http://localhost:8080/cart`, payload)
    .then((res) => {
      console.log(res.data);
      dispatch(postCartSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(postCartFailureAction());
      console.log(err);
    });
};

export const deleteItem = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:8080/powertools/${id}`)
    .then(() => {
      dispatch(deleteItemAction(id));
    })
    .catch((err) => {
      console.log(err);
    });
};
