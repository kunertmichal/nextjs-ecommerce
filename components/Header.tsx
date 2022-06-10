import Link from "next/link";
import { Button } from "./Button";

const LINKS = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
];

export const Header = () => {
  return (
    <header className="flex justify-between items-center border-b-2 border-gray-100 bg-gray-800 text-white py-6 px-4">
      <div>LOGO</div>
      <nav>
        <ul className="flex">
          {LINKS.map(({ text, to }) => (
            <li key={text} className="px-4 text-lg">
              <Link href={to}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="tertiary">Sign in</Button>
        <Button variant="primary">Sign up</Button>
      </div>
    </header>
  );
};
