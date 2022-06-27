import React from "react";
import { Box, Container, Link, Typography, Grid } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useStyles } from "./FooterStyle.jsx";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Box className={classes.box} >
        <Container  className={classes.container} >
          <Grid className={classes.breakpoint} container>
            <Grid item sm={12} md={6} lg={4} xl={3}>
              <Box className={classes.headerbox}>Get to Know Us</Box>
              <Box mt={2}>
                <Link color="inherit" href="#">
                  Aim and some
                </Link>
              </Box>
              <Box mt={1}>
                <Link color="inherit" href="#">
                  Vision
                </Link>
              </Box>
              <Box mt={1}>
                <Link color="inherit" href="#">
                  Testimonials
                </Link>
              </Box>
            </Grid>

            <Grid item sm={12} md={6} lg={4} xl={3}>
              <Box className={classes.headerbox}>Services</Box>
              <Box mt={2}>
                {" "}
                <Link color="inherit" href="#">
                  Writing
                </Link>
              </Box>
              <Box mt={1}>
                <Link color="inherit" href="#">
                  Internships
                </Link>
              </Box>
              <Box mt={1}>
                <Link color="inherit" href="#">
                  Coding
                </Link>
              </Box>
              <Box mt={1}>
                <Link color="inherit" href="#">
                  Teaching
                </Link>
              </Box>
            </Grid>

            <Grid item sm={12} md={6} lg={4} xl={3}>
              <Box className={classes.headerbox}>Contact Us</Box>
              <Box mt={2}>
                {" "}
                <Link color="inherit" href="#">
                  Pakistan
                </Link>
              </Box>
              <Box mt={1}>
                <Link color="inherit" href="#">
                  Punjab
                </Link>
              </Box>
              <Box mt={1}>
                <Link color="inherit" href="#">
                  Islamabad
                </Link>
              </Box>
              <Box mt={1}>
                <Link color="inherit" href="#">
                  Lahore
                </Link>
              </Box>
            </Grid>

            <Grid item sm={12} md={6} lg={4} xl={3}>
              <Box className={classes.headerbox}>Social Media</Box>
              <Box mt={2}>
                {" "}
                <Link color="inherit" href="#">
                  {" "}
                  <FacebookIcon
                    sx={{
                      fontSize: "34px",
                      "&:hover": {
                        color: "green",
                        fontSize: "38px",
                      },
                    }}
                  />
                </Link>
              </Box>
              <Box mt={1}>
                <Link color="inherit" href="#">
                  {" "}
                  <InstagramIcon
                    sx={{
                      fontSize: "34px",
                      "&:hover": {
                        color: "green",
                        fontSize: "38px",
                      },
                    }}
                  />
                </Link>
              </Box>
              <Box mt={1}>
                <Link color="inherit" href="#">
                  {" "}
                  <YouTubeIcon
                    sx={{
                      fontSize: "34px",
                      "&:hover": {
                        color: "green",
                        fontSize: "38px",
                      },
                    }}
                  />
                </Link>
              </Box>
              <Box mt={1}>
                <Link color="inherit" href="#">
                  {" "}
                  <TwitterIcon
                    sx={{
                      fontSize: "34px",
                      "&:hover": {
                        color: "green",
                        fontSize: "38px",
                      },
                    }}
                  />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box mt={6} fontSize="28px" textAlign="center">
          Visual Shop &reg; {new Date().getFullYear()}
        </Box>
      </Box>
    </footer>
  );
};
export default Footer;
