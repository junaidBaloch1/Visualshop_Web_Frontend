import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  CardMedia,
  Container,
  Box,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import * as userAction from "../../store/actions/userActions/userActions";
import * as cartAction from "../../store/actions/cartActions/cartActions";
import MyContainer from "../../Components/Container/Container";
import { ProductDetailHandler } from "../../FunctionsFolder/APIFunctionsFile";
import { TotalBudget } from "../../FunctionsFolder/CommonFunctions";
import { Link } from "react-router-dom";
import { useStyles } from "./CartScreenStyle";

const CartScreen = (props) => {
  const classes = useStyles();
  // const PRODUCT_INFO = JSON.parse(localStorage.getItem("PRODUCT_INFO"));

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(0);
  const [price, setTotalprice] = useState(0);

  useEffect(() => {
    const CART_DATA = JSON.parse(localStorage.getItem("CART_DATA"));
    if (!(CART_DATA == null)) {
      props.store_cart_product_action(CART_DATA);
    }

    CART_DATA && setItems(CART_DATA.length);
    CART_DATA && setTotalprice(TotalBudget(CART_DATA));
  }, []);

  const productRemoveHandler = (productId) => {
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

  return (
    <MyContainer
      loading={false}
      access={props.access}
      timeAdded={props.timeAdded}
      updateLoginData={props.updateLoginData}
    >
      <Box
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ padding: "1em", width: "70%" }}>
          <Box>
            <Typography className={classes.Maintitle}>
              {items} Items in my Cart
            </Typography>
          </Box>
          <Box className={classes.headerbox}>
            <Typography className={classes.headertitle}>Item</Typography>
            <Typography className={classes.headertitle}>Quantity</Typography>
            <Typography className={classes.headertitle}>Price</Typography>
          </Box>
          {props.Cart_product ? (
            props.Cart_product.map((product) => {
              return (
                <Box key={product.id} className={classes.productbox}>
                  <Box style={{ width: "100%" }}>
                    <Card style={{ width: "22em", marginTop: "1em" }}>
                      <CardMedia
                        component="img"
                        height="250"
                        image={product.image}
                        alt="green iguana"
                        style={{
                          width: "20em",
                          margin: "1em",
                          padding: "0.5em",
                        }}
                      />
                      <Typography
                        className={classes.mtitle}
                      >{`${product.name.substring(0, 20)}...`}</Typography>
                    </Card>
                  </Box>

                  <Box style={{ width: "100%" }}>
                    <Box className={classes.qtybox}>
                      <Typography className={classes.quantity}>
                        {product.quantity}
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        className={classes.removebtn}
                        onClick={() => productRemoveHandler(product.id)}
                      >
                        Remove
                      </Button>
                    </Box>
                    <Box style={{ marginTop: "1em" }}>
                      <Link
                        to={`/product/${product.id}`}
                        className={classes.updatelink}
                      >
                        Update
                      </Link>
                    </Box>
                  </Box>

                  <Box style={{ width: "10%" }}>
                    <Typography
                      className={classes.totalprice}
                    >{`$${product.price}`}</Typography>
                  </Box>
                </Box>
              );
            })
          ) : (
            <Box className={classes.headertitle}>No item in cart</Box>
          )}
        </Box>

        <Box style={{ width: "30%" }}>
          <Link to="/shipinfo" className={classes.links}>
            <Button className={classes.Button}>Proceed To Checkout</Button>
          </Link>

          <Box>
            <Typography className={classes.cartSummaryText}>
              Have a Promotional Code? Proceed to checkout to redeem it.
            </Typography>
            <Typography className={classes.cartSummary}>
              Cart Summary ({items} Items)
            </Typography>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography className={classes.cartSummaryText}>
                subtotal ({items} Items)
              </Typography>
              <Typography
                style={{
                  fontWeight: "bold",
                  marginRight: "1.7em",
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
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
