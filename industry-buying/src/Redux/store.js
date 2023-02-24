import { legacy_createStore, combineReducers } from "redux";
import {reducer as productReducer} from "./Product/reducer";


const rootReducer = combineReducers({
     
    productReducer: productReducer
});

export const store = legacy_createStore(rootReducer);