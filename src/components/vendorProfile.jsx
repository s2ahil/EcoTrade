import { Card, Typography, TextField, Button, Switch, FormControlLabel, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom";
import ProfileImage from "../images/profile.png"
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { profileState } from '../recoil states/profileState'; // Make sure to import your Recoil state atom
import axios from 'axios';
import { BASE_URL } from '../utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function VendorProfile() {
    const navigate = useNavigate();

    const [profileData, setProfileData] = useRecoilState(profileState);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${BASE_URL}/vendor/profile`, profileData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log('Profile updated successfully');
                // You can reset the form fields if needed
                setProfileData({
                    profileImageLink: '',//
                    username: '',//
                    placeToWork: '',
                    itemsYouTake: '',//
                    priceOfItems: '',//
                    contactInfo: '',//
                    availability: '',//
                });

                toast.success('You are now a vendor');
                navigate("/customerDashboard");

            } else {
                toast.error('Failed to update profile');


            }
        } catch (error) {

            toast.error('Failed to update profile', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setProfileData({
            ...profileData,
            [name]: newValue,
        });
    };

    return (
        <>
            <ToastContainer />
            <Grid container spacing={2}>
                <Grid item md={6} sm={12} xs={12}>
                    <div className="container" style={{ marginTop: '100px', margin: '20px' }}>
                        <center>
                            <Typography variant="h5" style={{ margin: '20px' }}>
                                Hey Vendor! Let's set up your profile first.
                            </Typography>
                        </center>
                        <Card
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                padding: '20px',
                            }}
                        >
                            <Typography variant="h6">Vendor profile setup</Typography>
                            <TextField
                                label="Profile Image Link"
                                name="profileImageLink"
                                value={profileData.profileImageLink}
                                onChange={handleInputChange}
                            />
                            <TextField
                                label="Username"
                                name="username"
                                value={profileData.username}
                                onChange={handleInputChange}
                            />
                            <TextField
                                label="Place to Work"
                                name="placeToWork"
                                value={profileData.placeToWork}
                                onChange={handleInputChange}
                            />
                            <TextField
                                label="Items You Take"
                                name="itemsYouTake"
                                value={profileData.itemsYouTake}
                                onChange={handleInputChange}
                            />
                            <TextField
                                label="Price of Items"
                                name="priceOfItems"
                                value={profileData.priceOfItems}
                                onChange={handleInputChange}
                            />
                            <TextField
                                label="Contact Info"
                                name="contactInfo"
                                value={profileData.contactInfo}
                                onChange={handleInputChange}
                            />
                            <TextField
                                label="Availability"
                                name="availability"
                                value={profileData.availability}
                                onChange={handleInputChange}
                            />
                            <Button variant="contained" style={{ marginBottom: '20px' }} onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Card>
                    </div>
                </Grid>

                <Grid item lg={6} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4">Show your customers the best side</Typography>
                    <img src={ProfileImage} width={'100%'} alt="Profile" />
                </Grid>
            </Grid>
        </>
    );
}
