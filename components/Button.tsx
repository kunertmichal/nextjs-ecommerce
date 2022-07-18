import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "square" | "md" | "full";
  icon?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const variants = {
  primary: "bg-teal-500 text-white",
  secondary: "bg-gray-100 text-black",
  tertiary: "bg-gray-100",
};

const sizes = {
  square: "w-10",
  md: "px-5",
  full: "w-full",
};

export const Button = ({
  children,
  variant,
  size,
  icon,
  className,
  onClick,
}: Props) => {
  const variantClass = variant ? variants[variant] : variants.primary;
  const sizeClass = size ? sizes[size] : sizes.md;
  const iconClass = icon ? "inline-flex items-center justify-center" : "";

  return (
    <button
      className={`h-10 rounded transition-colors duration-300 ${variantClass} ${sizeClass} ${iconClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
