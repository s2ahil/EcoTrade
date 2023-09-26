import React, { useState } from "react";
import { AppBar, Toolbar, Button, Typography, Box, SwipeableDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SellersList from "./sellersList";
import MenuIcon from '@mui/icons-material/Menu';
import Rating from "../components/ratingBySeller"
import Newspaper from "../images/newspaper.jpeg";


export default function VendorDashboard() {
  const [state, setState] = useState({
    left: false,
  });

  const [selectedContent, setSelectedContent] = useState(''); // Initialize selectedContent state

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleIconClick = (content) => {
    setSelectedContent(content); // Update selectedContent state when an icon is clicked
    toggleDrawer('left', false)(); // Close the left drawer when an icon is clicked
  };

  const renderContent = () => {
    switch (selectedContent) {
      case 'Profile':
        return (
          <>
            <Typography variant='h3'>Welcome to vendor dashboard click on any icon on the left 👈</Typography>
            {/* Place the content for Profile here */}
          </>
        );
      case 'Incoming request':
        return <SellersList />;
      case 'Number of order completed':
        return <>
          <Rating imageSrc={Newspaper} avatarSrc="https://images.unsplash.com/photo-1504199367641-aba8151af406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" title={"shyam"} Rating={"⭐⭐⭐"}></Rating>
        </>
      case 'Accepted request':
        return <div>Content for Accepted Request</div>;
      case 'Edit profile':
        return <div>Content for Edit Profile</div>;
      default:
        return  <SellersList />;
    }
  };

  const list = (
    <Box sx={{ width: 250, marginTop: 10 }} role="presentation" onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)}>
      <List style={{ marginTop: "100px" }}>
        {[ 'Incoming request', 'Number of order completed'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleIconClick(text)}> {/* Call handleIconClick on icon click */}
              <ListItemIcon>
                {text === 'Incoming request' ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
    
      <Box sx={{ m: 3 }} />
      <div>
        <div style={{ position: "sticky", top: 0, zIndex: 2 }}>
          <Button variant={"contained"} onClick={toggleDrawer('left', true)} style={{
           marginTop: "2rem" ,
            marginBottom: "20px"
          }}><MenuIcon></MenuIcon> 
          
          Vendor DashBoard</Button>
        </div>
        <SwipeableDrawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list}
        </SwipeableDrawer>
      </div>
      <div>{renderContent()}</div> {/* Display the selected content */}
    </>
  );
}
