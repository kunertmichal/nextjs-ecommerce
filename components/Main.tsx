import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Main = ({ children }: Props) => {
  return (
    <main className="flex-grow py-16 p-4 bg-orange-50">
      <div className="container mx-auto">{children}</div>
    </main>
  );
};
