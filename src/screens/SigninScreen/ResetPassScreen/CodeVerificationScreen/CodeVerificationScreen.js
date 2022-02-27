import React, {useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import { connect } from "react-redux";
import * as userAction from "../../../../store/actions/userActions/userActions";
import MyContainer from "../../../../Components/Container/Container";
import {
  Paper,
  Avatar,
  TextField,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
} from "@material-ui/core";
import {
  UserTokenHandler,
  ValidateEmail,
} from "../../../../APIFunctionsFolder/APIFunctionsFile";
import { useStyles } from "./CodeVerificationScreenStyle";


const CodeVerificationScreen = (props) => {
  const classes = useStyles();
  let theme = useTheme();
  let isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Validate = () => {
    
    UserToken();
  };

  const UserToken = async () => {
    setLoading(true);
    const date = new Date();
    const response = await UserTokenHandler(token, password);
   
    if (response.status == 200) {
      setLoading(false);
      navigate('/signin');
      //store data in local storage and redux
    }
     else {
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
      <h1>
        The screen where user enter the code received on email and new password{" "}
      </h1>

      
      <Box style={{ width: "100%" }}>
        <Paper elevation={5} align="center" className={classes.paperStyle}>
          <Box style={{ margin: "5em" }}>
            <Avatar className={classes.avatarStyle} />
            <Typography sx={{ padding: "3em" }} variant="h3">
              Reset Password
            </Typography>
            <Typography style={{padding:"1em",color:"red"}} variant="h5">{error}</Typography>

            <TextField
              onChange={(e) => setToken(e.target.value)}
              label="Enter token !"
              placeholder="Enter token"
              fullWidth
              required
              style={{ marginBottom: "2em" }}
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              label="Enter your new password !"
              placeholder="Enter password"
              fullWidth
              required
              style={{ marginBottom: "2em" }}
            />
          </Box>
          <Typography className={classes.ArrangeBtn}>
            <Button onClick={Validate} className={classes.btnstyle}>
              Verification
            </Button>

            <Link className={classes.linksStyle} to="/signin">
              <Button className={classes.btnstyle}>Login Here</Button>
            </Link>
          </Typography>
        </Paper>
      </Box>

    </MyContainer>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     access: state.userReducer.access,
//     timeAdded: state.userReducer.timeAdded,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateLoginData: (access, timeAdded) =>
//       dispatch(userAction.updateLoginData(access, timeAdded)),
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CodeVerificationScreen);

export default CodeVerificationScreen;
