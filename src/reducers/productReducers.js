//The reducer dealing with state of productList on the Homepage
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_RESET, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_RESET, PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_CREATE_REVIEW_FAIL, PRODUCT_CREATE_REVIEW_RESET, PRODUCT_IMAGE_UPLOAD_SUCCESS, PRODUCT_IMAGE_UPLOAD_FAIL, PRODUCT_IMAGE_UPLOAD_RESET, PRODUCT_IMAGE_UPLOAD_REQUEST, PRODUCT_SORT_BY_SET, PRODUCT_SORT_BY_LOW_TO_HIGH_SET, PRODUCT_SORT_BY_HIGH_TO_LOW_SET, PRODUCT_SORT_BY_LOW_TO_HIGH_RESET, PRODUCT_SORT_BY_RESET, PRODUCT_EXCLUDE_OUT_OF_STOCK_SET, PRODUCT_SORT_BY_PRICE_SET} from '../constants/productConstants'
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../constants/productConstants'

const sortAsc = (arr, field) => {
	return arr.sort(function (a, b) {
		if (a[field] > b[field]) return 1;

		if (b[field] > a[field]) return -1;

		return 0;
	});
}

const sortDesc = (arr, field) => {
	return arr.sort(function (a, b) {
		if (a[field] > b[field]) return -1;

		if (b[field] > a[field]) return 1;

		return 0;
	});
}

const addFilterIfNotExists = (filter, appliedFilters) => {
	let index = appliedFilters.indexOf(filter);
	if (index === -1) appliedFilters.push(filter);

	return appliedFilters;
}

const removeFilter = (filter, appliedFilters) => {
	let index = appliedFilters.indexOf(filter);
	appliedFilters.splice(index, 1);
	return appliedFilters;
}


export const productListReducer = (state = { products: [], appliedFilters: [], filteredProducts:[] }, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST :
            return { ...state , loading: true, products: []}
        case PRODUCT_LIST_SUCCESS :
            return { ...state, loading: false, products: action.payload.products, filteredProducts: action.payload.products.slice() ,pages: action.payload.pages, page: action.payload.page}
        case PRODUCT_LIST_FAIL :
            return { ...state, loading: false, error: action.payload}
        case PRODUCT_SORT_BY_PRICE_SET:
            let sortByPriceState = Object.assign({}, state);
            let sortedPriceArr = action.payload === "LOW_TO_HIGH" ? sortAsc(state.filteredProducts, "price") : sortDesc(state.filteredProducts, "price");
            console.log(sortedPriceArr)
            console.log(state)
            sortByPriceState.filteredProducts = sortedPriceArr;
            sortByPriceState.appliedFilters = removeFilter(
                PRODUCT_SORT_BY_PRICE_SET,
                sortByPriceState.appliedFilters
            );
            // console.log(sortByPriceState)
            return {...sortByPriceState};
        // case PRODUCT_SORT_BY_LOW_TO_HIGH_SET:
        //     let sortByLowPriceState = Object.assign({}, state);
        //     return {...sortByLowPriceState, products: sortByLowPriceState.products.sort((productA, productB) => productA.price - productB.price) }
        // case PRODUCT_SORT_BY_HIGH_TO_LOW_SET:
        //     let sortByHighPriceState = Object.assign({}, state);
        //     return {...sortByHighPriceState, products: sortByHighPriceState.products.sort((productA, productB) => productB.price - productA.price) }
        case PRODUCT_SORT_BY_RESET:
            return {...state, products: state.products.sort((a, b) => a._id.toString().localeCompare(b._id.toString())) } 
        case PRODUCT_EXCLUDE_OUT_OF_STOCK_SET:
            let newState = Object.assign({}, state);
            let filteredValues = state.filteredProducts.filter((product) => product.countInStock !== 0 )
            if(action.payload) {
                return {...state, filteredProducts: filteredValues}
            } else {
                return {...state, filteredProducts: state.products}
            }
        default:
            return state
    }
}

// export const productSortReducer = (state = {}, action) => {
//     switch(action.type) {
//         case PRODUCT_SORT_BY_LOW_TO_HIGH_SET:
//             return {
//                 ...state, 
//                 products: action.payload
//             }
//         case PRODUCT_SORT_BY_HIGH_TO_LOW_SET:
//             return {
//                 ...state, 
//                 products: action.payload
//             }
//         default: 
//             return state    
//     }
// }

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

