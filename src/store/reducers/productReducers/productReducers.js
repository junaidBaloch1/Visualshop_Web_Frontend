import {GET_ALL_PRODUCTS} from '../../constants/productConstants/productConstants';

const initialState = {
    products:null,
}

const getProductData = (state, action) => {

    const newData = {
      product : action.products
    }

    return {
         
        ...state,
        ...newData,

    }
}
