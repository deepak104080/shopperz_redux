import { actionTypes } from "../constants/actionsTypes";

export const setProducts = (response) => {
    console.log('action - set products');
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: response
    }
}