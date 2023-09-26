import { Grid, Typography,Button } from "@mui/material"
import recycleImage from "../images/recycle.jpeg"
import {Link} from "react-router-dom"
export default function Front() {
    return (
        <div>
            <Grid container style={{ padding: "5vw" }}  >
                <Grid item xs={12} md={6} lg={6}>
                    <div style={{ marginTop: 100 }}>
                       <center></center> <Typography variant={"h2"} >EcoTrade♻️</Typography>
                        <Typography marginTop="20px" marginBottom="25px" variant={"h5"}>Recycle for better tomorrow </Typography>
                        <Link to={"/customerDashboard"}><Button size="large" >join as seller</Button></Link>
                        <Link to={"/vendorDashboard"}><Button size="large">join as vendor</Button></Link>
                    </div>
                </Grid>
                <Grid item md={6} lg={6}>
                    <img src={recycleImage} width={"100%"}></img>
                </Grid>
            </Grid>



        </div>
    )
}