import React from "react";
import { Typography, Box, Container, InputBase } from "@material-ui/core";
import { useStyles } from "./SearchbarStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.title}>
        <Typography
          style={{ marginRight: "0.8em", fontWeight: "bold", padding: "0.1em" }}
          variant="h3"
          className="MuiTypography-alignCenter "
        >
          Shop Your designer Dresses
        </Typography>
        <Typography
          variant="h4"
          style={{ color: "black" }}
          className="MuiTypography-alignCenter "
        >
          Ready to wear dresses tailored for you online. Hurry up while stock
          lasts.
        </Typography>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ borderRadius: "16px" }} className={classes.bar}>
          <div>
            <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
            <InputBase
              className={classes.inputfield}
              placeholder="search by text.."
            />
          </div>
          <FontAwesomeIcon className={classes.cameraIcon} icon={faCamera} />
        </Box>
      </Container>
      <Typography variant="h4" className={classes.title2}>
        Latest Products..
      </Typography>
    </div>
  );
};

export default Searchbar;
