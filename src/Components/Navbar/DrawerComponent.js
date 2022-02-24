import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useState} from 'react';
 import HomeIcon from '@mui/icons-material/Home';
 import InfoIcon from '@mui/icons-material/Info';
 import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
 import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {useStyles}  from './DrawerComponentStyle';
import {Link} from 'react-router-dom';


const DrawerComponent = () => {
  const [state, setState] = useState(false);
  const classes = useStyles();
  
  const toggleDrawer = (anchor, open) => () => {

    setState({ ...state, [anchor]: open });
  };

  

  return (
    <div>
      {['right'].map((anchor) => (
        <Box key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>

          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
           
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
              <ListItemText><Link to="/signin" className={classes.link}>Join</Link></ListItemText>
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































// import React,{useState} from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Toolbar from '@mui/material/Toolbar';
// import CssBaseline from '@mui/material/CssBaseline';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import {Link} from 'react-router-dom'
// import { useStyles } from './DrawerComponentStyle';
// import { fontSize } from '@mui/system';
// const drawerWidth = 280;




// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//    backgroundColor:"#442c2e",
//    height:"5.6em",
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-start',
// }));

// export default function DrawerComponent(props) {

//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = useState(false);



//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex', color:'black', alignItems:"center"  ,marginRight:'1em', width:"4em" }}>
//       <CssBaseline />
//         <Toolbar >
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="end"
//             onClick={handleDrawerOpen}
//             sx={{ ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon fontSize='large'   />
//           </IconButton>
//         </Toolbar>
       
//         <Drawer
      
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           border:"3px solid red",
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//           },
//         }}
//         variant="persistent"
//         anchor="right"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//              <ArrowForwardIosIcon style={{color:"white"}}  />
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>

//             <ListItem  >
//               <ListItemIcon ><HomeIcon style={{color:"black"}} fontSize="large"  /></ListItemIcon>
//               <ListItemText><Link to="/" className={classes.link}>Home</Link></ListItemText>
//             </ListItem>
//             <ListItem  >
//               <ListItemIcon ><InfoIcon style={{color:"black"}} fontSize="large"  /></ListItemIcon>
//               <ListItemText><Link to="/about" className={classes.link}>About</Link></ListItemText>
//             </ListItem>
//             <ListItem  >
//               <ListItemIcon ><AddShoppingCartIcon style={{color:"black"}} fontSize="large"  /></ListItemIcon>
//               <ListItemText><Link to="/cart" className={classes.link}>Cart</Link></ListItemText>
//             </ListItem>
//             <ListItem  >
//               <ListItemIcon ><ExitToAppIcon style={{color:"black"}} fontSize="large"  /></ListItemIcon>
//               <ListItemText><Link to="/signin" className={classes.link}>Join</Link></ListItemText>
//             </ListItem>
            
//         </List>
//       </Drawer>
//     </Box>
//   );
// }