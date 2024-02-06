import {ADD_TO_CART, REMOVE_FROM_CART} from './constant'

export function addToCart(item){
    // console.log("action data:item",item)
    return {
        type:ADD_TO_CART,
        data:item
    }
}

export function removeFromCart(item){
    return {
        type:REMOVE_FROM_CART,
        data:item
    }
}

