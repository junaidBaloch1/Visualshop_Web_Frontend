import React from "react";
import { connect } from "react-redux";
import * as userAction from "../../store/actions/userActions/userActions";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CardMedia, Card } from "@material-ui/core";
import {
  Button,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  TextField,
  Avatar,
  Paper,
} from "@material-ui/core";
import MyContainer from "../../Components/Container/Container";
import {
  UserSignupHandler,
  ValidateEmail,
} from "../../APIFunctionsFolder/APIFunctionsFile";

import { useStyles } from "./RegisterScreenStyle";

const RegisterScreen = (props) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Validate = () => {
    if (!ValidateEmail(email)) {
      setError("Please enter valid Email");
      return false;
    }
    if (password == "") {
      setError("Please Enter Password");
      return false;
    }
    UserSignUp();
  };

  const UserSignUp = async () => {
    // setLoading(true);
    const date = new Date();
    const response = await UserSignupHandler(email, password);

    if (response.status == 200) {
      const LOGIN_INFO = {
        access: response.data.access,
        time: date.getTime(),
      };
      // console.log(LOGIN_INFO);
      setLoading(false);
      //store data in local storage and redux
      props.updateLoginData(response.data.access, date.getTime());

      localStorage.setItem("LOGIN_INFO", JSON.stringify(LOGIN_INFO));
    } else {
      setError(response.data);
      // setLoading(false);
      // console.log(response.data);
    }
  };

  return (
    <MyContainer
      loading={false}
      access={props.access}
      timeAdded={props.timeAdded}
      updateLoginData={props.updateLoginData}
    >
      <h1>This is user register signup screen </h1>
      <h2>{error}</h2>
     
      <Box >
        <Paper elevation={5} align="center" className={classes.paperStyle}>
          <Box style={{ width: "100%" }}>
            <Card>
              <CardMedia
                component="img"
                height="120"
                image="images/logo.png"
                alt="green iguana"
                style={{ width: "15em" }}
              />
            </Card>
            <Box style={{ margin: "3em" }}>
              <Avatar className={classes.avatarStyle} />
              <Typography style={{ color:"Black" }} variant="h3">
                Sign Up
              </Typography>

              <TextField
                onChange={(e) => setEmail(e.target.value)}
                label="Username"
                placeholder="Enter username"
                fullWidth
                required
                style={{ marginBottom: "2em" }}
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                placeholder="Enter password"
                type="password"
                fullWidth
                required
              />
              <Box style={{ display:"flex",alignItems:'flex-start' }}>
                <FormControlLabel
                  control={<Checkbox name="checked" color="primary" />}
                  label="Remember me"
                />
              </Box>

              <Typography className={classes.ArrangeBtn} >
                <Link style={{ textDecoration: "None" }} to="/profile">
                  <Button className={classes.btnstyle} onClick={Validate}>
                    SignUp
                  </Button>
                </Link>
                <Link style={{ textDecoration: "None" }} to="/profile">
                  <Button className={classes.btnstyle}>
                    signUp With Google
                  </Button>
                </Link>
              </Typography>
              
              <Typography>
                <Link className={classes.linksStyle} to="/signin">
                  Login Here
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </MyContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    access: state.userReducer.access,
    timeAdded: state.userReducer.timeAdded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginData: (access, timeAdded) =>
      dispatch(userAction.updateLoginData(access, timeAdded)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
