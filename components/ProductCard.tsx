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
    <div>
      <strong>{data.title}</strong>
    </div>
  );
};
