import React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Button,Box,Container, Card, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./ShopMenStyle";
import Content from './ShopMenContent'
const Shop = () => {
  const classes = useStyles();
  return (
    <Container >
    <Button className={classes.title}>Shop Men</Button>
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
      <Button className={classes.Button1}>{Content[0].Title}</Button>
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
      <Button className={classes.Button2}>{Content[1].Title}</Button>
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
      <Button className={classes.Button3} >{Content[2].Title}</Button>
  </Box>
  </Box> 
  </Container>
  );
};

export default Shop;
