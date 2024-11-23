import React from 'react';

function Filter({ onFilterChange, currentFilter }) {
  const filters = ['All', 'Completed', 'Pending'];

  return (
    <div>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          style={{
            fontWeight: filter === currentFilter ? 'bold' : 'normal',
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Filter;
