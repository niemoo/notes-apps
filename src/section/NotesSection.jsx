import React from 'react';
import NotesList from '../components/NotesList';

const NotesSection = ({ dataSets, deleteFunction }) => {
  return (
    <>
      <div className="mx-auto flex flex-wrap justify-center mt-16 ">
        <NotesList dataSets={dataSets} deleteFunction={deleteFunction} />
      </div>
    </>
  );
};
export default NotesSection;
