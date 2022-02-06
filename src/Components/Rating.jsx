// import React from "react";
// import PropTypes from "prop-types";
// import StarHalfIcon from "@mui/icons-material/StarHalf";
// import StarRateIcon from "@mui/icons-material/StarRate";

// const Rating = ({ value, text, color }) => {
//   return (
//     <div>
//       <span>
//         <i style={{ color }}>
//           {" "}
//           {value > 1 ? (
//             <StarRateIcon />
//           ) : value > 0.5 ? (
//             <StarHalfIcon />
//           ) : (
//             <StarRateIcon />
//           )}
//         </i>
//       </span>
//       <span>
//         <i style={{ color }}>
//           {" "}
//           {value > 2 ? (
//             <StarRateIcon />
//           ) : value > 1.5 ? (
//             <StarHalfIcon />
//           ) : (
//             <StarRateIcon />
//           )}
//         </i>
//       </span>
//       <span>
//         <i style={{ color }}>
//           {" "}
//           {value > 3 ? (
//             <StarRateIcon />
//           ) : value > 2.5 ? (
//             <StarHalfIcon />
//           ) : (
//             <StarRateIcon />
//           )}
//         </i>
//       </span>
//       <span>
//         <i style={{ color }}>
//           {" "}
//           {value > 4 ? (
//             <StarRateIcon />
//           ) : value > 3.5 ? (
//             <StarHalfIcon />
//           ) : (
//             <StarRateIcon />
//           )}
//         </i>
//       </span>
//       <span>
//         <i style={{ color }}>
//           {" "}
//           {value >= 5 ? (
//             <StarRateIcon />
//           ) : value > 4.5 ? (
//             <StarHalfIcon />
//           ) : (
//             <StarRateIcon />
//           )}
//         </i>
//       </span>
//       {/* <span>{text ? text : ''}</span> */}
//       <span>{text && text}</span>
//     </div>
//   );
// };
// Rating.defaultProps = {
//   color: "yellow",
// };
// Rating.propTypes = {
//   value: PropTypes.number,
//   text: PropTypes.string,
//   color: PropTypes.string,
// };

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const TextRating = ({ value, text }) => {
  //const value = 3.5;

  return (
    <>
      <Box
        sx={{
          width: 200,
          //display: "block",
          textAlign: "center",
          marginLeft: "3.8em",
          fontSize: "24px",
          padding: "0.5em",
        }}
      >
        <Rating
          // sx={{ margin: "10px" }}
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={
            <StarIcon
              style={{ color: "white", opacity: 1.0 }}
              fontSize="inherit"
            />
          }
        />
        <Box sx={{ ml: 2 }}>{labels[value]}</Box>
        <Box>{text && text}</Box>
      </Box>
    </>
  );
};
export default TextRating;
