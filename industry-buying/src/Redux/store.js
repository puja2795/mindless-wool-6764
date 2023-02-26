import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import { reducer as productReducer } from "./Product/reducer";
import { reducer as adminReducer } from "./Admin/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  adminReducer,
  productReducer,
});



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
