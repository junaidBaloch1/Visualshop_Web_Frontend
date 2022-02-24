import { Container } from '@material-ui/core';
import React from 'react';
import { connect } from "react-redux";
import * as userAction from '../../store/actions/userActions/userActions'
import MyContainer from '../../Components/Container/Container'
import {Link} from 'react-router-dom' 
import {useStyles} from "./CartScreenStyle"

const CartScreen = (props) => {
  const classes = useStyles();
  return(
    <MyContainer loading={false}  access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
     
        <h1>This is Cart Screen</h1>
        <Container>
       
        <Link to='/shipinfo'> <button className={classes.Button}>Checkout</button></Link>

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
export default connect(mapStateToProps,mapDispatchToProps)(CartScreen);
