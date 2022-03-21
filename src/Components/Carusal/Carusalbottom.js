import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  Box,
} from "@material-ui/core";
import texts from './CarusalText'
import { useStyles } from "./CarusalbottomStyle";

const Carusalbottom = ({ texts }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              style={{
                backgroundColor: "white",
                width: "85px",
                height: "85px",
              }}
              aria-label="recipe"
            >
              <img className={classes.imag} src={texts.image} alt="" />
            </Avatar>
          }
          titleTypographyProps={{
            variant: "h4",
          }}
          
          title={texts.Title}
          subheaderTypographyProps={{ variant: "h5", color: "inherit" }}
          subheader={texts.subTitle}
        />
      </Card>
      
    </Box>
  );
};

export default Carusalbottom;
