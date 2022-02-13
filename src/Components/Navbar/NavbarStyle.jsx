import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
    fontFamily: "Helvetica Neue",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",

    "&:hover": {
      fontSize: "34.5px",
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "26px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      borderBottom: "2px solid white",
      fontFamily: "Helvetica Neue",
    },
  },
  AppColor: {
    backgroundColor: "#442C2E",
    height: "90px",
    padding: "12px 8px",
  },
  Modalstyle: {
    height: "45em",
    marginLeft: "31%",
    marginRight: "31%",
    marginTop: "12em",
    borderRadius: "2em",
  },
  buttonstyle: {
    marginRight: "3em",
    float: "right",
    padding: "1em",
  },
  crossIcon: {
    color: "red",
    fontWeight: "bolder",
    fontSize: "32px",
  },
}));

export { useStyles };
