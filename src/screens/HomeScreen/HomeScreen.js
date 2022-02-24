import React from 'react';
import {Container} from '@material-ui/core'
import { connect } from "react-redux";
import {useStyles} from './HomeScreenStyle';
import { Link } from 'react-router-dom';
import MyContainer from '../../Components/Container/Container'
import * as userAction from '../../store/actions/userActions/userActions'

const HomeScreen = (props) => {
  const classes = useStyles();
  return(
   <MyContainer  loading={false} access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
   
    <h1>This is home screen</h1>
    <Container>
   <Link to='/productdetail'> <button className={classes.Button}>See Product Detail</button> </Link>
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
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
