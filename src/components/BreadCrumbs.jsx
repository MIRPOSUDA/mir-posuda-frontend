import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink, useLocation } from "react-router-dom";

function BreadCrumbs() {
  const location = useLocation();

  const currentLink = [];

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb != "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      return (
        <Breadcrumbs className="my-5" key={crumb}>
          <NavLink className="opacity-60" to={"/"}>
            Bosh sahifa
          </NavLink>
          <NavLink to={currentLink.join("")}>{crumb}</NavLink>
        </Breadcrumbs>
      );
    });
  return <div>{crumbs}</div>;
}

export default BreadCrumbs;
