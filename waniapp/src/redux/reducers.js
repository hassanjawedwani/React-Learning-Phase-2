import { ADDTOCART, REMOVETOCART } from "./actionTypes"

const initialState = {
    data: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADDTOCART:
            return {
                ...state,
                data: [...state.data, action.data]
            }
        case REMOVETOCART:
            return {
                ...state,
                data: state.data.slice(0, state.data.length-1)
            }
        default:
            return state;
    }
    
}

export default cartReducer;