import {GET_ALL_PRODUCTS} from '../../constants/productConstants/productConstants'
export const GET_ALL_PRODUCTS = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
        products:products,
    };
};