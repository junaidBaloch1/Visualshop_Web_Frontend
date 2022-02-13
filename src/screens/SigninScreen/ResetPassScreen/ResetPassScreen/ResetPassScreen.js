import React from 'react';
import Navbar from "../../../../Components/Navbar/Navbar.js"
import { useStyles } from "./ResetPassScreenStyle";
import { Link } from "react-router-dom";
const ResetPassScreen = () => {

  const classes = useStyles();

  return (
    <div>
      <Navbar/>
        <h1>This is password reset screen where new password is entered</h1>

        <Link to="/userinfo"><button className={classes.Button}>Reset</button></Link> 

         <Link to="/signin"><button className={classes.Button}>Login Here</button></Link> 
    </div>
  )
};

export default ResetPassScreen;
