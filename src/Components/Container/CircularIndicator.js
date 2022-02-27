import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useStyles} from './CircularIndicatorStyle'

const CircularIndicator = () => {
  const classes = useStyles();
    return (
      <Box className={classes.Circle}>
        <CircularProgress style={{color:"#ff9100",width:"6em",}} />
      </Box>
    );
  }

  export default CircularIndicator;