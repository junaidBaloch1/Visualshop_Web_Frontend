import React from 'react'
import { diff_minutes } from "../../APIFunctionsFolder/APIFunctionsFile";
import Navbar from '../Navbar/Navbar'
import Makemodal from './Makemodal';
import {Modal, useTheme,useMediaQuery} from '@material-ui/core'

const Container = (props) => {

   let theme = useTheme();
   let isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    // if (props.access != null)
    // {
    //     console.log(" container is checking")
    //     const date = new Date();
    //     const timeDiff = diff_minutes(date.getTime(), props.timeAdded);
    //     if (timeDiff > 50)
    //     {
    //         props.updateLoginData(null,null)
    //     }
    // }
  return (
 <div>
        <Navbar />
        <Makemodal  open={props.loading}/>
        {props.children}
        
  </div>
  )
}

  
  export default Container