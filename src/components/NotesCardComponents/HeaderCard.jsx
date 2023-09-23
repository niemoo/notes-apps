import React from 'react';

const HeaderCard = ({ title, createdAt }) => {
  return (
    <div className="px-2 pt-2">
      <p className="text-lg font-bold text-gray-800">{title}</p>
      <p className="text-xs text-gray-500 font-medium mb-1">{createdAt}</p>
      <hr />
    </div>
  );
};

export default HeaderCard;
