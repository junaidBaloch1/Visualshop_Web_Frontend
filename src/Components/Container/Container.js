import React from 'react'
import { connect } from "react-redux";
import { diff_minutes } from "../../FunctionsFolder/FunctionsFile";
import Navbar from '../Navbar/Navbar'
import * as userAction from "../../store/actions/userActions/userActions";
import { useState } from 'react';
const Container = (props) => {
    if (props.access != null)
    {
        console.log("checking")
        const date = new Date();
        const timeDiff = diff_minutes(date.getTime(), props.timeAdded);
        if (timeDiff > 50)
        {
            props.updateLoginData(null,null)
        }
    }
  return (
    <div>
        <Navbar />
        {/* <Modal show={props.loading}/> */}
        {props.children}
    </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Container);