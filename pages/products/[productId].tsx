import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Layout } from "../../components/Layout";
import { productsRepository } from "../../repositories/products";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const { data, isLoading, error } = useQuery("singleProduct", () =>
    productsRepository.getById(productId)
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
          <img src={data?.data.image} alt={data?.data.title} />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            {data?.data.title}
          </h1>
          <p className="text-gray-400 text-xl">{data?.data.category}</p>
          <div className="flex text-xl my-8">
            <div className="font-bold mr-9">{data?.data.price}$</div>
            <div>
              {data?.data.rating.rate} / {data?.data.rating.count}
            </div>
          </div>
          <p>{data?.data.longDescription}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
