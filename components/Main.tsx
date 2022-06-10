import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Main = ({ children }: Props) => {
  return <main className="flex-grow p-5 bg-orange-50">{children}</main>;
};
