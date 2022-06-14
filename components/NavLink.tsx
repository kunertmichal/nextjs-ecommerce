import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  to: string;
  children: ReactNode;
}

export const NavLink = ({ to, children }: Props) => {
  const router = useRouter();
  const isSelected = router.pathname === to;

  return (
    <Link href={to}>
      <a className={isSelected ? "text-white" : "text-gray-400"}>{children}</a>
    </Link>
  );
};
