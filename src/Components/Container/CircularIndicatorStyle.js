import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({

    
      Circle: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
          //  backgroundColor: theme.palette.secondary.main,
         
          marginTop:"40%"
        
        },
        [theme.breakpoints.down('xs')]: {
            //  backgroundColor: theme.palette.secondary.main,
           
            marginTop:"65%"
          
          },
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"20%"
    }

    })
    );
    export { useStyles };