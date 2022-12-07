import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
//import all reducers

const reducers = combineReducers({
    product: productReducer,
    user: userReducer,
})

export default reducers;