import React, { useState } from "react";
import { Typography, Box, Button, Modal, InputBase } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useStyles } from "./SearchbarStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faSearch } from "@fortawesome/free-solid-svg-icons";


const Searchbar = ({ filter }) => {
  const classes = useStyles();

  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };


  return (

    <Box className={classes.align}>
      <Box className={classes.container}>

        <Box className={classes.bar}>
          <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
          <InputBase
            className={classes.inputfield}
            placeholder="search by text.."
            onChange={inputHandler}
            id="outlined-basic"
            variant="outlined"
             fullWidth
           
          />

        </Box>


        
          <Button onClick={() => filter(inputText)} className={classes.edgBtn}>Search</Button>
        
      </Box>
      

        <Box className={classes.searchImg}>
          <Button className={classes.cameraIcon}  ><FontAwesomeIcon icon={faCamera} /></Button>
          <Typography style={{padding:"0.3em"}} variant="h5">search by image..</Typography>
        </Box>


    


    </Box>


  );
};

export default Searchbar;
