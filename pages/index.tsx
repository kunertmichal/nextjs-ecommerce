import { useQuery, gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query GetProductList {
    products {
      id
      name
      slug
      price
    }
  }
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
