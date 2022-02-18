import React from 'react';
import MyContainer from '../../../../Components/Container/Container'
import { useStyles } from "./ResetPassScreenStyle";
import { Link } from "react-router-dom";
const ResetPassScreen = () => {

  const classes = useStyles();

  return (
    <MyContainer>
     
        <h1>This is password reset screen where new password is entered</h1>

        <Link to="/profile"><button className={classes.Button}>Reset</button></Link> 

         <Link to="/signin"><button className={classes.Button}>Login Here</button></Link> 
    </MyContainer>
  )
};

export default ResetPassScreen;
