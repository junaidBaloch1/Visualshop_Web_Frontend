import React from 'react'
import { Link } from "react-router-dom";
import {useStyles} from "./CodeVerifyScreenStyle"
import Navbar from '../../../../Components/Navbar/Navbar';
const CodeVerifyScreen = () => {
 
   const classes = useStyles();

  return (
    <div>
      <Navbar/>
       <h1>The screen where user enter the code received on email CodeScreen</h1> 

       <Link to="/resetPassword"><button className={classes.Button}>Verify</button></Link> 

      <Link to="/signin"><button className={classes.Button}>Login Here</button></Link> 
        
    </div>
  )
}

export default CodeVerifyScreen