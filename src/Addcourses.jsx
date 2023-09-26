import { TextField, Typography, Button, Card } from "@mui/material";

export default function Addcourses() {
  return (
    <>
      <center>
        <Typography variant="h6">Add Courses </Typography>
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
          <TextField
            label="Title"
            sx={{ width: 300, margin: "10px" }}

          ></TextField>
          <TextField
            label="Description"
            sx={{ width: 300, margin: "10px" }}

          ></TextField>
          <TextField
            label="Image url"
            sx={{ width: 300, margin: "10px" }}

          ></TextField>

          <TextField
            label="Course Price"
            sx={{ width: 300, margin: "10px" }}

          ></TextField>
          <Button
            sx={{ width: 300, margin: "10px" }}
            style={{ backgroundColor: "#1976D2", color: "white" }}
          >
            add course
          </Button>
        </Card>
      </div>
    </>
  );
}
