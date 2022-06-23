import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { usePagination, DOTS } from "../hooks/usePagination";
import { PaginationItem } from "./PaginationItem";

interface Props {
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
}

export const Pagination = ({
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
}: Props) => {
  const paginationRange: (string | number)[] | undefined = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (
    currentPage === 0 ||
    (Array.isArray(paginationRange) && paginationRange.length < 2)
  ) {
    return null;
  }

  return (
    <nav>
      <ul className="flex">
        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <PaginationItem key={index}>...</PaginationItem>;
          }

          if (typeof pageNumber === "number") {
            return (
              <PaginationItem
                key={index}
                isActive={pageNumber === currentPage}
                page={pageNumber}
              >
                {pageNumber}
              </PaginationItem>
            );
          }
        })}
      </ul>
    </nav>
  );
};
