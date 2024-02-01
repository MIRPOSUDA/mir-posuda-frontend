import React from "react"
import {NavLink} from "react-router-dom"
import {Select, Option} from "@material-tailwind/react"
import {CubeBandage, UserCircle} from "iconoir-react"
import Logo from "../public/logo.jpg"

function NavbarSimple() {
  return (
    <header className="">
      <div className="flex justify-between items-center">
        <p>Filiallarimiz</p>
        <p>1 kunda yetkazib beramiz!</p>
        <div className="flex gap-x-4">
          <p>Buyurtmalarim</p>
          <p>O'zbekcha</p>
        </div>
      </div>
      <div className="flex gap-x-6 mt-6 items-center">
        <NavLink className="font-bold text-[25px]" to="/">
          <img width='60' height='60' src={Logo} alt="Mirposuda logo" />
        </NavLink>
        <div className="w-[200px]">
          <Select label="Select Version">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
          </Select>
        </div>
        <input
          className="border h-[40px] px-2 border-brown-100 rounded-[6px] border-solid w-[400px]"
          type="text"
          placeholder="Mahsulot va turkumlarni izlash"
        />
        <div>
          <UserCircle />
        </div>
      </div>
    </header>
  )
}

export default NavbarSimple
