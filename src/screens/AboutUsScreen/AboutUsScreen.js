import React from "react";
import MyContainer from "../../Components/Container/Container";
import * as userAction from "../../store/actions/userActions/userActions";
import { connect } from "react-redux";
import { Typography, Card, Box, CardMedia } from "@material-ui/core";
import { useStyles } from "./Style";

const AboutUsScreen = (props) => {
  const classes = useStyles();
  //  console.log(props.access);
  return (
    <MyContainer
      loading={false}
      access={props.access}
      timeAdded={props.timeAdded}
      updateLoginData={props.updateLoginData}
    >
      <Box style={{display:"flex", justifyContent:"center",marginTop:"2em"}}>
      <Card style={{width:"40em"}}>
      <CardMedia
        component="img"
        height="150"
        image="images/logo.png"
        alt="Paella dish"
        style={{width:"16em",marginLeft:'11em'}}

      />
      </Card>
      </Box>

      <Typography className={classes.title} >Who we are</Typography>
      <Box className={classes.box}>

        Rolustech is an official SugarCRM and Salesforce Partner firm with
        offices in the UK, USA, and Pakistan. Our team of over 250 experienced
        resources has rendered services to more than 1000 satisfied clients
        globally. We use lean and agile development methodologies to build
        optimal CRM systems for our valued clients, which include SugarCRM
        Partners, Salesforce Partners, and Enterprise Customers. In addition to
        helping businesses with CRM Customization, Integration, Deployment,
        Maintenance, and Support, our team also has extensive experience with
        Mobile App Development, the Magento e-Commerce Platform, and Artificial
        Intelligence.
      </Box>
      <Typography className={classes.title} >Visual Shop Expert</Typography>
      <Box className={classes.box}>
        Clocking in over 3 million hours, Rolustech has successfully implemented solutions for clients from 30
        different countries and delivered over 40 unique products for SugarCRM, Salesforce,
        SuiteCRM, and X2CRM over the past decade. 
        We are your one stop shop for all things CRM. We aim to make your business grow and 
        constantly deliver high-quality solutions at competitive rates. With our in-depth industry
        knowledge, profound customer experience, cutting-edge technology, and proven delivery methods, 
        we provide the best-fit, most scalable, secure, and integrable CRM solutions that deliver tangible
        results.

      </Box>
      <Box className={classes.box}>
        Clocking in over 3 million hours, Rolustech has successfully implemented solutions for clients from 30
        different countries and delivered over 40 unique products for SugarCRM, Salesforce,
        SuiteCRM, and X2CRM over the past decade. 
        We are your one stop shop for all things CRM. We aim to make your business grow and 
        constantly deliver high-quality solutions at competitive rates. With our in-depth industry
        knowledge, profound customer experience, cutting-edge technology, and proven delivery methods, 
        we provide the best-fit, most scalable, secure, and integrable CRM solutions that deliver tangible
        results.

      </Box>
     
      <Typography className={classes.title} >Privacy And Policy</Typography>
      <Box className={classes.box}>
      Rolustech comprises of Software Engineers, Technical Architects, Business Analysts, 
      Project Managers, Front-end Designers and Mobile Developers. We adhere to ISO27001 
      standards and follow best practice upgrade safe coding procedures. Our Salesforce and 
      SugarCRM experts have extensive knowledge and complete control over CRM services. Over 
      the years, we have gained widespread recognition in the CRM community due to our competency 
      and high level of technical mastery. We aim at providing you the best possible experience 
      while giving
      you the confidence that we are available for help whenever you need it.

      </Box>
      <Typography className={classes.title} >Returned Policy</Typography>
      <Box className={classes.box}>
      Rolustech comprises of Software Engineers, Technical Architects, Business Analysts, 
      Project Managers, Front-end Designers and Mobile Developers. We adhere to ISO27001 
      standards and follow best practice upgrade safe coding procedures. Our Salesforce and 
      SugarCRM experts have extensive knowledge and complete control over CRM services. Over 
      the years, we have gained widespread recognition in the CRM community due to our competency 
      and high level of technical mastery. We aim at providing you the best possible experience 
      while giving
      you the confidence that we are available for help whenever you need it.

      </Box>
      <Typography className={classes.contact} > Contact us</Typography>
       <Box className={classes.name}>
        Dr.ZEESHAN GILLANI
         +92 300 2106038 <br/>
        JUNAID ALI KHAN
         +92 302 6929204
       </Box>

    </MyContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    access: state.Update_Login_reducer.access,
    timeAdded: state.Update_Login_reducer.timeAdded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginData: (access, timeAdded) =>
      dispatch(userAction.Update_Login_action(access, timeAdded)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AboutUsScreen);
