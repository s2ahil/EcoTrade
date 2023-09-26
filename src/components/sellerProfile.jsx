import { Card, Typography, TextField, Button, Switch, FormControlLabel, Grid } from "@mui/material"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ProfileImage from "../images/customer.png"




export default function sellerProfile() {

    return (
        <>

            <Grid container spacing={2}>
                <Grid item md={6} sm={12} xs={12} >
                    <div className="container" style={{ marginTop: "100px", margin: "20px" }}>
                        <Typography sx={{ fontWeight: 'bold' }}> seller / customer</Typography>
                        <card style={{ display: "flex", gap: "10px", flexDirection: "column", }} >
                            <TextField label="username"></TextField>
                            <TextField label="location"></TextField>
                            <TextField label="list the things you want to recycle" > </TextField>
                            <TextField label="paste picture link  of things to recycle"> </TextField>
                            <TextField label="Expected Qty"></TextField>
                            <TextField label="phone number"></TextField>
                            <br></br>
                            <Button variant="contained"
                                component="label" >submit</Button>
                        </card>
                    </div>

                </Grid>
                <Grid item md={6}>
                    <img src={ProfileImage} width={"100%"}></img>
                </Grid>
            </Grid>
        </>
    )
}