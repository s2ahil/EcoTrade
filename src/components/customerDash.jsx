import React, { useState } from "react";
import { Typography, Button, SwipeableDrawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import VendorsList from "./VendorsList";
import MenuIcon from '@mui/icons-material/Menu';

export default function SellerDash() {
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
      case 'List vendors':
        return <div><VendorsList></VendorsList></div>;
      case 'number of order completed':
        return <div>Content for Number of Order Completed</div>;
      case 'Declined Request':
        return <div>Content for Declined Request</div>;
      case 'Edit Profile':
        return <div>Content for Edit Profile</div>;
      default:
        return <div><VendorsList></VendorsList></div>;
    }
  };

  const list = (
    <Box sx={{ width: 250, marginTop: 10 }} role="presentation" onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)}>
      <List style={{ marginTop: "100px" }}>
        {['Incoming Request', 'number of order completed', 'Declined Request', 'Edit Profile'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleIconClick(text)}> {/* Call handleIconClick on icon click */}
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
      <div >

        <div style={{ position: "sticky", top: 0, zIndex: 2 }}>
          <Button variant={"contained"} onClick={toggleDrawer('left', true)} style={{
            marginTop: "2rem",
            marginBottom: "20px",
           // Fix the typo "positon" to "position"
   
          }}><MenuIcon></MenuIcon>
            Seller Dashboard
          </Button>
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
