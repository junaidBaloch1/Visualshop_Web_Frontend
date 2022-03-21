import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {useStyles}  from './DrawerComponentStyle';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { styled} from '@mui/material/styles';

const DrawerComponent = () => {
  const [state, setState] = useState(false);
  const classes = useStyles();
  
  const toggleDrawer = (anchor, open) => () => {

    setState({ ...state, [anchor]: open });
  };
  
   const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    backgroundColor:"#442c2e",
    height:"6.6em",
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));
  

  return (
    <div>
      {['right'].map((anchor) => (
        <Box key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{color:"white"}} fontSize='large'/></Button>

         
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{width:"50em",'& .MuiDrawer-paper': {width: 280}}}>
           
          <DrawerHeader>
           <IconButton onClick={toggleDrawer(anchor, false)}>
              <ArrowForwardIosIcon style={{color:"white"}}  />
           </IconButton>
         </DrawerHeader>
           
     <Box role="presentation" onClick={toggleDrawer(anchor, false)}>
     <List>
     <ListItem  >
              <ListItemIcon ><HomeIcon style={{color:"black"}} fontSize="large"  /></ListItemIcon>
              <ListItemText><Link to="/" className={classes.link}>Home</Link></ListItemText>
            </ListItem>
            <ListItem  >
              <ListItemIcon ><InfoIcon style={{color:"black"}} fontSize="large"  /></ListItemIcon>
              <ListItemText><Link to="/about" className={classes.link}>About</Link></ListItemText>
            </ListItem>
            <ListItem  >
              <ListItemIcon ><AddShoppingCartIcon style={{color:"black"}} fontSize="large"  /></ListItemIcon>
              <ListItemText><Link to="/cart" className={classes.link}>Cart</Link></ListItemText>
            </ListItem>
            <ListItem  >
              <ListItemIcon ><ExitToAppIcon style={{color:"black"}} fontSize="large"  /></ListItemIcon>
              <ListItemText><Link to="/signin" className={classes.link}>Signin</Link></ListItemText>
              
           </ListItem>
           <ListItem  >
              <ListItemIcon ><ExitToAppIcon style={{color:"black"}} fontSize="large"  /></ListItemIcon>
          
              <ListItemText><Link to="/signup" className={classes.link}>SignUp</Link></ListItemText>
           </ListItem>
     </List>
   </Box>
          </Drawer>
        </Box>
      ))}
    </div>
  );
}
 export default DrawerComponent;









