import React, { useState } from "react";
import {
    TextField,
    Typography,
    Button,
    Card,
    InputLabel,
    Select,
    MenuItem,
    NativeSelect,
    IconButton,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {useNavigate} from "react-router-dom"

export default function Login() {
    const navigate=useNavigate();
    const [age, setAge] = useState("");
    const [places, setPlaces] = useState([{ value: "" }]); // Array to store places

    function handleChange(e) {
        setAge(e.target.value);
    }

    function handlePlaceChange(index, value) {
        const updatedPlaces = [...places];
        updatedPlaces[index] = { value };
        setPlaces(updatedPlaces);
    }

    function handleAddPlace() {
        setPlaces([...places, { value: "" }]);
    }

    return (
        <>
            <center>
                <Typography variant="h6" style={{ marginTop: "100px" }}>
                    Signup and start recycling
                </Typography>
            </center>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
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
                    <Typography variant={"h5"} margin={"10px"}>
                        Vendor
                    </Typography>
                    <TextField label="Email" sx={{ width: 300, margin: "20px" }} color="secondary" />
                    <TextField label="Password" sx={{ width: 300, margin: "20px" }} color="secondary" />

                    {places.map((place, index) => (
                        <div key={index}>
                            <InputLabel id={`place-label-${index}`} variant="standard">
                                Place to work
                            </InputLabel>
                            <NativeSelect
                                aria-labelledby={`place-label-${index}`}
                                value={place.value}
                                onChange={(e) => handlePlaceChange(index, e.target.value)}
                                style={{ width: "300px" }}
                                inputProps={{
                                    id: `place-${index}`,
                                }}
                            >
                                <option value="">
                                    <em>None</em>
                                </option>
                                <option value={"sector 34"}>sector 34</option>
                                <option value={"uparwara"}>uparwara</option>
                                <option value={"sector 24"}>sector 27</option>
                            </NativeSelect>
                        </div>
                    ))}

                    <IconButton
                        color="primary"
                        onClick={handleAddPlace}
                        sx={{ marginTop: "10px" }}
                    >
                        <AddCircleIcon />
                    </IconButton>

                    <Button
                        sx={{ width: 300, margin: "20px" }}
                        style={{ backgroundColor: "purple", color: "white" }}
                    >
                        Login
                    </Button>
                   
                </Card>
            </div>
        </>
    );
}
