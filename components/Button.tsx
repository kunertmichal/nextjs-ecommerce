import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant: "primary" | "secondary" | "tertiary";
  className?: string;
}

const variants = {
  primary: "bg-teal-500",
  secondary: "bg-gray-100 text-black",
  tertiary: "hover:bg-gray-50 hover:text-black",
};

export const Button = ({ children, variant, className }: Props) => {
  return (
    <button
      className={`py-2 px-5 rounded duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
