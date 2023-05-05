import React from "react";

const Pagination = ({ pageNumber, setPageNumber }) => {
  let previous = () => {
    if (pageNumber === 1) return;
    setPageNumber((prev) => prev - 1);
  };
  let next = () => {
    if (pageNumber === 42) return;
    setPageNumber((nxt) => nxt + 1);
  };

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button onClick={previous} className="btn btn-info">
        Previous
      </button>
      <button onClick={next} className="btn btn-info">
        Next
      </button>
    </div>
  );
};

export default Pagination;
