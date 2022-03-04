import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    carousel: {
      textAlign: "center",
      maxWidth: "100%",
      maxHeight: "700px",
      // margin: "40px auto",
      marginBottom: "1%",
    },
    container: {
      padding: "0px 0px",
      boxShadow:
        "2px 2px 2px 2px gold, 3px 3px 5px 5px red, 8px 8px 5px 5px green",
      boxSizing: "border-box",
      maxWidth: "2015px",
      padding: "5px 5px",
    },
    card: {
      display: "inline-flex",
      justifyContent: "space-around",
      padding: "2px",
      marginLeft: "5%",
    },
  })
);
export { useStyles };
