import React from 'react';
import Navbar from "../../Components/Navbar/Navbar.js"
import {Link} from "react-router-dom"
import {useStyles} from "./RegisterScreenStyle"
import { Container } from '@material-ui/core';
const RegisterScreen = () => {

   const classes = useStyles();

  return(
    <div>
      
      <Navbar/>

        <h1>This is user register signup screen </h1>
        <Container>
        <Link to="/userinfo"><button className={classes.Button}>Signup</button></Link> 
        <button className={classes.Button}>Signup with Google</button>
        <Link className={classes.links} to="/signin">Login Here</Link> 
        </Container>
    </div>
  )
};

export default RegisterScreen;
