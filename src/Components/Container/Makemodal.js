import * as React from 'react';
import { Modal,Box } from '@material-ui/core'
import CircularIndicator from './CircularIndicator';
const Makemodal = (props) => {

  return (
    <div>
      <Modal   open={props.open}  aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <><CircularIndicator /></>
     </Modal>
    </div>
  );
}
export default Makemodal;