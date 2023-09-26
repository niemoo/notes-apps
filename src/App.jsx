import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import AddNotesSection from './section/AddNotesSection';
import Header from './section/Header';
import NotesSection from './section/NotesSection';
import { getInitialData } from './utils';

function App() {
  const [datas, setDatas] = useState(getInitialData);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);

  const valueSearch = (e) => {
    e.preventDefault();
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const onSubmitNotes = ({ title, body }) => {
    setDatas((prevData) => [
      ...prevData,
      {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      },
    ]);
  };

  // FUNCTION TO DELETE NOTES AND SET THE DATAS
  const onDeletedNotes = (id) => {
    // MENGHAPUS DATA BERDASARKAN ID YANG SAMA
    const updatedNotes = datas.filter((data) => data.id !== id);
    setDatas(updatedNotes);
  };

  const onArchivedNotes = (id) => {
    const updatedNotes = datas.map((data) => {
      // MENGUBAH DATA.ARCHIVED MENJADI TRUE/FALSE
      if (data.id === id) {
        return { ...data, archived: !data.archived };
      }
      // MENGEMBALIKAN SEMUA DATA
      return data;
    });
    setDatas(updatedNotes);
  };

  // LANJUTAN UNTUK SEARCH
  useEffect(() => {
    const filtered = datas.filter((data) => data.title.toLowerCase().includes(searchQuery));
    setFilteredNotes(filtered);
  }, [searchQuery, datas]);

  const archivedData = datas.filter((data) => data.archived === true);

  return (
    <>
      <div>
        <Header onSearchTitle={valueSearch} />
        <AddNotesSection AddNotesHandler={onSubmitNotes} />
        <NotesSection dataSets={filteredNotes} deleteFunction={onDeletedNotes} archiveFunction={onArchivedNotes} archivedData={archivedData} />
      </div>
    </>
  );
}

export default App;
