import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  box: {
    padding: "150px 0px",
    background: "#442c2e",

    bottom: "0",
    maxWidth: "lg",
    color: "white",
    marginTop: "4em",
    marginLeft: "1px",
    fontSize: "24px",

    // height: "700px",
  },

  container: {
    maxWidth: "lg",
    marginLeft: "16em",
    textAlign: "center",
    borderBottom: "2px solid white",

    // marginBottom: "20px",
    // border: "2px solid white",
  },

  headerbox: {
    fontSize: "24px",
    fontWeight: "bold",

    "&:hover": {
      color: "green",
      fontSize: "28px",
      fontWeight: "normal",
    },
  },
}));

export { useStyles };
