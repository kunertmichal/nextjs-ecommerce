import { useQuery } from "react-query";
import { Layout } from "../../components/Layout";
import { ProductCard } from "../../components/ProductCard";
import productsRepository from "../../repositories/products";

// https://naszsklep-api.vercel.app/api/products

const ProductsPage = () => {
  const { data, isLoading, error } = useQuery(
    "products",
    productsRepository.getAll
  );

  if (isLoading) {
    return <Layout>Loading...</Layout>;
  }

  if (!data || error) {
    <Layout>Unable to fetch products</Layout>;
  }

  return (
    <Layout>
      <>
        <h1 className="mb-10 text-4xl font-bold text-gray-800">Our products</h1>
        <div className="grid grid-cols-4">
          {data?.map(({ id, title, image, rating, price, category }) => {
            return (
              <ProductCard
                key={id}
                data={{
                  id,
                  title,
                  image,
                  price,
                  category,
                  rating,
                }}
              />
            );
          })}
        </div>
      </>
    </Layout>
  );
};

export default ProductsPage;
