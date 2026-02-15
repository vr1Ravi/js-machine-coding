import React, { useState } from "react";
import "./style.css";
const PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;
function Pagination({
  data = [],
  renderRow,
  pageSize = PAGE_SIZE,
  className = "",
}) {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleData = data.slice(startIndex, endIndex);

  return (
    <div className={`pagination ${className}`}>
      <div className="pagination-contents">
        {visibleData.map((data) => (
          <div key={data}>{renderRow(data)}</div>
        ))}
      </div>

      <div className="pagination-footer">
        <button onClick={() => setCurrentPage((prev) => prev - 1)}>
          Previous
        </button>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Pagination;
