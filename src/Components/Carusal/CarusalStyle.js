import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({

    carousel: {
      // [theme.breakpoints.down('sm')]: {
      //     // backgroundColor: theme.palette.secondary.main,
      //   width:"100%",
      
      // },
      textAlign: "center",
      maxWidth: "100%",
      maxHeight: "700px",
      // margin: "40px auto",
      // marginBottom: "1%",
     
    },

    container: {
      padding: "0px 0px",
     
      boxSizing: "border-box",
      Width: "100%",
      // padding: "5px 5px",
      border:"2.5px solid black",
      borderRadius:"1em",
    },
    card: {
      display: "inline-flex",
      justifyContent: "space-around",
      padding: "2px",
      marginLeft: "4.2%",
      
    },
  })
);
export { useStyles };
