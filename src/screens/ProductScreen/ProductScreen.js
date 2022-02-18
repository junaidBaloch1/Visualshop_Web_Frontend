import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { Container } from '@material-ui/core';
import {useStyles} from './ProductScreenStyle'
import MyContainer from '../../Components/Container/Container'
const ProductScreen = () => {
  const classes = useStyles();
  const [loading,setLoading]=useState(false)
  return(

    <MyContainer loadiing={loading}>
        <h1>This is product detail screen</h1>
        <Container>
        <button className={classes.Button}>Add to Cart</button> 
        <Link to='/shipinfo'> <button className={classes.Button}>Buy Now</button> </Link>
        </Container>
    </MyContainer>
  ) 
};

export default ProductScreen;
