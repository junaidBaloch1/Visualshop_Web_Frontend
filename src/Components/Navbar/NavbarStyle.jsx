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
    fontSize:"30px",
    color: "white",
    textTransform: "uppercase" , 
    width:"100%",
    
     
  },
  avatarStyle: {
    backgroundColor: "white",
    color:"black",
    height: "2em",
    width: "2em",
   
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    alignItems:"center",
    textTransform: "uppercase" ,
    marginLeft: theme.spacing(15),
    fontFamily: "Helvetica Neue",
  
    "&:hover": {
      borderBottom: "3px solid white",
      
    },
  },
  links:{
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    alignItems:"center",
    textTransform: "uppercase" ,
    marginLeft: theme.spacing(15),
    fontFamily: "Helvetica Neue",
  
    "&:hover": {
      borderBottom: "3px solid white",
      
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
    backgroundColor: "#442c2e",
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
  }, btn:{
    backgroundColor:"#442c2e",
    color:"white",
    padding:"0.8em",
    margin:"0px",
    width:"10em",
    fontFamily:"Helvetica Neue",
    fontSize:"20px",
    borderRadius:"6px",
   
   
  },
 
}));

export { useStyles };
