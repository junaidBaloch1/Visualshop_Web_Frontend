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
    

    "&:hover": {
      fontSize: "34.5px",
      
     
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "26px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      borderBottom: "3px solid black",
      fontFamily: "Helvetica Neue",
    },
  },
  AppColor: {
    backgroundColor: "#ff9100",
    height: "90px",
    padding: "12px 8px",
  },
 
  buttonstyle: {
    marginRight: "3em",
    float: "right",
    padding: "1em",
  },
 
}));

export { useStyles };
