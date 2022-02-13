import { Container } from '@material-ui/core';
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.js';
import {Link} from 'react-router-dom' 
import {useStyles} from "./CartScreenStyle"

const CartScreen = () => {
  const classes = useStyles();
  return(
    <div>
      <Navbar/>
        <h1>This is Cart Screen</h1>
        <Container>
       
        <Link to='/shippinginfo'> <button className={classes.Button}>Checkout</button></Link>

        </Container>
    </div>
  ) 
};

export default CartScreen;
