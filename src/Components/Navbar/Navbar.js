import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  CssBaseline,
  Typography,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./NavbarStyle.jsx";
import{useTheme, useMediaQuery} from '@material-ui/core'
import MenuPopupState from './MenuPopupState'
import CloseSharpIcon from "@mui/icons-material/CloseSharp";



const Navbar = () => {
  const classes = useStyles();

 let theme = useTheme();


 let isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <AppBar position="static" className={classes.AppColor}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          VisualShop
        </Typography>
        <Container className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
          About 
          </Link>
          <Link to="/cart" className={classes.link}>
            Cart
          </Link>
         
            <Link to="/signin" className={classes.link}>
              Join
            </Link>

        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
