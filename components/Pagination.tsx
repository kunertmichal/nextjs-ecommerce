import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { usePagination, DOTS } from "../hooks/usePagination";
import { PaginationItem } from "./PaginationItem";

interface Props {
  onPageChange: (currentPage: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
  isDisabled: boolean;
}

export const Pagination = ({
  onPageChange,
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

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  if (
    currentPage === 0 ||
    (Array.isArray(paginationRange) && paginationRange.length < 2)
  ) {
    return null;
  }

  return (
    <nav>
      <ul className="flex">
        <PaginationItem onClick={onPrevious}>
          <MdKeyboardArrowLeft />
        </PaginationItem>
        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <PaginationItem key={index}>&#8230;</PaginationItem>;
          }

          if (typeof pageNumber === "number") {
            return (
              <PaginationItem
                key={index}
                isActive={pageNumber === currentPage}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </PaginationItem>
            );
          }
        })}
        <PaginationItem onClick={onNext}>
          <MdKeyboardArrowRight />
        </PaginationItem>
      </ul>
    </nav>
  );
};
