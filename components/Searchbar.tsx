import { MdSearch } from "react-icons/md";

interface Props {
  className?: string;
}

export const Searchbar = ({ className }: Props) => {
  return (
    <div
      className={`flex h-10 rounded border border-gray-300 min-w-0 ${className}`}
    >
      <div className="h-10 w-10 flex items-center justify-center flex-shrink-0">
        <MdSearch className="text-xl" />
      </div>
      <input
        type="text"
        className="rounded-r focus:outline-none min-w-0 pr-4"
        placeholder="Search a product..."
      />
    </div>
  );
};
