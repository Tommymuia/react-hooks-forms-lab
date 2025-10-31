import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Filter;
