interface Props {
  data: {
    id: number;
    image: string;
    title: string;
    price: string;
    category: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

export const ProductCard = ({ data }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center shadow-md rounded-lg p-8">
      <img src={data.image} alt={data.title} className="max-h-64" />
      <h2 className="text-xl font-semibold mt-12">{data.title}</h2>
      <p className="text-gray-400">{data.category}</p>
      <div className="flex mt-4">
        <p className="font-bold mr-9">{data.price}$</p>
        <p className="text-gray-400">
          <span>{data.rating.rate}</span> / <span>5</span> ({data.rating.count}{" "}
          reviews)
        </p>
      </div>
    </div>
  );
};
