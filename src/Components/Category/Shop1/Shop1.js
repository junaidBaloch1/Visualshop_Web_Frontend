import React, { useState } from "react";
import { Box,CardMedia, Button, Card, IconButton, Typography, Container } from "@material-ui/core";
import { useStyles } from "./Shop1Style";
import Content from './Shop1Content'
const Shop = () => {
  const classes = useStyles();

 

  return (
    <Container>
    <Box className={classes.alignStyle}>
      <Box>
        <IconButton>
          <CardMedia
            component="img"
            height="250"
            image={Content[0].image}
            alt="Paella dish"
          />
        </IconButton>
        <Button className={classes.Button}>{Content[0].Title}</Button>
      </Box>
      <Box>
        <IconButton>
          <CardMedia
            component="img"
            height="250"
            image={Content[1].image}
            alt="Paella dish"
          />
        </IconButton>
        <Button className={classes.Button}>{Content[1].Title}</Button>
      </Box>
      <Box>
        <IconButton>
          <CardMedia
            component="img"
            height="250"
            image={Content[2].image}
            alt="Paella dish"
          />
        </IconButton>
        <Button className={classes.Button}>{Content[2].Title}</Button>
      </Box>
    </Box>
    </Container>
  );
};

export default Shop;


{/* <Typography className={classes.title} variant="h3">
Shop By Category
</Typography>
<Container className={classes.container}>
<Typography className={classes.shop1} variant="h4">
  Women's Shop
</Typography>
{shop1Content.map((data) => {
  return (
    <Grid
      item
      sm={12}
      md={6}
      lg={4}
      xl={3}
      className={classes.card}
      key={data.id}
    >
      <Shop1 product={() => products} Items={data} />
    </Grid>
  );
})}
</Container> */}
