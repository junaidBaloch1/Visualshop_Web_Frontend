import React from 'react';
import Navbar from "../../Components/Navbar/Navbar.js"
import {Container} from '@material-ui/core'
import {useStyles} from './HomeScreenStyle';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const classes = useStyles();
  return(
   <div>
    <Navbar/>
    <h1>This is home screen</h1>
    <Container>
   <Link to='/productdetail'> <button className={classes.Button}>See Product Detail</button> </Link>
    </Container>

  </div>
  ) 
  
};

export default HomeScreen;
