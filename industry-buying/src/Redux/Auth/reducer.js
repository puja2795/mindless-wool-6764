import { CHECK_ADMIN } from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  inAdmin: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_ADMIN:
      return { ...state, inAdmin: payload };
    default:
      return state;
  }
};
