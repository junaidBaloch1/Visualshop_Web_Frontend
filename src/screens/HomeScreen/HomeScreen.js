import React, { useState, useEffect } from 'react';
import {Box,Button,Grid, Typography} from '@material-ui/core'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import MyContainer from '../../Components/Container/Container'
import * as userAction from '../../store/actions/userActions/userActions'
import * as productAction from '../../store/actions/productActions/productActions'
import { GetProductHandler } from '../../APIFunctionsFolder/APIFunctionsFile';
import CARD from '../../Components/Product/CARD'
import Carusal from '../../Components/Carusal/Carusal';
import Searchbar from '../../Components/Searchbar/Searchbar';
import MenShop from '../../Components/Category/Shop1/Shop1'
import {useStyles} from './HomeScreenStyle';
const HomeScreen = (props) => { 
  const classes = useStyles();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(2);
  
   
  
  useEffect( async () =>{

  console.log(props.products)
    var response;
    let Number_of_pages;
    if(props.products == null){
      setLoading(true)
       response = await GetProductHandler(count)
      if(response.status === 200){
        setLoading(false);
         
       
         const products = response.data.results;
        // console.log(products[0].feedbacks.length)
        //store data in  and redux
        props.get_all_product_action(products);
    }
    

      // console.log(response.data.results[1].feedbacks[0].feedback.rating)
      Number_of_pages = Math.floor(response.data.count / 10)
      let Remainder = (response.data.count) % (10) 
      if(Remainder > 0){ Number_of_pages = Number_of_pages + 1;}
      
  //  console.log(Number_of_pages)

      
     }
     else {
      // setError(response.data);
      setLoading(false);
    }
    
    

   },[])
 

  


  return(
   <MyContainer  loading={loading} access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
   
    <Typography variant="h3" style={{color:"red"}}>{error}</Typography>

      <Carusal/>
      <MenShop/>
      <Searchbar/>
    <Box className={classes.StyleProduct}>
        <Grid container spacing={6}>
          {props.products ? props.products.map((product) => {
            // console.log(products.category_title);
            return (
              <Grid item key={product.id} sm={12}  md={6} lg={4} xl={3}>
                <CARD product={product} />
              </Grid>
            );
          }) :null}
        </Grid>
     </Box>
     
  
    
             
             

    <Box>
    <Button  className={classes.Button}>See Product Detail</Button> 
    </Box>

  </MyContainer>
  ) 
  
};

const mapStateToProps = (state) => {
  return {
    access: state.Update_Login_reducer.access,
    timeAdded: state.Update_Login_reducer.timeAdded,
    products:state.get_all_product_reducer.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Update_Login_action: (access, timeAdded) =>
      dispatch(userAction.Update_Login_action(access, timeAdded)),
    get_all_product_action: (products) =>
      dispatch(productAction.get_all_product_action(products))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
