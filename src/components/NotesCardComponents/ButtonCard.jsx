import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';

const ButtonCard = ({ id, archiveFunction, deleteFunction }) => {
  return (
    <div className="absolute inset-x-0 bottom-0">
      <button className="w-1/2 rounded-bl-lg py-1 border border-gray-500 hover:opacity-50" onClick={() => archiveFunction(id)}>
        <FontAwesomeIcon icon={faBoxArchive} />
      </button>
      <button className="w-1/2 rounded-br-lg py-1 border border-gray-500 hover:opacity-50" onClick={() => deleteFunction(id)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default ButtonCard;
