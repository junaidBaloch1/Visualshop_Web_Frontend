import React from "react";
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  // ExpandMoreIcon,
  // FavoriteIcon,
  //ShareIcon,
} from "@material-ui/core";
import CardButton from "./CardButton";
import { Link } from "react-router-dom";
import TextRating from "../Rating";
import { useStyles } from "./CardStyle";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";

const CARD = ({ product }) => {
  const classes = useStyles();
  // console.log(`${product.rating}`);
  return (
    <div>
      <Card className={classes.card}>
        <Link to={`/product/${product._id}`}>
          <CardMedia
            component="img"
            height="400"
            image={product.image}
            alt="Not found"
          />
        </Link>
        <CardHeader title={product.name} />
        <CardContent
          style={{
            fontSize: "25px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ fontSize: "inherit" }}>
            RS.{product.Budget}
          </Typography>
          <AddShoppingCartSharpIcon
            sx={{
              fontSize: "1.8em",
              "&:hover": {
                fontSize: "1.84em",
              },
            }}
          />
        </CardContent>
        <TextRating
          value={product.rating}
          text={`No. of Review (${product.numReviews}) `}
        />
      </Card>
      <CardButton product={product} />
    </div>
  );
};

export default CARD;
