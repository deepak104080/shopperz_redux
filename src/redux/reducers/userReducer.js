import { actionTypes } from "../constants/actionsTypes";

const initialState = {
    loginData: {},
}

export const userReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case actionTypes.SET_LOGIN: 
            return {...state, loginData: payload}
        case actionTypes.SET_LOGOUT:
            return {...state, loginData: {
                loginStatus: false
            }}
        default:
            return state;
    }
}