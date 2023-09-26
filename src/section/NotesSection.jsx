import React from 'react';
import NotesList from '../components/NotesList';

const NotesSection = ({ dataSets, deleteFunction, archiveFunction, archivedData }) => {
  return (
    <>
      <div>
        <NotesList dataSets={dataSets} deleteFunction={deleteFunction} archiveFunction={archiveFunction} archivedData={archivedData} />
      </div>
    </>
  );
};
export default NotesSection;
