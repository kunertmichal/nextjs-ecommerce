import { ReactNode } from "react";

interface Props {
  onClick?: () => void;
  children: ReactNode;
  isActive?: boolean;
}

export const PaginationItem = ({ onClick, children, isActive }: Props) => {
  return (
    <li
      className={`flex justify-center items-center text-sm font-semibold h-8 w-8 rounded cursor-pointer ${
        isActive ? "text-white bg-teal-400" : "text-gray-400"
      }`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};
