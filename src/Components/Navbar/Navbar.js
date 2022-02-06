import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./NavbarStyle.jsx";
import { Modal, Box } from "@mui/material";
//import SignInScreen from "../../Screen/SigninScreen/SigninScreen.js";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
//import RegisterScreen from "../../Screen/RegisterScreen/RegisterScreen.js";

const Navbar = () => {
  const classes = useStyles();
  const [isRegisterpage, setRegisterpage] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setRegisterpage(false);
  };
  return (
    <AppBar position="static" className={classes.AppColor}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          VisualShop
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/About Us" className={classes.link}>
          About Us
          </Link>
          <Link to="/Cart" className={classes.link}>
            Cart
          </Link>
          <Box>
            <Link to="/" className={classes.link} onClick={handleOpen}>
              Join
            </Link>

            <Modal
              open={open}
              className={classes.Modalstyle}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box>
                <Button onClick={handleClose} className={classes.buttonstyle}>
                  <CloseSharpIcon
                    style={{ fontSize: "32px" }}
                    className={classes.crossIcon}
                  />
                </Button>
                {/* {isRegisterpage ? (
                  <RegisterScreen setRegisterpage={setRegisterpage} />
                ) : (
                  <SignInScreen setRegisterpage={setRegisterpage} />
                )} */}
              </Box>
            </Modal>
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
