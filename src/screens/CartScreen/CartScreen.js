import React,{useEffect,useState} from 'react';
import { Card, Button,CardMedia, Container,Box, Typography } from '@material-ui/core';
import { connect } from "react-redux";
import * as userAction from '../../store/actions/userActions/userActions'
import MyContainer from '../../Components/Container/Container'
import { ProductDetailHandler } from '../../APIFunctionsFolder/APIFunctionsFile'
import {Link,useParams} from 'react-router-dom' 
import {useStyles} from "./CartScreenStyle"

const CartScreen = (props) => {
  const classes = useStyles();
  const PRODUCT_INFO = JSON.parse(localStorage.getItem("PRODUCT_INFO"));
  // const { id } = useParams();
  const [loading, setLoading] = useState(false)
  // const [productdata, setProductData] = useState()
  //  const [totalprice, setTotalprice] = useState(PRODUCT_INFO.price)
  // const[qty, setQty] = useState(PRODUCT_INFO.quantity)

  
  
  // useEffect(async () => {

    
  //   const response = await ProductDetailHandler(PRODUCT_INFO.id)
  //   setLoading(true)
  //   if (response.status == 200) {
  //     setLoading(false)

  //     const productdetail = response.data
  //     setProductData(productdetail)
  //     //  console.log('image is here',productdetail);
  //     // console.log('sizes number in length', productdata && productdata.sizes.length)
  //   }
     
    
  // }, [])

 
  // const incrementHandler = () =>{
   
  //     setTotalprice(productdata && productdata.price * (qty+1))
  //   setQty(qty+ 1);
    
  //  }
//    const decrementtHandler = () =>{
  
//     setTotalprice((qty-1) * (productdata && productdata.price) )
//     setQty(qty- 1);
    
//    }
 const productRemoveHandler = () =>{
  var PRODUCT_INFO = localStorage.key('PRODUCT_INFO');
  localStorage.clear(PRODUCT_INFO);
 }

 
  return(
    <MyContainer loading={false}  access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
      <Box className={classes.headerbox}>
        <Typography className={classes.headertitle}>Item</Typography>
        <Typography className={classes.headertitle}>Quantity</Typography>
        <Typography className={classes.headertitle}>Price</Typography>
      </Box>
     {PRODUCT_INFO ?
      <Box className={classes.productbox}>
            <Card  style={{width:"22em",margin:"1em"}}>
            <CardMedia
              component="img"
              height="250"
              image={PRODUCT_INFO.image}
              alt="green iguana"
              style={{width:"20em",margin:"1em",padding:'0.5em'}}
           />
            </Card>
            <Box>
              <Typography className={classes.quantity}>{PRODUCT_INFO.quantity}</Typography>
            
            
              {/* <Box  className={classes.qtybox}>
                <Button onClick={incrementHandler} disabled={qty >= (productdata && productdata.quantity)} className={classes.btnsymbol}>+</Button>
                <Box style={{margin:"0.5em ",fontSize:"28px"}}>{qty} </Box>
                <Button onClick={decrementtHandler} disabled={qty <= 0} className={classes.btnsymbol} >-</Button>
              
                </Box> */}
                  
                  <Box>
                    <Button onClick={productRemoveHandler}>Remove</Button>
                  </Box>
                
           
            </Box>
            <Box>
              <Typography className={classes.totalprice}>{`$${PRODUCT_INFO.price}`}</Typography>
            </Box>
      </Box>: <Box>No item in cart</Box>}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        <h1>This is Cart Screen</h1>
        <Container>
       
        <Link to='/shipinfo'> <button className={classes.Button}>Checkout</button></Link>

        </Container>
    </MyContainer>
  ) 
};


const mapStateToProps = (state) => {
  return {
    access: state.Update_Login_reducer.access,
    timeAdded: state.Update_Login_reducer.timeAdded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginData: (access, timeAdded) =>
      dispatch(userAction.Update_Login_action(access, timeAdded)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(CartScreen);
