import Image from "next/image";

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
    <div className="shadow-md rounded-lg p-8 text-center">
      <div>
        <Image
          src={data.image}
          alt={data.title}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </div>
      <h2 className="text-xl font-semibold mt-12">{data.title}</h2>
      <p className="text-gray-400">{data.category}</p>
      <p className="font-bold mt-4">{data.price}$</p>
    </div>
  );
};
