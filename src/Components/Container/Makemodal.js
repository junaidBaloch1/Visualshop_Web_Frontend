import * as React from 'react';
import { useState } from 'react';
import {Box, Button, Typography, Modal } from '@material-ui/core'
import CircularIndicator from './CircularIndicator';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "110em",
  height:"60em",
  bgcolor: '#5c5454',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Makemodal = (props) => {


  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <CircularIndicator/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default Makemodal;