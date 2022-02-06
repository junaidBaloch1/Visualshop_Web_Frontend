import React from "react";
import { CardActions, Link, Card, IconButton } from "@material-ui/core";
import { useStyles } from "./CardButtonStyle";
const CardButton = ({ product }) => {
  const classes = useStyles();
  //console.log(product._id);
  return (
    <div>
      <Card className={classes.card}>
        <Link to={`/product/${product._id}`}>
          <IconButton className={classes.Button}>See Detail</IconButton>
        </Link>
      </Card>
    </div>
  );
};

export default CardButton;
