import { makeStyles, createStyles } from "@material-ui/core/styles";
import { padding } from "@mui/system";
const useStyles = makeStyles((theme) =>
  createStyles({
    alignStyle: {
      display: "flex",
      flexDirection: "flex-end",
      marginLeft: "10em",
      width: "80%",
    },
    Button1: {
      textAlign: "center",
      marginLeft: "1em",
      padding: "0.4em",
      backgroundColor: "#442c2e",
      color: "white",
      width: "8em",
      fontSize: "18px",
      fontFamily: "Helvetica Neue",
      fontWeight: "bold",

      "&:hover": {
        color: "black",
      },
    },
   
    
   
    title: {
      color: "black",
      fontSize: "22px",
      margin: "1em",
      fontWeight: "bold",
      fontFamily: "Helvetica Neue",
      width: "8.3em",
      textTransform: "uppercase",
      borderBottom: "3px solid black",
    },
    // head: {
    //   color: "black",
    //   fontSize: "36px",
    //   margin: "1em",
    //   textAlign: "center",
    //   fontWeight: "bold",
    //   fontFamily: "Helvetica Neue",
    //   // width:"6.9em",
    //   textTransform: "uppercase",
    // },
  })
);
export { useStyles };
