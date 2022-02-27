import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navlinks: {
   
    display: "flex",
    fontFamily: "Helvetica Neue",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    color: "black", 
    width:"100%",
    
     
  },
  avatarStyle: {
    backgroundColor: "#442c2e",
    height: "2em",
    width: "2em",
   
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "26px",
    alignItems:"center",
    marginLeft: theme.spacing(15),
    fontFamily: "Helvetica Neue",
  
    "&:hover": {
      borderBottom: "3px solid black",
      
    },
  },
  profile: {
    textDecoration: "none",
    color: "black",
    fontSize: "26px",
    alignItems:"center",
    marginLeft: theme.spacing(15),
    fontFamily: "Helvetica Neue",
  
    
  },
  AppColor: {
    backgroundColor: "#ff9100",
    height: "90px",
    padding: "0.8em ",
  },
 
  buttonstyle: {
    marginRight: "3em",
    float: "right",
    padding: "1em",
  },
  Container :{
    marginRight:"11em",   
    display:"flex",
    justifyContent:"flex-end"
  }
 
}));

export { useStyles };
