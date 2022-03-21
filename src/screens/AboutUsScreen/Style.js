import { makeStyles, createStyles } from "@material-ui/core/styles";
import { padding } from "@mui/system";

const useStyles = makeStyles((theme) =>
  createStyles({

    title:{
        
        marginTop: "0.5em",
        borderBottom:"3px solid black",
        width:"8.5em",
        marginLeft:"3em",
        fontSize: "30px",
        fontFamily: "Helvetica Neue",
        fontWeight: "bolder", 
    },
box:{
    
        fontSize: "24px",
        width:"90%",
        fontFamily: "Helvetica Neue",
        marginLeft:"4em",
        padding:"0.5em 0em",
       
},

contact:{

    marginTop: "0.5em",
    borderBottom:"3px solid black",
    width:"5em",
    marginLeft:"3em",
    fontSize: "30px",
    fontFamily: "Helvetica Neue",
    fontWeight: "bolder", 

},
name:{
    fontSize: "30px",
    marginTop: "0.5em",
    fontFamily: "Helvetica Neue",
    fontWeight: "bolder",
    marginLeft:"3em", 
}









})
);
export { useStyles };