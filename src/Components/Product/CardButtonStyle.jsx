import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: "#442c2e",

      textAlign: "center",
    },
    Button: {
      color: "white",
    },
  })
);
export { useStyles };
