import React from "react";

// Nav items
 const routes =[
  { id: 1, name: "Home", route: "/" },
  { id: 2, name: "About", route: "/about" },
  { id: 3, name: "Products", route: "/products" },
  { id: 4, name: "Services", route: "/services" },
  { id: 5, name: "Contact Us", route: "/contact" },
];

const Navbar = () => {
  return (
    <nav>
        <ul>
            {
                routes.map(route => <li>{route.name}</li> )
            }
        </ul>
    </nav>
  )
};

export default Navbar;
