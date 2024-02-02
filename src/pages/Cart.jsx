import React from "react"
import SimpleFooter from "../components/SimpleFooter"
import NavbarSimple from "../components/NavbarSimple"

function Cart() {
  return (
    <div className="base-container h-full flex flex-col">
      <NavbarSimple />
      <main>Cart</main>
      <SimpleFooter />
    </div>
  )
}

export default Cart
