interface NaszsklepApiResponse {
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

const productsRepository = {
  getAll: async () => {
    const response = await fetch(
      "https://naszsklep-api.vercel.app/api/products"
    );
    const data: NaszsklepApiResponse[] = await response.json();

    return data;
  },
};

export default productsRepository;
