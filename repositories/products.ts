import axios from "axios";

export interface Response {
  id: number;
  title: string;
  price: number;
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
    const response = await axios.get<Response[]>(`${API_URL}/products`, {
      params: {
        take,
        offset,
      },
    });

    return response.data;
  },
  getById: async (id: string | string[] | undefined) => {
    const response = await axios.get<Response>(`${API_URL}/products/${id}`);

    return response.data;
  },
};
