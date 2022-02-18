import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar.js';
import { Container } from '@material-ui/core';
import {Link} from 'react-router-dom'
import {useStyles} from './CreditCardScreenStyle'
import MyContainer from '../../../Components/Container/Container'

const CreditCardScreen = () => {
  const classes = useStyles();
  return(
    <MyContainer>
      
        <h1>This is credit card screen </h1>
        <Container>
        <Link to='/'><button className={classes.Button}>Add More Product</button></Link> 
        <Link to='/ordersDetails'> <button className={classes.Button}>Buy</button> </Link>
        <Link to='/jazzcash'> <button className={classes.Button}>Choose another Method</button> </Link>

        </Container>

    </MyContainer>
  ) 
};

export default CreditCardScreen;
