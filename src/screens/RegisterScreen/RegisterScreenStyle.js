import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({

    header: {
        marginLeft: theme.spacing(10),
        display: "flex",
      },
      paperStyle: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
          //  backgroundColor: theme.palette.secondary.main,
          width:"60%",
        
        },
       
        [theme.breakpoints.down('md')]: {
          //  backgroundColor: theme.palette.primary.main,
          width:"80%",
        
        },
      
         margin: "0em auto",
         padding:"2em",
        
      },

      avatarStyle: {
        backgroundColor: "#442c2e",
        height: "3em",
        width: "3em",
        marginBottom: "1em",
        
        
        
      },
      btnstyle: {
        margin: "8px 0",
        backgroundColor: "#442c2e",
        color: "white",
        width:"13em",
       
        fontSize: "21px",
        "&:hover": {
          color: "black",
          backgroundColor: "white",
      },
      formStyle: {
        alignItems:"center"
        },
      },
      linksStyle: {
        fontSize: "22px",
        textTransform: "capitalize",
        color: "blue",
        textDecoration: "None",
       
      },
      ArrangeBtn :{
        
          display: "flex",
          // margin: "0em 11em",
          alignItems:'center',
          flexDirection: "column",
        
      },
      // buttonstyle: {
      //   color: "blue",
      //   fontSize: "22px",
      //   textTransform: "capitalize",
      //   textDecoration: "underline",
      //   "&:hover": {
      //     backgroundColor: "white",
      //     textDecoration: "underline",
      //   },
      // },
    })
    );
    export { useStyles };