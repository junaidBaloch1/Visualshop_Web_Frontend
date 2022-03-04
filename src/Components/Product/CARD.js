import React,{useState} from "react";
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Box,
  // ExpandMoreIcon,
  // FavoriteIcon,
  //ShareIcon,
} from "@material-ui/core";
import CardButton from "./CardButton";
import { connect } from "react-redux";
import * as productAction from '../../store/actions/productActions/productActions'
import { Link } from "react-router-dom";
import TextRating from "../Rating";
import { useStyles } from "./CardStyle";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";

const CARD = ({product}) => {
  const classes = useStyles();
  // console.log(`${product.rating}`);

  const feedbackCalculator = () =>{

    if(product.feedbacks == null || product.feedbacks.length == 0)
      return 0;

    let Sum = 0;
    var totalFeedback=0;

    product.feedbacks.map(feedback => {
        if(feedback.feedback)
        {
          Sum = Sum + feedback.feedback.rating
         var sum = Math.floor(Sum);
          var Remainder = Sum % 
          totalFeedback++;
        }
    })
    
    const review = Sum/(totalFeedback)

     return parseInt(review);


}
  
     

 
  return (
    <Box>
      
      <Card className={classes.card}>
        <Link to={`/product/${product.id}`}>
          <CardMedia
            component="img"
            height="400"
            image={product.images[0].image}
            alt="Not found"
          />
        </Link>
        <CardHeader title={`${(product.name).substring(0,40)}...`} />
        <CardContent
          style={{
            fontSize: "25px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ fontSize: "inherit" }}>
            ${product.price}
          </Typography>
          <AddShoppingCartSharpIcon
            sx={{
              fontSize: "1.8em",
             
            }}
          />
        </CardContent>
        <Box style={{marginTop:"0px"}}>
        <TextRating 
          value={feedbackCalculator()}
          text={`No. of Review (${product.feedbacks.length}) `}
        />
        </Box>
      </Card>
      <CardButton product={product} />
    </Box>
  );
};

export default CARD;




