import React from 'react'
import { useStyles } from './CodeEmailScreenStyle'
import { Link } from "react-router-dom";
import Navbar from '../../../../Components/Navbar/Navbar';
const CodeEmailScreen = () => {

  const classes = useStyles();

  return (
    <div>
      <Navbar/>
       <h1>The screen where user enter email to which to code is send CodeEmailScreen</h1> 

      <Link to="/codeVerify"><button className={classes.Button}>Submit</button></Link> 

      <Link to="/signin"><button className={classes.Button}>Login Here</button></Link> 
    </div>
  )
}

export default CodeEmailScreen