import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Avatar,
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
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";


const Navbar = (props) => {
  const classes = useStyles();

   let theme = useTheme();
   let isMatch = useMediaQuery(theme.breakpoints.down('md'));
  

  return (
    <AppBar position="static" className={classes.AppColor}>
      <CssBaseline />
      <Toolbar>
        <Box style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
        <Typography  variant="h4" className={classes.logo}>
        Visual Shop
        </Typography>
        {isMatch ? <TemporaryDrawer />:
        
       
        <Container className={classes.Container}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
          About 
          </Link>
          
         <Link className={classes.link} to='/cart'> Cart</Link>
        

        
            {props.access ? 
            <Link to="/profile" className={classes.profile}>
             <Avatar className={classes.avatarStyle} />
          </Link>
            :<Box>
              <Link to="/signin" className={classes.links}>Login</Link> 
              <Link to="/signup" className={classes.links}>SignUp</Link>
          </Box>
            }
           
        </Container>
     
        }
       
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
