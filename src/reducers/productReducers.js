//The reducer dealing with state of productList on the Homepage
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_RESET, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_RESET, PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_CREATE_REVIEW_FAIL, PRODUCT_CREATE_REVIEW_RESET, PRODUCT_IMAGE_UPLOAD_SUCCESS, PRODUCT_IMAGE_UPLOAD_FAIL, PRODUCT_IMAGE_UPLOAD_RESET, PRODUCT_IMAGE_UPLOAD_REQUEST, PRODUCT_SORT_BY_SET, PRODUCT_SORT_BY_LOW_TO_HIGH_SET, PRODUCT_SORT_BY_HIGH_TO_LOW_SET} from '../constants/productConstants'
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST :
            return { loading: true, products: []}
        case PRODUCT_LIST_SUCCESS :
            return { loading: false, products: action.payload.products, pages: action.payload.pages, page: action.payload.page}
        case PRODUCT_LIST_FAIL :
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const productSortReducer = (state = {}, action) => {
    switch(action.type) {
        case PRODUCT_SORT_BY_LOW_TO_HIGH_SET:
            return {
                ...state, 
                products: action.payload.products.sort((productA, productB) => productA.price - productB.price)
            }
        case PRODUCT_SORT_BY_HIGH_TO_LOW_SET:
            return {
                ...state, 
                products: action.payload.products.sort((productA, productB) => productB.price - productA.price)
            }
        default: 
            return state    
    }
}

export const productDetailsReducer = (state = { product: { reviews : [] } }, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST :
            return { ...state, loading: true} 
        case PRODUCT_DETAILS_SUCCESS :
            return { loading: false, product: action.payload}
        case PRODUCT_DETAILS_FAIL :
            return { loading: false, error: action.payload}
        default:
            return state
    }
}


export const productDeleteReducer = (state = { product: {} }, action) => {
    switch(action.type) {
        case PRODUCT_DELETE_REQUEST :
            return { loading: true, }
        case PRODUCT_DELETE_SUCCESS :
            return { loading: false, success: true}
        case PRODUCT_DELETE_FAIL :
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const productCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case PRODUCT_CREATE_REQUEST :
            return { loading: true }
        case PRODUCT_CREATE_SUCCESS :
            return { loading: false, success: true, product: action.payload}
        case PRODUCT_CREATE_FAIL :
            return { loading: false, error: action.payload}
        case PRODUCT_CREATE_RESET:
            return {

            }    
        default:
            return state
    }
}

export const productUpdateReducer = (state = { product: {} }, action) => {
    switch(action.type) {
        case PRODUCT_UPDATE_REQUEST :
            return { loading: true }
        case PRODUCT_UPDATE_SUCCESS :
            return { loading: false, success: true, product: action.payload}
        case PRODUCT_UPDATE_FAIL :
            return { loading: false, error: action.payload}
        case PRODUCT_UPDATE_RESET :
            return {
                product: {}
            }
        default:
            return state
    }
}

export const productReviewCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST :
            return { loading: true }
        case PRODUCT_CREATE_REVIEW_SUCCESS :
            return { loading: false, success: true}
        case PRODUCT_CREATE_REVIEW_FAIL :
            return { loading: false, error: action.payload}
        case PRODUCT_CREATE_REVIEW_RESET :
            return {}
        default:
            return state
    }
}

export const productPictureUpdateReducer = (state={}, action) => {
    switch (action.type) {
        case PRODUCT_IMAGE_UPLOAD_REQUEST:
            return {loading : true}
        case PRODUCT_IMAGE_UPLOAD_SUCCESS:
            return {loading: false, success: true, imageURL: action.payload}
        case PRODUCT_IMAGE_UPLOAD_FAIL:
            return {loading: false, error:action.payload}
        case PRODUCT_IMAGE_UPLOAD_RESET:
            return {}
        default:
            return state
    }
}