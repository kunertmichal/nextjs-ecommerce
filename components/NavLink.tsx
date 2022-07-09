import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  to: string;
  children: ReactNode;
  isActivePattern?: string;
}

export const NavLink = ({ to, children, isActivePattern }: Props) => {
  const router = useRouter();
  let isSelected = false;

  if (isActivePattern?.length) {
    isSelected = router.asPath.includes(isActivePattern);
  } else {
    isSelected = router.asPath === to;
  }

  return (
    <Link href={to}>
      <a className={isSelected ? "text-black" : "text-gray-400"}>{children}</a>
    </Link>
  );
};
