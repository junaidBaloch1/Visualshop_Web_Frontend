import React,{useState} from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import * as userActions from '../../../store/actions/userActions/userActions'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { useStyles } from './SignScreenStyle';
import { Container } from '@material-ui/core';
import Axios from 'axios';
const SignScreen = (props) => {

  const classes = useStyles();

  const postedData = {
    email: "",
    password:"",

  }

  const loginHandler= async () => {

    try{
      const resp = await Axios.post('https://visualshopp.herokuapp.com/api/customer/auth/login', postedData);
      console.log(resp.data);
    }




    
    // Call api for data
    // if status is 200 then you got the data for login
    // Now call function to dipatch action to update data/state related to login
    // const date = new Date()
    // props.updateLoginData("token",date.getTime())

  }
  const logoutHandler=()=>{
    props.updateLoginData(null,null)
  }
  return (
    <div>
      <Navbar/>
        <h1>This is user signin screen</h1>
        <Container >
        {props.access?null:<button  className={classes.Button}  onClick={loginHandler}>Login</button>}
        {props.access?<button className={classes.Button}  onClick={logoutHandler}>Logout</button>:null}
     
        <button className={classes.Button}>Login With Google</button>

       
        <Link className={classes.links} to='/signup'>SignUp Here</Link>

        <Link className={classes.links} to='/codeEmail'>Forget Password</Link>
       
        
        </Container>
    </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(SignScreen);
