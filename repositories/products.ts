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

const API_URL = "https://naszsklep-api.vercel.app/api";

export const productsRepository = {
  getAll: async (params: GetAllArgs | string) => {
    const response = await axios.get<Product[]>(`${API_URL}/products`, {
      params,
    });

    return response.data;
  },
  getById: async (id: string | string[] | undefined) => {
    const response = await axios.get<Product>(`${API_URL}/products/${id}`);

    return response.data;
  },
};
