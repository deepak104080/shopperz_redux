import { actionTypes } from "../constants/actionsTypes";

export const setProducts = (response) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: response
    }
}