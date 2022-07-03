import React from "react";
import Image from "next/image";
import { productsRepository } from "../../repositories/products";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";

const ProductPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Unable to fetch data for this product</div>;
  }

  return (
    <>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://naszsklep.vercel.app/products/${data.id}`}
        openGraph={{
          url: `https://naszsklep.vercel.app/products/${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.thumbnailUrl,
              alt: data.thumbnailAlt,
              type: "image/jpeg",
            },
          ],
          site_name: "Kunert Shop",
        }}
      />
      <div className="lg:flex gap-16">
        <div className="mx-auto w-full mb-16 max-w-xs lg:max-w-none">
          <Image
            src={data.image}
            alt={data.title}
            layout="responsive"
            width={500}
            height={500}
            max-width="800px"
            objectFit="contain"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{data.title}</h1>
          <p className="text-gray-400 text-xl">{data.category}</p>
          <div className="flex text-xl my-8">
            <div className="font-bold mr-9">{data.price}$</div>
            <div>
              {data.rating.rate} / {data.rating.count}
            </div>
          </div>
          <p>{data.description}</p>
          <article className="prose-lg mt-10">
            <ReactMarkdown>{data.longDescription}</ReactMarkdown>
          </article>
        </div>
      </div>
    </>
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
