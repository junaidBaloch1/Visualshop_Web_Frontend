import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { CardMedia, Box, Card, Container, CardHeader, Button, Typography } from '@material-ui/core';
import { useStyles } from './ProductScreenStyle'
import MyContainer from '../../Components/Container/Container'
import { connect } from "react-redux";
import * as userAction from '../../store/actions/userActions/userActions'
import { ProductDetailHandler } from '../../APIFunctionsFolder/APIFunctionsFile'
import TextRating from "../../Components/Rating";
import { feedbackCalculator } from '../../APIFunctionsFolder/APIFunctionsFile'
import SnackBar from './SnackBar'
const ProductScreen = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false)
  const [productdata, setProductData] = useState()
  const { id } = useParams();
  const[qty, setQty] = useState(1)

  useEffect(async () => {


    const response = await ProductDetailHandler(id)
    setLoading(true)
    if (response.status == 200) {
      setLoading(false)

      const productdetail = response.data
      setProductData(productdetail)
      //  console.log('image is here',productdetail);
      // console.log('sizes number in length', productdata && productdata.sizes.length)
    }
  }, [])

   const incrementHandler = () =>{
    setQty(qty+ 1);
    
   }
   const decrementtHandler = () =>{
    setQty(qty- 1);
    
   }
   const addTocartHandler = () =>{
    
    const PRODUCT_INFO = {
      id:id,
      quantity:qty,
      price: productdata && productdata.price * qty,
      image:productdata && productdata.images[0].image,
      
    }
    localStorage.setItem("PRODUCT_INFO", JSON.stringify(PRODUCT_INFO));
    
    
   }
   

  return (

    <MyContainer loading={loading} access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
      <div className={classes.Div}>
        <Box style={{ width: "30%", marginTop: "4.5em" }}>
          <Card  >
            <CardMedia
              component="img"
              height="700"
              image={productdata && productdata.images[0].image}
              alt="green iguana"


            />
            
              <Typography className={classes.titleText}> {productdata && productdata.name}</Typography>
            
            
          </Card>
        </Box>
        <Box style={{ width: "40%", margin: "0em 10em" }}>


          <Box >
            <Typography className={classes.title}>Title</Typography>
            <Typography className={classes.titleText}>{productdata && productdata.name}</Typography>

            <Box style={{marginLeft:"10em"}}>
              <TextRating value={feedbackCalculator(productdata && productdata.feedbacks)}/>
            </Box>
            <Box className={classes.box}>
              <Typography className={classes.mtitle}>Price</Typography>
              <Typography className={classes.mtitle}>{`$${productdata && productdata.price}`}</Typography>
            </Box>
            
            <Box className={classes.box}>
              <Typography className={classes.mtitle}>Availability</Typography>
              {(productdata && ( productdata.quantity > qty) ) ? <Typography className={classes.mtitle}>Stock In</Typography> : 
                 <Typography className={classes.mtitle}>Stock Out</Typography> }
              
            </Box>
            <Box>
              {/* {productdata && productdata.sizes.map((size) =>{
              return (

                   <Button item key={size.id}>{size}</Button>
                    
                 )
        
              })} */} 


              {/* <Button > {productdata && productdata.sizes[0]}</Button> */}
            </Box>
            <Box className={classes.box} >
              <Typography  className={classes.mtitle}>Set Quantity</Typography>
              <Box  style={{textAlign:"center", border:"2px solid black", display:'flex'}}>
                <Button onClick={incrementHandler} className={classes.Button} disabled={qty >= (productdata && productdata.quantity)}  >+</Button><Box style={{margin:"0.5em ",fontSize:"28px"}}>{qty}</Box><Button disabled={qty <= 0} onClick={decrementtHandler} className={classes.Button}>-</Button>
              
                </Box>
                
            </Box>
            <Box className={classes.box}>
            <Typography className={classes.mtitle}>Total Price</Typography>
            <Box className={classes.mtitle}>{`$${productdata && productdata.price * qty }`}</Box>
            </Box>
             <Box className={classes.box}>
               <Button onClick={addTocartHandler} disabled={qty == 0  }   className={classes.Cart}>Add To Cart</Button>
               <Button disabled={qty == 0  }  className={classes.Cart}>Buy Now</Button>
               
             </Box>

             

          </Box>
         
        </Box>

      
      </div>
       
          <Box style={{margin:"5em"}} >
              <Typography style={{ borderBottom: "3px solid black", width: "5em" }} variant='h5'>Description</Typography>
              <Typography style={{ padding: "1em 0em" }} variant='h5' >{productdata && productdata.description}</Typography>
            </Box>

             <Box style={{margin:"5em"}} >
              <Typography style={{  width: "12em" }} variant='h5'>FeedBack On This Product</Typography>
              <TextRating

                value={feedbackCalculator(productdata && productdata.feedbacks)}
                text={`No. of Reviews (${productdata && productdata.feedbacks.length}) `}
              />
            </Box>





      









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
export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
