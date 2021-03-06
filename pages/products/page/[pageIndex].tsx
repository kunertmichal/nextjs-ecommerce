import React from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { productsRepository } from "../../../repositories/products";
import { ProductCard } from "../../../components/ProductCard";
import { Pagination } from "../../../components/Pagination";
import { Filters } from "../../../components/Filters";

const PRODUCTS_PER_PAGE = 25;

const ProductsPerPage = ({
  products,
  pageIndex,
  allProductsNumb,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
          {products?.map(({ id, title, image, rating, price, category }) => {
            return (
              <Link key={id} href={`/products/${id}`}>
                <a key={id}>
                  <ProductCard
                    data={{
                      id,
                      title,
                      image,
                      price,
                      category,
                      rating,
                    }}
                  />
                </a>
              </Link>
            );
          })}
        </div>
        <Pagination
          totalCount={allProductsNumb || PRODUCTS_PER_PAGE}
          currentPage={pageIndex || 1}
          pageSize={PRODUCTS_PER_PAGE}
          siblingCount={1}
        />
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

  const pageIndex = Number(params.pageIndex);
  const offset = (pageIndex - 1) * PRODUCTS_PER_PAGE;

  const checkingValue = 5000;
  let allProductsNumb = 0;
  let index = 0;

  while (true) {
    const products = await productsRepository.getAll(
      checkingValue,
      checkingValue * index
    );

    index += 1;
    allProductsNumb += products.length;

    if (products.length < checkingValue) {
      break;
    }
  }

  const products = await productsRepository.getAll(PRODUCTS_PER_PAGE, offset);

  return {
    props: {
      products: products,
      pageIndex,
      allProductsNumb,
    },
  };
};
