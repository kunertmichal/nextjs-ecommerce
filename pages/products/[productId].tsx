import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Layout } from "../../components/Layout";
import { productsRepository } from "../../repositories/products";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  const { data, isLoading, error } = useQuery(
    "singleProduct",
    () => productsRepository.getById(productId),
    { enabled: router.isReady }
  );

  if (isLoading) {
    return <Layout>Loading...</Layout>;
  }

  if (!data || error) {
    <Layout>Unable to fetch products</Layout>;
  }

  return (
    <Layout>
      <div className="md:columns-2 gap-16">
        <div className="mx-auto mb-16 max-w-xs md:max-w-none">
          <img src={data?.image} alt={data?.title} />
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
