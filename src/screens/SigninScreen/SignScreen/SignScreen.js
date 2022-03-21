import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContainer from "../../../Components/Container/Container";
import * as userActions from "../../../store/actions/userActions/userActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  UserLoginHandler,
  GoogleAuthHandler,
  ValidateEmail,
} from "../../../APIFunctionsFolder/APIFunctionsFile";

import {
  Paper,
  Avatar,
  TextField,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useStyles } from "./SignScreenStyle";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { CLIENT_ID } from "../../../config";
const SignScreen = (props) => {
  const clientId = CLIENT_ID;
  const date = new Date();
  const classes = useStyles();
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
      navigate("/");
      //store data in local storage and redux
      props.updateLoginData(response.data.access, date.getTime());
      localStorage.setItem("LOGIN_INFO", JSON.stringify(LOGIN_INFO));
    } else {
      setError(response.data);
      setLoading(false);
    }

    // <------------------------------------------------->
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
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
    UserLogin();
  };

  const UserLogin = async () => {
    setLoading(true);

    const response = await UserLoginHandler(email, password);

    if (response.status == 200) {
      const LOGIN_INFO = {
        access: response.data.access,
        time: date.getTime(),
      };
      setLoading(false);
      navigate("/");
      //store data in local storage and redux
      props.updateLoginData(response.data.access, date.getTime());
      localStorage.setItem("LOGIN_INFO", JSON.stringify(LOGIN_INFO));
    } else {
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
      <h1>This is user signin screen</h1>
      <Box style={{ width: "100%" }}>
        <Paper elevation={5} align="center" className={classes.paperStyle}>
          <Box style={{ margin: "5em" }}>
            <Avatar className={classes.avatarStyle} />
            <Typography sx={{ padding: "3em" }} variant="h3">
              Sign In
            </Typography>
            <Typography style={{ padding: "1em", color: "red" }} variant="h5">
              {error}
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
            <Box style={{ display: "flex", alignItems: "flex-start" }}>
              <FormControlLabel
                control={<Checkbox name="checked" color="primary" />}
                label="Remember me"
              />
            </Box>

            <Typography className={classes.ArrangeBtn}>
              <Button className={classes.btnstyle} onClick={Validate}>
                Signin
              </Button>

              {/* <Button onClick={GoogleLoginHandler} className={classes.btnstyle}>Login With Google</Button> */}
           
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign In with Google"
                render={renderProps => (
                  <Button className={classes.btnstyle} onClick={renderProps.onClick} >Sign In with Google</Button>
                )}
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={false}
               
              />
           
            </Typography>
            <Typography>
              <Link className={classes.linksStyle} to="/codeEmail">
                Forget Password
              </Link>
              <br />
              <Link className={classes.linksStyle} to="/signup">
                SignUp Here
              </Link>
            </Typography>
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
    updateLoginData: (access, timeAdded) => {
      dispatch(userActions.Update_Login_action(access, timeAdded));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignScreen);
