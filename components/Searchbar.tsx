import { MdSearch } from "react-icons/md";

interface Props {
  className?: string;
}

export const Searchbar = ({ className }: Props) => {
  return (
    <div className={`flex h-10 rounded border border-black ${className}`}>
      <div className="h-10 w-10 flex items-center justify-center">
        <MdSearch className="text-xl" />
      </div>
      <input
        type="text"
        className="rounded-r focus:outline-none pr-4"
        placeholder="Search for a product..."
      />
    </div>
  );
};
