import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarSimple from "../components/NavbarSimple";

function RootLayout() {
  return (
    <div className="base-container h-full flex flex-col">
      <NavbarSimple />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
