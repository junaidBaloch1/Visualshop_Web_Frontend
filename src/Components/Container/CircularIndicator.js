import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CircularIndicator = () => {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress style={{color:"#ff9100",size:"5em 5em", margin:"30em 70em"}} />
      </Box>
    );
  }

  export default CircularIndicator;