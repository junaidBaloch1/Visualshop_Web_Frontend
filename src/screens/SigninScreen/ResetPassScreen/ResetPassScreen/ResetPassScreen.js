import React from 'react';
import MyContainer from '../../../../Components/Container/Container'
import { useStyles } from "./ResetPassScreenStyle";
import * as userAction from '../../../../store/actions/userActions/userActions'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const ResetPassScreen = (props) => {

  const classes = useStyles();

  return (
    <MyContainer loading={false}  access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
     
        <h1>This is password reset screen where new password is entered</h1>

        <Link to="/profile"><button className={classes.Button}>Reset</button></Link> 

         <Link to="/signin"><button className={classes.Button}>Login Here</button></Link> 
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
export default connect(mapStateToProps,mapDispatchToProps)(ResetPassScreen);
