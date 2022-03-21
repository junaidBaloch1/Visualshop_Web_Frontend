import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    Button :{
        textAlign: "center",
        marginTop: "1em",
        padding: "0.5em",
        backgroundColor: "#442c2e",
        color: "white",
        display: "flex",
       // padding: "0.4em",
        //marginLeft: "2.6em",
        width:"10em",
        fontSize: "24px",
        fontFamily: "Helvetica Neue",
        fontWeight: "bold",

        '&:hover':{
            color:"black",
        }
     

    },

    links :{
      
        display:"flex",
        fontSize: "22px",
        fontFamily: "Helvetica Neue",
        marginTop: "1em",
    },
    StyleProduct:{
       width:"80%",
       margin: " 2em auto",
    },
    title2: {
        marginLeft: "10%",
        marginTop: "2%",
        marginBottom: "1%",
        color: "black",
        fontWeight: "bold",
        fontFamily: "Arial",
      },

     category:{
        display:"flex",
        justifyContent:"space-between",
        // backgroundColor:"#fc7703", 
        borderRadius:"6px", 
        border:"2px solid black"
     },

     btn: {
      



        display:"flex",
        justifyContent:"space-between", 
        padding:"0.8em",
        

       
      
      },
    
})
);
export { useStyles };