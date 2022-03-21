import React,{useState, useRef} from 'react';
import {Box, Button,Menu, MenuItem} from '@material-ui/core'
import WomenShop from '../../ShopWomen/ShopWomen'
import ShopMen from '../../ShopMen/ShopMen';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useStyles } from '../ShopsStyle'
const ShopWomen = () => {
const classes = useStyles();
   
const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);



const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};


  return (
    // <Button className={classes.btn}>{shops.name}</Button>

    <div>
       <Button
      id="composition-button"
      aria-controls={open ? 'composition-menu' : undefined}
      aria-expanded={open ? 'true' : undefined}
      aria-haspopup="true"
      onClick={handleClick}
      className={classes.btn}
        
      >
        Women Shop
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        style={{display:"flex", flexDirection:"column"}}
      >
       
        <Box onClick={handleClose}> <WomenShop/></Box>
        {/* <Box onClick={handleClose}> <ShopMen/></Box> */}
        
     
      </Menu>
     
    </div>
  )
}

export default ShopWomen









