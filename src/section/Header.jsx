import React from 'react';
import SearchNotes from '../components/HeaderComponents/SearchNotes';

const Header = ({ onSearchTitle }) => {
  return (
    <div className="p-5">
      <p className="text-3xl font-bold">Notes</p>
      <div className="right-0">
        <SearchNotes onSearchTitle={onSearchTitle} />
      </div>

      <hr />
    </div>
  );
};

export default Header;
