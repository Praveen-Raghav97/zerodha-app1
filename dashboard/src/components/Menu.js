import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Box, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {AcmeLogo} from './AcmeLogo.js'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Dashbord', href: '/' },
    { text: 'Positions', href: '/positions' },
    { text: 'Holdings', href: '/holdings' },
    { text: 'Orders', href: '/orders' },
    { text: 'Funds', href: '/funds' },
    { text: 'Watch', href: '/watch' },
    { text: 'Apps', href: '/apps' },
    
  ];

  const drawerList = (
    <Box
      sx={{ width:350 , color:"black" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton onClick={toggleDrawer(false)} sx={{ float: 'right' }}>
        <CloseIcon />
      </IconButton>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component="a" href={item.href}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{bgcolor:"white" ,color:'black' , padding:" 0 20px"}}>
      <Toolbar>
        {/* Navbar Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 , display:'flex' }}>
          <AcmeLogo/>
          <Link href="/" sx={{textDecoration:"none" , fontFamily:"sans-serif"}} target="_blank" rel="noopener">
        KITE
      </Link>
        </Typography>
       
        {/* Links for larger screens */}
        <Box sx={{ display: { xs: 'none', md: 'block', marginLeft:"50px" } }}>
          {menuItems.map((item, index) => (
            <Button key={index} color="inherit" href={item.href}>
              {item.text}
            </Button>
            
          ))}
        </Box>
        <Button color="" sx={{bgcolor:"#0d6efd" , color:"white"}} href={"/signup"}>
              SignUp
            </Button>
        {/* Hamburger Icon for smaller screens */}
        <IconButton
          color="inherit"
          aria-label="menu"
          edge="end"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for smaller screens */}
        <Drawer sx={{width:"100%"}} anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
