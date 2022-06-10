import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <h1 className="mt-10 text-3xl">siema!!</h1>
    </>
  );
}

export default MyApp;
