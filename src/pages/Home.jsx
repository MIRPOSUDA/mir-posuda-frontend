import React from "react";
import ProductCards from "../components/ProductCards";
import CarouselDefault from "../components/CarouselDefault";
import { NavArrowRight } from "iconoir-react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function Home() {
  return (
    <>
      <CarouselDefault />
      <NavLink
        to="/"
        className="mx-2 my-5 flex items-center text-3xl font-bold"
      >
        Arzon Narxlar
        <NavArrowRight className="text-[18px]" />
      </NavLink>
      <div className="grid grid-cols-3 gap-6">
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
      </div>
      <div className="mt-5 flex items-center justify-center">
        <NavLink to="/" className="items-center">
          <Button className="my-5 h-14 w-[700px] bg-blue-gray-100 text-[15px] text-black">
            Yana ko'rsatish
          </Button>
        </NavLink>
      </div>
    </>
  );
}

export default Home;
