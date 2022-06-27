import {GET_ALL_PRODUCTS,FILTERED_PRODUCTS, SEARCH_IMAGE_RESULT} from '../../constants/productConstants/productConstants';

const productsInitialState = {
    products:null,
   
}

export const getProductData = (state, action) => {

    const newData = {
      products : action.products,
     
    }


    return {
         
        ...state,
        ...newData,

    }
}

export const get_all_product_reducer = (state = productsInitialState, action ) =>{

    switch ( action.type ) {
        case GET_ALL_PRODUCTS: return getProductData(state, action);
        default:
            return state;
    }
} 


// <-----------------------------------filtered products-------------------------------------->
const filterProductInitialState = {
    
    filterproduct:null,
}

export const getFilteredProduct = (state, action) =>{
    const filteredproduct = {

        filterproduct:action.filterproduct,

    }

    return {
        ...state,
        ...filteredproduct,
    }

}

export const filtered_product_reducer = (state=filterProductInitialState, action) =>{
         
    switch ( action.type ) {
        case FILTERED_PRODUCTS: return getFilteredProduct(state, action);
        default:
            return state;
    }
    
}


// <-----------------------------------search image result products-------------------------------------->
const searchImageInitialState = {
    
    image_Result:null,
}

export const search_image_Product = (state, action) =>{
    const imagesResult = {

        image_Result:action.image_Result,

    }

    return {
        ...state,
        ...imagesResult,
    }

}

export const search_image_product_reducer = (state=searchImageInitialState, action) =>{
         
    switch ( action.type ) {
        case SEARCH_IMAGE_RESULT: return search_image_Product(state, action);
        default:
            return state;
    }
    
}