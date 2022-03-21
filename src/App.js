import HomeScreen from "./screens/HomeScreen/HomeScreen.js";
import {  Navigate ,Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import {} from "react-router-dom";
import { useState } from "react";
import * as userAction from "./store/actions/userActions/userActions";
import SignScreen from "./screens/SigninScreen/SignScreen/SignScreen";
import CodeEmailScreen from "./screens/SigninScreen/ResetPassScreen/CodeEmailScreen/CodeEmailScreen.js";
import CodeVerificationScreen from "./screens/SigninScreen/ResetPassScreen/CodeVerificationScreen/CodeVerificationScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import AboutUs from "./screens/AboutUsScreen/AboutUsScreen";
import CartScreen from "./screens/CartScreen/CartScreen";
import UserinfoScreen from "./screens/ProfileScreen/UserinfoScreen/UserinfoScreen.js";
import ComplaintScreen from "./screens/ProfileScreen/ComplaintScreen/ComplaintScreen";
import OrdersScreen from "./screens/ProfileScreen/OrdersScreen/OrdersScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen.js";
import ShippingScreen from "./screens/ShippingScreen/ShippingScreen";
import CreditCardScreen from "./screens/PaymentScreen/CreditCardScreen/CreditCardScreen";
import JazzCashScreen from "./screens/PaymentScreen/JazzCashScreen/JazzCashScreen";
import * as userActions from "./store/actions/userActions/userActions";
import { diff_minutes } from "./APIFunctionsFolder/APIFunctionsFile";
import ErrorScreen from './screens/ErrorScreen/ErrorScreen'
import React, { useEffect } from "react";

const App = (props) => {
  useEffect(async () => {
    const USER_LOGIN_INFO = JSON.parse(localStorage.getItem("LOGIN_INFO"));
      if (!(USER_LOGIN_INFO==null)) {
      // props.updateLoginData(USER_LOGIN_INFO.access, USER_LOGIN_INFO.time);
      props.Update_Login_action(USER_LOGIN_INFO.access, USER_LOGIN_INFO.time)
    } else {
      props.Update_Login_action(null,null);
    }
  }, []);

  const isLoggedin = () => {
   
    const date = new Date();
    if (props.access == null) return false;
    const timeDiff = diff_minutes(date.getTime(), props.timeAdded);
    if (timeDiff < 50) return true;
    else return false;
  };
  var isLogin = isLoggedin();

  return (
    <div>
      <Router>
        <Routes>
        
        <Route path="/" element={<HomeScreen  />} exact />
   
       <Route path='/about' element={<AboutUs />} />
       <Route path='/cart' element={<CartScreen />} />
       <Route path={`/product/:id`} element={<ProductScreen />} />

       {isLogin?<Route path='/signin' element={<HomeScreen />} />:<Route path='/signin' element={<SignScreen />} />}
       {isLogin?<Route path='/profile' element={<UserinfoScreen />} />:<Route path='/signup' element={<RegisterScreen />} />}
       {isLogin?<Route path='/codeEmail' element={<UserinfoScreen />} />:<Route path='/codeEmail' element={<CodeEmailScreen />} />}
       {isLogin?<Route path='/codeverification' element={<UserinfoScreen />} />:<Route path='/codeverification' element={<CodeVerificationScreen />} />}
       {/* {isLogin?<Route path='/resetPassword' element={<UserinfoScreen />} />:<Route path='/resetPassword' element={<ResetPassScreen />} />} */}

       {isLogin?<Route path='/profile' element={<UserinfoScreen />} />:<Route path='/profile' element={<SignScreen />} />}
       {isLogin?<Route path='/complaint' element={<ComplaintScreen />} />:<Route path='/complaint' element={<SignScreen />} />}
       {isLogin?<Route path='/orders' element={<OrdersScreen />} />:<Route path='/orders' element={<SignScreen />} />}
       {isLogin?<Route path='/shipinfo' element={<ShippingScreen />} />:<Route path='/shipinfo' element={<SignScreen />} />}
       {isLogin?<Route path='/creditdetail' element={<CreditCardScreen />} />:<Route path='/creditcard' element={<SignScreen />} />}
       {isLogin?<Route path='/jazzcash' element={<JazzCashScreen />} />:null}

          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    access: state.Update_Login_reducer.access,
    timeAdded: state.Update_Login_reducer.timeAdded,
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Update_Login_action: (access, timeAdded) =>{
      dispatch(userActions.Update_Login_action(access, timeAdded))

    },
   
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
