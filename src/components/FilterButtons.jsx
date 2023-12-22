import React from "react";
import "../App.css";

const FilterButtons = ({ onFilterChange }) => {
  return (
    <div className="my-4 flex gap-2">
      <button onClick={() => onFilterChange("all")} className="btn">
        All
      </button>
      <button onClick={() => onFilterChange("completed")} className="btn">
        Completed
      </button>
      <button onClick={() => onFilterChange("incomplete")} className="btn">
        Incomplete
      </button>
    </div>
  );
};

export default FilterButtons;
