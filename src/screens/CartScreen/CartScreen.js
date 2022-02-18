import { Container } from '@material-ui/core';
import React from 'react';
import MyContainer from '../../Components/Container/Container'
import {Link} from 'react-router-dom' 
import {useStyles} from "./CartScreenStyle"

const CartScreen = () => {
  const classes = useStyles();
  return(
    <MyContainer>
     
        <h1>This is Cart Screen</h1>
        <Container>
       
        <Link to='/shipinfo'> <button className={classes.Button}>Checkout</button></Link>

        </Container>
    </MyContainer>
  ) 
};

export default CartScreen;
