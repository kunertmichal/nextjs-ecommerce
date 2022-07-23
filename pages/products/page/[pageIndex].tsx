import React from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { apolloClient } from "../../../graphql/apolloClient";
import {
  GetProductListQuery,
  GetProductListDocument,
} from "../../../generated/graphql";
import { ProductCard } from "../../../components/ProductCard";
import { Pagination } from "../../../components/Pagination";
import { Filters } from "../../../components/Filters";

const PRODUCTS_PER_PAGE = 25;

const ProductsPerPage = ({
  products,
  pageIndex,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!products) {
    return <div>No content</div>;
  }

  return (
    <div className="-ml-8">
      <div
        className="fixed w-64 hidden sm:block"
        style={{ height: "calc(100vh - 76px)", top: "76px", left: "0" }}
      >
        <Filters />
      </div>
      <div className="sm:ml-64 pl-8 py-16">
        <h1 className="mb-16 text-4xl font-bold text-gray-800">Our products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {products.map(({ name, images, price, slug }) => {
            return (
              <Link key={slug} href={`/products/${slug}`}>
                <a>
                  <ProductCard
                    data={{
                      id: slug,
                      name,
                      image: images[0].url,
                      price,
                    }}
                  />
                </a>
              </Link>
            );
          })}
        </div>
        {/* <Pagination
          totalCount={allProductsNumb || PRODUCTS_PER_PAGE}
          currentPage={pageIndex || 1}
          pageSize={PRODUCTS_PER_PAGE}
          siblingCount={1}
        /> */}
      </div>
    </div>
  );
};

export default ProductsPerPage;

export const getStaticPaths = () => {
  return {
    paths: Array(5)
      .fill(null)
      .map((_, index) => ({ params: { pageIndex: (index + 1).toString() } })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ pageIndex: string }>) => {
  if (!params?.pageIndex) return { props: {}, notFound: true };

  const { data } = await apolloClient.query<GetProductListQuery>({
    query: GetProductListDocument,
  });

  return {
    props: {
      products: data.products,
      pageIndex: params.pageIndex,
    },
  };
};
