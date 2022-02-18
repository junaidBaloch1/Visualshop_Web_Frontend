import React from 'react'
import { diff_minutes } from "../../FunctionsFolder/FunctionsFile";
import Navbar from '../Navbar/Navbar'
import Makemodal from './Makemodal';

const Container = (props) => {
    if (props.access != null)
    {
        console.log(" container is checking")
        const date = new Date();
        const timeDiff = diff_minutes(date.getTime(), props.timeAdded);
        if (timeDiff > 50)
        {
            props.updateLoginData(null,null)
        }
    }
  return (
    <div>
        <Navbar />
        <Makemodal open={props.open}/>
        {props.children}
  </div>
  )
}

  
  export default Container