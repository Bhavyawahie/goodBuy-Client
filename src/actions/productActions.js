import axios from 'axios'
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_CREATE_REVIEW_FAIL, PRODUCT_IMAGE_UPLOAD_FAIL, PRODUCT_IMAGE_UPLOAD_REQUEST, PRODUCT_IMAGE_UPLOAD_SUCCESS, PRODUCT_SORT_BY_RESET, PRODUCT_EXCLUDE_OUT_OF_STOCK_SET, PRODUCT_SORT_BY_PRICE_SET, PRODUCT_FILTER_BY_BRAND_SET} from '../constants/productConstants'
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../constants/productConstants'
import { logout } from './userActions'

const awsEndPoint = "https://fkh71k8n7f.execute-api.ap-south-1.amazonaws.com/production";
export const listProducts = (keyword = '', pageNumber = '', category="") => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })
        const encodedCategory = encodeURIComponent(category);
        const res = await axios.get(awsEndPoint + `/api/products?keyword=${keyword}&pageNumber=${pageNumber}&category=${encodedCategory}`)
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const sortProducts = (sortType) => (dispatch) => {
    dispatch({
        type: PRODUCT_SORT_BY_PRICE_SET,
        payload: sortType
    })
}

export const excludeOutOfStockProducts = (flag) => (dispatch) => {
    dispatch({
        type: PRODUCT_EXCLUDE_OUT_OF_STOCK_SET,
        payload: flag
    })
}

export const filteredProductsViaBrands = (brands) => (dispatch, getState) => {
    dispatch({
        type: PRODUCT_FILTER_BY_BRAND_SET,
        payload: brands
    })
}

export const clearAllFilters = () => (dispatch) => {
    dispatch({
        type: PRODUCT_SORT_BY_RESET
    })
}


export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        })
        const res = await axios.get(awsEndPoint + `/api/products/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST
        })
        const {userLogin: { userInfo }} = getState()
        const config = {
            headers: {
                'Content-type' : 'application/json',
                Authorization: `Bearer ${userInfo.token}` 
            }
        }
        await axios.delete(awsEndPoint +  `/api/products/${id}`, config)

        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
        })
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: message
        })
    }
}

export const createProduct = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST
        })
        const {userLogin: { userInfo }} = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}` 
            }
        }
        const res = await axios.post(awsEndPoint +  `/api/products/`, {} ,config)

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: message
        })
    }
}

export const uploadProductImage = (productId ,image) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_IMAGE_UPLOAD_REQUEST
        })
        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onloadend = async () => {
            const res = await axios.post(awsEndPoint + `/api/products/${productId}/image/upload`, JSON.stringify({image: reader.result}) ,config)
            dispatch({
                type: PRODUCT_IMAGE_UPLOAD_SUCCESS,
                payload: res.data
            })
        }
    } catch (error) {
        const message = error.message && error.response.data.message ? error.response.data.message : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_IMAGE_UPLOAD_FAIL,
            payload: message
        })
    }
}

export const updateProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST
        })
        const {userLogin: { userInfo }} = getState()
        const config = {
            headers: {
                'Content-type' : 'application/json',
                Authorization: `Bearer ${userInfo.token}` 
            }
        }
        const res = await axios.put(awsEndPoint + `/api/products/${product._id}`, product ,config)

        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: res.data
        })
        
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: message
        })
    }
}

export const createProductReview = (productId, review ) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_REQUEST
        })
        const {userLogin: { userInfo }} = getState()
        const config = {
            headers: {
                'Content-type' : 'application/json',
                Authorization: `Bearer ${userInfo.token}` 
            }
        }
        await axios.post(awsEndPoint + `/api/products/${productId}/reviews`, review ,config)

        dispatch({
            type: PRODUCT_CREATE_REVIEW_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}