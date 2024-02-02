import React from "react";
import SimpleFooter from "../components/SimpleFooter";
import NavbarSimple from "../components/NavbarSimple";

function Cart() {
  return (
    <div className="base-container flex h-full flex-col">
      <NavbarSimple />
      <main>Cart</main>
      <SimpleFooter />
    </div>
  );
}

export default Cart;
