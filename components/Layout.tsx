import { ReactNode } from "react";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main style={{ paddingTop: "76px" }} className="flex-grow px-8">
        {children}
      </main>
    </div>
  );
};
