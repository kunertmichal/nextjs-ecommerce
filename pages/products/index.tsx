import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";
import { Layout } from "../../components/Layout";
import { Pagination } from "../../components/Pagination";
import { ProductCard } from "../../components/ProductCard";
import { productsRepository } from "../../repositories/products";

const PRODUCTS_PER_PAGE = 25;

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Layout>
      <>
        <h1 className="mb-16 text-4xl font-bold text-gray-800">Our products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-16">
          {data?.map(({ id, title, image, rating, price, category }) => {
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
          totalCount={4000}
          currentPage={currentPage}
          pageSize={25}
          siblingCount={1}
          onPageChange={setCurrentPage}
        />
      </>
    </Layout>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  const products = await productsRepository.getAll();

  return {
    props: {
      data: products,
    },
  };
};
