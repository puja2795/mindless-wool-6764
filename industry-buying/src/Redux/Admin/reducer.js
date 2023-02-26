import {
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  product: [],
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };

    case PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, product: payload };

    case POST_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };

    case EDIT_PRODUCT_SUCCESS:
      return { ...state, isError: false };

    default:
      return state;
  }
};
