import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar.js';
import {Link} from 'react-router-dom';
import { Container } from '@material-ui/core';
import {useStyles} from './ComplaintScreenStyle'
import MyContainer from '../../../Components/Container/Container'

const ComplaintScreen = () => {
  const classes = useStyles();
  return(

   <MyContainer>
    
       <h1>This is complaint id screen</h1>

       <Container>
        <Link className={classes.links} to='/profile'>user Info</Link>
        <Link className={classes.links} to='/complaint'>User Complaint</Link>
        <Link className={classes.links} to='/orders'>User orders Detail</Link>
        <Link className={classes.links} to='/signin'>Logout</Link>
        
        </Container>
   </MyContainer>

  ) 
};

export default ComplaintScreen;
