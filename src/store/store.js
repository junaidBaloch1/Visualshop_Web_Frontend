import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import {Update_Login_reducer} from './reducers/userReducers/userReducers'





const rootReducer = combineReducers({
  Update_Login_reducer: Update_Login_reducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
