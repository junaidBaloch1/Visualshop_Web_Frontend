import React from 'react'
import { useStyles } from './CodeEmailScreenStyle'
import { Link } from "react-router-dom";
import MyContainer from '../../../../Components/Container/Container'

const CodeEmailScreen = () => {

  const classes = useStyles();

  return (
    <MyContainer>
  
       <h1>The screen where user enter email to which to code is send CodeEmailScreen</h1> 

      <Link to="/codeverification"><button className={classes.Button}>Submit</button></Link> 

      <Link to="/signin"><button className={classes.Button}>Login Here</button></Link> 
    </MyContainer>
  )
}

export default CodeEmailScreen