import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Main = ({ children }: Props) => {
  return (
    <main className="flex-grow py-16 px-8">
      <div className="container mx-auto">{children}</div>
    </main>
  );
};
