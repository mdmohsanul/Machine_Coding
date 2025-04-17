import React from "react";
import { PAGE_SIZE } from "../Constants";

const Pagination = ({ setCurrentPage, currentPage, totalProducts }) => {
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const changePageHandler = (n) => {
    setCurrentPage(n);
  };
  const leftArrowHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const rightArrowHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={leftArrowHandler} disabled={currentPage === 0}>
        ◀
      </button>
      {[...Array(noOfPages).keys()].map((n) => (
        <button
          key={n}
          className={`pageNo ${n === currentPage ? "active" : ""}`}
          onClick={() => changePageHandler(n)}
        >
          {n}
        </button>
      ))}
      <button
        onClick={rightArrowHandler}
        disabled={currentPage === noOfPages - 1}
      >
        ▶
      </button>
    </>
  );
};

export default Pagination;
