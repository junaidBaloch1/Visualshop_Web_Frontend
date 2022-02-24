import React from 'react';
import { connect } from "react-redux";
import * as userAction from '../../../store/actions/userActions/userActions'
import {Link} from 'react-router-dom';
import { Container } from '@material-ui/core';
import {useStyles} from './ComplaintScreenStyle'
import MyContainer from '../../../Components/Container/Container'

const ComplaintScreen = (props) => {
  const classes = useStyles();
  return(

   <MyContainer loading={false}  access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
    
       <h1>This is complaint id screen</h1>

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
export default connect(mapStateToProps,mapDispatchToProps)(ComplaintScreen);

