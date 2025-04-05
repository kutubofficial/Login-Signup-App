import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Dark from "./Dark";
const Layout = () => {
  return (
    <div>
      <Navbar />
      {/* <Dark /> */}
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Layout;
