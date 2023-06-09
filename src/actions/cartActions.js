import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const res = await axios.get(`https://fkh71k8n7f.execute-api.ap-south-1.amazonaws.com/production/api/products/${id}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: res.data._id,
            name: res.data.name,
            image: res.data.image,
            price: res.data.price,
            countInStock: res.data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => async (dispatch, getState) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => async (dispatch, getState) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data
    })
    localStorage.setItem('paymentMethod', JSON.stringify(data))
}

// export const resetItemsFromCart = () => async (dispatch, getState) => {
//     dispatch({
//         type: CART_RESET_ITEMS,
//     })
//     localStorage.setItem('cartItems', JSON.stringify([]))
// }