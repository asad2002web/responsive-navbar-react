import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// Nav items
const routes = [
  { id: 1, name: "Home", route: "/" },
  { id: 2, name: "About", route: "/about" },
  { id: 3, name: "Products", route: "/products" },
  { id: 4, name: "Services", route: "/services" },
  { id: 5, name: "Contact Us", route: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-purple-400 md:px-10 md:py-4">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <span>
          {open === true ? (
            <XMarkIcon className="h-8 w-8 text-blue-800" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-blue-800" />
          )}
        </span>
      </div>
      <ul className={`md:flex absolute md:static duration-500 bg-purple-400 p-4 md:p-0 ${open ? 'left-0':'-left-48'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
