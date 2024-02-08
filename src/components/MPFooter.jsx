import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

function MPFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bottom-0 mt-5 flex w-full max-w-[1230px] flex-row flex-wrap items-center gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; {currentYear} Mirposuda
      </Typography>
      <ul className="mr-[40px] flex flex-wrap items-center gap-x-8 gap-y-2">
        <li>
          <NavLink className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
            Biz haqimizda
          </NavLink>
        </li>
        <li>
          <NavLink className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
            License
          </NavLink>
        </li>
        <li>
          <NavLink className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
            Contribute
          </NavLink>
        </li>
        <li>
          <NavLink className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default MPFooter;
