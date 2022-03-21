import React, { useState } from "react";
import { Box,CardMedia, Button, Card, IconButton, Typography, Container } from "@material-ui/core";
import { useStyles } from "./ShopWomenStyle";
import Content from './ShopWomenContent'
const Shop = ({category}) => {
  const classes = useStyles();

  

  return (
    <Container >
       {/* <Box className={classes.head}>Shop by category</Box> */}
      <Button className={classes.title}>Shop Women</Button>
    <Box className={classes.alignStyle}>
      <Box>
        <IconButton>
          <CardMedia
            component="img"
            height="200"
            image={Content[0].image}
            alt="Paella dish"
          />
        </IconButton>
        <Button onClick ={category} className={classes.Button1}>{Content[0].Title}</Button>
      </Box>





      <Box>
        <IconButton>
          <CardMedia
            component="img"
            height="200"
            image={Content[1].image}
            alt="Paella dish"
           
          />
        </IconButton>
        <Button  style={{marginLeft:"2.2em"}} className={classes.Button1}>{Content[1].Title}</Button>
      </Box>
      <Box>
        <IconButton>
          <CardMedia
            component="img"
            height="200"
            image={Content[2].image}
            alt="Paella dish"
           
          />
        </IconButton>
        <Button  style={{marginLeft:"2.2em"}} className={classes.Button1} >{Content[2].Title}</Button>
      </Box>
    </Box> 
    </Container>
  );
};

export default Shop;


