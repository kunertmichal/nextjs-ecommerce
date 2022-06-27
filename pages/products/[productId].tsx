import React from "react";
import Image from "next/image";
import { Layout } from "../../components/Layout";
import { productsRepository } from "../../repositories/products";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

const ProductPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <Layout>Unable to fetch data for this product</Layout>;
  }

  return (
    <Layout>
      <div className="md:columns-2 gap-16">
        <div className="mx-auto mb-16 max-w-xs md:max-w-none">
          <Image
            src={data.image}
            alt={data.title}
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{data?.title}</h1>
          <p className="text-gray-400 text-xl">{data?.category}</p>
          <div className="flex text-xl my-8">
            <div className="font-bold mr-9">{data?.price}$</div>
            <div>
              {data?.rating.rate} / {data?.rating.count}
            </div>
          </div>
          <p>{data?.longDescription}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const products = await productsRepository.getAll(25, 0);

  return {
    paths: products.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ productId: string }>) => {
  if (!params?.productId) {
    return {
      props: {},
    };
  }

  const response = await productsRepository.getById(params.productId);

  return {
    props: {
      data: response,
    },
  };
};
