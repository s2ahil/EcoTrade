import { useState } from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 70,
          }}
        >
          <div >
           
              {/* Center the text using Flexbox */}
          <Typography variant="h4" onClick={() => { navigate("/") }} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" ,marginLeft:"2rem"}}>
                EcoTrade♻️
              </Typography> 
         
          </div>
          <div style={{ marginRight: "10px" }}>
            <Button color="inherit" onClick={() => { navigate("/login_vendor") }} size="large">Vendor</Button>
            <Button color="inherit" onClick={() => { navigate("/login_customer") }} size="large">Seller</Button>
          </div>
        </div>
      </AppBar>
    </>
  );
}

export default Appbar;
