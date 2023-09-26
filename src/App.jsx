import { useState, } from "react";
import { Toolbar, Button, Typography, Box, Drawer } from "@mui/material";
import Appbar from "./Appbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Courses from "./Courses";
import Signup from "./Signup";
import Login from "./Login";
import Addcourses from "./Addcourses";
import EditCourse from "./EditCourse";
import Front from "./components/front";
import SignupVendor from "./components/signup_vendor";
import LoginVendor from "./components/login_vendor";
import VendorDash from "./components/vendorDash";
import CustomerDash from "./components/customerDash";
import VendorProfile from "./components/vendorProfile";
import SellerProfile from "./components/sellerProfile";
import { RecoilRoot } from 'recoil';
function App() {

  return (
    <Router>
    <RecoilRoot>
      <Box>
        <Appbar />

        <Box marginTop="64px">
          <Routes>
            <Route path="/" element={<Front />} />
            {/* <Route path="/courses" element={<Courses />} /> */}
            <Route path="/signup_customer" element={<Signup />}></Route>
            <Route path="/login_customer" element={<Login />}></Route>
            {/* <Route path="/addCourses" element={<Addcourses />}></Route>
            <Route path="/EditCourse" element={<EditCourse />}></Route> */}
            <Route path="/signup_vendor" element={<SignupVendor></SignupVendor>}></Route>
            <Route path="/login_vendor" element={<LoginVendor></LoginVendor>}></Route>
            <Route path="/vendorDashboard" element={<VendorDash></VendorDash>}></Route>
            <Route path="/customerDashboard" element={<CustomerDash></CustomerDash>}></Route>
            <Route path="/vendor_profile" element={<VendorProfile />} />
            <Route path="/seller_Profile" element={<SellerProfile />} />

          </Routes>
        </Box>
      </Box>
      </RecoilRoot>
    </Router>
  );
}

export default App;
