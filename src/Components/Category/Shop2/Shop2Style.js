import { makeStyles, createStyles } from "@material-ui/core/styles";
import { padding } from "@mui/system";
const useStyles = makeStyles((theme) =>
  createStyles({
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
