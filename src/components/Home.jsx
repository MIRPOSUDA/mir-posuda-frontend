import React from "react";
import ProductCards from "./ProductCards";
import CarouselDefault from "./CarouselDefault";
import { NavArrowRight } from "iconoir-react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function Home() {
  return (
    <>
      <CarouselDefault />
      <NavLink to="/" className="flex items-center text-3xl font-bold m-3">
        Arzon Narxlar
        <NavArrowRight className="text-[18px]" />
      </NavLink>
      <div className="grid grid-cols-3 gap-4">
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
      </div>
      <div className="mt-5 flex items-center justify-center">
        <NavLink to="/" className="items-center">
          <Button className="w-[500px]" variant="outlined">
            Yana ko'rsatish
          </Button>
        </NavLink>
      </div>
    </>
  );
}

export default Home;
