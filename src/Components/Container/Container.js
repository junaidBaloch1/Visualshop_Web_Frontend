import React from 'react'
import { diff_minutes } from "../../FunctionsFolder/APIFunctionsFile";
import Navbar from '../Navbar/Navbar'
import Makemodal from './Makemodal';
import Footer from '../Footer/Footer'

const Container = (props) => {

  
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
        <Navbar access={props.access} />
        <Makemodal  open={props.loading}/>
       
        {props.children}
        <Footer/>
        
  </div>
  )
}

  
  export default Container