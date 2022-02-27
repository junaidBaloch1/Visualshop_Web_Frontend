import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import * as userAction from '../../../../store/actions/userActions/userActions'
import MyContainer from '../../../../Components/Container/Container'
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
import { useStyles } from './CodeEmailScreenStyle'
import {
  UserEmailHandler,
  ValidateEmail,
} from "../../../../APIFunctionsFolder/APIFunctionsFile";

const CodeEmailScreen = (props) => {

  const classes = useStyles();
  let theme = useTheme();
  let isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Validate = () => {
    if (!ValidateEmail(email)) {
      setError("Please enter valid Email");
      return false;
    }
    
    UserEmail();

    navigate('/codeverification');
  };

  const UserEmail = async () => {
    setLoading(true);
    const date = new Date();
    const response = await UserEmailHandler(email);
   
    if (response.status == 200) {
    
      setLoading(false);
      //store data in local storage and redux
    }
     else {
      setError(response.data);
      setLoading(false);
    }
  };

  return (
    <MyContainer loading={loading}  access={props.access} timeAdded={props.timeAdded} updateLoginData={props.updateLoginData}>
  
       <h1>The screen where user enter email to which to code is send CodeEmailScreen</h1> 

      
      <Box style={{ width: "100%" }}>
        <Paper elevation={5} align="center" className={classes.paperStyle}>
          <Box style={{margin:"2em 4em" }}>
            <Avatar className={classes.avatarStyle} />
            <Typography  variant="h3">
              Reset Password 
            </Typography>
            <Typography style={{padding:"1em",color:"red"}} variant="h5">{error}</Typography>

            <TextField
              onChange={(e) => setEmail(e.target.value)}
              label="Enter email to which token is sent !"
              placeholder="Enter email"
              fullWidth
              required
              style={{ marginBottom: "2em" }}
            />
           </Box>
           <Typography className={classes.ArrangeBtn} >
                   <Button onClick={Validate} className={classes.btnstyle}>Submit</Button>

          <Link className={classes.linksStyle} to="/signin"><Button className={classes.btnstyle}>Login Here</Button></Link> 
          </Typography>
           </Paper>
           </Box>

     
    </MyContainer>
  )
}


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
// export default connect(mapStateToProps,mapDispatchToProps)(CodeEmailScreen);
export default CodeEmailScreen;