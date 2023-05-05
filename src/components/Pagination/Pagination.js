import React from "react";

const Pagination = ({ setPageNumber }) => {
  let previous = () => {
    setPageNumber((x) => x--);
  };
  let next = () => {
    setPageNumber((x) => x++);
  };

  return (
    <div className="container d-flex justify-content-center gap-5 my">
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
