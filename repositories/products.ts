import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  longDescription: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface GetAllArgs {
  take: number;
  offset: number;
}

export const productsRepository = {
  getAll: async (params: GetAllArgs | string) => {
    const response = await axios.get<Product[]>(
      "https://naszsklep-api.vercel.app/api/products",
      { params }
    );

    return response;
  },
};
