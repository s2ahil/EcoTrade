import { TextField, Typography, Button, Card } from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const navigate=useNavigate()
  return (
    <>
      <center>
        <Typography variant="h6" style={{marginTop:"100px"}}>Login and start recycling </Typography>
      </center>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop:"30px"
        }}
      >
     
        <Card
          variant="outlined"
          style={{
            width: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
         <Typography variant={"h5"} margin={"10px"}>Seller</Typography>
          <TextField
            label="Email"
            sx={{ width: 300, margin: "20px" }}
        
          ></TextField>
          <TextField
            label="Password"
            sx={{ width: 300, margin: "20px" }}
       
          ></TextField>
          <Button
            sx={{ width: 300, margin: "20px" }}
            style={{ backgroundColor: "green", color: "white" }}
          >
            login
          </Button>
          <Button onClick={()=>navigate('/seller_profile')}>go to seller setup </Button>
        </Card>
      </div>
    </>
  );
}
