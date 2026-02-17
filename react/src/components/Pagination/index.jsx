import React, { useState } from "react";
import "./style.css";
const PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;
function Pagination({
  data = [],
  renderRow,
  rowPerPage = PAGE_SIZE,
  className = "",
}) {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState(rowPerPage);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div className={`pagination ${className}`}>
      <div className="pagination-contents">
        {visibleData.map((data) => (
          <div key={data}>{renderRow(data)}</div>
        ))}
      </div>

      <div className="pagination-footer">
        <select onChange={(e) => setPageSize(e.target.value)}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>
          First
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default Pagination;
