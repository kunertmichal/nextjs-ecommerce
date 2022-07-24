import React from "react";
import Image from "next/image";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { NextSeo } from "next-seo";
import {
  GetProductBySlugDocument,
  GetProductBySlugQuery,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from "../../generated/graphql";
import { apolloClient } from "../../graphql/apolloClient";

const ProductPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Unable to fetch data for this product</div>;
  }

  return (
    <>
      <NextSeo
        title={data.name}
        description={data.description}
        canonical={`https://naszsklep.vercel.app/products/${data.slug}`}
        openGraph={{
          url: `https://naszsklep.vercel.app/products/${data.slug}`,
          title: data.name,
          description: data.description,
          images: [
            {
              url: data.images[0].url,
              alt: data.name,
              type: "image/jpeg",
            },
          ],
          site_name: "Kunert Shop",
        }}
      />
      <div className="lg:flex gap-16 py-16 container mx-auto">
        <div className="mx-auto w-full mb-16 max-w-xs lg:max-w-none flex-1">
          <Image
            src={data.images[0].url}
            alt={data.name}
            layout="responsive"
            width={500}
            height={500}
            max-width="800px"
            objectFit="contain"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800">{data.name}</h1>
          <p className="text-gray-400 text-xl">Category</p>
          <div className="flex text-xl my-8">
            <div className="font-bold mr-9">{data.price}$</div>
          </div>
          <p>{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });

  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productId: product.slug,
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
      notFound: true,
    };
  }

  const { data } = await apolloClient.query<GetProductBySlugQuery>({
    variables: {
      slug: params.productId,
    },
    query: GetProductBySlugDocument,
  });

  if (!data || !data.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
      },
    },
  };
};
