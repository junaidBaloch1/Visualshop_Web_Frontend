import { makeStyles, createStyles } from "@material-ui/core/styles";
import { padding } from "@mui/system";
const useStyles = makeStyles((theme) =>
  createStyles({
    alignStyle: {
      display: "flex",

      flexDirection: "flex-end",
      marginLeft: "10em",

      width: "70%",
    },
    Button1: {
      textAlign: "center",
      marginLeft: "1.2em",
      padding: "0.7em",
      backgroundColor: "#442c2e",
      color: "white",
      width: "60%",
      fontSize: "18px",
      fontFamily: "Helvetica Neue",
      fontWeight: "bold",

      "&:hover": {
        color: "black",
      },
    },
    Button2: {
      textAlign: "center",
      marginLeft: "2.8em",
      padding: "0.7em",
      backgroundColor: "#442c2e",
      color: "white",
      width: "60%",
      fontSize: "18px",
      fontFamily: "Helvetica Neue",
      fontWeight: "bold",

      "&:hover": {
        color: "black",
      },
    },
    Button3: {
      textAlign: "center",
      marginLeft: "2.8em",
      padding: "0.7em",
      backgroundColor: "#442c2e",
      color: "white",
      width: "60%",
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
      width: "6.3em",
      textTransform: "uppercase",
      borderBottom: "3px solid black",
    },
  })
);
export { useStyles };
