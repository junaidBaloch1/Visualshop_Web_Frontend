import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  CssBaseline,
  Typography,
  Container,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./NavbarStyle.jsx";
import{useTheme, useMediaQuery} from '@material-ui/core'
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import TemporaryDrawer from './DrawerComponent'


const Navbar = () => {
  const classes = useStyles();

   let theme = useTheme();
   let isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  

  return (
    <AppBar position="static" className={classes.AppColor}>
      <CssBaseline />
      <Toolbar>
        <Box style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
        <Typography  variant="h4" className={classes.logo}>
        VisualShop
        </Typography>
        {isMatch ? <TemporaryDrawer />:
        
       
        <Container className={classes.Container}>
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
     
        }
       
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
