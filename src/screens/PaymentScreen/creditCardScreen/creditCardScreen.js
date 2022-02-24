import React from 'react';
import { Container } from '@material-ui/core';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import * as userAction from '../../../store/actions/userActions/userActions'
import {useStyles} from './CreditCardScreenStyle'
import MyContainer from '../../../Components/Container/Container'

const CreditCardScreen = (props) => {
  const classes = useStyles();
  return(
    <MyContainer loading={false}  access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
      
        <h1>This is credit card screen </h1>
        <Container>
        <Link to='/'><button className={classes.Button}>Add More Product</button></Link> 
        <Link to='/orders'> <button className={classes.Button}>Buy</button> </Link>
        <Link to='/jazzcash'> <button className={classes.Button}>Choose another Method</button> </Link>

        </Container>

    </MyContainer>
  ) 
};



const mapStateToProps = (state) => {
  return {
    access: state.userReducer.access,
    timeAdded: state.userReducer.timeAdded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginData: (access, timeAdded) =>
      dispatch(userAction.updateLoginData(access, timeAdded)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(CreditCardScreen);
