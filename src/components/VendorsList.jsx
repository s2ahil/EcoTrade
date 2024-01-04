import { useEffect, useState } from "react";
import Axios from "axios"; // Import Axios library for making API requests

import VendorProfile from "./ProfileCardVendor";
import { Typography } from "@mui/material";

export default function VendorsList() {
    const [vendors, setVendors] = useState([{
        email: "sss",

        password: "123",

        extendedProfile: {
            username: "john",
            placeToWork: "naya raipur",

            acceptedItems: ["plastic"],
            identificationProof: "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",

            priceOfItems: "30rs per kg",

            contactInfo: {
                phone: 123456689,
            },
            availability: {
                start: "monday to friday",
                end: "9am to 5pm"
            }

        },
    },
    {
        email: "sam@gmail.com",



        extendedProfile: {
            username: "sammy",
            placeToWork: "sector 27",

            acceptedItems: ["plastic", "metal items"],
            identificationProof: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg",

            priceOfItems: "20rs per kg",

            contactInfo: {
                phone: 123456789,
            },
            availability: {
                start: "monday to friday",
                end: "9am to 5pm"
            }

        }
    }]);

    // useEffect(() => {
    //     // Make a GET request to fetch vendor data when the component mounts
    //     // Axios.get("http://localhost:3000/vendor/info")
    //     //     .then((response) => {
    //     //         console.log(response);
    //     //         setVendors(response.data); // Update the state with fetched vendors
    //     //     })
    //     //     .catch((error) => {
    //     //         console.error("Error fetching vendor data:", error);
    //     //     });
    // }, []);

    return (
        <>
            <Typography variant={"h5"} style={{ marginBottom: "20px" }}>
                Vendors List
            </Typography>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "5rem",
                }}
            >
                {vendors.map((vendor) => (
                    <VendorProfile
                        key={vendor._id} // Add a unique key for each vendor
                        avatarSrc={vendor.extendedProfile?.identificationProof
                            || ''}
                        username={vendor.extendedProfile?.username || ''}
                        location={vendor.extendedProfile?.placeToWork || ''}
                        description={
                            vendor.extendedProfile?.acceptedItems
                                ? vendor.extendedProfile.acceptedItems.join(", ")
                                : ""
                        }
                        priceOfItems={vendor.extendedProfile?.priceOfItems || ''}
                        contactInfo={vendor.extendedProfile?.contactInfo?.phone || ''}
                        availability={
                            vendor.extendedProfile?.availability
                                ? `${vendor.extendedProfile.availability.start} - ${vendor.extendedProfile.availability.end}`
                                : ''
                        }
                    />
                ))}
            </div>
        </>
    );
}
