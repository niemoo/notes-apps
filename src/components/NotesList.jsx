import React from 'react';
import { showFormattedDate } from '../utils';
import NotesCard from './NotesCardComponents/NotesCard';

const NotesList = ({ dataSets, deleteFunction }) => {
  // SET NEW ARRAY OBJECT FORMATTED DATE
  const newDatas = dataSets.map((data) => ({
    ...data,
    createdAt: showFormattedDate(data.createdAt),
  }));

  return (
    <>
      {newDatas.map((data) => (
        <NotesCard key={data.id} deleteFunction={deleteFunction} archived={data.archived} {...data} />
      ))}
    </>
  );
};

export default NotesList;
