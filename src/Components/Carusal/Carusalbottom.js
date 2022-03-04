import React from "react";
import {
  Container,
  Card,
  Typography,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { useStyles } from "./CarusalbottomStyle";

const Carusalbottom = ({ texts }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
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
    </div>
  );
};

export default Carusalbottom;
