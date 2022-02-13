import HomeScreen from "./screens/HomeScreen/HomeScreen.js";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import {useState} from 'react'
import * as userAction from './store/actions/userActions/userActions'
import SignScreen from './screens/SigninScreen/SignScreen/SignScreen'
import CodeEmailScreen from "./screens/SigninScreen/ResetPassScreen/CodeEmailScreen/CodeEmailScreen.js";
import CodeVerifyScreen from "./screens/SigninScreen/ResetPassScreen/CodeVerifyScreen/CodeVerifyScreen.js";
import ResetPassScreen from "./screens/SigninScreen/ResetPassScreen/ResetPassScreen/ResetPassScreen.js";
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'
import AboutUs from './screens/AboutUsScreen/AboutUsScreen'
import CartScreen from './screens/CartScreen/CartScreen';
import UserinfoScreen from "./screens/ProfileScreen/UserinfoScreen/UserinfoScreen.js";
import ComplaintScreen from "./screens/ProfileScreen/ComplaintScreen/ComplaintScreen"
import OrdersScreen from './screens/ProfileScreen/OrdersScreen/OrdersScreen'
import ProductScreen from "./screens/ProductScreen/ProductScreen.js";
import ShippingScreen from './screens/ShippingScreen/ShippingScreen';
import CreditCardScreen from './screens/PaymentScreen/CreditCardScreen/CreditCardScreen'
import JazzCashScreen from './screens/PaymentScreen/JazzCashScreen/JazzCashScreen'
import * as userActions from './store/actions/userActions/userActions'
import {diff_minutes} from './FunctionsFolder/FunctionsFile'
import React, { useEffect } from "react";
const date = new Date();
const App = (props) => {
  useEffect(async ()=>{
   const USER_LOGIN_INFO=JSON.parse(localStorage.getItem('LOGIN_INFO'));
    props.updateLoginData(USER_LOGIN_INFO.access,USER_LOGIN_INFO.time);
  },[])

  const isLoggedIn=()=>{
    if(props.access==null)
      return false
    const  timeDiff =  diff_minutes(date.getTime(), props.timeAdded);
    if(timeDiff < 50)
      return true
    else
      return false
  }
  var isLogin=isLoggedIn();
   

  return (
    <div>
     <Router>
       <Routes>
       <Route path="/" element={<HomeScreen />} exact />
       
       <Route path='/AboutUs' element={<AboutUs />} />
       <Route path='/cart' element={<CartScreen />} />
       <Route path='/productdetail' element={<ProductScreen />} />

       {isLogin?null:<Route path='/signin' element={<SignScreen />} />}
       {isLogin?null:<Route path='/signup' element={<RegisterScreen />} />}
       {isLogin?null:<Route path='/codeEmail' element={<CodeEmailScreen />} />}
       {isLogin?null:<Route path='/codeVerify' element={<CodeVerifyScreen />} />}
       {isLogin?null:<Route path='/resetPassword' element={<ResetPassScreen />} />}

       {isLogin?<Route path='/userinfo' element={<UserinfoScreen />} />:null}
       {isLogin?<Route path='/usercomplaint' element={<ComplaintScreen />} />:null}
       {isLogin?<Route path='/ordersDetails' element={<OrdersScreen />} />:null}
       {isLogin?<Route path='/shippinginfo' element={<ShippingScreen />} />:null}
       {isLogin?<Route path='/creditdetail' element={<CreditCardScreen />} />:null}
       {isLogin?<Route path='/jazzcash' element={<JazzCashScreen />} />:null}
       </Routes>
     </Router>
    </div>
  );
}



const mapStateToProps = state => {
  return {
      access:state.userReducer.access,
      timeAdded:state.userReducer.timeAdded
  };
};

const mapDispatchToProps = dispatch => {
  return {
      updateLoginData: (access,timeAdded) => dispatch(userActions.updateLoginData(access,timeAdded)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
