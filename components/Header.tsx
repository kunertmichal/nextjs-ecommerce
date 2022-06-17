import React from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { Button } from "./Button";
import { MainLogo } from "./MainLogo";
import { NavLink } from "./NavLink";

const LINKS = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Products",
    to: "/products",
  },
];

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  return (
    <header className="border-b-2 border-gray-100 bg-gray-800 text-white py-6 px-4">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex-1 flex items-center">
          <MainLogo />
        </div>
        <div className="md:hidden">
          <button
            className="p-1 border border-gray-500 rounded"
            onClick={() => setIsMenuOpened((prevState) => !prevState)}
          >
            <MdMenu className="text-2xl" />
          </button>
        </div>
        <nav
          className={`p-6 w-full md:w-auto md:-order-none md:p-0 md:block ${
            isMenuOpened ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:items-start">
            {LINKS.map(({ text, to }) => (
              <li key={text} className="px-4 text-lg">
                <NavLink to={to}>{text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`md:hidden border border-gray-700 border-b-0 w-full mb-4 ${
            isMenuOpened ? "block" : "hidden"
          }`}
        />
        <div
          className={`w-full flex-col md:flex md:flex-1 md:flex-row ${
            isMenuOpened ? "flex" : "hidden"
          }`}
        >
          <Button
            variant="tertiary"
            className="mb-4 md:mb-0 md:ml-auto md:mr-3"
          >
            Sign in
          </Button>
          <Button variant="primary">Sign up</Button>
        </div>
      </div>
    </header>
  );
};
