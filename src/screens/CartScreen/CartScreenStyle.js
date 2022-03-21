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

    links :{
      
        display:"flex",
        fontSize: "22px",
        fontFamily: "Helvetica Neue",
        marginTop: "1em",
    },

    headerbox:{
        display:'flex',
        justifyContent:'space-between',
        width:'80%',
        backgroundColor:'#5e35b1',
        padding:"1em",
        margin:"1em",
        

    },
    headertitle:{
        fontSize: "24px",
        fontFamily: "Helvetica Neue",
        // fontWeight: "bold", 
        textTransform:"uppercase",
        color:'white',
    },
    quantity:{
        fontSize: "24px",
        fontFamily: "Helvetica Neue",
        // fontWeight: "bold", 
        textTransform:"uppercase",
        color:'black',
    },
    totalprice:{
        fontSize: "24px",
        fontFamily: "Helvetica Neue",
        // fontWeight: "bold", 
        textTransform:"uppercase",
        color:'black',
        marginTop:"1em",
    },
    productbox:{
        display:'flex',
        justifyContent:'space-between',
        width:'80%',
        

    },
    btnsymbol:{
        fontSize: "22px",
        fontFamily: "Helvetica Neue",
        fontWeight:"bolder",
    },
    qtybox:{
       textAlign:"center",
       marginTop:"1em", 
       marginRight:"18em",
       border:"2px solid black", 
       display:'flex',
    }


})
);
export { useStyles };