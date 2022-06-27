import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import {Update_Login_reducer} from './reducers/userReducers/userReducers'
import {get_all_product_reducer,filtered_product_reducer,search_image_product_reducer} from './reducers/productReducers/productReducers'
import {store_cart_product_reducer} from './reducers/cartReducers/cartReducers'





const rootReducer = combineReducers({
  Update_Login_reducer: Update_Login_reducer,
  get_all_product_reducer:get_all_product_reducer,
  filtered_product_reducer:filtered_product_reducer,
  store_cart_product_reducer:store_cart_product_reducer,
  search_image_product_reducer:search_image_product_reducer,

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
