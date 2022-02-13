import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({

    Button :{
        textAlign: "center",
        marginTop: "1em",
        padding: "1em",
        backgroundColor: "#442c2e",
        color: "white",
        display: "flex",
       // padding: "0.4em",
        //marginLeft: "2.6em",
        // width:"10em",
        fontSize: "22px",
        fontFamily: "Helvetica Neue",
        fontWeight: "bold",
     

    },



})
);
export { useStyles };