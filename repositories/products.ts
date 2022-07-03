import axios from "axios";

export interface Product {
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

const API_URL = "https://naszsklep-api.vercel.app/api";

export const productsRepository = {
  getAll: async (take = 25, offset = 0) => {
    const response = await axios.get<Product[]>(`${API_URL}/products`, {
      params: {
        take,
        offset,
      },
    });

    console.log(response.data);

    return response.data;
  },
  getById: async (id: string | string[] | undefined) => {
    const response = await axios.get<Product>(`${API_URL}/products/${id}`);

    return response.data;
  },
};
