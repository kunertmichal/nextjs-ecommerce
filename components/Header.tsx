import React from "react";
import { MdMenu, MdShoppingCart, MdManageAccounts } from "react-icons/md";
import { Button } from "./Button";
import { MainLogo } from "./MainLogo";
import { NavLink } from "./NavLink";

const LINKS = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "All products",
    to: "/products/page/1",
    pattern: "/products/",
  },
];

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  return (
    <header className="py-5 px-4 border border-gray-200 shadow-md">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex-1 flex items-center">
          <MainLogo color="text-black" />
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
            {LINKS.map(({ text, to, pattern }) => (
              <li key={text} className="px-4 text-lg">
                <NavLink to={to} isActivePattern={pattern}>
                  {text}
                </NavLink>
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
          className={`w-full justify-center md:flex md:flex-1 md:flex-row ${
            isMenuOpened ? "flex" : "hidden"
          }`}
        >
          <Button size="square" icon className="md:ml-auto mr-3">
            <MdShoppingCart />
          </Button>
          <Button size="square" icon>
            <MdManageAccounts />
          </Button>
        </div>
      </div>
    </header>
  );
};
