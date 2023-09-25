import React from 'react';

const SearchNotes = ({ onSearchTitle }) => {
  return (
    <>
      <input className="p-2 border border-gray-500 rounded-lg" type="search" placeholder="Search Notes ..." onChange={onSearchTitle} />
    </>
  );
};

export default SearchNotes;
