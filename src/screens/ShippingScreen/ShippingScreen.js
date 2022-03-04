import React from 'react';
import * as userAction from '../../store/actions/userActions/userActions'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { Container } from '@material-ui/core';
import {useStyles} from './ShippingScreenStyle'
import MyContainer from '../../Components/Container/Container'


const ShippingScreen = (props) => {
  const classes = useStyles();
    return (
    <MyContainer loading={false}  access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
     
        <h1>This is shipping info screen</h1>
        <Container> 
        <Link to='/creditdetail'> <button className={classes.Button}>Submit info Continue</button> </Link>
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
export default connect(mapStateToProps,mapDispatchToProps)(ShippingScreen);