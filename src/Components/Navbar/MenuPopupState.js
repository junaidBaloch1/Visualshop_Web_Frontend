import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {Link} from 'react-router-dom';

 const MenuPopupState = () => {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
           <Link to="/"><MenuItem onClick={popupState.close}>Home</MenuItem></Link>
           <Link to="/about"><MenuItem onClick={popupState.close}>About</MenuItem></Link>
           <Link to="/cart"><MenuItem onClick={popupState.close}>Cart</MenuItem></Link>
           <Link to="/signin"><MenuItem onClick={popupState.close}>Join</MenuItem></Link>
            
          
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
export default MenuPopupState;