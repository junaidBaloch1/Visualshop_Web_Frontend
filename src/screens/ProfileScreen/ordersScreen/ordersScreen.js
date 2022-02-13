import React from 'react';
import Navbar from "../../../Components/Navbar/Navbar.js"
import { useStyles } from './OrdersScreenStyle';
import {Link} from "react-router-dom"
import { Container } from '@material-ui/core';
const OrdersScreen = () => {
  const classes =useStyles();
  return(

    <div>
      <Navbar/>
        <h1>This is number of orders and detail screen</h1>
        <Container>
        <Link className={classes.links} to='/userinfo'>user Info</Link>
        <Link className={classes.links} to='/usercomplaint'>User Complaint</Link>
        <Link className={classes.links} to='/ordersDetails'>User orders Detail</Link>
        <Link className={classes.links} to='/signin'>Logout</Link>
        
        </Container>
    </div>
  ) 
};

export default OrdersScreen;
