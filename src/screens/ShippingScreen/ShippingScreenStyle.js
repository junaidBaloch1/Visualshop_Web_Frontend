import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    Button: {
      textAlign: "center",
      padding: "0.6em",
      backgroundColor: "#b28900",
      display: "flex",
      marginLeft: "1.3em",
      width: "16em",
      fontSize: "22px",
      fontFamily: "Helvetica Neue",
      color: "white",
      "&:hover": {
        color: "black",
      },
    },
    links: {
      display: "flex",
      fontSize: "22px",
      fontFamily: "Helvetica Neue",
      marginTop: "1em",
    },
    textField: {
      marginBottom: "1.5em",
      width: "100%",
      fontSize: "28px",
      fontFamily: "Helvetica Neue",
      fontWeight: "bold",
    },

    headertitle: {
      fontSize: "28px",
      fontFamily: "Helvetica Neue",
      fontWeight: "bold",
      marginLeft: "0em",
      marginTop: "1em",
      marginBottom: "1em",
  
      textTransform: "uppercase",
      color: "black",
      // borderBottom:"2px solid black"
    },

    reviewBox: {
      border: "2px solid black",
    },
    productbox: {
      display: "flex",
      justifyContent: "space-between",
      width: "22em",
      // border:"5px solid yellow",
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
    totalprice: {
      fontSize: "28px",
      fontFamily: "Helvetica Neue",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "black",
      marginTop: "0.5em",
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
    links: {
      display: "flex",
      fontSize: "22px",
      fontFamily: "Helvetica Neue",
      // marginTop: "1em",
      textDecoration: "none",
      display: "flex",
      justifyContent:"center",
    },
    Button: {
      textAlign: "center",
      marginTop: "1em",
      padding: "0.3em",
      backgroundColor: "#b28900",
      color: "white",
      // display: "flex",
      // justifyContent:"center",
      width: "14em",
      fontSize: "22px",
      fontFamily: "Helvetica Neue",
      color: "white",
      "&:hover": {
        color: "black",
      },
    },
    CashBtn: {
      textAlign: "center",
      marginTop: "1em",
      padding: "0.2em",
      backgroundColor: "#b28900",
      color: "white",
      display: "flex",
      width: "11em",
      fontSize: "20px",
      fontFamily: "Helvetica Neue",
      color: "white",
      "&:hover": {
        color: "black",
      },
    },

  })
);
export { useStyles };
