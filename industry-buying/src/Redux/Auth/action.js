import { CHECK_ADMIN } from "./actionTypes";

export const checkAdmin = (inAdmin) => {
  return { type: CHECK_ADMIN, payload: inAdmin };
};
