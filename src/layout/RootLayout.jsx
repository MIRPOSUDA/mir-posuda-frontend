import React from "react";
import { Outlet } from "react-router-dom";
import NavbarSimple from "../components/NavbarSimple";
import SimpleFooter from "../components/SimpleFooter";

function RootLayout() {
  return (
    <div className="base-container flex h-full flex-col">
      <NavbarSimple />
      <main className="grow">
        <Outlet />
      </main>
      <SimpleFooter />
    </div>
  );
}

export default RootLayout;
