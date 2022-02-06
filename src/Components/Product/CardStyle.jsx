import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: "#442C2E",
      color: "white",
      marginBottom: "5px",

      "&:hover": {
        boxShadow: "0px 0px 8px 5px #442C2E",
        // backgroundColor: "#b37924",
        backgroundColor: "#a86032",

        height: "50.3em",
      },
    },
  })
);
export { useStyles };
