import React from 'react'
import { Link } from "react-router-dom";
import {useStyles} from "./CodeVerifyScreenStyle"
import { connect } from "react-redux";
import * as userAction from '../../../../store/actions/userActions/userActions'
import MyContainer from '../../../../Components/Container/Container'

const CodeVerifyScreen = (props) => {
 
   const classes = useStyles();

  return (
    <MyContainer loading={false}  access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
     
       <h1>The screen where user enter the code received on email CodeScreen</h1> 

       <Link to="/resetPassword"><button className={classes.Button}>Verify</button></Link> 

      <Link to="/signin"><button className={classes.Button}>Login Here</button></Link> 
        
    </MyContainer>
  )
}


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
export default connect(mapStateToProps,mapDispatchToProps)(CodeVerifyScreen);