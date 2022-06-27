import {STORE_CART_PRODUCTS} from '../../constants/cartConstants/cartConstants';

export const store_cart_product_action = (Cart_product) => {
    return {
        type: STORE_CART_PRODUCTS,
        Cart_product:Cart_product,
    };
};