import React from 'react'
import { Container } from '@material-ui/core'
import {Link} from 'react-router-dom'
import {useStyles} from './JazzCashScreenStyle'
import Navbar from '../../../Components/Navbar/Navbar'
const JazzCashScreen = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar/>
       <h1>This is Stripe Screen</h1> 
       <Container>
        <Link to='/'><button className={classes.Button}>Add More Product</button></Link> 
        <Link to='/ordersDetails'> <button className={classes.Button}>Buy</button> </Link>

        </Container>
    </div>
  )
}

export default JazzCashScreen