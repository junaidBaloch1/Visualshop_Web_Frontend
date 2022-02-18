import React from 'react';
import Navbar from "../../../Components/Navbar/Navbar.js"
import { useStyles } from './OrdersScreenStyle';
import {Link} from "react-router-dom"
import { Container } from '@material-ui/core';
import MyContainer from '../../../Components/Container/Container'

const OrdersScreen = () => {
  const classes =useStyles();
  return(

    <MyContainer>
      
        <h1>This is number of orders and detail screen</h1>
        <Container>
        <Link className={classes.links} to='/profile'>user Info</Link>
        <Link className={classes.links} to='/complaint'>User Complaint</Link>
        <Link className={classes.links} to='/orders'>User orders Detail</Link>
        <Link className={classes.links} to='/signin'>Logout</Link>
        
        </Container>
    </MyContainer>
  ) 
};

export default OrdersScreen;
