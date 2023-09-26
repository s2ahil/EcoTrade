import { TextField, Typography, Button, Card } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {

  return (
    <>
      <center>
        <Typography variant="h6" style={{ marginTop: "100px" }}>Signup to get started for recycle journey </Typography>
      </center>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px"
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
            signup
          </Button>

          <Link to="/" style={{ marginBottom: "30px" }}>Already have an account ?</Link>
        </Card>
      </div>
    </>
  );
}
