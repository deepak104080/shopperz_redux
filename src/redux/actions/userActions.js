import { actionTypes } from "../constants/actionsTypes";

export const setLogin = (response) => {
    return {
        type: actionTypes.SET_LOGIN,
        payload: response
    }
}

export const setLogout = () => {
    return {
        type: actionTypes.SET_LOGOUT
    }
}