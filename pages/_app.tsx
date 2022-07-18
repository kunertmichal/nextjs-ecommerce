import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import SEO from "../next-seo.config";
import { CartStateContextProvider } from "../context/cartContext";
import { Layout } from "../components/Layout";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartStateContextProvider>
      <Layout>
        <DefaultSeo {...SEO} />
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
        </QueryClientProvider>
        <Toaster />
      </Layout>
    </CartStateContextProvider>
  );
}

export default MyApp;
