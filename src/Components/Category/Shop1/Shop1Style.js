import { makeStyles, createStyles } from "@material-ui/core/styles";
import { padding } from "@mui/system";
const useStyles = makeStyles((theme) =>
  createStyles({
    alignStyle:{

       display:"flex",
        justifyContent:"space-around",
      alignItems:"center",
       width:"60%",
      //  border:"3px solid black",
    },
    Button: {
      textAlign: "center",
      margin: "1em",
      padding: "0.5em",
      backgroundColor: "#442c2e",
      color: "white",
      display: "flex",
      padding: "0.4em",
      marginLeft: "2.6em",
      width: "8em",
      fontSize: "18px",
      fontFamily: "Arial",
      fontWeight: "bold",

      "&:hover": {
        color: "black",
      },
    },
  })
);
export { useStyles };
