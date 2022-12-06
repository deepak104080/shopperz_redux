import {actionTypes} from '../constants/actionsTypes';

const initialState = {
    products: [],
}

export const productReducer = (state = {}, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.SET_PRODUCTS: 
            return {...state, products: payload}
        default: 
            return state;
    }
}