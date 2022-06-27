import { Carousel } from "react-carousel-minimal";
import { Box, Container, Grid } from "@material-ui/core";
import Carusalbottom from "./Carusalbottom";
import { useStyles } from "./CarusalStyle";
import SliderText from "./CarusalText";
const Carusal = () => {
  const classes = useStyles();
  const data = [
    {
      image:
        "https://i.pinimg.com/originals/cb/81/57/cb81571c9324e9da8f6f5e704cba27c8.jpg",
      caption: "Style & Design",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5ce5e040b464840001f2c0c9/1590553386844-UCCWGZ71HDJKFKY6HS2L/Off-Field+Slider+Img.jpg",
      caption: "Your Favourite Shirts",
    },
    // {
    //   image: "https://i.ytimg.com/vi/eATRkMEk3_4/maxresdefault.jpg",
    //   caption: "Beautiful Shirts",
    // },
    // {
    //   image:
    //     "https://media.istockphoto.com/photos/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-picture-id1257563298?b=1&k=20&m=1257563298&s=170667a&w=0&h=Hhf0-AsQp7Z7k9q8XKHfQUY86uPJvE8vmmGHXihWS_M= ",
    //   caption: "Stylish Design",
    // },
    // {
    //   image: "https://i.ytimg.com/vi/BM7L0tnbAYk/maxresdefault.jpg ",
    //   caption: "New Brands",
    // },
    {
      image: "/Images/Amazon.PNG",
      // caption: "New Brands",
    },
  ];

  const captionStyle = {
    fontSize: "30px",
    // fontWeight: "bold",
    color: "black",
  };

  // const slideNumberStyle = {
  //   fontSize: "30px",
  //   fontWeight: "bold",
  //   color: "#442C2E",
  // };
  return (
    <Box>
       
      <Box className={classes.container}>
        <Carousel
          className={classes.carousel}
          data={data}
          time={10000}
          width="100%"
          height="700px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          // slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="black"
          pauseIconSize="50px"
          slideBackgroundColor="#442C2E"
          slideImageFit="cover"
          thumbnailWidth="100px"
        />
      </Box>
      <Box style={{}}>
        {SliderText.map((title) => {
          return (
            <Box className={classes.card} key={title.id}>
              <Carusalbottom texts={title} />
            </Box>
          );
        })}
      </Box>
    
    </Box>
  );
};

export default Carusal;
