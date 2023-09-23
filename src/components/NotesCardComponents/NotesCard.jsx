import React from 'react';
import HeaderCard from './HeaderCard';
import BodyCard from './BodyCard';
import ButtonCard from './ButtonCard';

const NotesCard = ({ id, title, createdAt, body, deleteFunction }) => {
  return (
    <>
      <div className="relative max-w-sm space-y-1 m-5 rounded-lg border border-gray-300 w-64 shadow bg-white">
        <HeaderCard title={title} createdAt={createdAt} />
        <BodyCard body={body} />
        <ButtonCard id={id} deleteFunction={deleteFunction} />
      </div>
    </>
  );
};

export default NotesCard;
