import React,{useState} from 'react';
import MyContainer from '../../../Components/Container/Container'
import * as userActions from '../../../store/actions/userActions/userActions'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { useStyles } from './SignScreenStyle';
import { UserLoginHandler, ValidateEmail } from '../../../FunctionsFolder/FunctionsFile';



import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const date = new Date();

const SignScreen = (props) => {
     
     const classes = useStyles();

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("")
     const [loading, setLoading] = useState(false);
     

     const Validate = () => {
      if (!ValidateEmail(email)) {
          setError("Please enter valid Email")
          return false;
      }
      if (password == "") {
          setError("Please Enter Password")
          return false;
      }
      UserLogin()
  }

     const UserLogin =async  () =>{
      setLoading(true)
     
     const  response = await UserLoginHandler(email,password);
      
     if(response.status == 200){

      const LOGIN_INFO = {
        access: response.data.access,
        time: date.getTime()
      }
          setLoading(false);
        //store data in local storage and redux
        props.updateLoginData(response.data.access, date.getTime())
      
        localStorage.setItem('LOGIN_INFO', JSON.stringify(LOGIN_INFO));
     }
     else{
       setError(response.data);
       setLoading(false);

     }


     }

  return (
    <MyContainer>
      <Grid>
        <h1>This is user signin screen</h1>
        <h2>{error}</h2>
      <Paper elevation={2} className={classes.paperStyle}>
        <Grid align="center">
       
          <Avatar className={classes.avatarStyle}></Avatar>
          <Typography variant="h4">Sign In</Typography>
          
      
        </Grid>
        <FormControl className={classes.formStyle}>
          
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel control={<Checkbox name="checked" color="primary" />} label="Remember me"/>
          <Link to='/profile'><Button type="submit" variant="contained" onClick={Validate} className={classes.btnstyle}>Signin</Button></Link>
          <Button type="submit" variant="contained" className={classes.btnstyle}>Login With Google</Button>
           </FormControl>
        <Typography>
          <Link  className={classes.linksStyle} to='/codeEmail'>Forget Password</Link><br/>
          <Link className={classes.linksStyle} to='/signup'>SignUp Here</Link>
        </Typography>
      </Paper>
    </Grid>
    </MyContainer>
   
  )
};

const mapStateToProps = state => {
  return {
      access:state.userReducer.access,
      timeAdded:state.userReducer.timeAdded
  };
};
const mapDispatchToProps = dispatch => {
  return {
      updateLoginData: (access,timeAdded) => dispatch(userActions.updateLoginData(access,timeAdded)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(SignScreen);
