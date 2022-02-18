import React from 'react'
import { Link } from "react-router-dom";
import {useStyles} from "./CodeVerifyScreenStyle"
import MyContainer from '../../../../Components/Container/Container'

const CodeVerifyScreen = () => {
 
   const classes = useStyles();

  return (
    <MyContainer>
     
       <h1>The screen where user enter the code received on email CodeScreen</h1> 

       <Link to="/resetPassword"><button className={classes.Button}>Verify</button></Link> 

      <Link to="/signin"><button className={classes.Button}>Login Here</button></Link> 
        
    </MyContainer>
  )
}

export default CodeVerifyScreen