import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({

    header: {
        marginLeft: theme.spacing(10),
        display: "flex",
      },
      paperStyle: {
        padding: "1em",
        height: "55em",
        width: "80em",
        margin: "0em auto",
        borderRadius: "2em",
      },
      avatarStyle: {
        backgroundColor: "#442c2e",
        height: "3em",
        width: "3em",
        marginLeft: "1.5em",
        marginTop: "1em",
      },
      btnstyle: {
        display: "flex",
        width: "10em",
        marginTop: "1em",
        marginLeft: "4em",
        textAlign: "center",
    
        margin: "8px 0",
        backgroundColor: "#442c2e",
        color: "white",
        // Width: "2em",
        fontSize: "21px",
        "&:hover": {
          color: "black",
          backgroundColor: "white",
        },
      },
      formStyle: {
        margin: "0em 5em",
        padding: "0em 5em",
        // fontSize: "21px",
      },
      linksStyle: {
        fontSize: "22px",
        textTransform: "capitalize",
        color: "blue",
      },
      buttonstyle: {
        color: "blue",
        fontSize: "22px",
        textTransform: "capitalize",
        textDecoration: "underline",
        "&:hover": {
          backgroundColor: "white",
          textDecoration: "underline",
        },
      },
})
);
export { useStyles };