import { useEffect, useState } from "react";
import Axios from "axios"; // Import Axios library for making API requests

import VendorProfile from "./ProfileCardVendor";
import { Typography } from "@mui/material";

export default function VendorsList() {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        // Make a GET request to fetch vendor data when the component mounts
        Axios.get("http://localhost:3000/vendor/info")
            .then((response) => {
                console.log(response);
                setVendors(response.data); // Update the state with fetched vendors
            })
            .catch((error) => {
                console.error("Error fetching vendor data:", error);
            });
    }, []);

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
