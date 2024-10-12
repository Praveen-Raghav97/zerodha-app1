import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Box, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {AcmeLogo} from './AcmeLogo.js'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
const [user, setuser] = useState("")
  const navigate = useNavigate()
  
  const handleLogout = () => {
    // Remove user data from localStorage
   localStorage.removeItem('userId');
   navigate('/login')
  };

   

   useEffect(()=>{
    const getuser  = localStorage.getItem("userId")
   // console.log(getuser)
    setuser(getuser)
 
   },[])

   //console.log("user" , user);

 


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
        {!user?
        <Button color="" sx={{bgcolor:"#0d6efd" , color:"white"}} href={"/login"}>
        Login
      </Button> :
      
      <Button color="" sx={{bgcolor:"#D2042D" , color:"white"}} onClick={handleLogout}>
      LogOut
    </Button>

      }
        
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
