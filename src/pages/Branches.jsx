import React from "react";
import NavbarSimple from "../components/NavbarSimple";
import SimpleFooter from "../components/SimpleFooter";

function Branches() {
  return (
    <div className="base-container flex h-full flex-col">
      <NavbarSimple />
      <main>Branches</main>
      <SimpleFooter />
    </div>
  );
}

export default Branches;
