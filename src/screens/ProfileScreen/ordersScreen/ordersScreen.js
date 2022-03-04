import React from 'react';
import { connect } from "react-redux";
import { useStyles } from './OrdersScreenStyle';
import {Link} from "react-router-dom"
import * as userAction from '../../../store/actions/userActions/userActions'
import { Container } from '@material-ui/core';
import MyContainer from '../../../Components/Container/Container'

const OrdersScreen = (props) => {
  const classes =useStyles();
  return(

    <MyContainer loading={false}  access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
      
        <h1>This is number of orders and detail screen</h1>
        <Container>
        <Link className={classes.links} to='/profile'>user Info</Link>
        <Link className={classes.links} to='/complaint'>User Complaint</Link>
        <Link className={classes.links} to='/orders'>User orders Detail</Link>
        <Link className={classes.links} to='/signin'>Logout</Link>
        
        </Container>
    </MyContainer>
  ) 
};


const mapStateToProps = (state) => {
  return {
    access: state.Update_Login_reducer.access,
    timeAdded: state.Update_Login_reducer.timeAdded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginData: (access, timeAdded) =>
      dispatch(userAction.Update_Login_action(access, timeAdded)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(OrdersScreen);

