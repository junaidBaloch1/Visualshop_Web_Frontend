import React, { useState } from "react";
import { Typography, Box, IconButton,Button, Modal, InputBase } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useStyles } from "./SearchbarStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faSearch } from "@fortawesome/free-solid-svg-icons";


const Searchbar = ({ filter,imageSelector }) => {
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


          <Box>
          <Button onClick={() => filter(inputText)} className={classes.edgBtn}>Search</Button>
          </Box>
      </Box> 
          
      
      <Box className={classes.searchImg}>
       <input onChange={imageSelector}  accept="image/*" id="icon-button-file"
        type="file" style={{ display: 'none' }} />
      <label htmlFor="icon-button-file">
        <IconButton aria-label="upload picture"
        component="span">
          <FontAwesomeIcon className={classes.cameraIcon} icon={faCamera} />
        </IconButton>
      </label>
      
          <Typography style={{padding:"0.3em"}} variant="h5">search by image..</Typography>

          </Box>
        </Box>

 

    


  


  );
};

export default Searchbar;
