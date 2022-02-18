import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CircularIndicator = () => {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress style={{color:"#000000", margin:"20em 35em"}} />
      </Box>
    );
  }

  export default CircularIndicator;