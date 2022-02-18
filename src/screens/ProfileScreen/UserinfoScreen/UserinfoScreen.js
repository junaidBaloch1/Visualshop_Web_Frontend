import React from 'react';
import Navbar from "../../../Components/Navbar/Navbar.js"
import { useStyles } from './UserinfoScreenStyle';
import {Link} from "react-router-dom"
import { Container } from '@material-ui/core';
import * as userActions from '../../../store/actions/userActions/userActions'
import { connect } from 'react-redux';
import MyContainer from '../../../Components/Container/Container'

const UserinfoScreen = (props) => {
 
 const classes = useStyles();
 const UserLogoutHandeler = () =>{
    
     props.updateLoginData(null,null);
     var USER_INFO_KEY = localStorage.key('LOGIN_INFO');
     localStorage.clear(USER_INFO_KEY);
 }

 
  return(
  
    <MyContainer>
      
        <h1>This is user personal info screen</h1>
        <Container>
        <Link className={classes.links} to='/profile'>user Info</Link>
        <Link className={classes.links} to='/complaint'>User Complaint</Link>
        <Link className={classes.links} to='/orders'>User orders Detail</Link>
        <Link className={classes.links} to='/signin'  onClick={UserLogoutHandeler}>Logout</Link>
        
        </Container>
    </MyContainer>
  ) 
};


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
export default connect(mapStateToProps,mapDispatchToProps)(UserinfoScreen);