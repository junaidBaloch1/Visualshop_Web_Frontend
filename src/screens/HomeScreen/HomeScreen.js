import React, { useState, useEffect } from 'react';
import {Box,Button,Grid, Typography} from '@material-ui/core'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import MyContainer from '../../Components/Container/Container'
import * as userAction from '../../store/actions/userActions/userActions'
import * as productAction from '../../store/actions/productActions/productActions'
import { GetProductHandler,FilterProductHandler, GetCategoriesHandler } from '../../APIFunctionsFolder/APIFunctionsFile';
import CARD from '../../Components/Product/CARD'
import Carusal from '../../Components/Carusal/Carusal';
import Searchbar from '../../Components/Searchbar/Searchbar';
import {useStyles} from './HomeScreenStyle';
import ShopWomen from '../../Components/Category/PopUp/ShopWomen/ShopWomen';
import ShopMen from '../../Components/Category/PopUp/ShopMen/ShopMen';

const HomeScreen = (props) => { 
  const classes = useStyles();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [totalpage, setTotalpage] = useState(0);
 const [category, setCategory] = useState("");

 
  

  var response;
 

  useEffect( async () =>{
   
    if(props.products == null){
      setLoading(true)
    
       response = await GetProductHandler(currentpage)
      if(response.status === 200){
        setLoading(false);
         
     
         const products = response.data.results;
          props.get_all_product_action(products);

          console.log(products)
       
        
    }
  
      let Number_of_pages = Math.floor(response.data.count / response.data.results.length)
      let Remainder = (response.data.count) % (response.data.results.length) 
      if(Remainder > 0){ Number_of_pages = Number_of_pages + 1;}
      setTotalpage(Number_of_pages); 
     }
     
     else 
     {
      // setError(response.data);
      setLoading(false);
    }
    
},[])


   const handleIncrement = async() => {
     
    if(currentpage+1 <= totalpage ){
      response = await GetProductHandler(currentpage+1)
      setLoading(true)
     if(response.status === 200){

       const products = response.data.results;
     
        props.get_all_product_action([...props.products, ...products]);
     
     
       
       setCurrentpage(prevCount => prevCount + 1);
       setLoading(false);
     }
    }
    else{
      console.log("the value of count is not here!!")
    }  
  };

  const SearchTextProductHandler =  async (searchText) =>{
       
    response = await FilterProductHandler(null,null,null,null,searchText);

    if(response.status==200){

      const Searchproducts = response.data
      console.log(Searchproducts);
      props.filtered_product_action(Searchproducts);
      // setSearchproducts(products)
    }
    else{
      console.log("error in getting search")
    }


  }
  
  const ClearFilter = () =>{
    props.filtered_product_action(null)
  }

   
  useEffect (async() => {

         response = await GetCategoriesHandler();

        if(response.status == 200){
           const categories = response.data
           
           setCategory(categories)
           console.log(categories);
        }
       

   },[])

  

  return(
   <MyContainer  loading={loading} access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
   
    <Typography variant="h3" style={{color:"red"}}>{error}</Typography>
    <Box className={classes.category}>
    <Box className={classes.btn} >
      {/* {category && category.map((shops) =>{
      return (

        <Shops item key={shops.id} shops ={shops}/>

      )
        
    })} */}
    {/* <WomenShop/>  */}

    <ShopWomen/>
    <ShopMen/>
    </Box>
      <Searchbar filter={SearchTextProductHandler}  />
     
    </Box>
      <Button onClick={ClearFilter} style={{marginLeft:"1.9em"}} className={classes.Button}>Clear Filter</Button>
    
   
     

     
      {/* <WomenShop /> */}

         {/* <MenShop/> */}


     
     
     
    
     
      <Typography variant="h4" className={classes.title2}>
        Latest Products..
      </Typography>
    <Box className={classes.StyleProduct}>
        <Grid container spacing={6}>
         { props.filterproduct ? props.filterproduct.map((product) => {
             return (
              <Grid item key={product.id} sm={12}  md={6} lg={4} xl={3}>
                <CARD product={product} />
              </Grid>)
          }):  props.products? props.products.map((product) => {
            // console.log(products.category_title);
            return (
              <Grid item key={product.id} sm={12}  md={6} lg={4} xl={3}>
                <CARD product={product} />
              </Grid>
            );
          }):null }

          

        </Grid>
     </Box>
  
      {totalpage!==currentpage ? <Button onClick={handleIncrement} className={classes.Button}>Load More</Button>:null}
      {/* {props.filterproduct.length > 20 ?<Button onClick={handleIncrement} className={classes.Button}>Load More</Button>:null} */}
    
     {/* <Carusal/> */}
     
  
    
            


  </MyContainer>
  ) 
  
};

const mapStateToProps = (state) => {
  return {
    access: state.Update_Login_reducer.access,
    timeAdded: state.Update_Login_reducer.timeAdded,

    products:state.get_all_product_reducer.products,

    filterproduct:state.filtered_product_reducer.filterproduct,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Update_Login_action: (access, timeAdded) =>
      dispatch(userAction.Update_Login_action(access, timeAdded)),

    get_all_product_action: (products) =>
      dispatch(productAction.get_all_product_action(products)),

    filtered_product_action: (filterproduct) =>
       dispatch(productAction.filtered_product_action(filterproduct))


  };
};
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
