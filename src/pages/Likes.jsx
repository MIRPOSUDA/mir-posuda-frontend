import React from "react";
import NavbarSimple from "../components/NavbarSimple";
import SimpleFooter from "../components/SimpleFooter";

function Likes() {
  return (
    <div className="base-container flex h-full flex-col">
      <NavbarSimple />
      <main>likes</main>
      <SimpleFooter />
    </div>
  );
}

export default Likes;
