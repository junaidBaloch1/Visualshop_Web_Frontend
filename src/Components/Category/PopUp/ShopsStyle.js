import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({

    btn: {
        // textAlign: "center",
      
        // padding: "0.5em",
        // backgroundColor: "#442c2e",
        color: "black",
        // width: "50%",
        fontSize: "22px",
        fontFamily: "Helvetica Neue",
        fontWeight: "bold",
        // backgroundColor:"#442c2e",
        "&:hover": {
          color: "black",
          
        },
      },
 

})
);
export { useStyles };