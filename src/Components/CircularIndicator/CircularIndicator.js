import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CircularIndicator = () => {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress style={{color:"#442c2e"}} />
      </Box>
    );
  }

  export default CircularIndicator;