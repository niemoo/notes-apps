import React, { useEffect } from 'react';
import { showFormattedDate } from '../utils';
import NotesCard from './NotesCardComponents/NotesCard';

const NotesList = ({ dataSets, deleteFunction, archiveFunction, archivedData }) => {
  // SET NEW ARRAY OBJECT FORMATTED DATE
  const newDatas = dataSets.map((data) => ({
    ...data,
    createdAt: showFormattedDate(data.createdAt),
  }));

  useEffect(() => {
    console.log(newDatas);
  }, [newDatas]);

  return (
    <>
      <div className="mt-16">
        <p className="text-xl font-semibold text-center">Catatan</p>
        <hr className="w-1/6 mx-auto mb-10" />

        <div className="mx-auto flex flex-wrap justify-center">
          {newDatas.length === 0 ? (
            <p>- Tidak Ada Catatan -</p>
          ) : newDatas.filter((data) => !data.archived).length === 0 ? (
            <p>- Tidak Ada Catatan -</p>
          ) : (
            newDatas.map((data) => !data.archived && <NotesCard key={data.id} deleteFunction={deleteFunction} archiveFunction={archiveFunction} {...data} />)
          )}
        </div>
        <p className="text-xl font-semibold text-center mt-16">Arsip</p>
        <hr className="w-1/6 mx-auto mb-10" />
        <div className="mx-auto flex flex-wrap justify-center">
          {archivedData.length === 0 || dataSets.length === 0 ? (
            <p className="mb-10">- Arsip Kosong -</p>
          ) : newDatas.filter((data) => data.archived).length === 0 ? (
            <p className="mb-10">- Arsip Tidak Ditemukan -</p>
          ) : (
            newDatas.map((data) => data.archived && <NotesCard key={data.id} deleteFunction={deleteFunction} archiveFunction={archiveFunction} {...data} />)
          )}
        </div>
      </div>
    </>
  );
};

export default NotesList;
