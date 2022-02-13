import HomeScreen from "./screens/HomeScreen/HomeScreen.js";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
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
import { useEffect } from "react";
const App = (props) => {

  useEffect(()=>{
    console.log("Loaded")
  },[])
  return (
    <div>
     <Router>
       <Routes>
       <Route path="/" element={<HomeScreen />} exact />
       <Route path='/signin' element={<SignScreen />} />
       <Route path='/AboutUs' element={<AboutUs />} />
       <Route path='/cart' element={<CartScreen />} />
       <Route path='/signup' element={<RegisterScreen />} />
       <Route path='/codeEmail' element={<CodeEmailScreen />} />
       <Route path='/codeVerify' element={<CodeVerifyScreen />} />
       <Route path='/resetPassword' element={<ResetPassScreen />} />
       <Route path='/productdetail' element={<ProductScreen />} />


       <Route path='/userinfo' element={<UserinfoScreen />} />
       <Route path='/usercomplaint' element={<ComplaintScreen />} />
       <Route path='/ordersDetails' element={<OrdersScreen />} />
       <Route path='/shippinginfo' element={<ShippingScreen />} />
       <Route path='/creditdetail' element={<CreditCardScreen />} />
       <Route path='/jazzcash' element={<JazzCashScreen />} />
       
      
       
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
export default connect(mapStateToProps)(App);
