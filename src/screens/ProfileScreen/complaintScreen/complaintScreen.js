import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar.js';
import {Link} from 'react-router-dom';
import { Container } from '@material-ui/core';
import {useStyles} from './ComplaintScreenStyle'
const ComplaintScreen = () => {
  const classes = useStyles();
  return(

   <div>
     <Navbar/>
       <h1>This is complaint id screen</h1>

       <Container>
        <Link className={classes.links} to='/userinfo'>user Info</Link>
        <Link className={classes.links} to='/usercomplaint'>User Complaint</Link>
        <Link className={classes.links} to='/ordersDetails'>User orders Detail</Link>
        <Link className={classes.links} to='/signin'>Logout</Link>
        
        </Container>
   </div>

  ) 
};

export default ComplaintScreen;
