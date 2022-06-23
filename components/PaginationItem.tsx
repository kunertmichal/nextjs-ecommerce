import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  onClick?: () => void;
  children: ReactNode;
  isActive?: boolean;
  page?: number;
}

export const PaginationItem = ({
  onClick,
  children,
  isActive,
  page,
}: Props) => {
  return (
    <li
      className={`flex justify-center items-center text-sm font-semibold rounded cursor-pointer ${
        isActive ? "text-white bg-teal-400" : "text-gray-400"
      }`}
      onClick={onClick}
    >
      <Link href={`/products/page/${page}`}>
        <a className="h-8 w-8 flex items-center justify-center">{children}</a>
      </Link>
    </li>
  );
};
