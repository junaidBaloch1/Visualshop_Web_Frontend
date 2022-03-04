import React from "react";
import { connect } from "react-redux";
import * as userAction from "../../store/actions/userActions/userActions";
import { Link,useNavigate } from "react-router-dom";
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
  GoogleAuthHandler,
  ValidateEmail,
} from "../../APIFunctionsFolder/APIFunctionsFile";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { CLIENT_ID } from "../../config";

import { useStyles } from "./RegisterScreenStyle";

const RegisterScreen = (props) => {
  const classes = useStyles();
  const clientId = CLIENT_ID;
  const date = new Date();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
   
  const onLoginSuccess = async (res) => {
    const GOOGLE_AUTH_DATA = res.tokenObj;
    setLoading(true);
    console.log(GOOGLE_AUTH_DATA.access_token);
    // <------------------------------------------------->
    const response = await GoogleAuthHandler(GOOGLE_AUTH_DATA.access_token);
    console.log(response);
    if (response.status == 200) {
      const LOGIN_INFO = {
        access: response.data.access,
        time: date.getTime(),
      };
      setLoading(false);
      navigate("/profile");
      //store data in local storage and redux
      props.updateLoginData(response.data.access, date.getTime());
      localStorage.setItem("LOGIN_INFO", JSON.stringify(LOGIN_INFO));
    } else {
      setError(response.data);
      setLoading(false);
    }
  }
  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
    alert("Login Failed try later")
  };
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
     setLoading(true);
    const date = new Date();
    const response = await UserSignupHandler(email, password);

    if (response.status == 200) {
      const LOGIN_INFO = {
        access: response.data.access,
        time: date.getTime(),
      };
      // console.log(LOGIN_INFO);
      setLoading(false);
      navigate('/profile');
      //store data in local storage and redux
      props.updateLoginData(response.data.access, date.getTime());

      localStorage.setItem("LOGIN_INFO", JSON.stringify(LOGIN_INFO));
    } 
    else 
    {
      setError(response.data);
       setLoading(false);
      
    }
  };

  return (
    <MyContainer
      loading={loading}
      access={props.access}
      timeAdded={props.timeAdded}
      updateLoginData={props.updateLoginData}
    >
      <h1>This is user register signup screen </h1>
    
     
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
              <Typography style={{padding:"1em",color:"red"}} variant="h5">{error}</Typography>

              <TextField
                onChange={(e) => setEmail(e.target.value)}
                label="email"
                placeholder="Enter email"
                fullWidth
                style={{ marginBottom: "2em" }}
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                placeholder="Enter password"
                type="password"
                fullWidth
              />
              <Box style={{ display:"flex",alignItems:'flex-start' }}>
                <FormControlLabel
                  control={<Checkbox name="checked" color="primary" />}
                  label="Remember me"
                />
              </Box>

              <Typography className={classes.ArrangeBtn} >
          
                  <Button className={classes.btnstyle} onClick={Validate}>
                    SignUp
                  </Button>
              </Typography>
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign In with Google"
                render={renderProps => (
                  <Button className={classes.btnstyle} onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign up with Google</Button>
                )}
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={false}
               
              />
              
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
