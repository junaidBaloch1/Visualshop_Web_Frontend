import React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Button, Card, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./Shop2Style.jsx";
const Shop = ({ Items }) => {
  const classes = useStyles();
  return (
    <div>
      <IconButton style={{ width: "10em" }}>
        <CardMedia
          component="img"
          height="250"
          image={Items.image}
          alt="Paella dish"
        />
      </IconButton>
      <Button className={classes.Button}>{Items.Title}</Button>
    </div>
  );
};

export default Shop;
