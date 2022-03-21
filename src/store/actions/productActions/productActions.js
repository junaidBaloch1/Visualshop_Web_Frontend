import {GET_ALL_PRODUCTS,FILTERED_PRODUCTS} from '../../constants/productConstants/productConstants'
export const get_all_product_action = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
        products:products,
    };
};

export const filtered_product_action = (filterproduct) =>{

    return {
        type: FILTERED_PRODUCTS,

         filterproduct:filterproduct,
    };
}