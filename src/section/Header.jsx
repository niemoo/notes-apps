import React from 'react';
import SearchNotes from '../components/HeaderComponents/SearchNotes';

const Header = ({ onSearchTitle }) => {
  return (
    <div className="p-5">
      <div className="flex">
        <p className="text-3xl font-bold">Notes</p>
        <div className="ml-auto">
          <SearchNotes onSearchTitle={onSearchTitle} />
        </div>
      </div>
      <hr className="mt-3" />
    </div>
  );
};

export default Header;
