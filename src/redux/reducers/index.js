import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
//import all reducers

const reducers = combineReducers({
    product: productReducer,
})

export default reducers;