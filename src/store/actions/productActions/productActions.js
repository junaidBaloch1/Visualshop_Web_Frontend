import {GET_ALL_PRODUCTS} from '../../constants/productConstants/productConstants'
export const get_all_product_action = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
        products:products,
    };
};