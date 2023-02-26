import {
  GET_PPRODUCTS_FAILURE,
  GET_PPRODUCTS_REQUEST,
  GET_PPRODUCTS_SUCCESS,
  POST_PPRODUCTS_CART_FAILURE,
  POST_PPRODUCTS_CART_REQUEST,
  POST_PPRODUCTS_CART_SUCCESS,
  DELETE_ITEM_SUCCESS,
} from "./actionType";

const initialState = {
  products: [],
  cart: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PPRODUCTS_REQUEST: {
      return { ...state, isLoading: true };
    }

    case GET_PPRODUCTS_SUCCESS: {
      return { ...state, isLoading: false, products: payload, isError: false };
    }

    case GET_PPRODUCTS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case POST_PPRODUCTS_CART_REQUEST: {
      return { ...state };
    }

    case POST_PPRODUCTS_CART_SUCCESS: {
      return { ...state, cart: payload };
    }

    case POST_PPRODUCTS_CART_FAILURE: {
      return { ...state };
    }

    case DELETE_ITEM_SUCCESS: {
      const thisProducts = [...state.products];
      thisProducts.filter((el) => {
        if (el.id != payload) {
          return el;
        }
      });
      return { ...state, products: thisProducts };
    }

    default: {
      return state;
    }
  }
};
