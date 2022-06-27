import React, { useEffect, useState } from "react";
import * as userAction from "../../store/actions/userActions/userActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Card,
  CardMedia,
  Container,
  TextField,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import * as cartAction from "../../store/actions/cartActions/cartActions";
import { TotalBudget } from "../../FunctionsFolder/CommonFunctions";
import { PlaceOrder } from "../../FunctionsFolder/APIFunctionsFile";
import { useStyles } from "./ShippingScreenStyle";
import MyContainer from "../../Components/Container/Container";
import { GetCityState } from "../../FunctionsFolder/APIFunctionsFile";

const ShippingScreen = (props) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [stateId, setStateId] = useState();
  const [coupenid, setCoupenid] = useState(null)
  const [items, setItems] = useState(0);
  const [price, setTotalprice] = useState(0);
  const [qtynum, setQtynum] = useState(0);
  
  const [paymentMethod, setPaymentMethod] = useState("CASH")
  
  const [error, setError] = useState("");
  const [provinceAndcity, setProvinceAndcity] = useState();
  const [disable, setdisable] = useState(false);
  const [buttonText, setButtonText] = useState("Ship to this address");
  const [loading, setLoading] = useState(false);

  const selectpaymentMethod = (event) =>{
    setPaymentMethod(event.target.value)
  }

  const submitAddressHandler = () => {
    setButtonText("Address Saved");
    setdisable(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(async () => {
    const response = await GetCityState();

    if (response.status == 200) {
      const provinceAndcity = response.data;
      setProvinceAndcity(provinceAndcity);
      setStateId(provinceAndcity[0].id);
      setCity(provinceAndcity[0].cities[0]);
    } else {
      setError(response.data);
    }


    const CART_DATA = JSON.parse(localStorage.getItem("CART_DATA"));
    if (!(CART_DATA == null)) {
      props.store_cart_product_action(CART_DATA);
    }

    CART_DATA && setItems(CART_DATA.length);
    CART_DATA && setTotalprice(TotalBudget(CART_DATA));
  }, []);

  const newOrderedProduct=[]
  // console.log(newOrderedProduct)
   props.Cart_product && props.Cart_product.map((product)=>{
    // console.log(product)
  newOrderedProduct.push({
    productId:product.id,
    totalQuantity:product.quantity,
    colourSelected:null,
    sizeSelected:null,

  })
           

  })

  const PlaceOrderHandler = async () => {

    setLoading(true);
    
    const response = await PlaceOrder(name,address,contact,city, stateId,coupenid, newOrderedProduct, paymentMethod);

    if (response.status == 200) {
      
      setLoading(false);
      

    } 
    else 
    {
      setError(response.data);
       setLoading(false);
      
    }

  }
  

  const handleChange = (event) => {
    setQtynum(event.target.value);
  };

  const ProductRemoveHandler = (productId) => {
    var newCartData =
      props.Cart_product &&
      props.Cart_product.filter((cart) => {
        if (cart.id != productId) {
          return cart;
        }
      });
    localStorage.setItem("CART_DATA", JSON.stringify(newCartData));
    props.store_cart_product_action(newCartData);

    setTotalprice(TotalBudget(newCartData));
    setItems(newCartData.length);
  };

  if (provinceAndcity) {
    var selected_cities = null;
    selected_cities = provinceAndcity.filter((option) => {
      // console.log('what is in option',option)
      return option.id == stateId;
    });
    // console.log('seleted cities',selected_cities)
    if (selected_cities.length == 0) selected_cities = null;
    else selected_cities = selected_cities[0];
  }

  return (
    <MyContainer
      loading={false}
      access={props.access}
      timeAdded={props.timeAdded}
      updateLoginData={props.updateLoginData}
    >
      <Box style={{display:'flex', justifyContent:"space-between" }}>
        {/*------------------------------------- ship address -------------------------- */}
        <Box style={{ width: "50%" }}>
        <Box style={{ margin: "0em 2em" }}>
          <Typography className={classes.headertitle}>
            Shipping Address
          </Typography>
          <TextField
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            fullWidth
            required
            id="outlined-basic"
            label="name"
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{
              style: {
                fontSize: "24px",
                fontFamily: "Helvetica Neue",
                width: "100%",
                color: "gray",
              },
            }}
            InputProps={{
              style: {
                fontSize: "24px",
                fontFamily: "Helvetica Neue",
              },
            }}
          />

          <TextField
            onChange={(e) => setAddress(e.target.value)}
            label="Address"
            placeholder="Enter address"
            type="text"
            fullWidth
            required
            id="outlined-basic"
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{
              style: {
                fontSize: "24px",
                fontFamily: "Helvetica Neue",
                width: "100%",
                color: "gray",
              },
            }}
            InputProps={{
              style: {
                fontSize: "24px",
                fontFamily: "Helvetica Neue",
              },
            }}
          />
          <TextField
            onChange={(e) => setContact(e.target.value)}
            label="Contact"
            placeholder="Enter contact"
            type="number"
            fullWidth
            required
            id="outlined-basic"
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{
              style: {
                fontSize: "24px",
                fontFamily: "Helvetica Neue",
                width: "100%",
                color: "gray",
              },
            }}
            InputProps={{
              style: {
                fontSize: "24px",
                fontFamily: "Helvetica Neue",
              },
            }}
          />

          <TextField
            id="outlined-basic"
            variant="outlined"
            // label="select state"
            select
            value={stateId}
            onChange={(event) => setStateId(event.target.value)}
            SelectProps={{
              native: true,
            }}
            className={classes.textField}
            InputProps={{
              style: {
                fontSize: "24px",
                fontFamily: "Helvetica Neue",
              },
            }}
          >
            {provinceAndcity &&
              provinceAndcity.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
          </TextField>

          <TextField
            id="outlined-basic"
            variant="outlined"
            // label="Select City"
            select
            value={city}
            onChange={(event) => setCity(event.target.value)}
            SelectProps={{
              native: true,
            }}
            className={classes.textField}
            InputProps={{
              style: {
                fontSize: "24px",
                fontFamily: "Helvetica Neue",
              },
            }}
          >
            {selected_cities &&
              selected_cities.cities.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
          </TextField>
        </Box>
        {/* <Button disabled={disable}  loading={loading} onClick={submitAddressHandler}  className={classes.Button}>
                {buttonText}
        </Button> */}

        <LoadingButton
          // size="large"
          color="inherit"
          onClick={submitAddressHandler}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          iconsize="medium"
          variant="contained"
          // fullWidth={true}
          className={classes.Button}
          sx={{
            textAlign: "center",
            padding: "0.3em",
            backgroundColor: "#b28900",
            color: "white",
            display: "flex",
            marginLeft: "1.3em",
            // marginTop: "1em",
            width: "16em",
            fontSize: "22px",
            fontFamily: "Helvetica Neue",
            "&:hover": {
              color: "black",
              // backgroundColor: "white",
            },
          }}
          disabled={disable}
        >
          {buttonText}
        </LoadingButton>
        </Box>
        {/* ---------------------Summary of order place order------------------ */}
           
        <Box style={{ width: "50%" ,margin: "0em 2em"}}>
          <Box >
          <Typography style={{marginTop:"1em"}} className={classes.headertitle}>Select payment method</Typography>
          <Box style={{display:"flex", justifyContent:"space-between"}}>
          <Box>
          <Card style={{ width: "15em" }}>
                        <CardMedia
                          component="img"
                          height="120"
                          image="/images/cashr.png"
                          alt="green iguana"
                          style={{
                            width: "15em",
                            // margin: "1em",
                            padding: "1em",
                          }}
                        />
                     
                      </Card>
                      <Button onClick={selectpaymentMethod} className={classes.CashBtn}>Cash on delivery</Button>
                </Box>
                <Box>
                       <Card style={{ width: "15em" }}>
                        <CardMedia
                          component="img"
                          height="120"
                          image="/images/newcash.png"
                          alt="green iguana"
                          style={{
                            width: "15em",
                            // margin: "1em",
                            padding: "1em",
                          }}
                        />
                     
                      </Card>
                      <Button onClick={selectpaymentMethod} className={classes.CashBtn}>Credit card</Button>
                </Box>

          </Box>
          </Box>

          <Box style={{marginTop:"1em", backgroundColor:"#DCDCDC"}}>
          <Box className={classes.links}>
            <Button onClick={PlaceOrderHandler}  className={classes.Button}>Place order</Button>
          </Box>

          <Box style={{padding:"1em"}}>
            <Typography className={classes.cartSummaryText}>
              Have a Promotional Code? Proceed to place order to redeem it.
            </Typography>
            <Typography className={classes.cartSummary}>
              Cart Summary ({items} Items)
            </Typography>
            <Box  style={{display:"flex", justifyContent:"space-between"}}>
              <Typography className={classes.cartSummaryText}>Shipping:</Typography> 
              <Typography className={classes.cartSummaryText}>Free</Typography> 
            </Box>
            <Box  style={{display:"flex", justifyContent:"space-between"}}>
              <Typography className={classes.cartSummaryText}>Discounts:</Typography> 
              <Typography className={classes.cartSummaryText}>Auto-applied discounts will appear here once a shipping address is entered</Typography> 
            </Box>
            <Box  style={{display:"flex", justifyContent:"space-between"}}>
              <Typography className={classes.cartSummaryText}>Estimated tax to be collected:</Typography> 
              <Typography style={{fontWeight:"bold"}} className={classes.cartSummaryText}>$0.00</Typography> 
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography className={classes.cartSummaryText}>
                subtotal ({items} Items):
              </Typography>
              <Typography
                style={{
                  fontWeight: "bold",
                  // marginRight: "1.7em",
                  marginTop: "1.6em",
                  borderBottom: "3px solid #b28900",
                }}
                className={classes.cartSummaryText}
              >
                ${price}
              </Typography>
            </Box>
          </Box>
          </Box>

        </Box>

      </Box>
      {/* ---------------------------------Ship address---------------------------------- */}

      <Typography
        style={{ margin: "1em", marginTop: "1.5em" }}
        className={classes.headertitle}
      >
        Item review and shipping
      </Typography>
      <Box style={{ width: "100%" }}>
        <Grid container spacing={2}>
          {props.Cart_product ? (
            props.Cart_product.map((product) => {
              return (
                <Grid item sm={12} md={6} lg={4} xl={3}>
                  <Box key={product.id} style={{ padding:"2em",border: "3px solid black" }}>

                    <Box style={{ width: "100%",padding:"4em" }}>
                      <Card style={{ width: "22em", marginTop: "1em" }}>
                        <CardMedia
                          component="img"
                          height="300"
                          image={product.image}
                          alt="green iguana"
                          style={{
                            width: "22em",
                            // margin: "1em",
                            padding: "1.5em",
                          }}
                        />
                        <Typography
                          className={classes.mtitle}
                        >{`${product.name.substring(0, 20)}...`}</Typography>
                      </Card>

                      <Box className={classes.productbox}>
                        <Box className={classes.qtybox}>
                          <Box className={classes.quantity}>
                            {product.quantity}
                          </Box>
                        </Box>

                        <Button
                          className={classes.removebtn}
                          onClick={() => ProductRemoveHandler(product.id)}
                        >
                          Remove
                        </Button>

                        <Typography
                          className={classes.totalprice}
                        >{`$${product.price}`}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })
          ) : (
            <Box className={classes.headertitle}>No item in cart</Box>
          )}
        </Grid>
      </Box>

      <Container>
        <Link to="/creditdetail">
          {" "}
          <button className={classes.Button}>Submit info Continue</button>{" "}
        </Link>
      </Container>
    </MyContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    access: state.Update_Login_reducer.access,
    timeAdded: state.Update_Login_reducer.timeAdded,
    Cart_product: state.store_cart_product_reducer.Cart_product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginData: (access, timeAdded) =>
      dispatch(userAction.Update_Login_action(access, timeAdded)),

    store_cart_product_action: (Cart_product) =>
      dispatch(cartAction.store_cart_product_action(Cart_product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShippingScreen);
