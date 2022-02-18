import React from "react";
import { useEffect } from "react";
import { useParams, useLocation, useNavigate,Navigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
const ErrorScreen = () => {
  // const location = useLocation();
  // let path = location.pathname;
  // let redirectUrl = null;

  // if (path == "/userinfo") {
  //   redirectUrl = "/signin";
  // }

  return (
    <div>
      {/* {redirectUrl ? (
        <Navigate to={redirectUrl} replace state={{ from: location }} />
      ) : (
        <div>ErrorScreen Usernamdse: </div>
      )} */}

       <Typography style={{margin:"8em"}} variant="h3" align="center" color="textPrimary">
          Oops! Something Went Wrong !! <br/>
          Page NOT Found !!
        </Typography>
    </div>
  );
};

export default ErrorScreen;
