import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      cursor: "pointer",
      color: "black",
      marginTop: "5%",
      marginBottom: "2%",
      // boxShadow:
      //   "3px 3px 3px 3px #442C2E, 3px 3px 2px 2px red, 3px 3px 2px 2px green",
      fontFamily: "Arial",
      Typography: {
        color: "gold",
        "&:hover": {
          fontWeight: "bold",
        },
      },
    },
    bar: {
      width: "100%",
      height: "50px",
      marginTop: "20px",
      border: "3px solid #442C2E",
      // boxShadow:
      //   "2px 2px 2px 2px #442C2E, 2px 2px 1px 1px red, 2px 2px 1px 1px green",
      fontFamily: "Arial",
      fontSize: "26px",
      display: "flex",
      justifyContent: "space-between",
    },
    inputfield: {
      marginLeft: "20px",
      fontSize: "26px",
      padding: "1px",
      //backgroundColor: " #442C2E",
      color: "black",
      borderRadius: "10px",
      fontFamily: "Arial",
    },
    SearchIcon: {
      fontSize: "26px",
      textAlign: "center",
      marginLeft: "10px",
      padding: "1px",
      color: "black",
      "&:hover": {
        fontSize: "28px",
      },
    },
    cameraIcon: {
      fontSize: "32px",
      textAlign: "center",
      marginRight: "30px",
      marginTop: "6px",
      padding: "1px",
      color: "black",
      "&:hover": {
        fontSize: "34px",
        // color: "green",
      },
    },

    title2: {
      marginLeft: "8%",
      marginTop: "2%",
      marginBottom: "1%",
      color: "black",
      fontWeight: "bold",
      fontFamily: "Arial",
    },
  })
);

export { useStyles };
