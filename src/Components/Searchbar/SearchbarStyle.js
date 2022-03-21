import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
   
    bar: {
      width: "100%",
      // border: "2px solid #442C2E",
    
      fontFamily: "Helvetica Neue",
      fontSize: "26px",
      display: "flex",
      // width:"100%",
      // justifyContent: "space-between",
      padding:"0.3em",
      
         
    },
    inputfield: {
      marginLeft: "10px",
      fontSize: "26px",
     
      color: "black",
      width:"100%",
      fontFamily: "Helvetica Neue",
      
     
     
      
    },
    SearchIcon: {
      fontSize: "26px",
      textAlign: "center",
      color: "black",
      marginTop:"13px",
      // padding:"10px",
      // width:"100%",
      
    },
    cameraIcon: {
      fontSize: "30px",
      textAlign: "center",
       margin: "0px",
     
      color: "black",
     
      
     
    },
    container :{
      width:"70%",
      display:"flex",
      border: "2px solid black",
      borderRadius:"6px",
      //  justifyContent:"space-around",
      // flexDirection:"flex-start",
      // border:"3px solid green",
    

    },
   
   
    searchImg:{
      display:"flex", 
      border:"2px solid black", 
      justifyContent:"space-around",
      borderRadius:"6px",
      // marginRight:"6px",
      textAlign:"center",
     
      padding:"1em 0em",
      // height:"4em"
    },
   
    edgBtn:{
      backgroundColor:"#442c2e",
      color:"white",
      // border:"2px solid black",
     
      fontFamily:"Helvetica Neue",
      // border:"3px solid red",
      fontSize:"20px",
      padding:"1em",
      // position:"relative",
       width:"10em",
      
      '&:hover':{
        color:'black',
        fontWeight:"bold",
      }

    },
    align:{
      display:"flex",
      flexDirection:"row",
       justifyContent:"space-between",
      alignItems:"center",
      // padding:"2em",
      width:"45%",
      marginLeft:"1%",
      // marginRight:"3%",

      // border:"3px solid red",
      
      
    },

    
  })
);

export { useStyles };
