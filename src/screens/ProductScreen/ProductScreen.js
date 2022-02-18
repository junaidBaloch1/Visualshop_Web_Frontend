import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { Container } from '@material-ui/core';
import {useStyles} from './ProductScreenStyle'
import MyContainer from '../../Components/Container/Container'
import { connect } from "react-redux";
import * as userAction from '../../store/actions/userActions/userActions'
const ProductScreen = (props) => {
  const classes = useStyles();
  const [loading,setLoading]=useState(false)
  return(

    <MyContainer access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>

        <h1>This is product detail screen</h1>
        <Container>
        <button className={classes.Button}>Add to Cart</button> 
        <Link to='/shipinfo'> <button className={classes.Button}>Buy Now</button> </Link>
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
export default connect(mapStateToProps,mapDispatchToProps)(ProductScreen);
