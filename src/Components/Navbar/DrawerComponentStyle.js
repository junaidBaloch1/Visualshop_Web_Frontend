import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navlinks: {
   
    display: "flex",
    fontFamily: "Helvetica Neue",
  },
  
  link: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Helvetica Neue",
    fontSize: "24px",
    marginRight:"2em",
   
    // marginLeft: theme.spacing(4),
    "&:hover": {
      borderBottom: "3px solid black",
      
    },
  },
 
 
 
 
}));

export { useStyles };
