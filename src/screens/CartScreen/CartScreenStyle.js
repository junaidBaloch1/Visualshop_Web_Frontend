import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    Button: {
      textAlign: "center",
      marginTop: "4.2em",
      padding: "0.6em",
      backgroundColor: "#b28900",
      color: "white",
      display: "flex",
      width: "100%",
      fontSize: "22px",
      fontFamily: "Helvetica Neue",
      color: "white",
      "&:hover": {
        color: "black",
      },
    },
    mtitle: {
      fontSize: "24px",
      fontFamily: "Helvetica Neue",
      // fontWeight: "bolder",
      textTransform: "capitalize",
      marginLeft: "0.8em ",
    },

    links: {
      display: "flex",
      fontSize: "22px",
      fontFamily: "Helvetica Neue",
      // marginTop: "1em",
      textDecoration: "none",
    },

    headerbox: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      backgroundColor: "#b28900",
      // backgroundColor:'#6d4c41',
      padding: "1em",
      // margin:"1em",
    },
    headertitle: {
      fontSize: "24px",
      fontFamily: "Helvetica Neue",
      // fontWeight: "bold",

      textTransform: "uppercase",
      color: "white",
    },
    Maintitle: {
      fontSize: "32px",
      fontFamily: "Helvetica Neue",
      // fontWeight: "bold",

      textTransform: "uppercase",
      color: "black",
      margin: "0.5em",
    },
    cartSummary: {
      fontSize: "28px",
      fontFamily: "Helvetica Neue",
      fontWeight: "bold",

      textTransform: "capitalize",
      color: "black",
      // margin:"0.5em",
    },
    cartSummaryText: {
      fontSize: "24px",
      fontFamily: "Helvetica Neue",
      // fontWeight: "bold",

      textTransform: "lowercase",
      color: "black",
      marginTop: "1em",
    },
    totalprice: {
      fontSize: "28px",
      fontFamily: "Helvetica Neue",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "black",
      marginTop: "0.5em",
    },
    productbox: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      // border:"3px solid yellow",
    },

    quantity: {
      fontSize: "24px",
      fontFamily: "Helvetica Neue",
      fontWeight: "bold",
      // textTransform:"uppercase",
      color: "black",
    },
    qtybox: {
      textAlign: "center",
      marginTop: "1em",
      //    marginRight:"19em",
      padding: "0.4em",
      width: "6em",
      border: "3px solid #b28900",
      //    display:'flex',
    },
    removebtn: {
      fontSize: "20px",
      fontFamily: "Helvetica Neue",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "black",
      marginTop: "1em",
      // padding:'0.5em',
      width: "4.7em",
      textDecoration: "none",
      borderBottom: "3px solid #b28900",
    },
    updatelink: {
      fontSize: "20px",
      fontFamily: "Helvetica Neue",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "black",
      marginTop: "1em",
      padding: "0.3em",
      width: "4.7em",
      textDecoration: "none",
      borderBottom: "3px solid #b28900",
    },
  })
);
export { useStyles };
