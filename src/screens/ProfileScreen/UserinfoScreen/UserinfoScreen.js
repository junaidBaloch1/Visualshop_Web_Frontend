import React from 'react';
import Navbar from "../../../Components/Navbar/Navbar.js"
import { useStyles } from './UserinfoScreenStyle';
import {Link} from "react-router-dom"
import { Container } from '@material-ui/core';
const UserinfoScreen = () => {
 
 const classes = useStyles();
  return(
  
    <div>
      <Navbar/>
        <h1>This is user personal info screen</h1>
        <Container>
        <Link className={classes.links} to='/userinfo'>user Info</Link>
        <Link className={classes.links} to='/usercomplaint'>User Complaint</Link>
        <Link className={classes.links} to='/ordersDetails'>User orders Detail</Link>
        <Link className={classes.links} to='/signin'>Logout</Link>
        
        </Container>
    </div>
  ) 
};

export default UserinfoScreen;
