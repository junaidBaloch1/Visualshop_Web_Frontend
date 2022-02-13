import React from 'react';
import Navbar from "../../Components/Navbar/Navbar.js"
import {Link} from 'react-router-dom'
import { Container } from '@material-ui/core';
import {useStyles} from './ShippingScreenStyle'

const ShippingScreen = () => {
  const classes = useStyles();
    return (
    <div>
      <Navbar/>
        <h1>This is shipping info screen</h1>
        <Container> 
        <Link to='/creditdetail'> <button className={classes.Button}>Submit info Continue</button> </Link>
        </Container>
    </div>
    
  )
};

export default ShippingScreen;
