import React, { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import { Button, Card, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./Shop1Style.jsx";
const Shop = ({ product, Items }) => {
  const classes = useStyles();

  // console.log(product.Category_id);

  const [Item, setItem] = useState();
  const filterItem = (categoryItem) => {
    const updateItems = () =>
      product.filter((CurrentElement) => {
        return CurrentElement.Category_id == categoryItem;
      });
    setItem(updateItems);
  };

  return (
    <>
      <div>
        <IconButton
          onClick={() => filterItem(product.Category_title)}
          style={{ width: "10em" }}
        >
          <CardMedia
            component="img"
            height="250"
            image={Items.image}
            alt="Paella dish"
          />
        </IconButton>
        <Button className={classes.Button}>{Items.Title}</Button>
      </div>
    </>
  );
};

export default Shop;
