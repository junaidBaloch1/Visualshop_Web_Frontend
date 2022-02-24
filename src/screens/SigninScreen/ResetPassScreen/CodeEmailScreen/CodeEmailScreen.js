import React from 'react'
import { useStyles } from './CodeEmailScreenStyle'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as userAction from '../../../../store/actions/userActions/userActions'
import MyContainer from '../../../../Components/Container/Container'

const CodeEmailScreen = (props) => {

  const classes = useStyles();

  return (
    <MyContainer loading={false}  access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
  
       <h1>The screen where user enter email to which to code is send CodeEmailScreen</h1> 

      <Link to="/codeverification"><button className={classes.Button}>Submit</button></Link> 

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
export default connect(mapStateToProps,mapDispatchToProps)(CodeEmailScreen);