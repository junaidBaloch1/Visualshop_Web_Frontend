import { makeStyles, createStyles } from "@material-ui/core/styles";
import { padding } from "@mui/system";

const useStyles = makeStyles((theme) =>
  createStyles({
    Button :{
        textAlign: "center",
       
        
        color: "black",
        display: "flex",
       
        width:"2em",
        fontSize: "26px",
        fontFamily: "Helvetica Neue",
         fontWeight: "bolder",
        '&:hover':{
            color:"white",
            backgroundColor: "#442c2e",
        }
     

    },
    Cart :{
        textAlign: "center",
       
        backgroundColor: "#442c2e",
        color: "white",
        display: "flex",
       
        width:"10em",
        fontSize: "24px",
        fontFamily: "Helvetica Neue",
        // fontWeight: "bolder",
        '&:hover':{
             color:"black",
            backgroundColor: "white",
        }
     

    },


    links :{
      
        display:"flex",
        fontSize: "22px",
        fontFamily: "Helvetica Neue",
        marginTop: "1em",
    },
    title:{
        
        marginTop: "2.5em",
        fontSize: "24px",
        fontFamily: "Helvetica Neue",
        fontWeight: "bolder", 
    },
    titleText:{

        fontSize: "24px",
        fontFamily: "Helvetica Neue",
        
    },
    box:{
        
          display: "flex",
          margin: "2em 0em",
          justifyContent: "space-between", 
          flexDirection: "row" ,
          padding:"2em 0em",

    },
    mtitle:{
       
        fontSize: "24px",
        fontFamily: "Helvetica Neue",
        fontWeight: "bolder", 
        textTransform:"capitalize",
        // padding:"1em 0em",
    },

    Div :{
        marginTop: "2em",
         display: "flex",
          margin: "0em 10em", 
          flexDirection: "row",
          marginLeft:"20em"
    }
})
);
export { useStyles };