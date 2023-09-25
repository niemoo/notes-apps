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

  useEffect(() => {
    console.log(searchQuery);
    console.log(datas);
  }, [searchQuery, datas]);

  const valueSearch = (e) => {
    e.preventDefault();
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === '') {
      setDatas(getInitialData);
    } else {
      // Filter the data based on the search query
      setDatas((prevData) => prevData.filter((data) => data.title.toLowerCase().includes(searchQuery)));
    }
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
  const deletedNotes = (id) => {
    const updatedNotes = datas.filter((data) => data.id !== id);
    setDatas(updatedNotes);
  };

  return (
    <>
      <div>
        <Header onSearchTitle={valueSearch} />
        <AddNotesSection AddNotesHandler={onSubmitNotes} />
        <NotesSection dataSets={datas} deleteFunction={deletedNotes} />
      </div>
    </>
  );
}

export default App;
