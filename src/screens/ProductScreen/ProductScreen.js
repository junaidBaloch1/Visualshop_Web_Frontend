import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.js';
import {Link} from 'react-router-dom'
import { Container } from '@material-ui/core';
import {useStyles} from './ProductScreenStyle'
const ProductScreen = () => {
  const classes = useStyles();
  return(

    <div>
      <Navbar/>
        <h1>This is product detail screen</h1>
        <Container>
        <button className={classes.Button}>Add to Cart</button> 
        <Link to='/shippinginfo'> <button className={classes.Button}>Buy Now</button> </Link>
        </Container>
    </div>
  ) 
};

export default ProductScreen;
