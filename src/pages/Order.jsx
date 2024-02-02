import React from "react";
import NavbarSimple from "../components/NavbarSimple";
import SimpleFooter from "../components/SimpleFooter";

function Order() {
  return (
    <div className="base-container flex h-full flex-col">
      <NavbarSimple />
      <main>order</main>
      <SimpleFooter />
    </div>
  );
}

export default Order;
