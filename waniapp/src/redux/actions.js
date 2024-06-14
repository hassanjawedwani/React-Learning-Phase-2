import { ADDTOCART, REMOVETOCART } from "./actionTypes"

export const addToCart = (data) => {
    return {
        type: ADDTOCART,
        data
    }
};

export const removeToCart = (data) => {
    return {
        type: REMOVETOCART,
        data
    }
}