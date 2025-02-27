import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />

      <div className="mt-20">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
