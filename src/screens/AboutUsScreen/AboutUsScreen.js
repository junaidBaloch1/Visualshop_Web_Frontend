import React from 'react';
import MyContainer from '../../Components/Container/Container'
import * as userAction from '../../store/actions/userActions/userActions'
import { connect } from "react-redux";

const  AboutUsScreen = (props) => {
//  console.log(props.access);
  return (
    <MyContainer loading={false} access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
      
        <h1>This is AboutUs Screen</h1>
    </MyContainer>
    );
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
export default connect(mapStateToProps,mapDispatchToProps)(AboutUsScreen);