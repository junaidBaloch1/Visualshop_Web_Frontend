import {STORE_CART_PRODUCTS} from '../../constants/cartConstants/cartConstants';

const cart_product_InitialState = {
    Cart_product:null,
   
}
export const Cart_product_Data = (state, action) => {

    const CartData = {
        Cart_product : action.Cart_product,
     
    }


    return {
         
        ...state,
        ...CartData,

    }
}

export const store_cart_product_reducer = (state = cart_product_InitialState, action ) =>{

    switch ( action.type ) {
        case STORE_CART_PRODUCTS: return Cart_product_Data(state, action);
        default:
            return state;
    }
}