import React from "react";
import { MdMenu } from "react-icons/md";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "#",
  },
  {
    id: 3,
    title: "About Us",
    path: "#",
  },
  {
    id: 1,
    title: "Our Team",
    path: "#",
  },
  {
    id: 1,
    title: "Contact Us",
    path: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="relative z-20">
      <div className="container py-10 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <h1 className="font-bold text-2xl">The Coding Journey</h1>
        </div>
        {/* Menu Section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className=" inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="absolute w-2 h-2 bg-secondary rounded-full mt-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}

            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
        {/* Mobile Hamburger Menu Section */}
        <div className="lg:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
