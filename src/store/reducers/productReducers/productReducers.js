import {GET_ALL_PRODUCTS} from '../../constants/productConstants/productConstants';

const initialState = {
    products:null,
}

export const getProductData = (state, action) => {

    const newData = {
      products : action.products
    }

    return {
         
        ...state,
        ...newData,

    }
}

export const get_all_product_reducer = (state = initialState, action ) =>{

    switch ( action.type ) {
        case GET_ALL_PRODUCTS: return getProductData(state, action);
        default:
            return state;
    }
} 