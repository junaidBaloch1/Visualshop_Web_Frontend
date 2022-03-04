import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: "40px",
      backgroundColor: "#442C2E",
    },
    card: {
      Width: "100%",
      height: "150px",
      marginTop: "0px",
      backgroundColor: "#442C2E",
      color: "white",
      margin: "2px",
      "&:hover": {
        boxShadow: "0px 0px 12px 7px #442C2E",
      },
    },
    imag: {
      width: "70px",
      height: "60px",
    },
  })
);
export { useStyles };
